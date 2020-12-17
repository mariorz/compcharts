goog.provide('promesa.impl');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x39183 = obj;
(x39183.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x39183.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x39183.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x39183;
});
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
(t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__39184_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__39184_SHARP_) : f.call(null,p1__39184_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__39185_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__39185_SHARP_) : f.call(null,p1__39185_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__39186_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__39186_SHARP_) : f.call(null,p1__39186_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__39187_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__39187_SHARP_) : f.call(null,p1__39187_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__39188_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__39188_SHARP_) : f.call(null,p1__39188_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__39189_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__39189_SHARP_) : f.call(null,p1__39189_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__39190_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__39190_SHARP_) : f.call(null,p1__39190_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__39191_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__39191_SHARP_) : f.call(null,p1__39191_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__39192_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__39192_SHARP_) : f.call(null,p1__39192_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__39193_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__39193_SHARP_) : f.call(null,p1__39193_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__39194_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__39194_SHARP_,null) : f.call(null,p1__39194_SHARP_,null));
}),(function (p1__39195_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__39195_SHARP_) : f.call(null,null,p1__39195_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__39196_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__39196_SHARP_,null) : f.call(null,p1__39196_SHARP_,null));
}),(function (p1__39197_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__39197_SHARP_) : f.call(null,null,p1__39197_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__39198_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__39198_SHARP_,null) : f.call(null,p1__39198_SHARP_,null));
}),(function (p1__39199_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__39199_SHARP_) : f.call(null,null,p1__39199_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__39200_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__39200_SHARP_,null) : f.call(null,p1__39200_SHARP_,null));
}),(function (p1__39201_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__39201_SHARP_) : f.call(null,null,p1__39201_SHARP_));
}));

return it__$1;
}));
});
promesa.impl.extend_promise_BANG_(Promise);
goog.object.set(promesa.protocols.IPromise,"_",true);

goog.object.set(promesa.protocols._map,"_",(function() {
var G__39208 = null;
var G__39208__2 = (function (it,f){
return promesa.protocols._map(promesa.protocols._promise(it),f);
});
var G__39208__3 = (function (it,f,e){
return promesa.protocols._map(promesa.protocols._promise(it),f,e);
});
G__39208 = function(it,f,e){
switch(arguments.length){
case 2:
return G__39208__2.call(this,it,f);
case 3:
return G__39208__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39208.cljs$core$IFn$_invoke$arity$2 = G__39208__2;
G__39208.cljs$core$IFn$_invoke$arity$3 = G__39208__3;
return G__39208;
})()
);

goog.object.set(promesa.protocols._bind,"_",(function() {
var G__39211 = null;
var G__39211__2 = (function (it,f){
return promesa.protocols._bind(promesa.protocols._promise(it),f);
});
var G__39211__3 = (function (it,f,e){
return promesa.protocols._bind(promesa.protocols._promise(it),f,e);
});
G__39211 = function(it,f,e){
switch(arguments.length){
case 2:
return G__39211__2.call(this,it,f);
case 3:
return G__39211__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39211.cljs$core$IFn$_invoke$arity$2 = G__39211__2;
G__39211.cljs$core$IFn$_invoke$arity$3 = G__39211__3;
return G__39211;
})()
);

goog.object.set(promesa.protocols._then,"_",(function() {
var G__39217 = null;
var G__39217__2 = (function (it,f){
return promesa.protocols._then(promesa.protocols._promise(it),f);
});
var G__39217__3 = (function (it,f,e){
return promesa.protocols._then(promesa.protocols._promise(it),f,e);
});
G__39217 = function(it,f,e){
switch(arguments.length){
case 2:
return G__39217__2.call(this,it,f);
case 3:
return G__39217__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39217.cljs$core$IFn$_invoke$arity$2 = G__39217__2;
G__39217.cljs$core$IFn$_invoke$arity$3 = G__39217__3;
return G__39217;
})()
);

goog.object.set(promesa.protocols._mapErr,"_",(function() {
var G__39219 = null;
var G__39219__2 = (function (it,f){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f);
});
var G__39219__3 = (function (it,f,e){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f,e);
});
G__39219 = function(it,f,e){
switch(arguments.length){
case 2:
return G__39219__2.call(this,it,f);
case 3:
return G__39219__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39219.cljs$core$IFn$_invoke$arity$2 = G__39219__2;
G__39219.cljs$core$IFn$_invoke$arity$3 = G__39219__3;
return G__39219;
})()
);

goog.object.set(promesa.protocols._thenErr,"_",(function() {
var G__39224 = null;
var G__39224__2 = (function (it,f){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f);
});
var G__39224__3 = (function (it,f,e){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f,e);
});
G__39224 = function(it,f,e){
switch(arguments.length){
case 2:
return G__39224__2.call(this,it,f);
case 3:
return G__39224__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39224.cljs$core$IFn$_invoke$arity$2 = G__39224__2;
G__39224.cljs$core$IFn$_invoke$arity$3 = G__39224__3;
return G__39224;
})()
);

goog.object.set(promesa.protocols._handle,"_",(function() {
var G__39241 = null;
var G__39241__2 = (function (it,f){
return promesa.protocols._handle(promesa.protocols._promise(it),f);
});
var G__39241__3 = (function (it,f,e){
return promesa.protocols._handle(promesa.protocols._promise(it),f,e);
});
G__39241 = function(it,f,e){
switch(arguments.length){
case 2:
return G__39241__2.call(this,it,f);
case 3:
return G__39241__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39241.cljs$core$IFn$_invoke$arity$2 = G__39241__2;
G__39241.cljs$core$IFn$_invoke$arity$3 = G__39241__3;
return G__39241;
})()
);

goog.object.set(promesa.protocols._finally,"_",(function() {
var G__39245 = null;
var G__39245__2 = (function (it,f){
return promesa.protocols._finally(promesa.protocols._promise(it),f);
});
var G__39245__3 = (function (it,f,e){
return promesa.protocols._finally(promesa.protocols._promise(it),f,e);
});
G__39245 = function(it,f,e){
switch(arguments.length){
case 2:
return G__39245__2.call(this,it,f);
case 3:
return G__39245__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39245.cljs$core$IFn$_invoke$arity$2 = G__39245__2;
G__39245.cljs$core$IFn$_invoke$arity$3 = G__39245__3;
return G__39245;
})()
);
(Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
}));

goog.object.set(promesa.protocols.IPromiseFactory,"_",true);

goog.object.set(promesa.protocols._promise,"_",(function (v){
return promesa.impl.resolved(v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
(Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
}));

//# sourceMappingURL=promesa.impl.js.map
