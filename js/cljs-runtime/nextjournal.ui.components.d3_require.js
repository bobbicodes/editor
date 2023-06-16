goog.provide('nextjournal.ui.components.d3_require');
var module$node_modules$d3_require$dist$d3_require=shadow.js.require("module$node_modules$d3_require$dist$d3_require", {});
nextjournal.ui.components.d3_require.with$ = (function nextjournal$ui$components$d3_require$with(p__59717,f){
var map__59718 = p__59717;
var map__59718__$1 = cljs.core.__destructure_map(map__59718);
var package$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59718__$1,new cljs.core.Keyword(null,"package","package",1189062786));
var loading_view = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59718__$1,new cljs.core.Keyword(null,"loading-view","loading-view",1386748874),"Loading...");
var with_let59719 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59719","with-let59719",425736629));
var temp__5757__auto___59725 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___59725 == null)){
} else {
var c__57349__auto___59726 = temp__5757__auto___59725;
if((with_let59719.generation === c__57349__auto___59726.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59719.generation = c__57349__auto___59726.ratomGeneration);
}

var init59720 = (with_let59719.length === (0));
var _BANG_package = ((((init59720) || (cljs.core.not(with_let59719.hasOwnProperty((0))))))?(with_let59719[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let59719[(0)]));
var res59721 = (function (){var G__59722 = cljs.core.deref(_BANG_package);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__59722)){
cljs.core.reset_BANG_(_BANG_package,new cljs.core.Keyword(null,"loading","loading",-737050189));

var obj__55881__auto___59727 = ((typeof package$ === 'string')?module$node_modules$d3_require$dist$d3_require.require(package$):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$d3_require$dist$d3_require.require,package$));
var f__55882__auto___59728 = (obj__55881__auto___59727["then"]);
f__55882__auto___59728.call(obj__55881__auto___59727,(function (p1__59716_SHARP_){
return cljs.core.reset_BANG_(_BANG_package,p1__59716_SHARP_);
}));

return loading_view;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),G__59722)){
return loading_view;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$1((function (){var G__59723 = cljs.core.deref(_BANG_package);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59723) : f.call(null,G__59723));
})());

}
}
})();
return res59721;
});

//# sourceMappingURL=nextjournal.ui.components.d3_require.js.map
