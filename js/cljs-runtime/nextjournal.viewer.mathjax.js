goog.provide('nextjournal.viewer.mathjax');
var module$node_modules$d3_require$dist$d3_require=shadow.js.require("module$node_modules$d3_require$dist$d3_require", {});
/**
 * the output format to use. Either `:svg` or `:html`. See
 *   http://docs.mathjax.org/en/latest/output/index.html for a discussion of
 *   tradeoffs. `:html` is currently not showing up.
 */
nextjournal.viewer.mathjax.output_format = new cljs.core.Keyword(null,"svg","svg",856789142);
nextjournal.viewer.mathjax.bundle_url = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),"https://run.nextjournalusercontent.com/data/QmaH3kKYJoHuVwUx7MYmxRFdFdvEyeJcGYFWChB3UUeDT3?filename=es5/tex-chtml-full.js&content-type=application/javascript",new cljs.core.Keyword(null,"svg","svg",856789142),"https://run.nextjournalusercontent.com/data/QmQadTUYtF4JjbwhUFzQy9BQiK52ace3KqVHreUqL7ohoZ?filename=es5/tex-svg-full.js&content-type=application/javascript"], null);
nextjournal.viewer.mathjax.viewer_STAR_ = (function nextjournal$viewer$mathjax$viewer_STAR_(value){
var with_let60674 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60674","with-let60674",-444559415));
var temp__5757__auto___60683 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___60683 == null)){
} else {
var c__57349__auto___60684 = temp__5757__auto___60683;
if((with_let60674.generation === c__57349__auto___60684.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60674.generation = c__57349__auto___60684.ratomGeneration);
}

var init60675 = (with_let60674.length === (0));
var _BANG_el = ((((init60675) || (cljs.core.not(with_let60674.hasOwnProperty((0))))))?(with_let60674[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let60674[(0)]));
var _BANG_mathjax = ((((init60675) || (cljs.core.not(with_let60674.hasOwnProperty((1))))))?(with_let60674[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let60674[(1)]));
var res60676 = (function (){
var obj__55881__auto___60685 = module$node_modules$d3_require$dist$d3_require.require((nextjournal.viewer.mathjax.bundle_url.cljs$core$IFn$_invoke$arity$1 ? nextjournal.viewer.mathjax.bundle_url.cljs$core$IFn$_invoke$arity$1(nextjournal.viewer.mathjax.output_format) : nextjournal.viewer.mathjax.bundle_url.call(null,nextjournal.viewer.mathjax.output_format)));
var f__55882__auto___60686 = (obj__55881__auto___60685["then"]);
f__55882__auto___60686.call(obj__55881__auto___60685,(function (){
return cljs.core.reset_BANG_(_BANG_mathjax,window.MathJax);
}));

if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref(_BANG_el);
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = cljs.core.deref(_BANG_mathjax);
if(cljs.core.truth_(and__4221__auto____$1)){
return value;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
var r_60687 = (function (){var G__60680 = nextjournal.viewer.mathjax.output_format;
var G__60680__$1 = (((G__60680 instanceof cljs.core.Keyword))?G__60680.fqn:null);
switch (G__60680__$1) {
case "svg":
return cljs.core.deref(_BANG_mathjax).tex2svg(value);

break;
case "html":
return cljs.core.deref(_BANG_mathjax).tex2chtml(value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60680__$1)].join('')));

}
})();
var temp__5751__auto___60689 = cljs.core.deref(_BANG_el).firstChild;
if(cljs.core.truth_(temp__5751__auto___60689)){
var c_60690 = temp__5751__auto___60689;
cljs.core.deref(_BANG_el).replaceChild(r_60687,c_60690);
} else {
cljs.core.deref(_BANG_el).appendChild(r_60687);
}
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(_BANG_el,el);
} else {
return null;
}
})], null)], null);
})()
;
return res60676;
});
nextjournal.viewer.mathjax.viewer = (function nextjournal$viewer$mathjax$viewer(value){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.mathjax.viewer_STAR_,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"reagent","reagent",2131627322)], null));
});

//# sourceMappingURL=nextjournal.viewer.mathjax.js.map
