goog.provide('nextjournal.viewer.plotly');
nextjournal.viewer.plotly.default_layout = (function (){var G__61786 = new cljs.core.PersistentArrayMap(null, 3, ["font",new cljs.core.PersistentArrayMap(null, 3, ["family","'Verlag A', 'Verlag B', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Arial', sans-serif","size",(14),"color","#343434"], null),"height",(450),"autosize",false], null);
if(cljs.core.truth_((function (){var and__4221__auto__ = (typeof window !== 'undefined');
if(and__4221__auto__){
return window.hasOwnProperty("ontouchstart");
} else {
return and__4221__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61786,"dragmode",false);
} else {
return G__61786;
}
})();
nextjournal.viewer.plotly.default_graph_options = ({"displayModeBar": false, "displayLogo": false});
nextjournal.viewer.plotly.default_min_margin = new cljs.core.PersistentArrayMap(null, 4, ["r",(0),"l",(30),"b",(0),"t",(20)], null);
nextjournal.viewer.plotly.adjust_layout_margins = (function nextjournal$viewer$plotly$adjust_layout_margins(layout){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(layout,"margin",(function (margin){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.max,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.viewer.plotly.default_min_margin,margin,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout,"title"))?new cljs.core.PersistentArrayMap(null, 1, ["t",(60)], null):null)], 0));
}));
});
/**
 * Like merge, but merges maps recursively.
 */
nextjournal.viewer.plotly.deep_merge_maps = (function nextjournal$viewer$plotly$deep_merge_maps(m1,m2){
if(((cljs.core.map_QMARK_(m1)) && (cljs.core.map_QMARK_(m2)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(nextjournal.viewer.plotly.deep_merge_maps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m1,m2], 0));
} else {
return m2;
}
});
nextjournal.viewer.plotly.graph_layout_with_defaults = (function nextjournal$viewer$plotly$graph_layout_with_defaults(layout){
var layout__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(layout);
var layout__$2 = ((cljs.core.empty_QMARK_(layout__$1))?cljs.core.PersistentArrayMap.EMPTY:layout__$1);
return cljs.core.clj__GT_js(nextjournal.viewer.plotly.adjust_layout_margins(nextjournal.viewer.plotly.deep_merge_maps(nextjournal.viewer.plotly.default_layout,layout__$2)));
});
nextjournal.viewer.plotly.coerce_val = (function nextjournal$viewer$plotly$coerce_val(value){
if(typeof value === 'string'){
return JSON.parse(value);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.clj__GT_js(value);
} else {
return value;

}
}
});
nextjournal.viewer.plotly.viewer_STAR_ = (function nextjournal$viewer$plotly$viewer_STAR_(value){
var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.d3_require.with$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"package","package",1189062786),"plotly.js-dist@1.51.1"], null),(function (p__61816){
var map__61817 = p__61816;
var map__61817__$1 = (((((!((map__61817 == null))))?(((((map__61817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61817):map__61817);
var Plotly = map__61817__$1;
var relayout = (function (){var obj61819 = map__61817__$1;
if((!((obj61819 == null)))){
return (obj61819["relayout"]);
} else {
return undefined;
}
})();
var Plots = (function (){var obj61820 = map__61817__$1;
if((!((obj61820 == null)))){
return (obj61820["Plots"]);
} else {
return undefined;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-plotly-result","div.code-plotly-result",705541007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (plotly_el){
if(cljs.core.truth_(plotly_el)){
var map__61821 = nextjournal.viewer.plotly.coerce_val(value);
var map__61821__$1 = (((((!((map__61821 == null))))?(((((map__61821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61821):map__61821);
var coerced = map__61821__$1;
var layout = (function (){var obj61823 = map__61821__$1;
if((!((obj61823 == null)))){
return (obj61823["layout"]);
} else {
return undefined;
}
})();
var value_object = (function (){var obj61824 = (function (){var obj61825 = coerced;
if((!((obj61825 == null)))){
var out61826 = ({});
var k__55788__auto___61845 = "data";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__55788__auto___61845,obj61825)){
var obj61829_61846 = out61826;
(obj61829_61846[k__55788__auto___61845] = (obj61825[k__55788__auto___61845]));

} else {
}

var k__55788__auto___61847 = "frames";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__55788__auto___61847,obj61825)){
var obj61830_61848 = out61826;
(obj61830_61848[k__55788__auto___61847] = (obj61825[k__55788__auto___61847]));

} else {
}

return out61826;
} else {
return ({});
}
})();
var obj61833 = (function (){var obj61834 = (((!((obj61824 == null))))?obj61824:({}));
(obj61834["layout"] = nextjournal.viewer.plotly.graph_layout_with_defaults(layout));

return obj61834;
})();
(obj61833["config"] = nextjournal.viewer.plotly.default_graph_options);

return obj61833;
})();
var obj61837_61849 = this$;
var obj61838_61850 = (((!((obj61837_61849 == null))))?obj61837_61849:({}));
(obj61838_61850["resize-listener"] = goog.functions.debounce((function (){
var G__61841_61851 = plotly_el;
var G__61842_61852 = cljs.core.clj__GT_js(nextjournal.viewer.plotly.graph_layout_with_defaults(layout));
(relayout.cljs$core$IFn$_invoke$arity$2 ? relayout.cljs$core$IFn$_invoke$arity$2(G__61841_61851,G__61842_61852) : relayout.call(null,G__61841_61851,G__61842_61852));

return Plots.resize(plotly_el);
}),(100)));


var obj__55881__auto___61853 = (function (){var obj__55881__auto___61853 = Plotly;
var f__55882__auto___61854 = (obj__55881__auto___61853["newPlot"]);
return f__55882__auto___61854.call(obj__55881__auto___61853,plotly_el,value_object);
})();
var f__55882__auto___61854 = (obj__55881__auto___61853["catch"]);
f__55882__auto___61854.call(obj__55881__auto___61853,(function nextjournal$viewer$plotly$viewer_STAR__$_new_plot_error(reason){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.plotly",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("nextjournal.viewer.plotly","insert-plot","nextjournal.viewer.plotly/insert-plot",-1087984347),"Plotly Error",new cljs.core.Keyword(null,"el","el",-1618201118),plotly_el,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason,new cljs.core.Keyword(null,"line","line",212345235),80], null)),null);
}));

return window.addEventListener("resize",(function (){var obj61843 = this$;
if((!((obj61843 == null)))){
return (obj61843["resize-listener"]);
} else {
return undefined;
}
})());
} else {
return window.removeEventListener("resize",(function (){var obj61844 = this$;
if((!((obj61844 == null)))){
return (obj61844["resize-listener"]);
} else {
return undefined;
}
})());
}
})], null)], null);
})], null);
});
nextjournal.viewer.plotly.viewer = (function nextjournal$viewer$plotly$viewer(value){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.plotly.viewer_STAR_,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"reagent","reagent",2131627322)], null));
});

//# sourceMappingURL=nextjournal.viewer.plotly.js.map
