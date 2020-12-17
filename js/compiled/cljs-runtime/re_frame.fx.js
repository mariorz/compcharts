goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38678 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38679 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38679);

try{try{var seq__38680 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38681 = null;
var count__38682 = (0);
var i__38683 = (0);
while(true){
if((i__38683 < count__38682)){
var vec__38696 = chunk__38681.cljs$core$IIndexed$_nth$arity$2(null,i__38683);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38696,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38696,(1),null);
var temp__5733__auto___38774 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38774)){
var effect_fn_38775 = temp__5733__auto___38774;
(effect_fn_38775.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38775.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38775.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38776 = seq__38680;
var G__38777 = chunk__38681;
var G__38778 = count__38682;
var G__38779 = (i__38683 + (1));
seq__38680 = G__38776;
chunk__38681 = G__38777;
count__38682 = G__38778;
i__38683 = G__38779;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38680);
if(temp__5735__auto__){
var seq__38680__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38680__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38680__$1);
var G__38783 = cljs.core.chunk_rest(seq__38680__$1);
var G__38784 = c__4556__auto__;
var G__38785 = cljs.core.count(c__4556__auto__);
var G__38786 = (0);
seq__38680 = G__38783;
chunk__38681 = G__38784;
count__38682 = G__38785;
i__38683 = G__38786;
continue;
} else {
var vec__38700 = cljs.core.first(seq__38680__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38700,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38700,(1),null);
var temp__5733__auto___38788 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38788)){
var effect_fn_38789 = temp__5733__auto___38788;
(effect_fn_38789.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38789.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38789.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38791 = cljs.core.next(seq__38680__$1);
var G__38792 = null;
var G__38793 = (0);
var G__38794 = (0);
seq__38680 = G__38791;
chunk__38681 = G__38792;
count__38682 = G__38793;
i__38683 = G__38794;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38326__auto___38795 = re_frame.interop.now();
var duration__38327__auto___38796 = (end__38326__auto___38795 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38327__auto___38796,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38326__auto___38795);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38678);
}} else {
var seq__38703 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38704 = null;
var count__38705 = (0);
var i__38706 = (0);
while(true){
if((i__38706 < count__38705)){
var vec__38720 = chunk__38704.cljs$core$IIndexed$_nth$arity$2(null,i__38706);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38720,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38720,(1),null);
var temp__5733__auto___38803 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38803)){
var effect_fn_38804 = temp__5733__auto___38803;
(effect_fn_38804.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38804.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38804.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38806 = seq__38703;
var G__38807 = chunk__38704;
var G__38808 = count__38705;
var G__38809 = (i__38706 + (1));
seq__38703 = G__38806;
chunk__38704 = G__38807;
count__38705 = G__38808;
i__38706 = G__38809;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38703);
if(temp__5735__auto__){
var seq__38703__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38703__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38703__$1);
var G__38810 = cljs.core.chunk_rest(seq__38703__$1);
var G__38811 = c__4556__auto__;
var G__38812 = cljs.core.count(c__4556__auto__);
var G__38813 = (0);
seq__38703 = G__38810;
chunk__38704 = G__38811;
count__38705 = G__38812;
i__38706 = G__38813;
continue;
} else {
var vec__38724 = cljs.core.first(seq__38703__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38724,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38724,(1),null);
var temp__5733__auto___38815 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38815)){
var effect_fn_38817 = temp__5733__auto___38815;
(effect_fn_38817.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38817.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38817.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38819 = cljs.core.next(seq__38703__$1);
var G__38820 = null;
var G__38821 = (0);
var G__38822 = (0);
seq__38703 = G__38819;
chunk__38704 = G__38820;
count__38705 = G__38821;
i__38706 = G__38822;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__38731 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38732 = null;
var count__38733 = (0);
var i__38734 = (0);
while(true){
if((i__38734 < count__38733)){
var map__38741 = chunk__38732.cljs$core$IIndexed$_nth$arity$2(null,i__38734);
var map__38741__$1 = (((((!((map__38741 == null))))?(((((map__38741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38741):map__38741);
var effect = map__38741__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38741__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38741__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__38731,chunk__38732,count__38733,i__38734,map__38741,map__38741__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__38731,chunk__38732,count__38733,i__38734,map__38741,map__38741__$1,effect,ms,dispatch))
,ms);
}


var G__38838 = seq__38731;
var G__38839 = chunk__38732;
var G__38840 = count__38733;
var G__38841 = (i__38734 + (1));
seq__38731 = G__38838;
chunk__38732 = G__38839;
count__38733 = G__38840;
i__38734 = G__38841;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38731);
if(temp__5735__auto__){
var seq__38731__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38731__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38731__$1);
var G__38842 = cljs.core.chunk_rest(seq__38731__$1);
var G__38843 = c__4556__auto__;
var G__38844 = cljs.core.count(c__4556__auto__);
var G__38845 = (0);
seq__38731 = G__38842;
chunk__38732 = G__38843;
count__38733 = G__38844;
i__38734 = G__38845;
continue;
} else {
var map__38749 = cljs.core.first(seq__38731__$1);
var map__38749__$1 = (((((!((map__38749 == null))))?(((((map__38749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38749):map__38749);
var effect = map__38749__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38749__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38749__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__38731,chunk__38732,count__38733,i__38734,map__38749,map__38749__$1,effect,ms,dispatch,seq__38731__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__38731,chunk__38732,count__38733,i__38734,map__38749,map__38749__$1,effect,ms,dispatch,seq__38731__$1,temp__5735__auto__))
,ms);
}


var G__38857 = cljs.core.next(seq__38731__$1);
var G__38858 = null;
var G__38859 = (0);
var G__38860 = (0);
seq__38731 = G__38857;
chunk__38732 = G__38858;
count__38733 = G__38859;
i__38734 = G__38860;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__38759 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38760 = null;
var count__38761 = (0);
var i__38762 = (0);
while(true){
if((i__38762 < count__38761)){
var event = chunk__38760.cljs$core$IIndexed$_nth$arity$2(null,i__38762);
re_frame.router.dispatch(event);


var G__38861 = seq__38759;
var G__38862 = chunk__38760;
var G__38863 = count__38761;
var G__38864 = (i__38762 + (1));
seq__38759 = G__38861;
chunk__38760 = G__38862;
count__38761 = G__38863;
i__38762 = G__38864;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38759);
if(temp__5735__auto__){
var seq__38759__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38759__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38759__$1);
var G__38866 = cljs.core.chunk_rest(seq__38759__$1);
var G__38867 = c__4556__auto__;
var G__38869 = cljs.core.count(c__4556__auto__);
var G__38870 = (0);
seq__38759 = G__38866;
chunk__38760 = G__38867;
count__38761 = G__38869;
i__38762 = G__38870;
continue;
} else {
var event = cljs.core.first(seq__38759__$1);
re_frame.router.dispatch(event);


var G__38872 = cljs.core.next(seq__38759__$1);
var G__38873 = null;
var G__38874 = (0);
var G__38875 = (0);
seq__38759 = G__38872;
chunk__38760 = G__38873;
count__38761 = G__38874;
i__38762 = G__38875;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38768 = cljs.core.seq(value);
var chunk__38769 = null;
var count__38770 = (0);
var i__38771 = (0);
while(true){
if((i__38771 < count__38770)){
var event = chunk__38769.cljs$core$IIndexed$_nth$arity$2(null,i__38771);
clear_event(event);


var G__38876 = seq__38768;
var G__38877 = chunk__38769;
var G__38878 = count__38770;
var G__38879 = (i__38771 + (1));
seq__38768 = G__38876;
chunk__38769 = G__38877;
count__38770 = G__38878;
i__38771 = G__38879;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38768);
if(temp__5735__auto__){
var seq__38768__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38768__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38768__$1);
var G__38886 = cljs.core.chunk_rest(seq__38768__$1);
var G__38887 = c__4556__auto__;
var G__38888 = cljs.core.count(c__4556__auto__);
var G__38889 = (0);
seq__38768 = G__38886;
chunk__38769 = G__38887;
count__38770 = G__38888;
i__38771 = G__38889;
continue;
} else {
var event = cljs.core.first(seq__38768__$1);
clear_event(event);


var G__38890 = cljs.core.next(seq__38768__$1);
var G__38891 = null;
var G__38892 = (0);
var G__38893 = (0);
seq__38768 = G__38890;
chunk__38769 = G__38891;
count__38770 = G__38892;
i__38771 = G__38893;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
