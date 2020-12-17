goog.provide('datafrisk.view');
datafrisk.view.styles = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shell","shell",1402941019),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FAFAFA",new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Consolas,Monaco,Courier New,monospace",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(9999)], null),new cljs.core.Keyword(null,"strings","strings",-2055406807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#4Ebb4E"], null),new cljs.core.Keyword(null,"keywords","keywords",1526959054),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null),new cljs.core.Keyword(null,"numbers","numbers",1036309864),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"shell-visible-button","shell-visible-button",-1362287320),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#4EE24E"], null)], null);
datafrisk.view.ErrorIcon = (function datafrisk$view$ErrorIcon(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 30 42",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),"darkorange",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"d","d",1972142424),"M15 3\n           Q16.5 6.8 25 18\n           A12.8 12.8 0 1 1 5 18\n           Q13.5 6.8 15 3z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(15),new cljs.core.Keyword(null,"cy","cy",755331060),(32),new cljs.core.Keyword(null,"r","r",-471384190),(7),new cljs.core.Keyword(null,"fill","fill",883462889),"yellow"], null)], null)], null);
});
datafrisk.view.ErrorText = (function datafrisk$view$ErrorText(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"0.7em",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),text], null);
});
datafrisk.view.ExpandButton = (function datafrisk$view$ExpandButton(p__39092){
var map__39093 = p__39092;
var map__39093__$1 = (((((!((map__39093 == null))))?(((((map__39093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39093):map__39093);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39093__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39093__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39093__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 4px 5px 2px",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__39095 = (cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"contract","contract",798152745):new cljs.core.Keyword(null,"expand","expand",595248157));
var G__39096 = path;
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(G__39095,G__39096) : emit_fn.call(null,G__39095,G__39096));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.2s ease",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(expanded_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 0,100 100,50",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null)], null)], null);
});
datafrisk.view.button_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1px 3px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null);
datafrisk.view.ExpandAllButton = (function datafrisk$view$ExpandAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expand-all","expand-all",-1489416197),data) : emit_fn.call(null,new cljs.core.Keyword(null,"expand-all","expand-all",-1489416197),data));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datafrisk.view.button_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"borderTopLeftRadius","borderTopLeftRadius",-1503490700),"2px",new cljs.core.Keyword(null,"borderBottomLeftRadius","borderBottomLeftRadius",-1845172472),"2px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid darkgray"], null)], 0))], null),"Expand"], null);
});
datafrisk.view.CollapseAllButton = (function datafrisk$view$CollapseAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (emit_fn.cljs$core$IFn$_invoke$arity$1 ? emit_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"collapse-all","collapse-all",957676825)) : emit_fn.call(null,new cljs.core.Keyword(null,"collapse-all","collapse-all",957676825)));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datafrisk.view.button_style,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"borderTop","borderTop",2080227753),"1px solid darkgray",new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),"1px solid darkgray",new cljs.core.Keyword(null,"borderRight","borderRight",-873333451),"1px solid darkgray",new cljs.core.Keyword(null,"borderLeft","borderLeft",-1938358443),"0"], null)], 0))], null),"Collapse"], null);
});
datafrisk.view.CopyButton = (function datafrisk$view$CopyButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"copy","copy",-1077617309),data) : emit_fn.call(null,new cljs.core.Keyword(null,"copy","copy",-1077617309),data));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datafrisk.view.button_style,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"borderTopRightRadius","borderTopRightRadius",1530376433),"2px",new cljs.core.Keyword(null,"borderBottomRightRadius","borderBottomRightRadius",1814053058),"2px",new cljs.core.Keyword(null,"borderTop","borderTop",2080227753),"1px solid darkgray",new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),"1px solid darkgray",new cljs.core.Keyword(null,"borderRight","borderRight",-873333451),"1px solid darkgray",new cljs.core.Keyword(null,"borderLeft","borderLeft",-1938358443),"0"], null)], 0))], null),"Copy"], null);
});
datafrisk.view.NilText = (function datafrisk$view$NilText(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"nil","nil",99600501).cljs$core$IFn$_invoke$arity$1(datafrisk.view.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))], null);
});
datafrisk.view.StringText = (function datafrisk$view$StringText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"strings","strings",-2055406807).cljs$core$IFn$_invoke$arity$1(datafrisk.view.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
});
datafrisk.view.KeywordText = (function datafrisk$view$KeywordText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(datafrisk.view.styles)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null);
});
datafrisk.view.NumberText = (function datafrisk$view$NumberText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"numbers","numbers",1036309864).cljs$core$IFn$_invoke$arity$1(datafrisk.view.styles)], null),data], null);
});
datafrisk.view.KeySet = (function datafrisk$view$KeySet(keyset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,data){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.NilText], null):((typeof data === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.StringText,data], null):(((data instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.KeywordText,data], null):((typeof data === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.NumberText,data], null):cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)
))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.str,keyset)))], null);
});
datafrisk.view.Node = (function datafrisk$view$Node(p__39097){
var map__39098 = p__39097;
var map__39098__$1 = (((((!((map__39098 == null))))?(((((map__39098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39098):map__39098);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39098__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39098__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39098__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39098__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var metadata_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39098__$1,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.NilText], null):((typeof data === 'string')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),data,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function datafrisk$view$Node_$_string_changed(e){
var G__39100 = new cljs.core.Keyword(null,"changed","changed",570724917);
var G__39101 = path;
var G__39102 = e.target.value;
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__39100,G__39101,G__39102) : emit_fn.call(null,G__39100,G__39101,G__39102));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.StringText,data], null)):(((data instanceof cljs.core.Keyword))?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.name(data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function datafrisk$view$Node_$_keyword_changed(e){
var G__39103 = new cljs.core.Keyword(null,"changed","changed",570724917);
var G__39104 = path;
var G__39105 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__39103,G__39104,G__39105) : emit_fn.call(null,G__39103,G__39104,G__39105));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.KeywordText,data], null)):((cljs.core.object_QMARK_(data))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(data))].join(''):((typeof data === 'number')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"default-value","default-value",232220170),data,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function datafrisk$view$Node_$_number_changed(e){
var G__39106 = new cljs.core.Keyword(null,"changed","changed",570724917);
var G__39107 = path;
var G__39108 = Number(e.target.value);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__39106,G__39107,G__39108) : emit_fn.call(null,G__39106,G__39107,G__39108));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.NumberText,data], null)):cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)
))))),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata_paths,path));
if(cljs.core.truth_(temp__5735__auto__)){
var errors = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ErrorText,["\u00A0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)].join('')], null);
} else {
return null;
}
})()], null);
});
datafrisk.view.expandable_QMARK_ = (function datafrisk$view$expandable_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) || (cljs.core.seq_QMARK_(v)) || (cljs.core.coll_QMARK_(v)));
});
datafrisk.view.CollectionSummary = (function datafrisk$view$CollectionSummary(p__39109){
var map__39110 = p__39109;
var map__39110__$1 = (((((!((map__39110 == null))))?(((((map__39110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39110):map__39110);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39110__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.KeySet,cljs.core.keys(data)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"}"], null)], null);
} else {
if(cljs.core.set_QMARK_(data)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"#{"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," items"].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"}"], null)], null);
} else {
if(((cljs.core.seq_QMARK_(data)) || (cljs.core.vector_QMARK_(data)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.vector_QMARK_(data))?"[":"(")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," items"].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.vector_QMARK_(data))?"]":")")], null)], null);
} else {
return null;
}
}
}
});
datafrisk.view.KeyValNode = (function datafrisk$view$KeyValNode(p__39112){
var map__39113 = p__39112;
var map__39113__$1 = (((((!((map__39113 == null))))?(((((map__39113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39113):map__39113);
var vec__39114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39113__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39114,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39114,(1),null);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39113__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var metadata_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39113__$1,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39113__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39113__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var path_to_here = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
var expandable_node_QMARK_ = ((datafrisk.view.expandable_QMARK_(v)) && ((!(cljs.core.empty_QMARK_(v)))));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata_paths,path_to_here);
var expanded_QMARK_ = new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(metadata);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 20px"], null)], null),((expandable_node_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path_to_here,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.Node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),k], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"4px"], null)], null),((datafrisk.view.expandable_QMARK_(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.CollectionSummary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),v], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.Node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),v,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),path_to_here,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010),metadata_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null))], null)], null)], null)], null),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.DataFrisk,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"hide-header?","hide-header?",308656135),true,new cljs.core.Keyword(null,"data","data",-232669377),v,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),path_to_here,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010),metadata_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null):null)], null);
});
datafrisk.view.ListVecNode = (function datafrisk$view$ListVecNode(p__39118){
var map__39119 = p__39118;
var map__39119__$1 = (((((!((map__39119 == null))))?(((((map__39119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39119):map__39119);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39119__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39119__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var metadata_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39119__$1,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39119__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39119__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var hide_header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39119__$1,new cljs.core.Keyword(null,"hide-header?","hide-header?",308656135));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata_paths,path);
var expanded_QMARK_ = new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(metadata);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column"], null)], null),(cljs.core.truth_(hide_header_QMARK_)?null:new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-1em",new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"height","height",1025178622),"1.2em"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ErrorIcon], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.vector_QMARK_(data))?"[":"(")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," items"].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.vector_QMARK_(data))?"]":")")], null)], null)], null)),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 0 0 20px"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ErrorText,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(metadata)], null)], null):null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),x,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010),metadata_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),data)], null):null)], null);
});
datafrisk.view.SetNode = (function datafrisk$view$SetNode(p__39121){
var map__39122 = p__39121;
var map__39122__$1 = (((((!((map__39122 == null))))?(((((map__39122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39122):map__39122);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39122__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39122__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var metadata_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39122__$1,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39122__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39122__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var hide_header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39122__$1,new cljs.core.Keyword(null,"hide-header?","hide-header?",308656135));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata_paths,path);
var expanded_QMARK_ = new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(metadata);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column"], null)], null),(cljs.core.truth_(hide_header_QMARK_)?null:new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-1em",new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"height","height",1025178622),"1.2em"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ErrorIcon], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"#{"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," items"].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"}"], null)], null)], null)),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"20px"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ErrorText,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(metadata)], null)], null):null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),x,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010),metadata_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),data)], null):null)], null);
});
datafrisk.view.MapNode = (function datafrisk$view$MapNode(p__39124){
var map__39125 = p__39124;
var map__39125__$1 = (((((!((map__39125 == null))))?(((((map__39125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39125):map__39125);
var all = map__39125__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39125__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39125__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var metadata_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39125__$1,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39125__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var hide_header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39125__$1,new cljs.core.Keyword(null,"hide-header?","hide-header?",308656135));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata_paths,path);
var expanded_QMARK_ = new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(metadata);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column"], null)], null),(cljs.core.truth_(hide_header_QMARK_)?null:new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-1em",new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"height","height",1025178622),"1.2em"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ErrorIcon], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.KeySet,cljs.core.keys(data)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"}"], null)], null)], null)),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"20px"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ErrorText,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(metadata)], null)], null):null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.KeyValNode,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,new cljs.core.Keyword(null,"data","data",-232669377),x)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__39127){
var vec__39128 = p__39127;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39128,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39128,(1),null);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
}),data))], null):null)], null);
});
datafrisk.view.DataFrisk = (function datafrisk$view$DataFrisk(p__39131){
var map__39132 = p__39131;
var map__39132__$1 = (((((!((map__39132 == null))))?(((((map__39132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39132):map__39132);
var all = map__39132__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39132__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.MapNode,all], null);
} else {
if(cljs.core.set_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.SetNode,all], null);
} else {
if(((cljs.core.seq_QMARK_(data)) || (cljs.core.vector_QMARK_(data)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ListVecNode,all], null);
} else {
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IDeref$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.DataFrisk,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(data))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.Node,all], null)], null);

}
}
}
}
});
datafrisk.view.conj_to_set = (function datafrisk$view$conj_to_set(coll,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = coll;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),x);
});
datafrisk.view.expand_all_paths = (function datafrisk$view$expand_all_paths(root_value,current_expanded_paths){
var remaining = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"node","node",581201198),root_value], null)], null);
var expanded_paths = current_expanded_paths;
while(true){
if(cljs.core.seq(remaining)){
var vec__39143 = remaining;
var seq__39144 = cljs.core.seq(vec__39143);
var first__39145 = cljs.core.first(seq__39144);
var seq__39144__$1 = cljs.core.next(seq__39144);
var current = first__39145;
var rest = seq__39144__$1;
var current_node = (((function (){var G__39146 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current);
if((!((G__39146 == null)))){
if((((G__39146.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === G__39146.cljs$core$IDeref$)))){
return true;
} else {
if((!G__39146.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__39146);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__39146);
}
})())?cljs.core.deref(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current)):new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current));
if(cljs.core.map_QMARK_(current_node)){
var G__39191 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__39143,seq__39144,first__39145,seq__39144__$1,current,rest,current_node){
return (function (p__39147){
var vec__39148 = p__39147;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39148,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),k),new cljs.core.Keyword(null,"node","node",581201198),v], null);
});})(remaining,expanded_paths,vec__39143,seq__39144,first__39145,seq__39144__$1,current,rest,current_node))
,current_node));
var G__39192 = cljs.core.assoc_in(expanded_paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),true);
remaining = G__39191;
expanded_paths = G__39192;
continue;
} else {
if(((cljs.core.seq_QMARK_(current_node)) || (cljs.core.vector_QMARK_(current_node)) || (cljs.core.set_QMARK_(current_node)))){
var G__39193 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__39143,seq__39144,first__39145,seq__39144__$1,current,rest,current_node){
return (function (i,node){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),i),new cljs.core.Keyword(null,"node","node",581201198),node], null);
});})(remaining,expanded_paths,vec__39143,seq__39144,first__39145,seq__39144__$1,current,rest,current_node))
,current_node));
var G__39194 = cljs.core.assoc_in(expanded_paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),true);
remaining = G__39193;
expanded_paths = G__39194;
continue;
} else {
var G__39195 = rest;
var G__39196 = ((cljs.core.coll_QMARK_(current_node))?cljs.core.assoc_in(expanded_paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),true):expanded_paths);
remaining = G__39195;
expanded_paths = G__39196;
continue;

}
}
} else {
return expanded_paths;
}
break;
}
});
datafrisk.view.copy_to_clipboard = (function datafrisk$view$copy_to_clipboard(data){
var pretty = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39151_39197 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39152_39198 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39153_39199 = true;
var _STAR_print_fn_STAR__temp_val__39154_39200 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39153_39199);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39154_39200);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39152_39198);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39151_39197);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
var textArea = document.createElement("textarea");
var G__39155_39201 = textArea;
(G__39155_39201["style"]["position"] = "fixed");

(G__39155_39201["style"]["top"] = (0));

(G__39155_39201["style"]["left"] = (0));

(G__39155_39201["style"]["width"] = "2em");

(G__39155_39201["style"]["height"] = "2em");

(G__39155_39201["style"]["padding"] = (0));

(G__39155_39201["style"]["border"] = "none");

(G__39155_39201["style"]["outline"] = "none");

(G__39155_39201["style"]["boxShadow"] = "none");

(G__39155_39201["style"]["background"] = "transparent");

(G__39155_39201["value"] = pretty);


document.body.appendChild(textArea);

textArea.select();

document.execCommand("copy");

return document.body.removeChild(textArea);
});
datafrisk.view.collapse_all = (function datafrisk$view$collapse_all(metadata_paths){
return datafrisk.util.map_vals((function (p1__39156_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39156_SHARP_,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),false);
}),metadata_paths);
});
datafrisk.view.emit_fn_factory = (function datafrisk$view$emit_fn_factory(state_atom,id,swappable){
return (function() { 
var G__39202__delegate = function (event,args){
var G__39157 = event;
var G__39157__$1 = (((G__39157 instanceof cljs.core.Keyword))?G__39157.fqn:null);
switch (G__39157__$1) {
case "expand":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010),cljs.core.first(args),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),true);

break;
case "expand-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(datafrisk.view.expand_all_paths,cljs.core.first(args)));

break;
case "contract":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010),cljs.core.first(args),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),false);

break;
case "collapse-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010)], null),datafrisk.view.collapse_all);

break;
case "copy":
return datafrisk.view.copy_to_clipboard(cljs.core.first(args));

break;
case "changed":
var vec__39158 = args;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39158,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39158,(1),null);
if(cljs.core.seq(path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(swappable,cljs.core.assoc_in,path,value);
} else {
return cljs.core.reset_BANG_(swappable,value);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39157__$1)].join('')));

}
};
var G__39202 = function (event,var_args){
var args = null;
if (arguments.length > 1) {
var G__39204__i = 0, G__39204__a = new Array(arguments.length -  1);
while (G__39204__i < G__39204__a.length) {G__39204__a[G__39204__i] = arguments[G__39204__i + 1]; ++G__39204__i;}
  args = new cljs.core.IndexedSeq(G__39204__a,0,null);
} 
return G__39202__delegate.call(this,event,args);};
G__39202.cljs$lang$maxFixedArity = 1;
G__39202.cljs$lang$applyTo = (function (arglist__39205){
var event = cljs.core.first(arglist__39205);
var args = cljs.core.rest(arglist__39205);
return G__39202__delegate(event,args);
});
G__39202.cljs$core$IFn$_invoke$arity$variadic = G__39202__delegate;
return G__39202;
})()
;
});
datafrisk.view.Root = (function datafrisk$view$Root(data,id,state_atom){
var data_frisk = new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom));
var swappable = (((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$))))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data)))?data:null);
var emit_fn = datafrisk.view.emit_fn_factory(state_atom,id,swappable);
var metadata_paths = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 2px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.ExpandAllButton,emit_fn,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.CollapseAllButton,emit_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.CopyButton,emit_fn,data], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010),metadata_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null)], null);
});
datafrisk.view.VisibilityButton = (function datafrisk$view$VisibilityButton(visible_QMARK_,update_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"20px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),update_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.2s ease",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(visible_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 0,100 100,50",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null)], null)], null);
});
datafrisk.view.DataFriskView = (function datafrisk$view$DataFriskView(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39206 = arguments.length;
var i__4737__auto___39207 = (0);
while(true){
if((i__4737__auto___39207 < len__4736__auto___39206)){
args__4742__auto__.push((arguments[i__4737__auto___39207]));

var G__39208 = (i__4737__auto___39207 + (1));
i__4737__auto___39207 = G__39208;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datafrisk.view.DataFriskView.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datafrisk.view.DataFriskView.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__39162_SHARP_,p2__39163_SHARP_){
return cljs.core.assoc_in(p1__39162_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__39163_SHARP_,new cljs.core.Keyword(null,"metadata-paths","metadata-paths",-1435163010),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),true);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
return (function() { 
var G__39209__delegate = function (data__$1){
var data_frisk = new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom));
var visible_QMARK_ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(data_frisk);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"row nowrap",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.3s ease-out",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"5"], null),(cljs.core.truth_(visible_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hide",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"hide",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"30px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100px"], null)),new cljs.core.Keyword(null,"shell","shell",1402941019).cljs$core$IFn$_invoke$arity$1(datafrisk.view.styles)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.VisibilityButton,visible_QMARK_,(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),cljs.core.not(visible_QMARK_));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Data frisk"], null),(cljs.core.truth_(visible_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"resize","resize",297367086),"both",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}),data__$1)], null):null)], null);
};
var G__39209 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__39210__i = 0, G__39210__a = new Array(arguments.length -  0);
while (G__39210__i < G__39210__a.length) {G__39210__a[G__39210__i] = arguments[G__39210__i + 0]; ++G__39210__i;}
  data__$1 = new cljs.core.IndexedSeq(G__39210__a,0,null);
} 
return G__39209__delegate.call(this,data__$1);};
G__39209.cljs$lang$maxFixedArity = 0;
G__39209.cljs$lang$applyTo = (function (arglist__39211){
var data__$1 = cljs.core.seq(arglist__39211);
return G__39209__delegate(data__$1);
});
G__39209.cljs$core$IFn$_invoke$arity$variadic = G__39209__delegate;
return G__39209;
})()
;
}));

(datafrisk.view.DataFriskView.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datafrisk.view.DataFriskView.cljs$lang$applyTo = (function (seq39164){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39164));
}));


//# sourceMappingURL=datafrisk.view.js.map
