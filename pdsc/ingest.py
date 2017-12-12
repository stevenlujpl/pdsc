#!/usr/bin/env python
from __future__ import print_function
"""
Injests PDS metadata into database for quick querying
"""
import os
import yaml
import sqlite3

from .table import parse_table
from .metadata import PdsMetadata, METADATA_DB_SUFFIX
from .segment import (
    SEGMENT_DB_SUFFIX, SEGMENT_TREE_SUFFIX,
    TriSegmentedFootprint, SegmentTree)
from .util import standard_progress_bar

DEFAULT_CONFIG_DIR = os.path.join(
    os.path.dirname(os.path.realpath(__file__)),
    'config',
)

CUMIDX_EXT_PAIRS = (
    # Label File, Table File
    ('LBL', 'TAB'),
    ('lbl', 'tab'),
)

def get_idx_file_pair(path):
    for l_ext, t_ext in CUMIDX_EXT_PAIRS:
        if path.endswith(l_ext):
            return (
                path,
                path[:-len(l_ext)] + t_ext
            )
        elif path.endswith(t_ext):
            return (
                path[:-len(t_ext)] + l_ext,
                path
            )

    raise ValueError('"%s" not part of any known index pair' % path)

def store_metadata(outputfile, instrument, table, config):
    scale_factors = config.get('scale_factors', {})
    index = config.get('index', [])
    columns = config.get('columns', [])

    values = zip(*[
        table.get_column(c[0]) if c[0] not in scale_factors else
        scale_factors[c[0]]*table.get_column(c[0])
        for c in columns
    ])

    if os.path.exists(outputfile):
        os.remove(outputfile)

    with sqlite3.connect(outputfile) as conn:
        cur = conn.cursor()
        cur.execute(
            'CREATE TABLE metadata (%s)' %
            ', '.join(['%s %s' % tuple(c[1:]) for c in columns])
        )

        for idx_col in index:
            cur.execute(
                'CREATE INDEX %s_index ON metadata (%s)' %
                (idx_col, idx_col)
            )

        cur.executemany(
            'INSERT INTO metadata VALUES (%s)' %
            ', '.join(['?' for _ in columns]),
            values
        )

        cur.execute('SELECT * FROM metadata')
        names = [description[0] for description in cur.description]

        progress = standard_progress_bar('Converting Metadata')
        return [
            PdsMetadata(instrument, **dict(zip(names, v)))
            for v in progress(cur.fetchall())
        ]

def store_segments(outputfile, metadata, config):
    resolution = config.get('segmentation', {}).get('resolution', 50000)

    observation_ids = []
    segments = []
    progress = standard_progress_bar('Segmenting footprints')
    for m in progress(metadata):
        try:
            s = TriSegmentedFootprint(m, resolution)
            for si in s.segments:
                segments.append(si)
                observation_ids.append(s.metadata.observation_id)

        except (TypeError, ValueError):
            continue

    segment_generator = (
        (i, oid) + tuple(si.latlon_points.ravel(order='C'))
        for i, (oid, si) in enumerate(zip(observation_ids, segments))
    )

    if os.path.exists(outputfile):
        os.remove(outputfile)

    with sqlite3.connect(outputfile) as conn:
        cur = conn.cursor()
        cur.execute(
            'CREATE TABLE segments (segment_id integer, '
            'observation_id text, '
            'latitude0 real, longitude0 real, '
            'latitude1 real, longitude1 real, '
            'latitude2 real, longitude2 real)'
        )

        cur.execute('CREATE INDEX segment_index ON segments (segment_id)')
        cur.execute('CREATE INDEX observation_index ON segments (observation_id)')

        cur.executemany(
            'INSERT INTO segments VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            segment_generator
        )

    return segments

def store_segment_tree(outputfile, segments):
    tree = SegmentTree(segments)
    tree.save(outputfile)

def ingest_idx(label_file, table_file, configdir, outputdir):
    instrument, table = parse_table(label_file, table_file)
    if os.path.isdir(configdir):
        configfile = os.path.join(configdir, '%s_metadata.yaml' % instrument)
    else:
        configfile = configdir

    if not os.path.exists(configfile):
        raise ValueError(
            'Required config file "%s" does not exist' %
            configfile
        )

    with open(configfile, 'r') as f:
        config = yaml.load(f)

    outputfile = os.path.join(
        outputdir,
        '%s%s' % (instrument, METADATA_DB_SUFFIX)
    )

    metadata = store_metadata(outputfile, instrument, table, config)

    outputfile = os.path.join(
        outputdir,
        '%s%s' % (instrument, SEGMENT_DB_SUFFIX)
    )
    segments = store_segments(outputfile, metadata, config)

    outputfile = os.path.join(
        outputdir,
        '%s%s' % (instrument, SEGMENT_TREE_SUFFIX)
    )
    store_segment_tree(outputfile, segments)