goog.provide('datafrisk.shell');
datafrisk.shell.styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shell","shell",1402941019),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FAFAFA",new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Consolas,Monaco,Courier New,monospace",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(9999)], null),new cljs.core.Keyword(null,"shell-visible-button","shell-visible-button",-1362287320),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#4EE24E"], null)], null);
datafrisk.shell.DataFriskShellVisibleButton = (function datafrisk$shell$DataFriskShellVisibleButton(visible_QMARK_,toggle_visible_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),toggle_visible_fn,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font","font",-1506159249),"inherit",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"width","width",-384071477),"80px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.Keyword(null,"shell-visible-button","shell-visible-button",-1362287320).cljs$core$IFn$_invoke$arity$1(datafrisk.shell.styles),(cljs.core.truth_(visible_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null))], 0))], null),(cljs.core.truth_(visible_QMARK_)?"Hide":"Data frisk")], null);
});
datafrisk.shell.DataFriskShellView = (function datafrisk$shell$DataFriskShellView(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39171 = arguments.length;
var i__4737__auto___39172 = (0);
while(true){
if((i__4737__auto___39172 < len__4736__auto___39171)){
args__4742__auto__.push((arguments[i__4737__auto___39172]));

var G__39174 = (i__4737__auto___39172 + (1));
i__4737__auto___39172 = G__39174;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return datafrisk.shell.DataFriskShellView.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(datafrisk.shell.DataFriskShellView.cljs$core$IFn$_invoke$arity$variadic = (function (shell_state,data){
var visible_QMARK_ = new cljs.core.Keyword(null,"shell-visible?","shell-visible?",-760858146).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shell_state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),(cljs.core.truth_(visible_QMARK_)?"50%":(0)),new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.3s ease-out",new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null),new cljs.core.Keyword(null,"shell","shell",1402941019).cljs$core$IFn$_invoke$arity$1(datafrisk.shell.styles)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.shell.DataFriskShellVisibleButton,visible_QMARK_,(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shell_state,cljs.core.assoc,new cljs.core.Keyword(null,"shell-visible?","shell-visible?",-760858146),cljs.core.not(visible_QMARK_));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.view.Root,x,id,shell_state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}),data)], null)], null);
}));

(datafrisk.shell.DataFriskShellView.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datafrisk.shell.DataFriskShellView.cljs$lang$applyTo = (function (seq39165){
var G__39166 = cljs.core.first(seq39165);
var seq39165__$1 = cljs.core.next(seq39165);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39166,seq39165__$1);
}));

datafrisk.shell.DataFriskShell = (function datafrisk$shell$DataFriskShell(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39176 = arguments.length;
var i__4737__auto___39177 = (0);
while(true){
if((i__4737__auto___39177 < len__4736__auto___39176)){
args__4742__auto__.push((arguments[i__4737__auto___39177]));

var G__39178 = (i__4737__auto___39177 + (1));
i__4737__auto___39177 = G__39178;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datafrisk.shell.DataFriskShell.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datafrisk.shell.DataFriskShell.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__39167_SHARP_,p2__39168_SHARP_){
return cljs.core.assoc_in(p1__39167_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__39168_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY]));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)));
var shell_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
return (function() { 
var G__39185__delegate = function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datafrisk.shell.DataFriskShellView,shell_state,data__$1);
};
var G__39185 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__39186__i = 0, G__39186__a = new Array(arguments.length -  0);
while (G__39186__i < G__39186__a.length) {G__39186__a[G__39186__i] = arguments[G__39186__i + 0]; ++G__39186__i;}
  data__$1 = new cljs.core.IndexedSeq(G__39186__a,0,null);
} 
return G__39185__delegate.call(this,data__$1);};
G__39185.cljs$lang$maxFixedArity = 0;
G__39185.cljs$lang$applyTo = (function (arglist__39187){
var data__$1 = cljs.core.seq(arglist__39187);
return G__39185__delegate(data__$1);
});
G__39185.cljs$core$IFn$_invoke$arity$variadic = G__39185__delegate;
return G__39185;
})()
;
}));

(datafrisk.shell.DataFriskShell.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datafrisk.shell.DataFriskShell.cljs$lang$applyTo = (function (seq39169){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39169));
}));


//# sourceMappingURL=datafrisk.shell.js.map
