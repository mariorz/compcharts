goog.provide('re_graph.logging');
re_graph.logging.logger = goog.log.getLogger("app");
re_graph.logging.levels = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"severe","severe",-1364500238),goog.debug.Logger.Level.SEVERE,new cljs.core.Keyword(null,"warning","warning",-1685650671),goog.debug.Logger.Level.WARNING,new cljs.core.Keyword(null,"info","info",-317069002),goog.debug.Logger.Level.INFO,new cljs.core.Keyword(null,"config","config",994861415),goog.debug.Logger.Level.CONFIG,new cljs.core.Keyword(null,"fine","fine",-873037193),goog.debug.Logger.Level.FINE,new cljs.core.Keyword(null,"finer","finer",974902846),goog.debug.Logger.Level.FINER,new cljs.core.Keyword(null,"finest","finest",-1359568890),goog.debug.Logger.Level.FINEST], null);
re_graph.logging.log_to_console_BANG_ = (function re_graph$logging$log_to_console_BANG_(){
return (new goog.debug.Console()).setCapturing(true);
});
re_graph.logging.set_level_BANG_ = (function re_graph$logging$set_level_BANG_(level){
return re_graph.logging.logger.setLevel(cljs.core.get.cljs$core$IFn$_invoke$arity$3(re_graph.logging.levels,level,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(re_graph.logging.levels)));
});
re_graph.logging.fmt = (function re_graph$logging$fmt(msgs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,msgs)));
});
re_graph.logging.info = (function re_graph$logging$info(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38563 = arguments.length;
var i__4737__auto___38564 = (0);
while(true){
if((i__4737__auto___38564 < len__4736__auto___38563)){
args__4742__auto__.push((arguments[i__4737__auto___38564]));

var G__38565 = (i__4737__auto___38564 + (1));
i__4737__auto___38564 = G__38565;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_graph.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_graph.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (s){
var msg = re_graph.logging.fmt(s);
return goog.log.info(re_graph.logging.logger,msg);
}));

(re_graph.logging.info.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_graph.logging.info.cljs$lang$applyTo = (function (seq38548){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38548));
}));

re_graph.logging.debug = (function re_graph$logging$debug(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38568 = arguments.length;
var i__4737__auto___38569 = (0);
while(true){
if((i__4737__auto___38569 < len__4736__auto___38568)){
args__4742__auto__.push((arguments[i__4737__auto___38569]));

var G__38570 = (i__4737__auto___38569 + (1));
i__4737__auto___38569 = G__38570;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_graph.logging.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_graph.logging.debug.cljs$core$IFn$_invoke$arity$variadic = (function (s){
var msg = re_graph.logging.fmt(s);
return goog.log.fine(re_graph.logging.logger,msg);
}));

(re_graph.logging.debug.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_graph.logging.debug.cljs$lang$applyTo = (function (seq38550){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38550));
}));

re_graph.logging.warn = (function re_graph$logging$warn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38571 = arguments.length;
var i__4737__auto___38572 = (0);
while(true){
if((i__4737__auto___38572 < len__4736__auto___38571)){
args__4742__auto__.push((arguments[i__4737__auto___38572]));

var G__38573 = (i__4737__auto___38572 + (1));
i__4737__auto___38572 = G__38573;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_graph.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_graph.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (s){
var msg = re_graph.logging.fmt(s);
return goog.log.warning(re_graph.logging.logger,msg);
}));

(re_graph.logging.warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_graph.logging.warn.cljs$lang$applyTo = (function (seq38552){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38552));
}));

re_graph.logging.error = (function re_graph$logging$error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38575 = arguments.length;
var i__4737__auto___38576 = (0);
while(true){
if((i__4737__auto___38576 < len__4736__auto___38575)){
args__4742__auto__.push((arguments[i__4737__auto___38576]));

var G__38577 = (i__4737__auto___38576 + (1));
i__4737__auto___38576 = G__38577;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_graph.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_graph.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (s){
var msg = re_graph.logging.fmt(s);
return goog.log.error(re_graph.logging.logger,msg);
}));

(re_graph.logging.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_graph.logging.error.cljs$lang$applyTo = (function (seq38556){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38556));
}));


//# sourceMappingURL=re_graph.logging.js.map
