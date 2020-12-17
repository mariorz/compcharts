goog.provide('bignumber.core');
bignumber.core.bignumber_QMARK_ = (function bignumber$core$bignumber_QMARK_(x){
var and__4115__auto__ = x;
if(cljs.core.truth_(and__4115__auto__)){
return (x["toNumber"]);
} else {
return and__4115__auto__;
}
});
bignumber.core.apply_fn = (function bignumber$core$apply_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40778 = arguments.length;
var i__4737__auto___40779 = (0);
while(true){
if((i__4737__auto___40779 < len__4736__auto___40778)){
args__4742__auto__.push((arguments[i__4737__auto___40779]));

var G__40780 = (i__4737__auto___40779 + (1));
i__4737__auto___40779 = G__40780;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic = (function (bn_fn_name,native_fn,x,args){
if(cljs.core.truth_(bignumber.core.bignumber_QMARK_(x))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,x,bn_fn_name,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(native_fn,x,args);
}
}));

(bignumber.core.apply_fn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(bignumber.core.apply_fn.cljs$lang$applyTo = (function (seq40390){
var G__40391 = cljs.core.first(seq40390);
var seq40390__$1 = cljs.core.next(seq40390);
var G__40392 = cljs.core.first(seq40390__$1);
var seq40390__$2 = cljs.core.next(seq40390__$1);
var G__40393 = cljs.core.first(seq40390__$2);
var seq40390__$3 = cljs.core.next(seq40390__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40391,G__40392,G__40393,seq40390__$3);
}));

bignumber.core.apply_arithmetic_fn = (function bignumber$core$apply_arithmetic_fn(bn_fn_name,native_fn,x,y,base){
if(cljs.core.truth_(bignumber.core.bignumber_QMARK_(x))){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,bn_fn_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y,base], 0));
} else {
return (native_fn.cljs$core$IFn$_invoke$arity$2 ? native_fn.cljs$core$IFn$_invoke$arity$2(x,y) : native_fn.call(null,x,y));
}
});
bignumber.core.number = (function bignumber$core$number(x){
return bignumber.core.apply_fn("toNumber",(function (x__$1){
var x__$2 = parseFloat(x__$1);
if(cljs.core.truth_(isNaN(x__$2))){
return null;
} else {
return x__$2;
}
}),x);
});
bignumber.core.abs = (function bignumber$core$abs(x){
return bignumber.core.apply_fn("abs",Math.abs,x);
});
bignumber.core.ceil = (function bignumber$core$ceil(x){
return bignumber.core.apply_fn("ceil",Math.ceil,x);
});
bignumber.core.cmp = (function bignumber$core$cmp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40783 = arguments.length;
var i__4737__auto___40784 = (0);
while(true){
if((i__4737__auto___40784 < len__4736__auto___40783)){
args__4742__auto__.push((arguments[i__4737__auto___40784]));

var G__40785 = (i__4737__auto___40784 + (1));
i__4737__auto___40784 = G__40785;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.cmp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.cmp.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40414){
var vec__40415 = p__40414;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40415,(0),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("cmp",cljs.core.compare,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base], 0));
}));

(bignumber.core.cmp.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.cmp.cljs$lang$applyTo = (function (seq40412){
var G__40413 = cljs.core.first(seq40412);
var seq40412__$1 = cljs.core.next(seq40412);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40413,seq40412__$1);
}));

bignumber.core.dp = (function bignumber$core$dp(x){
return bignumber.core.apply_fn("dp",cljs.core.identity,x);
});
bignumber.core._SLASH_ = (function bignumber$core$_SLASH_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40788 = arguments.length;
var i__4737__auto___40789 = (0);
while(true){
if((i__4737__auto___40789 < len__4736__auto___40788)){
args__4742__auto__.push((arguments[i__4737__auto___40789]));

var G__40790 = (i__4737__auto___40789 + (1));
i__4737__auto___40789 = G__40790;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40424){
var vec__40425 = p__40424;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40425,(0),null);
return bignumber.core.apply_arithmetic_fn("div",cljs.core.divide,x,y,base);
}));

(bignumber.core._SLASH_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._SLASH_.cljs$lang$applyTo = (function (seq40421){
var G__40422 = cljs.core.first(seq40421);
var seq40421__$1 = cljs.core.next(seq40421);
var G__40423 = cljs.core.first(seq40421__$1);
var seq40421__$2 = cljs.core.next(seq40421__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40422,G__40423,seq40421__$2);
}));

bignumber.core.div_to_int = (function bignumber$core$div_to_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40793 = arguments.length;
var i__4737__auto___40794 = (0);
while(true){
if((i__4737__auto___40794 < len__4736__auto___40793)){
args__4742__auto__.push((arguments[i__4737__auto___40794]));

var G__40795 = (i__4737__auto___40794 + (1));
i__4737__auto___40794 = G__40795;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core.div_to_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core.div_to_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40431){
var vec__40432 = p__40431;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40432,(0),null);
return bignumber.core.apply_arithmetic_fn("divToInt",cljs.core.divide,x,y,base);
}));

(bignumber.core.div_to_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core.div_to_int.cljs$lang$applyTo = (function (seq40428){
var G__40429 = cljs.core.first(seq40428);
var seq40428__$1 = cljs.core.next(seq40428);
var G__40430 = cljs.core.first(seq40428__$1);
var seq40428__$2 = cljs.core.next(seq40428__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40429,G__40430,seq40428__$2);
}));

bignumber.core._EQ_ = (function bignumber$core$_EQ_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40796 = arguments.length;
var i__4737__auto___40797 = (0);
while(true){
if((i__4737__auto___40797 < len__4736__auto___40796)){
args__4742__auto__.push((arguments[i__4737__auto___40797]));

var G__40798 = (i__4737__auto___40797 + (1));
i__4737__auto___40797 = G__40798;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40441){
var vec__40442 = p__40441;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40442,(0),null);
return bignumber.core.apply_arithmetic_fn("eq",cljs.core._EQ_,x,y,base);
}));

(bignumber.core._EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._EQ_.cljs$lang$applyTo = (function (seq40438){
var G__40439 = cljs.core.first(seq40438);
var seq40438__$1 = cljs.core.next(seq40438);
var G__40440 = cljs.core.first(seq40438__$1);
var seq40438__$2 = cljs.core.next(seq40438__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40439,G__40440,seq40438__$2);
}));

bignumber.core.floor = (function bignumber$core$floor(x){
return bignumber.core.apply_fn("floor",Math.floor,x);
});
bignumber.core._GT_ = (function bignumber$core$_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40801 = arguments.length;
var i__4737__auto___40802 = (0);
while(true){
if((i__4737__auto___40802 < len__4736__auto___40801)){
args__4742__auto__.push((arguments[i__4737__auto___40802]));

var G__40803 = (i__4737__auto___40802 + (1));
i__4737__auto___40802 = G__40803;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40451){
var vec__40452 = p__40451;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40452,(0),null);
return bignumber.core.apply_arithmetic_fn("gt",cljs.core._GT_,x,y,base);
}));

(bignumber.core._GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._GT_.cljs$lang$applyTo = (function (seq40448){
var G__40449 = cljs.core.first(seq40448);
var seq40448__$1 = cljs.core.next(seq40448);
var G__40450 = cljs.core.first(seq40448__$1);
var seq40448__$2 = cljs.core.next(seq40448__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40449,G__40450,seq40448__$2);
}));

bignumber.core._GT__EQ_ = (function bignumber$core$_GT__EQ_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40804 = arguments.length;
var i__4737__auto___40805 = (0);
while(true){
if((i__4737__auto___40805 < len__4736__auto___40804)){
args__4742__auto__.push((arguments[i__4737__auto___40805]));

var G__40808 = (i__4737__auto___40805 + (1));
i__4737__auto___40805 = G__40808;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40459){
var vec__40461 = p__40459;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40461,(0),null);
return bignumber.core.apply_arithmetic_fn("gte",cljs.core._GT__EQ_,x,y,base);
}));

(bignumber.core._GT__EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._GT__EQ_.cljs$lang$applyTo = (function (seq40455){
var G__40456 = cljs.core.first(seq40455);
var seq40455__$1 = cljs.core.next(seq40455);
var G__40457 = cljs.core.first(seq40455__$1);
var seq40455__$2 = cljs.core.next(seq40455__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40456,G__40457,seq40455__$2);
}));

bignumber.core.finite_QMARK_ = (function bignumber$core$finite_QMARK_(x){
return bignumber.core.apply_fn("isFinite",cljs.core.complement(cljs.core.infinite_QMARK_),x);
});
bignumber.core.int_QMARK_ = (function bignumber$core$int_QMARK_(x){
return bignumber.core.apply_fn("isInt",cljs.core.int_QMARK_,x);
});
bignumber.core.nan_QMARK_ = (function bignumber$core$nan_QMARK_(x){
return bignumber.core.apply_fn("isNaN",isNaN,x);
});
bignumber.core.neg_QMARK_ = (function bignumber$core$neg_QMARK_(x){
return bignumber.core.apply_fn("isNeg",cljs.core.neg_QMARK_,x);
});
bignumber.core.zero_QMARK_ = (function bignumber$core$zero_QMARK_(x){
return bignumber.core.apply_fn("isZero",cljs.core.zero_QMARK_,x);
});
bignumber.core._LT_ = (function bignumber$core$_LT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40809 = arguments.length;
var i__4737__auto___40812 = (0);
while(true){
if((i__4737__auto___40812 < len__4736__auto___40809)){
args__4742__auto__.push((arguments[i__4737__auto___40812]));

var G__40813 = (i__4737__auto___40812 + (1));
i__4737__auto___40812 = G__40813;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40478){
var vec__40479 = p__40478;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40479,(0),null);
return bignumber.core.apply_arithmetic_fn("lt",cljs.core._LT_,x,y,base);
}));

(bignumber.core._LT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._LT_.cljs$lang$applyTo = (function (seq40475){
var G__40476 = cljs.core.first(seq40475);
var seq40475__$1 = cljs.core.next(seq40475);
var G__40477 = cljs.core.first(seq40475__$1);
var seq40475__$2 = cljs.core.next(seq40475__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40476,G__40477,seq40475__$2);
}));

bignumber.core._LT__EQ_ = (function bignumber$core$_LT__EQ_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40814 = arguments.length;
var i__4737__auto___40815 = (0);
while(true){
if((i__4737__auto___40815 < len__4736__auto___40814)){
args__4742__auto__.push((arguments[i__4737__auto___40815]));

var G__40816 = (i__4737__auto___40815 + (1));
i__4737__auto___40815 = G__40816;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40501){
var vec__40502 = p__40501;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40502,(0),null);
return bignumber.core.apply_arithmetic_fn("lte",cljs.core._LT__EQ_,x,y,base);
}));

(bignumber.core._LT__EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._LT__EQ_.cljs$lang$applyTo = (function (seq40487){
var G__40488 = cljs.core.first(seq40487);
var seq40487__$1 = cljs.core.next(seq40487);
var G__40489 = cljs.core.first(seq40487__$1);
var seq40487__$2 = cljs.core.next(seq40487__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40488,G__40489,seq40487__$2);
}));

bignumber.core._ = (function bignumber$core$_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40819 = arguments.length;
var i__4737__auto___40820 = (0);
while(true){
if((i__4737__auto___40820 < len__4736__auto___40819)){
args__4742__auto__.push((arguments[i__4737__auto___40820]));

var G__40821 = (i__4737__auto___40820 + (1));
i__4737__auto___40820 = G__40821;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40516){
var vec__40518 = p__40516;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40518,(0),null);
return bignumber.core.apply_arithmetic_fn("minus",cljs.core._,x,y,base);
}));

(bignumber.core._.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._.cljs$lang$applyTo = (function (seq40509){
var G__40510 = cljs.core.first(seq40509);
var seq40509__$1 = cljs.core.next(seq40509);
var G__40511 = cljs.core.first(seq40509__$1);
var seq40509__$2 = cljs.core.next(seq40509__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40510,G__40511,seq40509__$2);
}));

bignumber.core.mod = (function bignumber$core$mod(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40822 = arguments.length;
var i__4737__auto___40823 = (0);
while(true){
if((i__4737__auto___40823 < len__4736__auto___40822)){
args__4742__auto__.push((arguments[i__4737__auto___40823]));

var G__40824 = (i__4737__auto___40823 + (1));
i__4737__auto___40823 = G__40824;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core.mod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core.mod.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40542){
var vec__40543 = p__40542;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40543,(0),null);
return bignumber.core.apply_arithmetic_fn("mod",cljs.core.mod,x,y,base);
}));

(bignumber.core.mod.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core.mod.cljs$lang$applyTo = (function (seq40526){
var G__40527 = cljs.core.first(seq40526);
var seq40526__$1 = cljs.core.next(seq40526);
var G__40528 = cljs.core.first(seq40526__$1);
var seq40526__$2 = cljs.core.next(seq40526__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40527,G__40528,seq40526__$2);
}));

bignumber.core.neg = (function bignumber$core$neg(x){
return bignumber.core.apply_fn("neg",cljs.core.unchecked_negate,x);
});
bignumber.core._PLUS_ = (function bignumber$core$_PLUS_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40827 = arguments.length;
var i__4737__auto___40828 = (0);
while(true){
if((i__4737__auto___40828 < len__4736__auto___40827)){
args__4742__auto__.push((arguments[i__4737__auto___40828]));

var G__40829 = (i__4737__auto___40828 + (1));
i__4737__auto___40828 = G__40829;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40576){
var vec__40577 = p__40576;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40577,(0),null);
return bignumber.core.apply_arithmetic_fn("plus",cljs.core._PLUS_,x,y,base);
}));

(bignumber.core._PLUS_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._PLUS_.cljs$lang$applyTo = (function (seq40565){
var G__40566 = cljs.core.first(seq40565);
var seq40565__$1 = cljs.core.next(seq40565);
var G__40568 = cljs.core.first(seq40565__$1);
var seq40565__$2 = cljs.core.next(seq40565__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40566,G__40568,seq40565__$2);
}));

bignumber.core.sd = (function bignumber$core$sd(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40830 = arguments.length;
var i__4737__auto___40831 = (0);
while(true){
if((i__4737__auto___40831 < len__4736__auto___40830)){
args__4742__auto__.push((arguments[i__4737__auto___40831]));

var G__40832 = (i__4737__auto___40831 + (1));
i__4737__auto___40831 = G__40832;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.sd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.sd.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40598){
var vec__40599 = p__40598;
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40599,(0),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("sd",cljs.core.constantly(null),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z], 0));
}));

(bignumber.core.sd.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.sd.cljs$lang$applyTo = (function (seq40588){
var G__40589 = cljs.core.first(seq40588);
var seq40588__$1 = cljs.core.next(seq40588);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40589,seq40588__$1);
}));

bignumber.core.round = (function bignumber$core$round(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40835 = arguments.length;
var i__4737__auto___40836 = (0);
while(true){
if((i__4737__auto___40836 < len__4736__auto___40835)){
args__4742__auto__.push((arguments[i__4737__auto___40836]));

var G__40837 = (i__4737__auto___40836 + (1));
i__4737__auto___40836 = G__40837;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.round.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40630){
var vec__40631 = p__40630;
var dp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40631,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40631,(1),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("round",Math.round,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dp,rm], 0));
}));

(bignumber.core.round.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.round.cljs$lang$applyTo = (function (seq40617){
var G__40618 = cljs.core.first(seq40617);
var seq40617__$1 = cljs.core.next(seq40617);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40618,seq40617__$1);
}));

bignumber.core.shift = (function bignumber$core$shift(x,z){
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("shift",cljs.core.constantly(null),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bignumber.core.dp,z], 0));
});
bignumber.core.sqrt = (function bignumber$core$sqrt(x){
return bignumber.core.apply_fn("sqrt",Math.sqrt,x);
});
bignumber.core._STAR_ = (function bignumber$core$_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40840 = arguments.length;
var i__4737__auto___40841 = (0);
while(true){
if((i__4737__auto___40841 < len__4736__auto___40840)){
args__4742__auto__.push((arguments[i__4737__auto___40841]));

var G__40842 = (i__4737__auto___40841 + (1));
i__4737__auto___40841 = G__40842;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__40651){
var vec__40652 = p__40651;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40652,(0),null);
return bignumber.core.apply_arithmetic_fn("times",cljs.core._STAR_,x,y,base);
}));

(bignumber.core._STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._STAR_.cljs$lang$applyTo = (function (seq40647){
var G__40648 = cljs.core.first(seq40647);
var seq40647__$1 = cljs.core.next(seq40647);
var G__40649 = cljs.core.first(seq40647__$1);
var seq40647__$2 = cljs.core.next(seq40647__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40648,G__40649,seq40647__$2);
}));

bignumber.core.digits = (function bignumber$core$digits(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40843 = arguments.length;
var i__4737__auto___40844 = (0);
while(true){
if((i__4737__auto___40844 < len__4736__auto___40843)){
args__4742__auto__.push((arguments[i__4737__auto___40844]));

var G__40845 = (i__4737__auto___40844 + (1));
i__4737__auto___40844 = G__40845;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.digits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.digits.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40672){
var vec__40673 = p__40672;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40673,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40673,(1),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("toDigits",cljs.core.identity,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sd,rm], 0));
}));

(bignumber.core.digits.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.digits.cljs$lang$applyTo = (function (seq40660){
var G__40661 = cljs.core.first(seq40660);
var seq40660__$1 = cljs.core.next(seq40660);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40661,seq40660__$1);
}));

bignumber.core.exponential = (function bignumber$core$exponential(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40848 = arguments.length;
var i__4737__auto___40849 = (0);
while(true){
if((i__4737__auto___40849 < len__4736__auto___40848)){
args__4742__auto__.push((arguments[i__4737__auto___40849]));

var G__40850 = (i__4737__auto___40849 + (1));
i__4737__auto___40849 = G__40850;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.exponential.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.exponential.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40688){
var vec__40689 = p__40688;
var dp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40689,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40689,(1),null);
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,"toExponential",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dp,rm], 0));
}));

(bignumber.core.exponential.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.exponential.cljs$lang$applyTo = (function (seq40680){
var G__40681 = cljs.core.first(seq40680);
var seq40680__$1 = cljs.core.next(seq40680);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40681,seq40680__$1);
}));

bignumber.core.fixed = (function bignumber$core$fixed(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40851 = arguments.length;
var i__4737__auto___40852 = (0);
while(true){
if((i__4737__auto___40852 < len__4736__auto___40851)){
args__4742__auto__.push((arguments[i__4737__auto___40852]));

var G__40853 = (i__4737__auto___40852 + (1));
i__4737__auto___40852 = G__40853;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.fixed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.fixed.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40706){
var vec__40709 = p__40706;
var dp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40709,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40709,(1),null);
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,"toFixed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dp,rm], 0));
}));

(bignumber.core.fixed.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.fixed.cljs$lang$applyTo = (function (seq40698){
var G__40699 = cljs.core.first(seq40698);
var seq40698__$1 = cljs.core.next(seq40698);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40699,seq40698__$1);
}));

bignumber.core.format = (function bignumber$core$format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40856 = arguments.length;
var i__4737__auto___40857 = (0);
while(true){
if((i__4737__auto___40857 < len__4736__auto___40856)){
args__4742__auto__.push((arguments[i__4737__auto___40857]));

var G__40858 = (i__4737__auto___40857 + (1));
i__4737__auto___40857 = G__40858;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40738){
var vec__40741 = p__40738;
var dp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40741,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40741,(1),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("toFormat",cljs.core.identity,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dp,rm], 0));
}));

(bignumber.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.format.cljs$lang$applyTo = (function (seq40725){
var G__40726 = cljs.core.first(seq40725);
var seq40725__$1 = cljs.core.next(seq40725);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40726,seq40725__$1);
}));

bignumber.core.fraction = (function bignumber$core$fraction(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40861 = arguments.length;
var i__4737__auto___40862 = (0);
while(true){
if((i__4737__auto___40862 < len__4736__auto___40861)){
args__4742__auto__.push((arguments[i__4737__auto___40862]));

var G__40863 = (i__4737__auto___40862 + (1));
i__4737__auto___40862 = G__40863;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.fraction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.fraction.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40753){
var vec__40754 = p__40753;
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40754,(0),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("toFraction",cljs.core.identity,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map], 0));
}));

(bignumber.core.fraction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.fraction.cljs$lang$applyTo = (function (seq40751){
var G__40752 = cljs.core.first(seq40751);
var seq40751__$1 = cljs.core.next(seq40751);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40752,seq40751__$1);
}));

bignumber.core.json = (function bignumber$core$json(x){
return bignumber.core.apply_fn("toJSON",JSON.stringify,x);
});
bignumber.core.pow = (function bignumber$core$pow(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40864 = arguments.length;
var i__4737__auto___40865 = (0);
while(true){
if((i__4737__auto___40865 < len__4736__auto___40864)){
args__4742__auto__.push((arguments[i__4737__auto___40865]));

var G__40866 = (i__4737__auto___40865 + (1));
i__4737__auto___40865 = G__40866;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core.pow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core.pow.cljs$core$IFn$_invoke$arity$variadic = (function (x,n,p__40762){
var vec__40763 = p__40762;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40763,(0),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("pow",Math.pow,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,m], 0));
}));

(bignumber.core.pow.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core.pow.cljs$lang$applyTo = (function (seq40757){
var G__40758 = cljs.core.first(seq40757);
var seq40757__$1 = cljs.core.next(seq40757);
var G__40759 = cljs.core.first(seq40757__$1);
var seq40757__$2 = cljs.core.next(seq40757__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40758,G__40759,seq40757__$2);
}));

bignumber.core.precision = (function bignumber$core$precision(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40869 = arguments.length;
var i__4737__auto___40870 = (0);
while(true){
if((i__4737__auto___40870 < len__4736__auto___40869)){
args__4742__auto__.push((arguments[i__4737__auto___40870]));

var G__40871 = (i__4737__auto___40870 + (1));
i__4737__auto___40870 = G__40871;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.precision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.precision.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__40770){
var vec__40771 = p__40770;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40771,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40771,(1),null);
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,"toPrecision",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sd,rm], 0));
}));

(bignumber.core.precision.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.precision.cljs$lang$applyTo = (function (seq40766){
var G__40767 = cljs.core.first(seq40766);
var seq40766__$1 = cljs.core.next(seq40766);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40767,seq40766__$1);
}));

bignumber.core.trunc = (function bignumber$core$trunc(x){
if(cljs.core.truth_(bignumber.core.bignumber_QMARK_(x))){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,"trunc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(typeof x === 'number'){
return (x | (0));
} else {
return x;

}
}
});
bignumber.core.value_of = (function bignumber$core$value_of(x){
return cljs.core.js_invoke(x,"valueOf");
});

//# sourceMappingURL=bignumber.core.js.map
