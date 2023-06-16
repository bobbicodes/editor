goog.provide('nextjournal.clerk.sci_viewer');
var module$node_modules$framer_motion$dist$cjs$index=shadow.js.require("module$node_modules$framer_motion$dist$cjs$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
nextjournal.clerk.sci_viewer.color_classes = (function nextjournal$clerk$sci_viewer$color_classes(selected_QMARK_){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value-color","value-color",-1448916937),(cljs.core.truth_(selected_QMARK_)?"white-90":"dark-green"),new cljs.core.Keyword(null,"symbol-color","symbol-color",-983152467),(cljs.core.truth_(selected_QMARK_)?"white-90":"dark-blue"),new cljs.core.Keyword(null,"prefix-color","prefix-color",-1936761188),(cljs.core.truth_(selected_QMARK_)?"white-50":"black-30"),new cljs.core.Keyword(null,"label-color","label-color",813573617),(cljs.core.truth_(selected_QMARK_)?"white-90":"black-60"),new cljs.core.Keyword(null,"badge-background-color","badge-background-color",1563868990),(cljs.core.truth_(selected_QMARK_)?"bg-white-20":"bg-black-10")], null);
});


/**
 * Safe access to a value at key a js object.
 * 
 * Returns `'forbidden` if reading the property would result in a `SecurityError`.
 * https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
 */
nextjournal.clerk.sci_viewer.value_of = (function nextjournal$clerk$sci_viewer$value_of(obj,k){
try{var v = (function (){var obj74981 = obj;
if((!((obj74981 == null)))){
return (obj74981[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
v.constructor;

return v;
}catch (e74980){if((e74980 instanceof Error)){
var _ = e74980;
return new cljs.core.Symbol(null,"forbidden","forbidden",-338916619,null);
} else {
throw e74980;

}
}});
nextjournal.clerk.sci_viewer.obj__GT_clj = (function nextjournal$clerk$sci_viewer$obj__GT_clj(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,key){
var v = (x[key]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("function",goog.typeOf(v))){
return result;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,key,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,goog.object.getKeys(x));
});
nextjournal.clerk.sci_viewer.nbsp = goog.string.unescapeEntities("&nbsp;");

nextjournal.clerk.sci_viewer.js_object_viewer = (function nextjournal$clerk$sci_viewer$js_object_viewer(x,p__74985){
var map__74986 = p__74985;
var map__74986__$1 = cljs.core.__destructure_map(map__74986);
var opts = map__74986__$1;
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74986__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74986__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var x_SINGLEQUOTE_ = nextjournal.clerk.sci_viewer.obj__GT_clj(x);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var G__74990 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),"#js {",cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,k){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,k,cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,idx)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,nextjournal.clerk.sci_viewer.value_of(x,k),cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,idx)], null)], null);
})),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(path) + (1))," ")], null):" "))),cljs.core.keys(x_SINGLEQUOTE_)),"}"], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__74990) : nextjournal.clerk.sci_viewer.html.call(null,G__74990));
});
nextjournal.clerk.sci_viewer.toc_items = (function nextjournal$clerk$sci_viewer$toc_items(items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__74991){
var map__74992 = p__74991;
var map__74992__$1 = cljs.core.__destructure_map(map__74992);
var item = map__74992__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74992__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(content)){
var title = nextjournal.markdown.transform.__GT_text(item);
return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"path","path",-188191168),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.normalize.normalize_fragment(title))].join(''),new cljs.core.Keyword(null,"items","items",1031954938),(nextjournal.clerk.sci_viewer.toc_items.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.toc_items.cljs$core$IFn$_invoke$arity$1(children) : nextjournal.clerk.sci_viewer.toc_items.call(null,children))], null)));
} else {
var G__74993 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(item);
return (nextjournal.clerk.sci_viewer.toc_items.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.toc_items.cljs$core$IFn$_invoke$arity$1(G__74993) : nextjournal.clerk.sci_viewer.toc_items.call(null,G__74993));
}
}),cljs.core.PersistentVector.EMPTY,items);
});
nextjournal.clerk.sci_viewer.dark_mode_toggle = (function nextjournal$clerk$sci_viewer$dark_mode_toggle(_BANG_state){
var map__74994 = cljs.core.deref(_BANG_state);
var map__74994__$1 = cljs.core.__destructure_map(map__74994);
var dark_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74994__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
var spring = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),(200),new cljs.core.Keyword(null,"damping","damping",1054389681),(10)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-slate-400.hover:text-slate-600.dark:hover:text-white.cursor-pointer","button.text-slate-400.hover:text-slate-600.dark:hover:text-white.cursor-pointer",-1717879008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096),cljs.core.not(dark_mode_QMARK_));
})], null),(cljs.core.truth_(dark_mode_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.svg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 md:w-4 md:h-4",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 50 50",new cljs.core.Keyword(null,"key","key",-1516042587),"moon"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),"M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),0.6,new cljs.core.Keyword(null,"rotate","rotate",152705015),(90)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"rotate","rotate",152705015),(0),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.svg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"sun",new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 md:w-4 md:h-4",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.circle,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),"11.9998",new cljs.core.Keyword(null,"cy","cy",755331060),"11.9998",new cljs.core.Keyword(null,"r","r",-471384190),"5.75375",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.5], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.g,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(45)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"3.08982",new cljs.core.Keyword(null,"cy","cy",755331060),"6.85502",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-60 3.08982 6.85502)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"3.0903",new cljs.core.Keyword(null,"cy","cy",755331060),"17.1436",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-120 3.0903 17.1436)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"22.2881",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"20.9101",new cljs.core.Keyword(null,"cy","cy",755331060),"17.1436",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-60 20.9101 17.1436)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"20.9101",new cljs.core.Keyword(null,"cy","cy",755331060),"6.8555",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-120 20.9101 6.8555)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"1.71143",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null)], null)], null))], null)], null);
});
nextjournal.clerk.sci_viewer.local_storage_dark_mode_key = "clerk-darkmode";
nextjournal.clerk.sci_viewer.set_dark_mode_BANG_ = (function nextjournal$clerk$sci_viewer$set_dark_mode_BANG_(dark_mode_QMARK_){
var class_list_75563 = document.querySelector("html").classList;
if(cljs.core.truth_(dark_mode_QMARK_)){
class_list_75563.add("dark");
} else {
class_list_75563.remove("dark");
}

return nextjournal.ui.components.localstorage.set_item_BANG_(nextjournal.clerk.sci_viewer.local_storage_dark_mode_key,dark_mode_QMARK_);
});
nextjournal.clerk.sci_viewer.setup_dark_mode_BANG_ = (function nextjournal$clerk$sci_viewer$setup_dark_mode_BANG_(_BANG_state){
var map__74995 = cljs.core.deref(_BANG_state);
var map__74995__$1 = cljs.core.__destructure_map(map__74995);
var dark_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74995__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
cljs.core.add_watch(_BANG_state,new cljs.core.Keyword("nextjournal.clerk.sci-viewer","dark-mode","nextjournal.clerk.sci-viewer/dark-mode",-1934877842),(function (_,___$1,old,p__74996){
var map__74997 = p__74996;
var map__74997__$1 = cljs.core.__destructure_map(map__74997);
var dark_mode_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74997__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096).cljs$core$IFn$_invoke$arity$1(old),dark_mode_QMARK___$1)){
return nextjournal.clerk.sci_viewer.set_dark_mode_BANG_(dark_mode_QMARK___$1);
} else {
return null;
}
}));

if(cljs.core.truth_(dark_mode_QMARK_)){
return nextjournal.clerk.sci_viewer.set_dark_mode_BANG_(dark_mode_QMARK_);
} else {
return null;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.sci_viewer !== 'undefined') && (typeof nextjournal.clerk.sci_viewer._BANG_eval_counter !== 'undefined')){
} else {
nextjournal.clerk.sci_viewer._BANG_eval_counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
nextjournal.clerk.sci_viewer.notebook = (function nextjournal$clerk$sci_viewer$notebook(p__75000){
var map__75001 = p__75000;
var map__75001__$1 = cljs.core.__destructure_map(map__75001);
var _doc = map__75001__$1;
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75001__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75001__$1,new cljs.core.Keyword(null,"toc","toc",2050089251));
var with_let75002 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let75002","with-let75002",906914582));
var temp__5757__auto___75566 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___75566 == null)){
} else {
var c__57349__auto___75567 = temp__5757__auto___75566;
if((with_let75002.generation === c__57349__auto___75567.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let75002.generation = c__57349__auto___75567.ratomGeneration);
}

var init75003 = (with_let75002.length === (0));
var local_storage_key = ((((init75003) || (cljs.core.not(with_let75002.hasOwnProperty((0))))))?(with_let75002[(0)] = "clerk-navbar"):(with_let75002[(0)]));
var _BANG_state = ((((init75003) || (cljs.core.not(with_let75002.hasOwnProperty((1))))))?(with_let75002[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"toc","toc",2050089251),nextjournal.clerk.sci_viewer.toc_items(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(toc)),new cljs.core.Keyword(null,"md-toc","md-toc",401610567),toc,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096),nextjournal.ui.components.localstorage.get_item(nextjournal.clerk.sci_viewer.local_storage_dark_mode_key),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-over","slide-over",1619183007),"bg-slate-100 dark:bg-gray-800 font-sans border-r dark:border-slate-900"], null),new cljs.core.Keyword(null,"width","width",-384071477),(220),new cljs.core.Keyword(null,"mobile-width","mobile-width",-48320880),(300),new cljs.core.Keyword(null,"local-storage-key","local-storage-key",-1983909558),local_storage_key,new cljs.core.Keyword(null,"open?","open?",1238443125),(function (){var temp__5755__auto__ = nextjournal.ui.components.localstorage.get_item(local_storage_key);
if((temp__5755__auto__ == null)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(toc));
} else {
var stored_open_QMARK_ = temp__5755__auto__;
return stored_open_QMARK_;
}
})()], null))):(with_let75002[(1)]));
var root_ref_fn = ((((init75003) || (cljs.core.not(with_let75002.hasOwnProperty((2))))))?(with_let75002[(2)] = (function (p1__74998_SHARP_){
if(cljs.core.truth_(p1__74998_SHARP_)){
return nextjournal.clerk.sci_viewer.setup_dark_mode_BANG_(_BANG_state);
} else {
return null;
}
})):(with_let75002[(2)]));
var ref_fn = ((((init75003) || (cljs.core.not(with_let75002.hasOwnProperty((3))))))?(with_let75002[(3)] = (function (p1__74999_SHARP_){
if(cljs.core.truth_(p1__74999_SHARP_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-el","scroll-el",2005954473),p1__74999_SHARP_);
} else {
return null;
}
})):(with_let75002[(3)]));
var res75004 = (function (){var map__75005 = cljs.core.deref(_BANG_state);
var map__75005__$1 = cljs.core.__destructure_map(map__75005);
var md_toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75005__$1,new cljs.core.Keyword(null,"md-toc","md-toc",401610567));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(md_toc,toc)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"toc","toc",2050089251),nextjournal.clerk.sci_viewer.toc_items(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(toc)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"md-toc","md-toc",401610567),toc,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(toc))], 0));
}

var G__75006 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),root_ref_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-2.left-2.md:left-auto.md:right-2.z-10","div.fixed.top-2.left-2.md:left-auto.md:right-2.z-10",-1924941252),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.dark_mode_toggle,_BANG_state], null)], null),(cljs.core.truth_((function (){var and__4221__auto__ = toc;
if(cljs.core.truth_(and__4221__auto__)){
return new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(toc);
} else {
return and__4221__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.navbar.toggle_button,_BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.icon.menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uppercase.tracking-wider.ml-1.font-bold","span.uppercase.tracking-wider.ml-1.font-bold",184219074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[12px]"], null),"ToC"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"z-10 fixed right-2 top-2 md:right-auto md:left-3 md:top-3 text-slate-400 font-sans text-xs hover:underline cursor-pointer flex items-center bg-white dark:bg-gray-900 py-1 px-3 md:p-0 rounded-full md:rounded-none border md:border-0 border-slate-200 dark:border-gray-500 shadow md:shadow-none dark:text-slate-400 dark:hover:text-white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.navbar.panel,_BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.navbar.navbar,_BANG_state], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-auto.h-screen.overflow-y-auto","div.flex-auto.h-screen.overflow-y-auto",2043772975),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.viewer-notebook.flex-auto","div.flex.flex-col.items-center.viewer-notebook.flex-auto",1639150866),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
var map__75007 = nextjournal.clerk.viewer.__GT_viewer(x);
var map__75007__$1 = cljs.core.__destructure_map(map__75007);
var viewer_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75007__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var inner_viewer_name = (function (){var G__75008 = x;
var G__75008__$1 = (((G__75008 == null))?null:nextjournal.clerk.viewer.__GT_value(G__75008));
var G__75008__$2 = (((G__75008__$1 == null))?null:nextjournal.clerk.viewer.__GT_viewer(G__75008__$1));
if((G__75008__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__75008__$2);
}
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["viewer",(cljs.core.truth_(viewer_name)?["viewer-",cljs.core.name(viewer_name)].join(''):null),(cljs.core.truth_(inner_viewer_name)?["viewer-",cljs.core.name(inner_viewer_name)].join(''):null),(function (){var G__75010 = (function (){var or__4223__auto__ = nextjournal.clerk.viewer.width(x);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var G__75013 = viewer_name;
var G__75013__$1 = (((G__75013 instanceof cljs.core.Keyword))?G__75013.fqn:null);
switch (G__75013__$1) {
case "code":
case "code-folded":
return new cljs.core.Keyword(null,"wide","wide",-151772487);

break;
default:
return new cljs.core.Keyword(null,"prose","prose",2099617726);

}
}
})();
var G__75010__$1 = (((G__75010 instanceof cljs.core.Keyword))?G__75010.fqn:null);
switch (G__75010__$1) {
case "wide":
return "w-full max-w-wide";

break;
case "full":
return "w-full";

break;
default:
return "w-full max-w-prose px-8";

}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,x], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_eval_counter))].join('')], null));
}),xs))], null)], null)], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75006) : nextjournal.clerk.sci_viewer.html.call(null,G__75006));
})();
return res75004;
});
nextjournal.clerk.sci_viewer.eval_viewer_fn = (function nextjournal$clerk$sci_viewer$eval_viewer_fn(eval_f,form){
try{return (eval_f.cljs$core$IFn$_invoke$arity$1 ? eval_f.cljs$core$IFn$_invoke$arity$1(form) : eval_f.call(null,form));
}catch (e75014){if((e75014 instanceof Error)){
var e = e75014;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["error in render-fn: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),form], null),e);
} else {
throw e75014;

}
}});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.sci_viewer !== 'undefined') && (typeof nextjournal.clerk.sci_viewer._BANG_edamame_opts !== 'undefined')){
} else {
nextjournal.clerk.sci_viewer._BANG_edamame_opts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"all","all",892129742),true,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"location?","location?",425878086),cljs.core.seq_QMARK_,new cljs.core.Keyword(null,"end-location","end-location",-1199449467),false,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (tag){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"viewer-fn","viewer-fn",1346728242,null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.eval_viewer_fn,nextjournal.clerk.viewer.__GT_viewer_fn),new cljs.core.Symbol(null,"viewer-eval","viewer-eval",-1125780039,null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.eval_viewer_fn,cljs.core._STAR_eval_STAR_)], null),tag);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (function (value){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tagged-value","tagged-value",-1751091030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"space?","space?",-1369314665),(!(cljs.core.vector_QMARK_(value))),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__75045 = value;
if(((cljs.core.vector_QMARK_(value)) && (typeof cljs.core.second(value) === 'number'))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__75045,(1),(function (memory_address){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number-hex","number-hex",-9072138),memory_address);
}));
} else {
return G__75045;
}
})()], null));
});
}
}),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clj","clj",-660495428),null], null), null)], null));
}
nextjournal.clerk.sci_viewer.read_string = (function nextjournal$clerk$sci_viewer$read_string(s){
return edamame.core.parse_string.cljs$core$IFn$_invoke$arity$2(s,cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_edamame_opts));
});
goog.exportSymbol('nextjournal.clerk.sci_viewer.read_string', nextjournal.clerk.sci_viewer.read_string);
nextjournal.clerk.sci_viewer.opts__GT_query = (function nextjournal$clerk$sci_viewer$opts__GT_query(opts){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,"="),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75070_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__75070_SHARP_,(0),cljs.core.name);
}),opts)));
});
nextjournal.clerk.sci_viewer.unreadable_edn_viewer = (function nextjournal$clerk$sci_viewer$unreadable_edn_viewer(edn){
var G__75079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap.cmt-default","span.inspected-value.whitespace-nowrap.cmt-default",1768608485),edn], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75079) : nextjournal.clerk.sci_viewer.html.call(null,G__75079));
});
nextjournal.clerk.sci_viewer.error_badge = (function nextjournal$clerk$sci_viewer$error_badge(var_args){
var args__4835__auto__ = [];
var len__4829__auto___75575 = arguments.length;
var i__4830__auto___75576 = (0);
while(true){
if((i__4830__auto___75576 < len__4829__auto___75575)){
args__4835__auto__.push((arguments[i__4830__auto___75576]));

var G__75577 = (i__4830__auto___75576 + (1));
i__4830__auto___75576 = G__75577;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return nextjournal.clerk.sci_viewer.error_badge.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(nextjournal.clerk.sci_viewer.error_badge.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-50.rounded-sm.text-xs.text-red-400.px-2.py-1.items-center.sans-serif.inline-flex","div.bg-red-50.rounded-sm.text-xs.text-red-400.px-2.py-1.items-center.sans-serif.inline-flex",1436970942),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4.text-red-400","svg.h-4.w-4.text-red-400",-439155594),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-2.font-bold","div.ml-2.font-bold",1964855578)], null),content)], null);
}));

(nextjournal.clerk.sci_viewer.error_badge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.clerk.sci_viewer.error_badge.cljs$lang$applyTo = (function (seq75082){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75082));
}));

nextjournal.clerk.sci_viewer.error_view = (function nextjournal$clerk$sci_viewer$error_view(error){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-300.not-prose","div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-300.not-prose",1278649712),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.font-mono.text-red-600.dark:text-red-300.font-bold","p.font-mono.text-red-600.dark:text-red-300.font-bold",-1938208543),error.message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.text-red-600.dark:text-red-300.w-full.overflow-auto.mt-2","pre.text-red-600.dark:text-red-300.w-full.overflow-auto.mt-2",113939522),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] max-h-[155px]"], null),(function (){try{return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),clojure.string.split_lines(error.stack))));
}catch (e75099){if((e75099 instanceof Error)){
var _ = e75099;
return null;
} else {
throw e75099;

}
}})()], null),(function (){var temp__5757__auto__ = error.data;
if((temp__5757__auto__ == null)){
return null;
} else {
var data = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2","div.mt-2",-701876875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,data], null)], null);
}
})()], null);
});
nextjournal.clerk.sci_viewer.error_boundary = (function nextjournal$clerk$sci_viewer$error_boundary(var_args){
var args__4835__auto__ = [];
var len__4829__auto___75579 = arguments.length;
var i__4830__auto___75580 = (0);
while(true){
if((i__4830__auto___75580 < len__4829__auto___75579)){
args__4835__auto__.push((arguments[i__4830__auto___75580]));

var G__75581 = (i__4830__auto___75580 + (1));
i__4830__auto___75580 = G__75581;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return nextjournal.clerk.sci_viewer.error_boundary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(nextjournal.clerk.sci_viewer.error_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (_BANG_error,_){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),(function (___$1,___$2){
return null;
}),new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (___$1,e,_info){
return cljs.core.reset_BANG_(_BANG_error,e);
}),new cljs.core.Keyword(null,"get-derived-state-from-error","get-derived-state-from-error",1473896468),(function (e){
cljs.core.reset_BANG_(_BANG_error,e);

return ({});
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__75582__delegate = function (_error,children){
var temp__5751__auto__ = cljs.core.deref(_BANG_error);
if(cljs.core.truth_(temp__5751__auto__)){
var error = temp__5751__auto__;
return nextjournal.clerk.sci_viewer.error_view(error);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children);
}
};
var G__75582 = function (_error,var_args){
var children = null;
if (arguments.length > 1) {
var G__75583__i = 0, G__75583__a = new Array(arguments.length -  1);
while (G__75583__i < G__75583__a.length) {G__75583__a[G__75583__i] = arguments[G__75583__i + 1]; ++G__75583__i;}
  children = new cljs.core.IndexedSeq(G__75583__a,0,null);
} 
return G__75582__delegate.call(this,_error,children);};
G__75582.cljs$lang$maxFixedArity = 1;
G__75582.cljs$lang$applyTo = (function (arglist__75584){
var _error = cljs.core.first(arglist__75584);
var children = cljs.core.rest(arglist__75584);
return G__75582__delegate(_error,children);
});
G__75582.cljs$core$IFn$_invoke$arity$variadic = G__75582__delegate;
return G__75582;
})()
], null));
}));

(nextjournal.clerk.sci_viewer.error_boundary.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nextjournal.clerk.sci_viewer.error_boundary.cljs$lang$applyTo = (function (seq75104){
var G__75105 = cljs.core.first(seq75104);
var seq75104__$1 = cljs.core.next(seq75104);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75105,seq75104__$1);
}));

nextjournal.clerk.sci_viewer.fetch_BANG_ = (function nextjournal$clerk$sci_viewer$fetch_BANG_(p__75115,opts){
var map__75116 = p__75115;
var map__75116__$1 = cljs.core.__destructure_map(map__75116);
var blob_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75116__$1,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970));
return fetch(["_blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blob_id),((cljs.core.seq(opts))?["?",nextjournal.clerk.sci_viewer.opts__GT_query(opts)].join(''):null)].join('')).then((function (p1__75113_SHARP_){
return p1__75113_SHARP_.text();
})).then((function (p1__75114_SHARP_){
try{return nextjournal.clerk.sci_viewer.read_string(p1__75114_SHARP_);
}catch (e75126){if((e75126 instanceof Error)){
var e = e75126;
console.error(({"message": "sci read error", "blob-id": blob_id, "code-string": p1__75114_SHARP_, "error": e}));

return nextjournal.clerk.sci_viewer.unreadable_edn_viewer(p1__75114_SHARP_);
} else {
throw e75126;

}
}}));
});
nextjournal.clerk.sci_viewer.read_result = (function nextjournal$clerk$sci_viewer$read_result(p__75129,_BANG_error){
var map__75130 = p__75129;
var map__75130__$1 = cljs.core.__destructure_map(map__75130);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75130__$1,new cljs.core.Keyword("nextjournal","edn","nextjournal/edn",-1219681583));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75130__$1,new cljs.core.Keyword("nextjournal","string","nextjournal/string",304722890));
if(cljs.core.truth_(edn)){
try{return nextjournal.clerk.sci_viewer.read_string(edn);
}catch (e75134){if((e75134 instanceof Error)){
var e = e75134;
return cljs.core.reset_BANG_(_BANG_error,e);
} else {
throw e75134;

}
}} else {
return nextjournal.clerk.sci_viewer.unreadable_edn_viewer(string);
}
});
nextjournal.clerk.sci_viewer.result_viewer = (function nextjournal$clerk$sci_viewer$result_viewer(p__75138,_opts){
var map__75139 = p__75138;
var map__75139__$1 = cljs.core.__destructure_map(map__75139);
var result = map__75139__$1;
var fetch_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75139__$1,new cljs.core.Keyword("nextjournal","fetch-opts","nextjournal/fetch-opts",61437218));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75139__$1,new cljs.core.Keyword("nextjournal","hash","nextjournal/hash",669857928));
var G__75140 = (function (){var with_let75141 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let75141","with-let75141",847408934));
var temp__5757__auto___75585 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___75585 == null)){
} else {
var c__57349__auto___75586 = temp__5757__auto___75585;
if((with_let75141.generation === c__57349__auto___75586.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let75141.generation = c__57349__auto___75586.ratomGeneration);
}

var init75142 = (with_let75141.length === (0));
var _BANG_hash = ((((init75142) || (cljs.core.not(with_let75141.hasOwnProperty((0))))))?(with_let75141[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hash)):(with_let75141[(0)]));
var _BANG_error = ((((init75142) || (cljs.core.not(with_let75141.hasOwnProperty((1))))))?(with_let75141[(1)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let75141[(1)]));
var _BANG_desc = ((((init75142) || (cljs.core.not(with_let75141.hasOwnProperty((2))))))?(with_let75141[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.sci_viewer.read_result(result,_BANG_error))):(with_let75141[(2)]));
var _BANG_fetch_opts = ((((init75142) || (cljs.core.not(with_let75141.hasOwnProperty((3))))))?(with_let75141[(3)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(fetch_opts)):(with_let75141[(3)]));
var fetch_fn = ((((init75142) || (cljs.core.not(with_let75141.hasOwnProperty((4))))))?(with_let75141[(4)] = (cljs.core.truth_(cljs.core.deref(_BANG_fetch_opts))?(function (opts){
return nextjournal.clerk.sci_viewer.fetch_BANG_(cljs.core.deref(_BANG_fetch_opts),opts).then((function (more){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_desc,nextjournal.clerk.viewer.merge_presentations,more,opts);
}));
}):null)):(with_let75141[(4)]));
var _BANG_expanded_at = ((((init75142) || (cljs.core.not(with_let75141.hasOwnProperty((5))))))?(with_let75141[(5)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(_BANG_desc),new cljs.core.Keyword("nextjournal","expanded-at","nextjournal/expanded-at",-1490351009),cljs.core.PersistentArrayMap.EMPTY))):(with_let75141[(5)]));
var on_key_down = ((((init75142) || (cljs.core.not(with_let75141.hasOwnProperty((6))))))?(with_let75141[(6)] = (function (event){
if(cljs.core.truth_(event.altKey)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.assoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923),true);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
}
})):(with_let75141[(6)]));
var on_key_up = ((((init75142) || (cljs.core.not(with_let75141.hasOwnProperty((7))))))?(with_let75141[(7)] = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
})):(with_let75141[(7)]));
var ref_fn = ((((init75142) || (cljs.core.not(with_let75141.hasOwnProperty((8))))))?(with_let75141[(8)] = (function (p1__75137_SHARP_){
if(cljs.core.truth_(p1__75137_SHARP_)){
document.addEventListener("keydown",on_key_down);

return document.addEventListener("keyup",on_key_up);
} else {
document.removeEventListener("keydown",on_key_down);

return document.removeEventListener("up",on_key_up);
}
})):(with_let75141[(8)]));
var res75143 = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hash,cljs.core.deref(_BANG_hash))){
} else {
cljs.core.reset_BANG_(_BANG_hash,hash);

cljs.core.reset_BANG_(_BANG_fetch_opts,fetch_opts);

cljs.core.reset_BANG_(_BANG_desc,nextjournal.clerk.sci_viewer.read_result(result,_BANG_error));

cljs.core.reset_BANG_(_BANG_error,null);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.provide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),fetch_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.error_boundary,_BANG_error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto.overflow-y-hidden","div.overflow-x-auto.overflow-y-hidden",1237137795),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694),_BANG_expanded_at], null),cljs.core.deref(_BANG_desc)], null)], null)], null)], null)], null);
})()
;
return res75143;
})();
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75140) : nextjournal.clerk.sci_viewer.html.call(null,G__75140));
});
nextjournal.clerk.sci_viewer.toggle_expanded = (function nextjournal$clerk$sci_viewer$toggle_expanded(_BANG_expanded_at,path,event){
event.preventDefault();

event.stopPropagation();

var map__75172 = cljs.core.deref(_BANG_expanded_at);
var map__75172__$1 = cljs.core.__destructure_map(map__75172);
var hover_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75172__$1,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
var prompt_multi_expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75172__$1,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
var hover_path_count = cljs.core.count(hover_path);
var hover_path_expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
if(cljs.core.truth_((function (){var and__4221__auto__ = hover_path;
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = prompt_multi_expand_QMARK_;
if(cljs.core.truth_(and__4221__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),hover_path_count);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_expanded_at,(function (expanded_at){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__75176){
var vec__75177 = p__75176;
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75177,(0),null);
var expanded_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75177,(1),null);
if(((cljs.core.vector_QMARK_(path__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path__$1),hover_path_count)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,path__$1,cljs.core.not(hover_path_expanded_QMARK_));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,path__$1,expanded_QMARK_);
}
}),cljs.core.PersistentArrayMap.EMPTY,expanded_at);
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.update,path,cljs.core.not);
}
});
nextjournal.clerk.sci_viewer.expandable_QMARK_ = (function nextjournal$clerk$sci_viewer$expandable_QMARK_(xs){
return ((1) < cljs.core.count(xs));
});
nextjournal.clerk.sci_viewer.inspect_children = (function nextjournal$clerk$sci_viewer$inspect_children(opts){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,x){
var G__75184 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),idx);
var G__75185 = x;
return (nextjournal.clerk.sci_viewer.inspect.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.sci_viewer.inspect.cljs$core$IFn$_invoke$arity$2(G__75184,G__75185) : nextjournal.clerk.sci_viewer.inspect.call(null,G__75184,G__75185));
}));
});
nextjournal.clerk.sci_viewer.expand_style = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor-pointer","bg-indigo-50","hover:bg-indigo-100","border-b","border-gray-400","hover:border-gray-500","dark:bg-gray-900","dark:hover:bg-slate-700","dark:border-slate-600","dark:hover:border-slate-500"], null);
nextjournal.clerk.sci_viewer.triangle = (function nextjournal$clerk$sci_viewer$triangle(expanded_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"class","class",-2030961996),["w-[7px] h-[7px] fill-current inline-block transition-all mr-[1px] -mt-[2px] ",(cljs.core.truth_(expanded_QMARK_)?"rotate-180":"rotate-90")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),"5.9,88.2 50,11.8 94.1,88.2 "], null)], null)], null);
});
nextjournal.clerk.sci_viewer.triangle_spacer = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-block w-[8px]"], null)], null);
nextjournal.clerk.sci_viewer.expand_button = (function nextjournal$clerk$sci_viewer$expand_button(_BANG_expanded_at,opening_paren,path){
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__75192 = cljs.core.deref(_BANG_expanded_at);
var map__75192__$1 = cljs.core.__destructure_map(map__75192);
var hover_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75192__$1,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
var prompt_multi_expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75192__$1,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
var multi_expand_QMARK_ = (function (){var and__4221__auto__ = hover_path;
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = prompt_multi_expand_QMARK_;
if(cljs.core.truth_(and__4221__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),cljs.core.count(hover_path));
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.group.hover:bg-indigo-100.rounded-sm.hover:shadow.cursor-pointer","span.group.hover:bg-indigo-100.rounded-sm.hover:shadow.cursor-pointer",-1703697853),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(multi_expand_QMARK_)?"bg-indigo-100 shadow ":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.sci_viewer.toggle_expanded,_BANG_expanded_at,path),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.assoc,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491),path);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-slate-400.group-hover:text-indigo-700","span.text-slate-400.group-hover:text-indigo-700",438525494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(multi_expand_QMARK_)?"text-indigo-700 ":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.triangle,expanded_QMARK_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.group-hover:text-indigo-700","span.group-hover:text-indigo-700",-444234631),opening_paren], null)], null);
});
nextjournal.clerk.sci_viewer.coll_viewer = (function nextjournal$clerk$sci_viewer$coll_viewer(xs,p__75195){
var map__75196 = p__75195;
var map__75196__$1 = cljs.core.__destructure_map(map__75196);
var opts = map__75196__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75196__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75196__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75196__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var G__75197 = (function (){var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__75198 = viewer;
var map__75198__$1 = cljs.core.__destructure_map(map__75198);
var opening_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75198__$1,new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203));
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75198__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"inline-flex":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((((1) < cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.expand_button,_BANG_expanded_at,opening_paren,path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),opening_paren], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.inspect_children(opts),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),nextjournal.clerk.sci_viewer.triangle_spacer,nextjournal.clerk.sci_viewer.nbsp,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(opening_paren)))?nextjournal.clerk.sci_viewer.nbsp:null)], null):" "))),xs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__75200 = closing_paren;
if(cljs.core.list_QMARK_(closing_paren)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),G__75200);
} else {
return G__75200;
}
})()], null)], null)], null);
})();
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75197) : nextjournal.clerk.sci_viewer.html.call(null,G__75197));
});
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4622__auto__ = (function nextjournal$clerk$sci_viewer$iter__75204(s__75205){
return (new cljs.core.LazySeq(null,(function (){
var s__75205__$1 = s__75205;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75205__$1);
if(temp__5753__auto__){
var s__75205__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75205__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__75205__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__75207 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__75206 = (0);
while(true){
if((i__75206 < size__4621__auto__)){
var coll = cljs.core._nth(c__4620__auto__,i__75206);
cljs.core.chunk_append(b__75207,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3.result-viewer","div.mb-3.result-viewer",896613001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,coll], null)], null));

var G__75587 = (i__75206 + (1));
i__75206 = G__75587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75207),nextjournal$clerk$sci_viewer$iter__75204(cljs.core.chunk_rest(s__75205__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75207),null);
}
} else {
var coll = cljs.core.first(s__75205__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3.result-viewer","div.mb-3.result-viewer",896613001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,coll], null)], null),nextjournal$clerk$sci_viewer$iter__75204(cljs.core.rest(s__75205__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bar","bar",-1386246584),cljs.core.range.cljs$core$IFn$_invoke$arity$1((1000))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"bar",new cljs.core.Keyword(null,"c","c",-1763192079),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"bar",new cljs.core.Keyword(null,"c","c",-1763192079),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)),new cljs.core.Keyword(null,"d","d",1972142424),(1)], null)], null));
})());
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"coll-viewer"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"with a simple `inspect` and no `present` we don't move closing parens to children",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4622__auto__ = (function nextjournal$clerk$sci_viewer$iter__75213(s__75214){
return (new cljs.core.LazySeq(null,(function (){
var s__75214__$1 = s__75214;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75214__$1);
if(temp__5753__auto__){
var s__75214__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75214__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__75214__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__75216 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__75215 = (0);
while(true){
if((i__75215 < size__4621__auto__)){
var coll = cljs.core._nth(c__4620__auto__,i__75215);
cljs.core.chunk_append(b__75216,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3.result-viewer","div.mb-3.result-viewer",896613001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,coll], null)], null));

var G__75593 = (i__75215 + (1));
i__75215 = G__75593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75216),nextjournal$clerk$sci_viewer$iter__75213(cljs.core.chunk_rest(s__75214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75216),null);
}
} else {
var coll = cljs.core.first(s__75214__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3.result-viewer","div.mb-3.result-viewer",896613001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,coll], null)], null),nextjournal$clerk$sci_viewer$iter__75213(cljs.core.rest(s__75214__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bar","bar",-1386246584),cljs.core.range.cljs$core$IFn$_invoke$arity$1((20))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"bar",new cljs.core.Keyword(null,"c","c",-1763192079),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"bar",new cljs.core.Keyword(null,"c","c",-1763192079),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)),new cljs.core.Keyword(null,"d","d",1972142424),(1)], null)], null));
})());
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"coll-viewer-simple"], 0)));

nextjournal.clerk.sci_viewer.elision_viewer = (function nextjournal$clerk$sci_viewer$elision_viewer(p__75219,_){
var map__75223 = p__75219;
var map__75223__$1 = cljs.core.__destructure_map(map__75223);
var fetch_opts = map__75223__$1;
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75223__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75223__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var unbounded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75223__$1,new cljs.core.Keyword(null,"unbounded?","unbounded?",1662946650));
var G__75224 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.consume,new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),(function (fetch_fn){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sans-serif.relative.whitespace-nowrap","span.sans-serif.relative.whitespace-nowrap",1223699353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(2),new cljs.core.Keyword(null,"padding","padding",1660304693),((cljs.core.fn_QMARK_(fetch_fn))?"1px 3px":null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(11),new cljs.core.Keyword(null,"top","top",-1856271961),(-1)], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.fn_QMARK_(fetch_fn))?"cursor-pointer bg-indigo-200 hover:bg-indigo-300 dark:bg-gray-700 dark:hover:bg-slate-600 text-gray-900 dark:text-white":"text-gray-400 dark:text-slate-300"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.fn_QMARK_(fetch_fn)){
return (fetch_fn.cljs$core$IFn$_invoke$arity$1 ? fetch_fn.cljs$core$IFn$_invoke$arity$1(fetch_opts) : fetch_fn.call(null,fetch_opts));
} else {
return null;
}
})], null),(total - offset),(cljs.core.truth_(unbounded_QMARK_)?"+":null),((cljs.core.fn_QMARK_(fetch_fn))?" more\u2026":" more elided")], null);
})], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75224) : nextjournal.clerk.sci_viewer.html.call(null,G__75224));
});
nextjournal.clerk.sci_viewer.map_viewer = (function nextjournal$clerk$sci_viewer$map_viewer(xs,p__75227){
var map__75228 = p__75227;
var map__75228__$1 = cljs.core.__destructure_map(map__75228);
var opts = map__75228__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75228__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75228__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75228__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var G__75229 = (function (){var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__75230 = viewer;
var map__75230__$1 = cljs.core.__destructure_map(map__75230);
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75230__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"inline-flex":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((nextjournal.clerk.sci_viewer.expandable_QMARK_(xs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.expand_button,_BANG_expanded_at,"{",path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{"], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.inspect_children(opts),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),nextjournal.clerk.sci_viewer.triangle_spacer,nextjournal.clerk.sci_viewer.nbsp], null):" "))),xs),(function (){var G__75231 = closing_paren;
if(cljs.core.list_QMARK_(closing_paren)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),G__75231);
} else {
return G__75231;
}
})()], null)], null);
})();
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75229) : nextjournal.clerk.sci_viewer.html.call(null,G__75229));
});
nextjournal.clerk.sci_viewer.string_viewer = (function nextjournal$clerk$sci_viewer$string_viewer(s,p__75235){
var map__75236 = p__75235;
var map__75236__$1 = cljs.core.__destructure_map(map__75236);
var opts = map__75236__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75236__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75236__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var G__75237 = (function (){var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"whitespace-pre":null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__75232_SHARP_){
if(typeof p1__75232_SHARP_ === 'string'){
if(cljs.core.truth_(expanded_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),"\n ",nextjournal.clerk.sci_viewer.triangle_spacer], null),clojure.string.split_lines(p1__75232_SHARP_)));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-slate-400","span.text-slate-400",-1212905222),"\u21A9\uFE0E"], null),clojure.string.split_lines(p1__75232_SHARP_)));
}
} else {
return (nextjournal.clerk.sci_viewer.inspect.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.sci_viewer.inspect.cljs$core$IFn$_invoke$arity$2(opts,p1__75232_SHARP_) : nextjournal.clerk.sci_viewer.inspect.call(null,opts,p1__75232_SHARP_));
}
})),((typeof s === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null):s));
})();
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75237) : nextjournal.clerk.sci_viewer.html.call(null,G__75237));
});
nextjournal.clerk.sci_viewer.quoted_string_viewer = (function nextjournal$clerk$sci_viewer$quoted_string_viewer(s,p__75252){
var map__75253 = p__75252;
var map__75253__$1 = cljs.core.__destructure_map(map__75253);
var opts = map__75253__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75253__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75253__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var G__75256 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-string.inspected-value.whitespace-nowrap","span.cmt-string.inspected-value.whitespace-nowrap",1280126552),(cljs.core.truth_(cljs.core.some((function (p1__75249_SHARP_){
return ((typeof p1__75249_SHARP_ === 'string') && (clojure.string.includes_QMARK_(p1__75249_SHARP_,"\n")));
}),((typeof s === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null):s)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.expand_button,_BANG_expanded_at,"\"",path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\""], null)),nextjournal.clerk.viewer.__GT_value(nextjournal.clerk.sci_viewer.string_viewer(s,opts)),"\""], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75256) : nextjournal.clerk.sci_viewer.html.call(null,G__75256));
});
nextjournal.clerk.sci_viewer.number_viewer = (function nextjournal$clerk$sci_viewer$number_viewer(num){
var G__75259 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-number.inspected-value","span.cmt-number.inspected-value",1512437969),(cljs.core.truth_(Number.isNaN(num))?"NaN":cljs.core.str.cljs$core$IFn$_invoke$arity$1(num))], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75259) : nextjournal.clerk.sci_viewer.html.call(null,G__75259));
});
nextjournal.clerk.sci_viewer.sort_BANG_ = (function nextjournal$clerk$sci_viewer$sort_BANG_(_BANG_sort,i,k){
var map__75263 = cljs.core.deref(_BANG_sort);
var map__75263__$1 = cljs.core.__destructure_map(map__75263);
var sort_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75263__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75263__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
return cljs.core.reset_BANG_(_BANG_sort,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort-index","sort-index",-1082353222),i,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),k,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key,k))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order,new cljs.core.Keyword(null,"asc","asc",356854569)))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569)):new cljs.core.Keyword(null,"asc","asc",356854569))], null));
});
nextjournal.clerk.sci_viewer.sort_data = (function nextjournal$clerk$sci_viewer$sort_data(p__75270,p__75271){
var map__75276 = p__75270;
var map__75276__$1 = cljs.core.__destructure_map(map__75276);
var sort_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75276__$1,new cljs.core.Keyword(null,"sort-index","sort-index",-1082353222));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75276__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var map__75277 = p__75271;
var map__75277__$1 = cljs.core.__destructure_map(map__75277);
var data = map__75277__$1;
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75277__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75277__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var G__75278 = data;
if(cljs.core.truth_(head)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75278,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__75265_SHARP_){
var G__75279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__75265_SHARP_,sort_index);
if(typeof cljs.core.val === 'string'){
return clojure.string.lower_case(G__75279);
} else {
return G__75279;
}
}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order,new cljs.core.Keyword(null,"asc","asc",356854569)))?(function (p1__75266_SHARP_,p2__75267_SHARP_){
return cljs.core.compare(p1__75266_SHARP_,p2__75267_SHARP_);
}):(function (p1__75269_SHARP_,p2__75268_SHARP_){
return cljs.core.compare(p2__75268_SHARP_,p1__75269_SHARP_);
})),rows)));
} else {
return G__75278;
}
});
nextjournal.clerk.sci_viewer.x_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4","svg.h-4.w-4",1958440568),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.sci_viewer.check_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4","svg.h-4.w-4",1958440568),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.sci_viewer.table_error = (function nextjournal$clerk$sci_viewer$table_error(p__75299){
var vec__75300 = p__75299;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75300,(0),null);
var G__75303 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-400.not-prose","div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-400.not-prose",472299052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.mt-0.uppercase.text-xs.dark:text-red-400.tracking-wide","h4.mt-0.uppercase.text-xs.dark:text-red-400.tracking-wide",-1114358129),"Table Error"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-4.font-medium","p.mt-4.font-medium",778592363),"Clerk\u2019s table viewer does not recognize the format of your data:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex","div.mt-2.flex",-812335696),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-red-500.mr-2","div.text-red-500.mr-2",-1965802655),nextjournal.clerk.sci_viewer.x_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,data], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-4.font-medium","p.mt-4.font-medium",778592363),"Currently, the following formats are supported:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.sci_viewer.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"column-2","column-2",1966117147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.sci_viewer.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),(1),new cljs.core.Keyword(null,"column-2","column-2",1966117147),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),(2),new cljs.core.Keyword(null,"column-2","column-2",1966117147),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.sci_viewer.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.sci_viewer.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-1","column-1",844467295),new cljs.core.Keyword(null,"column-2","column-2",1966117147)], null),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null)], null)], null)], null)], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75303) : nextjournal.clerk.sci_viewer.html.call(null,G__75303));
});
nextjournal.clerk.sci_viewer.throwable_viewer = (function nextjournal$clerk$sci_viewer$throwable_viewer(p__75309){
var map__75310 = p__75309;
var map__75310__$1 = cljs.core.__destructure_map(map__75310);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75310__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75310__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var G__75311 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-screen.h-screen.overflow-y-auto.bg-gray-100.p-6.text-xs.monospace.flex.flex-col.not-prose","div.w-screen.h-screen.overflow-y-auto.bg-gray-100.p-6.text-xs.monospace.flex.flex-col.not-prose",2057444449),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md.shadow-lg.border.border-gray-300.bg-white.max-w-6xl.mx-auto","div.rounded-md.shadow-lg.border.border-gray-300.bg-white.max-w-6xl.mx-auto",-632987223),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__75314){
var map__75315 = p__75314;
var map__75315__$1 = cljs.core.__destructure_map(map__75315);
var _ex = map__75315__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75315__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75315__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75315__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var _trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75315__$1,new cljs.core.Keyword(null,"_trace","_trace",-196725681));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.bg-red-100.border-b.border-gray-300.rounded-t-md","div.p-4.bg-red-100.border-b.border-gray-300.rounded-t-md",1313211937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"Unhandled ",type], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold.mt-1","div.font-bold.mt-1",-1699801213),message], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null)], null);
}),via)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-6","div.py-6",1081828055),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.w-full","table.w-full",1746679141),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__75322){
var vec__75323 = p__75322;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75323,(0),null);
var _x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75323,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75323,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75323,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.hover:bg-red-100.leading-tight","tr.hover:bg-red-100.leading-tight",96605729),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-right.px-6","td.text-right.px-6",324007517),file,":"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-right.pr-6","td.text-right.pr-6",1739173277),line], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.py-1.pr-6","td.py-1.pr-6",1245547684),call], null)], null);
})),trace)], null)], null)], null)], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75311) : nextjournal.clerk.sci_viewer.html.call(null,G__75311));
});
nextjournal.clerk.sci_viewer.tagged_value = (function nextjournal$clerk$sci_viewer$tagged_value(var_args){
var G__75331 = arguments.length;
switch (G__75331) {
case 2:
return nextjournal.clerk.sci_viewer.tagged_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clerk.sci_viewer.tagged_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.sci_viewer.tagged_value.cljs$core$IFn$_invoke$arity$2 = (function (tag,value){
return nextjournal.clerk.sci_viewer.tagged_value.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space?","space?",-1369314665),true], null),tag,value);
}));

(nextjournal.clerk.sci_viewer.tagged_value.cljs$core$IFn$_invoke$arity$3 = (function (p__75334,tag,value){
var map__75335 = p__75334;
var map__75335__$1 = cljs.core.__destructure_map(map__75335);
var space_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75335__$1,new cljs.core.Keyword(null,"space?","space?",-1369314665));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),tag], null),(cljs.core.truth_(space_QMARK_)?nextjournal.clerk.sci_viewer.nbsp:null),value], null);
}));

(nextjournal.clerk.sci_viewer.tagged_value.cljs$lang$maxFixedArity = 3);

nextjournal.clerk.sci_viewer.normalize_viewer_meta = (function nextjournal$clerk$sci_viewer$normalize_viewer_meta(x){
var temp__5751__auto__ = new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(temp__5751__auto__)){
var viewer = temp__5751__auto__;
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__75336 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),nextjournal.clerk.sci_viewer.html_viewer,new cljs.core.Keyword(null,"reagent","reagent",2131627322),nextjournal.clerk.sci_viewer.reagent_viewer], null);
return (fexpr__75336.cljs$core$IFn$_invoke$arity$2 ? fexpr__75336.cljs$core$IFn$_invoke$arity$2(viewer,viewer) : fexpr__75336.call(null,viewer,viewer));
})(),x);
} else {
return x;
}
});
nextjournal.clerk.sci_viewer.js_viewers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__75338_SHARP_){
if((!((p1__75338_SHARP_ == null)))){
if((((p1__75338_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === p1__75338_SHARP_.cljs$core$IDeref$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__75339_SHARP_,p2__75340_SHARP_){
return nextjournal.clerk.sci_viewer.tagged_value.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(p1__75339_SHARP_)], 0)),(function (){var G__75348 = cljs.core.deref(p1__75339_SHARP_);
var G__75349 = p2__75340_SHARP_;
return (nextjournal.clerk.sci_viewer.inspect.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.sci_viewer.inspect.cljs$core$IFn$_invoke$arity$2(G__75348,G__75349) : nextjournal.clerk.sci_viewer.inspect.call(null,G__75348,G__75349));
})());
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),goog.isObject,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),nextjournal.clerk.sci_viewer.js_object_viewer], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.array_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.coll_viewer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#js "], null),"["], null),new cljs.core.Keyword(null,"close","close",1835149582),"]"], null))], null)], null);
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.sci_viewer !== 'undefined') && (typeof nextjournal.clerk.sci_viewer._BANG_doc !== 'undefined')){
} else {
nextjournal.clerk.sci_viewer._BANG_doc = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.sci_viewer !== 'undefined') && (typeof nextjournal.clerk.sci_viewer._BANG_error !== 'undefined')){
} else {
nextjournal.clerk.sci_viewer._BANG_error = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.sci_viewer !== 'undefined') && (typeof nextjournal.clerk.sci_viewer._BANG_viewers !== 'undefined')){
} else {
nextjournal.clerk.sci_viewer._BANG_viewers = nextjournal.clerk.viewer._BANG_viewers;
}
nextjournal.clerk.sci_viewer.set_viewers_BANG_ = (function nextjournal$clerk$sci_viewer$set_viewers_BANG_(scope,viewers){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nextjournal.clerk.sci_viewer._BANG_viewers,cljs.core.assoc,scope,cljs.core.vec(viewers));

return new cljs.core.Symbol(null,"set-viewers!","set-viewers!",-745204889,null);
});
nextjournal.clerk.sci_viewer.render_with_viewer = (function nextjournal$clerk$sci_viewer$render_with_viewer(opts,viewer,value){
if(((cljs.core.fn_QMARK_(viewer)) || (nextjournal.clerk.viewer.viewer_fn_QMARK_(viewer)))){
return (viewer.cljs$core$IFn$_invoke$arity$2 ? viewer.cljs$core$IFn$_invoke$arity$2(value,opts) : viewer.call(null,value,opts));
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.map_QMARK_(viewer);
if(and__4221__auto__){
return new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(viewer);
} else {
return and__4221__auto__;
}
})())){
var G__75362 = opts;
var G__75363 = new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(viewer);
var G__75364 = value;
return (nextjournal.clerk.sci_viewer.render_with_viewer.cljs$core$IFn$_invoke$arity$3 ? nextjournal.clerk.sci_viewer.render_with_viewer.cljs$core$IFn$_invoke$arity$3(G__75362,G__75363,G__75364) : nextjournal.clerk.sci_viewer.render_with_viewer.call(null,G__75362,G__75363,G__75364));
} else {
var G__75365 = nextjournal.clerk.sci_viewer.error_badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unusable viewer `",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([viewer], 0)),"`, value `",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),"`"], 0));
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75365) : nextjournal.clerk.sci_viewer.html.call(null,G__75365));

}
}
});
nextjournal.clerk.sci_viewer.inspect = (function nextjournal$clerk$sci_viewer$inspect(var_args){
var G__75367 = arguments.length;
switch (G__75367) {
case 1:
return nextjournal.clerk.sci_viewer.inspect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.sci_viewer.inspect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.sci_viewer.inspect.cljs$core$IFn$_invoke$arity$1 = (function (x){
var with_let75371 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let75371","with-let75371",220329512));
var temp__5757__auto___75599 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___75599 == null)){
} else {
var c__57349__auto___75600 = temp__5757__auto___75599;
if((with_let75371.generation === c__57349__auto___75600.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let75371.generation = c__57349__auto___75600.ratomGeneration);
}

var init75372 = (with_let75371.length === (0));
var _BANG_expanded_at = ((((init75372) || (cljs.core.not(with_let75371.hasOwnProperty((0))))))?(with_let75371[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","expanded-at","nextjournal/expanded-at",-1490351009).cljs$core$IFn$_invoke$arity$1(x))):(with_let75371[(0)]));
var res75373 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694),_BANG_expanded_at], null),x], null);
return res75373;
}));

(nextjournal.clerk.sci_viewer.inspect.cljs$core$IFn$_invoke$arity$2 = (function (opts,x){
if(cljs.core.truth_(module$node_modules$react$index.isValidElement(x))){
return x;
} else {
var value = nextjournal.clerk.viewer.__GT_value(x);
var viewer = nextjournal.clerk.viewer.__GT_viewer(x);
return nextjournal.clerk.sci_viewer.inspect.cljs$core$IFn$_invoke$arity$2(opts,nextjournal.clerk.sci_viewer.render_with_viewer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),viewer], null),new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249).cljs$core$IFn$_invoke$arity$1(x)], 0)),viewer,value));
}
}));

(nextjournal.clerk.sci_viewer.inspect.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.sci_viewer.in_process_fetch = (function nextjournal$clerk$sci_viewer$in_process_fetch(value,opts){
return Promise.resolve(nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2(value,opts));
});
nextjournal.clerk.sci_viewer.inspect_paginated = (function nextjournal$clerk$sci_viewer$inspect_paginated(value){
var with_let75386 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let75386","with-let75386",1768432105));
var temp__5757__auto___75601 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___75601 == null)){
} else {
var c__57349__auto___75602 = temp__5757__auto___75601;
if((with_let75386.generation === c__57349__auto___75602.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let75386.generation = c__57349__auto___75602.ratomGeneration);
}

var init75387 = (with_let75386.length === (0));
var _BANG_state = ((((init75387) || (cljs.core.not(with_let75386.hasOwnProperty((0))))))?(with_let75386[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let75386[(0)]));
var res75392 = (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_state)),value)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"desc","desc",2093485764),nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1(value)], 0));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.provide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),(function (fetch_opts){
return nextjournal.clerk.sci_viewer.in_process_fetch(value,fetch_opts).then((function (more){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.update,new cljs.core.Keyword(null,"desc","desc",2093485764),nextjournal.clerk.viewer.merge_presentations,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0));
}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_state))], null)], null);
})()
;
return res75392;
});
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.clerk.sci-viewer","blobs","nextjournal.clerk.sci-viewer/blobs",204362617),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$1((30))),new cljs.core.Keyword(null,"vector-nested","vector-nested",1678197380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),(3)], null),new cljs.core.Keyword(null,"vector-nested-taco","vector-nested-taco",1488065702),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"\uD83C\uDF2E","\uD83C\uDF2E",529127498,null)], null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.range.cljs$core$IFn$_invoke$arity$1((30)),new cljs.core.Keyword(null,"recursive-range","recursive-range",-701004428),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.range,cljs.core.range.cljs$core$IFn$_invoke$arity$1((100))),new cljs.core.Keyword(null,"map-1","map-1",-1125718495),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"world","world",-418292623)], null),new cljs.core.Keyword(null,"map-vec-val","map-vec-val",-1261877705),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623)], null)], null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1((30)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((30)))], null)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),1215753651,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var temp__5753__auto__ = cljs.core.deref(re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal.clerk.sci-viewer","blobs","nextjournal.clerk.sci-viewer/blobs",204362617),new cljs.core.Keyword(null,"map-1","map-1",-1125718495)], null)], 0)));
if(cljs.core.truth_(temp__5753__auto__)){
var value = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,value], null);
} else {
return null;
}
})()], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"inspect-paginated-one"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.clerk.sci-viewer","blobs","nextjournal.clerk.sci-viewer/blobs",204362617),cljs.core.PersistentHashMap.fromArrays([cljs.core.random_uuid(),cljs.core.random_uuid(),cljs.core.random_uuid()],[cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$1((30))),cljs.core.range.cljs$core$IFn$_invoke$arity$1((40)),cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1((50)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((50)))])], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"In process inspect based on description.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),1016190851,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__75407){
var vec__75408 = p__75407;
var blob_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75408,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75408,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,xs], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),blob_id], null));
}),cljs.core.deref(re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal.clerk.sci-viewer","blobs","nextjournal.clerk.sci-viewer/blobs",204362617)], null)], 0))))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"inspect-paginated-more"], 0)));

re_frame.context.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nextjournal.clerk.sci-viewer","blobs","nextjournal.clerk.sci-viewer/blobs",204362617),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__75411){
var vec__75412 = p__75411;
var blob_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75412,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75412,(1),null);
var G__75415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,blob_key);
if(cljs.core.truth_(id)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__75415,id);
} else {
return G__75415;
}
})], 0));
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4622__auto__ = (function nextjournal$clerk$sci_viewer$iter__75416(s__75417){
return (new cljs.core.LazySeq(null,(function (){
var s__75417__$1 = s__75417;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75417__$1);
if(temp__5753__auto__){
var s__75417__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75417__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__75417__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__75419 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__75418 = (0);
while(true){
if((i__75418 < size__4621__auto__)){
var value = cljs.core._nth(c__4620__auto__,i__75418);
cljs.core.chunk_append(b__75419,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3.result-viewer","div.mb-3.result-viewer",896613001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.inspected-value","code.inspected-value",521789178),(function (){var _STAR_print_meta_STAR__orig_val__75420 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__75421 = true;
(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75421);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75420);
}})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227)," => "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,value], null)], null));

var G__75642 = (i__75418 + (1));
i__75418 = G__75642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75419),nextjournal$clerk$sci_viewer$iter__75416(cljs.core.chunk_rest(s__75417__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75419),null);
}
} else {
var value = cljs.core.first(s__75417__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3.result-viewer","div.mb-3.result-viewer",896613001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.inspected-value","code.inspected-value",521789178),(function (){var _STAR_print_meta_STAR__orig_val__75422 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__75423 = true;
(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__75423);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__75422);
}})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227)," => "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,value], null)], null),nextjournal$clerk$sci_viewer$iter__75416(cljs.core.rest(s__75417__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(123),NaN,new cljs.core.Symbol(null,"symbol","symbol",601958831,null),new cljs.core.Keyword("nextjournal.clerk.sci-viewer","keyword","nextjournal.clerk.sci-viewer/keyword",-1086411284),"a string",null,true,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"map"], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"of","of",-434882685,null),new cljs.core.Symbol(null,"symbols","symbols",1641743270,null)], null),cljs.core.list(new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"of","of",-2075414212),new cljs.core.Keyword(null,"keywords","keywords",1526959054)),cljs.core.random_uuid(),(function nextjournal$clerk$sci_viewer$a_function(_foo){
return null;
})], null));
})());
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"inspect-values"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.vl(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(650),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"https://vega.github.io/vega-datasets/data/us-10m.json",new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"topojson",new cljs.core.Keyword(null,"feature","feature",27242652),"counties"], null)], null),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),"id",new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://vega.github.io/vega-datasets/data/unemployment.tsv"], null),new cljs.core.Keyword(null,"key","key",-1516042587),"id",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rate"], null)], null)], null)], null),new cljs.core.Keyword(null,"projection","projection",-412523042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"albersUsa"], null),new cljs.core.Keyword(null,"mark","mark",-373816345),"geoshape",new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"rate",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative"], null)], null)], null))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-vega-lite"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.plotly(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))),new cljs.core.Keyword(null,"name","name",1843675177),"The Federation"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))),new cljs.core.Keyword(null,"name","name",1843675177),"The Empire"], null)], null)], null))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-plolty"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.tex("G_{\\mu\\nu}\\equiv R_{\\mu\\nu} - {\\textstyle 1 \\over 2}R\\,g_{\\mu\\nu} = {8 \\pi G \\over c^4} T_{\\mu\\nu}")], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-latex"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mathjax","mathjax",-1009833386),"G_{\\mu\\nu}\\equiv R_{\\mu\\nu} - {\\textstyle 1 \\over 2}R\\,g_{\\mu\\nu} = {8 \\pi G \\over c^4} T_{\\mu\\nu}")], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-mathjax"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.md("### Hello Markdown\n\n* a bullet point")], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-markdown"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.code("(defn the-answer\n  \"to all questions\"\n  []\n  (inc #_ #readme/as :ignore 41)")], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-code"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,(function (){var G__75438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello Hiccup \uD83D\uDC4B"], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75438) : nextjournal.clerk.sci_viewer.html.call(null,G__75438));
})()], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-hiccup"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple counter component in reagent using `reagent.core/with-let`.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reagent","reagent",2131627322),(function (){
var with_let75446 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let75446","with-let75446",-1937626231));
var temp__5757__auto___75718 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___75718 == null)){
} else {
var c__57349__auto___75724 = temp__5757__auto___75718;
if((with_let75446.generation === c__57349__auto___75724.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let75446.generation = c__57349__auto___75724.ratomGeneration);
}

var init75447 = (with_let75446.length === (0));
var c = ((((init75447) || (cljs.core.not(with_let75446.hasOwnProperty((0))))))?(with_let75446[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let75446[(0)]));
var res75448 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Count: ",cljs.core.deref(c)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rounded.bg-blue-500.text-white.py-2.px-4.font-bold.mr-2","button.rounded.bg-blue-500.text-white.py-2.px-4.font-bold.mr-2",1953808527),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.inc);
})], null),"increment"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rounded.bg-blue-500.text-white.py-2.px-4.font-bold","button.rounded.bg-blue-500.text-white.py-2.px-4.font-bold",896621627),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.dec);
})], null),"decrement"], null)], null);
return res75448;
}))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"viewer-reagent-component"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Show how to use a function as a viewer, supports both one and two artity versions.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2((function (p1__75454_SHARP_){
var G__75460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.pt-1","div.relative.pt-1",745660052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-hidden.h-2.mb-4-text-xs.flex.rounded.bg-blue-200","div.overflow-hidden.h-2.mb-4-text-xs.flex.rounded.bg-blue-200",-1237071266),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shadow-none.flex.flex-col.text-center.whitespace-nowrap.text-white.bg-blue-500","div.shadow-none.flex.flex-col.text-center.whitespace-nowrap.text-white.bg-blue-500",763978645),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__4309__auto__ = (function (){var x__4306__auto__ = ((p1__75454_SHARP_ * (100)) | (0));
var y__4307__auto__ = (0);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
var y__4310__auto__ = (100);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})()),"%"].join('')], null)], null)], null)], null)], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75460) : nextjournal.clerk.sci_viewer.html.call(null,G__75460));
}),0.33)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2((function (v,_opts){
var G__75464 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.pt-1","div.relative.pt-1",745660052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-hidden.h-2.mb-4-text-xs.flex.rounded.bg-blue-200","div.overflow-hidden.h-2.mb-4-text-xs.flex.rounded.bg-blue-200",-1237071266),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shadow-none.flex.flex-col.text-center.whitespace-nowrap.text-white.bg-blue-500","div.shadow-none.flex.flex-col.text-center.whitespace-nowrap.text-white.bg-blue-500",763978645),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__4309__auto__ = (function (){var x__4306__auto__ = ((v * (100)) | (0));
var y__4307__auto__ = (0);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})();
var y__4310__auto__ = (100);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})()),"%"].join('')], null)], null)], null)], null)], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75464) : nextjournal.clerk.sci_viewer.html.call(null,G__75464));
}),0.35)], null)], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"progress-bar"], 0)));

nextjournal.clerk.sci_viewer.root = (function nextjournal$clerk$sci_viewer$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_doc)], null),(cljs.core.truth_(cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-0.left-0.w-full.h-full","div.fixed.top-0.left-0.w-full.h-full",1721394456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_error)], null)], null):null)], null);
});
nextjournal.clerk.sci_viewer.set_state = (function nextjournal$clerk$sci_viewer$set_state(p__75470){
var map__75471 = p__75470;
var map__75471__$1 = cljs.core.__destructure_map(map__75471);
var state = map__75471__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75471__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75471__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var remount_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75471__$1,new cljs.core.Keyword(null,"remount?","remount?",1072689773));
if(cljs.core.truth_(remount_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer._BANG_eval_counter,cljs.core.inc);
} else {
}

if(cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"doc","doc",1913296891))){
cljs.core.reset_BANG_(nextjournal.clerk.sci_viewer._BANG_doc,doc);
} else {
}

cljs.core.reset_BANG_(nextjournal.clerk.sci_viewer._BANG_error,error);

var temp__5757__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_value(doc));
if((temp__5757__auto__ == null)){
return null;
} else {
var title = temp__5757__auto__;
return (document.title = title);
}
});
goog.exportSymbol('nextjournal.clerk.sci_viewer.set_state', nextjournal.clerk.sci_viewer.set_state);
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Viewers that are lists are evaluated using sci.",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.__GT_viewer_fn(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Ohai, ",new cljs.core.Symbol(null,"x","x",-555367584,null),"! \uD83D\uDC4B"], null)))),"Hans")], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"eval-viewer"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal.devcards","class","nextjournal.devcards/class",1598709868),"p-0",new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.map.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.inspect_wrapped_value,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),"# Hello Markdown\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit nulla, sodales eu lorem ut, tincidunt consectetur diam. Donec in scelerisque risus. Suspendisse potenti. Nunc non hendrerit odio, at malesuada erat. Aenean rutrum quam sed velit mollis imperdiet. Sed lacinia quam eget tempor tempus. Mauris et leo ac odio condimentum facilisis eu sed nibh. Morbi sed est sit amet risus blandit ullam corper. Pellentesque nisi metus, feugiat sed velit ut, dignissim finibus urna."),nextjournal.clerk.viewer.code("(shuffle (range 10))"),nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("clerk","code-block","clerk/code-block",-2085230478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"(+ 1 2 3)"], null)),nextjournal.clerk.viewer.md("# And some more\n And some more [markdown](https://daringfireball.net/projects/markdown/)."),nextjournal.clerk.viewer.code("(shuffle (range 10))"),nextjournal.clerk.viewer.md("## Some math \n This is a formula."),nextjournal.clerk.viewer.tex("G_{\\mu\\nu}\\equiv R_{\\mu\\nu} - {\\textstyle 1 \\over 2}R\\,g_{\\mu\\nu} = {8 \\pi G \\over c^4} T_{\\mu\\nu}"),nextjournal.clerk.viewer.plotly(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))),new cljs.core.Keyword(null,"name","name",1843675177),"The Federation"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))),new cljs.core.Keyword(null,"name","name",1843675177),"The Empire"], null)], null)], null))], null))], null)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),"Shows how to display a notebook document",new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),2011200337,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (doc){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("clerk","notebook","clerk/notebook",699315010),cljs.core.deref(doc))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"notebook"], 0)));

nextjournal.clerk.sci_viewer._STAR_viewers_STAR_ = null;
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.with_viewers(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),nextjournal.clerk.viewer.__GT_viewer_fn(cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__75477#","p1__75477#",956528252,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16)], null),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"p1__75477#","p1__75477#",956528252,null)),"bg-black","bg-white border-solid border-2 border-\nblack")], null)], null))))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),nextjournal.clerk.viewer.__GT_viewer_fn(cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__75479#","p1__75479#",-615755685,null),new cljs.core.Symbol(null,"p2__75478#","p2__75478#",-199044793,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.inline-flex","div.flex.inline-flex",1792928195)], null),cljs.core.list(new cljs.core.Symbol("v","inspect-children","v/inspect-children",248950098,null),new cljs.core.Symbol(null,"p2__75478#","p2__75478#",-199044793,null)),new cljs.core.Symbol(null,"p1__75479#","p1__75479#",-615755685,null)))))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),nextjournal.clerk.viewer.__GT_viewer_fn(cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__75481#","p1__75481#",1380447685,null),new cljs.core.Symbol(null,"p2__75480#","p2__75480#",170612245,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761)], null),cljs.core.list(new cljs.core.Symbol("v","inspect-children","v/inspect-children",248950098,null),new cljs.core.Symbol(null,"p2__75480#","p2__75480#",170612245,null)),new cljs.core.Symbol(null,"p1__75481#","p1__75481#",1380447685,null)))))], null)], null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null)))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"inspect-rule-30-sci"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verts","verts",1167738814),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.5], null)], null),new cljs.core.Keyword(null,"invert?","invert?",-1555438900),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verts","verts",1167738814),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.32999999999999996,-0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3383203922298239,-0.44746711095625896], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.36246711095625894,-0.40007650711027953], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.40007650711027953,-0.36246711095625894], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.4474671109562589,-0.3383203922298239], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.32999999999999996], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5525328890437411,-0.3383203922298239], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5999234928897205,-0.36246711095625894], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.6375328890437411,-0.40007650711027953], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.6616796077701761,-0.4474671109562589], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.67,-0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.6616796077701761,-0.5525328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.6375328890437411,-0.5999234928897205], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5999234928897205,-0.6375328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5525328890437411,-0.6616796077701761], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.67], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.44746711095625896,-0.6616796077701761], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.4000765071102796,-0.6375328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.36246711095625894,-0.5999234928897205], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3383203922298239,-0.5525328890437411], null)], null),new cljs.core.Keyword(null,"invert?","invert?",-1555438900),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verts","verts",1167738814),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.67,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6616796077701761,0.5525328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6375328890437411,0.5999234928897205], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5999234928897205,0.6375328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5525328890437411,0.6616796077701761], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.67], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.44746711095625896,0.6616796077701761], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4000765071102796,0.6375328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.36246711095625894,0.5999234928897205], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3383203922298239,0.5525328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.32999999999999996,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3383203922298239,0.4474671109562589], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.36246711095625894,0.4000765071102796], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.40007650711027953,0.36246711095625894], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4474671109562589,0.3383203922298239], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.49999999999999994,0.32999999999999996], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.552532889043741,0.3383203922298239], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5999234928897204,0.36246711095625894], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6375328890437411,0.40007650711027953], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6616796077701761,0.4474671109562589], null)], null),new cljs.core.Keyword(null,"invert?","invert?",-1555438900),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verts","verts",1167738814),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.32999999999999996,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3383203922298239,0.5525328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.36246711095625894,0.5999234928897205], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.40007650711027953,0.6375328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.4474671109562589,0.6616796077701761], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.67], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5525328890437411,0.6616796077701761], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5999234928897205,0.6375328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.6375328890437411,0.5999234928897205], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.6616796077701761,0.5525328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.67,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.6616796077701761,0.4474671109562589], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.6375328890437411,0.4000765071102796], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5999234928897205,0.36246711095625894], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5525328890437411,0.3383203922298239], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.32999999999999996], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.44746711095625896,0.3383203922298239], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.4000765071102796,0.36246711095625894], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.36246711095625894,0.40007650711027953], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.3383203922298239,0.4474671109562589], null)], null),new cljs.core.Keyword(null,"invert?","invert?",-1555438900),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verts","verts",1167738814),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.67,-0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6616796077701761,-0.44746711095625896], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6375328890437411,-0.40007650711027953], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5999234928897205,-0.36246711095625894], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5525328890437411,-0.3383203922298239], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-0.32999999999999996], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.44746711095625896,-0.3383203922298239], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4000765071102796,-0.36246711095625894], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.36246711095625894,-0.40007650711027953], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3383203922298239,-0.4474671109562589], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.32999999999999996,-0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3383203922298239,-0.5525328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.36246711095625894,-0.5999234928897205], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.40007650711027953,-0.6375328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4474671109562589,-0.6616796077701761], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.49999999999999994,-0.67], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.552532889043741,-0.6616796077701761], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5999234928897204,-0.6375328890437411], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6375328890437411,-0.5999234928897205], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6616796077701761,-0.5525328890437411], null)], null),new cljs.core.Keyword(null,"invert?","invert?",-1555438900),true], null))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"clj-long"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (){
var x = cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verts","verts",1167738814),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.5], null)], null),new cljs.core.Keyword(null,"invert?","invert?",-1555438900),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verts","verts",1167738814),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.67,-0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6616796077701761,-0.44746711095625896], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6375328890437411,-0.40007650711027953], null)], null),new cljs.core.Keyword(null,"invert?","invert?",-1555438900),true], null));
var y = cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verts","verts",1167738814),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,-0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.5], null)], null),new cljs.core.Keyword(null,"invert?","invert?",-1555438900),true], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Symbol(null,"\u25CF","\u25CF",-1704331363,null),(2),new cljs.core.Symbol(null,"\u25A0","\u25A0",-2106278282,null),(3),new cljs.core.Symbol(null,"\u25B2","\u25B2",-648688797,null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)])], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(-12)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4.overflow-x-hidden","div.mb-4.overflow-x-hidden",1516166828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,x], null)], null)], null)], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"clj-small"], 0)));

nextjournal.clerk.sci_viewer.mount = (function nextjournal$clerk$sci_viewer$mount(){
var temp__5753__auto__ = document.getElementById("clerk");
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.root], null),el);
} else {
return null;
}
});
goog.exportSymbol('nextjournal.clerk.sci_viewer.mount', nextjournal.clerk.sci_viewer.mount);
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),"ab"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),"cd"], null)], null)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),-425742264,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.table(cljs.core.deref(state))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4)], null)], null)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),2040598490,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.table(cljs.core.deref(state))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table-incomplete"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null)], null)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),-1193876812,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.table(cljs.core.deref(state))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table-col-headers"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4)], null)], null)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),-480332087,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.table(cljs.core.deref(state))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table-col-headers-incomplete"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(4),new cljs.core.Keyword(null,"b","b",1482224470),(5),new cljs.core.Keyword(null,"c","c",-1763192079),(6)], null)], null)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),197062652,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.table(cljs.core.deref(state))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table-row-headers"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(4)], null)], null)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),-1611813280,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.table(cljs.core.deref(state))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table-row-headers-incomplete"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(3),null,(2),null], null), null)], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),1674015940,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.table(cljs.core.deref(state))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table-error"], 0)));

nextjournal.clerk.sci_viewer.rand_int_seq = (function nextjournal$clerk$sci_viewer$rand_int_seq(n,to){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_int(to);
})));
});
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),(function (){var n = (20);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"species","species",-1393763638),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"Adelie"),new cljs.core.Keyword(null,"island","island",623473715),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"Biscoe"),new cljs.core.Keyword(null,"culmen-length-mm","culmen-length-mm",-1557201956),nextjournal.clerk.sci_viewer.rand_int_seq(n,(50)),new cljs.core.Keyword(null,"culmen-depth-mm","culmen-depth-mm",560767599),nextjournal.clerk.sci_viewer.rand_int_seq(n,(30)),new cljs.core.Keyword(null,"flipper-length-mm","flipper-length-mm",778335053),nextjournal.clerk.sci_viewer.rand_int_seq(n,(200)),new cljs.core.Keyword(null,"body-mass-g","body-mass-g",-1752951737),nextjournal.clerk.sci_viewer.rand_int_seq(n,(5000)),new cljs.core.Keyword(null,"sex","sex",-2056008571),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"female","female",1810186049),new cljs.core.Keyword(null,"male","male",-560253338)], null));
})))], null);
})()], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),1681396001,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.deref(state))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table-long"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.devcards","state","nextjournal.devcards/state",1376810469),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat,(200))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null)))], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),2079309039,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.table(cljs.core.deref(state))], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table-elided-string"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.clerk.sci-viewer","blobs","nextjournal.clerk.sci-viewer/blobs",204362617),(function (){var n = (60);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"species","species",-1393763638),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"Adelie"),new cljs.core.Keyword(null,"island","island",623473715),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"Biscoe"),new cljs.core.Keyword(null,"culmen-length-mm","culmen-length-mm",-1557201956),nextjournal.clerk.sci_viewer.rand_int_seq(n,(50)),new cljs.core.Keyword(null,"culmen-depth-mm","culmen-depth-mm",560767599),nextjournal.clerk.sci_viewer.rand_int_seq(n,(30)),new cljs.core.Keyword(null,"flipper-length-mm","flipper-length-mm",778335053),nextjournal.clerk.sci_viewer.rand_int_seq(n,(200)),new cljs.core.Keyword(null,"body-mass-g","body-mass-g",-1752951737),nextjournal.clerk.sci_viewer.rand_int_seq(n,(5000)),new cljs.core.Keyword(null,"sex","sex",-2056008571),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"female","female",1810186049),new cljs.core.Keyword(null,"male","male",-560253338)], null));
})))], null);
})()], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),764281425,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var temp__5753__auto__ = cljs.core.deref(re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal.clerk.sci-viewer","blobs","nextjournal.clerk.sci-viewer/blobs",204362617)], null)], 0)));
if(cljs.core.truth_(temp__5753__auto__)){
var xs = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.table(xs)], null);
} else {
return null;
}
})()], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table-paginated-map-of-seq"], 0)));

nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.clerk.sci-viewer","blobs","nextjournal.clerk.sci-viewer/blobs",204362617),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__75509_SHARP_,p2__75508_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p2__75508_SHARP_,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__75509_SHARP_ + (1)))].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((60),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adelie","Biscoe",(50),(30),(200),(5000),new cljs.core.Keyword(null,"female","female",1810186049)], null)))], null);
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),-1204111157,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var temp__5753__auto__ = cljs.core.deref(re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal.clerk.sci-viewer","blobs","nextjournal.clerk.sci-viewer/blobs",204362617)], null)], 0)));
if(cljs.core.truth_(temp__5753__auto__)){
var xs = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.viewer.table(xs)], null);
} else {
return null;
}
})()], null);
});
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"table-paginated-vec"], 0)));

nextjournal.clerk.sci_viewer.find_named_viewer = (function nextjournal$clerk$sci_viewer$find_named_viewer(viewers,viewer_name){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.identity)),viewers),viewer_name);
});
nextjournal.clerk.sci_viewer.clerk_eval = (function nextjournal$clerk$sci_viewer$clerk_eval(form){
return goog.global.ws_send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)));
});
nextjournal.clerk.sci_viewer.katex_viewer = (function nextjournal$clerk$sci_viewer$katex_viewer(tex_string,p__75510){
var map__75511 = p__75510;
var map__75511__$1 = cljs.core.__destructure_map(map__75511);
var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75511__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var G__75514 = nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$2(tex_string,({"displayMode":cljs.core.not(inline_QMARK_)}));
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__75514) : nextjournal.clerk.sci_viewer.html.call(null,G__75514));
});
nextjournal.clerk.sci_viewer.html_render = (function nextjournal$clerk$sci_viewer$html_render(markup){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(((typeof markup === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markup], null)], null)], null):markup));
});
nextjournal.clerk.sci_viewer.html_viewer = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),nextjournal.clerk.sci_viewer.html_render], null);
nextjournal.clerk.sci_viewer.html = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.sci_viewer.html_viewer);
nextjournal.clerk.sci_viewer.reagent_viewer = (function nextjournal$clerk$sci_viewer$reagent_viewer(x){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((function (){var G__75515 = x;
if(cljs.core.fn_QMARK_(x)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__75515],null));
} else {
return G__75515;
}
})());
});
nextjournal.clerk.sci_viewer.mathjax_viewer = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.normalize_viewer_meta,nextjournal.viewer.mathjax.viewer);
nextjournal.clerk.sci_viewer.code_viewer = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.normalize_viewer_meta,nextjournal.viewer.code.viewer);
nextjournal.clerk.sci_viewer.plotly_viewer = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.normalize_viewer_meta,nextjournal.viewer.plotly.viewer);
nextjournal.clerk.sci_viewer.vega_lite_viewer = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.normalize_viewer_meta,nextjournal.viewer.vega_lite.viewer);
nextjournal.clerk.sci_viewer.expand_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"width","width",-384071477),(12),new cljs.core.Keyword(null,"height","height",1025178622),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.sci_viewer.foldable_code_viewer = (function nextjournal$clerk$sci_viewer$foldable_code_viewer(code_string){
var with_let75517 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let75517","with-let75517",1785617544));
var temp__5757__auto___75783 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___75783 == null)){
} else {
var c__57349__auto___75784 = temp__5757__auto___75783;
if((with_let75517.generation === c__57349__auto___75784.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let75517.generation = c__57349__auto___75784.ratomGeneration);
}

var init75519 = (with_let75517.length === (0));
var _BANG_hidden_QMARK_ = ((((init75519) || (cljs.core.not(with_let75517.hasOwnProperty((0))))))?(with_let75517[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true)):(with_let75517[(0)]));
var res75520 = nextjournal.clerk.sci_viewer.html((cljs.core.truth_(cljs.core.deref(_BANG_hidden_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.max-w-wide.sans-serif","div.w-full.max-w-wide.sans-serif",1379995038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--gray-panel-color)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mx-auto.flex.items-center.rounded-sm.cursor-pointer.bg-indigo-200.hover:bg-indigo-300.leading-none","button.mx-auto.flex.items-center.rounded-sm.cursor-pointer.bg-indigo-200.hover:bg-indigo-300.leading-none",-1807059844),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"padding","padding",1660304693),"1px 3px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_hidden_QMARK_,cljs.core.not);
})], null),nextjournal.clerk.sci_viewer.expand_icon," Show code\u2026"], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-code.relative","div.viewer-code.relative",144230260),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,nextjournal.clerk.sci_viewer.code_viewer(code_string)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.sans-serif.mx-auto.flex.items-center.rounded-t-sm.cursor-pointer.bg-indigo-200.hover:bg-indigo-300.leading-none.absolute.bottom-0","button.sans-serif.mx-auto.flex.items-center.rounded-t-sm.cursor-pointer.bg-indigo-200.hover:bg-indigo-300.leading-none.absolute.bottom-0",-1849994947),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"padding","padding",1660304693),"1px 3px",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-50%)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_hidden_QMARK_,cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(180deg)"], null)], null),nextjournal.clerk.sci_viewer.expand_icon], null)," Hide code\u2026"], null)], null)));
return res75520;
});
nextjournal.clerk.sci_viewer.url_for = (function nextjournal$clerk$sci_viewer$url_for(p__75524){
var map__75525 = p__75524;
var map__75525__$1 = cljs.core.__destructure_map(map__75525);
var src = map__75525__$1;
var blob_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75525__$1,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970));
if(typeof src === 'string'){
return src;
} else {
return ["/_blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blob_id),(function (){var temp__5753__auto__ = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(src,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970)));
if(temp__5753__auto__){
var opts = temp__5753__auto__;
return ["?",nextjournal.clerk.sci_viewer.opts__GT_query(opts)].join('');
} else {
return null;
}
})()].join('');
}
});
/**
 * Stub implementation to be replaced during static site generation. Clerk is only serving one page currently.
 */
nextjournal.clerk.sci_viewer.doc_url = sci.core.new_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"doc-url","doc-url",-1594574639,null),(function (x){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}));
nextjournal.devcards.register_devcard_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){
return null;
}),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"compile-key","compile-key",1675526230),0,new cljs.core.Keyword(null,"main","main",-2117802661),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_paginated,new cljs.core.Var(function(){return nextjournal.clerk.sci_viewer.doc_url;},new cljs.core.Symbol("nextjournal.clerk.sci-viewer","doc-url","nextjournal.clerk.sci-viewer/doc-url",-820587218,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"nextjournal.clerk.sci-viewer","nextjournal.clerk.sci-viewer",1325183955,null),new cljs.core.Symbol(null,"doc-url","doc-url",-1594574639,null),"nextjournal/clerk/sci_viewer.cljs",10,1,1102,1103,cljs.core.List.EMPTY,"Stub implementation to be replaced during static site generation. Clerk is only serving one page currently.",(cljs.core.truth_(nextjournal.clerk.sci_viewer.doc_url)?nextjournal.clerk.sci_viewer.doc_url.cljs$lang$test:null)]))], null);
})], null),new cljs.core.Keyword(null,"ns","ns",441598760),"nextjournal.clerk.sci-viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),"inspected-sci-var"], 0)));

nextjournal.clerk.sci_viewer.sci_viewer_namespace = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"katex-viewer","katex-viewer",2004115574,null),new cljs.core.Symbol(null,"clerk-eval","clerk-eval",-1698654052,null),new cljs.core.Symbol(null,"consume-view-context","consume-view-context",1580793251,null),new cljs.core.Symbol(null,"coll-viewer","coll-viewer",-1280598194,null),new cljs.core.Symbol(null,"map-viewer","map-viewer",-1236941263,null),new cljs.core.Symbol(null,"number-viewer","number-viewer",1292682692,null),new cljs.core.Symbol(null,"unreadable-edn-viewer","unreadable-edn-viewer",-1057394702,null),new cljs.core.Symbol(null,"plotly-viewer","plotly-viewer",746101319,null),new cljs.core.Symbol(null,"code-viewer","code-viewer",1979928782,null),new cljs.core.Symbol(null,"result-viewer","result-viewer",-341122584,null),new cljs.core.Symbol(null,"reagent-viewer","reagent-viewer",-1176806495,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"notebook-viewer","notebook-viewer",-1214195350,null),new cljs.core.Symbol(null,"with-viewer","with-viewer",-1694579498,null),new cljs.core.Symbol(null,"tagged-value","tagged-value",-110559503,null),new cljs.core.Symbol(null,"with-d3-require","with-d3-require",1881546427,null),new cljs.core.Symbol(null,"table","table",1075588491,null),new cljs.core.Symbol(null,"foldable-code-viewer","foldable-code-viewer",850003550,null),new cljs.core.Symbol(null,"inspect","inspect",-1965641712,null),new cljs.core.Symbol(null,"vega-lite-viewer","vega-lite-viewer",2144084555,null),new cljs.core.Symbol(null,"vl","vl",-569341961,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.Symbol(null,"with-viewers","with-viewers",-1936045103,null),new cljs.core.Symbol(null,"url-for","url-for",-246007553,null),new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),new cljs.core.Symbol(null,"string-viewer","string-viewer",-607088827,null),new cljs.core.Symbol(null,"inspect-paginated","inspect-paginated",1092423484,null),new cljs.core.Symbol(null,"set-viewers!","set-viewers!",-745204889,null),new cljs.core.Symbol(null,"doc-url","doc-url",-1594574639,null),new cljs.core.Symbol(null,"inspect-children","inspect-children",248949464,null),new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.Symbol(null,"quoted-string-viewer","quoted-string-viewer",-2051886522,null),new cljs.core.Symbol(null,"md","md",-1947149114,null),new cljs.core.Symbol(null,"table-error","table-error",1752759269,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"mathjax-viewer","mathjax-viewer",1826404592,null),new cljs.core.Symbol(null,"throwable-viewer","throwable-viewer",1465154138,null),new cljs.core.Symbol(null,"elision-viewer","elision-viewer",194263113,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"plotly","plotly",-1836810311,null)],[nextjournal.clerk.sci_viewer.katex_viewer,nextjournal.clerk.sci_viewer.clerk_eval,nextjournal.view.context.consume,nextjournal.clerk.sci_viewer.coll_viewer,nextjournal.clerk.sci_viewer.map_viewer,nextjournal.clerk.sci_viewer.number_viewer,nextjournal.clerk.sci_viewer.unreadable_edn_viewer,nextjournal.clerk.sci_viewer.plotly_viewer,nextjournal.clerk.sci_viewer.code_viewer,nextjournal.clerk.sci_viewer.result_viewer,nextjournal.clerk.sci_viewer.reagent_viewer,nextjournal.clerk.viewer.col,nextjournal.clerk.sci_viewer.notebook,nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.sci_viewer.tagged_value,nextjournal.ui.components.d3_require.with$,nextjournal.clerk.viewer.table,nextjournal.clerk.sci_viewer.foldable_code_viewer,nextjournal.clerk.sci_viewer.inspect,nextjournal.clerk.sci_viewer.vega_lite_viewer,nextjournal.clerk.viewer.vl,nextjournal.clerk.viewer.code,nextjournal.clerk.viewer.with_viewers,nextjournal.clerk.sci_viewer.url_for,nextjournal.clerk.sci_viewer.read_string,nextjournal.clerk.sci_viewer.string_viewer,nextjournal.clerk.sci_viewer.inspect_paginated,nextjournal.clerk.sci_viewer.set_viewers_BANG_,nextjournal.clerk.sci_viewer.doc_url,nextjournal.clerk.sci_viewer.inspect_children,nextjournal.clerk.viewer.row,nextjournal.clerk.sci_viewer.quoted_string_viewer,nextjournal.clerk.viewer.md,nextjournal.clerk.sci_viewer.table_error,nextjournal.clerk.sci_viewer.html_render,nextjournal.clerk.sci_viewer.mathjax_viewer,nextjournal.clerk.sci_viewer.throwable_viewer,nextjournal.clerk.sci_viewer.elision_viewer,nextjournal.clerk.viewer.tex,nextjournal.clerk.viewer.plotly]);
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.sci_viewer !== 'undefined') && (typeof nextjournal.clerk.sci_viewer._BANG_sci_ctx !== 'undefined')){
} else {
nextjournal.clerk.sci_viewer._BANG_sci_ctx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(sci.core.init(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async?","async?",1523057758),true,new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206),true,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"js","js",-886355190,null),goog.global,new cljs.core.Symbol(null,"framer-motion","framer-motion",718962013,null),module$node_modules$framer_motion$dist$cjs$index,new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null),new cljs.core.Keyword(null,"aliases","aliases",1346874714),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"j","j",242556762,null),new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"reagent","reagent",-522808447,null),new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"nextjournal.clerk.sci-viewer","nextjournal.clerk.sci-viewer",1325183955,null)], null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"nextjournal.clerk.sci-viewer","nextjournal.clerk.sci-viewer",1325183955,null),nextjournal.clerk.sci_viewer.sci_viewer_namespace], null),sci.configs.applied_science.js_interop.namespaces,sci.configs.reagent.reagent.namespaces], 0))], null)));
}
nextjournal.clerk.sci_viewer.eval_form = (function nextjournal$clerk$sci_viewer$eval_form(f){
return sci.core.eval_form(cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_sci_ctx),f);
});
(cljs.core._STAR_eval_STAR_ = nextjournal.clerk.sci_viewer.eval_form);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer._BANG_viewers,(function (viewers){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__75528_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.process_render_fn),p1__75528_SHARP_);
}),cljs.core.val))),viewers),new cljs.core.Keyword(null,"root","root",-448657453),cljs.core.concat,nextjournal.clerk.sci_viewer.js_viewers);
}));

//# sourceMappingURL=nextjournal.clerk.sci_viewer.js.map
