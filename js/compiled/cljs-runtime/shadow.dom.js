goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36299 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36299(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36304 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36304(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35531 = coll;
var G__35532 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35531,G__35532) : shadow.dom.lazy_native_coll_seq.call(null,G__35531,G__35532));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35553 = arguments.length;
switch (G__35553) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35564 = arguments.length;
switch (G__35564) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35573 = arguments.length;
switch (G__35573) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35586 = arguments.length;
switch (G__35586) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35600 = arguments.length;
switch (G__35600) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35615 = arguments.length;
switch (G__35615) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35625){if((e35625 instanceof Object)){
var e = e35625;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35625;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35633 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35634 = null;
var count__35635 = (0);
var i__35637 = (0);
while(true){
if((i__35637 < count__35635)){
var el = chunk__35634.cljs$core$IIndexed$_nth$arity$2(null,i__35637);
var handler_36354__$1 = ((function (seq__35633,chunk__35634,count__35635,i__35637,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35633,chunk__35634,count__35635,i__35637,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36354__$1);


var G__36357 = seq__35633;
var G__36358 = chunk__35634;
var G__36359 = count__35635;
var G__36360 = (i__35637 + (1));
seq__35633 = G__36357;
chunk__35634 = G__36358;
count__35635 = G__36359;
i__35637 = G__36360;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35633);
if(temp__5735__auto__){
var seq__35633__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35633__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35633__$1);
var G__36361 = cljs.core.chunk_rest(seq__35633__$1);
var G__36362 = c__4556__auto__;
var G__36363 = cljs.core.count(c__4556__auto__);
var G__36364 = (0);
seq__35633 = G__36361;
chunk__35634 = G__36362;
count__35635 = G__36363;
i__35637 = G__36364;
continue;
} else {
var el = cljs.core.first(seq__35633__$1);
var handler_36366__$1 = ((function (seq__35633,chunk__35634,count__35635,i__35637,el,seq__35633__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35633,chunk__35634,count__35635,i__35637,el,seq__35633__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36366__$1);


var G__36371 = cljs.core.next(seq__35633__$1);
var G__36372 = null;
var G__36373 = (0);
var G__36374 = (0);
seq__35633 = G__36371;
chunk__35634 = G__36372;
count__35635 = G__36373;
i__35637 = G__36374;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35661 = arguments.length;
switch (G__35661) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35666 = cljs.core.seq(events);
var chunk__35667 = null;
var count__35668 = (0);
var i__35669 = (0);
while(true){
if((i__35669 < count__35668)){
var vec__35682 = chunk__35667.cljs$core$IIndexed$_nth$arity$2(null,i__35669);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35682,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36378 = seq__35666;
var G__36379 = chunk__35667;
var G__36380 = count__35668;
var G__36381 = (i__35669 + (1));
seq__35666 = G__36378;
chunk__35667 = G__36379;
count__35668 = G__36380;
i__35669 = G__36381;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35666);
if(temp__5735__auto__){
var seq__35666__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35666__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35666__$1);
var G__36382 = cljs.core.chunk_rest(seq__35666__$1);
var G__36383 = c__4556__auto__;
var G__36384 = cljs.core.count(c__4556__auto__);
var G__36385 = (0);
seq__35666 = G__36382;
chunk__35667 = G__36383;
count__35668 = G__36384;
i__35669 = G__36385;
continue;
} else {
var vec__35687 = cljs.core.first(seq__35666__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35687,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35687,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36388 = cljs.core.next(seq__35666__$1);
var G__36389 = null;
var G__36390 = (0);
var G__36391 = (0);
seq__35666 = G__36388;
chunk__35667 = G__36389;
count__35668 = G__36390;
i__35669 = G__36391;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35692 = cljs.core.seq(styles);
var chunk__35693 = null;
var count__35694 = (0);
var i__35695 = (0);
while(true){
if((i__35695 < count__35694)){
var vec__35707 = chunk__35693.cljs$core$IIndexed$_nth$arity$2(null,i__35695);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35707,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35707,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36395 = seq__35692;
var G__36396 = chunk__35693;
var G__36397 = count__35694;
var G__36398 = (i__35695 + (1));
seq__35692 = G__36395;
chunk__35693 = G__36396;
count__35694 = G__36397;
i__35695 = G__36398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35692);
if(temp__5735__auto__){
var seq__35692__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35692__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35692__$1);
var G__36399 = cljs.core.chunk_rest(seq__35692__$1);
var G__36400 = c__4556__auto__;
var G__36401 = cljs.core.count(c__4556__auto__);
var G__36402 = (0);
seq__35692 = G__36399;
chunk__35693 = G__36400;
count__35694 = G__36401;
i__35695 = G__36402;
continue;
} else {
var vec__35714 = cljs.core.first(seq__35692__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35714,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35714,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36410 = cljs.core.next(seq__35692__$1);
var G__36411 = null;
var G__36412 = (0);
var G__36413 = (0);
seq__35692 = G__36410;
chunk__35693 = G__36411;
count__35694 = G__36412;
i__35695 = G__36413;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35725_36415 = key;
var G__35725_36416__$1 = (((G__35725_36415 instanceof cljs.core.Keyword))?G__35725_36415.fqn:null);
switch (G__35725_36416__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36423 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_36423,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_36423,"aria-");
}
})())){
el.setAttribute(ks_36423,value);
} else {
(el[ks_36423] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35749){
var map__35750 = p__35749;
var map__35750__$1 = (((((!((map__35750 == null))))?(((((map__35750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35750):map__35750);
var props = map__35750__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35750__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35753 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35753,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35753,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35753,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35756 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35756,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35756;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35763 = arguments.length;
switch (G__35763) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35777){
var vec__35778 = p__35777;
var seq__35779 = cljs.core.seq(vec__35778);
var first__35780 = cljs.core.first(seq__35779);
var seq__35779__$1 = cljs.core.next(seq__35779);
var nn = first__35780;
var first__35780__$1 = cljs.core.first(seq__35779__$1);
var seq__35779__$2 = cljs.core.next(seq__35779__$1);
var np = first__35780__$1;
var nc = seq__35779__$2;
var node = vec__35778;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35782 = nn;
var G__35783 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35782,G__35783) : create_fn.call(null,G__35782,G__35783));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35784 = nn;
var G__35785 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35784,G__35785) : create_fn.call(null,G__35784,G__35785));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35794 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794,(1),null);
var seq__35797_36447 = cljs.core.seq(node_children);
var chunk__35798_36448 = null;
var count__35799_36449 = (0);
var i__35800_36450 = (0);
while(true){
if((i__35800_36450 < count__35799_36449)){
var child_struct_36453 = chunk__35798_36448.cljs$core$IIndexed$_nth$arity$2(null,i__35800_36450);
var children_36454 = shadow.dom.dom_node(child_struct_36453);
if(cljs.core.seq_QMARK_(children_36454)){
var seq__35841_36455 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36454));
var chunk__35843_36456 = null;
var count__35844_36457 = (0);
var i__35845_36458 = (0);
while(true){
if((i__35845_36458 < count__35844_36457)){
var child_36460 = chunk__35843_36456.cljs$core$IIndexed$_nth$arity$2(null,i__35845_36458);
if(cljs.core.truth_(child_36460)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36460);


var G__36462 = seq__35841_36455;
var G__36463 = chunk__35843_36456;
var G__36464 = count__35844_36457;
var G__36465 = (i__35845_36458 + (1));
seq__35841_36455 = G__36462;
chunk__35843_36456 = G__36463;
count__35844_36457 = G__36464;
i__35845_36458 = G__36465;
continue;
} else {
var G__36466 = seq__35841_36455;
var G__36467 = chunk__35843_36456;
var G__36468 = count__35844_36457;
var G__36469 = (i__35845_36458 + (1));
seq__35841_36455 = G__36466;
chunk__35843_36456 = G__36467;
count__35844_36457 = G__36468;
i__35845_36458 = G__36469;
continue;
}
} else {
var temp__5735__auto___36470 = cljs.core.seq(seq__35841_36455);
if(temp__5735__auto___36470){
var seq__35841_36471__$1 = temp__5735__auto___36470;
if(cljs.core.chunked_seq_QMARK_(seq__35841_36471__$1)){
var c__4556__auto___36472 = cljs.core.chunk_first(seq__35841_36471__$1);
var G__36473 = cljs.core.chunk_rest(seq__35841_36471__$1);
var G__36474 = c__4556__auto___36472;
var G__36475 = cljs.core.count(c__4556__auto___36472);
var G__36476 = (0);
seq__35841_36455 = G__36473;
chunk__35843_36456 = G__36474;
count__35844_36457 = G__36475;
i__35845_36458 = G__36476;
continue;
} else {
var child_36478 = cljs.core.first(seq__35841_36471__$1);
if(cljs.core.truth_(child_36478)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36478);


var G__36479 = cljs.core.next(seq__35841_36471__$1);
var G__36480 = null;
var G__36481 = (0);
var G__36482 = (0);
seq__35841_36455 = G__36479;
chunk__35843_36456 = G__36480;
count__35844_36457 = G__36481;
i__35845_36458 = G__36482;
continue;
} else {
var G__36484 = cljs.core.next(seq__35841_36471__$1);
var G__36485 = null;
var G__36486 = (0);
var G__36487 = (0);
seq__35841_36455 = G__36484;
chunk__35843_36456 = G__36485;
count__35844_36457 = G__36486;
i__35845_36458 = G__36487;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36454);
}


var G__36490 = seq__35797_36447;
var G__36491 = chunk__35798_36448;
var G__36492 = count__35799_36449;
var G__36493 = (i__35800_36450 + (1));
seq__35797_36447 = G__36490;
chunk__35798_36448 = G__36491;
count__35799_36449 = G__36492;
i__35800_36450 = G__36493;
continue;
} else {
var temp__5735__auto___36494 = cljs.core.seq(seq__35797_36447);
if(temp__5735__auto___36494){
var seq__35797_36496__$1 = temp__5735__auto___36494;
if(cljs.core.chunked_seq_QMARK_(seq__35797_36496__$1)){
var c__4556__auto___36499 = cljs.core.chunk_first(seq__35797_36496__$1);
var G__36500 = cljs.core.chunk_rest(seq__35797_36496__$1);
var G__36501 = c__4556__auto___36499;
var G__36503 = cljs.core.count(c__4556__auto___36499);
var G__36504 = (0);
seq__35797_36447 = G__36500;
chunk__35798_36448 = G__36501;
count__35799_36449 = G__36503;
i__35800_36450 = G__36504;
continue;
} else {
var child_struct_36506 = cljs.core.first(seq__35797_36496__$1);
var children_36507 = shadow.dom.dom_node(child_struct_36506);
if(cljs.core.seq_QMARK_(children_36507)){
var seq__35857_36508 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36507));
var chunk__35859_36509 = null;
var count__35860_36510 = (0);
var i__35861_36511 = (0);
while(true){
if((i__35861_36511 < count__35860_36510)){
var child_36513 = chunk__35859_36509.cljs$core$IIndexed$_nth$arity$2(null,i__35861_36511);
if(cljs.core.truth_(child_36513)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36513);


var G__36514 = seq__35857_36508;
var G__36515 = chunk__35859_36509;
var G__36516 = count__35860_36510;
var G__36517 = (i__35861_36511 + (1));
seq__35857_36508 = G__36514;
chunk__35859_36509 = G__36515;
count__35860_36510 = G__36516;
i__35861_36511 = G__36517;
continue;
} else {
var G__36518 = seq__35857_36508;
var G__36519 = chunk__35859_36509;
var G__36520 = count__35860_36510;
var G__36521 = (i__35861_36511 + (1));
seq__35857_36508 = G__36518;
chunk__35859_36509 = G__36519;
count__35860_36510 = G__36520;
i__35861_36511 = G__36521;
continue;
}
} else {
var temp__5735__auto___36524__$1 = cljs.core.seq(seq__35857_36508);
if(temp__5735__auto___36524__$1){
var seq__35857_36525__$1 = temp__5735__auto___36524__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35857_36525__$1)){
var c__4556__auto___36528 = cljs.core.chunk_first(seq__35857_36525__$1);
var G__36530 = cljs.core.chunk_rest(seq__35857_36525__$1);
var G__36531 = c__4556__auto___36528;
var G__36532 = cljs.core.count(c__4556__auto___36528);
var G__36533 = (0);
seq__35857_36508 = G__36530;
chunk__35859_36509 = G__36531;
count__35860_36510 = G__36532;
i__35861_36511 = G__36533;
continue;
} else {
var child_36534 = cljs.core.first(seq__35857_36525__$1);
if(cljs.core.truth_(child_36534)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36534);


var G__36536 = cljs.core.next(seq__35857_36525__$1);
var G__36537 = null;
var G__36538 = (0);
var G__36539 = (0);
seq__35857_36508 = G__36536;
chunk__35859_36509 = G__36537;
count__35860_36510 = G__36538;
i__35861_36511 = G__36539;
continue;
} else {
var G__36540 = cljs.core.next(seq__35857_36525__$1);
var G__36541 = null;
var G__36542 = (0);
var G__36543 = (0);
seq__35857_36508 = G__36540;
chunk__35859_36509 = G__36541;
count__35860_36510 = G__36542;
i__35861_36511 = G__36543;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36507);
}


var G__36545 = cljs.core.next(seq__35797_36496__$1);
var G__36546 = null;
var G__36547 = (0);
var G__36548 = (0);
seq__35797_36447 = G__36545;
chunk__35798_36448 = G__36546;
count__35799_36449 = G__36547;
i__35800_36450 = G__36548;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35889 = cljs.core.seq(node);
var chunk__35890 = null;
var count__35891 = (0);
var i__35892 = (0);
while(true){
if((i__35892 < count__35891)){
var n = chunk__35890.cljs$core$IIndexed$_nth$arity$2(null,i__35892);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36556 = seq__35889;
var G__36557 = chunk__35890;
var G__36558 = count__35891;
var G__36559 = (i__35892 + (1));
seq__35889 = G__36556;
chunk__35890 = G__36557;
count__35891 = G__36558;
i__35892 = G__36559;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35889);
if(temp__5735__auto__){
var seq__35889__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35889__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35889__$1);
var G__36562 = cljs.core.chunk_rest(seq__35889__$1);
var G__36563 = c__4556__auto__;
var G__36564 = cljs.core.count(c__4556__auto__);
var G__36565 = (0);
seq__35889 = G__36562;
chunk__35890 = G__36563;
count__35891 = G__36564;
i__35892 = G__36565;
continue;
} else {
var n = cljs.core.first(seq__35889__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36568 = cljs.core.next(seq__35889__$1);
var G__36569 = null;
var G__36570 = (0);
var G__36571 = (0);
seq__35889 = G__36568;
chunk__35890 = G__36569;
count__35891 = G__36570;
i__35892 = G__36571;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35906 = arguments.length;
switch (G__35906) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35915 = arguments.length;
switch (G__35915) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35933 = arguments.length;
switch (G__35933) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36596 = arguments.length;
var i__4737__auto___36598 = (0);
while(true){
if((i__4737__auto___36598 < len__4736__auto___36596)){
args__4742__auto__.push((arguments[i__4737__auto___36598]));

var G__36601 = (i__4737__auto___36598 + (1));
i__4737__auto___36598 = G__36601;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35960_36604 = cljs.core.seq(nodes);
var chunk__35961_36605 = null;
var count__35962_36606 = (0);
var i__35963_36607 = (0);
while(true){
if((i__35963_36607 < count__35962_36606)){
var node_36610 = chunk__35961_36605.cljs$core$IIndexed$_nth$arity$2(null,i__35963_36607);
fragment.appendChild(shadow.dom._to_dom(node_36610));


var G__36611 = seq__35960_36604;
var G__36612 = chunk__35961_36605;
var G__36613 = count__35962_36606;
var G__36614 = (i__35963_36607 + (1));
seq__35960_36604 = G__36611;
chunk__35961_36605 = G__36612;
count__35962_36606 = G__36613;
i__35963_36607 = G__36614;
continue;
} else {
var temp__5735__auto___36615 = cljs.core.seq(seq__35960_36604);
if(temp__5735__auto___36615){
var seq__35960_36617__$1 = temp__5735__auto___36615;
if(cljs.core.chunked_seq_QMARK_(seq__35960_36617__$1)){
var c__4556__auto___36619 = cljs.core.chunk_first(seq__35960_36617__$1);
var G__36621 = cljs.core.chunk_rest(seq__35960_36617__$1);
var G__36622 = c__4556__auto___36619;
var G__36623 = cljs.core.count(c__4556__auto___36619);
var G__36624 = (0);
seq__35960_36604 = G__36621;
chunk__35961_36605 = G__36622;
count__35962_36606 = G__36623;
i__35963_36607 = G__36624;
continue;
} else {
var node_36625 = cljs.core.first(seq__35960_36617__$1);
fragment.appendChild(shadow.dom._to_dom(node_36625));


var G__36629 = cljs.core.next(seq__35960_36617__$1);
var G__36630 = null;
var G__36631 = (0);
var G__36632 = (0);
seq__35960_36604 = G__36629;
chunk__35961_36605 = G__36630;
count__35962_36606 = G__36631;
i__35963_36607 = G__36632;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35954){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35954));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35969_36636 = cljs.core.seq(scripts);
var chunk__35970_36637 = null;
var count__35971_36638 = (0);
var i__35972_36639 = (0);
while(true){
if((i__35972_36639 < count__35971_36638)){
var vec__35981_36640 = chunk__35970_36637.cljs$core$IIndexed$_nth$arity$2(null,i__35972_36639);
var script_tag_36641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35981_36640,(0),null);
var script_body_36642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35981_36640,(1),null);
eval(script_body_36642);


var G__36643 = seq__35969_36636;
var G__36644 = chunk__35970_36637;
var G__36645 = count__35971_36638;
var G__36646 = (i__35972_36639 + (1));
seq__35969_36636 = G__36643;
chunk__35970_36637 = G__36644;
count__35971_36638 = G__36645;
i__35972_36639 = G__36646;
continue;
} else {
var temp__5735__auto___36648 = cljs.core.seq(seq__35969_36636);
if(temp__5735__auto___36648){
var seq__35969_36651__$1 = temp__5735__auto___36648;
if(cljs.core.chunked_seq_QMARK_(seq__35969_36651__$1)){
var c__4556__auto___36652 = cljs.core.chunk_first(seq__35969_36651__$1);
var G__36653 = cljs.core.chunk_rest(seq__35969_36651__$1);
var G__36654 = c__4556__auto___36652;
var G__36655 = cljs.core.count(c__4556__auto___36652);
var G__36656 = (0);
seq__35969_36636 = G__36653;
chunk__35970_36637 = G__36654;
count__35971_36638 = G__36655;
i__35972_36639 = G__36656;
continue;
} else {
var vec__35985_36657 = cljs.core.first(seq__35969_36651__$1);
var script_tag_36658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35985_36657,(0),null);
var script_body_36659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35985_36657,(1),null);
eval(script_body_36659);


var G__36664 = cljs.core.next(seq__35969_36651__$1);
var G__36665 = null;
var G__36666 = (0);
var G__36667 = (0);
seq__35969_36636 = G__36664;
chunk__35970_36637 = G__36665;
count__35971_36638 = G__36666;
i__35972_36639 = G__36667;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35988){
var vec__35989 = p__35988;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35989,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35989,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35998 = arguments.length;
switch (G__35998) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36017 = cljs.core.seq(style_keys);
var chunk__36018 = null;
var count__36019 = (0);
var i__36020 = (0);
while(true){
if((i__36020 < count__36019)){
var it = chunk__36018.cljs$core$IIndexed$_nth$arity$2(null,i__36020);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36673 = seq__36017;
var G__36674 = chunk__36018;
var G__36675 = count__36019;
var G__36676 = (i__36020 + (1));
seq__36017 = G__36673;
chunk__36018 = G__36674;
count__36019 = G__36675;
i__36020 = G__36676;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36017);
if(temp__5735__auto__){
var seq__36017__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36017__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36017__$1);
var G__36677 = cljs.core.chunk_rest(seq__36017__$1);
var G__36678 = c__4556__auto__;
var G__36679 = cljs.core.count(c__4556__auto__);
var G__36680 = (0);
seq__36017 = G__36677;
chunk__36018 = G__36678;
count__36019 = G__36679;
i__36020 = G__36680;
continue;
} else {
var it = cljs.core.first(seq__36017__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36681 = cljs.core.next(seq__36017__$1);
var G__36682 = null;
var G__36683 = (0);
var G__36684 = (0);
seq__36017 = G__36681;
chunk__36018 = G__36682;
count__36019 = G__36683;
i__36020 = G__36684;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36029,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36037 = k36029;
var G__36037__$1 = (((G__36037 instanceof cljs.core.Keyword))?G__36037.fqn:null);
switch (G__36037__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36029,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__36040){
var vec__36041 = p__36040;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36041,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36041,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36028){
var self__ = this;
var G__36028__$1 = this;
return (new cljs.core.RecordIter((0),G__36028__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36030,other36031){
var self__ = this;
var this36030__$1 = this;
return (((!((other36031 == null)))) && ((this36030__$1.constructor === other36031.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36030__$1.x,other36031.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36030__$1.y,other36031.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36030__$1.__extmap,other36031.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36028){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36053 = cljs.core.keyword_identical_QMARK_;
var expr__36054 = k__4388__auto__;
if(cljs.core.truth_((pred__36053.cljs$core$IFn$_invoke$arity$2 ? pred__36053.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36054) : pred__36053.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36054)))){
return (new shadow.dom.Coordinate(G__36028,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36053.cljs$core$IFn$_invoke$arity$2 ? pred__36053.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36054) : pred__36053.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36054)))){
return (new shadow.dom.Coordinate(self__.x,G__36028,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__36028),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36028){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36028,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36034){
var extmap__4419__auto__ = (function (){var G__36063 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36034,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36034)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36063);
} else {
return G__36063;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36034),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36034),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36076,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36089 = k36076;
var G__36089__$1 = (((G__36089 instanceof cljs.core.Keyword))?G__36089.fqn:null);
switch (G__36089__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36076,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__36092){
var vec__36093 = p__36092;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36093,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36093,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36075){
var self__ = this;
var G__36075__$1 = this;
return (new cljs.core.RecordIter((0),G__36075__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36077,other36078){
var self__ = this;
var this36077__$1 = this;
return (((!((other36078 == null)))) && ((this36077__$1.constructor === other36078.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36077__$1.w,other36078.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36077__$1.h,other36078.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36077__$1.__extmap,other36078.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36075){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36113 = cljs.core.keyword_identical_QMARK_;
var expr__36114 = k__4388__auto__;
if(cljs.core.truth_((pred__36113.cljs$core$IFn$_invoke$arity$2 ? pred__36113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36114) : pred__36113.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36114)))){
return (new shadow.dom.Size(G__36075,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36113.cljs$core$IFn$_invoke$arity$2 ? pred__36113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36114) : pred__36113.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36114)))){
return (new shadow.dom.Size(self__.w,G__36075,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__36075),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36075){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36075,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36083){
var extmap__4419__auto__ = (function (){var G__36127 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36083,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36083)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36127);
} else {
return G__36127;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36083),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36083),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__36743 = (i + (1));
var G__36744 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36743;
ret = G__36744;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36132){
var vec__36133 = p__36132;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36133,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36133,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36137 = arguments.length;
switch (G__36137) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36760 = ps;
var G__36761 = (i + (1));
el__$1 = G__36760;
i = G__36761;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36153 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36153,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36153,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36153,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36158_36774 = cljs.core.seq(props);
var chunk__36159_36775 = null;
var count__36160_36776 = (0);
var i__36161_36777 = (0);
while(true){
if((i__36161_36777 < count__36160_36776)){
var vec__36172_36778 = chunk__36159_36775.cljs$core$IIndexed$_nth$arity$2(null,i__36161_36777);
var k_36779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36172_36778,(0),null);
var v_36780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36172_36778,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36779);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36779),v_36780);


var G__36782 = seq__36158_36774;
var G__36783 = chunk__36159_36775;
var G__36784 = count__36160_36776;
var G__36785 = (i__36161_36777 + (1));
seq__36158_36774 = G__36782;
chunk__36159_36775 = G__36783;
count__36160_36776 = G__36784;
i__36161_36777 = G__36785;
continue;
} else {
var temp__5735__auto___36787 = cljs.core.seq(seq__36158_36774);
if(temp__5735__auto___36787){
var seq__36158_36788__$1 = temp__5735__auto___36787;
if(cljs.core.chunked_seq_QMARK_(seq__36158_36788__$1)){
var c__4556__auto___36789 = cljs.core.chunk_first(seq__36158_36788__$1);
var G__36790 = cljs.core.chunk_rest(seq__36158_36788__$1);
var G__36791 = c__4556__auto___36789;
var G__36792 = cljs.core.count(c__4556__auto___36789);
var G__36793 = (0);
seq__36158_36774 = G__36790;
chunk__36159_36775 = G__36791;
count__36160_36776 = G__36792;
i__36161_36777 = G__36793;
continue;
} else {
var vec__36177_36794 = cljs.core.first(seq__36158_36788__$1);
var k_36795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36177_36794,(0),null);
var v_36796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36177_36794,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36795);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36795),v_36796);


var G__36801 = cljs.core.next(seq__36158_36788__$1);
var G__36802 = null;
var G__36803 = (0);
var G__36804 = (0);
seq__36158_36774 = G__36801;
chunk__36159_36775 = G__36802;
count__36160_36776 = G__36803;
i__36161_36777 = G__36804;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36185 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36185,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36185,(1),null);
var seq__36188_36806 = cljs.core.seq(node_children);
var chunk__36190_36807 = null;
var count__36191_36808 = (0);
var i__36192_36809 = (0);
while(true){
if((i__36192_36809 < count__36191_36808)){
var child_struct_36810 = chunk__36190_36807.cljs$core$IIndexed$_nth$arity$2(null,i__36192_36809);
if((!((child_struct_36810 == null)))){
if(typeof child_struct_36810 === 'string'){
var text_36811 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36811),child_struct_36810].join(''));
} else {
var children_36812 = shadow.dom.svg_node(child_struct_36810);
if(cljs.core.seq_QMARK_(children_36812)){
var seq__36222_36814 = cljs.core.seq(children_36812);
var chunk__36224_36815 = null;
var count__36225_36816 = (0);
var i__36226_36817 = (0);
while(true){
if((i__36226_36817 < count__36225_36816)){
var child_36818 = chunk__36224_36815.cljs$core$IIndexed$_nth$arity$2(null,i__36226_36817);
if(cljs.core.truth_(child_36818)){
node.appendChild(child_36818);


var G__36820 = seq__36222_36814;
var G__36821 = chunk__36224_36815;
var G__36822 = count__36225_36816;
var G__36823 = (i__36226_36817 + (1));
seq__36222_36814 = G__36820;
chunk__36224_36815 = G__36821;
count__36225_36816 = G__36822;
i__36226_36817 = G__36823;
continue;
} else {
var G__36824 = seq__36222_36814;
var G__36825 = chunk__36224_36815;
var G__36826 = count__36225_36816;
var G__36827 = (i__36226_36817 + (1));
seq__36222_36814 = G__36824;
chunk__36224_36815 = G__36825;
count__36225_36816 = G__36826;
i__36226_36817 = G__36827;
continue;
}
} else {
var temp__5735__auto___36832 = cljs.core.seq(seq__36222_36814);
if(temp__5735__auto___36832){
var seq__36222_36833__$1 = temp__5735__auto___36832;
if(cljs.core.chunked_seq_QMARK_(seq__36222_36833__$1)){
var c__4556__auto___36834 = cljs.core.chunk_first(seq__36222_36833__$1);
var G__36835 = cljs.core.chunk_rest(seq__36222_36833__$1);
var G__36836 = c__4556__auto___36834;
var G__36837 = cljs.core.count(c__4556__auto___36834);
var G__36838 = (0);
seq__36222_36814 = G__36835;
chunk__36224_36815 = G__36836;
count__36225_36816 = G__36837;
i__36226_36817 = G__36838;
continue;
} else {
var child_36839 = cljs.core.first(seq__36222_36833__$1);
if(cljs.core.truth_(child_36839)){
node.appendChild(child_36839);


var G__36841 = cljs.core.next(seq__36222_36833__$1);
var G__36842 = null;
var G__36843 = (0);
var G__36844 = (0);
seq__36222_36814 = G__36841;
chunk__36224_36815 = G__36842;
count__36225_36816 = G__36843;
i__36226_36817 = G__36844;
continue;
} else {
var G__36846 = cljs.core.next(seq__36222_36833__$1);
var G__36847 = null;
var G__36848 = (0);
var G__36849 = (0);
seq__36222_36814 = G__36846;
chunk__36224_36815 = G__36847;
count__36225_36816 = G__36848;
i__36226_36817 = G__36849;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36812);
}
}


var G__36851 = seq__36188_36806;
var G__36852 = chunk__36190_36807;
var G__36853 = count__36191_36808;
var G__36854 = (i__36192_36809 + (1));
seq__36188_36806 = G__36851;
chunk__36190_36807 = G__36852;
count__36191_36808 = G__36853;
i__36192_36809 = G__36854;
continue;
} else {
var G__36855 = seq__36188_36806;
var G__36856 = chunk__36190_36807;
var G__36857 = count__36191_36808;
var G__36858 = (i__36192_36809 + (1));
seq__36188_36806 = G__36855;
chunk__36190_36807 = G__36856;
count__36191_36808 = G__36857;
i__36192_36809 = G__36858;
continue;
}
} else {
var temp__5735__auto___36859 = cljs.core.seq(seq__36188_36806);
if(temp__5735__auto___36859){
var seq__36188_36860__$1 = temp__5735__auto___36859;
if(cljs.core.chunked_seq_QMARK_(seq__36188_36860__$1)){
var c__4556__auto___36861 = cljs.core.chunk_first(seq__36188_36860__$1);
var G__36862 = cljs.core.chunk_rest(seq__36188_36860__$1);
var G__36863 = c__4556__auto___36861;
var G__36864 = cljs.core.count(c__4556__auto___36861);
var G__36865 = (0);
seq__36188_36806 = G__36862;
chunk__36190_36807 = G__36863;
count__36191_36808 = G__36864;
i__36192_36809 = G__36865;
continue;
} else {
var child_struct_36866 = cljs.core.first(seq__36188_36860__$1);
if((!((child_struct_36866 == null)))){
if(typeof child_struct_36866 === 'string'){
var text_36867 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36867),child_struct_36866].join(''));
} else {
var children_36869 = shadow.dom.svg_node(child_struct_36866);
if(cljs.core.seq_QMARK_(children_36869)){
var seq__36239_36870 = cljs.core.seq(children_36869);
var chunk__36241_36871 = null;
var count__36242_36872 = (0);
var i__36243_36873 = (0);
while(true){
if((i__36243_36873 < count__36242_36872)){
var child_36874 = chunk__36241_36871.cljs$core$IIndexed$_nth$arity$2(null,i__36243_36873);
if(cljs.core.truth_(child_36874)){
node.appendChild(child_36874);


var G__36875 = seq__36239_36870;
var G__36876 = chunk__36241_36871;
var G__36877 = count__36242_36872;
var G__36878 = (i__36243_36873 + (1));
seq__36239_36870 = G__36875;
chunk__36241_36871 = G__36876;
count__36242_36872 = G__36877;
i__36243_36873 = G__36878;
continue;
} else {
var G__36884 = seq__36239_36870;
var G__36885 = chunk__36241_36871;
var G__36886 = count__36242_36872;
var G__36887 = (i__36243_36873 + (1));
seq__36239_36870 = G__36884;
chunk__36241_36871 = G__36885;
count__36242_36872 = G__36886;
i__36243_36873 = G__36887;
continue;
}
} else {
var temp__5735__auto___36888__$1 = cljs.core.seq(seq__36239_36870);
if(temp__5735__auto___36888__$1){
var seq__36239_36890__$1 = temp__5735__auto___36888__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36239_36890__$1)){
var c__4556__auto___36891 = cljs.core.chunk_first(seq__36239_36890__$1);
var G__36892 = cljs.core.chunk_rest(seq__36239_36890__$1);
var G__36893 = c__4556__auto___36891;
var G__36894 = cljs.core.count(c__4556__auto___36891);
var G__36895 = (0);
seq__36239_36870 = G__36892;
chunk__36241_36871 = G__36893;
count__36242_36872 = G__36894;
i__36243_36873 = G__36895;
continue;
} else {
var child_36896 = cljs.core.first(seq__36239_36890__$1);
if(cljs.core.truth_(child_36896)){
node.appendChild(child_36896);


var G__36898 = cljs.core.next(seq__36239_36890__$1);
var G__36899 = null;
var G__36900 = (0);
var G__36901 = (0);
seq__36239_36870 = G__36898;
chunk__36241_36871 = G__36899;
count__36242_36872 = G__36900;
i__36243_36873 = G__36901;
continue;
} else {
var G__36902 = cljs.core.next(seq__36239_36890__$1);
var G__36903 = null;
var G__36904 = (0);
var G__36905 = (0);
seq__36239_36870 = G__36902;
chunk__36241_36871 = G__36903;
count__36242_36872 = G__36904;
i__36243_36873 = G__36905;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36869);
}
}


var G__36906 = cljs.core.next(seq__36188_36860__$1);
var G__36907 = null;
var G__36908 = (0);
var G__36909 = (0);
seq__36188_36806 = G__36906;
chunk__36190_36807 = G__36907;
count__36191_36808 = G__36908;
i__36192_36809 = G__36909;
continue;
} else {
var G__36910 = cljs.core.next(seq__36188_36860__$1);
var G__36911 = null;
var G__36912 = (0);
var G__36913 = (0);
seq__36188_36806 = G__36910;
chunk__36190_36807 = G__36911;
count__36191_36808 = G__36912;
i__36192_36809 = G__36913;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36919 = arguments.length;
var i__4737__auto___36920 = (0);
while(true){
if((i__4737__auto___36920 < len__4736__auto___36919)){
args__4742__auto__.push((arguments[i__4737__auto___36920]));

var G__36924 = (i__4737__auto___36920 + (1));
i__4737__auto___36920 = G__36924;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36254){
var G__36255 = cljs.core.first(seq36254);
var seq36254__$1 = cljs.core.next(seq36254);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36255,seq36254__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36260 = arguments.length;
switch (G__36260) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__33382__auto___36934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33383__auto__ = (function (){var switch__33275__auto__ = (function (state_36270){
var state_val_36271 = (state_36270[(1)]);
if((state_val_36271 === (1))){
var state_36270__$1 = state_36270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36270__$1,(2),once_or_cleanup);
} else {
if((state_val_36271 === (2))){
var inst_36267 = (state_36270[(2)]);
var inst_36268 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36270__$1 = (function (){var statearr_36274 = state_36270;
(statearr_36274[(7)] = inst_36267);

return statearr_36274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36270__$1,inst_36268);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33276__auto__ = null;
var shadow$dom$state_machine__33276__auto____0 = (function (){
var statearr_36275 = [null,null,null,null,null,null,null,null];
(statearr_36275[(0)] = shadow$dom$state_machine__33276__auto__);

(statearr_36275[(1)] = (1));

return statearr_36275;
});
var shadow$dom$state_machine__33276__auto____1 = (function (state_36270){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__(state_36270);
if(cljs.core.keyword_identical_QMARK_(result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e36281){var ex__33279__auto__ = e36281;
var statearr_36282_36938 = state_36270;
(statearr_36282_36938[(2)] = ex__33279__auto__);


if(cljs.core.seq((state_36270[(4)]))){
var statearr_36283_36939 = state_36270;
(statearr_36283_36939[(1)] = cljs.core.first((state_36270[(4)])));

} else {
throw ex__33279__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36940 = state_36270;
state_36270 = G__36940;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
shadow$dom$state_machine__33276__auto__ = function(state_36270){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33276__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33276__auto____1.call(this,state_36270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33276__auto____0;
shadow$dom$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33276__auto____1;
return shadow$dom$state_machine__33276__auto__;
})()
})();
var state__33384__auto__ = (function (){var statearr_36285 = f__33383__auto__();
(statearr_36285[(6)] = c__33382__auto___36934);

return statearr_36285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33384__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
