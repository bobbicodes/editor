goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_53325 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_53325(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_53326 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_53326(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__52568 = coll;
var G__52569 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__52568,G__52569) : shadow.dom.lazy_native_coll_seq.call(null,G__52568,G__52569));
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
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
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
var G__52588 = arguments.length;
switch (G__52588) {
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
var G__52597 = arguments.length;
switch (G__52597) {
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
var G__52626 = arguments.length;
switch (G__52626) {
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
var G__52628 = arguments.length;
switch (G__52628) {
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
var G__52738 = arguments.length;
switch (G__52738) {
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
var G__52803 = arguments.length;
switch (G__52803) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e52808){if((e52808 instanceof Object)){
var e = e52808;
return console.log("didnt support attachEvent",el,e);
} else {
throw e52808;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__52810 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__52811 = null;
var count__52812 = (0);
var i__52813 = (0);
while(true){
if((i__52813 < count__52812)){
var el = chunk__52811.cljs$core$IIndexed$_nth$arity$2(null,i__52813);
var handler_53333__$1 = ((function (seq__52810,chunk__52811,count__52812,i__52813,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__52810,chunk__52811,count__52812,i__52813,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53333__$1);


var G__53334 = seq__52810;
var G__53335 = chunk__52811;
var G__53336 = count__52812;
var G__53337 = (i__52813 + (1));
seq__52810 = G__53334;
chunk__52811 = G__53335;
count__52812 = G__53336;
i__52813 = G__53337;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52810);
if(temp__5753__auto__){
var seq__52810__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52810__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52810__$1);
var G__53338 = cljs.core.chunk_rest(seq__52810__$1);
var G__53339 = c__4649__auto__;
var G__53340 = cljs.core.count(c__4649__auto__);
var G__53341 = (0);
seq__52810 = G__53338;
chunk__52811 = G__53339;
count__52812 = G__53340;
i__52813 = G__53341;
continue;
} else {
var el = cljs.core.first(seq__52810__$1);
var handler_53342__$1 = ((function (seq__52810,chunk__52811,count__52812,i__52813,el,seq__52810__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__52810,chunk__52811,count__52812,i__52813,el,seq__52810__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53342__$1);


var G__53343 = cljs.core.next(seq__52810__$1);
var G__53344 = null;
var G__53345 = (0);
var G__53346 = (0);
seq__52810 = G__53343;
chunk__52811 = G__53344;
count__52812 = G__53345;
i__52813 = G__53346;
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
var G__52836 = arguments.length;
switch (G__52836) {
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
var seq__52844 = cljs.core.seq(events);
var chunk__52845 = null;
var count__52846 = (0);
var i__52847 = (0);
while(true){
if((i__52847 < count__52846)){
var vec__52854 = chunk__52845.cljs$core$IIndexed$_nth$arity$2(null,i__52847);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52854,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52854,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53348 = seq__52844;
var G__53349 = chunk__52845;
var G__53350 = count__52846;
var G__53351 = (i__52847 + (1));
seq__52844 = G__53348;
chunk__52845 = G__53349;
count__52846 = G__53350;
i__52847 = G__53351;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52844);
if(temp__5753__auto__){
var seq__52844__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52844__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52844__$1);
var G__53352 = cljs.core.chunk_rest(seq__52844__$1);
var G__53353 = c__4649__auto__;
var G__53354 = cljs.core.count(c__4649__auto__);
var G__53355 = (0);
seq__52844 = G__53352;
chunk__52845 = G__53353;
count__52846 = G__53354;
i__52847 = G__53355;
continue;
} else {
var vec__52860 = cljs.core.first(seq__52844__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52860,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53356 = cljs.core.next(seq__52844__$1);
var G__53357 = null;
var G__53358 = (0);
var G__53359 = (0);
seq__52844 = G__53356;
chunk__52845 = G__53357;
count__52846 = G__53358;
i__52847 = G__53359;
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
var seq__52868 = cljs.core.seq(styles);
var chunk__52870 = null;
var count__52871 = (0);
var i__52872 = (0);
while(true){
if((i__52872 < count__52871)){
var vec__52886 = chunk__52870.cljs$core$IIndexed$_nth$arity$2(null,i__52872);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52886,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52886,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53360 = seq__52868;
var G__53361 = chunk__52870;
var G__53362 = count__52871;
var G__53363 = (i__52872 + (1));
seq__52868 = G__53360;
chunk__52870 = G__53361;
count__52871 = G__53362;
i__52872 = G__53363;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52868);
if(temp__5753__auto__){
var seq__52868__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52868__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52868__$1);
var G__53365 = cljs.core.chunk_rest(seq__52868__$1);
var G__53366 = c__4649__auto__;
var G__53367 = cljs.core.count(c__4649__auto__);
var G__53368 = (0);
seq__52868 = G__53365;
chunk__52870 = G__53366;
count__52871 = G__53367;
i__52872 = G__53368;
continue;
} else {
var vec__52891 = cljs.core.first(seq__52868__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52891,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52891,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53370 = cljs.core.next(seq__52868__$1);
var G__53371 = null;
var G__53372 = (0);
var G__53373 = (0);
seq__52868 = G__53370;
chunk__52870 = G__53371;
count__52871 = G__53372;
i__52872 = G__53373;
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
var G__52901_53374 = key;
var G__52901_53375__$1 = (((G__52901_53374 instanceof cljs.core.Keyword))?G__52901_53374.fqn:null);
switch (G__52901_53375__$1) {
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
var ks_53377 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_53377,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_53377,"aria-");
}
})())){
el.setAttribute(ks_53377,value);
} else {
(el[ks_53377] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__52935){
var map__52941 = p__52935;
var map__52941__$1 = cljs.core.__destructure_map(map__52941);
var props = map__52941__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52941__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__52949 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52949,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52949,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52949,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__52973 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__52973,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__52973;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__52983 = arguments.length;
switch (G__52983) {
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__52987){
var vec__52988 = p__52987;
var seq__52989 = cljs.core.seq(vec__52988);
var first__52990 = cljs.core.first(seq__52989);
var seq__52989__$1 = cljs.core.next(seq__52989);
var nn = first__52990;
var first__52990__$1 = cljs.core.first(seq__52989__$1);
var seq__52989__$2 = cljs.core.next(seq__52989__$1);
var np = first__52990__$1;
var nc = seq__52989__$2;
var node = vec__52988;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52991 = nn;
var G__52992 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__52991,G__52992) : create_fn.call(null,G__52991,G__52992));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52993 = nn;
var G__52994 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__52993,G__52994) : create_fn.call(null,G__52993,G__52994));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__52995 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52995,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52995,(1),null);
var seq__52998_53381 = cljs.core.seq(node_children);
var chunk__52999_53382 = null;
var count__53000_53383 = (0);
var i__53001_53384 = (0);
while(true){
if((i__53001_53384 < count__53000_53383)){
var child_struct_53385 = chunk__52999_53382.cljs$core$IIndexed$_nth$arity$2(null,i__53001_53384);
var children_53386 = shadow.dom.dom_node(child_struct_53385);
if(cljs.core.seq_QMARK_(children_53386)){
var seq__53014_53387 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53386));
var chunk__53016_53388 = null;
var count__53017_53389 = (0);
var i__53018_53390 = (0);
while(true){
if((i__53018_53390 < count__53017_53389)){
var child_53391 = chunk__53016_53388.cljs$core$IIndexed$_nth$arity$2(null,i__53018_53390);
if(cljs.core.truth_(child_53391)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53391);


var G__53392 = seq__53014_53387;
var G__53393 = chunk__53016_53388;
var G__53394 = count__53017_53389;
var G__53395 = (i__53018_53390 + (1));
seq__53014_53387 = G__53392;
chunk__53016_53388 = G__53393;
count__53017_53389 = G__53394;
i__53018_53390 = G__53395;
continue;
} else {
var G__53396 = seq__53014_53387;
var G__53397 = chunk__53016_53388;
var G__53398 = count__53017_53389;
var G__53399 = (i__53018_53390 + (1));
seq__53014_53387 = G__53396;
chunk__53016_53388 = G__53397;
count__53017_53389 = G__53398;
i__53018_53390 = G__53399;
continue;
}
} else {
var temp__5753__auto___53400 = cljs.core.seq(seq__53014_53387);
if(temp__5753__auto___53400){
var seq__53014_53401__$1 = temp__5753__auto___53400;
if(cljs.core.chunked_seq_QMARK_(seq__53014_53401__$1)){
var c__4649__auto___53402 = cljs.core.chunk_first(seq__53014_53401__$1);
var G__53403 = cljs.core.chunk_rest(seq__53014_53401__$1);
var G__53404 = c__4649__auto___53402;
var G__53405 = cljs.core.count(c__4649__auto___53402);
var G__53406 = (0);
seq__53014_53387 = G__53403;
chunk__53016_53388 = G__53404;
count__53017_53389 = G__53405;
i__53018_53390 = G__53406;
continue;
} else {
var child_53407 = cljs.core.first(seq__53014_53401__$1);
if(cljs.core.truth_(child_53407)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53407);


var G__53408 = cljs.core.next(seq__53014_53401__$1);
var G__53409 = null;
var G__53410 = (0);
var G__53411 = (0);
seq__53014_53387 = G__53408;
chunk__53016_53388 = G__53409;
count__53017_53389 = G__53410;
i__53018_53390 = G__53411;
continue;
} else {
var G__53412 = cljs.core.next(seq__53014_53401__$1);
var G__53413 = null;
var G__53414 = (0);
var G__53415 = (0);
seq__53014_53387 = G__53412;
chunk__53016_53388 = G__53413;
count__53017_53389 = G__53414;
i__53018_53390 = G__53415;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53386);
}


var G__53416 = seq__52998_53381;
var G__53417 = chunk__52999_53382;
var G__53418 = count__53000_53383;
var G__53419 = (i__53001_53384 + (1));
seq__52998_53381 = G__53416;
chunk__52999_53382 = G__53417;
count__53000_53383 = G__53418;
i__53001_53384 = G__53419;
continue;
} else {
var temp__5753__auto___53420 = cljs.core.seq(seq__52998_53381);
if(temp__5753__auto___53420){
var seq__52998_53421__$1 = temp__5753__auto___53420;
if(cljs.core.chunked_seq_QMARK_(seq__52998_53421__$1)){
var c__4649__auto___53422 = cljs.core.chunk_first(seq__52998_53421__$1);
var G__53423 = cljs.core.chunk_rest(seq__52998_53421__$1);
var G__53424 = c__4649__auto___53422;
var G__53425 = cljs.core.count(c__4649__auto___53422);
var G__53426 = (0);
seq__52998_53381 = G__53423;
chunk__52999_53382 = G__53424;
count__53000_53383 = G__53425;
i__53001_53384 = G__53426;
continue;
} else {
var child_struct_53427 = cljs.core.first(seq__52998_53421__$1);
var children_53428 = shadow.dom.dom_node(child_struct_53427);
if(cljs.core.seq_QMARK_(children_53428)){
var seq__53020_53429 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53428));
var chunk__53022_53430 = null;
var count__53023_53431 = (0);
var i__53024_53432 = (0);
while(true){
if((i__53024_53432 < count__53023_53431)){
var child_53433 = chunk__53022_53430.cljs$core$IIndexed$_nth$arity$2(null,i__53024_53432);
if(cljs.core.truth_(child_53433)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53433);


var G__53435 = seq__53020_53429;
var G__53436 = chunk__53022_53430;
var G__53437 = count__53023_53431;
var G__53438 = (i__53024_53432 + (1));
seq__53020_53429 = G__53435;
chunk__53022_53430 = G__53436;
count__53023_53431 = G__53437;
i__53024_53432 = G__53438;
continue;
} else {
var G__53439 = seq__53020_53429;
var G__53440 = chunk__53022_53430;
var G__53441 = count__53023_53431;
var G__53442 = (i__53024_53432 + (1));
seq__53020_53429 = G__53439;
chunk__53022_53430 = G__53440;
count__53023_53431 = G__53441;
i__53024_53432 = G__53442;
continue;
}
} else {
var temp__5753__auto___53443__$1 = cljs.core.seq(seq__53020_53429);
if(temp__5753__auto___53443__$1){
var seq__53020_53444__$1 = temp__5753__auto___53443__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53020_53444__$1)){
var c__4649__auto___53445 = cljs.core.chunk_first(seq__53020_53444__$1);
var G__53446 = cljs.core.chunk_rest(seq__53020_53444__$1);
var G__53447 = c__4649__auto___53445;
var G__53448 = cljs.core.count(c__4649__auto___53445);
var G__53449 = (0);
seq__53020_53429 = G__53446;
chunk__53022_53430 = G__53447;
count__53023_53431 = G__53448;
i__53024_53432 = G__53449;
continue;
} else {
var child_53450 = cljs.core.first(seq__53020_53444__$1);
if(cljs.core.truth_(child_53450)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53450);


var G__53451 = cljs.core.next(seq__53020_53444__$1);
var G__53452 = null;
var G__53453 = (0);
var G__53454 = (0);
seq__53020_53429 = G__53451;
chunk__53022_53430 = G__53452;
count__53023_53431 = G__53453;
i__53024_53432 = G__53454;
continue;
} else {
var G__53455 = cljs.core.next(seq__53020_53444__$1);
var G__53456 = null;
var G__53457 = (0);
var G__53458 = (0);
seq__53020_53429 = G__53455;
chunk__53022_53430 = G__53456;
count__53023_53431 = G__53457;
i__53024_53432 = G__53458;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53428);
}


var G__53459 = cljs.core.next(seq__52998_53421__$1);
var G__53460 = null;
var G__53461 = (0);
var G__53462 = (0);
seq__52998_53381 = G__53459;
chunk__52999_53382 = G__53460;
count__53000_53383 = G__53461;
i__53001_53384 = G__53462;
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
var seq__53027 = cljs.core.seq(node);
var chunk__53028 = null;
var count__53029 = (0);
var i__53030 = (0);
while(true){
if((i__53030 < count__53029)){
var n = chunk__53028.cljs$core$IIndexed$_nth$arity$2(null,i__53030);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53463 = seq__53027;
var G__53464 = chunk__53028;
var G__53465 = count__53029;
var G__53466 = (i__53030 + (1));
seq__53027 = G__53463;
chunk__53028 = G__53464;
count__53029 = G__53465;
i__53030 = G__53466;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53027);
if(temp__5753__auto__){
var seq__53027__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53027__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53027__$1);
var G__53467 = cljs.core.chunk_rest(seq__53027__$1);
var G__53468 = c__4649__auto__;
var G__53469 = cljs.core.count(c__4649__auto__);
var G__53470 = (0);
seq__53027 = G__53467;
chunk__53028 = G__53468;
count__53029 = G__53469;
i__53030 = G__53470;
continue;
} else {
var n = cljs.core.first(seq__53027__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53471 = cljs.core.next(seq__53027__$1);
var G__53472 = null;
var G__53473 = (0);
var G__53474 = (0);
seq__53027 = G__53471;
chunk__53028 = G__53472;
count__53029 = G__53473;
i__53030 = G__53474;
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
var G__53032 = arguments.length;
switch (G__53032) {
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
var G__53034 = arguments.length;
switch (G__53034) {
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
var G__53036 = arguments.length;
switch (G__53036) {
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
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
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
var args__4835__auto__ = [];
var len__4829__auto___53478 = arguments.length;
var i__4830__auto___53479 = (0);
while(true){
if((i__4830__auto___53479 < len__4829__auto___53478)){
args__4835__auto__.push((arguments[i__4830__auto___53479]));

var G__53480 = (i__4830__auto___53479 + (1));
i__4830__auto___53479 = G__53480;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__53038_53482 = cljs.core.seq(nodes);
var chunk__53039_53483 = null;
var count__53040_53484 = (0);
var i__53041_53485 = (0);
while(true){
if((i__53041_53485 < count__53040_53484)){
var node_53486 = chunk__53039_53483.cljs$core$IIndexed$_nth$arity$2(null,i__53041_53485);
fragment.appendChild(shadow.dom._to_dom(node_53486));


var G__53487 = seq__53038_53482;
var G__53488 = chunk__53039_53483;
var G__53489 = count__53040_53484;
var G__53490 = (i__53041_53485 + (1));
seq__53038_53482 = G__53487;
chunk__53039_53483 = G__53488;
count__53040_53484 = G__53489;
i__53041_53485 = G__53490;
continue;
} else {
var temp__5753__auto___53491 = cljs.core.seq(seq__53038_53482);
if(temp__5753__auto___53491){
var seq__53038_53492__$1 = temp__5753__auto___53491;
if(cljs.core.chunked_seq_QMARK_(seq__53038_53492__$1)){
var c__4649__auto___53493 = cljs.core.chunk_first(seq__53038_53492__$1);
var G__53494 = cljs.core.chunk_rest(seq__53038_53492__$1);
var G__53495 = c__4649__auto___53493;
var G__53496 = cljs.core.count(c__4649__auto___53493);
var G__53497 = (0);
seq__53038_53482 = G__53494;
chunk__53039_53483 = G__53495;
count__53040_53484 = G__53496;
i__53041_53485 = G__53497;
continue;
} else {
var node_53498 = cljs.core.first(seq__53038_53492__$1);
fragment.appendChild(shadow.dom._to_dom(node_53498));


var G__53499 = cljs.core.next(seq__53038_53492__$1);
var G__53500 = null;
var G__53501 = (0);
var G__53502 = (0);
seq__53038_53482 = G__53499;
chunk__53039_53483 = G__53500;
count__53040_53484 = G__53501;
i__53041_53485 = G__53502;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq53037){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53037));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__53042_53503 = cljs.core.seq(scripts);
var chunk__53043_53504 = null;
var count__53044_53505 = (0);
var i__53045_53506 = (0);
while(true){
if((i__53045_53506 < count__53044_53505)){
var vec__53052_53507 = chunk__53043_53504.cljs$core$IIndexed$_nth$arity$2(null,i__53045_53506);
var script_tag_53508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53052_53507,(0),null);
var script_body_53509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53052_53507,(1),null);
eval(script_body_53509);


var G__53511 = seq__53042_53503;
var G__53512 = chunk__53043_53504;
var G__53513 = count__53044_53505;
var G__53514 = (i__53045_53506 + (1));
seq__53042_53503 = G__53511;
chunk__53043_53504 = G__53512;
count__53044_53505 = G__53513;
i__53045_53506 = G__53514;
continue;
} else {
var temp__5753__auto___53515 = cljs.core.seq(seq__53042_53503);
if(temp__5753__auto___53515){
var seq__53042_53516__$1 = temp__5753__auto___53515;
if(cljs.core.chunked_seq_QMARK_(seq__53042_53516__$1)){
var c__4649__auto___53517 = cljs.core.chunk_first(seq__53042_53516__$1);
var G__53519 = cljs.core.chunk_rest(seq__53042_53516__$1);
var G__53520 = c__4649__auto___53517;
var G__53521 = cljs.core.count(c__4649__auto___53517);
var G__53522 = (0);
seq__53042_53503 = G__53519;
chunk__53043_53504 = G__53520;
count__53044_53505 = G__53521;
i__53045_53506 = G__53522;
continue;
} else {
var vec__53055_53523 = cljs.core.first(seq__53042_53516__$1);
var script_tag_53524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53055_53523,(0),null);
var script_body_53525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53055_53523,(1),null);
eval(script_body_53525);


var G__53526 = cljs.core.next(seq__53042_53516__$1);
var G__53527 = null;
var G__53528 = (0);
var G__53529 = (0);
seq__53042_53503 = G__53526;
chunk__53043_53504 = G__53527;
count__53044_53505 = G__53528;
i__53045_53506 = G__53529;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__53058){
var vec__53059 = p__53058;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53059,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53059,(1),null);
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
var G__53063 = arguments.length;
switch (G__53063) {
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
var seq__53064 = cljs.core.seq(style_keys);
var chunk__53065 = null;
var count__53066 = (0);
var i__53067 = (0);
while(true){
if((i__53067 < count__53066)){
var it = chunk__53065.cljs$core$IIndexed$_nth$arity$2(null,i__53067);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53536 = seq__53064;
var G__53537 = chunk__53065;
var G__53538 = count__53066;
var G__53539 = (i__53067 + (1));
seq__53064 = G__53536;
chunk__53065 = G__53537;
count__53066 = G__53538;
i__53067 = G__53539;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53064);
if(temp__5753__auto__){
var seq__53064__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53064__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53064__$1);
var G__53540 = cljs.core.chunk_rest(seq__53064__$1);
var G__53541 = c__4649__auto__;
var G__53542 = cljs.core.count(c__4649__auto__);
var G__53543 = (0);
seq__53064 = G__53540;
chunk__53065 = G__53541;
count__53066 = G__53542;
i__53067 = G__53543;
continue;
} else {
var it = cljs.core.first(seq__53064__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53544 = cljs.core.next(seq__53064__$1);
var G__53545 = null;
var G__53546 = (0);
var G__53547 = (0);
seq__53064 = G__53544;
chunk__53065 = G__53545;
count__53066 = G__53546;
i__53067 = G__53547;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k53069,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__53073 = k53069;
var G__53073__$1 = (((G__53073 instanceof cljs.core.Keyword))?G__53073.fqn:null);
switch (G__53073__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53069,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__53074){
var vec__53075 = p__53074;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53075,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53075,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53068){
var self__ = this;
var G__53068__$1 = this;
return (new cljs.core.RecordIter((0),G__53068__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53070,other53071){
var self__ = this;
var this53070__$1 = this;
return (((!((other53071 == null)))) && ((((this53070__$1.constructor === other53071.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53070__$1.x,other53071.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53070__$1.y,other53071.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53070__$1.__extmap,other53071.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k53069){
var self__ = this;
var this__4479__auto____$1 = this;
var G__53078 = k53069;
var G__53078__$1 = (((G__53078 instanceof cljs.core.Keyword))?G__53078.fqn:null);
switch (G__53078__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53069);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__53068){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__53079 = cljs.core.keyword_identical_QMARK_;
var expr__53080 = k__4481__auto__;
if(cljs.core.truth_((pred__53079.cljs$core$IFn$_invoke$arity$2 ? pred__53079.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__53080) : pred__53079.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__53080)))){
return (new shadow.dom.Coordinate(G__53068,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53079.cljs$core$IFn$_invoke$arity$2 ? pred__53079.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__53080) : pred__53079.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__53080)))){
return (new shadow.dom.Coordinate(self__.x,G__53068,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__53068),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__53068){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__53068,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__53072){
var extmap__4512__auto__ = (function (){var G__53082 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53072,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__53072)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53082);
} else {
return G__53082;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__53072),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__53072),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k53191,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__53210 = k53191;
var G__53210__$1 = (((G__53210 instanceof cljs.core.Keyword))?G__53210.fqn:null);
switch (G__53210__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53191,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__53215){
var vec__53217 = p__53215;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53217,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53217,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53190){
var self__ = this;
var G__53190__$1 = this;
return (new cljs.core.RecordIter((0),G__53190__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53192,other53193){
var self__ = this;
var this53192__$1 = this;
return (((!((other53193 == null)))) && ((((this53192__$1.constructor === other53193.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53192__$1.w,other53193.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53192__$1.h,other53193.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53192__$1.__extmap,other53193.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k53191){
var self__ = this;
var this__4479__auto____$1 = this;
var G__53222 = k53191;
var G__53222__$1 = (((G__53222 instanceof cljs.core.Keyword))?G__53222.fqn:null);
switch (G__53222__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53191);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__53190){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__53223 = cljs.core.keyword_identical_QMARK_;
var expr__53224 = k__4481__auto__;
if(cljs.core.truth_((pred__53223.cljs$core$IFn$_invoke$arity$2 ? pred__53223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__53224) : pred__53223.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__53224)))){
return (new shadow.dom.Size(G__53190,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53223.cljs$core$IFn$_invoke$arity$2 ? pred__53223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__53224) : pred__53223.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__53224)))){
return (new shadow.dom.Size(self__.w,G__53190,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__53190),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__53190){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__53190,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__53194){
var extmap__4512__auto__ = (function (){var G__53227 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53194,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__53194)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53227);
} else {
return G__53227;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__53194),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__53194),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__53564 = (i + (1));
var G__53565 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__53564;
ret = G__53565;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53234){
var vec__53235 = p__53234;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53235,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53235,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__53240 = arguments.length;
switch (G__53240) {
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
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
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
var G__53567 = ps;
var G__53568 = (i + (1));
el__$1 = G__53567;
i = G__53568;
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
var vec__53246 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53246,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53246,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53246,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__53249_53569 = cljs.core.seq(props);
var chunk__53250_53570 = null;
var count__53251_53571 = (0);
var i__53252_53572 = (0);
while(true){
if((i__53252_53572 < count__53251_53571)){
var vec__53260_53573 = chunk__53250_53570.cljs$core$IIndexed$_nth$arity$2(null,i__53252_53572);
var k_53574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53260_53573,(0),null);
var v_53575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53260_53573,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_53574);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53574),v_53575);


var G__53576 = seq__53249_53569;
var G__53577 = chunk__53250_53570;
var G__53578 = count__53251_53571;
var G__53579 = (i__53252_53572 + (1));
seq__53249_53569 = G__53576;
chunk__53250_53570 = G__53577;
count__53251_53571 = G__53578;
i__53252_53572 = G__53579;
continue;
} else {
var temp__5753__auto___53580 = cljs.core.seq(seq__53249_53569);
if(temp__5753__auto___53580){
var seq__53249_53581__$1 = temp__5753__auto___53580;
if(cljs.core.chunked_seq_QMARK_(seq__53249_53581__$1)){
var c__4649__auto___53582 = cljs.core.chunk_first(seq__53249_53581__$1);
var G__53583 = cljs.core.chunk_rest(seq__53249_53581__$1);
var G__53584 = c__4649__auto___53582;
var G__53585 = cljs.core.count(c__4649__auto___53582);
var G__53586 = (0);
seq__53249_53569 = G__53583;
chunk__53250_53570 = G__53584;
count__53251_53571 = G__53585;
i__53252_53572 = G__53586;
continue;
} else {
var vec__53263_53587 = cljs.core.first(seq__53249_53581__$1);
var k_53588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53263_53587,(0),null);
var v_53589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53263_53587,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_53588);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53588),v_53589);


var G__53590 = cljs.core.next(seq__53249_53581__$1);
var G__53591 = null;
var G__53592 = (0);
var G__53593 = (0);
seq__53249_53569 = G__53590;
chunk__53250_53570 = G__53591;
count__53251_53571 = G__53592;
i__53252_53572 = G__53593;
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
var vec__53269 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53269,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53269,(1),null);
var seq__53272_53594 = cljs.core.seq(node_children);
var chunk__53274_53595 = null;
var count__53275_53596 = (0);
var i__53276_53597 = (0);
while(true){
if((i__53276_53597 < count__53275_53596)){
var child_struct_53598 = chunk__53274_53595.cljs$core$IIndexed$_nth$arity$2(null,i__53276_53597);
if((!((child_struct_53598 == null)))){
if(typeof child_struct_53598 === 'string'){
var text_53599 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53599),child_struct_53598].join(''));
} else {
var children_53600 = shadow.dom.svg_node(child_struct_53598);
if(cljs.core.seq_QMARK_(children_53600)){
var seq__53292_53601 = cljs.core.seq(children_53600);
var chunk__53294_53602 = null;
var count__53295_53603 = (0);
var i__53296_53604 = (0);
while(true){
if((i__53296_53604 < count__53295_53603)){
var child_53605 = chunk__53294_53602.cljs$core$IIndexed$_nth$arity$2(null,i__53296_53604);
if(cljs.core.truth_(child_53605)){
node.appendChild(child_53605);


var G__53606 = seq__53292_53601;
var G__53607 = chunk__53294_53602;
var G__53608 = count__53295_53603;
var G__53609 = (i__53296_53604 + (1));
seq__53292_53601 = G__53606;
chunk__53294_53602 = G__53607;
count__53295_53603 = G__53608;
i__53296_53604 = G__53609;
continue;
} else {
var G__53610 = seq__53292_53601;
var G__53611 = chunk__53294_53602;
var G__53612 = count__53295_53603;
var G__53613 = (i__53296_53604 + (1));
seq__53292_53601 = G__53610;
chunk__53294_53602 = G__53611;
count__53295_53603 = G__53612;
i__53296_53604 = G__53613;
continue;
}
} else {
var temp__5753__auto___53614 = cljs.core.seq(seq__53292_53601);
if(temp__5753__auto___53614){
var seq__53292_53615__$1 = temp__5753__auto___53614;
if(cljs.core.chunked_seq_QMARK_(seq__53292_53615__$1)){
var c__4649__auto___53616 = cljs.core.chunk_first(seq__53292_53615__$1);
var G__53617 = cljs.core.chunk_rest(seq__53292_53615__$1);
var G__53618 = c__4649__auto___53616;
var G__53619 = cljs.core.count(c__4649__auto___53616);
var G__53620 = (0);
seq__53292_53601 = G__53617;
chunk__53294_53602 = G__53618;
count__53295_53603 = G__53619;
i__53296_53604 = G__53620;
continue;
} else {
var child_53621 = cljs.core.first(seq__53292_53615__$1);
if(cljs.core.truth_(child_53621)){
node.appendChild(child_53621);


var G__53622 = cljs.core.next(seq__53292_53615__$1);
var G__53623 = null;
var G__53624 = (0);
var G__53625 = (0);
seq__53292_53601 = G__53622;
chunk__53294_53602 = G__53623;
count__53295_53603 = G__53624;
i__53296_53604 = G__53625;
continue;
} else {
var G__53626 = cljs.core.next(seq__53292_53615__$1);
var G__53627 = null;
var G__53628 = (0);
var G__53629 = (0);
seq__53292_53601 = G__53626;
chunk__53294_53602 = G__53627;
count__53295_53603 = G__53628;
i__53296_53604 = G__53629;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53600);
}
}


var G__53630 = seq__53272_53594;
var G__53631 = chunk__53274_53595;
var G__53632 = count__53275_53596;
var G__53633 = (i__53276_53597 + (1));
seq__53272_53594 = G__53630;
chunk__53274_53595 = G__53631;
count__53275_53596 = G__53632;
i__53276_53597 = G__53633;
continue;
} else {
var G__53634 = seq__53272_53594;
var G__53635 = chunk__53274_53595;
var G__53636 = count__53275_53596;
var G__53637 = (i__53276_53597 + (1));
seq__53272_53594 = G__53634;
chunk__53274_53595 = G__53635;
count__53275_53596 = G__53636;
i__53276_53597 = G__53637;
continue;
}
} else {
var temp__5753__auto___53638 = cljs.core.seq(seq__53272_53594);
if(temp__5753__auto___53638){
var seq__53272_53639__$1 = temp__5753__auto___53638;
if(cljs.core.chunked_seq_QMARK_(seq__53272_53639__$1)){
var c__4649__auto___53640 = cljs.core.chunk_first(seq__53272_53639__$1);
var G__53641 = cljs.core.chunk_rest(seq__53272_53639__$1);
var G__53642 = c__4649__auto___53640;
var G__53643 = cljs.core.count(c__4649__auto___53640);
var G__53644 = (0);
seq__53272_53594 = G__53641;
chunk__53274_53595 = G__53642;
count__53275_53596 = G__53643;
i__53276_53597 = G__53644;
continue;
} else {
var child_struct_53645 = cljs.core.first(seq__53272_53639__$1);
if((!((child_struct_53645 == null)))){
if(typeof child_struct_53645 === 'string'){
var text_53646 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53646),child_struct_53645].join(''));
} else {
var children_53647 = shadow.dom.svg_node(child_struct_53645);
if(cljs.core.seq_QMARK_(children_53647)){
var seq__53300_53648 = cljs.core.seq(children_53647);
var chunk__53302_53649 = null;
var count__53303_53650 = (0);
var i__53304_53651 = (0);
while(true){
if((i__53304_53651 < count__53303_53650)){
var child_53652 = chunk__53302_53649.cljs$core$IIndexed$_nth$arity$2(null,i__53304_53651);
if(cljs.core.truth_(child_53652)){
node.appendChild(child_53652);


var G__53657 = seq__53300_53648;
var G__53658 = chunk__53302_53649;
var G__53659 = count__53303_53650;
var G__53660 = (i__53304_53651 + (1));
seq__53300_53648 = G__53657;
chunk__53302_53649 = G__53658;
count__53303_53650 = G__53659;
i__53304_53651 = G__53660;
continue;
} else {
var G__53661 = seq__53300_53648;
var G__53662 = chunk__53302_53649;
var G__53663 = count__53303_53650;
var G__53664 = (i__53304_53651 + (1));
seq__53300_53648 = G__53661;
chunk__53302_53649 = G__53662;
count__53303_53650 = G__53663;
i__53304_53651 = G__53664;
continue;
}
} else {
var temp__5753__auto___53665__$1 = cljs.core.seq(seq__53300_53648);
if(temp__5753__auto___53665__$1){
var seq__53300_53666__$1 = temp__5753__auto___53665__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53300_53666__$1)){
var c__4649__auto___53667 = cljs.core.chunk_first(seq__53300_53666__$1);
var G__53668 = cljs.core.chunk_rest(seq__53300_53666__$1);
var G__53669 = c__4649__auto___53667;
var G__53670 = cljs.core.count(c__4649__auto___53667);
var G__53671 = (0);
seq__53300_53648 = G__53668;
chunk__53302_53649 = G__53669;
count__53303_53650 = G__53670;
i__53304_53651 = G__53671;
continue;
} else {
var child_53672 = cljs.core.first(seq__53300_53666__$1);
if(cljs.core.truth_(child_53672)){
node.appendChild(child_53672);


var G__53673 = cljs.core.next(seq__53300_53666__$1);
var G__53674 = null;
var G__53675 = (0);
var G__53676 = (0);
seq__53300_53648 = G__53673;
chunk__53302_53649 = G__53674;
count__53303_53650 = G__53675;
i__53304_53651 = G__53676;
continue;
} else {
var G__53677 = cljs.core.next(seq__53300_53666__$1);
var G__53678 = null;
var G__53679 = (0);
var G__53680 = (0);
seq__53300_53648 = G__53677;
chunk__53302_53649 = G__53678;
count__53303_53650 = G__53679;
i__53304_53651 = G__53680;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53647);
}
}


var G__53681 = cljs.core.next(seq__53272_53639__$1);
var G__53682 = null;
var G__53683 = (0);
var G__53684 = (0);
seq__53272_53594 = G__53681;
chunk__53274_53595 = G__53682;
count__53275_53596 = G__53683;
i__53276_53597 = G__53684;
continue;
} else {
var G__53685 = cljs.core.next(seq__53272_53639__$1);
var G__53686 = null;
var G__53687 = (0);
var G__53688 = (0);
seq__53272_53594 = G__53685;
chunk__53274_53595 = G__53686;
count__53275_53596 = G__53687;
i__53276_53597 = G__53688;
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
var args__4835__auto__ = [];
var len__4829__auto___53689 = arguments.length;
var i__4830__auto___53690 = (0);
while(true){
if((i__4830__auto___53690 < len__4829__auto___53689)){
args__4835__auto__.push((arguments[i__4830__auto___53690]));

var G__53691 = (i__4830__auto___53690 + (1));
i__4830__auto___53690 = G__53691;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq53308){
var G__53309 = cljs.core.first(seq53308);
var seq53308__$1 = cljs.core.next(seq53308);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53309,seq53308__$1);
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
var G__53312 = arguments.length;
switch (G__53312) {
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

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__50818__auto___53693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_53317){
var state_val_53318 = (state_53317[(1)]);
if((state_val_53318 === (1))){
var state_53317__$1 = state_53317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53317__$1,(2),once_or_cleanup);
} else {
if((state_val_53318 === (2))){
var inst_53314 = (state_53317[(2)]);
var inst_53315 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_53317__$1 = (function (){var statearr_53319 = state_53317;
(statearr_53319[(7)] = inst_53314);

return statearr_53319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53317__$1,inst_53315);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__50579__auto__ = null;
var shadow$dom$state_machine__50579__auto____0 = (function (){
var statearr_53320 = [null,null,null,null,null,null,null,null];
(statearr_53320[(0)] = shadow$dom$state_machine__50579__auto__);

(statearr_53320[(1)] = (1));

return statearr_53320;
});
var shadow$dom$state_machine__50579__auto____1 = (function (state_53317){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_53317);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e53321){var ex__50582__auto__ = e53321;
var statearr_53322_53694 = state_53317;
(statearr_53322_53694[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_53317[(4)]))){
var statearr_53323_53695 = state_53317;
(statearr_53323_53695[(1)] = cljs.core.first((state_53317[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53696 = state_53317;
state_53317 = G__53696;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
shadow$dom$state_machine__50579__auto__ = function(state_53317){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__50579__auto____0.call(this);
case 1:
return shadow$dom$state_machine__50579__auto____1.call(this,state_53317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__50579__auto____0;
shadow$dom$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__50579__auto____1;
return shadow$dom$state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_53324 = f__50819__auto__();
(statearr_53324[(6)] = c__50818__auto___53693);

return statearr_53324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
