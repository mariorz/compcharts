goog.provide('re_graph.internals');
re_graph.internals.default_instance_name = new cljs.core.Keyword("re-graph.internals","default","re-graph.internals/default",-1918427164);
re_graph.internals.cons_interceptor = (function re_graph$internals$cons_interceptor(ctx,interceptor){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"queue","queue",1455835879),(function (p1__39175_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_frame.interop.empty_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interceptor], null)),p1__39175_SHARP_);
}));
});
re_graph.internals.encode = (function re_graph$internals$encode(obj){
return JSON.stringify(cljs.core.clj__GT_js(obj));
});
re_graph.internals.message__GT_data = (function re_graph$internals$message__GT_data(m){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse((m["data"])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
re_graph.internals.generate_query_id = (function re_graph$internals$generate_query_id(){
return Math.random().toString((36)).substr((2),(8));
});
re_graph.internals.ensure_query_id = (function re_graph$internals$ensure_query_id(event_name,trimmed_event){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("re-graph.core","query","re-graph.core/query",-2079477791),null,new cljs.core.Keyword("re-graph.core","mutate","re-graph.core/mutate",602713205),null], null), null),event_name)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(trimmed_event))){
return cljs.core.vec(cljs.core.cons(re_graph.internals.generate_query_id(),trimmed_event));
} else {
return trimmed_event;
}
} else {
return trimmed_event;
}
});
re_graph.internals.deep_merge = (function re_graph$internals$deep_merge(a,b){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (a__$1,b__$1){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null))){
return (re_graph.internals.deep_merge.cljs$core$IFn$_invoke$arity$2 ? re_graph.internals.deep_merge.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1) : re_graph.internals.deep_merge.call(null,a__$1,b__$1));
} else {
return b__$1;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
re_graph.internals.build_impl = (function re_graph$internals$build_impl(impl){
if(cljs.core.fn_QMARK_(impl)){
return (impl.cljs$core$IFn$_invoke$arity$0 ? impl.cljs$core$IFn$_invoke$arity$0() : impl.call(null));
} else {
return impl;
}
});
re_graph.internals.instantiate_impl = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("re-graph.internals","instantiate-impl","re-graph.internals/instantiate-impl",1040675526),new cljs.core.Keyword(null,"before","before",-1633692388),(function (ctx){
var db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"db","db",993250759));
var http_impl = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"impl","impl",1677848700)], null));
var ws_impl = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"impl","impl",1677848700)], null));
return re_frame.interceptor.update_coeffect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword("re-graph.internals","http-impl","re-graph.internals/http-impl",-1092033299),http_impl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("re-graph.internals","ws-impl","re-graph.internals/ws-impl",1470093558),ws_impl], 0)),new cljs.core.Keyword(null,"db","db",993250759),(function (db__$1){
var G__39180 = db__$1;
var G__39180__$1 = (cljs.core.truth_(http_impl)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__39180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"impl","impl",1677848700)], null),re_graph.internals.build_impl):G__39180);
if(cljs.core.truth_(ws_impl)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__39180__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"impl","impl",1677848700)], null),re_graph.internals.build_impl);
} else {
return G__39180__$1;
}
}));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (ctx){
var map__39182 = ctx;
var map__39182__$1 = (((((!((map__39182 == null))))?(((((map__39182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39182):map__39182);
var http_impl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39182__$1,new cljs.core.Keyword("re-graph.internals","http-impl","re-graph.internals/http-impl",-1092033299));
var ws_impl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39182__$1,new cljs.core.Keyword("re-graph.internals","ws-impl","re-graph.internals/ws-impl",1470093558));
var db_effect = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"db","db",993250759));
var G__39187 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword("re-graph.internals","http-impl","re-graph.internals/http-impl",-1092033299),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("re-graph.internals","ws-impl","re-graph.internals/ws-impl",1470093558)], 0));
if(cljs.core.truth_(db_effect)){
return re_frame.interceptor.assoc_effect(G__39187,new cljs.core.Keyword(null,"db","db",993250759),(function (){var G__39188 = db_effect;
var G__39188__$1 = (cljs.core.truth_(http_impl)?cljs.core.assoc_in(G__39188,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"impl","impl",1677848700)], null),http_impl):G__39188);
if(cljs.core.truth_(ws_impl)){
return cljs.core.assoc_in(G__39188__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"impl","impl",1677848700)], null),ws_impl);
} else {
return G__39188__$1;
}
})());
} else {
return G__39187;
}
})], 0));
re_graph.internals.re_graph_instance = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("re-graph.internals","instance","re-graph.internals/instance",-2055238806),new cljs.core.Keyword(null,"before","before",-1633692388),(function (ctx){
var re_graph__$1 = new cljs.core.Keyword(null,"re-graph","re-graph",-2120583638).cljs$core$IFn$_invoke$arity$1(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"db","db",993250759)));
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"event","event",301435442));
var provided_instance_name = cljs.core.first(event);
var instance_name = ((cljs.core.contains_QMARK_(re_graph__$1,provided_instance_name))?provided_instance_name:re_graph.internals.default_instance_name);
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_graph__$1,instance_name);
var event_name = cljs.core.first(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword("re-frame.std-interceptors","untrimmed-event","re-frame.std-interceptors/untrimmed-event",-840935075)));
var trimmed_event = re_graph.internals.ensure_query_id(event_name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(provided_instance_name,instance_name))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(event,(1)):event));
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(instance))){
return ctx;
} else {
if(cljs.core.truth_(instance)){
return re_frame.interceptor.assoc_coeffect(re_graph.internals.cons_interceptor(re_frame.interceptor.assoc_coeffect(re_frame.interceptor.assoc_coeffect(ctx,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941),instance_name),new cljs.core.Keyword(null,"dispatchable-event","dispatchable-event",-477590483),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_name,instance_name], null),trimmed_event)),re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"re-graph","re-graph",-2120583638),instance_name], 0))),new cljs.core.Keyword(null,"event","event",301435442),trimmed_event);
} else {
re_graph.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No default instance of re-graph found but no valid instance name was provided. Valid instance names are:",cljs.core.keys(re_graph__$1),"but was provided with",provided_instance_name,"handling event",event_name], 0));

return ctx;

}
}
})], 0));
re_graph.internals.interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,re_graph.internals.re_graph_instance,re_graph.internals.instantiate_impl], null);
/**
 * Validates that response has a valid GraphQL errors map
 */
re_graph.internals.valid_graphql_errors_QMARK_ = (function re_graph$internals$valid_graphql_errors_QMARK_(response){
return ((cljs.core.map_QMARK_(response)) && (cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(response))) && (cljs.core.seq(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(response))) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(response))));
});
/**
 * Inserts the HTTP status into the response for 3 conditions:
 * 1. Response contains a valid GraphQL errors map: update the map with HTTP status
 * 2. Response is a map but does not contain a valid errors map: merge in default errors
 * 3. Response is anything else: return default errors map
 */
re_graph.internals.insert_http_status = (function re_graph$internals$insert_http_status(response,status){
var f = (function (errors){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (error){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),new cljs.core.Keyword(null,"status","status",-1997798413)], null),(function (p1__39194_SHARP_){
var or__4126__auto__ = p1__39194_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return status;
}
}));
}),errors);
});
var default_errors = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"The HTTP call failed.",new cljs.core.Keyword(null,"extensions","extensions",-1103629196),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),status], null)], null)], null)], null);
if(re_graph.internals.valid_graphql_errors_QMARK_(response)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"errors","errors",-908790718),f);
} else {
if(cljs.core.map_QMARK_(response)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,default_errors], 0));
} else {
return default_errors;

}
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","http-complete","re-graph.internals/http-complete",1043989359),re_graph.internals.interceptors,(function (p__39199,p__39200){
var map__39201 = p__39199;
var map__39201__$1 = (((((!((map__39201 == null))))?(((((map__39201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39201):map__39201);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39201__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39202 = p__39200;
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39202,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39202,(1),null);
var callback_event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"requests","requests",-733055638),query_id,new cljs.core.Keyword(null,"callback","callback",-705136228)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.dissoc,query_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"requests","requests",-733055638)], null),cljs.core.dissoc,query_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(callback_event,payload)], null);
}));
var G__39209_39770 = new cljs.core.Keyword("re-graph.internals","call-abort","re-graph.internals/call-abort",794010792);
var G__39210_39771 = (function (abort_fn){
return (abort_fn.cljs$core$IFn$_invoke$arity$0 ? abort_fn.cljs$core$IFn$_invoke$arity$0() : abort_fn.call(null));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__39209_39770,G__39210_39771) : re_frame.core.reg_fx.call(null,G__39209_39770,G__39210_39771));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","register-abort","re-graph.internals/register-abort",249622905),re_graph.internals.interceptors,(function (db,p__39214){
var vec__39215 = p__39214;
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39215,(0),null);
var abort_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39215,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"requests","requests",-733055638),query_id,new cljs.core.Keyword(null,"abort","abort",521193198)], null),abort_fn);
}));
re_graph.internals.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [(205),null,(206),null,(300),null,(204),null,(307),null,(304),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
var G__39222_39773 = new cljs.core.Keyword("re-graph.internals","send-http","re-graph.internals/send-http",-1765659875);
var G__39223_39774 = (function (p__39226){
var vec__39227 = p__39226;
var instance_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39227,(0),null);
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39227,(1),null);
var http_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39227,(2),null);
var map__39230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39227,(3),null);
var map__39230__$1 = (((((!((map__39230 == null))))?(((((map__39230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39230):map__39230);
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39230__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39230__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var response_chan = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(http_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596),payload)], 0));
var G__39246_39778 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","register-abort","re-graph.internals/register-abort",249622905),instance_name,query_id,(function (){
return cljs_http.core.abort_BANG_(response_chan);
})], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39246_39778) : re_frame.core.dispatch.call(null,G__39246_39778));

var c__36744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36745__auto__ = (function (){var switch__36652__auto__ = (function (state_39307){
var state_val_39310 = (state_39307[(1)]);
if((state_val_39310 === (7))){
var state_39307__$1 = state_39307;
var statearr_39318_39780 = state_39307__$1;
(statearr_39318_39780[(2)] = false);

(statearr_39318_39780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (1))){
var state_39307__$1 = state_39307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39307__$1,(2),response_chan);
} else {
if((state_val_39310 === (4))){
var state_39307__$1 = state_39307;
var statearr_39327_39782 = state_39307__$1;
(statearr_39327_39782[(2)] = false);

(statearr_39327_39782[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (13))){
var inst_39289 = (state_39307[(7)]);
var inst_39288 = (state_39307[(8)]);
var inst_39298 = re_graph.internals.insert_http_status(inst_39289,inst_39288);
var state_39307__$1 = state_39307;
var statearr_39335_39787 = state_39307__$1;
(statearr_39335_39787[(2)] = inst_39298);

(statearr_39335_39787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (6))){
var state_39307__$1 = state_39307;
var statearr_39336_39789 = state_39307__$1;
(statearr_39336_39789[(2)] = true);

(statearr_39336_39789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (3))){
var inst_39259 = (state_39307[(9)]);
var inst_39271 = inst_39259.cljs$lang$protocol_mask$partition0$;
var inst_39272 = (inst_39271 & (64));
var inst_39273 = inst_39259.cljs$core$ISeq$;
var inst_39274 = (cljs.core.PROTOCOL_SENTINEL === inst_39273);
var inst_39275 = ((inst_39272) || (inst_39274));
var state_39307__$1 = state_39307;
if(cljs.core.truth_(inst_39275)){
var statearr_39343_39792 = state_39307__$1;
(statearr_39343_39792[(1)] = (6));

} else {
var statearr_39346_39793 = state_39307__$1;
(statearr_39346_39793[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (12))){
var inst_39289 = (state_39307[(7)]);
var state_39307__$1 = state_39307;
var statearr_39350_39795 = state_39307__$1;
(statearr_39350_39795[(2)] = inst_39289);

(statearr_39350_39795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (2))){
var inst_39259 = (state_39307[(9)]);
var inst_39259__$1 = (state_39307[(2)]);
var inst_39264 = (inst_39259__$1 == null);
var inst_39265 = cljs.core.not(inst_39264);
var state_39307__$1 = (function (){var statearr_39351 = state_39307;
(statearr_39351[(9)] = inst_39259__$1);

return statearr_39351;
})();
if(inst_39265){
var statearr_39352_39796 = state_39307__$1;
(statearr_39352_39796[(1)] = (3));

} else {
var statearr_39353_39797 = state_39307__$1;
(statearr_39353_39797[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (11))){
var inst_39287 = (state_39307[(2)]);
var inst_39288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39287,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_39289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39287,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_39291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39287,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var inst_39292 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39295 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no-error","no-error",1984610064),inst_39291);
var state_39307__$1 = (function (){var statearr_39354 = state_39307;
(statearr_39354[(7)] = inst_39289);

(statearr_39354[(8)] = inst_39288);

(statearr_39354[(10)] = inst_39292);

return statearr_39354;
})();
if(inst_39295){
var statearr_39357_39806 = state_39307__$1;
(statearr_39357_39806[(1)] = (12));

} else {
var statearr_39360_39807 = state_39307__$1;
(statearr_39360_39807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (9))){
var inst_39259 = (state_39307[(9)]);
var inst_39284 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39259);
var state_39307__$1 = state_39307;
var statearr_39364_39810 = state_39307__$1;
(statearr_39364_39810[(2)] = inst_39284);

(statearr_39364_39810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (5))){
var inst_39282 = (state_39307[(2)]);
var state_39307__$1 = state_39307;
if(cljs.core.truth_(inst_39282)){
var statearr_39366_39815 = state_39307__$1;
(statearr_39366_39815[(1)] = (9));

} else {
var statearr_39368_39816 = state_39307__$1;
(statearr_39368_39816[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (14))){
var inst_39292 = (state_39307[(10)]);
var inst_39300 = (state_39307[(2)]);
var inst_39301 = [new cljs.core.Keyword("re-graph.internals","http-complete","re-graph.internals/http-complete",1043989359),instance_name,query_id,inst_39300];
var inst_39302 = (new cljs.core.PersistentVector(null,4,(5),inst_39292,inst_39301,null));
var inst_39303 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_39302) : re_frame.core.dispatch.call(null,inst_39302));
var state_39307__$1 = state_39307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39307__$1,inst_39303);
} else {
if((state_val_39310 === (10))){
var inst_39259 = (state_39307[(9)]);
var state_39307__$1 = state_39307;
var statearr_39375_39825 = state_39307__$1;
(statearr_39375_39825[(2)] = inst_39259);

(statearr_39375_39825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (8))){
var inst_39279 = (state_39307[(2)]);
var state_39307__$1 = state_39307;
var statearr_39377_39828 = state_39307__$1;
(statearr_39377_39828[(2)] = inst_39279);

(statearr_39377_39828[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var re_graph$internals$state_machine__36653__auto__ = null;
var re_graph$internals$state_machine__36653__auto____0 = (function (){
var statearr_39379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39379[(0)] = re_graph$internals$state_machine__36653__auto__);

(statearr_39379[(1)] = (1));

return statearr_39379;
});
var re_graph$internals$state_machine__36653__auto____1 = (function (state_39307){
while(true){
var ret_value__36654__auto__ = (function (){try{while(true){
var result__36655__auto__ = switch__36652__auto__(state_39307);
if(cljs.core.keyword_identical_QMARK_(result__36655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36655__auto__;
}
break;
}
}catch (e39380){var ex__36656__auto__ = e39380;
var statearr_39381_39834 = state_39307;
(statearr_39381_39834[(2)] = ex__36656__auto__);


if(cljs.core.seq((state_39307[(4)]))){
var statearr_39384_39835 = state_39307;
(statearr_39384_39835[(1)] = cljs.core.first((state_39307[(4)])));

} else {
throw ex__36656__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39837 = state_39307;
state_39307 = G__39837;
continue;
} else {
return ret_value__36654__auto__;
}
break;
}
});
re_graph$internals$state_machine__36653__auto__ = function(state_39307){
switch(arguments.length){
case 0:
return re_graph$internals$state_machine__36653__auto____0.call(this);
case 1:
return re_graph$internals$state_machine__36653__auto____1.call(this,state_39307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_graph$internals$state_machine__36653__auto__.cljs$core$IFn$_invoke$arity$0 = re_graph$internals$state_machine__36653__auto____0;
re_graph$internals$state_machine__36653__auto__.cljs$core$IFn$_invoke$arity$1 = re_graph$internals$state_machine__36653__auto____1;
return re_graph$internals$state_machine__36653__auto__;
})()
})();
var state__36746__auto__ = (function (){var statearr_39390 = f__36745__auto__();
(statearr_39390[(6)] = c__36744__auto__);

return statearr_39390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36746__auto__);
}));

return c__36744__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__39222_39773,G__39223_39774) : re_frame.core.reg_fx.call(null,G__39222_39773,G__39223_39774));
var G__39396_39849 = new cljs.core.Keyword("re-graph.internals","send-ws","re-graph.internals/send-ws",-599941143);
var G__39397_39850 = (function (p__39399){
var vec__39401 = p__39399;
var websocket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39401,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39401,(1),null);
re_graph.logging.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Send ws",websocket,payload], 0));

return websocket.send(re_graph.internals.encode(payload));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__39396_39849,G__39397_39850) : re_frame.core.reg_fx.call(null,G__39396_39849,G__39397_39850));
var G__39407_39851 = new cljs.core.Keyword("re-graph.internals","call-callback","re-graph.internals/call-callback",-1514430438);
var G__39408_39852 = (function (p__39413){
var vec__39414 = p__39413;
var callback_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39414,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39414,(1),null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(payload) : callback_fn.call(null,payload));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__39407_39851,G__39408_39852) : re_frame.core.reg_fx.call(null,G__39407_39851,G__39408_39852));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-graph.internals","callback","re-graph.internals/callback",-367275336),(function (_,p__39417){
var vec__39430 = p__39417;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39430,(0),null);
var callback_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39430,(1),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39430,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-graph.internals","call-callback","re-graph.internals/call-callback",-1514430438),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_fn,payload], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","on-ws-data","re-graph.internals/on-ws-data",-1867887305),re_graph.internals.interceptors,(function (p__39436,p__39437){
var map__39438 = p__39436;
var map__39438__$1 = (((((!((map__39438 == null))))?(((((map__39438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39438):map__39438);
var cofx = map__39438__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39438__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39439 = p__39437;
var subscription_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39439,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39439,(1),null);
var event = vec__39439;
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.name(subscription_id),new cljs.core.Keyword(null,"callback","callback",-705136228)], null));
if(cljs.core.truth_(temp__5733__auto__)){
var callback_event = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(callback_event,payload)], null);
} else {
return re_graph.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No callback-event found for subscription",subscription_id], 0));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","on-ws-complete","re-graph.internals/on-ws-complete",738561128),re_graph.internals.interceptors,(function (db,p__39456){
var vec__39457 = p__39456;
var subscription_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39457,(0),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)], null),cljs.core.dissoc,cljs.core.name(subscription_id));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","connection-init","re-graph.internals/connection-init",1864056806),re_graph.internals.interceptors,(function (p__39469,_){
var map__39470 = p__39469;
var map__39470__$1 = (((((!((map__39470 == null))))?(((((map__39470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39470):map__39470);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ws = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"connection","connection",-123599300)], null));
var payload = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"connection-init-payload","connection-init-payload",-2110352705)], null));
if(cljs.core.truth_(payload)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-graph.internals","send-ws","re-graph.internals/send-ws",-599941143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"connection_init",new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","on-ws-open","re-graph.internals/on-ws-open",-1733176117),re_graph.internals.interceptors,(function (p__39487,p__39488){
var map__39489 = p__39487;
var map__39489__$1 = (((((!((map__39489 == null))))?(((((map__39489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39489):map__39489);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39489__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39489__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
var vec__39490 = p__39488;
var ws = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39490,(0),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),ws,new cljs.core.Keyword(null,"ready?","ready?",-105765697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY], 0))], null),(function (){var resume_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"resume-subscriptions?","resume-subscriptions?",-1500602553)], null));
var subscriptions = (cljs.core.truth_(resume_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),cljs.core.vals(new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(db))):null);
var queue = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"queue","queue",1455835879)], null));
var to_send = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","connection-init","re-graph.internals/connection-init",1864056806),instance_name], null)], null),subscriptions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([queue], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),to_send], null);
})()], 0));
}));
re_graph.internals.deactivate_subscriptions = (function re_graph$internals$deactivate_subscriptions(subscriptions){
return cljs.core.reduce_kv((function (subs,sub_id,sub){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(subs,sub_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"active?","active?",459499776),false));
}),cljs.core.PersistentArrayMap.EMPTY,subscriptions);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","on-ws-close","re-graph.internals/on-ws-close",2011209794),re_graph.internals.interceptors,(function (p__39511,_){
var map__39512 = p__39511;
var map__39512__$1 = (((((!((map__39512 == null))))?(((((map__39512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39512):map__39512);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39512__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39512__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var new_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null),false),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),re_graph.internals.deactivate_subscriptions);
return new_db;
})()], null),(function (){var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"reconnect-timeout","reconnect-timeout",839758170)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var reconnect_timeout = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),reconnect_timeout,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","reconnect-ws","re-graph.internals/reconnect-ws",-2097551060),instance_name], null)], null)], null)], null);
} else {
return null;
}
})()], 0));
}));
re_graph.internals.on_ws_message = (function re_graph$internals$on_ws_message(instance_name){
return (function (m){
var map__39543 = re_graph.internals.message__GT_data(m);
var map__39543__$1 = (((((!((map__39543 == null))))?(((((map__39543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39543):map__39543);
var data = map__39543__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39543__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39543__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39543__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var pred__39549 = cljs.core._EQ_;
var expr__39550 = type;
if(cljs.core.truth_((pred__39549.cljs$core$IFn$_invoke$arity$2 ? pred__39549.cljs$core$IFn$_invoke$arity$2("data",expr__39550) : pred__39549.call(null,"data",expr__39550)))){
var G__39557 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","on-ws-data","re-graph.internals/on-ws-data",-1867887305),instance_name,id,payload], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39557) : re_frame.core.dispatch.call(null,G__39557));
} else {
if(cljs.core.truth_((pred__39549.cljs$core$IFn$_invoke$arity$2 ? pred__39549.cljs$core$IFn$_invoke$arity$2("complete",expr__39550) : pred__39549.call(null,"complete",expr__39550)))){
var G__39558 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","on-ws-complete","re-graph.internals/on-ws-complete",738561128),instance_name,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39558) : re_frame.core.dispatch.call(null,G__39558));
} else {
if(cljs.core.truth_((pred__39549.cljs$core$IFn$_invoke$arity$2 ? pred__39549.cljs$core$IFn$_invoke$arity$2("error",expr__39550) : pred__39549.call(null,"error",expr__39550)))){
var G__39559 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","on-ws-data","re-graph.internals/on-ws-data",-1867887305),instance_name,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),payload], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39559) : re_frame.core.dispatch.call(null,G__39559));
} else {
return re_graph.logging.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Ignoring graphql-ws event ",instance_name," - ",type], 0));
}
}
}
});
});
re_graph.internals.on_open = (function re_graph$internals$on_open(var_args){
var G__39570 = arguments.length;
switch (G__39570) {
case 1:
return re_graph.internals.on_open.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_graph.internals.on_open.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_graph.internals.on_open.cljs$core$IFn$_invoke$arity$1 = (function (instance_name){
return (function (websocket){
var fexpr__39574 = re_graph.internals.on_open.cljs$core$IFn$_invoke$arity$2(instance_name,websocket);
return (fexpr__39574.cljs$core$IFn$_invoke$arity$0 ? fexpr__39574.cljs$core$IFn$_invoke$arity$0() : fexpr__39574.call(null));
});
}));

(re_graph.internals.on_open.cljs$core$IFn$_invoke$arity$2 = (function (instance_name,websocket){
return (function (){
re_graph.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["opened ws",websocket], 0));

var G__39579 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","on-ws-open","re-graph.internals/on-ws-open",-1733176117),instance_name,websocket], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39579) : re_frame.core.dispatch.call(null,G__39579));
});
}));

(re_graph.internals.on_open.cljs$lang$maxFixedArity = 2);

re_graph.internals.on_close = (function re_graph$internals$on_close(instance_name){
return (function() { 
var G__39957__delegate = function (args){
var G__39582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-graph.internals","on-ws-close","re-graph.internals/on-ws-close",2011209794),instance_name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39582) : re_frame.core.dispatch.call(null,G__39582));
};
var G__39957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39960__i = 0, G__39960__a = new Array(arguments.length -  0);
while (G__39960__i < G__39960__a.length) {G__39960__a[G__39960__i] = arguments[G__39960__i + 0]; ++G__39960__i;}
  args = new cljs.core.IndexedSeq(G__39960__a,0,null);
} 
return G__39957__delegate.call(this,args);};
G__39957.cljs$lang$maxFixedArity = 0;
G__39957.cljs$lang$applyTo = (function (arglist__39968){
var args = cljs.core.seq(arglist__39968);
return G__39957__delegate(args);
});
G__39957.cljs$core$IFn$_invoke$arity$variadic = G__39957__delegate;
return G__39957;
})()
;
});
re_graph.internals.on_error = (function re_graph$internals$on_error(instance_name){
return (function (e){
return re_graph.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["GraphQL websocket error",instance_name,e], 0));
});
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("re-graph.internals","reconnect-ws","re-graph.internals/reconnect-ws",-2097551060),re_graph.internals.interceptors,(function (p__39593,_){
var map__39594 = p__39593;
var map__39594__$1 = (((((!((map__39594 == null))))?(((((map__39594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39594):map__39594);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39594__$1,new cljs.core.Keyword(null,"db","db",993250759));
var instance_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39594__$1,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ready?","ready?",-105765697)], null)))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-graph.internals","connect-ws","re-graph.internals/connect-ws",769497536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_name,db], null)], null);
}
}));
var G__39600_39977 = new cljs.core.Keyword("re-graph.internals","connect-ws","re-graph.internals/connect-ws",769497536);
var G__39601_39978 = (function (p__39606){
var vec__39607 = p__39606;
var instance_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39607,(0),null);
var map__39610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39607,(1),null);
var map__39610__$1 = (((((!((map__39610 == null))))?(((((map__39610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39610):map__39610);
var map__39611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39610__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var map__39611__$1 = (((((!((map__39611 == null))))?(((((map__39611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39611):map__39611);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39611__$1,new cljs.core.Keyword(null,"url","url",276297046));
var sub_protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39611__$1,new cljs.core.Keyword(null,"sub-protocol","sub-protocol",410139647));
var impl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39611__$1,new cljs.core.Keyword(null,"impl","impl",1677848700));
var ws = (((sub_protocol == null))?(new WebSocket(url)):(new WebSocket(url,sub_protocol))
);
(ws["onmessage"] = re_graph.internals.on_ws_message(instance_name));

(ws["onopen"] = re_graph.internals.on_open.cljs$core$IFn$_invoke$arity$2(instance_name,ws));

(ws["onclose"] = re_graph.internals.on_close(instance_name));

return (ws["onerror"] = re_graph.internals.on_error(instance_name));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__39600_39977,G__39601_39978) : re_frame.core.reg_fx.call(null,G__39600_39977,G__39601_39978));
var G__39626_39988 = new cljs.core.Keyword("re-graph.internals","disconnect-ws","re-graph.internals/disconnect-ws",-1441616164);
var G__39627_39989 = (function (p__39630){
var vec__39635 = p__39630;
var ws = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39635,(0),null);
return ws.close();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__39626_39988,G__39627_39989) : re_frame.core.reg_fx.call(null,G__39626_39988,G__39627_39989));
re_graph.internals.default_url = (function re_graph$internals$default_url(protocol,path){
if((((typeof window !== 'undefined')) && ((!((window.location == null)))))){
var host_and_port = window.location.host;
var ssl_QMARK_ = cljs.core.re_find(/^https/,window.location.origin);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol),(cljs.core.truth_(ssl_QMARK_)?"s":""),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host_and_port),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
} else {
return null;
}
});
re_graph.internals.ws_default_options = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"url","url",276297046),re_graph.internals.default_url("ws","graphql-ws"),new cljs.core.Keyword(null,"sub-protocol","sub-protocol",410139647),"graphql-ws",new cljs.core.Keyword(null,"reconnect-timeout","reconnect-timeout",839758170),(5000),new cljs.core.Keyword(null,"resume-subscriptions?","resume-subscriptions?",-1500602553),true,new cljs.core.Keyword(null,"connection-init-payload","connection-init-payload",-2110352705),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"impl","impl",1677848700),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"supported-operations","supported-operations",-2116656425),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"subscribe","subscribe",416253756),null,new cljs.core.Keyword(null,"mutate","mutate",1422419038),null], null), null)], null);
re_graph.internals.ws_initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ready?","ready?",-105765697),false,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"connection","connection",-123599300),null], null);
re_graph.internals.ws_options = (function re_graph$internals$ws_options(p__39642){
var map__39643 = p__39642;
var map__39643__$1 = (((((!((map__39643 == null))))?(((((map__39643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39643):map__39643);
var _options = map__39643__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39643__$1,new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(ws)){
var map__39645 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_graph.internals.ws_default_options,ws,re_graph.internals.ws_initial_state], 0));
var map__39645__$1 = (((((!((map__39645 == null))))?(((((map__39645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39645):map__39645);
var ws_options = map__39645__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39645__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ws","ws",86841443),ws_options], null);
} else {
return null;
}
} else {
return null;
}
});
re_graph.internals.http_default_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),re_graph.internals.default_url("http","graphql"),new cljs.core.Keyword(null,"supported-operations","supported-operations",-2116656425),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"mutate","mutate",1422419038),null], null), null),new cljs.core.Keyword(null,"impl","impl",1677848700),cljs.core.PersistentArrayMap.EMPTY], null);
re_graph.internals.http_initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"requests","requests",-733055638),cljs.core.PersistentArrayMap.EMPTY], null);
re_graph.internals.http_options = (function re_graph$internals$http_options(p__39657){
var map__39658 = p__39657;
var map__39658__$1 = (((((!((map__39658 == null))))?(((((map__39658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39658):map__39658);
var options = map__39658__$1;
var http = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39658__$1,new cljs.core.Keyword(null,"http","http",382524695),cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(http)){
var map__39660 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_graph.internals.http_default_options,http,re_graph.internals.http_initial_state], 0));
var map__39660__$1 = (((((!((map__39660 == null))))?(((((map__39660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39660):map__39660);
var http_options = map__39660__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39660__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),http_options], null);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_graph.internals.js.map
