goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33482 = arguments.length;
switch (G__33482) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33489 = (function (f,blockable,meta33490){
this.f = f;
this.blockable = blockable;
this.meta33490 = meta33490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33491,meta33490__$1){
var self__ = this;
var _33491__$1 = this;
return (new cljs.core.async.t_cljs$core$async33489(self__.f,self__.blockable,meta33490__$1));
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33491){
var self__ = this;
var _33491__$1 = this;
return self__.meta33490;
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33490","meta33490",-1671501259,null)], null);
}));

(cljs.core.async.t_cljs$core$async33489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33489");

(cljs.core.async.t_cljs$core$async33489.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33489.
 */
cljs.core.async.__GT_t_cljs$core$async33489 = (function cljs$core$async$__GT_t_cljs$core$async33489(f__$1,blockable__$1,meta33490){
return (new cljs.core.async.t_cljs$core$async33489(f__$1,blockable__$1,meta33490));
});

}

return (new cljs.core.async.t_cljs$core$async33489(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33554 = arguments.length;
switch (G__33554) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33567 = arguments.length;
switch (G__33567) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33584 = arguments.length;
switch (G__33584) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35509 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35509) : fn1.call(null,val_35509));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35509) : fn1.call(null,val_35509));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33588 = arguments.length;
switch (G__33588) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___35518 = n;
var x_35519 = (0);
while(true){
if((x_35519 < n__4613__auto___35518)){
(a[x_35519] = x_35519);

var G__35522 = (x_35519 + (1));
x_35519 = G__35522;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33615 = (function (flag,meta33616){
this.flag = flag;
this.meta33616 = meta33616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33617,meta33616__$1){
var self__ = this;
var _33617__$1 = this;
return (new cljs.core.async.t_cljs$core$async33615(self__.flag,meta33616__$1));
}));

(cljs.core.async.t_cljs$core$async33615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33617){
var self__ = this;
var _33617__$1 = this;
return self__.meta33616;
}));

(cljs.core.async.t_cljs$core$async33615.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33615.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33616","meta33616",-1595745044,null)], null);
}));

(cljs.core.async.t_cljs$core$async33615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33615");

(cljs.core.async.t_cljs$core$async33615.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33615.
 */
cljs.core.async.__GT_t_cljs$core$async33615 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33615(flag__$1,meta33616){
return (new cljs.core.async.t_cljs$core$async33615(flag__$1,meta33616));
});

}

return (new cljs.core.async.t_cljs$core$async33615(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33633 = (function (flag,cb,meta33634){
this.flag = flag;
this.cb = cb;
this.meta33634 = meta33634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33635,meta33634__$1){
var self__ = this;
var _33635__$1 = this;
return (new cljs.core.async.t_cljs$core$async33633(self__.flag,self__.cb,meta33634__$1));
}));

(cljs.core.async.t_cljs$core$async33633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33635){
var self__ = this;
var _33635__$1 = this;
return self__.meta33634;
}));

(cljs.core.async.t_cljs$core$async33633.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33633.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33633.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33633.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33634","meta33634",164471265,null)], null);
}));

(cljs.core.async.t_cljs$core$async33633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33633");

(cljs.core.async.t_cljs$core$async33633.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33633.
 */
cljs.core.async.__GT_t_cljs$core$async33633 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33633(flag__$1,cb__$1,meta33634){
return (new cljs.core.async.t_cljs$core$async33633(flag__$1,cb__$1,meta33634));
});

}

return (new cljs.core.async.t_cljs$core$async33633(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33641_SHARP_){
var G__33646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33641_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33646) : fret.call(null,G__33646));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33642_SHARP_){
var G__33647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33642_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33647) : fret.call(null,G__33647));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35542 = (i + (1));
i = G__35542;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35543 = arguments.length;
var i__4737__auto___35544 = (0);
while(true){
if((i__4737__auto___35544 < len__4736__auto___35543)){
args__4742__auto__.push((arguments[i__4737__auto___35544]));

var G__35545 = (i__4737__auto___35544 + (1));
i__4737__auto___35544 = G__35545;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33661){
var map__33662 = p__33661;
var map__33662__$1 = (((((!((map__33662 == null))))?(((((map__33662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33662):map__33662);
var opts = map__33662__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33651){
var G__33652 = cljs.core.first(seq33651);
var seq33651__$1 = cljs.core.next(seq33651);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33652,seq33651__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33674 = arguments.length;
switch (G__33674) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33382__auto___35554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_33728){
var state_val_33730 = (state_33728[(1)]);
if((state_val_33730 === (7))){
var inst_33722 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33740_35555 = state_33728__$1;
(statearr_33740_35555[(2)] = inst_33722);

(statearr_33740_35555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (1))){
var state_33728__$1 = state_33728;
var statearr_33741_35557 = state_33728__$1;
(statearr_33741_35557[(2)] = null);

(statearr_33741_35557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (4))){
var inst_33701 = (state_33728[(7)]);
var inst_33701__$1 = (state_33728[(2)]);
var inst_33706 = (inst_33701__$1 == null);
var state_33728__$1 = (function (){var statearr_33744 = state_33728;
(statearr_33744[(7)] = inst_33701__$1);

return statearr_33744;
})();
if(cljs.core.truth_(inst_33706)){
var statearr_33745_35560 = state_33728__$1;
(statearr_33745_35560[(1)] = (5));

} else {
var statearr_33746_35561 = state_33728__$1;
(statearr_33746_35561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (13))){
var state_33728__$1 = state_33728;
var statearr_33748_35563 = state_33728__$1;
(statearr_33748_35563[(2)] = null);

(statearr_33748_35563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (6))){
var inst_33701 = (state_33728[(7)]);
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33728__$1,(11),to,inst_33701);
} else {
if((state_val_33730 === (3))){
var inst_33724 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33728__$1,inst_33724);
} else {
if((state_val_33730 === (12))){
var state_33728__$1 = state_33728;
var statearr_33749_35568 = state_33728__$1;
(statearr_33749_35568[(2)] = null);

(statearr_33749_35568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (2))){
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33728__$1,(4),from);
} else {
if((state_val_33730 === (11))){
var inst_33715 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
if(cljs.core.truth_(inst_33715)){
var statearr_33750_35569 = state_33728__$1;
(statearr_33750_35569[(1)] = (12));

} else {
var statearr_33751_35570 = state_33728__$1;
(statearr_33751_35570[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (9))){
var state_33728__$1 = state_33728;
var statearr_33752_35572 = state_33728__$1;
(statearr_33752_35572[(2)] = null);

(statearr_33752_35572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (5))){
var state_33728__$1 = state_33728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33753_35576 = state_33728__$1;
(statearr_33753_35576[(1)] = (8));

} else {
var statearr_33754_35577 = state_33728__$1;
(statearr_33754_35577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (14))){
var inst_33720 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33755_35578 = state_33728__$1;
(statearr_33755_35578[(2)] = inst_33720);

(statearr_33755_35578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (10))){
var inst_33712 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33757_35579 = state_33728__$1;
(statearr_33757_35579[(2)] = inst_33712);

(statearr_33757_35579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (8))){
var inst_33709 = cljs.core.async.close_BANG_(to);
var state_33728__$1 = state_33728;
var statearr_33758_35581 = state_33728__$1;
(statearr_33758_35581[(2)] = inst_33709);

(statearr_33758_35581[(1)] = (10));


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
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_33759 = [null,null,null,null,null,null,null,null];
(statearr_33759[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_33759[(1)] = (1));

return statearr_33759;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_33728){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_33728);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33760){var ex__33279__auto__ = e33760;
var statearr_33761_35585 = state_33728;
(statearr_33761_35585[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_33728[(4)]))){
var statearr_33762_35587 = state_33728;
(statearr_33762_35587[(1)] = cljs.core.first((state_33728[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35589 = state_33728;
state_33728 = G__35589;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_33728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_33728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_33763 = f__33383__auto__();
(statearr_33763[(6)] = c__33382__auto___35554);

return statearr_33763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33768){
var vec__33770 = p__33768;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33770,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33770,(1),null);
var job = vec__33770;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33382__auto___35593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_33793){
var state_val_33794 = (state_33793[(1)]);
if((state_val_33794 === (1))){
var state_33793__$1 = state_33793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33793__$1,(2),res,v);
} else {
if((state_val_33794 === (2))){
var inst_33790 = (state_33793[(2)]);
var inst_33791 = cljs.core.async.close_BANG_(res);
var state_33793__$1 = (function (){var statearr_33816 = state_33793;
(statearr_33816[(7)] = inst_33790);

return statearr_33816;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33793__$1,inst_33791);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0 = (function (){
var statearr_33821 = [null,null,null,null,null,null,null,null];
(statearr_33821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__);

(statearr_33821[(1)] = (1));

return statearr_33821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1 = (function (state_33793){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_33793);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33822){var ex__33279__auto__ = e33822;
var statearr_33823_35596 = state_33793;
(statearr_33823_35596[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_33793[(4)]))){
var statearr_33824_35597 = state_33793;
(statearr_33824_35597[(1)] = cljs.core.first((state_33793[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35598 = state_33793;
state_33793 = G__35598;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = function(state_33793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1.call(this,state_33793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_33826 = f__33383__auto__();
(statearr_33826[(6)] = c__33382__auto___35593);

return statearr_33826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33827){
var vec__33828 = p__33827;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33828,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33828,(1),null);
var job = vec__33828;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___35601 = n;
var __35602 = (0);
while(true){
if((__35602 < n__4613__auto___35601)){
var G__33831_35603 = type;
var G__33831_35604__$1 = (((G__33831_35603 instanceof cljs.core.Keyword))?G__33831_35603.fqn:null);
switch (G__33831_35604__$1) {
case "compute":
var c__33382__auto___35606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35602,c__33382__auto___35606,G__33831_35603,G__33831_35604__$1,n__4613__auto___35601,jobs,results,process,async){
return (function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = ((function (__35602,c__33382__auto___35606,G__33831_35603,G__33831_35604__$1,n__4613__auto___35601,jobs,results,process,async){
return (function (state_33844){
var state_val_33845 = (state_33844[(1)]);
if((state_val_33845 === (1))){
var state_33844__$1 = state_33844;
var statearr_33847_35610 = state_33844__$1;
(statearr_33847_35610[(2)] = null);

(statearr_33847_35610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (2))){
var state_33844__$1 = state_33844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33844__$1,(4),jobs);
} else {
if((state_val_33845 === (3))){
var inst_33842 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33844__$1,inst_33842);
} else {
if((state_val_33845 === (4))){
var inst_33834 = (state_33844[(2)]);
var inst_33835 = process(inst_33834);
var state_33844__$1 = state_33844;
if(cljs.core.truth_(inst_33835)){
var statearr_33848_35616 = state_33844__$1;
(statearr_33848_35616[(1)] = (5));

} else {
var statearr_33849_35617 = state_33844__$1;
(statearr_33849_35617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (5))){
var state_33844__$1 = state_33844;
var statearr_33850_35618 = state_33844__$1;
(statearr_33850_35618[(2)] = null);

(statearr_33850_35618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (6))){
var state_33844__$1 = state_33844;
var statearr_33851_35619 = state_33844__$1;
(statearr_33851_35619[(2)] = null);

(statearr_33851_35619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33845 === (7))){
var inst_33840 = (state_33844[(2)]);
var state_33844__$1 = state_33844;
var statearr_33852_35623 = state_33844__$1;
(statearr_33852_35623[(2)] = inst_33840);

(statearr_33852_35623[(1)] = (3));


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
});})(__35602,c__33382__auto___35606,G__33831_35603,G__33831_35604__$1,n__4613__auto___35601,jobs,results,process,async))
;
return ((function (__35602,switch__33275__auto__,c__33382__auto___35606,G__33831_35603,G__33831_35604__$1,n__4613__auto___35601,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0 = (function (){
var statearr_33853 = [null,null,null,null,null,null,null];
(statearr_33853[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__);

(statearr_33853[(1)] = (1));

return statearr_33853;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1 = (function (state_33844){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_33844);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33854){var ex__33279__auto__ = e33854;
var statearr_33855_35624 = state_33844;
(statearr_33855_35624[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_33844[(4)]))){
var statearr_33856_35626 = state_33844;
(statearr_33856_35626[(1)] = cljs.core.first((state_33844[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35627 = state_33844;
state_33844 = G__35627;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = function(state_33844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1.call(this,state_33844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__;
})()
;})(__35602,switch__33275__auto__,c__33382__auto___35606,G__33831_35603,G__33831_35604__$1,n__4613__auto___35601,jobs,results,process,async))
})();
var state__33384__auto__ = (function (){var statearr_33857 = f__33383__auto__();
(statearr_33857[(6)] = c__33382__auto___35606);

return statearr_33857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
});})(__35602,c__33382__auto___35606,G__33831_35603,G__33831_35604__$1,n__4613__auto___35601,jobs,results,process,async))
);


break;
case "async":
var c__33382__auto___35628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35602,c__33382__auto___35628,G__33831_35603,G__33831_35604__$1,n__4613__auto___35601,jobs,results,process,async){
return (function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = ((function (__35602,c__33382__auto___35628,G__33831_35603,G__33831_35604__$1,n__4613__auto___35601,jobs,results,process,async){
return (function (state_33870){
var state_val_33871 = (state_33870[(1)]);
if((state_val_33871 === (1))){
var state_33870__$1 = state_33870;
var statearr_33872_35632 = state_33870__$1;
(statearr_33872_35632[(2)] = null);

(statearr_33872_35632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (2))){
var state_33870__$1 = state_33870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33870__$1,(4),jobs);
} else {
if((state_val_33871 === (3))){
var inst_33868 = (state_33870[(2)]);
var state_33870__$1 = state_33870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33870__$1,inst_33868);
} else {
if((state_val_33871 === (4))){
var inst_33860 = (state_33870[(2)]);
var inst_33861 = async(inst_33860);
var state_33870__$1 = state_33870;
if(cljs.core.truth_(inst_33861)){
var statearr_33873_35636 = state_33870__$1;
(statearr_33873_35636[(1)] = (5));

} else {
var statearr_33874_35638 = state_33870__$1;
(statearr_33874_35638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (5))){
var state_33870__$1 = state_33870;
var statearr_33875_35639 = state_33870__$1;
(statearr_33875_35639[(2)] = null);

(statearr_33875_35639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (6))){
var state_33870__$1 = state_33870;
var statearr_33876_35642 = state_33870__$1;
(statearr_33876_35642[(2)] = null);

(statearr_33876_35642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33871 === (7))){
var inst_33866 = (state_33870[(2)]);
var state_33870__$1 = state_33870;
var statearr_33877_35644 = state_33870__$1;
(statearr_33877_35644[(2)] = inst_33866);

(statearr_33877_35644[(1)] = (3));


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
});})(__35602,c__33382__auto___35628,G__33831_35603,G__33831_35604__$1,n__4613__auto___35601,jobs,results,process,async))
;
return ((function (__35602,switch__33275__auto__,c__33382__auto___35628,G__33831_35603,G__33831_35604__$1,n__4613__auto___35601,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0 = (function (){
var statearr_33878 = [null,null,null,null,null,null,null];
(statearr_33878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__);

(statearr_33878[(1)] = (1));

return statearr_33878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1 = (function (state_33870){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_33870);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33879){var ex__33279__auto__ = e33879;
var statearr_33880_35648 = state_33870;
(statearr_33880_35648[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_33870[(4)]))){
var statearr_33881_35649 = state_33870;
(statearr_33881_35649[(1)] = cljs.core.first((state_33870[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35650 = state_33870;
state_33870 = G__35650;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = function(state_33870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1.call(this,state_33870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__;
})()
;})(__35602,switch__33275__auto__,c__33382__auto___35628,G__33831_35603,G__33831_35604__$1,n__4613__auto___35601,jobs,results,process,async))
})();
var state__33384__auto__ = (function (){var statearr_33882 = f__33383__auto__();
(statearr_33882[(6)] = c__33382__auto___35628);

return statearr_33882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
});})(__35602,c__33382__auto___35628,G__33831_35603,G__33831_35604__$1,n__4613__auto___35601,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33831_35604__$1)].join('')));

}

var G__35656 = (__35602 + (1));
__35602 = G__35656;
continue;
} else {
}
break;
}

var c__33382__auto___35657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_33904){
var state_val_33905 = (state_33904[(1)]);
if((state_val_33905 === (7))){
var inst_33900 = (state_33904[(2)]);
var state_33904__$1 = state_33904;
var statearr_33906_35658 = state_33904__$1;
(statearr_33906_35658[(2)] = inst_33900);

(statearr_33906_35658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (1))){
var state_33904__$1 = state_33904;
var statearr_33907_35660 = state_33904__$1;
(statearr_33907_35660[(2)] = null);

(statearr_33907_35660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (4))){
var inst_33885 = (state_33904[(7)]);
var inst_33885__$1 = (state_33904[(2)]);
var inst_33886 = (inst_33885__$1 == null);
var state_33904__$1 = (function (){var statearr_33908 = state_33904;
(statearr_33908[(7)] = inst_33885__$1);

return statearr_33908;
})();
if(cljs.core.truth_(inst_33886)){
var statearr_33909_35662 = state_33904__$1;
(statearr_33909_35662[(1)] = (5));

} else {
var statearr_33910_35663 = state_33904__$1;
(statearr_33910_35663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (6))){
var inst_33890 = (state_33904[(8)]);
var inst_33885 = (state_33904[(7)]);
var inst_33890__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33891 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33892 = [inst_33885,inst_33890__$1];
var inst_33893 = (new cljs.core.PersistentVector(null,2,(5),inst_33891,inst_33892,null));
var state_33904__$1 = (function (){var statearr_33911 = state_33904;
(statearr_33911[(8)] = inst_33890__$1);

return statearr_33911;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33904__$1,(8),jobs,inst_33893);
} else {
if((state_val_33905 === (3))){
var inst_33902 = (state_33904[(2)]);
var state_33904__$1 = state_33904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33904__$1,inst_33902);
} else {
if((state_val_33905 === (2))){
var state_33904__$1 = state_33904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33904__$1,(4),from);
} else {
if((state_val_33905 === (9))){
var inst_33897 = (state_33904[(2)]);
var state_33904__$1 = (function (){var statearr_33912 = state_33904;
(statearr_33912[(9)] = inst_33897);

return statearr_33912;
})();
var statearr_33913_35664 = state_33904__$1;
(statearr_33913_35664[(2)] = null);

(statearr_33913_35664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (5))){
var inst_33888 = cljs.core.async.close_BANG_(jobs);
var state_33904__$1 = state_33904;
var statearr_33914_35665 = state_33904__$1;
(statearr_33914_35665[(2)] = inst_33888);

(statearr_33914_35665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (8))){
var inst_33890 = (state_33904[(8)]);
var inst_33895 = (state_33904[(2)]);
var state_33904__$1 = (function (){var statearr_33915 = state_33904;
(statearr_33915[(10)] = inst_33895);

return statearr_33915;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33904__$1,(9),results,inst_33890);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0 = (function (){
var statearr_33916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__);

(statearr_33916[(1)] = (1));

return statearr_33916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1 = (function (state_33904){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_33904);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33917){var ex__33279__auto__ = e33917;
var statearr_33918_35676 = state_33904;
(statearr_33918_35676[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_33904[(4)]))){
var statearr_33919_35677 = state_33904;
(statearr_33919_35677[(1)] = cljs.core.first((state_33904[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35681 = state_33904;
state_33904 = G__35681;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = function(state_33904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1.call(this,state_33904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_33920 = f__33383__auto__();
(statearr_33920[(6)] = c__33382__auto___35657);

return statearr_33920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


var c__33382__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_33958){
var state_val_33959 = (state_33958[(1)]);
if((state_val_33959 === (7))){
var inst_33954 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_33960_35685 = state_33958__$1;
(statearr_33960_35685[(2)] = inst_33954);

(statearr_33960_35685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (20))){
var state_33958__$1 = state_33958;
var statearr_33961_35686 = state_33958__$1;
(statearr_33961_35686[(2)] = null);

(statearr_33961_35686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (1))){
var state_33958__$1 = state_33958;
var statearr_33962_35690 = state_33958__$1;
(statearr_33962_35690[(2)] = null);

(statearr_33962_35690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (4))){
var inst_33923 = (state_33958[(7)]);
var inst_33923__$1 = (state_33958[(2)]);
var inst_33924 = (inst_33923__$1 == null);
var state_33958__$1 = (function (){var statearr_33963 = state_33958;
(statearr_33963[(7)] = inst_33923__$1);

return statearr_33963;
})();
if(cljs.core.truth_(inst_33924)){
var statearr_33964_35691 = state_33958__$1;
(statearr_33964_35691[(1)] = (5));

} else {
var statearr_33965_35696 = state_33958__$1;
(statearr_33965_35696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (15))){
var inst_33936 = (state_33958[(8)]);
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33958__$1,(18),to,inst_33936);
} else {
if((state_val_33959 === (21))){
var inst_33949 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_33966_35700 = state_33958__$1;
(statearr_33966_35700[(2)] = inst_33949);

(statearr_33966_35700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (13))){
var inst_33951 = (state_33958[(2)]);
var state_33958__$1 = (function (){var statearr_33967 = state_33958;
(statearr_33967[(9)] = inst_33951);

return statearr_33967;
})();
var statearr_33968_35701 = state_33958__$1;
(statearr_33968_35701[(2)] = null);

(statearr_33968_35701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (6))){
var inst_33923 = (state_33958[(7)]);
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33958__$1,(11),inst_33923);
} else {
if((state_val_33959 === (17))){
var inst_33944 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
if(cljs.core.truth_(inst_33944)){
var statearr_33969_35705 = state_33958__$1;
(statearr_33969_35705[(1)] = (19));

} else {
var statearr_33970_35706 = state_33958__$1;
(statearr_33970_35706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (3))){
var inst_33956 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33958__$1,inst_33956);
} else {
if((state_val_33959 === (12))){
var inst_33933 = (state_33958[(10)]);
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33958__$1,(14),inst_33933);
} else {
if((state_val_33959 === (2))){
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33958__$1,(4),results);
} else {
if((state_val_33959 === (19))){
var state_33958__$1 = state_33958;
var statearr_33971_35712 = state_33958__$1;
(statearr_33971_35712[(2)] = null);

(statearr_33971_35712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (11))){
var inst_33933 = (state_33958[(2)]);
var state_33958__$1 = (function (){var statearr_33972 = state_33958;
(statearr_33972[(10)] = inst_33933);

return statearr_33972;
})();
var statearr_33973_35717 = state_33958__$1;
(statearr_33973_35717[(2)] = null);

(statearr_33973_35717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (9))){
var state_33958__$1 = state_33958;
var statearr_33974_35718 = state_33958__$1;
(statearr_33974_35718[(2)] = null);

(statearr_33974_35718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (5))){
var state_33958__$1 = state_33958;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33975_35722 = state_33958__$1;
(statearr_33975_35722[(1)] = (8));

} else {
var statearr_33976_35724 = state_33958__$1;
(statearr_33976_35724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (14))){
var inst_33936 = (state_33958[(8)]);
var inst_33936__$1 = (state_33958[(2)]);
var inst_33937 = (inst_33936__$1 == null);
var inst_33938 = cljs.core.not(inst_33937);
var state_33958__$1 = (function (){var statearr_33977 = state_33958;
(statearr_33977[(8)] = inst_33936__$1);

return statearr_33977;
})();
if(inst_33938){
var statearr_33978_35726 = state_33958__$1;
(statearr_33978_35726[(1)] = (15));

} else {
var statearr_33979_35727 = state_33958__$1;
(statearr_33979_35727[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (16))){
var state_33958__$1 = state_33958;
var statearr_33984_35729 = state_33958__$1;
(statearr_33984_35729[(2)] = false);

(statearr_33984_35729[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (10))){
var inst_33930 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_33985_35730 = state_33958__$1;
(statearr_33985_35730[(2)] = inst_33930);

(statearr_33985_35730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (18))){
var inst_33941 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_33986_35731 = state_33958__$1;
(statearr_33986_35731[(2)] = inst_33941);

(statearr_33986_35731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (8))){
var inst_33927 = cljs.core.async.close_BANG_(to);
var state_33958__$1 = state_33958;
var statearr_33987_35732 = state_33958__$1;
(statearr_33987_35732[(2)] = inst_33927);

(statearr_33987_35732[(1)] = (10));


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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0 = (function (){
var statearr_33988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__);

(statearr_33988[(1)] = (1));

return statearr_33988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1 = (function (state_33958){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_33958);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33989){var ex__33279__auto__ = e33989;
var statearr_33990_35733 = state_33958;
(statearr_33990_35733[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_33958[(4)]))){
var statearr_33991_35734 = state_33958;
(statearr_33991_35734[(1)] = cljs.core.first((state_33958[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35738 = state_33958;
state_33958 = G__35738;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__ = function(state_33958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1.call(this,state_33958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_33992 = f__33383__auto__();
(statearr_33992[(6)] = c__33382__auto__);

return statearr_33992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));

return c__33382__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33994 = arguments.length;
switch (G__33994) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33996 = arguments.length;
switch (G__33996) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34000 = arguments.length;
switch (G__34000) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33382__auto___35757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_34026){
var state_val_34027 = (state_34026[(1)]);
if((state_val_34027 === (7))){
var inst_34022 = (state_34026[(2)]);
var state_34026__$1 = state_34026;
var statearr_34028_35762 = state_34026__$1;
(statearr_34028_35762[(2)] = inst_34022);

(statearr_34028_35762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (1))){
var state_34026__$1 = state_34026;
var statearr_34029_35764 = state_34026__$1;
(statearr_34029_35764[(2)] = null);

(statearr_34029_35764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (4))){
var inst_34003 = (state_34026[(7)]);
var inst_34003__$1 = (state_34026[(2)]);
var inst_34004 = (inst_34003__$1 == null);
var state_34026__$1 = (function (){var statearr_34030 = state_34026;
(statearr_34030[(7)] = inst_34003__$1);

return statearr_34030;
})();
if(cljs.core.truth_(inst_34004)){
var statearr_34031_35765 = state_34026__$1;
(statearr_34031_35765[(1)] = (5));

} else {
var statearr_34032_35766 = state_34026__$1;
(statearr_34032_35766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (13))){
var state_34026__$1 = state_34026;
var statearr_34033_35767 = state_34026__$1;
(statearr_34033_35767[(2)] = null);

(statearr_34033_35767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (6))){
var inst_34003 = (state_34026[(7)]);
var inst_34009 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34003) : p.call(null,inst_34003));
var state_34026__$1 = state_34026;
if(cljs.core.truth_(inst_34009)){
var statearr_34034_35773 = state_34026__$1;
(statearr_34034_35773[(1)] = (9));

} else {
var statearr_34035_35774 = state_34026__$1;
(statearr_34035_35774[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (3))){
var inst_34024 = (state_34026[(2)]);
var state_34026__$1 = state_34026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34026__$1,inst_34024);
} else {
if((state_val_34027 === (12))){
var state_34026__$1 = state_34026;
var statearr_34036_35776 = state_34026__$1;
(statearr_34036_35776[(2)] = null);

(statearr_34036_35776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (2))){
var state_34026__$1 = state_34026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34026__$1,(4),ch);
} else {
if((state_val_34027 === (11))){
var inst_34003 = (state_34026[(7)]);
var inst_34013 = (state_34026[(2)]);
var state_34026__$1 = state_34026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34026__$1,(8),inst_34013,inst_34003);
} else {
if((state_val_34027 === (9))){
var state_34026__$1 = state_34026;
var statearr_34037_35781 = state_34026__$1;
(statearr_34037_35781[(2)] = tc);

(statearr_34037_35781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (5))){
var inst_34006 = cljs.core.async.close_BANG_(tc);
var inst_34007 = cljs.core.async.close_BANG_(fc);
var state_34026__$1 = (function (){var statearr_34038 = state_34026;
(statearr_34038[(8)] = inst_34006);

return statearr_34038;
})();
var statearr_34039_35786 = state_34026__$1;
(statearr_34039_35786[(2)] = inst_34007);

(statearr_34039_35786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (14))){
var inst_34020 = (state_34026[(2)]);
var state_34026__$1 = state_34026;
var statearr_34040_35787 = state_34026__$1;
(statearr_34040_35787[(2)] = inst_34020);

(statearr_34040_35787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (10))){
var state_34026__$1 = state_34026;
var statearr_34041_35791 = state_34026__$1;
(statearr_34041_35791[(2)] = fc);

(statearr_34041_35791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (8))){
var inst_34015 = (state_34026[(2)]);
var state_34026__$1 = state_34026;
if(cljs.core.truth_(inst_34015)){
var statearr_34042_35808 = state_34026__$1;
(statearr_34042_35808[(1)] = (12));

} else {
var statearr_34043_35809 = state_34026__$1;
(statearr_34043_35809[(1)] = (13));

}

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
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_34048 = [null,null,null,null,null,null,null,null,null];
(statearr_34048[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_34048[(1)] = (1));

return statearr_34048;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_34026){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_34026);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34049){var ex__33279__auto__ = e34049;
var statearr_34050_35814 = state_34026;
(statearr_34050_35814[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_34026[(4)]))){
var statearr_34051_35815 = state_34026;
(statearr_34051_35815[(1)] = cljs.core.first((state_34026[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35816 = state_34026;
state_34026 = G__35816;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_34026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_34026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_34052 = f__33383__auto__();
(statearr_34052[(6)] = c__33382__auto___35757);

return statearr_34052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33382__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_34074){
var state_val_34075 = (state_34074[(1)]);
if((state_val_34075 === (7))){
var inst_34070 = (state_34074[(2)]);
var state_34074__$1 = state_34074;
var statearr_34076_35824 = state_34074__$1;
(statearr_34076_35824[(2)] = inst_34070);

(statearr_34076_35824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (1))){
var inst_34053 = init;
var inst_34054 = inst_34053;
var state_34074__$1 = (function (){var statearr_34077 = state_34074;
(statearr_34077[(7)] = inst_34054);

return statearr_34077;
})();
var statearr_34078_35830 = state_34074__$1;
(statearr_34078_35830[(2)] = null);

(statearr_34078_35830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (4))){
var inst_34057 = (state_34074[(8)]);
var inst_34057__$1 = (state_34074[(2)]);
var inst_34058 = (inst_34057__$1 == null);
var state_34074__$1 = (function (){var statearr_34079 = state_34074;
(statearr_34079[(8)] = inst_34057__$1);

return statearr_34079;
})();
if(cljs.core.truth_(inst_34058)){
var statearr_34080_35832 = state_34074__$1;
(statearr_34080_35832[(1)] = (5));

} else {
var statearr_34081_35833 = state_34074__$1;
(statearr_34081_35833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (6))){
var inst_34061 = (state_34074[(9)]);
var inst_34054 = (state_34074[(7)]);
var inst_34057 = (state_34074[(8)]);
var inst_34061__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34054,inst_34057) : f.call(null,inst_34054,inst_34057));
var inst_34062 = cljs.core.reduced_QMARK_(inst_34061__$1);
var state_34074__$1 = (function (){var statearr_34082 = state_34074;
(statearr_34082[(9)] = inst_34061__$1);

return statearr_34082;
})();
if(inst_34062){
var statearr_34083_35834 = state_34074__$1;
(statearr_34083_35834[(1)] = (8));

} else {
var statearr_34084_35835 = state_34074__$1;
(statearr_34084_35835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (3))){
var inst_34072 = (state_34074[(2)]);
var state_34074__$1 = state_34074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34074__$1,inst_34072);
} else {
if((state_val_34075 === (2))){
var state_34074__$1 = state_34074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34074__$1,(4),ch);
} else {
if((state_val_34075 === (9))){
var inst_34061 = (state_34074[(9)]);
var inst_34054 = inst_34061;
var state_34074__$1 = (function (){var statearr_34089 = state_34074;
(statearr_34089[(7)] = inst_34054);

return statearr_34089;
})();
var statearr_34090_35839 = state_34074__$1;
(statearr_34090_35839[(2)] = null);

(statearr_34090_35839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (5))){
var inst_34054 = (state_34074[(7)]);
var state_34074__$1 = state_34074;
var statearr_34091_35840 = state_34074__$1;
(statearr_34091_35840[(2)] = inst_34054);

(statearr_34091_35840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (10))){
var inst_34068 = (state_34074[(2)]);
var state_34074__$1 = state_34074;
var statearr_34092_35847 = state_34074__$1;
(statearr_34092_35847[(2)] = inst_34068);

(statearr_34092_35847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (8))){
var inst_34061 = (state_34074[(9)]);
var inst_34064 = cljs.core.deref(inst_34061);
var state_34074__$1 = state_34074;
var statearr_34093_35848 = state_34074__$1;
(statearr_34093_35848[(2)] = inst_34064);

(statearr_34093_35848[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33276__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33276__auto____0 = (function (){
var statearr_34094 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34094[(0)] = cljs$core$async$reduce_$_state_machine__33276__auto__);

(statearr_34094[(1)] = (1));

return statearr_34094;
});
var cljs$core$async$reduce_$_state_machine__33276__auto____1 = (function (state_34074){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_34074);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34095){var ex__33279__auto__ = e34095;
var statearr_34096_35853 = state_34074;
(statearr_34096_35853[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_34074[(4)]))){
var statearr_34097_35854 = state_34074;
(statearr_34097_35854[(1)] = cljs.core.first((state_34074[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35855 = state_34074;
state_34074 = G__35855;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33276__auto__ = function(state_34074){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33276__auto____1.call(this,state_34074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33276__auto____0;
cljs$core$async$reduce_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33276__auto____1;
return cljs$core$async$reduce_$_state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_34098 = f__33383__auto__();
(statearr_34098[(6)] = c__33382__auto__);

return statearr_34098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));

return c__33382__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33382__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_34108){
var state_val_34109 = (state_34108[(1)]);
if((state_val_34109 === (1))){
var inst_34103 = cljs.core.async.reduce(f__$1,init,ch);
var state_34108__$1 = state_34108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34108__$1,(2),inst_34103);
} else {
if((state_val_34109 === (2))){
var inst_34105 = (state_34108[(2)]);
var inst_34106 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34105) : f__$1.call(null,inst_34105));
var state_34108__$1 = state_34108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34108__$1,inst_34106);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33276__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33276__auto____0 = (function (){
var statearr_34110 = [null,null,null,null,null,null,null];
(statearr_34110[(0)] = cljs$core$async$transduce_$_state_machine__33276__auto__);

(statearr_34110[(1)] = (1));

return statearr_34110;
});
var cljs$core$async$transduce_$_state_machine__33276__auto____1 = (function (state_34108){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_34108);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34111){var ex__33279__auto__ = e34111;
var statearr_34112_35865 = state_34108;
(statearr_34112_35865[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_34108[(4)]))){
var statearr_34113_35866 = state_34108;
(statearr_34113_35866[(1)] = cljs.core.first((state_34108[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35867 = state_34108;
state_34108 = G__35867;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33276__auto__ = function(state_34108){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33276__auto____1.call(this,state_34108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33276__auto____0;
cljs$core$async$transduce_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33276__auto____1;
return cljs$core$async$transduce_$_state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_34114 = f__33383__auto__();
(statearr_34114[(6)] = c__33382__auto__);

return statearr_34114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));

return c__33382__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34116 = arguments.length;
switch (G__34116) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33382__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_34141){
var state_val_34142 = (state_34141[(1)]);
if((state_val_34142 === (7))){
var inst_34123 = (state_34141[(2)]);
var state_34141__$1 = state_34141;
var statearr_34143_35872 = state_34141__$1;
(statearr_34143_35872[(2)] = inst_34123);

(statearr_34143_35872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (1))){
var inst_34117 = cljs.core.seq(coll);
var inst_34118 = inst_34117;
var state_34141__$1 = (function (){var statearr_34144 = state_34141;
(statearr_34144[(7)] = inst_34118);

return statearr_34144;
})();
var statearr_34145_35876 = state_34141__$1;
(statearr_34145_35876[(2)] = null);

(statearr_34145_35876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (4))){
var inst_34118 = (state_34141[(7)]);
var inst_34121 = cljs.core.first(inst_34118);
var state_34141__$1 = state_34141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34141__$1,(7),ch,inst_34121);
} else {
if((state_val_34142 === (13))){
var inst_34135 = (state_34141[(2)]);
var state_34141__$1 = state_34141;
var statearr_34146_35877 = state_34141__$1;
(statearr_34146_35877[(2)] = inst_34135);

(statearr_34146_35877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (6))){
var inst_34126 = (state_34141[(2)]);
var state_34141__$1 = state_34141;
if(cljs.core.truth_(inst_34126)){
var statearr_34147_35878 = state_34141__$1;
(statearr_34147_35878[(1)] = (8));

} else {
var statearr_34148_35879 = state_34141__$1;
(statearr_34148_35879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (3))){
var inst_34139 = (state_34141[(2)]);
var state_34141__$1 = state_34141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34141__$1,inst_34139);
} else {
if((state_val_34142 === (12))){
var state_34141__$1 = state_34141;
var statearr_34149_35880 = state_34141__$1;
(statearr_34149_35880[(2)] = null);

(statearr_34149_35880[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (2))){
var inst_34118 = (state_34141[(7)]);
var state_34141__$1 = state_34141;
if(cljs.core.truth_(inst_34118)){
var statearr_34150_35881 = state_34141__$1;
(statearr_34150_35881[(1)] = (4));

} else {
var statearr_34152_35882 = state_34141__$1;
(statearr_34152_35882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (11))){
var inst_34132 = cljs.core.async.close_BANG_(ch);
var state_34141__$1 = state_34141;
var statearr_34154_35883 = state_34141__$1;
(statearr_34154_35883[(2)] = inst_34132);

(statearr_34154_35883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (9))){
var state_34141__$1 = state_34141;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34155_35885 = state_34141__$1;
(statearr_34155_35885[(1)] = (11));

} else {
var statearr_34156_35887 = state_34141__$1;
(statearr_34156_35887[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (5))){
var inst_34118 = (state_34141[(7)]);
var state_34141__$1 = state_34141;
var statearr_34157_35888 = state_34141__$1;
(statearr_34157_35888[(2)] = inst_34118);

(statearr_34157_35888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (10))){
var inst_34137 = (state_34141[(2)]);
var state_34141__$1 = state_34141;
var statearr_34158_35893 = state_34141__$1;
(statearr_34158_35893[(2)] = inst_34137);

(statearr_34158_35893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34142 === (8))){
var inst_34118 = (state_34141[(7)]);
var inst_34128 = cljs.core.next(inst_34118);
var inst_34118__$1 = inst_34128;
var state_34141__$1 = (function (){var statearr_34159 = state_34141;
(statearr_34159[(7)] = inst_34118__$1);

return statearr_34159;
})();
var statearr_34160_35894 = state_34141__$1;
(statearr_34160_35894[(2)] = null);

(statearr_34160_35894[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_34161 = [null,null,null,null,null,null,null,null];
(statearr_34161[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_34161[(1)] = (1));

return statearr_34161;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_34141){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_34141);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34163){var ex__33279__auto__ = e34163;
var statearr_34164_35895 = state_34141;
(statearr_34164_35895[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_34141[(4)]))){
var statearr_34166_35896 = state_34141;
(statearr_34166_35896[(1)] = cljs.core.first((state_34141[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35899 = state_34141;
state_34141 = G__35899;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_34141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_34141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_34171 = f__33383__auto__();
(statearr_34171[(6)] = c__33382__auto__);

return statearr_34171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));

return c__33382__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34182 = arguments.length;
switch (G__34182) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35909 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35909(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35916 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35916(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35923 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35923(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35927 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35927(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34191 = (function (ch,cs,meta34192){
this.ch = ch;
this.cs = cs;
this.meta34192 = meta34192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34193,meta34192__$1){
var self__ = this;
var _34193__$1 = this;
return (new cljs.core.async.t_cljs$core$async34191(self__.ch,self__.cs,meta34192__$1));
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34193){
var self__ = this;
var _34193__$1 = this;
return self__.meta34192;
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34192","meta34192",1433121946,null)], null);
}));

(cljs.core.async.t_cljs$core$async34191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34191");

(cljs.core.async.t_cljs$core$async34191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34191.
 */
cljs.core.async.__GT_t_cljs$core$async34191 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34191(ch__$1,cs__$1,meta34192){
return (new cljs.core.async.t_cljs$core$async34191(ch__$1,cs__$1,meta34192));
});

}

return (new cljs.core.async.t_cljs$core$async34191(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33382__auto___35947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_34327){
var state_val_34328 = (state_34327[(1)]);
if((state_val_34328 === (7))){
var inst_34323 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34333_35951 = state_34327__$1;
(statearr_34333_35951[(2)] = inst_34323);

(statearr_34333_35951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (20))){
var inst_34227 = (state_34327[(7)]);
var inst_34240 = cljs.core.first(inst_34227);
var inst_34241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34240,(0),null);
var inst_34242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34240,(1),null);
var state_34327__$1 = (function (){var statearr_34340 = state_34327;
(statearr_34340[(8)] = inst_34241);

return statearr_34340;
})();
if(cljs.core.truth_(inst_34242)){
var statearr_34343_35952 = state_34327__$1;
(statearr_34343_35952[(1)] = (22));

} else {
var statearr_34349_35953 = state_34327__$1;
(statearr_34349_35953[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (27))){
var inst_34196 = (state_34327[(9)]);
var inst_34272 = (state_34327[(10)]);
var inst_34270 = (state_34327[(11)]);
var inst_34277 = (state_34327[(12)]);
var inst_34277__$1 = cljs.core._nth(inst_34270,inst_34272);
var inst_34278 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34277__$1,inst_34196,done);
var state_34327__$1 = (function (){var statearr_34356 = state_34327;
(statearr_34356[(12)] = inst_34277__$1);

return statearr_34356;
})();
if(cljs.core.truth_(inst_34278)){
var statearr_34357_35958 = state_34327__$1;
(statearr_34357_35958[(1)] = (30));

} else {
var statearr_34358_35959 = state_34327__$1;
(statearr_34358_35959[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (1))){
var state_34327__$1 = state_34327;
var statearr_34359_35964 = state_34327__$1;
(statearr_34359_35964[(2)] = null);

(statearr_34359_35964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (24))){
var inst_34227 = (state_34327[(7)]);
var inst_34247 = (state_34327[(2)]);
var inst_34248 = cljs.core.next(inst_34227);
var inst_34205 = inst_34248;
var inst_34206 = null;
var inst_34207 = (0);
var inst_34208 = (0);
var state_34327__$1 = (function (){var statearr_34360 = state_34327;
(statearr_34360[(13)] = inst_34205);

(statearr_34360[(14)] = inst_34207);

(statearr_34360[(15)] = inst_34206);

(statearr_34360[(16)] = inst_34208);

(statearr_34360[(17)] = inst_34247);

return statearr_34360;
})();
var statearr_34361_35965 = state_34327__$1;
(statearr_34361_35965[(2)] = null);

(statearr_34361_35965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (39))){
var state_34327__$1 = state_34327;
var statearr_34365_35966 = state_34327__$1;
(statearr_34365_35966[(2)] = null);

(statearr_34365_35966[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (4))){
var inst_34196 = (state_34327[(9)]);
var inst_34196__$1 = (state_34327[(2)]);
var inst_34197 = (inst_34196__$1 == null);
var state_34327__$1 = (function (){var statearr_34366 = state_34327;
(statearr_34366[(9)] = inst_34196__$1);

return statearr_34366;
})();
if(cljs.core.truth_(inst_34197)){
var statearr_34368_35967 = state_34327__$1;
(statearr_34368_35967[(1)] = (5));

} else {
var statearr_34369_35968 = state_34327__$1;
(statearr_34369_35968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (15))){
var inst_34205 = (state_34327[(13)]);
var inst_34207 = (state_34327[(14)]);
var inst_34206 = (state_34327[(15)]);
var inst_34208 = (state_34327[(16)]);
var inst_34223 = (state_34327[(2)]);
var inst_34224 = (inst_34208 + (1));
var tmp34362 = inst_34205;
var tmp34363 = inst_34207;
var tmp34364 = inst_34206;
var inst_34205__$1 = tmp34362;
var inst_34206__$1 = tmp34364;
var inst_34207__$1 = tmp34363;
var inst_34208__$1 = inst_34224;
var state_34327__$1 = (function (){var statearr_34370 = state_34327;
(statearr_34370[(18)] = inst_34223);

(statearr_34370[(13)] = inst_34205__$1);

(statearr_34370[(14)] = inst_34207__$1);

(statearr_34370[(15)] = inst_34206__$1);

(statearr_34370[(16)] = inst_34208__$1);

return statearr_34370;
})();
var statearr_34371_35976 = state_34327__$1;
(statearr_34371_35976[(2)] = null);

(statearr_34371_35976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (21))){
var inst_34251 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34377_35980 = state_34327__$1;
(statearr_34377_35980[(2)] = inst_34251);

(statearr_34377_35980[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (31))){
var inst_34277 = (state_34327[(12)]);
var inst_34281 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34277);
var state_34327__$1 = state_34327;
var statearr_34378_35984 = state_34327__$1;
(statearr_34378_35984[(2)] = inst_34281);

(statearr_34378_35984[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (32))){
var inst_34269 = (state_34327[(19)]);
var inst_34271 = (state_34327[(20)]);
var inst_34272 = (state_34327[(10)]);
var inst_34270 = (state_34327[(11)]);
var inst_34283 = (state_34327[(2)]);
var inst_34284 = (inst_34272 + (1));
var tmp34372 = inst_34269;
var tmp34373 = inst_34271;
var tmp34374 = inst_34270;
var inst_34269__$1 = tmp34372;
var inst_34270__$1 = tmp34374;
var inst_34271__$1 = tmp34373;
var inst_34272__$1 = inst_34284;
var state_34327__$1 = (function (){var statearr_34379 = state_34327;
(statearr_34379[(19)] = inst_34269__$1);

(statearr_34379[(20)] = inst_34271__$1);

(statearr_34379[(10)] = inst_34272__$1);

(statearr_34379[(11)] = inst_34270__$1);

(statearr_34379[(21)] = inst_34283);

return statearr_34379;
})();
var statearr_34380_35992 = state_34327__$1;
(statearr_34380_35992[(2)] = null);

(statearr_34380_35992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (40))){
var inst_34296 = (state_34327[(22)]);
var inst_34300 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34296);
var state_34327__$1 = state_34327;
var statearr_34381_35993 = state_34327__$1;
(statearr_34381_35993[(2)] = inst_34300);

(statearr_34381_35993[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (33))){
var inst_34287 = (state_34327[(23)]);
var inst_34289 = cljs.core.chunked_seq_QMARK_(inst_34287);
var state_34327__$1 = state_34327;
if(inst_34289){
var statearr_34382_35994 = state_34327__$1;
(statearr_34382_35994[(1)] = (36));

} else {
var statearr_34383_35995 = state_34327__$1;
(statearr_34383_35995[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (13))){
var inst_34217 = (state_34327[(24)]);
var inst_34220 = cljs.core.async.close_BANG_(inst_34217);
var state_34327__$1 = state_34327;
var statearr_34389_35996 = state_34327__$1;
(statearr_34389_35996[(2)] = inst_34220);

(statearr_34389_35996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (22))){
var inst_34241 = (state_34327[(8)]);
var inst_34244 = cljs.core.async.close_BANG_(inst_34241);
var state_34327__$1 = state_34327;
var statearr_34401_36003 = state_34327__$1;
(statearr_34401_36003[(2)] = inst_34244);

(statearr_34401_36003[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (36))){
var inst_34287 = (state_34327[(23)]);
var inst_34291 = cljs.core.chunk_first(inst_34287);
var inst_34292 = cljs.core.chunk_rest(inst_34287);
var inst_34293 = cljs.core.count(inst_34291);
var inst_34269 = inst_34292;
var inst_34270 = inst_34291;
var inst_34271 = inst_34293;
var inst_34272 = (0);
var state_34327__$1 = (function (){var statearr_34407 = state_34327;
(statearr_34407[(19)] = inst_34269);

(statearr_34407[(20)] = inst_34271);

(statearr_34407[(10)] = inst_34272);

(statearr_34407[(11)] = inst_34270);

return statearr_34407;
})();
var statearr_34408_36008 = state_34327__$1;
(statearr_34408_36008[(2)] = null);

(statearr_34408_36008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (41))){
var inst_34287 = (state_34327[(23)]);
var inst_34302 = (state_34327[(2)]);
var inst_34303 = cljs.core.next(inst_34287);
var inst_34269 = inst_34303;
var inst_34270 = null;
var inst_34271 = (0);
var inst_34272 = (0);
var state_34327__$1 = (function (){var statearr_34409 = state_34327;
(statearr_34409[(19)] = inst_34269);

(statearr_34409[(20)] = inst_34271);

(statearr_34409[(10)] = inst_34272);

(statearr_34409[(25)] = inst_34302);

(statearr_34409[(11)] = inst_34270);

return statearr_34409;
})();
var statearr_34410_36013 = state_34327__$1;
(statearr_34410_36013[(2)] = null);

(statearr_34410_36013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (43))){
var state_34327__$1 = state_34327;
var statearr_34411_36014 = state_34327__$1;
(statearr_34411_36014[(2)] = null);

(statearr_34411_36014[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (29))){
var inst_34311 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34417_36015 = state_34327__$1;
(statearr_34417_36015[(2)] = inst_34311);

(statearr_34417_36015[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (44))){
var inst_34320 = (state_34327[(2)]);
var state_34327__$1 = (function (){var statearr_34424 = state_34327;
(statearr_34424[(26)] = inst_34320);

return statearr_34424;
})();
var statearr_34426_36016 = state_34327__$1;
(statearr_34426_36016[(2)] = null);

(statearr_34426_36016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (6))){
var inst_34261 = (state_34327[(27)]);
var inst_34260 = cljs.core.deref(cs);
var inst_34261__$1 = cljs.core.keys(inst_34260);
var inst_34262 = cljs.core.count(inst_34261__$1);
var inst_34263 = cljs.core.reset_BANG_(dctr,inst_34262);
var inst_34268 = cljs.core.seq(inst_34261__$1);
var inst_34269 = inst_34268;
var inst_34270 = null;
var inst_34271 = (0);
var inst_34272 = (0);
var state_34327__$1 = (function (){var statearr_34436 = state_34327;
(statearr_34436[(19)] = inst_34269);

(statearr_34436[(20)] = inst_34271);

(statearr_34436[(27)] = inst_34261__$1);

(statearr_34436[(10)] = inst_34272);

(statearr_34436[(11)] = inst_34270);

(statearr_34436[(28)] = inst_34263);

return statearr_34436;
})();
var statearr_34437_36021 = state_34327__$1;
(statearr_34437_36021[(2)] = null);

(statearr_34437_36021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (28))){
var inst_34269 = (state_34327[(19)]);
var inst_34287 = (state_34327[(23)]);
var inst_34287__$1 = cljs.core.seq(inst_34269);
var state_34327__$1 = (function (){var statearr_34442 = state_34327;
(statearr_34442[(23)] = inst_34287__$1);

return statearr_34442;
})();
if(inst_34287__$1){
var statearr_34444_36025 = state_34327__$1;
(statearr_34444_36025[(1)] = (33));

} else {
var statearr_34449_36026 = state_34327__$1;
(statearr_34449_36026[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (25))){
var inst_34271 = (state_34327[(20)]);
var inst_34272 = (state_34327[(10)]);
var inst_34274 = (inst_34272 < inst_34271);
var inst_34275 = inst_34274;
var state_34327__$1 = state_34327;
if(cljs.core.truth_(inst_34275)){
var statearr_34457_36027 = state_34327__$1;
(statearr_34457_36027[(1)] = (27));

} else {
var statearr_34459_36032 = state_34327__$1;
(statearr_34459_36032[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (34))){
var state_34327__$1 = state_34327;
var statearr_34464_36033 = state_34327__$1;
(statearr_34464_36033[(2)] = null);

(statearr_34464_36033[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (17))){
var state_34327__$1 = state_34327;
var statearr_34465_36035 = state_34327__$1;
(statearr_34465_36035[(2)] = null);

(statearr_34465_36035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (3))){
var inst_34325 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34327__$1,inst_34325);
} else {
if((state_val_34328 === (12))){
var inst_34256 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34466_36036 = state_34327__$1;
(statearr_34466_36036[(2)] = inst_34256);

(statearr_34466_36036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (2))){
var state_34327__$1 = state_34327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34327__$1,(4),ch);
} else {
if((state_val_34328 === (23))){
var state_34327__$1 = state_34327;
var statearr_34467_36038 = state_34327__$1;
(statearr_34467_36038[(2)] = null);

(statearr_34467_36038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (35))){
var inst_34309 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34468_36039 = state_34327__$1;
(statearr_34468_36039[(2)] = inst_34309);

(statearr_34468_36039[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (19))){
var inst_34227 = (state_34327[(7)]);
var inst_34231 = cljs.core.chunk_first(inst_34227);
var inst_34232 = cljs.core.chunk_rest(inst_34227);
var inst_34233 = cljs.core.count(inst_34231);
var inst_34205 = inst_34232;
var inst_34206 = inst_34231;
var inst_34207 = inst_34233;
var inst_34208 = (0);
var state_34327__$1 = (function (){var statearr_34469 = state_34327;
(statearr_34469[(13)] = inst_34205);

(statearr_34469[(14)] = inst_34207);

(statearr_34469[(15)] = inst_34206);

(statearr_34469[(16)] = inst_34208);

return statearr_34469;
})();
var statearr_34471_36044 = state_34327__$1;
(statearr_34471_36044[(2)] = null);

(statearr_34471_36044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (11))){
var inst_34227 = (state_34327[(7)]);
var inst_34205 = (state_34327[(13)]);
var inst_34227__$1 = cljs.core.seq(inst_34205);
var state_34327__$1 = (function (){var statearr_34472 = state_34327;
(statearr_34472[(7)] = inst_34227__$1);

return statearr_34472;
})();
if(inst_34227__$1){
var statearr_34473_36045 = state_34327__$1;
(statearr_34473_36045[(1)] = (16));

} else {
var statearr_34474_36046 = state_34327__$1;
(statearr_34474_36046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (9))){
var inst_34258 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34475_36047 = state_34327__$1;
(statearr_34475_36047[(2)] = inst_34258);

(statearr_34475_36047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (5))){
var inst_34203 = cljs.core.deref(cs);
var inst_34204 = cljs.core.seq(inst_34203);
var inst_34205 = inst_34204;
var inst_34206 = null;
var inst_34207 = (0);
var inst_34208 = (0);
var state_34327__$1 = (function (){var statearr_34476 = state_34327;
(statearr_34476[(13)] = inst_34205);

(statearr_34476[(14)] = inst_34207);

(statearr_34476[(15)] = inst_34206);

(statearr_34476[(16)] = inst_34208);

return statearr_34476;
})();
var statearr_34477_36048 = state_34327__$1;
(statearr_34477_36048[(2)] = null);

(statearr_34477_36048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (14))){
var state_34327__$1 = state_34327;
var statearr_34478_36049 = state_34327__$1;
(statearr_34478_36049[(2)] = null);

(statearr_34478_36049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (45))){
var inst_34317 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34479_36050 = state_34327__$1;
(statearr_34479_36050[(2)] = inst_34317);

(statearr_34479_36050[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (26))){
var inst_34261 = (state_34327[(27)]);
var inst_34313 = (state_34327[(2)]);
var inst_34314 = cljs.core.seq(inst_34261);
var state_34327__$1 = (function (){var statearr_34484 = state_34327;
(statearr_34484[(29)] = inst_34313);

return statearr_34484;
})();
if(inst_34314){
var statearr_34485_36051 = state_34327__$1;
(statearr_34485_36051[(1)] = (42));

} else {
var statearr_34490_36052 = state_34327__$1;
(statearr_34490_36052[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (16))){
var inst_34227 = (state_34327[(7)]);
var inst_34229 = cljs.core.chunked_seq_QMARK_(inst_34227);
var state_34327__$1 = state_34327;
if(inst_34229){
var statearr_34491_36056 = state_34327__$1;
(statearr_34491_36056[(1)] = (19));

} else {
var statearr_34492_36057 = state_34327__$1;
(statearr_34492_36057[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (38))){
var inst_34306 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34497_36058 = state_34327__$1;
(statearr_34497_36058[(2)] = inst_34306);

(statearr_34497_36058[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (30))){
var state_34327__$1 = state_34327;
var statearr_34498_36059 = state_34327__$1;
(statearr_34498_36059[(2)] = null);

(statearr_34498_36059[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (10))){
var inst_34206 = (state_34327[(15)]);
var inst_34208 = (state_34327[(16)]);
var inst_34216 = cljs.core._nth(inst_34206,inst_34208);
var inst_34217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34216,(0),null);
var inst_34218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34216,(1),null);
var state_34327__$1 = (function (){var statearr_34500 = state_34327;
(statearr_34500[(24)] = inst_34217);

return statearr_34500;
})();
if(cljs.core.truth_(inst_34218)){
var statearr_34501_36060 = state_34327__$1;
(statearr_34501_36060[(1)] = (13));

} else {
var statearr_34502_36061 = state_34327__$1;
(statearr_34502_36061[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (18))){
var inst_34254 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34503_36062 = state_34327__$1;
(statearr_34503_36062[(2)] = inst_34254);

(statearr_34503_36062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (42))){
var state_34327__$1 = state_34327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34327__$1,(45),dchan);
} else {
if((state_val_34328 === (37))){
var inst_34196 = (state_34327[(9)]);
var inst_34287 = (state_34327[(23)]);
var inst_34296 = (state_34327[(22)]);
var inst_34296__$1 = cljs.core.first(inst_34287);
var inst_34297 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34296__$1,inst_34196,done);
var state_34327__$1 = (function (){var statearr_34504 = state_34327;
(statearr_34504[(22)] = inst_34296__$1);

return statearr_34504;
})();
if(cljs.core.truth_(inst_34297)){
var statearr_34505_36064 = state_34327__$1;
(statearr_34505_36064[(1)] = (39));

} else {
var statearr_34506_36065 = state_34327__$1;
(statearr_34506_36065[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (8))){
var inst_34207 = (state_34327[(14)]);
var inst_34208 = (state_34327[(16)]);
var inst_34210 = (inst_34208 < inst_34207);
var inst_34211 = inst_34210;
var state_34327__$1 = state_34327;
if(cljs.core.truth_(inst_34211)){
var statearr_34507_36066 = state_34327__$1;
(statearr_34507_36066[(1)] = (10));

} else {
var statearr_34508_36067 = state_34327__$1;
(statearr_34508_36067[(1)] = (11));

}

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
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33276__auto__ = null;
var cljs$core$async$mult_$_state_machine__33276__auto____0 = (function (){
var statearr_34509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34509[(0)] = cljs$core$async$mult_$_state_machine__33276__auto__);

(statearr_34509[(1)] = (1));

return statearr_34509;
});
var cljs$core$async$mult_$_state_machine__33276__auto____1 = (function (state_34327){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_34327);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34510){var ex__33279__auto__ = e34510;
var statearr_34511_36074 = state_34327;
(statearr_34511_36074[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_34327[(4)]))){
var statearr_34512_36079 = state_34327;
(statearr_34512_36079[(1)] = cljs.core.first((state_34327[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36084 = state_34327;
state_34327 = G__36084;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33276__auto__ = function(state_34327){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33276__auto____1.call(this,state_34327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33276__auto____0;
cljs$core$async$mult_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33276__auto____1;
return cljs$core$async$mult_$_state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_34513 = f__33383__auto__();
(statearr_34513[(6)] = c__33382__auto___35947);

return statearr_34513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34515 = arguments.length;
switch (G__34515) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36098 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36098(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36101 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36101(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36107 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36107(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36110 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36110(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36116 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36116(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36120 = arguments.length;
var i__4737__auto___36121 = (0);
while(true){
if((i__4737__auto___36121 < len__4736__auto___36120)){
args__4742__auto__.push((arguments[i__4737__auto___36121]));

var G__36122 = (i__4737__auto___36121 + (1));
i__4737__auto___36121 = G__36122;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34520){
var map__34521 = p__34520;
var map__34521__$1 = (((((!((map__34521 == null))))?(((((map__34521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34521):map__34521);
var opts = map__34521__$1;
var statearr_34523_36123 = state;
(statearr_34523_36123[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34524_36125 = state;
(statearr_34524_36125[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34525_36126 = state;
(statearr_34525_36126[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34516){
var G__34517 = cljs.core.first(seq34516);
var seq34516__$1 = cljs.core.next(seq34516);
var G__34518 = cljs.core.first(seq34516__$1);
var seq34516__$2 = cljs.core.next(seq34516__$1);
var G__34519 = cljs.core.first(seq34516__$2);
var seq34516__$3 = cljs.core.next(seq34516__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34517,G__34518,G__34519,seq34516__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34526 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34527){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34527 = meta34527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34528,meta34527__$1){
var self__ = this;
var _34528__$1 = this;
return (new cljs.core.async.t_cljs$core$async34526(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34527__$1));
}));

(cljs.core.async.t_cljs$core$async34526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34528){
var self__ = this;
var _34528__$1 = this;
return self__.meta34527;
}));

(cljs.core.async.t_cljs$core$async34526.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34526.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34526.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34526.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34526.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34526.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34526.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34527","meta34527",-1553329371,null)], null);
}));

(cljs.core.async.t_cljs$core$async34526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34526");

(cljs.core.async.t_cljs$core$async34526.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34526.
 */
cljs.core.async.__GT_t_cljs$core$async34526 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34526(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34527){
return (new cljs.core.async.t_cljs$core$async34526(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34527));
});

}

return (new cljs.core.async.t_cljs$core$async34526(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33382__auto___36138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_34630){
var state_val_34631 = (state_34630[(1)]);
if((state_val_34631 === (7))){
var inst_34545 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
var statearr_34632_36139 = state_34630__$1;
(statearr_34632_36139[(2)] = inst_34545);

(statearr_34632_36139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (20))){
var inst_34557 = (state_34630[(7)]);
var state_34630__$1 = state_34630;
var statearr_34633_36140 = state_34630__$1;
(statearr_34633_36140[(2)] = inst_34557);

(statearr_34633_36140[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (27))){
var state_34630__$1 = state_34630;
var statearr_34634_36141 = state_34630__$1;
(statearr_34634_36141[(2)] = null);

(statearr_34634_36141[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (1))){
var inst_34532 = (state_34630[(8)]);
var inst_34532__$1 = calc_state();
var inst_34534 = (inst_34532__$1 == null);
var inst_34535 = cljs.core.not(inst_34534);
var state_34630__$1 = (function (){var statearr_34635 = state_34630;
(statearr_34635[(8)] = inst_34532__$1);

return statearr_34635;
})();
if(inst_34535){
var statearr_34636_36142 = state_34630__$1;
(statearr_34636_36142[(1)] = (2));

} else {
var statearr_34637_36143 = state_34630__$1;
(statearr_34637_36143[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (24))){
var inst_34590 = (state_34630[(9)]);
var inst_34604 = (state_34630[(10)]);
var inst_34581 = (state_34630[(11)]);
var inst_34604__$1 = (inst_34581.cljs$core$IFn$_invoke$arity$1 ? inst_34581.cljs$core$IFn$_invoke$arity$1(inst_34590) : inst_34581.call(null,inst_34590));
var state_34630__$1 = (function (){var statearr_34638 = state_34630;
(statearr_34638[(10)] = inst_34604__$1);

return statearr_34638;
})();
if(cljs.core.truth_(inst_34604__$1)){
var statearr_34639_36144 = state_34630__$1;
(statearr_34639_36144[(1)] = (29));

} else {
var statearr_34640_36145 = state_34630__$1;
(statearr_34640_36145[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (4))){
var inst_34548 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
if(cljs.core.truth_(inst_34548)){
var statearr_34641_36146 = state_34630__$1;
(statearr_34641_36146[(1)] = (8));

} else {
var statearr_34642_36147 = state_34630__$1;
(statearr_34642_36147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (15))){
var inst_34575 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
if(cljs.core.truth_(inst_34575)){
var statearr_34643_36148 = state_34630__$1;
(statearr_34643_36148[(1)] = (19));

} else {
var statearr_34644_36149 = state_34630__$1;
(statearr_34644_36149[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (21))){
var inst_34580 = (state_34630[(12)]);
var inst_34580__$1 = (state_34630[(2)]);
var inst_34581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34580__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34580__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34580__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34630__$1 = (function (){var statearr_34645 = state_34630;
(statearr_34645[(11)] = inst_34581);

(statearr_34645[(12)] = inst_34580__$1);

(statearr_34645[(13)] = inst_34582);

return statearr_34645;
})();
return cljs.core.async.ioc_alts_BANG_(state_34630__$1,(22),inst_34583);
} else {
if((state_val_34631 === (31))){
var inst_34612 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
if(cljs.core.truth_(inst_34612)){
var statearr_34646_36150 = state_34630__$1;
(statearr_34646_36150[(1)] = (32));

} else {
var statearr_34647_36151 = state_34630__$1;
(statearr_34647_36151[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (32))){
var inst_34589 = (state_34630[(14)]);
var state_34630__$1 = state_34630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34630__$1,(35),out,inst_34589);
} else {
if((state_val_34631 === (33))){
var inst_34580 = (state_34630[(12)]);
var inst_34557 = inst_34580;
var state_34630__$1 = (function (){var statearr_34648 = state_34630;
(statearr_34648[(7)] = inst_34557);

return statearr_34648;
})();
var statearr_34649_36152 = state_34630__$1;
(statearr_34649_36152[(2)] = null);

(statearr_34649_36152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (13))){
var inst_34557 = (state_34630[(7)]);
var inst_34564 = inst_34557.cljs$lang$protocol_mask$partition0$;
var inst_34565 = (inst_34564 & (64));
var inst_34566 = inst_34557.cljs$core$ISeq$;
var inst_34567 = (cljs.core.PROTOCOL_SENTINEL === inst_34566);
var inst_34568 = ((inst_34565) || (inst_34567));
var state_34630__$1 = state_34630;
if(cljs.core.truth_(inst_34568)){
var statearr_34650_36156 = state_34630__$1;
(statearr_34650_36156[(1)] = (16));

} else {
var statearr_34651_36157 = state_34630__$1;
(statearr_34651_36157[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (22))){
var inst_34590 = (state_34630[(9)]);
var inst_34589 = (state_34630[(14)]);
var inst_34588 = (state_34630[(2)]);
var inst_34589__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34588,(0),null);
var inst_34590__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34588,(1),null);
var inst_34591 = (inst_34589__$1 == null);
var inst_34592 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34590__$1,change);
var inst_34593 = ((inst_34591) || (inst_34592));
var state_34630__$1 = (function (){var statearr_34652 = state_34630;
(statearr_34652[(9)] = inst_34590__$1);

(statearr_34652[(14)] = inst_34589__$1);

return statearr_34652;
})();
if(cljs.core.truth_(inst_34593)){
var statearr_34653_36165 = state_34630__$1;
(statearr_34653_36165[(1)] = (23));

} else {
var statearr_34654_36166 = state_34630__$1;
(statearr_34654_36166[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (36))){
var inst_34580 = (state_34630[(12)]);
var inst_34557 = inst_34580;
var state_34630__$1 = (function (){var statearr_34655 = state_34630;
(statearr_34655[(7)] = inst_34557);

return statearr_34655;
})();
var statearr_34656_36170 = state_34630__$1;
(statearr_34656_36170[(2)] = null);

(statearr_34656_36170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (29))){
var inst_34604 = (state_34630[(10)]);
var state_34630__$1 = state_34630;
var statearr_34657_36171 = state_34630__$1;
(statearr_34657_36171[(2)] = inst_34604);

(statearr_34657_36171[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (6))){
var state_34630__$1 = state_34630;
var statearr_34658_36175 = state_34630__$1;
(statearr_34658_36175[(2)] = false);

(statearr_34658_36175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (28))){
var inst_34600 = (state_34630[(2)]);
var inst_34601 = calc_state();
var inst_34557 = inst_34601;
var state_34630__$1 = (function (){var statearr_34659 = state_34630;
(statearr_34659[(7)] = inst_34557);

(statearr_34659[(15)] = inst_34600);

return statearr_34659;
})();
var statearr_34661_36176 = state_34630__$1;
(statearr_34661_36176[(2)] = null);

(statearr_34661_36176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (25))){
var inst_34626 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
var statearr_34664_36180 = state_34630__$1;
(statearr_34664_36180[(2)] = inst_34626);

(statearr_34664_36180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (34))){
var inst_34624 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
var statearr_34665_36181 = state_34630__$1;
(statearr_34665_36181[(2)] = inst_34624);

(statearr_34665_36181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (17))){
var state_34630__$1 = state_34630;
var statearr_34666_36183 = state_34630__$1;
(statearr_34666_36183[(2)] = false);

(statearr_34666_36183[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (3))){
var state_34630__$1 = state_34630;
var statearr_34667_36184 = state_34630__$1;
(statearr_34667_36184[(2)] = false);

(statearr_34667_36184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (12))){
var inst_34628 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34630__$1,inst_34628);
} else {
if((state_val_34631 === (2))){
var inst_34532 = (state_34630[(8)]);
var inst_34537 = inst_34532.cljs$lang$protocol_mask$partition0$;
var inst_34538 = (inst_34537 & (64));
var inst_34539 = inst_34532.cljs$core$ISeq$;
var inst_34540 = (cljs.core.PROTOCOL_SENTINEL === inst_34539);
var inst_34541 = ((inst_34538) || (inst_34540));
var state_34630__$1 = state_34630;
if(cljs.core.truth_(inst_34541)){
var statearr_34668_36194 = state_34630__$1;
(statearr_34668_36194[(1)] = (5));

} else {
var statearr_34669_36195 = state_34630__$1;
(statearr_34669_36195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (23))){
var inst_34589 = (state_34630[(14)]);
var inst_34595 = (inst_34589 == null);
var state_34630__$1 = state_34630;
if(cljs.core.truth_(inst_34595)){
var statearr_34671_36202 = state_34630__$1;
(statearr_34671_36202[(1)] = (26));

} else {
var statearr_34672_36203 = state_34630__$1;
(statearr_34672_36203[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (35))){
var inst_34615 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
if(cljs.core.truth_(inst_34615)){
var statearr_34673_36204 = state_34630__$1;
(statearr_34673_36204[(1)] = (36));

} else {
var statearr_34674_36205 = state_34630__$1;
(statearr_34674_36205[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (19))){
var inst_34557 = (state_34630[(7)]);
var inst_34577 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34557);
var state_34630__$1 = state_34630;
var statearr_34676_36206 = state_34630__$1;
(statearr_34676_36206[(2)] = inst_34577);

(statearr_34676_36206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (11))){
var inst_34557 = (state_34630[(7)]);
var inst_34561 = (inst_34557 == null);
var inst_34562 = cljs.core.not(inst_34561);
var state_34630__$1 = state_34630;
if(inst_34562){
var statearr_34677_36207 = state_34630__$1;
(statearr_34677_36207[(1)] = (13));

} else {
var statearr_34678_36208 = state_34630__$1;
(statearr_34678_36208[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (9))){
var inst_34532 = (state_34630[(8)]);
var state_34630__$1 = state_34630;
var statearr_34680_36209 = state_34630__$1;
(statearr_34680_36209[(2)] = inst_34532);

(statearr_34680_36209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (5))){
var state_34630__$1 = state_34630;
var statearr_34681_36210 = state_34630__$1;
(statearr_34681_36210[(2)] = true);

(statearr_34681_36210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (14))){
var state_34630__$1 = state_34630;
var statearr_34682_36217 = state_34630__$1;
(statearr_34682_36217[(2)] = false);

(statearr_34682_36217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (26))){
var inst_34590 = (state_34630[(9)]);
var inst_34597 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34590);
var state_34630__$1 = state_34630;
var statearr_34684_36218 = state_34630__$1;
(statearr_34684_36218[(2)] = inst_34597);

(statearr_34684_36218[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (16))){
var state_34630__$1 = state_34630;
var statearr_34685_36219 = state_34630__$1;
(statearr_34685_36219[(2)] = true);

(statearr_34685_36219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (38))){
var inst_34620 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
var statearr_34686_36220 = state_34630__$1;
(statearr_34686_36220[(2)] = inst_34620);

(statearr_34686_36220[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (30))){
var inst_34590 = (state_34630[(9)]);
var inst_34581 = (state_34630[(11)]);
var inst_34582 = (state_34630[(13)]);
var inst_34607 = cljs.core.empty_QMARK_(inst_34581);
var inst_34608 = (inst_34582.cljs$core$IFn$_invoke$arity$1 ? inst_34582.cljs$core$IFn$_invoke$arity$1(inst_34590) : inst_34582.call(null,inst_34590));
var inst_34609 = cljs.core.not(inst_34608);
var inst_34610 = ((inst_34607) && (inst_34609));
var state_34630__$1 = state_34630;
var statearr_34688_36221 = state_34630__$1;
(statearr_34688_36221[(2)] = inst_34610);

(statearr_34688_36221[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (10))){
var inst_34532 = (state_34630[(8)]);
var inst_34553 = (state_34630[(2)]);
var inst_34554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34553,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34553,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34553,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34557 = inst_34532;
var state_34630__$1 = (function (){var statearr_34689 = state_34630;
(statearr_34689[(16)] = inst_34554);

(statearr_34689[(17)] = inst_34555);

(statearr_34689[(18)] = inst_34556);

(statearr_34689[(7)] = inst_34557);

return statearr_34689;
})();
var statearr_34690_36228 = state_34630__$1;
(statearr_34690_36228[(2)] = null);

(statearr_34690_36228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (18))){
var inst_34572 = (state_34630[(2)]);
var state_34630__$1 = state_34630;
var statearr_34692_36232 = state_34630__$1;
(statearr_34692_36232[(2)] = inst_34572);

(statearr_34692_36232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (37))){
var state_34630__$1 = state_34630;
var statearr_34693_36233 = state_34630__$1;
(statearr_34693_36233[(2)] = null);

(statearr_34693_36233[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34631 === (8))){
var inst_34532 = (state_34630[(8)]);
var inst_34550 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34532);
var state_34630__$1 = state_34630;
var statearr_34694_36234 = state_34630__$1;
(statearr_34694_36234[(2)] = inst_34550);

(statearr_34694_36234[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__33276__auto__ = null;
var cljs$core$async$mix_$_state_machine__33276__auto____0 = (function (){
var statearr_34695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34695[(0)] = cljs$core$async$mix_$_state_machine__33276__auto__);

(statearr_34695[(1)] = (1));

return statearr_34695;
});
var cljs$core$async$mix_$_state_machine__33276__auto____1 = (function (state_34630){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_34630);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34696){var ex__33279__auto__ = e34696;
var statearr_34697_36238 = state_34630;
(statearr_34697_36238[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_34630[(4)]))){
var statearr_34698_36245 = state_34630;
(statearr_34698_36245[(1)] = cljs.core.first((state_34630[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36248 = state_34630;
state_34630 = G__36248;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33276__auto__ = function(state_34630){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33276__auto____1.call(this,state_34630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33276__auto____0;
cljs$core$async$mix_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33276__auto____1;
return cljs$core$async$mix_$_state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_34699 = f__33383__auto__();
(statearr_34699[(6)] = c__33382__auto___36138);

return statearr_34699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36251 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36251(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36252 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36252(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36257 = (function() {
var G__36258 = null;
var G__36258__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36258__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36258 = function(p,v){
switch(arguments.length){
case 1:
return G__36258__1.call(this,p);
case 2:
return G__36258__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36258.cljs$core$IFn$_invoke$arity$1 = G__36258__1;
G__36258.cljs$core$IFn$_invoke$arity$2 = G__36258__2;
return G__36258;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34701 = arguments.length;
switch (G__34701) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36257(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36257(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34704 = arguments.length;
switch (G__34704) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34702_SHARP_){
if(cljs.core.truth_((p1__34702_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34702_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34702_SHARP_.call(null,topic)))){
return p1__34702_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34702_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34705 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34706){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34706 = meta34706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34707,meta34706__$1){
var self__ = this;
var _34707__$1 = this;
return (new cljs.core.async.t_cljs$core$async34705(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34706__$1));
}));

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34707){
var self__ = this;
var _34707__$1 = this;
return self__.meta34706;
}));

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34706","meta34706",-1996947276,null)], null);
}));

(cljs.core.async.t_cljs$core$async34705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34705");

(cljs.core.async.t_cljs$core$async34705.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34705.
 */
cljs.core.async.__GT_t_cljs$core$async34705 = (function cljs$core$async$__GT_t_cljs$core$async34705(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34706){
return (new cljs.core.async.t_cljs$core$async34705(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34706));
});

}

return (new cljs.core.async.t_cljs$core$async34705(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33382__auto___36290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_34779){
var state_val_34780 = (state_34779[(1)]);
if((state_val_34780 === (7))){
var inst_34775 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34781_36292 = state_34779__$1;
(statearr_34781_36292[(2)] = inst_34775);

(statearr_34781_36292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (20))){
var state_34779__$1 = state_34779;
var statearr_34782_36294 = state_34779__$1;
(statearr_34782_36294[(2)] = null);

(statearr_34782_36294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (1))){
var state_34779__$1 = state_34779;
var statearr_34783_36295 = state_34779__$1;
(statearr_34783_36295[(2)] = null);

(statearr_34783_36295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (24))){
var inst_34758 = (state_34779[(7)]);
var inst_34767 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34758);
var state_34779__$1 = state_34779;
var statearr_34784_36297 = state_34779__$1;
(statearr_34784_36297[(2)] = inst_34767);

(statearr_34784_36297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (4))){
var inst_34710 = (state_34779[(8)]);
var inst_34710__$1 = (state_34779[(2)]);
var inst_34711 = (inst_34710__$1 == null);
var state_34779__$1 = (function (){var statearr_34785 = state_34779;
(statearr_34785[(8)] = inst_34710__$1);

return statearr_34785;
})();
if(cljs.core.truth_(inst_34711)){
var statearr_34786_36300 = state_34779__$1;
(statearr_34786_36300[(1)] = (5));

} else {
var statearr_34787_36301 = state_34779__$1;
(statearr_34787_36301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (15))){
var inst_34752 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34788_36302 = state_34779__$1;
(statearr_34788_36302[(2)] = inst_34752);

(statearr_34788_36302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (21))){
var inst_34772 = (state_34779[(2)]);
var state_34779__$1 = (function (){var statearr_34789 = state_34779;
(statearr_34789[(9)] = inst_34772);

return statearr_34789;
})();
var statearr_34790_36307 = state_34779__$1;
(statearr_34790_36307[(2)] = null);

(statearr_34790_36307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (13))){
var inst_34734 = (state_34779[(10)]);
var inst_34736 = cljs.core.chunked_seq_QMARK_(inst_34734);
var state_34779__$1 = state_34779;
if(inst_34736){
var statearr_34792_36308 = state_34779__$1;
(statearr_34792_36308[(1)] = (16));

} else {
var statearr_34793_36310 = state_34779__$1;
(statearr_34793_36310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (22))){
var inst_34764 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
if(cljs.core.truth_(inst_34764)){
var statearr_34794_36312 = state_34779__$1;
(statearr_34794_36312[(1)] = (23));

} else {
var statearr_34795_36313 = state_34779__$1;
(statearr_34795_36313[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (6))){
var inst_34760 = (state_34779[(11)]);
var inst_34710 = (state_34779[(8)]);
var inst_34758 = (state_34779[(7)]);
var inst_34758__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34710) : topic_fn.call(null,inst_34710));
var inst_34759 = cljs.core.deref(mults);
var inst_34760__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34759,inst_34758__$1);
var state_34779__$1 = (function (){var statearr_34796 = state_34779;
(statearr_34796[(11)] = inst_34760__$1);

(statearr_34796[(7)] = inst_34758__$1);

return statearr_34796;
})();
if(cljs.core.truth_(inst_34760__$1)){
var statearr_34797_36317 = state_34779__$1;
(statearr_34797_36317[(1)] = (19));

} else {
var statearr_34798_36318 = state_34779__$1;
(statearr_34798_36318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (25))){
var inst_34769 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34799_36320 = state_34779__$1;
(statearr_34799_36320[(2)] = inst_34769);

(statearr_34799_36320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (17))){
var inst_34734 = (state_34779[(10)]);
var inst_34743 = cljs.core.first(inst_34734);
var inst_34744 = cljs.core.async.muxch_STAR_(inst_34743);
var inst_34745 = cljs.core.async.close_BANG_(inst_34744);
var inst_34746 = cljs.core.next(inst_34734);
var inst_34720 = inst_34746;
var inst_34721 = null;
var inst_34722 = (0);
var inst_34723 = (0);
var state_34779__$1 = (function (){var statearr_34801 = state_34779;
(statearr_34801[(12)] = inst_34721);

(statearr_34801[(13)] = inst_34723);

(statearr_34801[(14)] = inst_34745);

(statearr_34801[(15)] = inst_34722);

(statearr_34801[(16)] = inst_34720);

return statearr_34801;
})();
var statearr_34802_36321 = state_34779__$1;
(statearr_34802_36321[(2)] = null);

(statearr_34802_36321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (3))){
var inst_34777 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34779__$1,inst_34777);
} else {
if((state_val_34780 === (12))){
var inst_34754 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34803_36326 = state_34779__$1;
(statearr_34803_36326[(2)] = inst_34754);

(statearr_34803_36326[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (2))){
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34779__$1,(4),ch);
} else {
if((state_val_34780 === (23))){
var state_34779__$1 = state_34779;
var statearr_34804_36327 = state_34779__$1;
(statearr_34804_36327[(2)] = null);

(statearr_34804_36327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (19))){
var inst_34760 = (state_34779[(11)]);
var inst_34710 = (state_34779[(8)]);
var inst_34762 = cljs.core.async.muxch_STAR_(inst_34760);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34779__$1,(22),inst_34762,inst_34710);
} else {
if((state_val_34780 === (11))){
var inst_34734 = (state_34779[(10)]);
var inst_34720 = (state_34779[(16)]);
var inst_34734__$1 = cljs.core.seq(inst_34720);
var state_34779__$1 = (function (){var statearr_34805 = state_34779;
(statearr_34805[(10)] = inst_34734__$1);

return statearr_34805;
})();
if(inst_34734__$1){
var statearr_34806_36329 = state_34779__$1;
(statearr_34806_36329[(1)] = (13));

} else {
var statearr_34807_36331 = state_34779__$1;
(statearr_34807_36331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (9))){
var inst_34756 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34808_36336 = state_34779__$1;
(statearr_34808_36336[(2)] = inst_34756);

(statearr_34808_36336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (5))){
var inst_34717 = cljs.core.deref(mults);
var inst_34718 = cljs.core.vals(inst_34717);
var inst_34719 = cljs.core.seq(inst_34718);
var inst_34720 = inst_34719;
var inst_34721 = null;
var inst_34722 = (0);
var inst_34723 = (0);
var state_34779__$1 = (function (){var statearr_34809 = state_34779;
(statearr_34809[(12)] = inst_34721);

(statearr_34809[(13)] = inst_34723);

(statearr_34809[(15)] = inst_34722);

(statearr_34809[(16)] = inst_34720);

return statearr_34809;
})();
var statearr_34810_36339 = state_34779__$1;
(statearr_34810_36339[(2)] = null);

(statearr_34810_36339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (14))){
var state_34779__$1 = state_34779;
var statearr_34814_36340 = state_34779__$1;
(statearr_34814_36340[(2)] = null);

(statearr_34814_36340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (16))){
var inst_34734 = (state_34779[(10)]);
var inst_34738 = cljs.core.chunk_first(inst_34734);
var inst_34739 = cljs.core.chunk_rest(inst_34734);
var inst_34740 = cljs.core.count(inst_34738);
var inst_34720 = inst_34739;
var inst_34721 = inst_34738;
var inst_34722 = inst_34740;
var inst_34723 = (0);
var state_34779__$1 = (function (){var statearr_34815 = state_34779;
(statearr_34815[(12)] = inst_34721);

(statearr_34815[(13)] = inst_34723);

(statearr_34815[(15)] = inst_34722);

(statearr_34815[(16)] = inst_34720);

return statearr_34815;
})();
var statearr_34816_36344 = state_34779__$1;
(statearr_34816_36344[(2)] = null);

(statearr_34816_36344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (10))){
var inst_34721 = (state_34779[(12)]);
var inst_34723 = (state_34779[(13)]);
var inst_34722 = (state_34779[(15)]);
var inst_34720 = (state_34779[(16)]);
var inst_34728 = cljs.core._nth(inst_34721,inst_34723);
var inst_34729 = cljs.core.async.muxch_STAR_(inst_34728);
var inst_34730 = cljs.core.async.close_BANG_(inst_34729);
var inst_34731 = (inst_34723 + (1));
var tmp34811 = inst_34721;
var tmp34812 = inst_34722;
var tmp34813 = inst_34720;
var inst_34720__$1 = tmp34813;
var inst_34721__$1 = tmp34811;
var inst_34722__$1 = tmp34812;
var inst_34723__$1 = inst_34731;
var state_34779__$1 = (function (){var statearr_34817 = state_34779;
(statearr_34817[(17)] = inst_34730);

(statearr_34817[(12)] = inst_34721__$1);

(statearr_34817[(13)] = inst_34723__$1);

(statearr_34817[(15)] = inst_34722__$1);

(statearr_34817[(16)] = inst_34720__$1);

return statearr_34817;
})();
var statearr_34818_36346 = state_34779__$1;
(statearr_34818_36346[(2)] = null);

(statearr_34818_36346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (18))){
var inst_34749 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34819_36347 = state_34779__$1;
(statearr_34819_36347[(2)] = inst_34749);

(statearr_34819_36347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (8))){
var inst_34723 = (state_34779[(13)]);
var inst_34722 = (state_34779[(15)]);
var inst_34725 = (inst_34723 < inst_34722);
var inst_34726 = inst_34725;
var state_34779__$1 = state_34779;
if(cljs.core.truth_(inst_34726)){
var statearr_34820_36350 = state_34779__$1;
(statearr_34820_36350[(1)] = (10));

} else {
var statearr_34821_36351 = state_34779__$1;
(statearr_34821_36351[(1)] = (11));

}

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
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_34822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34822[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_34822[(1)] = (1));

return statearr_34822;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_34779){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_34779);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34823){var ex__33279__auto__ = e34823;
var statearr_34824_36352 = state_34779;
(statearr_34824_36352[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_34779[(4)]))){
var statearr_34825_36353 = state_34779;
(statearr_34825_36353[(1)] = cljs.core.first((state_34779[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36355 = state_34779;
state_34779 = G__36355;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_34779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_34779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_34826 = f__33383__auto__();
(statearr_34826[(6)] = c__33382__auto___36290);

return statearr_34826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34828 = arguments.length;
switch (G__34828) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34830 = arguments.length;
switch (G__34830) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34832 = arguments.length;
switch (G__34832) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33382__auto___36386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_34876){
var state_val_34877 = (state_34876[(1)]);
if((state_val_34877 === (7))){
var state_34876__$1 = state_34876;
var statearr_34878_36387 = state_34876__$1;
(statearr_34878_36387[(2)] = null);

(statearr_34878_36387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (1))){
var state_34876__$1 = state_34876;
var statearr_34879_36392 = state_34876__$1;
(statearr_34879_36392[(2)] = null);

(statearr_34879_36392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (4))){
var inst_34837 = (state_34876[(7)]);
var inst_34836 = (state_34876[(8)]);
var inst_34839 = (inst_34837 < inst_34836);
var state_34876__$1 = state_34876;
if(cljs.core.truth_(inst_34839)){
var statearr_34880_36393 = state_34876__$1;
(statearr_34880_36393[(1)] = (6));

} else {
var statearr_34881_36394 = state_34876__$1;
(statearr_34881_36394[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (15))){
var inst_34862 = (state_34876[(9)]);
var inst_34867 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34862);
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34876__$1,(17),out,inst_34867);
} else {
if((state_val_34877 === (13))){
var inst_34862 = (state_34876[(9)]);
var inst_34862__$1 = (state_34876[(2)]);
var inst_34863 = cljs.core.some(cljs.core.nil_QMARK_,inst_34862__$1);
var state_34876__$1 = (function (){var statearr_34882 = state_34876;
(statearr_34882[(9)] = inst_34862__$1);

return statearr_34882;
})();
if(cljs.core.truth_(inst_34863)){
var statearr_34883_36404 = state_34876__$1;
(statearr_34883_36404[(1)] = (14));

} else {
var statearr_34884_36407 = state_34876__$1;
(statearr_34884_36407[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (6))){
var state_34876__$1 = state_34876;
var statearr_34885_36414 = state_34876__$1;
(statearr_34885_36414[(2)] = null);

(statearr_34885_36414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (17))){
var inst_34869 = (state_34876[(2)]);
var state_34876__$1 = (function (){var statearr_34887 = state_34876;
(statearr_34887[(10)] = inst_34869);

return statearr_34887;
})();
var statearr_34888_36418 = state_34876__$1;
(statearr_34888_36418[(2)] = null);

(statearr_34888_36418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (3))){
var inst_34874 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34876__$1,inst_34874);
} else {
if((state_val_34877 === (12))){
var _ = (function (){var statearr_34889 = state_34876;
(statearr_34889[(4)] = cljs.core.rest((state_34876[(4)])));

return statearr_34889;
})();
var state_34876__$1 = state_34876;
var ex34886 = (state_34876__$1[(2)]);
var statearr_34890_36421 = state_34876__$1;
(statearr_34890_36421[(5)] = ex34886);


if((ex34886 instanceof Object)){
var statearr_34891_36422 = state_34876__$1;
(statearr_34891_36422[(1)] = (11));

(statearr_34891_36422[(5)] = null);

} else {
throw ex34886;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (2))){
var inst_34835 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34836 = cnt;
var inst_34837 = (0);
var state_34876__$1 = (function (){var statearr_34892 = state_34876;
(statearr_34892[(11)] = inst_34835);

(statearr_34892[(7)] = inst_34837);

(statearr_34892[(8)] = inst_34836);

return statearr_34892;
})();
var statearr_34893_36424 = state_34876__$1;
(statearr_34893_36424[(2)] = null);

(statearr_34893_36424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (11))){
var inst_34841 = (state_34876[(2)]);
var inst_34842 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34876__$1 = (function (){var statearr_34894 = state_34876;
(statearr_34894[(12)] = inst_34841);

return statearr_34894;
})();
var statearr_34895_36425 = state_34876__$1;
(statearr_34895_36425[(2)] = inst_34842);

(statearr_34895_36425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (9))){
var inst_34837 = (state_34876[(7)]);
var _ = (function (){var statearr_34896 = state_34876;
(statearr_34896[(4)] = cljs.core.cons((12),(state_34876[(4)])));

return statearr_34896;
})();
var inst_34848 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34837) : chs__$1.call(null,inst_34837));
var inst_34849 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34837) : done.call(null,inst_34837));
var inst_34850 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34848,inst_34849);
var ___$1 = (function (){var statearr_34897 = state_34876;
(statearr_34897[(4)] = cljs.core.rest((state_34876[(4)])));

return statearr_34897;
})();
var state_34876__$1 = state_34876;
var statearr_34898_36426 = state_34876__$1;
(statearr_34898_36426[(2)] = inst_34850);

(statearr_34898_36426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (5))){
var inst_34860 = (state_34876[(2)]);
var state_34876__$1 = (function (){var statearr_34899 = state_34876;
(statearr_34899[(13)] = inst_34860);

return statearr_34899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34876__$1,(13),dchan);
} else {
if((state_val_34877 === (14))){
var inst_34865 = cljs.core.async.close_BANG_(out);
var state_34876__$1 = state_34876;
var statearr_34900_36429 = state_34876__$1;
(statearr_34900_36429[(2)] = inst_34865);

(statearr_34900_36429[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (16))){
var inst_34872 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
var statearr_34901_36430 = state_34876__$1;
(statearr_34901_36430[(2)] = inst_34872);

(statearr_34901_36430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (10))){
var inst_34837 = (state_34876[(7)]);
var inst_34853 = (state_34876[(2)]);
var inst_34854 = (inst_34837 + (1));
var inst_34837__$1 = inst_34854;
var state_34876__$1 = (function (){var statearr_34902 = state_34876;
(statearr_34902[(7)] = inst_34837__$1);

(statearr_34902[(14)] = inst_34853);

return statearr_34902;
})();
var statearr_34903_36432 = state_34876__$1;
(statearr_34903_36432[(2)] = null);

(statearr_34903_36432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (8))){
var inst_34858 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
var statearr_34904_36434 = state_34876__$1;
(statearr_34904_36434[(2)] = inst_34858);

(statearr_34904_36434[(1)] = (5));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_34905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34905[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_34905[(1)] = (1));

return statearr_34905;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_34876){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_34876);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34906){var ex__33279__auto__ = e34906;
var statearr_34907_36437 = state_34876;
(statearr_34907_36437[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_34876[(4)]))){
var statearr_34908_36438 = state_34876;
(statearr_34908_36438[(1)] = cljs.core.first((state_34876[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36442 = state_34876;
state_34876 = G__36442;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_34876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_34876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_34909 = f__33383__auto__();
(statearr_34909[(6)] = c__33382__auto___36386);

return statearr_34909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34912 = arguments.length;
switch (G__34912) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33382__auto___36445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_34945){
var state_val_34946 = (state_34945[(1)]);
if((state_val_34946 === (7))){
var inst_34925 = (state_34945[(7)]);
var inst_34924 = (state_34945[(8)]);
var inst_34924__$1 = (state_34945[(2)]);
var inst_34925__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34924__$1,(0),null);
var inst_34926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34924__$1,(1),null);
var inst_34927 = (inst_34925__$1 == null);
var state_34945__$1 = (function (){var statearr_34947 = state_34945;
(statearr_34947[(7)] = inst_34925__$1);

(statearr_34947[(8)] = inst_34924__$1);

(statearr_34947[(9)] = inst_34926);

return statearr_34947;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34948_36451 = state_34945__$1;
(statearr_34948_36451[(1)] = (8));

} else {
var statearr_34949_36452 = state_34945__$1;
(statearr_34949_36452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (1))){
var inst_34913 = cljs.core.vec(chs);
var inst_34914 = inst_34913;
var state_34945__$1 = (function (){var statearr_34950 = state_34945;
(statearr_34950[(10)] = inst_34914);

return statearr_34950;
})();
var statearr_34951_36461 = state_34945__$1;
(statearr_34951_36461[(2)] = null);

(statearr_34951_36461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (4))){
var inst_34914 = (state_34945[(10)]);
var state_34945__$1 = state_34945;
return cljs.core.async.ioc_alts_BANG_(state_34945__$1,(7),inst_34914);
} else {
if((state_val_34946 === (6))){
var inst_34941 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34952_36477 = state_34945__$1;
(statearr_34952_36477[(2)] = inst_34941);

(statearr_34952_36477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (3))){
var inst_34943 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34945__$1,inst_34943);
} else {
if((state_val_34946 === (2))){
var inst_34914 = (state_34945[(10)]);
var inst_34917 = cljs.core.count(inst_34914);
var inst_34918 = (inst_34917 > (0));
var state_34945__$1 = state_34945;
if(cljs.core.truth_(inst_34918)){
var statearr_34954_36495 = state_34945__$1;
(statearr_34954_36495[(1)] = (4));

} else {
var statearr_34955_36498 = state_34945__$1;
(statearr_34955_36498[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (11))){
var inst_34914 = (state_34945[(10)]);
var inst_34934 = (state_34945[(2)]);
var tmp34953 = inst_34914;
var inst_34914__$1 = tmp34953;
var state_34945__$1 = (function (){var statearr_34956 = state_34945;
(statearr_34956[(11)] = inst_34934);

(statearr_34956[(10)] = inst_34914__$1);

return statearr_34956;
})();
var statearr_34957_36512 = state_34945__$1;
(statearr_34957_36512[(2)] = null);

(statearr_34957_36512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (9))){
var inst_34925 = (state_34945[(7)]);
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34945__$1,(11),out,inst_34925);
} else {
if((state_val_34946 === (5))){
var inst_34939 = cljs.core.async.close_BANG_(out);
var state_34945__$1 = state_34945;
var statearr_34958_36522 = state_34945__$1;
(statearr_34958_36522[(2)] = inst_34939);

(statearr_34958_36522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (10))){
var inst_34937 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34959_36527 = state_34945__$1;
(statearr_34959_36527[(2)] = inst_34937);

(statearr_34959_36527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (8))){
var inst_34925 = (state_34945[(7)]);
var inst_34914 = (state_34945[(10)]);
var inst_34924 = (state_34945[(8)]);
var inst_34926 = (state_34945[(9)]);
var inst_34929 = (function (){var cs = inst_34914;
var vec__34920 = inst_34924;
var v = inst_34925;
var c = inst_34926;
return (function (p1__34910_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34910_SHARP_);
});
})();
var inst_34930 = cljs.core.filterv(inst_34929,inst_34914);
var inst_34914__$1 = inst_34930;
var state_34945__$1 = (function (){var statearr_34960 = state_34945;
(statearr_34960[(10)] = inst_34914__$1);

return statearr_34960;
})();
var statearr_34961_36549 = state_34945__$1;
(statearr_34961_36549[(2)] = null);

(statearr_34961_36549[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_34962 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34962[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_34962[(1)] = (1));

return statearr_34962;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_34945){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_34945);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34963){var ex__33279__auto__ = e34963;
var statearr_34964_36550 = state_34945;
(statearr_34964_36550[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_34945[(4)]))){
var statearr_34965_36551 = state_34945;
(statearr_34965_36551[(1)] = cljs.core.first((state_34945[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36553 = state_34945;
state_34945 = G__36553;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_34945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_34945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_34966 = f__33383__auto__();
(statearr_34966[(6)] = c__33382__auto___36445);

return statearr_34966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34968 = arguments.length;
switch (G__34968) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33382__auto___36567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_34992){
var state_val_34993 = (state_34992[(1)]);
if((state_val_34993 === (7))){
var inst_34974 = (state_34992[(7)]);
var inst_34974__$1 = (state_34992[(2)]);
var inst_34975 = (inst_34974__$1 == null);
var inst_34976 = cljs.core.not(inst_34975);
var state_34992__$1 = (function (){var statearr_34994 = state_34992;
(statearr_34994[(7)] = inst_34974__$1);

return statearr_34994;
})();
if(inst_34976){
var statearr_34995_36578 = state_34992__$1;
(statearr_34995_36578[(1)] = (8));

} else {
var statearr_34996_36579 = state_34992__$1;
(statearr_34996_36579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (1))){
var inst_34969 = (0);
var state_34992__$1 = (function (){var statearr_34997 = state_34992;
(statearr_34997[(8)] = inst_34969);

return statearr_34997;
})();
var statearr_34998_36580 = state_34992__$1;
(statearr_34998_36580[(2)] = null);

(statearr_34998_36580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (4))){
var state_34992__$1 = state_34992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34992__$1,(7),ch);
} else {
if((state_val_34993 === (6))){
var inst_34987 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_35002_36585 = state_34992__$1;
(statearr_35002_36585[(2)] = inst_34987);

(statearr_35002_36585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (3))){
var inst_34989 = (state_34992[(2)]);
var inst_34990 = cljs.core.async.close_BANG_(out);
var state_34992__$1 = (function (){var statearr_35003 = state_34992;
(statearr_35003[(9)] = inst_34989);

return statearr_35003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34992__$1,inst_34990);
} else {
if((state_val_34993 === (2))){
var inst_34969 = (state_34992[(8)]);
var inst_34971 = (inst_34969 < n);
var state_34992__$1 = state_34992;
if(cljs.core.truth_(inst_34971)){
var statearr_35005_36589 = state_34992__$1;
(statearr_35005_36589[(1)] = (4));

} else {
var statearr_35006_36590 = state_34992__$1;
(statearr_35006_36590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (11))){
var inst_34969 = (state_34992[(8)]);
var inst_34979 = (state_34992[(2)]);
var inst_34980 = (inst_34969 + (1));
var inst_34969__$1 = inst_34980;
var state_34992__$1 = (function (){var statearr_35007 = state_34992;
(statearr_35007[(8)] = inst_34969__$1);

(statearr_35007[(10)] = inst_34979);

return statearr_35007;
})();
var statearr_35009_36592 = state_34992__$1;
(statearr_35009_36592[(2)] = null);

(statearr_35009_36592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (9))){
var state_34992__$1 = state_34992;
var statearr_35011_36593 = state_34992__$1;
(statearr_35011_36593[(2)] = null);

(statearr_35011_36593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (5))){
var state_34992__$1 = state_34992;
var statearr_35012_36594 = state_34992__$1;
(statearr_35012_36594[(2)] = null);

(statearr_35012_36594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (10))){
var inst_34984 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_35013_36595 = state_34992__$1;
(statearr_35013_36595[(2)] = inst_34984);

(statearr_35013_36595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (8))){
var inst_34974 = (state_34992[(7)]);
var state_34992__$1 = state_34992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34992__$1,(11),out,inst_34974);
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
});
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_35014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35014[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_35014[(1)] = (1));

return statearr_35014;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_34992){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_34992);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35016){var ex__33279__auto__ = e35016;
var statearr_35017_36602 = state_34992;
(statearr_35017_36602[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_34992[(4)]))){
var statearr_35020_36603 = state_34992;
(statearr_35020_36603[(1)] = cljs.core.first((state_34992[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36609 = state_34992;
state_34992 = G__36609;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_34992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_34992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_35021 = f__33383__auto__();
(statearr_35021[(6)] = c__33382__auto___36567);

return statearr_35021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35023 = (function (f,ch,meta35024){
this.f = f;
this.ch = ch;
this.meta35024 = meta35024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35025,meta35024__$1){
var self__ = this;
var _35025__$1 = this;
return (new cljs.core.async.t_cljs$core$async35023(self__.f,self__.ch,meta35024__$1));
}));

(cljs.core.async.t_cljs$core$async35023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35025){
var self__ = this;
var _35025__$1 = this;
return self__.meta35024;
}));

(cljs.core.async.t_cljs$core$async35023.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35023.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35023.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35032 = (function (f,ch,meta35024,_,fn1,meta35033){
this.f = f;
this.ch = ch;
this.meta35024 = meta35024;
this._ = _;
this.fn1 = fn1;
this.meta35033 = meta35033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35034,meta35033__$1){
var self__ = this;
var _35034__$1 = this;
return (new cljs.core.async.t_cljs$core$async35032(self__.f,self__.ch,self__.meta35024,self__._,self__.fn1,meta35033__$1));
}));

(cljs.core.async.t_cljs$core$async35032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35034){
var self__ = this;
var _35034__$1 = this;
return self__.meta35033;
}));

(cljs.core.async.t_cljs$core$async35032.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35032.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35022_SHARP_){
var G__35043 = (((p1__35022_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35022_SHARP_) : self__.f.call(null,p1__35022_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35043) : f1.call(null,G__35043));
});
}));

(cljs.core.async.t_cljs$core$async35032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35024","meta35024",1321134371,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35023","cljs.core.async/t_cljs$core$async35023",710738222,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35033","meta35033",-2063791237,null)], null);
}));

(cljs.core.async.t_cljs$core$async35032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35032");

(cljs.core.async.t_cljs$core$async35032.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35032.
 */
cljs.core.async.__GT_t_cljs$core$async35032 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35032(f__$1,ch__$1,meta35024__$1,___$2,fn1__$1,meta35033){
return (new cljs.core.async.t_cljs$core$async35032(f__$1,ch__$1,meta35024__$1,___$2,fn1__$1,meta35033));
});

}

return (new cljs.core.async.t_cljs$core$async35032(self__.f,self__.ch,self__.meta35024,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35044 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35044) : self__.f.call(null,G__35044));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35023.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35024","meta35024",1321134371,null)], null);
}));

(cljs.core.async.t_cljs$core$async35023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35023");

(cljs.core.async.t_cljs$core$async35023.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35023.
 */
cljs.core.async.__GT_t_cljs$core$async35023 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35023(f__$1,ch__$1,meta35024){
return (new cljs.core.async.t_cljs$core$async35023(f__$1,ch__$1,meta35024));
});

}

return (new cljs.core.async.t_cljs$core$async35023(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35053 = (function (f,ch,meta35054){
this.f = f;
this.ch = ch;
this.meta35054 = meta35054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35055,meta35054__$1){
var self__ = this;
var _35055__$1 = this;
return (new cljs.core.async.t_cljs$core$async35053(self__.f,self__.ch,meta35054__$1));
}));

(cljs.core.async.t_cljs$core$async35053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35055){
var self__ = this;
var _35055__$1 = this;
return self__.meta35054;
}));

(cljs.core.async.t_cljs$core$async35053.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35053.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35053.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35053.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35053.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35053.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35054","meta35054",1991747295,null)], null);
}));

(cljs.core.async.t_cljs$core$async35053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35053");

(cljs.core.async.t_cljs$core$async35053.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35053.
 */
cljs.core.async.__GT_t_cljs$core$async35053 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35053(f__$1,ch__$1,meta35054){
return (new cljs.core.async.t_cljs$core$async35053(f__$1,ch__$1,meta35054));
});

}

return (new cljs.core.async.t_cljs$core$async35053(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35062 = (function (p,ch,meta35063){
this.p = p;
this.ch = ch;
this.meta35063 = meta35063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35064,meta35063__$1){
var self__ = this;
var _35064__$1 = this;
return (new cljs.core.async.t_cljs$core$async35062(self__.p,self__.ch,meta35063__$1));
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35064){
var self__ = this;
var _35064__$1 = this;
return self__.meta35063;
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35063","meta35063",-610278315,null)], null);
}));

(cljs.core.async.t_cljs$core$async35062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35062");

(cljs.core.async.t_cljs$core$async35062.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35062.
 */
cljs.core.async.__GT_t_cljs$core$async35062 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35062(p__$1,ch__$1,meta35063){
return (new cljs.core.async.t_cljs$core$async35062(p__$1,ch__$1,meta35063));
});

}

return (new cljs.core.async.t_cljs$core$async35062(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35080 = arguments.length;
switch (G__35080) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33382__auto___36697 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_35104){
var state_val_35105 = (state_35104[(1)]);
if((state_val_35105 === (7))){
var inst_35099 = (state_35104[(2)]);
var state_35104__$1 = state_35104;
var statearr_35106_36698 = state_35104__$1;
(statearr_35106_36698[(2)] = inst_35099);

(statearr_35106_36698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (1))){
var state_35104__$1 = state_35104;
var statearr_35107_36699 = state_35104__$1;
(statearr_35107_36699[(2)] = null);

(statearr_35107_36699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (4))){
var inst_35083 = (state_35104[(7)]);
var inst_35083__$1 = (state_35104[(2)]);
var inst_35084 = (inst_35083__$1 == null);
var state_35104__$1 = (function (){var statearr_35108 = state_35104;
(statearr_35108[(7)] = inst_35083__$1);

return statearr_35108;
})();
if(cljs.core.truth_(inst_35084)){
var statearr_35110_36701 = state_35104__$1;
(statearr_35110_36701[(1)] = (5));

} else {
var statearr_35112_36702 = state_35104__$1;
(statearr_35112_36702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (6))){
var inst_35083 = (state_35104[(7)]);
var inst_35089 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35083) : p.call(null,inst_35083));
var state_35104__$1 = state_35104;
if(cljs.core.truth_(inst_35089)){
var statearr_35114_36703 = state_35104__$1;
(statearr_35114_36703[(1)] = (8));

} else {
var statearr_35115_36704 = state_35104__$1;
(statearr_35115_36704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (3))){
var inst_35101 = (state_35104[(2)]);
var state_35104__$1 = state_35104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35104__$1,inst_35101);
} else {
if((state_val_35105 === (2))){
var state_35104__$1 = state_35104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35104__$1,(4),ch);
} else {
if((state_val_35105 === (11))){
var inst_35092 = (state_35104[(2)]);
var state_35104__$1 = state_35104;
var statearr_35116_36706 = state_35104__$1;
(statearr_35116_36706[(2)] = inst_35092);

(statearr_35116_36706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (9))){
var state_35104__$1 = state_35104;
var statearr_35117_36710 = state_35104__$1;
(statearr_35117_36710[(2)] = null);

(statearr_35117_36710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (5))){
var inst_35086 = cljs.core.async.close_BANG_(out);
var state_35104__$1 = state_35104;
var statearr_35118_36711 = state_35104__$1;
(statearr_35118_36711[(2)] = inst_35086);

(statearr_35118_36711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (10))){
var inst_35096 = (state_35104[(2)]);
var state_35104__$1 = (function (){var statearr_35121 = state_35104;
(statearr_35121[(8)] = inst_35096);

return statearr_35121;
})();
var statearr_35124_36712 = state_35104__$1;
(statearr_35124_36712[(2)] = null);

(statearr_35124_36712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (8))){
var inst_35083 = (state_35104[(7)]);
var state_35104__$1 = state_35104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35104__$1,(11),out,inst_35083);
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
});
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_35126 = [null,null,null,null,null,null,null,null,null];
(statearr_35126[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_35126[(1)] = (1));

return statearr_35126;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_35104){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_35104);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35128){var ex__33279__auto__ = e35128;
var statearr_35129_36714 = state_35104;
(statearr_35129_36714[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_35104[(4)]))){
var statearr_35130_36715 = state_35104;
(statearr_35130_36715[(1)] = cljs.core.first((state_35104[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36716 = state_35104;
state_35104 = G__36716;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_35104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_35104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_35131 = f__33383__auto__();
(statearr_35131[(6)] = c__33382__auto___36697);

return statearr_35131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35133 = arguments.length;
switch (G__35133) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33382__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_35207){
var state_val_35208 = (state_35207[(1)]);
if((state_val_35208 === (7))){
var inst_35203 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35211_36722 = state_35207__$1;
(statearr_35211_36722[(2)] = inst_35203);

(statearr_35211_36722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (20))){
var inst_35172 = (state_35207[(7)]);
var inst_35184 = (state_35207[(2)]);
var inst_35185 = cljs.core.next(inst_35172);
var inst_35157 = inst_35185;
var inst_35158 = null;
var inst_35159 = (0);
var inst_35160 = (0);
var state_35207__$1 = (function (){var statearr_35212 = state_35207;
(statearr_35212[(8)] = inst_35159);

(statearr_35212[(9)] = inst_35157);

(statearr_35212[(10)] = inst_35160);

(statearr_35212[(11)] = inst_35158);

(statearr_35212[(12)] = inst_35184);

return statearr_35212;
})();
var statearr_35213_36723 = state_35207__$1;
(statearr_35213_36723[(2)] = null);

(statearr_35213_36723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (1))){
var state_35207__$1 = state_35207;
var statearr_35214_36724 = state_35207__$1;
(statearr_35214_36724[(2)] = null);

(statearr_35214_36724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (4))){
var inst_35146 = (state_35207[(13)]);
var inst_35146__$1 = (state_35207[(2)]);
var inst_35147 = (inst_35146__$1 == null);
var state_35207__$1 = (function (){var statearr_35215 = state_35207;
(statearr_35215[(13)] = inst_35146__$1);

return statearr_35215;
})();
if(cljs.core.truth_(inst_35147)){
var statearr_35216_36725 = state_35207__$1;
(statearr_35216_36725[(1)] = (5));

} else {
var statearr_35217_36726 = state_35207__$1;
(statearr_35217_36726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (15))){
var state_35207__$1 = state_35207;
var statearr_35221_36727 = state_35207__$1;
(statearr_35221_36727[(2)] = null);

(statearr_35221_36727[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (21))){
var state_35207__$1 = state_35207;
var statearr_35222_36729 = state_35207__$1;
(statearr_35222_36729[(2)] = null);

(statearr_35222_36729[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (13))){
var inst_35159 = (state_35207[(8)]);
var inst_35157 = (state_35207[(9)]);
var inst_35160 = (state_35207[(10)]);
var inst_35158 = (state_35207[(11)]);
var inst_35167 = (state_35207[(2)]);
var inst_35168 = (inst_35160 + (1));
var tmp35218 = inst_35159;
var tmp35219 = inst_35157;
var tmp35220 = inst_35158;
var inst_35157__$1 = tmp35219;
var inst_35158__$1 = tmp35220;
var inst_35159__$1 = tmp35218;
var inst_35160__$1 = inst_35168;
var state_35207__$1 = (function (){var statearr_35223 = state_35207;
(statearr_35223[(8)] = inst_35159__$1);

(statearr_35223[(9)] = inst_35157__$1);

(statearr_35223[(14)] = inst_35167);

(statearr_35223[(10)] = inst_35160__$1);

(statearr_35223[(11)] = inst_35158__$1);

return statearr_35223;
})();
var statearr_35224_36730 = state_35207__$1;
(statearr_35224_36730[(2)] = null);

(statearr_35224_36730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (22))){
var state_35207__$1 = state_35207;
var statearr_35225_36731 = state_35207__$1;
(statearr_35225_36731[(2)] = null);

(statearr_35225_36731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (6))){
var inst_35146 = (state_35207[(13)]);
var inst_35155 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35146) : f.call(null,inst_35146));
var inst_35156 = cljs.core.seq(inst_35155);
var inst_35157 = inst_35156;
var inst_35158 = null;
var inst_35159 = (0);
var inst_35160 = (0);
var state_35207__$1 = (function (){var statearr_35226 = state_35207;
(statearr_35226[(8)] = inst_35159);

(statearr_35226[(9)] = inst_35157);

(statearr_35226[(10)] = inst_35160);

(statearr_35226[(11)] = inst_35158);

return statearr_35226;
})();
var statearr_35228_36732 = state_35207__$1;
(statearr_35228_36732[(2)] = null);

(statearr_35228_36732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (17))){
var inst_35172 = (state_35207[(7)]);
var inst_35177 = cljs.core.chunk_first(inst_35172);
var inst_35178 = cljs.core.chunk_rest(inst_35172);
var inst_35179 = cljs.core.count(inst_35177);
var inst_35157 = inst_35178;
var inst_35158 = inst_35177;
var inst_35159 = inst_35179;
var inst_35160 = (0);
var state_35207__$1 = (function (){var statearr_35229 = state_35207;
(statearr_35229[(8)] = inst_35159);

(statearr_35229[(9)] = inst_35157);

(statearr_35229[(10)] = inst_35160);

(statearr_35229[(11)] = inst_35158);

return statearr_35229;
})();
var statearr_35230_36736 = state_35207__$1;
(statearr_35230_36736[(2)] = null);

(statearr_35230_36736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (3))){
var inst_35205 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35207__$1,inst_35205);
} else {
if((state_val_35208 === (12))){
var inst_35193 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35231_36742 = state_35207__$1;
(statearr_35231_36742[(2)] = inst_35193);

(statearr_35231_36742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (2))){
var state_35207__$1 = state_35207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35207__$1,(4),in$);
} else {
if((state_val_35208 === (23))){
var inst_35201 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35232_36747 = state_35207__$1;
(statearr_35232_36747[(2)] = inst_35201);

(statearr_35232_36747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (19))){
var inst_35188 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35235_36748 = state_35207__$1;
(statearr_35235_36748[(2)] = inst_35188);

(statearr_35235_36748[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (11))){
var inst_35172 = (state_35207[(7)]);
var inst_35157 = (state_35207[(9)]);
var inst_35172__$1 = cljs.core.seq(inst_35157);
var state_35207__$1 = (function (){var statearr_35237 = state_35207;
(statearr_35237[(7)] = inst_35172__$1);

return statearr_35237;
})();
if(inst_35172__$1){
var statearr_35238_36752 = state_35207__$1;
(statearr_35238_36752[(1)] = (14));

} else {
var statearr_35239_36753 = state_35207__$1;
(statearr_35239_36753[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (9))){
var inst_35195 = (state_35207[(2)]);
var inst_35196 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35207__$1 = (function (){var statearr_35240 = state_35207;
(statearr_35240[(15)] = inst_35195);

return statearr_35240;
})();
if(cljs.core.truth_(inst_35196)){
var statearr_35241_36754 = state_35207__$1;
(statearr_35241_36754[(1)] = (21));

} else {
var statearr_35242_36755 = state_35207__$1;
(statearr_35242_36755[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (5))){
var inst_35149 = cljs.core.async.close_BANG_(out);
var state_35207__$1 = state_35207;
var statearr_35251_36756 = state_35207__$1;
(statearr_35251_36756[(2)] = inst_35149);

(statearr_35251_36756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (14))){
var inst_35172 = (state_35207[(7)]);
var inst_35175 = cljs.core.chunked_seq_QMARK_(inst_35172);
var state_35207__$1 = state_35207;
if(inst_35175){
var statearr_35256_36757 = state_35207__$1;
(statearr_35256_36757[(1)] = (17));

} else {
var statearr_35257_36758 = state_35207__$1;
(statearr_35257_36758[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (16))){
var inst_35191 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35266_36759 = state_35207__$1;
(statearr_35266_36759[(2)] = inst_35191);

(statearr_35266_36759[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (10))){
var inst_35160 = (state_35207[(10)]);
var inst_35158 = (state_35207[(11)]);
var inst_35165 = cljs.core._nth(inst_35158,inst_35160);
var state_35207__$1 = state_35207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35207__$1,(13),out,inst_35165);
} else {
if((state_val_35208 === (18))){
var inst_35172 = (state_35207[(7)]);
var inst_35182 = cljs.core.first(inst_35172);
var state_35207__$1 = state_35207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35207__$1,(20),out,inst_35182);
} else {
if((state_val_35208 === (8))){
var inst_35159 = (state_35207[(8)]);
var inst_35160 = (state_35207[(10)]);
var inst_35162 = (inst_35160 < inst_35159);
var inst_35163 = inst_35162;
var state_35207__$1 = state_35207;
if(cljs.core.truth_(inst_35163)){
var statearr_35267_36766 = state_35207__$1;
(statearr_35267_36766[(1)] = (10));

} else {
var statearr_35268_36767 = state_35207__$1;
(statearr_35268_36767[(1)] = (11));

}

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
var cljs$core$async$mapcat_STAR__$_state_machine__33276__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33276__auto____0 = (function (){
var statearr_35269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35269[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33276__auto__);

(statearr_35269[(1)] = (1));

return statearr_35269;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33276__auto____1 = (function (state_35207){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_35207);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35270){var ex__33279__auto__ = e35270;
var statearr_35271_36771 = state_35207;
(statearr_35271_36771[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_35207[(4)]))){
var statearr_35272_36773 = state_35207;
(statearr_35272_36773[(1)] = cljs.core.first((state_35207[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36781 = state_35207;
state_35207 = G__36781;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33276__auto__ = function(state_35207){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33276__auto____1.call(this,state_35207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33276__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33276__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_35273 = f__33383__auto__();
(statearr_35273[(6)] = c__33382__auto__);

return statearr_35273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));

return c__33382__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35275 = arguments.length;
switch (G__35275) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35277 = arguments.length;
switch (G__35277) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35279 = arguments.length;
switch (G__35279) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33382__auto___36813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_35303){
var state_val_35304 = (state_35303[(1)]);
if((state_val_35304 === (7))){
var inst_35298 = (state_35303[(2)]);
var state_35303__$1 = state_35303;
var statearr_35305_36819 = state_35303__$1;
(statearr_35305_36819[(2)] = inst_35298);

(statearr_35305_36819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (1))){
var inst_35280 = null;
var state_35303__$1 = (function (){var statearr_35306 = state_35303;
(statearr_35306[(7)] = inst_35280);

return statearr_35306;
})();
var statearr_35307_36831 = state_35303__$1;
(statearr_35307_36831[(2)] = null);

(statearr_35307_36831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (4))){
var inst_35283 = (state_35303[(8)]);
var inst_35283__$1 = (state_35303[(2)]);
var inst_35284 = (inst_35283__$1 == null);
var inst_35285 = cljs.core.not(inst_35284);
var state_35303__$1 = (function (){var statearr_35308 = state_35303;
(statearr_35308[(8)] = inst_35283__$1);

return statearr_35308;
})();
if(inst_35285){
var statearr_35309_36840 = state_35303__$1;
(statearr_35309_36840[(1)] = (5));

} else {
var statearr_35310_36845 = state_35303__$1;
(statearr_35310_36845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (6))){
var state_35303__$1 = state_35303;
var statearr_35311_36850 = state_35303__$1;
(statearr_35311_36850[(2)] = null);

(statearr_35311_36850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (3))){
var inst_35300 = (state_35303[(2)]);
var inst_35301 = cljs.core.async.close_BANG_(out);
var state_35303__$1 = (function (){var statearr_35312 = state_35303;
(statearr_35312[(9)] = inst_35300);

return statearr_35312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35303__$1,inst_35301);
} else {
if((state_val_35304 === (2))){
var state_35303__$1 = state_35303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35303__$1,(4),ch);
} else {
if((state_val_35304 === (11))){
var inst_35283 = (state_35303[(8)]);
var inst_35292 = (state_35303[(2)]);
var inst_35280 = inst_35283;
var state_35303__$1 = (function (){var statearr_35313 = state_35303;
(statearr_35313[(10)] = inst_35292);

(statearr_35313[(7)] = inst_35280);

return statearr_35313;
})();
var statearr_35314_36868 = state_35303__$1;
(statearr_35314_36868[(2)] = null);

(statearr_35314_36868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (9))){
var inst_35283 = (state_35303[(8)]);
var state_35303__$1 = state_35303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35303__$1,(11),out,inst_35283);
} else {
if((state_val_35304 === (5))){
var inst_35280 = (state_35303[(7)]);
var inst_35283 = (state_35303[(8)]);
var inst_35287 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35283,inst_35280);
var state_35303__$1 = state_35303;
if(inst_35287){
var statearr_35316_36882 = state_35303__$1;
(statearr_35316_36882[(1)] = (8));

} else {
var statearr_35317_36883 = state_35303__$1;
(statearr_35317_36883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (10))){
var inst_35295 = (state_35303[(2)]);
var state_35303__$1 = state_35303;
var statearr_35318_36889 = state_35303__$1;
(statearr_35318_36889[(2)] = inst_35295);

(statearr_35318_36889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35304 === (8))){
var inst_35280 = (state_35303[(7)]);
var tmp35315 = inst_35280;
var inst_35280__$1 = tmp35315;
var state_35303__$1 = (function (){var statearr_35327 = state_35303;
(statearr_35327[(7)] = inst_35280__$1);

return statearr_35327;
})();
var statearr_35328_36897 = state_35303__$1;
(statearr_35328_36897[(2)] = null);

(statearr_35328_36897[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_35333 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35333[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_35333[(1)] = (1));

return statearr_35333;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_35303){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_35303);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35334){var ex__33279__auto__ = e35334;
var statearr_35339_36914 = state_35303;
(statearr_35339_36914[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_35303[(4)]))){
var statearr_35344_36915 = state_35303;
(statearr_35344_36915[(1)] = cljs.core.first((state_35303[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36916 = state_35303;
state_35303 = G__36916;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_35303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_35303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_35345 = f__33383__auto__();
(statearr_35345[(6)] = c__33382__auto___36813);

return statearr_35345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35347 = arguments.length;
switch (G__35347) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33382__auto___36925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_35385){
var state_val_35386 = (state_35385[(1)]);
if((state_val_35386 === (7))){
var inst_35381 = (state_35385[(2)]);
var state_35385__$1 = state_35385;
var statearr_35387_36927 = state_35385__$1;
(statearr_35387_36927[(2)] = inst_35381);

(statearr_35387_36927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (1))){
var inst_35348 = (new Array(n));
var inst_35349 = inst_35348;
var inst_35350 = (0);
var state_35385__$1 = (function (){var statearr_35388 = state_35385;
(statearr_35388[(7)] = inst_35349);

(statearr_35388[(8)] = inst_35350);

return statearr_35388;
})();
var statearr_35389_36929 = state_35385__$1;
(statearr_35389_36929[(2)] = null);

(statearr_35389_36929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (4))){
var inst_35353 = (state_35385[(9)]);
var inst_35353__$1 = (state_35385[(2)]);
var inst_35354 = (inst_35353__$1 == null);
var inst_35355 = cljs.core.not(inst_35354);
var state_35385__$1 = (function (){var statearr_35390 = state_35385;
(statearr_35390[(9)] = inst_35353__$1);

return statearr_35390;
})();
if(inst_35355){
var statearr_35391_36930 = state_35385__$1;
(statearr_35391_36930[(1)] = (5));

} else {
var statearr_35392_36931 = state_35385__$1;
(statearr_35392_36931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (15))){
var inst_35375 = (state_35385[(2)]);
var state_35385__$1 = state_35385;
var statearr_35393_36932 = state_35385__$1;
(statearr_35393_36932[(2)] = inst_35375);

(statearr_35393_36932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (13))){
var state_35385__$1 = state_35385;
var statearr_35394_36933 = state_35385__$1;
(statearr_35394_36933[(2)] = null);

(statearr_35394_36933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (6))){
var inst_35350 = (state_35385[(8)]);
var inst_35371 = (inst_35350 > (0));
var state_35385__$1 = state_35385;
if(cljs.core.truth_(inst_35371)){
var statearr_35395_36935 = state_35385__$1;
(statearr_35395_36935[(1)] = (12));

} else {
var statearr_35396_36936 = state_35385__$1;
(statearr_35396_36936[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (3))){
var inst_35383 = (state_35385[(2)]);
var state_35385__$1 = state_35385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35385__$1,inst_35383);
} else {
if((state_val_35386 === (12))){
var inst_35349 = (state_35385[(7)]);
var inst_35373 = cljs.core.vec(inst_35349);
var state_35385__$1 = state_35385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35385__$1,(15),out,inst_35373);
} else {
if((state_val_35386 === (2))){
var state_35385__$1 = state_35385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35385__$1,(4),ch);
} else {
if((state_val_35386 === (11))){
var inst_35365 = (state_35385[(2)]);
var inst_35366 = (new Array(n));
var inst_35349 = inst_35366;
var inst_35350 = (0);
var state_35385__$1 = (function (){var statearr_35397 = state_35385;
(statearr_35397[(10)] = inst_35365);

(statearr_35397[(7)] = inst_35349);

(statearr_35397[(8)] = inst_35350);

return statearr_35397;
})();
var statearr_35398_36937 = state_35385__$1;
(statearr_35398_36937[(2)] = null);

(statearr_35398_36937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (9))){
var inst_35349 = (state_35385[(7)]);
var inst_35363 = cljs.core.vec(inst_35349);
var state_35385__$1 = state_35385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35385__$1,(11),out,inst_35363);
} else {
if((state_val_35386 === (5))){
var inst_35349 = (state_35385[(7)]);
var inst_35353 = (state_35385[(9)]);
var inst_35350 = (state_35385[(8)]);
var inst_35358 = (state_35385[(11)]);
var inst_35357 = (inst_35349[inst_35350] = inst_35353);
var inst_35358__$1 = (inst_35350 + (1));
var inst_35359 = (inst_35358__$1 < n);
var state_35385__$1 = (function (){var statearr_35399 = state_35385;
(statearr_35399[(12)] = inst_35357);

(statearr_35399[(11)] = inst_35358__$1);

return statearr_35399;
})();
if(cljs.core.truth_(inst_35359)){
var statearr_35400_36941 = state_35385__$1;
(statearr_35400_36941[(1)] = (8));

} else {
var statearr_35401_36942 = state_35385__$1;
(statearr_35401_36942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (14))){
var inst_35378 = (state_35385[(2)]);
var inst_35379 = cljs.core.async.close_BANG_(out);
var state_35385__$1 = (function (){var statearr_35403 = state_35385;
(statearr_35403[(13)] = inst_35378);

return statearr_35403;
})();
var statearr_35404_36945 = state_35385__$1;
(statearr_35404_36945[(2)] = inst_35379);

(statearr_35404_36945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (10))){
var inst_35369 = (state_35385[(2)]);
var state_35385__$1 = state_35385;
var statearr_35405_36946 = state_35385__$1;
(statearr_35405_36946[(2)] = inst_35369);

(statearr_35405_36946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (8))){
var inst_35349 = (state_35385[(7)]);
var inst_35358 = (state_35385[(11)]);
var tmp35402 = inst_35349;
var inst_35349__$1 = tmp35402;
var inst_35350 = inst_35358;
var state_35385__$1 = (function (){var statearr_35406 = state_35385;
(statearr_35406[(7)] = inst_35349__$1);

(statearr_35406[(8)] = inst_35350);

return statearr_35406;
})();
var statearr_35407_36947 = state_35385__$1;
(statearr_35407_36947[(2)] = null);

(statearr_35407_36947[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_35408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35408[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_35408[(1)] = (1));

return statearr_35408;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_35385){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_35385);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35409){var ex__33279__auto__ = e35409;
var statearr_35410_36948 = state_35385;
(statearr_35410_36948[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_35385[(4)]))){
var statearr_35411_36949 = state_35385;
(statearr_35411_36949[(1)] = cljs.core.first((state_35385[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36950 = state_35385;
state_35385 = G__36950;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_35385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_35385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_35412 = f__33383__auto__();
(statearr_35412[(6)] = c__33382__auto___36925);

return statearr_35412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35414 = arguments.length;
switch (G__35414) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33382__auto___36953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_35456){
var state_val_35457 = (state_35456[(1)]);
if((state_val_35457 === (7))){
var inst_35452 = (state_35456[(2)]);
var state_35456__$1 = state_35456;
var statearr_35458_36954 = state_35456__$1;
(statearr_35458_36954[(2)] = inst_35452);

(statearr_35458_36954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (1))){
var inst_35415 = [];
var inst_35416 = inst_35415;
var inst_35417 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35456__$1 = (function (){var statearr_35459 = state_35456;
(statearr_35459[(7)] = inst_35416);

(statearr_35459[(8)] = inst_35417);

return statearr_35459;
})();
var statearr_35460_36955 = state_35456__$1;
(statearr_35460_36955[(2)] = null);

(statearr_35460_36955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (4))){
var inst_35420 = (state_35456[(9)]);
var inst_35420__$1 = (state_35456[(2)]);
var inst_35421 = (inst_35420__$1 == null);
var inst_35422 = cljs.core.not(inst_35421);
var state_35456__$1 = (function (){var statearr_35461 = state_35456;
(statearr_35461[(9)] = inst_35420__$1);

return statearr_35461;
})();
if(inst_35422){
var statearr_35462_36956 = state_35456__$1;
(statearr_35462_36956[(1)] = (5));

} else {
var statearr_35463_36957 = state_35456__$1;
(statearr_35463_36957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (15))){
var inst_35446 = (state_35456[(2)]);
var state_35456__$1 = state_35456;
var statearr_35464_36958 = state_35456__$1;
(statearr_35464_36958[(2)] = inst_35446);

(statearr_35464_36958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (13))){
var state_35456__$1 = state_35456;
var statearr_35466_36959 = state_35456__$1;
(statearr_35466_36959[(2)] = null);

(statearr_35466_36959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (6))){
var inst_35416 = (state_35456[(7)]);
var inst_35441 = inst_35416.length;
var inst_35442 = (inst_35441 > (0));
var state_35456__$1 = state_35456;
if(cljs.core.truth_(inst_35442)){
var statearr_35467_36960 = state_35456__$1;
(statearr_35467_36960[(1)] = (12));

} else {
var statearr_35468_36961 = state_35456__$1;
(statearr_35468_36961[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (3))){
var inst_35454 = (state_35456[(2)]);
var state_35456__$1 = state_35456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35456__$1,inst_35454);
} else {
if((state_val_35457 === (12))){
var inst_35416 = (state_35456[(7)]);
var inst_35444 = cljs.core.vec(inst_35416);
var state_35456__$1 = state_35456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35456__$1,(15),out,inst_35444);
} else {
if((state_val_35457 === (2))){
var state_35456__$1 = state_35456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35456__$1,(4),ch);
} else {
if((state_val_35457 === (11))){
var inst_35424 = (state_35456[(10)]);
var inst_35420 = (state_35456[(9)]);
var inst_35434 = (state_35456[(2)]);
var inst_35435 = [];
var inst_35436 = inst_35435.push(inst_35420);
var inst_35416 = inst_35435;
var inst_35417 = inst_35424;
var state_35456__$1 = (function (){var statearr_35469 = state_35456;
(statearr_35469[(11)] = inst_35436);

(statearr_35469[(12)] = inst_35434);

(statearr_35469[(7)] = inst_35416);

(statearr_35469[(8)] = inst_35417);

return statearr_35469;
})();
var statearr_35470_36962 = state_35456__$1;
(statearr_35470_36962[(2)] = null);

(statearr_35470_36962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (9))){
var inst_35416 = (state_35456[(7)]);
var inst_35432 = cljs.core.vec(inst_35416);
var state_35456__$1 = state_35456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35456__$1,(11),out,inst_35432);
} else {
if((state_val_35457 === (5))){
var inst_35424 = (state_35456[(10)]);
var inst_35417 = (state_35456[(8)]);
var inst_35420 = (state_35456[(9)]);
var inst_35424__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35420) : f.call(null,inst_35420));
var inst_35425 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35424__$1,inst_35417);
var inst_35426 = cljs.core.keyword_identical_QMARK_(inst_35417,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35427 = ((inst_35425) || (inst_35426));
var state_35456__$1 = (function (){var statearr_35471 = state_35456;
(statearr_35471[(10)] = inst_35424__$1);

return statearr_35471;
})();
if(cljs.core.truth_(inst_35427)){
var statearr_35472_36965 = state_35456__$1;
(statearr_35472_36965[(1)] = (8));

} else {
var statearr_35473_36966 = state_35456__$1;
(statearr_35473_36966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (14))){
var inst_35449 = (state_35456[(2)]);
var inst_35450 = cljs.core.async.close_BANG_(out);
var state_35456__$1 = (function (){var statearr_35475 = state_35456;
(statearr_35475[(13)] = inst_35449);

return statearr_35475;
})();
var statearr_35476_36967 = state_35456__$1;
(statearr_35476_36967[(2)] = inst_35450);

(statearr_35476_36967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (10))){
var inst_35439 = (state_35456[(2)]);
var state_35456__$1 = state_35456;
var statearr_35477_36968 = state_35456__$1;
(statearr_35477_36968[(2)] = inst_35439);

(statearr_35477_36968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35457 === (8))){
var inst_35424 = (state_35456[(10)]);
var inst_35416 = (state_35456[(7)]);
var inst_35420 = (state_35456[(9)]);
var inst_35429 = inst_35416.push(inst_35420);
var tmp35474 = inst_35416;
var inst_35416__$1 = tmp35474;
var inst_35417 = inst_35424;
var state_35456__$1 = (function (){var statearr_35478 = state_35456;
(statearr_35478[(7)] = inst_35416__$1);

(statearr_35478[(14)] = inst_35429);

(statearr_35478[(8)] = inst_35417);

return statearr_35478;
})();
var statearr_35479_36971 = state_35456__$1;
(statearr_35479_36971[(2)] = null);

(statearr_35479_36971[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__33276__auto__ = null;
var cljs$core$async$state_machine__33276__auto____0 = (function (){
var statearr_35480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35480[(0)] = cljs$core$async$state_machine__33276__auto__);

(statearr_35480[(1)] = (1));

return statearr_35480;
});
var cljs$core$async$state_machine__33276__auto____1 = (function (state_35456){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_35456);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35481){var ex__33279__auto__ = e35481;
var statearr_35482_36973 = state_35456;
(statearr_35482_36973[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_35456[(4)]))){
var statearr_35483_36974 = state_35456;
(statearr_35483_36974[(1)] = cljs.core.first((state_35456[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36975 = state_35456;
state_35456 = G__36975;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
cljs$core$async$state_machine__33276__auto__ = function(state_35456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33276__auto____1.call(this,state_35456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33276__auto____0;
cljs$core$async$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33276__auto____1;
return cljs$core$async$state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_35484 = f__33383__auto__();
(statearr_35484[(6)] = c__33382__auto___36953);

return statearr_35484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
