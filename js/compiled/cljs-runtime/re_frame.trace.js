goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38346){
var map__38347 = p__38346;
var map__38347__$1 = (((((!((map__38347 == null))))?(((((map__38347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38347):map__38347);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38347__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38347__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38347__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38347__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38349_38387 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38350_38388 = null;
var count__38351_38389 = (0);
var i__38352_38390 = (0);
while(true){
if((i__38352_38390 < count__38351_38389)){
var vec__38363_38392 = chunk__38350_38388.cljs$core$IIndexed$_nth$arity$2(null,i__38352_38390);
var k_38393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38363_38392,(0),null);
var cb_38394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38363_38392,(1),null);
try{var G__38367_38400 = cljs.core.deref(re_frame.trace.traces);
(cb_38394.cljs$core$IFn$_invoke$arity$1 ? cb_38394.cljs$core$IFn$_invoke$arity$1(G__38367_38400) : cb_38394.call(null,G__38367_38400));
}catch (e38366){var e_38401 = e38366;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38393,"while storing",cljs.core.deref(re_frame.trace.traces),e_38401], 0));
}

var G__38402 = seq__38349_38387;
var G__38403 = chunk__38350_38388;
var G__38404 = count__38351_38389;
var G__38405 = (i__38352_38390 + (1));
seq__38349_38387 = G__38402;
chunk__38350_38388 = G__38403;
count__38351_38389 = G__38404;
i__38352_38390 = G__38405;
continue;
} else {
var temp__5735__auto___38409 = cljs.core.seq(seq__38349_38387);
if(temp__5735__auto___38409){
var seq__38349_38410__$1 = temp__5735__auto___38409;
if(cljs.core.chunked_seq_QMARK_(seq__38349_38410__$1)){
var c__4556__auto___38411 = cljs.core.chunk_first(seq__38349_38410__$1);
var G__38412 = cljs.core.chunk_rest(seq__38349_38410__$1);
var G__38413 = c__4556__auto___38411;
var G__38414 = cljs.core.count(c__4556__auto___38411);
var G__38415 = (0);
seq__38349_38387 = G__38412;
chunk__38350_38388 = G__38413;
count__38351_38389 = G__38414;
i__38352_38390 = G__38415;
continue;
} else {
var vec__38368_38416 = cljs.core.first(seq__38349_38410__$1);
var k_38417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38368_38416,(0),null);
var cb_38418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38368_38416,(1),null);
try{var G__38372_38419 = cljs.core.deref(re_frame.trace.traces);
(cb_38418.cljs$core$IFn$_invoke$arity$1 ? cb_38418.cljs$core$IFn$_invoke$arity$1(G__38372_38419) : cb_38418.call(null,G__38372_38419));
}catch (e38371){var e_38420 = e38371;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38417,"while storing",cljs.core.deref(re_frame.trace.traces),e_38420], 0));
}

var G__38422 = cljs.core.next(seq__38349_38410__$1);
var G__38423 = null;
var G__38424 = (0);
var G__38425 = (0);
seq__38349_38387 = G__38422;
chunk__38350_38388 = G__38423;
count__38351_38389 = G__38424;
i__38352_38390 = G__38425;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
