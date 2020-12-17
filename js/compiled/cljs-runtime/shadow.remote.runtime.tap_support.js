goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35897,p__35898){
var map__35900 = p__35897;
var map__35900__$1 = (((((!((map__35900 == null))))?(((((map__35900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35900):map__35900);
var svc = map__35900__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35900__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35900__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35900__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35901 = p__35898;
var map__35901__$1 = (((((!((map__35901 == null))))?(((((map__35901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35901):map__35901);
var msg = map__35901__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35901__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35901__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35901__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35901__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35907,p__35908){
var map__35910 = p__35907;
var map__35910__$1 = (((((!((map__35910 == null))))?(((((map__35910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35910):map__35910);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35910__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35911 = p__35908;
var map__35911__$1 = (((((!((map__35911 == null))))?(((((map__35911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35911):map__35911);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35911__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35917,p__35918){
var map__35919 = p__35917;
var map__35919__$1 = (((((!((map__35919 == null))))?(((((map__35919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35919):map__35919);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35919__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35919__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35920 = p__35918;
var map__35920__$1 = (((((!((map__35920 == null))))?(((((map__35920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35920):map__35920);
var msg = map__35920__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35920__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35924,tid){
var map__35925 = p__35924;
var map__35925__$1 = (((((!((map__35925 == null))))?(((((map__35925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35925):map__35925);
var svc = map__35925__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35925__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35934 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35935 = null;
var count__35936 = (0);
var i__35937 = (0);
while(true){
if((i__35937 < count__35936)){
var vec__35944 = chunk__35935.cljs$core$IIndexed$_nth$arity$2(null,i__35937);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35944,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35944,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35999 = seq__35934;
var G__36000 = chunk__35935;
var G__36001 = count__35936;
var G__36002 = (i__35937 + (1));
seq__35934 = G__35999;
chunk__35935 = G__36000;
count__35936 = G__36001;
i__35937 = G__36002;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35934);
if(temp__5735__auto__){
var seq__35934__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35934__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35934__$1);
var G__36004 = cljs.core.chunk_rest(seq__35934__$1);
var G__36005 = c__4556__auto__;
var G__36006 = cljs.core.count(c__4556__auto__);
var G__36007 = (0);
seq__35934 = G__36004;
chunk__35935 = G__36005;
count__35936 = G__36006;
i__35937 = G__36007;
continue;
} else {
var vec__35948 = cljs.core.first(seq__35934__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35948,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35948,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36009 = cljs.core.next(seq__35934__$1);
var G__36010 = null;
var G__36011 = (0);
var G__36012 = (0);
seq__35934 = G__36009;
chunk__35935 = G__36010;
count__35936 = G__36011;
i__35937 = G__36012;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35928_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35928_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35929_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35929_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35930_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35930_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35931_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35931_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35955){
var map__35956 = p__35955;
var map__35956__$1 = (((((!((map__35956 == null))))?(((((map__35956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35956):map__35956);
var svc = map__35956__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35956__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35956__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
