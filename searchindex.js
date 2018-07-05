Search.setIndex({docnames:["Basics","Extending","Installation","Modules","Server","index"],envversion:52,filenames:["Basics.rst","Extending.rst","Installation.rst","Modules.rst","Server.rst","index.rst"],objects:{"pdsc.client":{DATABASE_DIRECTORY_VAR:[3,1,1,""],PORT_VAR:[3,1,1,""],PdsClient:[3,2,1,""],PdsHttpClient:[3,2,1,""],SERVER_VAR:[3,1,1,""]},"pdsc.client.PdsClient":{find_observations_of_latlon:[3,3,1,""],find_overlapping_observations:[3,3,1,""],query:[3,3,1,""],query_by_observation_id:[3,3,1,""]},"pdsc.ingest":{CUMIDX_EXT_PAIRS:[3,1,1,""],get_idx_file_pair:[3,4,1,""],ingest_idx:[3,4,1,""],store_metadata:[3,4,1,""],store_segment_tree:[3,4,1,""],store_segments:[3,4,1,""]},"pdsc.localization":{CtxLocalizer:[3,2,1,""],FourCornerLocalizer:[3,2,1,""],GeodesicLocalizer:[3,2,1,""],HiRiseLocalizer:[3,2,1,""],HiRiseRdrBrowseLocalizer:[3,2,1,""],HiRiseRdrLocalizer:[3,2,1,""],HiRiseRdrNoMapLocalizer:[3,2,1,""],Localizer:[3,2,1,""],MapLocalizer:[3,2,1,""],MocLocalizer:[3,2,1,""],ThemisLocalizer:[3,2,1,""],geodesic_distance:[3,4,1,""],get_localizer:[3,4,1,""],hirise_rdr_localizer:[3,4,1,""],latlon2unit:[3,4,1,""],register_localizer:[3,4,1,""],xyz2latlon:[3,4,1,""]},"pdsc.localization.CtxLocalizer":{BODY:[3,5,1,""],DEFAULT_RESOLUTION_M:[3,5,1,""]},"pdsc.localization.FourCornerLocalizer":{pixel_to_latlon:[3,3,1,""]},"pdsc.localization.GeodesicLocalizer":{BODY:[3,5,1,""],location_mask:[3,3,1,""],pixel_to_latlon:[3,3,1,""]},"pdsc.localization.HiRiseLocalizer":{CCD_TABLE:[3,5,1,""],CHANNEL_OFFSET:[3,5,1,""],DEFAULT_RESOLUTION_M:[3,5,1,""]},"pdsc.localization.HiRiseRdrBrowseLocalizer":{HIRISE_BROWSE_WIDTH:[3,5,1,""],latlon_to_pixel:[3,3,1,""],pixel_to_latlon:[3,3,1,""]},"pdsc.localization.HiRiseRdrLocalizer":{DEFAULT_RESOLUTION_M:[3,5,1,""]},"pdsc.localization.HiRiseRdrNoMapLocalizer":{DEFAULT_RESOLUTION_M:[3,5,1,""],NORMALIZED_PIXEL_SPACE:[3,5,1,""]},"pdsc.localization.Localizer":{BODY_RADIUS:[3,5,1,""],DEFAULT_RESOLUTION_M:[3,5,1,""],NORMALIZED_PIXEL_SPACE:[3,5,1,""],latlon_to_pixel:[3,3,1,""],pixel_to_latlon:[3,3,1,""]},"pdsc.localization.MapLocalizer":{MARS_RADIUS_EQUATORIAL:[3,5,1,""],MARS_RADIUS_POLAR:[3,5,1,""],latlon_to_pixel:[3,3,1,""],pixel_to_latlon:[3,3,1,""]},"pdsc.localization.MocLocalizer":{BODY:[3,5,1,""]},"pdsc.metadata":{METADATA_DB_SUFFIX:[3,1,1,""],PdsMetadata:[3,2,1,""],PdsMetadataJsonEncoder:[3,2,1,""],TIME_FORMAT:[3,1,1,""],date_decoder:[3,4,1,""],json_dumps:[3,4,1,""],json_loads:[3,4,1,""]},"pdsc.metadata.PdsMetadataJsonEncoder":{"default":[3,3,1,""]},"pdsc.segment":{INCLUSION_EPSILON:[3,1,1,""],PointQuery:[3,2,1,""],SEGMENT_DB_SUFFIX:[3,1,1,""],SEGMENT_TREE_SUFFIX:[3,1,1,""],SegmentTree:[3,2,1,""],SegmentedFootprint:[3,2,1,""],TriSegment:[3,2,1,""],TriSegmentedFootprint:[3,2,1,""]},"pdsc.segment.PointQuery":{xyz:[3,5,1,""]},"pdsc.segment.SegmentTree":{load:[3,6,1,""],query_point:[3,3,1,""],query_segment:[3,3,1,""],save:[3,3,1,""]},"pdsc.segment.TriSegment":{center:[3,3,1,""],center_latitude:[3,5,1,""],center_longitude:[3,5,1,""],distance_to_point:[3,3,1,""],includes_point:[3,3,1,""],is_inside:[3,3,1,""],normals:[3,5,1,""],overlaps_segment:[3,3,1,""],projection_plane:[3,5,1,""],radius:[3,5,1,""],xyz_points:[3,5,1,""]},"pdsc.server":{DEFAULT_SERVER_PORT:[3,1,1,""],DEFAULT_SOCKET_TIMEOUT:[3,1,1,""],PdsServer:[3,2,1,""],content_type:[3,4,1,""]},"pdsc.server.PdsServer":{query:[3,3,1,""],queryByLatLon:[3,3,1,""],queryByObservationId:[3,3,1,""],queryByOverlap:[3,3,1,""],start:[3,3,1,""]},"pdsc.table":{CtxTable:[3,2,1,""],CtxTableColumn:[3,2,1,""],HiRiseEdrTable:[3,2,1,""],HiRiseRdrTable:[3,2,1,""],HiRiseTableColumn:[3,2,1,""],MocTable:[3,2,1,""],MocTableColumn:[3,2,1,""],PdsColumnType:[3,2,1,""],PdsTable:[3,2,1,""],PdsTableColumn:[3,2,1,""],ThemisTable:[3,2,1,""],ThemisTableColumn:[3,2,1,""],ctx_determiner:[3,4,1,""],ctx_sclk:[3,4,1,""],determine_instrument:[3,4,1,""],generic_determiner:[3,4,1,""],hirise_datetime:[3,4,1,""],hirise_edr_determiner:[3,4,1,""],hirise_rdr_determiner:[3,4,1,""],moc_determiner:[3,4,1,""],moc_observation_id:[3,4,1,""],parse_table:[3,4,1,""],register_determiner:[3,4,1,""],register_table:[3,4,1,""],themis_datetime:[3,4,1,""],themis_determiner:[3,4,1,""],themis_ir_determiner:[3,4,1,""],themis_vis_determiner:[3,4,1,""]},"pdsc.table.CtxTable":{COLUMN_CLASS:[3,5,1,""]},"pdsc.table.CtxTableColumn":{SPECIAL_TYPES:[3,5,1,""]},"pdsc.table.HiRiseEdrTable":{CHECK_COLUMN_COUNT:[3,5,1,""],COLUMN_CLASS:[3,5,1,""],TABLE_OBJECT_NAME:[3,5,1,""]},"pdsc.table.HiRiseRdrTable":{COLUMN_CLASS:[3,5,1,""],TABLE_OBJECT_NAME:[3,5,1,""]},"pdsc.table.HiRiseTableColumn":{SPECIAL_TYPES:[3,5,1,""]},"pdsc.table.MocTable":{COLUMN_CLASS:[3,5,1,""]},"pdsc.table.MocTableColumn":{SPECIAL_TYPES:[3,5,1,""]},"pdsc.table.PdsTable":{CHECK_COLUMN_COUNT:[3,5,1,""],COLUMN_CLASS:[3,5,1,""],COLUMN_OBJECT_NAME:[3,5,1,""],PARSE_TABLE:[3,5,1,""],TABLE_OBJECT_NAME:[3,5,1,""],get_column:[3,3,1,""],get_column_idx:[3,3,1,""]},"pdsc.table.PdsTableColumn":{PARSE_TABLE:[3,5,1,""],SPECIAL_TYPES:[3,5,1,""],TYPE_TABLE:[3,5,1,""]},"pdsc.table.ThemisTable":{COLUMN_CLASS:[3,5,1,""]},"pdsc.table.ThemisTableColumn":{PARSE_TABLE:[3,5,1,""],SPECIAL_TYPES:[3,5,1,""]},"pdsc.util":{registerer:[3,4,1,""],standard_progress_bar:[3,4,1,""]},pdsc:{client:[3,0,0,"-"],ingest:[3,0,0,"-"],localization:[3,0,0,"-"],metadata:[3,0,0,"-"],segment:[3,0,0,"-"],server:[3,0,0,"-"],table:[3,0,0,"-"],util:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","data","Python data"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:data","2":"py:class","3":"py:method","4":"py:function","5":"py:attribute","6":"py:staticmethod"},terms:{"0x7f1ff9babaa0":[],"0x7f1ff9babb18":[],"0x7f1ff9babb90":[],"0x7f1ff9babc08":[],"0x7f5f3076daa0":[],"0x7f5f3076db18":[],"0x7f5f3076db90":[],"0x7f5f3076dc08":[],"0x7f9c5055aaa0":[],"0x7f9c5055ab18":[],"0x7f9c5055ab90":[],"0x7f9c5055ac08":[],"0x7fa4420eaaa0":[],"0x7fa4420eab18":[],"0x7fa4420eab90":[],"0x7fa4420eac08":[],"26t01":3,"byte":[2,3],"case":3,"class":[0,1,3],"default":[2,3,4],"export":5,"final":0,"float":3,"function":[1,3],"import":[0,3],"int":3,"long":3,"new":2,"return":[1,3],"static":3,"super":3,"true":[1,3],"try":3,"while":[3,4],AND:3,For:[1,2,3],One:[1,2],PDS:[1,2,3],SIS:3,The:[1,2,3,4,5],Then:3,There:[0,1,2],Uses:3,VIS:[2,3],__datetime__:3,__fmt__:3,__val__:3,_metadata:3,_segment:3,_segment_tre:3,about:3,accept:5,access:5,accord:[2,3],accur:3,achiev:3,acknowledg:5,across:3,adc_conversion_set:3,addit:[1,2,3],address:[2,3,4],adversari:3,after:[0,1,2,3],against:[3,4],agre:5,alia:3,align:1,all:[1,3,4,5],alloc:2,allow:[3,4,5],allow_nan:3,along:3,alphabet:[1,3],alreadi:1,also:[0,1,5],although:3,angl:3,ani:[1,3,5],anoth:[0,3,5],appear:1,applic:[3,5],approach:1,appropri:[1,3],approxim:3,arbitrari:3,arg:3,argument:[1,2,3,4],aris:3,arizona:[2,3],around:3,arrai:3,ascii:3,ascii_integ:3,ascii_r:3,assign:3,assoc:3,assocait:3,associ:[1,3],assum:3,assumpt:3,attack:[3,4],attempt:[2,3],attribut:[1,3],author:5,automaticali:4,avail:[1,3],averag:3,avoid:[3,4],b02_010341_1778_xi_02s005w:0,back:3,ball:3,band_numb:3,bar:3,base:[3,5],basi:3,basic:[1,5],becaus:1,been:[1,3,4],befor:[2,3,5],begin:0,behavior:[1,3],being:3,below:1,better:3,between:[0,3,5],bg12:3,bg13:3,block:3,bodi:[3,5],body_radiu:3,both:[1,2],bottom:3,bring:2,brows:3,browse_width:3,bug:2,build:[2,3],built:3,cach:3,california:5,call:[0,3],camera:1,can:[0,1,2,3,4],capabl:1,care:[3,4],cartesian:3,cat:3,catalog:3,caus:3,ccd:3,ccd_tabl:3,center:3,center_col:3,center_lat:3,center_latitud:3,center_lon:3,center_longitud:3,center_row:3,central:1,channel:3,channel_offset:3,charact:[1,3],check:[1,3],check_circular:3,check_column_count:3,cherrypi:3,circl:3,circular:3,classifi:3,client:[0,2,4,5],clock:3,clockwis:3,clone:2,code:[1,2,3],coincid:3,col:3,col_offset:3,collect:3,colon:3,column:[1,2,3],column_class:[1,3],column_nam:3,column_name_or_idx:3,column_numb:3,column_object_nam:3,command:[1,2,4],commerci:5,compact:3,compar:3,complex:0,compli:5,compliant:3,compuat:3,comput:3,concept:5,condit:[0,3],config:[1,3],configfil:1,configpath:3,configur:[3,5],confus:1,consid:1,consist:[2,3],consit:3,constraint:3,construct:[0,2,3],constructor:3,contain:[1,3],content:[3,5],content_typ:3,context:1,control:[1,5],conveni:3,convent:[1,3],convers:3,convert:[1,3],convex:3,coordiant:3,coordin:[0,1,3,5],corner1_latitud:[0,3],corner:3,correctli:3,correspond:[1,3],could:3,count:3,counter:3,counterclockwis:3,countri:5,coupl:1,cover:1,creat:3,cross:3,ctx:[0,1,2,3],ctx_determin:[1,3],ctx_sclk:3,ctxlocal:3,ctxtabl:3,ctxtablecolumn:3,cumidx_ext_pair:3,cumindex:3,cumul:[1,3,5],cumulative_index:[1,2],current:[3,4,5],custom:3,dai:3,data:[1,2,3],data_typ:3,databas:[1,2,3],database_directori:3,database_directory_var:3,date:3,date_decod:3,datetim:3,decim:3,decod:3,decompos:3,decor:[1,3],def:[1,3],defaul:4,default_resolution_m:3,default_server_port:3,default_socket_timeout:3,defin:[1,3],degre:3,depend:2,deriv:3,describ:[1,3,4],descript:[2,3],design:[3,4,5],desir:3,detail:[1,3],detect:3,detector:3,detector_nam:3,determ:3,determin:[3,4,5],determine_instru:3,determinist:3,dict:3,dictionari:3,differ:[1,3],dimens:3,dir:[1,2],direct:3,directori:[1,2,3],discontinu:3,discrep:3,displai:3,distanc:3,distance_to_point:3,doctest:3,document:[1,5],doe:[1,3],done:3,down:3,download:2,dsmap:3,dtype:3,due:3,dump:3,dure:[1,3],each:3,east:3,edg:3,edr:[1,2,3],edr_index_t:[1,3],edu:[2,3],effect:3,effici:[1,2,3],either:[2,3],element:3,elimin:3,ellipsi:3,els:3,enabl:2,encapsul:3,encod:3,ensur:3,ensure_ascii:3,entri:3,enumer:3,environ:[3,4,5],equatori:3,equirectangular:3,error:3,escap:3,esp_015909_1890:3,esp_016832_1885:3,esp_018854_1755:[0,3],esp_018920_1755:[0,3],everi:[1,3],exampl:[1,2,3,4],exce:2,except:3,expect:1,experiment:3,explicit:3,express:3,extend:[2,3,5],extens:[3,5],extension_script:1,factor:3,fall:3,fals:3,few:1,fha00469:3,fha:3,field:[0,3],figur:3,file:[1,2,3,4],filenam:3,filesystem:1,fill:3,find:[1,3],find_observations_of_latlon:[0,3],find_overlapping_observ:[0,3],first:[1,3],flag:2,flight:3,flight_direct:3,follow:[1,2,3,4],foo:3,footprint:3,foreign:5,form:[0,3],format:[1,3],forward:[1,3],found:[2,3],four:3,fourcornerloc:[1,3],fpointer:3,fraction:3,free:1,from:[0,1,2,3,5],full:3,further:3,gener:[1,2,3],generic_determin:[1,3],geodes:3,geodesic_dist:3,geodesicloc:[1,3],geographiclib:3,geometri:2,get:3,get_column:3,get_column_idx:3,get_idx_file_pair:3,get_loc:[0,3],git:2,given:[0,1,3],goe:1,good:3,govern:5,guarante:3,handl:3,handler:3,happen:3,hardwar:1,has:[1,3,4,5],have:[1,3],header:[1,3],height:3,here:2,heurist:3,hiris:[1,2,3],hirise_browse_width:3,hirise_datetim:3,hirise_edr:[1,3],hirise_edr_determin:[1,3],hirise_rdr:[0,3],hirise_rdr_determin:3,hirise_rdr_loc:3,hiriseedrt:3,hiriseloc:3,hiriserdrbrowseloc:3,hiriserdrloc:3,hiriserdrnomaploc:3,hiriserdrt:3,hirisetablecolumn:3,hold:3,hook:3,host:[3,4],hostnam:[2,3],how:[1,4],howev:1,http:[2,3,4],identifi:[3,4],ids:3,iff:3,ignor:3,imag:3,image_tim:3,implement:[1,3],implmement:3,incident:5,includ:3,includes_point:3,inclus:3,inclusion_epsilon:3,incompat:2,increas:3,indent:3,index:[1,2,3,4,5],indexerror:3,indic:3,individu:1,infin:3,infinit:3,inform:[1,2,3,5],ingest:5,ingest_idx:3,inject:[3,4],injest:3,input:3,inputfil:3,insert:3,instal:5,instanc:[1,3],institut:5,instrument:[0,2,3,5],instrument_nam:[1,3],integ:3,intend:3,interfac:[1,3],intern:3,interrupt:3,introduc:3,invert:1,invok:1,ir10:3,ir11:3,is_insid:3,isoscel:3,issu:3,item:3,item_separ:3,iter:3,its:[0,3],javascript:3,json:3,json_dump:3,json_load:3,json_str:3,jsonencod:3,jstr:3,kei:[1,3],key_separ:3,keypad:[3,4],kill:3,kind:3,kwarg:3,label:[1,3],label_fil:[1,3],last:3,lat:3,latitud:[0,1,3],latlon0:3,latlon1:3,latlon2:3,latlon2unit:3,latlon:3,latlon_to_pixel:[1,3],law:5,lbl:[1,2,3],left:3,len:[0,3],length:3,less:3,let:3,level:3,librari:1,licens:5,like:3,line:[1,2,3,4],link:2,list:[1,3],listen:3,load:3,local:[0,4,5],local_tim:3,localizer_kwarg:3,locat:[0,1,2,3,4,5],location_mask:3,logic:3,lon:3,longitud:[0,1,3],look:[1,2,3],lower:3,lpl:[2,3],made:5,magnitud:3,mai:[3,5],main:0,malici:[3,4],mani:3,map:[0,1,3],map_scal:3,maploc:[1,3],mar:[3,5],mars_radius_equatori:3,mars_radius_polar:3,match:3,matter:3,maximum:3,mean:3,meet:[],member:3,memori:3,messag:3,metadata:[0,2,5],metadata_db_suffix:3,meter:3,method:[0,1,2,3,4],might:3,minimum:3,miscellan:3,moc:[1,2,3],moc_determin:3,moc_observation_id:3,mocloc:3,moctabl:3,moctablecolumn:3,model:3,modifi:2,modul:5,modulo:3,more:[0,1,3],most:[2,3],multipl:3,must:[1,2,3,5],n_col:3,n_column:3,n_row:3,name:[1,2,3],nan:3,necessari:2,need:[1,2,3],neg:3,negoti:5,network:3,newlin:3,next:1,nomap:3,non:3,none:3,nonzero:3,normal:3,normalized_pixel_spac:3,north:3,north_azimuth_deg:3,not_applicable_const:3,note:1,number:[2,3],numer:[3,4],numpi:3,obj:3,object:3,object_hook:3,observ:[0,1,2,3,4,5],observation_id:3,observation_start_count:3,observation_start_tim:3,observaton:3,obtain:5,occasion:1,offend:2,offic:5,offset:3,often:3,omit:3,onc:3,one:[0,1,3],onli:[1,3,5],onto:3,open:[1,3],optim:3,option:[1,3],orbit:5,order:[1,2,3],organ:1,origin:3,orthonorm:3,other:[1,2,3,5],other_instru:3,otherwis:3,out:3,output:3,outputdir:3,outputfil:3,over:[3,4],overflowerror:3,overlap:[0,3,5],overlaps_seg:3,overrid:[1,3],overridden:1,p09_004477_1906_xn_10n100w:3,packag:[1,2,4,5],pair:[1,3],paramet:3,pars:[3,4,5],parse_t:3,part:1,particular:[3,5],pass:3,path:[1,2,3,4],pds:[2,3],pdsc:[0,2,4],pdsc_database_dir:[2,3,4],pdsc_ingest:[1,2],pdsc_server:4,pdsc_server_host:[2,3],pdsc_server_port:[2,3],pdsclient:[0,3],pdscolumntyp:3,pdshttpclient:3,pdsmetadata:[0,3],pdsmetadatajsonencod:3,pdsserver:3,pdstabl:[1,3],pdstablecolumn:[1,3],per:3,perform:[1,3,4],perpendicular:3,person:5,pickl:3,piec:1,pip:2,pipelin:1,pixel:[0,1,3,5],pixel_height_m:3,pixel_to_latlon:[0,1,3],pixel_width_m:3,pkl:3,place:3,plane:3,point:3,point_queri:3,pointqueri:3,polar:3,pole:3,port:[2,3,4],port_var:3,posit:3,possibl:[1,3],potenti:[3,4],practic:3,precis:3,prefix:3,preliminari:5,present:2,pretti:3,prevent:3,print:3,prior:[1,3],process:[1,2,3],produc:3,product:[1,2,3],product_id:[0,3],progress:3,progressbar:3,proj_latitud:3,proj_longitud:3,proj_typ:3,project:3,projection_plan:3,properli:[3,4],provid:[1,3,4,5],psp_005423_1780:[0,3],psp_005423_1780_color:3,psp_005423_1780_red:3,psp_007246_1890:3,psp_010341_1775:3,psp_010486_1775:3,psp_010639_1755:[0,3],purpos:5,pypd:2,pypi:2,python:[1,2,3,4,5],queri:[0,2,3,4,5],query_by_observation_id:[0,3],query_point:3,query_seg:3,querybylatlon:3,querybyobservationid:3,querybyoverlap:3,quick:[3,5],radian:3,radiu:3,rais:3,rang:3,rather:[1,3],raw:1,rdr:[1,2,3],rdr_index_t:3,rdr_local:0,read:[1,3],real:[1,3],recent:[2,3],recogn:1,recommend:2,rectangular:3,recurs:3,red0:3,red1:3,red2:3,red3:3,red4:3,red5:3,red6:3,red7:3,red8:3,red9:3,red:0,red_metadata:0,refer:3,reformat:3,regist:[1,3],register:3,register_determin:[1,3],register_loc:[1,3],register_t:[1,3],registr:[1,3],registration_dict:3,regress:3,regul:5,reinterpol:3,rel:3,releas:2,relev:1,reli:3,remot:[3,4,5],remov:3,report:3,repositori:2,repr:3,repres:3,represent:3,requir:[1,2,3,5],reserv:5,resolut:3,resolution_m:3,resolution_pix:3,respons:[3,5],result:3,revers:[1,3],review:[3,4],right:[3,5],robust:[3,4],root:2,roughli:3,row:3,row_byt:3,row_offset:3,run:[2,5],same:[2,3],sampl:3,satisfi:3,save:3,scale:3,scale_factor:3,scan_exposure_dur:2,schema:2,scheme:2,sclk:3,script:1,second:3,section:[1,4],secur:[3,4],see:[1,2,3],seem:3,segment:5,segment_db_suffix:3,segment_tree_suffix:3,segmentedfootprint:3,segmenttre:3,self:3,sens:5,sensibl:3,separ:3,sequenc:3,serial:3,serializ:3,serv:[3,4],server:[2,5],server_var:3,set:[1,2,3,4],setup:5,sever:[0,1,2,5],should:[1,2,3],shown:1,side:3,simpli:[1,3],sinc:3,singl:[1,3],size:3,skip:3,skipkei:3,slash:3,slightli:3,snake_cas:1,snippet:1,socket:[3,4],socket_host:[3,4],softwar:5,some:[2,3,4],sometim:3,sort:3,sort_kei:3,sourc:3,space:3,spacecraft:3,spacecraft_clock_start_count:3,spacecraft_clock_stop_count:3,special:3,special_typ:[1,3],specif:3,specifi:[1,2,3,4],sphere:3,spheric:3,sphinx:3,split:3,sponsorship:5,sql:[3,4],stage:1,standard:3,standard_progress_bar:3,start:[3,4],start_byt:3,start_tim:3,start_time_et:3,state:5,step:[1,2,3],stereograph:3,stop_tim:3,stop_time_et:3,store:[1,3],store_metadata:[1,3],store_seg:[1,3],store_segment_tre:3,str:3,stricter:3,string:3,structur:[2,3],sub:[1,3],subclass:[1,3],subject:5,subsampl:3,subsample_col:3,subsample_row:3,subsequ:3,subset:3,suffix:3,suppli:[1,3],support:[1,2,3,4,5],surfac:[3,5],t01_000873_1780_xi_02s005w:0,tab:[2,3],tabl:1,table_fil:3,table_object_nam:3,take:[1,3],taken:[3,4],tangent:3,target:3,technolog:5,tell:2,term:3,test:3,than:[1,3],thei:[1,2,3],themi:[2,3],themis_datetim:3,themis_determin:3,themis_ir:3,themis_ir_determin:3,themis_vi:3,themis_vis_determin:3,themisloc:3,themist:3,themistablecolumn:3,therefor:3,thi:[1,2,3,5],third:3,thorough:[3,4],those:3,three:3,through:[1,3],time:3,time_format:3,timeout:3,togeth:1,toler:3,tool:[1,2,4],top:3,total:3,traceback:3,track:3,trail:3,transfer:5,transform:[3,5],translat:3,tree:3,triangl:3,triangular:3,tripl:3,triseg:3,trisegmentedfootprint:3,tupl:3,two:[1,2,3,4],type:[1,3],type_t:3,typeerror:3,typic:3,uncorrected_sclk_start_count:3,under:1,understand:1,unicod:3,unit:[3,5],unknown_const:3,until:3,upper:3,usag:5,use:[2,3,4,5],used:[0,1,2,3],useful:[1,3],user:5,uses:[1,3],using:[0,1,3],usual:3,utf:3,util:5,uxxxx:3,valid:3,valu:[1,2,3],valueerror:3,vari:3,variabl:[3,4,5],variou:[1,3],vector:3,verbos:3,version:[2,3],vertex:3,vertic:3,vertix:3,via:[2,3,5],volum:2,vulner:[3,4],were:3,what:3,when:[2,3],where:[2,3],wherea:[1,3],whether:[1,3],which:[1,2,3],whitespac:3,whose:3,width:3,within:[1,2,3],word:1,work:3,workaroud:3,world:[1,3,5],would:3,wrap:3,write:1,xyz2latlon:3,xyz:3,xyz_point:3,yaml:[1,3],yet:[3,4],you:[0,3],zero:3},titles:["Basic Usage","Extending PDSC","Installation and Setup","Module Documentation","Running a Server","PDSC: Planetary Data System Coincidences"],titleterms:{basic:0,client:3,coincid:5,concept:1,configur:1,copyright:5,cumul:2,data:5,determin:1,document:3,environ:2,extend:1,extens:1,indic:[2,5],ingest:[1,2,3],instal:2,instrument:1,local:[1,3],metadata:[1,3],modul:3,pars:1,pdsc:[1,3,5],planetari:5,preliminari:1,run:4,segment:3,server:[3,4],setup:2,system:5,tabl:[3,5],usag:0,util:3,variabl:2}})