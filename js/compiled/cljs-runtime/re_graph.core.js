goog.provide('re_graph.core');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205),re_graph.internals.interceptors,(function (p__39677,p__39678){
var map__39680 = p__39677;
var map__39680__$1 = (((((!((map__39680 == null))))?(((((map__39680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39680):map__39680);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39680__$1,new cljs.core.Keyword(null,"db","db",993250759));
var dispatchable_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39680__$1,new cljs.core.Keyword(null,"dispatchable-event","dispatchable-event",-477590483));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39680__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var vec__39684 = p__39678;
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39684,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39684,(1),null);
var variables = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39684,(2),null);
var callback_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39684,(3),null);
var event = vec__39684;
var query__$1 = ["mutation ",clojure.string.replace(query,/^mutation\s?/,"")].join('');
var websocket_supported_QMARK_ = cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"supported-operations","supported-operations",-2116656425)], null)),new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"requests","requests",-733055638),query_id], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),query_id], null));
}
})())){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(((websocket_supported_QMARK_)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null)):false))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),query_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),callback_event], null)),new cljs.core.Keyword("re-graph.internals","send-ws","re-graph.internals/send-ws",-599941143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),query_id,new cljs.core.Keyword(null,"type","type",1174270348),"start",new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)], null)], null)], null);
} else {
if(cljs.core.truth_(((websocket_supported_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(db):false))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.conj,dispatchable_event)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"requests","requests",-733055638),query_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),callback_event], null)),new cljs.core.Keyword("re-graph.internals","send-http","re-graph.internals/send-http",-1765659875),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_name,query_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"url","url",276297046)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"impl","impl",1677848700)], null)),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)], null)], null)], null);

}
}
}
}));
/**
 * Execute a GraphQL mutation. The arguments are:
 * 
 *   [instance-name query-string variables callback]
 * 
 *   If the optional `instance-name` is not provided, the default instance is
 *   used. The callback function will receive the result of the mutation as its
 *   sole argument.
 */
re_graph.core.mutate = (function re_graph$core$mutate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40054 = arguments.length;
var i__4737__auto___40055 = (0);
while(true){
if((i__4737__auto___40055 < len__4736__auto___40054)){
args__4742__auto__.push((arguments[i__4737__auto___40055]));

var G__40057 = (i__4737__auto___40055 + (1));
i__4737__auto___40055 = G__40057;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_graph.core.mutate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_graph.core.mutate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var callback_fn = cljs.core.last(args);
var G__39755 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(args)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","callback","re-graph.internals/callback",-367275336),callback_fn], null)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39755) : re_frame.core.dispatch.call(null,G__39755));
}));

(re_graph.core.mutate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_graph.core.mutate.cljs$lang$applyTo = (function (seq39754){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39754));
}));

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791),re_graph.internals.interceptors,(function (p__39762,p__39763){
var map__39764 = p__39762;
var map__39764__$1 = (((((!((map__39764 == null))))?(((((map__39764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39764):map__39764);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39764__$1,new cljs.core.Keyword(null,"db","db",993250759));
var dispatchable_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39764__$1,new cljs.core.Keyword(null,"dispatchable-event","dispatchable-event",-477590483));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39764__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var vec__39765 = p__39763;
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39765,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39765,(1),null);
var variables = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39765,(2),null);
var callback_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39765,(3),null);
var event = vec__39765;
var query__$1 = ["query ",clojure.string.replace(query,/^query\s?/,"")].join('');
var websocket_supported_QMARK_ = cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"supported-operations","supported-operations",-2116656425)], null)),new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"requests","requests",-733055638),query_id], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),query_id], null));
}
})())){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(((websocket_supported_QMARK_)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null)):false))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),query_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),callback_event], null)),new cljs.core.Keyword("re-graph.internals","send-ws","re-graph.internals/send-ws",-599941143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),query_id,new cljs.core.Keyword(null,"type","type",1174270348),"start",new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)], null)], null)], null);
} else {
if(cljs.core.truth_(((websocket_supported_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(db):false))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.conj,dispatchable_event)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"requests","requests",-733055638),query_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),callback_event], null)),new cljs.core.Keyword("re-graph.internals","send-http","re-graph.internals/send-http",-1765659875),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_name,query_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"url","url",276297046)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"impl","impl",1677848700)], null)),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)], null)], null)], null);

}
}
}
}));
/**
 * Execute a GraphQL query. The arguments are:
 * 
 *   [instance-name query-string variables callback]
 * 
 *   If the optional `instance-name` is not provided, the default instance is
 *   used. The callback function will receive the result of the query as its
 *   sole argument.
 */
re_graph.core.query = (function re_graph$core$query(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40081 = arguments.length;
var i__4737__auto___40086 = (0);
while(true){
if((i__4737__auto___40086 < len__4736__auto___40081)){
args__4742__auto__.push((arguments[i__4737__auto___40086]));

var G__40087 = (i__4737__auto___40086 + (1));
i__4737__auto___40086 = G__40087;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_graph.core.query.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_graph.core.query.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var callback_fn = cljs.core.last(args);
var G__39772 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(args)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","callback","re-graph.internals/callback",-367275336),callback_fn], null)));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39772) : re_frame.core.dispatch.call(null,G__39772));
}));

(re_graph.core.query.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_graph.core.query.cljs$lang$applyTo = (function (seq39769){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39769));
}));

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","abort","re-graph.core/abort",368406247),re_graph.internals.interceptors,(function (p__39798,p__39799){
var map__39800 = p__39798;
var map__39800__$1 = (((((!((map__39800 == null))))?(((((map__39800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39800):map__39800);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39800__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39801 = p__39799;
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39801,(0),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.dissoc,query_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"requests","requests",-733055638)], null),cljs.core.dissoc,query_id)], null),(function (){var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"requests","requests",-733055638),query_id,new cljs.core.Keyword(null,"abort","abort",521193198)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var abort_fn = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-graph.internals","call-abort","re-graph.internals/call-abort",794010792),abort_fn], null);
} else {
return null;
}
})()], 0));
}));
re_graph.core.abort = (function re_graph$core$abort(var_args){
var G__39821 = arguments.length;
switch (G__39821) {
case 1:
return re_graph.core.abort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_graph.core.abort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.core.abort.cljs$core$IFn$_invoke$arity$1 = (function (query_id){
return re_graph.core.abort.cljs$core$IFn$_invoke$arity$2(re_graph.internals.default_instance_name,query_id);
}));

(re_graph.core.abort.cljs$core$IFn$_invoke$arity$2 = (function (instance_name,query_id){
var G__39832 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","abort","re-graph.core/abort",368406247),instance_name,query_id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39832) : re_frame.core.dispatch.call(null,G__39832));
}));

(re_graph.core.abort.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","subscribe","re-graph.core/subscribe",131944293),re_graph.internals.interceptors,(function (p__39839,p__39840){
var map__39842 = p__39839;
var map__39842__$1 = (((((!((map__39842 == null))))?(((((map__39842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39842):map__39842);
var cofx = map__39842__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39842__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39842__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var dispatchable_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39842__$1,new cljs.core.Keyword(null,"dispatchable-event","dispatchable-event",-477590483));
var vec__39844 = p__39840;
var subscription_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39844,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39844,(1),null);
var variables = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39844,(2),null);
var callback_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39844,(3),null);
var event = vec__39844;
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.name(subscription_id),new cljs.core.Keyword(null,"active?","active?",459499776)], null)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.name(subscription_id)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"callback","callback",-705136228),callback_event,new cljs.core.Keyword(null,"event","event",301435442),dispatchable_event,new cljs.core.Keyword(null,"active?","active?",459499776),true], null)),new cljs.core.Keyword("re-graph.internals","send-ws","re-graph.internals/send-ws",-599941143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(subscription_id),new cljs.core.Keyword(null,"type","type",1174270348),"start",new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),["subscription ",clojure.string.replace(query,/^subscription\s?/,"")].join(''),new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)], null)], null)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.conj,dispatchable_event)], null);
} else {
return re_graph.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Error creating subscription ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subscription_id)," on instance ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_name),": Websocket is not enabled, subscriptions are not possible. Please check your re-graph configuration"].join('')], 0));

}
}
}
}));
re_graph.core.subscribe = (function re_graph$core$subscribe(var_args){
var G__39861 = arguments.length;
switch (G__39861) {
case 4:
return re_graph.core.subscribe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return re_graph.core.subscribe.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.core.subscribe.cljs$core$IFn$_invoke$arity$4 = (function (subscription_id,query,variables,callback_fn){
return re_graph.core.subscribe.cljs$core$IFn$_invoke$arity$5(re_graph.internals.default_instance_name,subscription_id,query,variables,callback_fn);
}));

(re_graph.core.subscribe.cljs$core$IFn$_invoke$arity$5 = (function (instance_name,subscription_id,query,variables,callback_fn){
var G__39865 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","subscribe","re-graph.core/subscribe",131944293),instance_name,subscription_id,query,variables,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","callback","re-graph.internals/callback",-367275336),callback_fn], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39865) : re_frame.core.dispatch.call(null,G__39865));
}));

(re_graph.core.subscribe.cljs$lang$maxFixedArity = 5);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","unsubscribe","re-graph.core/unsubscribe",1452330940),re_graph.internals.interceptors,(function (p__39868,p__39869){
var map__39872 = p__39868;
var map__39872__$1 = (((((!((map__39872 == null))))?(((((map__39872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39872):map__39872);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39872__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39872__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var vec__39874 = p__39869;
var subscription_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39874,(0),null);
var event = vec__39874;
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.dissoc,cljs.core.name(subscription_id)),new cljs.core.Keyword("re-graph.internals","send-ws","re-graph.internals/send-ws",-599941143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(subscription_id),new cljs.core.Keyword(null,"type","type",1174270348),"stop"], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","unsubscribe","re-graph.core/unsubscribe",1452330940),instance_name,subscription_id], null))], null);
}
}));
re_graph.core.unsubscribe = (function re_graph$core$unsubscribe(var_args){
var G__39889 = arguments.length;
switch (G__39889) {
case 1:
return re_graph.core.unsubscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_graph.core.unsubscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.core.unsubscribe.cljs$core$IFn$_invoke$arity$1 = (function (subscription_id){
return re_graph.core.unsubscribe.cljs$core$IFn$_invoke$arity$2(re_graph.internals.default_instance_name,subscription_id);
}));

(re_graph.core.unsubscribe.cljs$core$IFn$_invoke$arity$2 = (function (instance_name,subscription_id){
var G__39894 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","unsubscribe","re-graph.core/unsubscribe",1452330940),instance_name,subscription_id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39894) : re_frame.core.dispatch.call(null,G__39894));
}));

(re_graph.core.unsubscribe.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","re-init","re-graph.core/re-init",-1182296708),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,re_graph.internals.re_graph_instance], null),(function (p__39898,p__39899){
var map__39902 = p__39898;
var map__39902__$1 = (((((!((map__39902 == null))))?(((((map__39902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39902):map__39902);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39902__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39902__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var vec__39903 = p__39899;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39903,(0),null);
var new_db = re_graph.internals.deep_merge(db,opts);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","connection-init","re-graph.internals/connection-init",1864056806),instance_name], null)], null):null)], 0));
}));
re_graph.core.re_init = (function re_graph$core$re_init(var_args){
var G__39916 = arguments.length;
switch (G__39916) {
case 1:
return re_graph.core.re_init.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_graph.core.re_init.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.core.re_init.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return re_graph.core.re_init.cljs$core$IFn$_invoke$arity$2(re_graph.internals.default_instance_name,opts);
}));

(re_graph.core.re_init.cljs$core$IFn$_invoke$arity$2 = (function (instance_name,opts){
var G__39924 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","re-init","re-graph.core/re-init",-1182296708),instance_name,opts], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39924) : re_frame.core.dispatch.call(null,G__39924));
}));

(re_graph.core.re_init.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-graph.core","init","re-graph.core/init",1695143043),(function (p__39927,p__39928){
var map__39931 = p__39927;
var map__39931__$1 = (((((!((map__39931 == null))))?(((((map__39931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39931):map__39931);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39931__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39932 = p__39928;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39932,(0),null);
var instance_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39932,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39932,(2),null);
var vec__39942 = (((((instance_name == null)) && ((opts == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_graph.internals.default_instance_name,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core.map_QMARK_(instance_name))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_graph.internals.default_instance_name,instance_name], null):(((instance_name == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_graph.internals.default_instance_name,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_name,opts], null)
)));
var instance_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39942,(0),null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39942,(1),null);
var ws_options = re_graph.internals.ws_options(opts__$1);
var http_options = re_graph.internals.http_options(opts__$1);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-graph","re-graph",-2120583638),instance_name__$1], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_options,http_options], 0)))], null),(cljs.core.truth_(ws_options)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-graph.internals","connect-ws","re-graph.internals/connect-ws",769497536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_name__$1,ws_options], null)], null):null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.core","destroy","re-graph.core/destroy",-163079292),re_graph.internals.interceptors,(function (p__39950,_){
var map__39951 = p__39950;
var map__39951__$1 = (((((!((map__39951 == null))))?(((((map__39951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39951):map__39951);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39951__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39951__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var temp__5733__auto__ = cljs.core.not_empty(cljs.core.keys(new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(db)));
if(cljs.core.truth_(temp__5733__auto__)){
var subscription_ids = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (){var iter__4529__auto__ = (function re_graph$core$iter__39971(s__39972){
return (new cljs.core.LazySeq(null,(function (){
var s__39972__$1 = s__39972;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39972__$1);
if(temp__5735__auto__){
var s__39972__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39972__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39972__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39975 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39974 = (0);
while(true){
if((i__39974 < size__4528__auto__)){
var subscription_id = cljs.core._nth(c__4527__auto__,i__39974);
cljs.core.chunk_append(b__39975,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","unsubscribe","re-graph.core/unsubscribe",1452330940),instance_name,subscription_id], null));

var G__40161 = (i__39974 + (1));
i__39974 = G__40161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39975),re_graph$core$iter__39971(cljs.core.chunk_rest(s__39972__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39975),null);
}
} else {
var subscription_id = cljs.core.first(s__39972__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","unsubscribe","re-graph.core/unsubscribe",1452330940),instance_name,subscription_id], null),re_graph$core$iter__39971(cljs.core.rest(s__39972__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(subscription_ids);
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","destroy","re-graph.core/destroy",-163079292),instance_name], null)], null);
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true)], null),(function (){var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"connection","connection",-123599300)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var ws = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-graph.internals","disconnect-ws","re-graph.internals/disconnect-ws",-1441616164),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ws], null)], null);
} else {
return null;
}
})()], 0));
}
}));
re_graph.core.init = (function re_graph$core$init(var_args){
var G__40006 = arguments.length;
switch (G__40006) {
case 1:
return re_graph.core.init.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_graph.core.init.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.core.init.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return re_graph.core.init.cljs$core$IFn$_invoke$arity$2(re_graph.internals.default_instance_name,opts);
}));

(re_graph.core.init.cljs$core$IFn$_invoke$arity$2 = (function (instance_name,opts){
var G__40010 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","init","re-graph.core/init",1695143043),instance_name,opts], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40010) : re_frame.core.dispatch.call(null,G__40010));
}));

(re_graph.core.init.cljs$lang$maxFixedArity = 2);

re_graph.core.destroy = (function re_graph$core$destroy(var_args){
var G__40013 = arguments.length;
switch (G__40013) {
case 0:
return re_graph.core.destroy.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_graph.core.destroy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.core.destroy.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_graph.core.destroy.cljs$core$IFn$_invoke$arity$1(re_graph.internals.default_instance_name);
}));

(re_graph.core.destroy.cljs$core$IFn$_invoke$arity$1 = (function (instance_name){
var G__40019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.core","destroy","re-graph.core/destroy",-163079292),instance_name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40019) : re_frame.core.dispatch.call(null,G__40019));
}));

(re_graph.core.destroy.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=re_graph.core.js.map
