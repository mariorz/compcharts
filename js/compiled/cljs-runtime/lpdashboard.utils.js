goog.provide('lpdashboard.utils');
var module$node_modules$ethers$dist$ethers_umd=shadow.js.require("module$node_modules$ethers$dist$ethers_umd", {});
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.utils.bn = (function lpdashboard$utils$bn(n){
return (new module$node_modules$bignumber_DOT_js$bignumber(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
});
lpdashboard.utils.fu = (function lpdashboard$utils$fu(n,u){
var units = bignumber.core.pow((new module$node_modules$bignumber_DOT_js$bignumber((10))),u);
return bignumber.core._SLASH_(n,units).toString();
});
lpdashboard.utils.pu = (function lpdashboard$utils$pu(n,u){
var units = bignumber.core.pow((new module$node_modules$bignumber_DOT_js$bignumber((10))),u);
var bign = (new module$node_modules$bignumber_DOT_js$bignumber(n));
return bignumber.core._STAR_(bign,units);
});
lpdashboard.utils.ethfu = (function lpdashboard$utils$ethfu(n,u){
return module$node_modules$ethers$dist$ethers_umd.utils.formatUnits(n,u);
});
lpdashboard.utils.ebn__GT_bn = (function lpdashboard$utils$ebn__GT_bn(n,u){
return lpdashboard.utils.bn(lpdashboard.utils.ethfu(n,u));
});
lpdashboard.utils.ts__GT_datetime = (function lpdashboard$utils$ts__GT_datetime(ts){
return (new Date(((1000) * ts)));
});
lpdashboard.utils.update_values = (function lpdashboard$utils$update_values(var_args){
var args__4742__auto__ = [];
var len__4736__auto___417302 = arguments.length;
var i__4737__auto___417303 = (0);
while(true){
if((i__4737__auto___417303 < len__4736__auto___417302)){
args__4742__auto__.push((arguments[i__4737__auto___417303]));

var G__417304 = (i__4737__auto___417303 + (1));
i__4737__auto___417303 = G__417304;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return lpdashboard.utils.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(lpdashboard.utils.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__417298){
var vec__417299 = p__417298;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__417299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__417299,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
}));

(lpdashboard.utils.update_values.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lpdashboard.utils.update_values.cljs$lang$applyTo = (function (seq417295){
var G__417296 = cljs.core.first(seq417295);
var seq417295__$1 = cljs.core.next(seq417295);
var G__417297 = cljs.core.first(seq417295__$1);
var seq417295__$2 = cljs.core.next(seq417295__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__417296,G__417297,seq417295__$2);
}));

lpdashboard.utils.make_unix_ts = (function lpdashboard$utils$make_unix_ts(){
return Math.floor((Date.now() / (1000)));
});
lpdashboard.utils.set_query_string_BANG_ = (function lpdashboard$utils$set_query_string_BANG_(v){
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.protocol),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname)].join('');
var url_SINGLEQUOTE_ = [url,"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
return window.history.pushState(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),url_SINGLEQUOTE_], null)),null,url_SINGLEQUOTE_);
});

//# sourceMappingURL=lpdashboard.utils.js.map
