goog.provide('nextjournal.view');
nextjournal.view.memoized_frame_fn = (function nextjournal$view$memoized_frame_fn(component,memo_key,ctx_function){
var val__55756__auto__ = (function (){var obj60030 = component;
if((!((obj60030 == null)))){
return (obj60030[memo_key]);
} else {
return undefined;
}
})();
if((void 0 === val__55756__auto__)){
var f = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ctx_function,(function (){var obj60031 = component;
if((!((obj60031 == null)))){
return (obj60031["context"]);
} else {
return undefined;
}
})());
var obj60032_60123 = component;
var obj60033_60124 = (((!((obj60032_60123 == null))))?obj60032_60123:({}));
(obj60033_60124[memo_key] = f);


return f;
} else {
return val__55756__auto__;
}
});
/**
 * Reads a key from `component`
 */
nextjournal.view.get_key = (function nextjournal$view$get_key(component,k,not_found){
var G__60037 = k;
var G__60037__$1 = (((G__60037 instanceof cljs.core.Keyword))?G__60037.fqn:null);
switch (G__60037__$1) {
case "nextjournal.view/props":
return reagent.core.props(component);

break;
case "nextjournal.view/state":
return reagent.core.state_atom(component);

break;
case "nextjournal.view/argv":
return reagent.core.argv(component);

break;
case "re-frame.context/frame":
var obj60039 = component;
if((!((obj60039 == null)))){
return (obj60039["context"]);
} else {
return undefined;
}

break;
case "re-frame.context/subscribe":
return nextjournal.view.memoized_frame_fn(component,"rf_subscribe",re_frame.frame.subscribe);

break;
case "re-frame.context/dispatch":
return nextjournal.view.memoized_frame_fn(component,"rf_dispatch",re_frame.frame.dispatch);

break;
case "re-frame.context/dispatch-sync":
return nextjournal.view.memoized_frame_fn(component,"rf_dispatch_sync",re_frame.frame.dispatch_sync);

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(reagent.core.props(component),k,not_found);

}
});
nextjournal.view.wrap_render = (function nextjournal$view$wrap_render(f){
return (function (c){
var argv = reagent.impl.component.get_argv(c);
var props_QMARK_ = (!((reagent.core.props(c) == null)));
var n = cljs.core.count(argv);
var first_child = ((props_QMARK_)?(2):(1));
var extra_children = ((props_QMARK_)?(n - (2)):(n - (1)));
var G__60042 = extra_children;
switch (G__60042) {
case (0):
return f.call(c,c);

break;
case (1):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child));

break;
case (2):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((1) + first_child)));

break;
case (3):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((1) + first_child)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((2) + first_child)));

break;
case (4):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((1) + first_child)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((2) + first_child)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((3) + first_child)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(argv).slice((1)));

}
});
});
nextjournal.view.constructor_fn = (function nextjournal$view$constructor_fn(p__60044){
var map__60045 = p__60044;
var map__60045__$1 = cljs.core.__destructure_map(map__60045);
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60045__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60045__$1,new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643));
return (function (this$,p__60049){
var map__60051 = p__60049;
var map__60051__$1 = (((((!((map__60051 == null))))?(((((map__60051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60051):map__60051);
var props = map__60051__$1;
var argv = (function (){var obj60055 = map__60051__$1;
if((!((obj60055 == null)))){
return (obj60055[goog.reflect.objectProperty("argv",obj60055)]);
} else {
return undefined;
}
})();
var x60058_60142 = this$;
(x60058_60142.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(x60058_60142.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var o__$1 = this;
return nextjournal.view.get_key(o__$1,k,null);
}));

(x60058_60142.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var o__$1 = this;
return nextjournal.view.get_key(o__$1,k,not_found);
}));


var temp__5757__auto___60144 = (function (){var or__4223__auto__ = (function (){var G__60062 = argv;
var G__60062__$1 = (((G__60062 == null))?null:reagent.impl.component.extract_props(G__60062));
if((G__60062__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643).cljs$core$IFn$_invoke$arity$1(G__60062__$1);
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return initial_state;
}
})();
if((temp__5757__auto___60144 == null)){
} else {
var initial_state_60146__$1 = temp__5757__auto___60144;
var state_60147 = ((cljs.core.fn_QMARK_(initial_state_60146__$1))?(initial_state_60146__$1.cljs$core$IFn$_invoke$arity$1 ? initial_state_60146__$1.cljs$core$IFn$_invoke$arity$1(this$) : initial_state_60146__$1.call(null,this$)):initial_state_60146__$1);
var state_atom_60148 = (function (){var G__60063 = state_60147;
if((!((state_60147 instanceof reagent.ratom.RAtom)))){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(G__60063);
} else {
return G__60063;
}
})();
(this$.cljsState = state_atom_60148);
}

if(cljs.core.truth_(constructor$)){
(constructor$.cljs$core$IFn$_invoke$arity$2 ? constructor$.cljs$core$IFn$_invoke$arity$2(this$,props) : constructor$.call(null,this$,props));
} else {
}

return this$;
});
});
nextjournal.view.wrap_methods = (function nextjournal$view$wrap_methods(m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),nextjournal.view.constructor_fn(m));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.view !== 'undefined') && (typeof nextjournal.view._STAR_notify_watches_QMARK__STAR_ !== 'undefined')){
} else {
nextjournal.view._STAR_notify_watches_QMARK__STAR_ = (function (){
if((typeof window !== 'undefined')){
var obj60066_60149 = window;
var obj60066_60150__$1 = (((!((obj60066_60149 == null))))?obj60066_60149:({}));
var inner_obj__55864__auto___60151 = (function (){var child60068 = (function (){var child60067 = obj60066_60150__$1.reagent;
if((!((child60067 == null)))){
return child60067;
} else {
var new_child__55813__auto__ = ({});
var obj60073_60153 = obj60066_60150__$1;
(obj60073_60153.reagent = new_child__55813__auto__);


return new_child__55813__auto__;
}
})().ratom;
if((!((child60068 == null)))){
return child60068;
} else {
var new_child__55813__auto__ = ({});
var obj60076_60154 = (function (){var child60067 = obj60066_60150__$1.reagent;
if((!((child60067 == null)))){
return child60067;
} else {
var new_child__55813__auto____$1 = ({});
var obj60081_60157 = obj60066_60150__$1;
(obj60081_60157.reagent = new_child__55813__auto____$1);


return new_child__55813__auto____$1;
}
})();
(obj60076_60154.ratom = new_child__55813__auto__);


return new_child__55813__auto__;
}
})();
var o__55858__auto___60158 = inner_obj__55864__auto___60151;
var o__55852__auto___60160 = (((!((o__55858__auto___60158 == null))))?o__55858__auto___60158:({}));
var obj60086_60162 = o__55852__auto___60160;
(obj60086_60162.notify_w = (function (notify_w){
return (function (this$,old,new$){
if(nextjournal.view._STAR_notify_watches_QMARK__STAR_ === true){
return (notify_w.cljs$core$IFn$_invoke$arity$3 ? notify_w.cljs$core$IFn$_invoke$arity$3(this$,old,new$) : notify_w.call(null,this$,old,new$));
} else {
return null;
}
});
})(o__55852__auto___60160.notify_w));


} else {
}

return true;
})()
;
}
/**
 * Swap a reactive atom, without causing dependent components to re-render.
 */
nextjournal.view.swap_silently_BANG_ = (function nextjournal$view$swap_silently_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___60164 = arguments.length;
var i__4830__auto___60165 = (0);
while(true){
if((i__4830__auto___60165 < len__4829__auto___60164)){
args__4835__auto__.push((arguments[i__4830__auto___60165]));

var G__60166 = (i__4830__auto___60165 + (1));
i__4830__auto___60165 = G__60166;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return nextjournal.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(nextjournal.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_notify_watches_QMARK__STAR__orig_val__60114 = nextjournal.view._STAR_notify_watches_QMARK__STAR_;
var _STAR_notify_watches_QMARK__STAR__temp_val__60115 = false;
(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__temp_val__60115);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__orig_val__60114);
}}));

(nextjournal.view.swap_silently_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.view.swap_silently_BANG_.cljs$lang$applyTo = (function (seq60092){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60092));
}));

nextjournal.view.reset_silently_BANG_ = (function nextjournal$view$reset_silently_BANG_(ratom,value){
var _STAR_notify_watches_QMARK__STAR__orig_val__60119 = nextjournal.view._STAR_notify_watches_QMARK__STAR_;
var _STAR_notify_watches_QMARK__STAR__temp_val__60120 = false;
(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__temp_val__60120);

try{return cljs.core.reset_BANG_(ratom,value);
}finally {(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__orig_val__60119);
}});

//# sourceMappingURL=nextjournal.view.js.map
