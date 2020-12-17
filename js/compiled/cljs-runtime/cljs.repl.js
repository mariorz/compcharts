goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39373){
var map__39374 = p__39373;
var map__39374__$1 = (((((!((map__39374 == null))))?(((((map__39374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39374):map__39374);
var m = map__39374__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39374__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39374__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39376_39586 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39377_39587 = null;
var count__39378_39588 = (0);
var i__39379_39589 = (0);
while(true){
if((i__39379_39589 < count__39378_39588)){
var f_39590 = chunk__39377_39587.cljs$core$IIndexed$_nth$arity$2(null,i__39379_39589);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39590], 0));


var G__39591 = seq__39376_39586;
var G__39592 = chunk__39377_39587;
var G__39593 = count__39378_39588;
var G__39594 = (i__39379_39589 + (1));
seq__39376_39586 = G__39591;
chunk__39377_39587 = G__39592;
count__39378_39588 = G__39593;
i__39379_39589 = G__39594;
continue;
} else {
var temp__5735__auto___39595 = cljs.core.seq(seq__39376_39586);
if(temp__5735__auto___39595){
var seq__39376_39597__$1 = temp__5735__auto___39595;
if(cljs.core.chunked_seq_QMARK_(seq__39376_39597__$1)){
var c__4556__auto___39598 = cljs.core.chunk_first(seq__39376_39597__$1);
var G__39599 = cljs.core.chunk_rest(seq__39376_39597__$1);
var G__39600 = c__4556__auto___39598;
var G__39601 = cljs.core.count(c__4556__auto___39598);
var G__39602 = (0);
seq__39376_39586 = G__39599;
chunk__39377_39587 = G__39600;
count__39378_39588 = G__39601;
i__39379_39589 = G__39602;
continue;
} else {
var f_39603 = cljs.core.first(seq__39376_39597__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39603], 0));


var G__39604 = cljs.core.next(seq__39376_39597__$1);
var G__39605 = null;
var G__39606 = (0);
var G__39607 = (0);
seq__39376_39586 = G__39604;
chunk__39377_39587 = G__39605;
count__39378_39588 = G__39606;
i__39379_39589 = G__39607;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39608 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39608], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39608)))?cljs.core.second(arglists_39608):arglists_39608)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39383_39610 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39384_39611 = null;
var count__39385_39612 = (0);
var i__39386_39613 = (0);
while(true){
if((i__39386_39613 < count__39385_39612)){
var vec__39400_39614 = chunk__39384_39611.cljs$core$IIndexed$_nth$arity$2(null,i__39386_39613);
var name_39615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39400_39614,(0),null);
var map__39403_39616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39400_39614,(1),null);
var map__39403_39617__$1 = (((((!((map__39403_39616 == null))))?(((((map__39403_39616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39403_39616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39403_39616):map__39403_39616);
var doc_39618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39403_39617__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39403_39617__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39615], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39619], 0));

if(cljs.core.truth_(doc_39618)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39618], 0));
} else {
}


var G__39621 = seq__39383_39610;
var G__39622 = chunk__39384_39611;
var G__39623 = count__39385_39612;
var G__39624 = (i__39386_39613 + (1));
seq__39383_39610 = G__39621;
chunk__39384_39611 = G__39622;
count__39385_39612 = G__39623;
i__39386_39613 = G__39624;
continue;
} else {
var temp__5735__auto___39625 = cljs.core.seq(seq__39383_39610);
if(temp__5735__auto___39625){
var seq__39383_39626__$1 = temp__5735__auto___39625;
if(cljs.core.chunked_seq_QMARK_(seq__39383_39626__$1)){
var c__4556__auto___39627 = cljs.core.chunk_first(seq__39383_39626__$1);
var G__39628 = cljs.core.chunk_rest(seq__39383_39626__$1);
var G__39629 = c__4556__auto___39627;
var G__39630 = cljs.core.count(c__4556__auto___39627);
var G__39631 = (0);
seq__39383_39610 = G__39628;
chunk__39384_39611 = G__39629;
count__39385_39612 = G__39630;
i__39386_39613 = G__39631;
continue;
} else {
var vec__39406_39632 = cljs.core.first(seq__39383_39626__$1);
var name_39633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39406_39632,(0),null);
var map__39409_39634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39406_39632,(1),null);
var map__39409_39635__$1 = (((((!((map__39409_39634 == null))))?(((((map__39409_39634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39409_39634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39409_39634):map__39409_39634);
var doc_39636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39409_39635__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39409_39635__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39633], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39637], 0));

if(cljs.core.truth_(doc_39636)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39636], 0));
} else {
}


var G__39638 = cljs.core.next(seq__39383_39626__$1);
var G__39639 = null;
var G__39640 = (0);
var G__39641 = (0);
seq__39383_39610 = G__39638;
chunk__39384_39611 = G__39639;
count__39385_39612 = G__39640;
i__39386_39613 = G__39641;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39411 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39412 = null;
var count__39413 = (0);
var i__39414 = (0);
while(true){
if((i__39414 < count__39413)){
var role = chunk__39412.cljs$core$IIndexed$_nth$arity$2(null,i__39414);
var temp__5735__auto___39643__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39643__$1)){
var spec_39644 = temp__5735__auto___39643__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39644)], 0));
} else {
}


var G__39645 = seq__39411;
var G__39646 = chunk__39412;
var G__39647 = count__39413;
var G__39648 = (i__39414 + (1));
seq__39411 = G__39645;
chunk__39412 = G__39646;
count__39413 = G__39647;
i__39414 = G__39648;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__39411);
if(temp__5735__auto____$1){
var seq__39411__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39411__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39411__$1);
var G__39649 = cljs.core.chunk_rest(seq__39411__$1);
var G__39650 = c__4556__auto__;
var G__39651 = cljs.core.count(c__4556__auto__);
var G__39652 = (0);
seq__39411 = G__39649;
chunk__39412 = G__39650;
count__39413 = G__39651;
i__39414 = G__39652;
continue;
} else {
var role = cljs.core.first(seq__39411__$1);
var temp__5735__auto___39653__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39653__$2)){
var spec_39654 = temp__5735__auto___39653__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39654)], 0));
} else {
}


var G__39655 = cljs.core.next(seq__39411__$1);
var G__39656 = null;
var G__39657 = (0);
var G__39658 = (0);
seq__39411 = G__39655;
chunk__39412 = G__39656;
count__39413 = G__39657;
i__39414 = G__39658;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39659 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39660 = cljs.core.ex_cause(t);
via = G__39659;
t = G__39660;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39422 = datafied_throwable;
var map__39422__$1 = (((((!((map__39422 == null))))?(((((map__39422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39422):map__39422);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39422__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39422__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39422__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39423 = cljs.core.last(via);
var map__39423__$1 = (((((!((map__39423 == null))))?(((((map__39423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39423):map__39423);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39423__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39423__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39423__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39424 = data;
var map__39424__$1 = (((((!((map__39424 == null))))?(((((map__39424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39424):map__39424);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39424__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39424__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39424__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39425 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39425__$1 = (((((!((map__39425 == null))))?(((((map__39425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39425):map__39425);
var top_data = map__39425__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39425__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39430 = phase;
var G__39430__$1 = (((G__39430 instanceof cljs.core.Keyword))?G__39430.fqn:null);
switch (G__39430__$1) {
case "read-source":
var map__39431 = data;
var map__39431__$1 = (((((!((map__39431 == null))))?(((((map__39431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39431):map__39431);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39431__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39431__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39443 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39443__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39443,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39443);
var G__39443__$2 = (cljs.core.truth_((function (){var fexpr__39451 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39451.cljs$core$IFn$_invoke$arity$1 ? fexpr__39451.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39451.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39443__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39443__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39443__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39443__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39452 = top_data;
var G__39452__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39452,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39452);
var G__39452__$2 = (cljs.core.truth_((function (){var fexpr__39453 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39453.cljs$core$IFn$_invoke$arity$1 ? fexpr__39453.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39453.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39452__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39452__$1);
var G__39452__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39452__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39452__$2);
var G__39452__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39452__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39452__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39452__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39452__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39458 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39458,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39458,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39458,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39458,(3),null);
var G__39464 = top_data;
var G__39464__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39464,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39464);
var G__39464__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39464__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39464__$1);
var G__39464__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39464__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39464__$2);
var G__39464__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39464__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39464__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39464__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39464__$4;
}

break;
case "execution":
var vec__39469 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39469,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39469,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39469,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39469,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39421_SHARP_){
var or__4126__auto__ = (p1__39421_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__39483 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39483.cljs$core$IFn$_invoke$arity$1 ? fexpr__39483.cljs$core$IFn$_invoke$arity$1(p1__39421_SHARP_) : fexpr__39483.call(null,p1__39421_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__39484 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39484__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39484,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39484);
var G__39484__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39484__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39484__$1);
var G__39484__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39484__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39484__$2);
var G__39484__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39484__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39484__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39484__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39484__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39430__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39511){
var map__39516 = p__39511;
var map__39516__$1 = (((((!((map__39516 == null))))?(((((map__39516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39516):map__39516);
var triage_data = map__39516__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39516__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39516__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39516__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39516__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39516__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39516__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39516__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39516__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39535 = phase;
var G__39535__$1 = (((G__39535 instanceof cljs.core.Keyword))?G__39535.fqn:null);
switch (G__39535__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39536 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39537 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39538 = loc;
var G__39539 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39548_39671 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39549_39672 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39550_39673 = true;
var _STAR_print_fn_STAR__temp_val__39551_39674 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39550_39673);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39551_39674);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39509_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39509_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39549_39672);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39548_39671);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39536,G__39537,G__39538,G__39539) : format.call(null,G__39536,G__39537,G__39538,G__39539));

break;
case "macroexpansion":
var G__39556 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39557 = cause_type;
var G__39558 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39559 = loc;
var G__39560 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39556,G__39557,G__39558,G__39559,G__39560) : format.call(null,G__39556,G__39557,G__39558,G__39559,G__39560));

break;
case "compile-syntax-check":
var G__39561 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39562 = cause_type;
var G__39563 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39564 = loc;
var G__39565 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39561,G__39562,G__39563,G__39564,G__39565) : format.call(null,G__39561,G__39562,G__39563,G__39564,G__39565));

break;
case "compilation":
var G__39566 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39567 = cause_type;
var G__39568 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39569 = loc;
var G__39570 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39566,G__39567,G__39568,G__39569,G__39570) : format.call(null,G__39566,G__39567,G__39568,G__39569,G__39570));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39571 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39572 = symbol;
var G__39573 = loc;
var G__39574 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39575_39676 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39576_39677 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39577_39678 = true;
var _STAR_print_fn_STAR__temp_val__39578_39679 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39577_39678);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39578_39679);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39510_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39510_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39576_39677);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39575_39676);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39571,G__39572,G__39573,G__39574) : format.call(null,G__39571,G__39572,G__39573,G__39574));
} else {
var G__39580 = "Execution error%s at %s(%s).\n%s\n";
var G__39581 = cause_type;
var G__39582 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39583 = loc;
var G__39584 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39580,G__39581,G__39582,G__39583,G__39584) : format.call(null,G__39580,G__39581,G__39582,G__39583,G__39584));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39535__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
