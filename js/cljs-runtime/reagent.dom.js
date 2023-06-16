goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__61762 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__61763 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__61763);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__61766 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__61767 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__61767);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__61766);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__61762);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__61769 = arguments.length;
switch (G__61769) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__61770 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61770,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61770,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__61773_61791 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__61774_61792 = null;
var count__61775_61793 = (0);
var i__61776_61794 = (0);
while(true){
if((i__61776_61794 < count__61775_61793)){
var vec__61783_61795 = chunk__61774_61792.cljs$core$IIndexed$_nth$arity$2(null,i__61776_61794);
var container_61796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61783_61795,(0),null);
var comp_61797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61783_61795,(1),null);
reagent.dom.re_render_component(comp_61797,container_61796);


var G__61798 = seq__61773_61791;
var G__61799 = chunk__61774_61792;
var G__61800 = count__61775_61793;
var G__61801 = (i__61776_61794 + (1));
seq__61773_61791 = G__61798;
chunk__61774_61792 = G__61799;
count__61775_61793 = G__61800;
i__61776_61794 = G__61801;
continue;
} else {
var temp__5753__auto___61802 = cljs.core.seq(seq__61773_61791);
if(temp__5753__auto___61802){
var seq__61773_61803__$1 = temp__5753__auto___61802;
if(cljs.core.chunked_seq_QMARK_(seq__61773_61803__$1)){
var c__4649__auto___61804 = cljs.core.chunk_first(seq__61773_61803__$1);
var G__61805 = cljs.core.chunk_rest(seq__61773_61803__$1);
var G__61806 = c__4649__auto___61804;
var G__61807 = cljs.core.count(c__4649__auto___61804);
var G__61808 = (0);
seq__61773_61791 = G__61805;
chunk__61774_61792 = G__61806;
count__61775_61793 = G__61807;
i__61776_61794 = G__61808;
continue;
} else {
var vec__61787_61809 = cljs.core.first(seq__61773_61803__$1);
var container_61810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61787_61809,(0),null);
var comp_61811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61787_61809,(1),null);
reagent.dom.re_render_component(comp_61811,container_61810);


var G__61812 = cljs.core.next(seq__61773_61803__$1);
var G__61813 = null;
var G__61814 = (0);
var G__61815 = (0);
seq__61773_61791 = G__61812;
chunk__61774_61792 = G__61813;
count__61775_61793 = G__61814;
i__61776_61794 = G__61815;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
