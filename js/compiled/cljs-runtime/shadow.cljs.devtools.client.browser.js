goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38307 = arguments.length;
var i__4737__auto___38308 = (0);
while(true){
if((i__4737__auto___38308 < len__4736__auto___38307)){
args__4742__auto__.push((arguments[i__4737__auto___38308]));

var G__38309 = (i__4737__auto___38308 + (1));
i__4737__auto___38308 = G__38309;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38010){
var G__38011 = cljs.core.first(seq38010);
var seq38010__$1 = cljs.core.next(seq38010);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38011,seq38010__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38024 = cljs.core.seq(sources);
var chunk__38025 = null;
var count__38026 = (0);
var i__38027 = (0);
while(true){
if((i__38027 < count__38026)){
var map__38082 = chunk__38025.cljs$core$IIndexed$_nth$arity$2(null,i__38027);
var map__38082__$1 = (((((!((map__38082 == null))))?(((((map__38082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38082):map__38082);
var src = map__38082__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38082__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38082__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38082__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38082__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38096){var e_38313 = e38096;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38313);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38313.message)].join('')));
}

var G__38314 = seq__38024;
var G__38315 = chunk__38025;
var G__38316 = count__38026;
var G__38317 = (i__38027 + (1));
seq__38024 = G__38314;
chunk__38025 = G__38315;
count__38026 = G__38316;
i__38027 = G__38317;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38024);
if(temp__5735__auto__){
var seq__38024__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38024__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38024__$1);
var G__38318 = cljs.core.chunk_rest(seq__38024__$1);
var G__38319 = c__4556__auto__;
var G__38320 = cljs.core.count(c__4556__auto__);
var G__38321 = (0);
seq__38024 = G__38318;
chunk__38025 = G__38319;
count__38026 = G__38320;
i__38027 = G__38321;
continue;
} else {
var map__38118 = cljs.core.first(seq__38024__$1);
var map__38118__$1 = (((((!((map__38118 == null))))?(((((map__38118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38118):map__38118);
var src = map__38118__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38118__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38118__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38118__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38118__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38123){var e_38322 = e38123;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38322);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38322.message)].join('')));
}

var G__38323 = cljs.core.next(seq__38024__$1);
var G__38324 = null;
var G__38325 = (0);
var G__38326 = (0);
seq__38024 = G__38323;
chunk__38025 = G__38324;
count__38026 = G__38325;
i__38027 = G__38326;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38124 = cljs.core.seq(js_requires);
var chunk__38125 = null;
var count__38126 = (0);
var i__38127 = (0);
while(true){
if((i__38127 < count__38126)){
var js_ns = chunk__38125.cljs$core$IIndexed$_nth$arity$2(null,i__38127);
var require_str_38331 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38331);


var G__38332 = seq__38124;
var G__38333 = chunk__38125;
var G__38334 = count__38126;
var G__38335 = (i__38127 + (1));
seq__38124 = G__38332;
chunk__38125 = G__38333;
count__38126 = G__38334;
i__38127 = G__38335;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38124);
if(temp__5735__auto__){
var seq__38124__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38124__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38124__$1);
var G__38336 = cljs.core.chunk_rest(seq__38124__$1);
var G__38337 = c__4556__auto__;
var G__38338 = cljs.core.count(c__4556__auto__);
var G__38339 = (0);
seq__38124 = G__38336;
chunk__38125 = G__38337;
count__38126 = G__38338;
i__38127 = G__38339;
continue;
} else {
var js_ns = cljs.core.first(seq__38124__$1);
var require_str_38340 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38340);


var G__38341 = cljs.core.next(seq__38124__$1);
var G__38342 = null;
var G__38343 = (0);
var G__38344 = (0);
seq__38124 = G__38341;
chunk__38125 = G__38342;
count__38126 = G__38343;
i__38127 = G__38344;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38141){
var map__38142 = p__38141;
var map__38142__$1 = (((((!((map__38142 == null))))?(((((map__38142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38142):map__38142);
var msg = map__38142__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38142__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38142__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38144(s__38145){
return (new cljs.core.LazySeq(null,(function (){
var s__38145__$1 = s__38145;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38145__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38150 = cljs.core.first(xs__6292__auto__);
var map__38150__$1 = (((((!((map__38150 == null))))?(((((map__38150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38150):map__38150);
var src = map__38150__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38150__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38150__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__38145__$1,map__38150,map__38150__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38142,map__38142__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38144_$_iter__38146(s__38147){
return (new cljs.core.LazySeq(null,((function (s__38145__$1,map__38150,map__38150__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38142,map__38142__$1,msg,info,reload_info){
return (function (){
var s__38147__$1 = s__38147;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38147__$1);
if(temp__5735__auto____$1){
var s__38147__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38147__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38147__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38149 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38148 = (0);
while(true){
if((i__38148 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__38148);
cljs.core.chunk_append(b__38149,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38348 = (i__38148 + (1));
i__38148 = G__38348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38149),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38144_$_iter__38146(cljs.core.chunk_rest(s__38147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38149),null);
}
} else {
var warning = cljs.core.first(s__38147__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38144_$_iter__38146(cljs.core.rest(s__38147__$2)));
}
} else {
return null;
}
break;
}
});})(s__38145__$1,map__38150,map__38150__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38142,map__38142__$1,msg,info,reload_info))
,null,null));
});})(s__38145__$1,map__38150,map__38150__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38142,map__38142__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38144(cljs.core.rest(s__38145__$1)));
} else {
var G__38353 = cljs.core.rest(s__38145__$1);
s__38145__$1 = G__38353;
continue;
}
} else {
var G__38354 = cljs.core.rest(s__38145__$1);
s__38145__$1 = G__38354;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38156_38355 = cljs.core.seq(warnings);
var chunk__38157_38356 = null;
var count__38158_38357 = (0);
var i__38159_38358 = (0);
while(true){
if((i__38159_38358 < count__38158_38357)){
var map__38168_38359 = chunk__38157_38356.cljs$core$IIndexed$_nth$arity$2(null,i__38159_38358);
var map__38168_38360__$1 = (((((!((map__38168_38359 == null))))?(((((map__38168_38359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38168_38359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38168_38359):map__38168_38359);
var w_38361 = map__38168_38360__$1;
var msg_38362__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38168_38360__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38168_38360__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38168_38360__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38168_38360__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38365)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38363),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38364),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38362__$1)].join(''));


var G__38367 = seq__38156_38355;
var G__38368 = chunk__38157_38356;
var G__38369 = count__38158_38357;
var G__38370 = (i__38159_38358 + (1));
seq__38156_38355 = G__38367;
chunk__38157_38356 = G__38368;
count__38158_38357 = G__38369;
i__38159_38358 = G__38370;
continue;
} else {
var temp__5735__auto___38371 = cljs.core.seq(seq__38156_38355);
if(temp__5735__auto___38371){
var seq__38156_38372__$1 = temp__5735__auto___38371;
if(cljs.core.chunked_seq_QMARK_(seq__38156_38372__$1)){
var c__4556__auto___38373 = cljs.core.chunk_first(seq__38156_38372__$1);
var G__38374 = cljs.core.chunk_rest(seq__38156_38372__$1);
var G__38375 = c__4556__auto___38373;
var G__38376 = cljs.core.count(c__4556__auto___38373);
var G__38377 = (0);
seq__38156_38355 = G__38374;
chunk__38157_38356 = G__38375;
count__38158_38357 = G__38376;
i__38159_38358 = G__38377;
continue;
} else {
var map__38172_38378 = cljs.core.first(seq__38156_38372__$1);
var map__38172_38379__$1 = (((((!((map__38172_38378 == null))))?(((((map__38172_38378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38172_38378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38172_38378):map__38172_38378);
var w_38380 = map__38172_38379__$1;
var msg_38381__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38172_38379__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38172_38379__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38172_38379__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38172_38379__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38384)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38382),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38383),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38381__$1)].join(''));


var G__38385 = cljs.core.next(seq__38156_38372__$1);
var G__38386 = null;
var G__38387 = (0);
var G__38388 = (0);
seq__38156_38355 = G__38385;
chunk__38157_38356 = G__38386;
count__38158_38357 = G__38387;
i__38159_38358 = G__38388;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38140_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38140_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38178){
var map__38179 = p__38178;
var map__38179__$1 = (((((!((map__38179 == null))))?(((((map__38179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38179):map__38179);
var msg = map__38179__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38183 = cljs.core.seq(updates);
var chunk__38185 = null;
var count__38186 = (0);
var i__38187 = (0);
while(true){
if((i__38187 < count__38186)){
var path = chunk__38185.cljs$core$IIndexed$_nth$arity$2(null,i__38187);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38227_38396 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38230_38397 = null;
var count__38231_38398 = (0);
var i__38232_38399 = (0);
while(true){
if((i__38232_38399 < count__38231_38398)){
var node_38401 = chunk__38230_38397.cljs$core$IIndexed$_nth$arity$2(null,i__38232_38399);
var path_match_38402 = shadow.cljs.devtools.client.browser.match_paths(node_38401.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38402)){
var new_link_38408 = (function (){var G__38240 = node_38401.cloneNode(true);
G__38240.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38402),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38240;
})();
(new_link_38408.onload = ((function (seq__38227_38396,chunk__38230_38397,count__38231_38398,i__38232_38399,seq__38183,chunk__38185,count__38186,i__38187,new_link_38408,path_match_38402,node_38401,path,map__38179,map__38179__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_38401);
});})(seq__38227_38396,chunk__38230_38397,count__38231_38398,i__38232_38399,seq__38183,chunk__38185,count__38186,i__38187,new_link_38408,path_match_38402,node_38401,path,map__38179,map__38179__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38402], 0));

goog.dom.insertSiblingAfter(new_link_38408,node_38401);


var G__38423 = seq__38227_38396;
var G__38424 = chunk__38230_38397;
var G__38425 = count__38231_38398;
var G__38426 = (i__38232_38399 + (1));
seq__38227_38396 = G__38423;
chunk__38230_38397 = G__38424;
count__38231_38398 = G__38425;
i__38232_38399 = G__38426;
continue;
} else {
var G__38427 = seq__38227_38396;
var G__38428 = chunk__38230_38397;
var G__38429 = count__38231_38398;
var G__38430 = (i__38232_38399 + (1));
seq__38227_38396 = G__38427;
chunk__38230_38397 = G__38428;
count__38231_38398 = G__38429;
i__38232_38399 = G__38430;
continue;
}
} else {
var temp__5735__auto___38431 = cljs.core.seq(seq__38227_38396);
if(temp__5735__auto___38431){
var seq__38227_38433__$1 = temp__5735__auto___38431;
if(cljs.core.chunked_seq_QMARK_(seq__38227_38433__$1)){
var c__4556__auto___38434 = cljs.core.chunk_first(seq__38227_38433__$1);
var G__38436 = cljs.core.chunk_rest(seq__38227_38433__$1);
var G__38437 = c__4556__auto___38434;
var G__38438 = cljs.core.count(c__4556__auto___38434);
var G__38439 = (0);
seq__38227_38396 = G__38436;
chunk__38230_38397 = G__38437;
count__38231_38398 = G__38438;
i__38232_38399 = G__38439;
continue;
} else {
var node_38440 = cljs.core.first(seq__38227_38433__$1);
var path_match_38442 = shadow.cljs.devtools.client.browser.match_paths(node_38440.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38442)){
var new_link_38443 = (function (){var G__38242 = node_38440.cloneNode(true);
G__38242.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38442),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38242;
})();
(new_link_38443.onload = ((function (seq__38227_38396,chunk__38230_38397,count__38231_38398,i__38232_38399,seq__38183,chunk__38185,count__38186,i__38187,new_link_38443,path_match_38442,node_38440,seq__38227_38433__$1,temp__5735__auto___38431,path,map__38179,map__38179__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_38440);
});})(seq__38227_38396,chunk__38230_38397,count__38231_38398,i__38232_38399,seq__38183,chunk__38185,count__38186,i__38187,new_link_38443,path_match_38442,node_38440,seq__38227_38433__$1,temp__5735__auto___38431,path,map__38179,map__38179__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38442], 0));

goog.dom.insertSiblingAfter(new_link_38443,node_38440);


var G__38445 = cljs.core.next(seq__38227_38433__$1);
var G__38446 = null;
var G__38447 = (0);
var G__38448 = (0);
seq__38227_38396 = G__38445;
chunk__38230_38397 = G__38446;
count__38231_38398 = G__38447;
i__38232_38399 = G__38448;
continue;
} else {
var G__38449 = cljs.core.next(seq__38227_38433__$1);
var G__38450 = null;
var G__38451 = (0);
var G__38452 = (0);
seq__38227_38396 = G__38449;
chunk__38230_38397 = G__38450;
count__38231_38398 = G__38451;
i__38232_38399 = G__38452;
continue;
}
}
} else {
}
}
break;
}


var G__38453 = seq__38183;
var G__38454 = chunk__38185;
var G__38455 = count__38186;
var G__38456 = (i__38187 + (1));
seq__38183 = G__38453;
chunk__38185 = G__38454;
count__38186 = G__38455;
i__38187 = G__38456;
continue;
} else {
var G__38458 = seq__38183;
var G__38459 = chunk__38185;
var G__38460 = count__38186;
var G__38461 = (i__38187 + (1));
seq__38183 = G__38458;
chunk__38185 = G__38459;
count__38186 = G__38460;
i__38187 = G__38461;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38183);
if(temp__5735__auto__){
var seq__38183__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38183__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38183__$1);
var G__38465 = cljs.core.chunk_rest(seq__38183__$1);
var G__38466 = c__4556__auto__;
var G__38467 = cljs.core.count(c__4556__auto__);
var G__38468 = (0);
seq__38183 = G__38465;
chunk__38185 = G__38466;
count__38186 = G__38467;
i__38187 = G__38468;
continue;
} else {
var path = cljs.core.first(seq__38183__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38243_38469 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38246_38470 = null;
var count__38247_38471 = (0);
var i__38248_38472 = (0);
while(true){
if((i__38248_38472 < count__38247_38471)){
var node_38473 = chunk__38246_38470.cljs$core$IIndexed$_nth$arity$2(null,i__38248_38472);
var path_match_38474 = shadow.cljs.devtools.client.browser.match_paths(node_38473.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38474)){
var new_link_38475 = (function (){var G__38258 = node_38473.cloneNode(true);
G__38258.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38474),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38258;
})();
(new_link_38475.onload = ((function (seq__38243_38469,chunk__38246_38470,count__38247_38471,i__38248_38472,seq__38183,chunk__38185,count__38186,i__38187,new_link_38475,path_match_38474,node_38473,path,seq__38183__$1,temp__5735__auto__,map__38179,map__38179__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_38473);
});})(seq__38243_38469,chunk__38246_38470,count__38247_38471,i__38248_38472,seq__38183,chunk__38185,count__38186,i__38187,new_link_38475,path_match_38474,node_38473,path,seq__38183__$1,temp__5735__auto__,map__38179,map__38179__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38474], 0));

goog.dom.insertSiblingAfter(new_link_38475,node_38473);


var G__38478 = seq__38243_38469;
var G__38479 = chunk__38246_38470;
var G__38480 = count__38247_38471;
var G__38481 = (i__38248_38472 + (1));
seq__38243_38469 = G__38478;
chunk__38246_38470 = G__38479;
count__38247_38471 = G__38480;
i__38248_38472 = G__38481;
continue;
} else {
var G__38483 = seq__38243_38469;
var G__38484 = chunk__38246_38470;
var G__38485 = count__38247_38471;
var G__38486 = (i__38248_38472 + (1));
seq__38243_38469 = G__38483;
chunk__38246_38470 = G__38484;
count__38247_38471 = G__38485;
i__38248_38472 = G__38486;
continue;
}
} else {
var temp__5735__auto___38489__$1 = cljs.core.seq(seq__38243_38469);
if(temp__5735__auto___38489__$1){
var seq__38243_38490__$1 = temp__5735__auto___38489__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38243_38490__$1)){
var c__4556__auto___38491 = cljs.core.chunk_first(seq__38243_38490__$1);
var G__38492 = cljs.core.chunk_rest(seq__38243_38490__$1);
var G__38493 = c__4556__auto___38491;
var G__38494 = cljs.core.count(c__4556__auto___38491);
var G__38495 = (0);
seq__38243_38469 = G__38492;
chunk__38246_38470 = G__38493;
count__38247_38471 = G__38494;
i__38248_38472 = G__38495;
continue;
} else {
var node_38496 = cljs.core.first(seq__38243_38490__$1);
var path_match_38497 = shadow.cljs.devtools.client.browser.match_paths(node_38496.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38497)){
var new_link_38498 = (function (){var G__38259 = node_38496.cloneNode(true);
G__38259.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38497),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38259;
})();
(new_link_38498.onload = ((function (seq__38243_38469,chunk__38246_38470,count__38247_38471,i__38248_38472,seq__38183,chunk__38185,count__38186,i__38187,new_link_38498,path_match_38497,node_38496,seq__38243_38490__$1,temp__5735__auto___38489__$1,path,seq__38183__$1,temp__5735__auto__,map__38179,map__38179__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_38496);
});})(seq__38243_38469,chunk__38246_38470,count__38247_38471,i__38248_38472,seq__38183,chunk__38185,count__38186,i__38187,new_link_38498,path_match_38497,node_38496,seq__38243_38490__$1,temp__5735__auto___38489__$1,path,seq__38183__$1,temp__5735__auto__,map__38179,map__38179__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38497], 0));

goog.dom.insertSiblingAfter(new_link_38498,node_38496);


var G__38500 = cljs.core.next(seq__38243_38490__$1);
var G__38501 = null;
var G__38502 = (0);
var G__38503 = (0);
seq__38243_38469 = G__38500;
chunk__38246_38470 = G__38501;
count__38247_38471 = G__38502;
i__38248_38472 = G__38503;
continue;
} else {
var G__38504 = cljs.core.next(seq__38243_38490__$1);
var G__38505 = null;
var G__38506 = (0);
var G__38507 = (0);
seq__38243_38469 = G__38504;
chunk__38246_38470 = G__38505;
count__38247_38471 = G__38506;
i__38248_38472 = G__38507;
continue;
}
}
} else {
}
}
break;
}


var G__38510 = cljs.core.next(seq__38183__$1);
var G__38511 = null;
var G__38512 = (0);
var G__38513 = (0);
seq__38183 = G__38510;
chunk__38185 = G__38511;
count__38186 = G__38512;
i__38187 = G__38513;
continue;
} else {
var G__38515 = cljs.core.next(seq__38183__$1);
var G__38516 = null;
var G__38517 = (0);
var G__38518 = (0);
seq__38183 = G__38515;
chunk__38185 = G__38516;
count__38186 = G__38517;
i__38187 = G__38518;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38264){
var map__38265 = p__38264;
var map__38265__$1 = (((((!((map__38265 == null))))?(((((map__38265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38265):map__38265);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38265__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38270){
var map__38271 = p__38270;
var map__38271__$1 = (((((!((map__38271 == null))))?(((((map__38271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38271):map__38271);
var _ = map__38271__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38271__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38275,done,error){
var map__38276 = p__38275;
var map__38276__$1 = (((((!((map__38276 == null))))?(((((map__38276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38276):map__38276);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38276__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38278,done,error){
var map__38279 = p__38278;
var map__38279__$1 = (((((!((map__38279 == null))))?(((((map__38279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38279):map__38279);
var msg = map__38279__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38279__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38279__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38279__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38281){
var map__38282 = p__38281;
var map__38282__$1 = (((((!((map__38282 == null))))?(((((map__38282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38282):map__38282);
var src = map__38282__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38282__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38285 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38285) : done.call(null,G__38285));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38286){
var map__38287 = p__38286;
var map__38287__$1 = (((((!((map__38287 == null))))?(((((map__38287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38287):map__38287);
var msg__$1 = map__38287__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38287__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38289){var ex = e38289;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38290){
var map__38291 = p__38290;
var map__38291__$1 = (((((!((map__38291 == null))))?(((((map__38291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38291):map__38291);
var env = map__38291__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38291__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__38294){
var map__38295 = p__38294;
var map__38295__$1 = (((((!((map__38295 == null))))?(((((map__38295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38295):map__38295);
var msg = map__38295__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38295__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38300){
var map__38301 = p__38300;
var map__38301__$1 = (((((!((map__38301 == null))))?(((((map__38301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38301):map__38301);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38301__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38301__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38304){
var map__38305 = p__38304;
var map__38305__$1 = (((((!((map__38305 == null))))?(((((map__38305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38305):map__38305);
var svc = map__38305__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38305__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
