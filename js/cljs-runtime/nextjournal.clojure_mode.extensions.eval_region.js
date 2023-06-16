goog.provide('nextjournal.clojure_mode.extensions.eval_region');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
/**
 * Returns node or its highest ancestor that starts or ends at the cursor position.
 */
nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here = (function nextjournal$clojure_mode$extensions$eval_region$uppermost_edge_here(pos,node){
var or__4223__auto__ = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_),(function (p1__60285_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.end(p1__60285_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.end(node)], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.start(p1__60285_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.start(node)], 0))));
})),cljs.core.iterate(nextjournal.clojure_mode.node.up,node)));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.extensions.eval_region.main_selection = (function nextjournal$clojure_mode$extensions$eval_region$main_selection(state){
var obj60302 = (function (){var obj60301 = (function (){var parent__55888__auto__ = (state["selection"]);
var f__55889__auto__ = (parent__55888__auto__["asSingle"]);
return f__55889__auto__.call(parent__55888__auto__);
})();
if((!((obj60301 == null)))){
return (obj60301["ranges"]);
} else {
return undefined;
}
})();
if((!((obj60302 == null)))){
return (obj60302[(0)]);
} else {
return undefined;
}
});
nextjournal.clojure_mode.extensions.eval_region.node_at_cursor = (function nextjournal$clojure_mode$extensions$eval_region$node_at_cursor(var_args){
var G__60310 = arguments.length;
switch (G__60310) {
case 1:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1 = (function (state){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2(state,(function (){var obj60315 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj60315 == null)))){
return (obj60315["from"]);
} else {
return undefined;
}
})());
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2 = (function (state,from){
var G__60318 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
var G__60318__$1 = (((G__60318 == null))?null:(function (p1__60305_SHARP_){
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__60305_SHARP_))) || ((((nextjournal.clojure_mode.node.start(p1__60305_SHARP_) <= from)) || ((nextjournal.clojure_mode.node.end(p1__60305_SHARP_) <= from)))))){
var G__60325 = p1__60305_SHARP_;
if(((nextjournal.clojure_mode.node.top_QMARK_(p1__60305_SHARP_)) || ((((!(nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__60305_SHARP_))))) && ((((nextjournal.clojure_mode.node.start(p1__60305_SHARP_) < from)) && ((from < nextjournal.clojure_mode.node.end(p1__60305_SHARP_))))))))){
return cljs.core.first(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__60325,from,(-1)));
} else {
return G__60325;
}
} else {
return null;
}
})(G__60318));
var G__60318__$2 = (((G__60318__$1 == null))?null:nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here(from,G__60318__$1));
if((G__60318__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__60318__$2);
}
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.extensions.eval_region.top_level_node = (function nextjournal$clojure_mode$extensions$eval_region$top_level_node(state){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_)),cljs.core.iterate(nextjournal.clojure_mode.node.up,nextjournal.clojure_mode.node.nearest_touching(state,(function (){var obj60329 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj60329 == null)))){
return (obj60329["from"]);
} else {
return undefined;
}
})(),(-1)))));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_effect !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_effect = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.define();
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY),"update":(function (value,tr){
var or__4223__auto__ = (function (){var G__60332 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60330_SHARP_){
return p1__60330_SHARP_.is(nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
}),tr.effects));
if((G__60332 == null)){
return null;
} else {
var obj60333 = G__60332;
if((!((obj60333 == null)))){
return (obj60333["value"]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return value;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_modifier_field = (function nextjournal$clojure_mode$extensions$eval_region$get_modifier_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.modifier_field);
});
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_ = (function nextjournal$clojure_mode$extensions$eval_region$set_modifier_field_BANG_(p__60334,value){
var map__60335 = p__60334;
var map__60335__$1 = (((((!((map__60335 == null))))?(((((map__60335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60335):map__60335);
var view = map__60335__$1;
var dispatch = (function (){var obj60340 = map__60335__$1;
if((!((obj60340 == null)))){
return (obj60340["dispatch"]);
} else {
return undefined;
}
})();
var state = (function (){var obj60341 = map__60335__$1;
if((!((obj60341 == null)))){
return (obj60341["state"]);
} else {
return undefined;
}
})();
var G__60342 = ({"effects": nextjournal.clojure_mode.extensions.eval_region.modifier_effect.of(value), "userEvent": "evalregion"});
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__60342) : dispatch.call(null,G__60342));
});
nextjournal.clojure_mode.extensions.eval_region.mark = (function nextjournal$clojure_mode$extensions$eval_region$mark(spec,p__60347){
var map__60348 = p__60347;
var map__60348__$1 = (((((!((map__60348 == null))))?(((((map__60348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60348):map__60348);
var from = (function (){var obj60351 = map__60348__$1;
if((!((obj60351 == null)))){
return (obj60351["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj60354 = map__60348__$1;
if((!((obj60354 == null)))){
return (obj60354["to"]);
} else {
return undefined;
}
})();
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.mark(spec).range(from,to);
});
nextjournal.clojure_mode.extensions.eval_region.single_mark = (function nextjournal$clojure_mode$extensions$eval_region$single_mark(spec,range){
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.set([nextjournal.clojure_mode.extensions.eval_region.mark(spec,range)]);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.14);"})});
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.35);"})});
}
nextjournal.clojure_mode.extensions.eval_region.cursor_range = (function nextjournal$clojure_mode$extensions$eval_region$cursor_range(state){
if(cljs.core.truth_(state.selection.main.empty)){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
} else {
return state.selection.main;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.region_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.region_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (_value,p__60359){
var map__60361 = p__60359;
var map__60361__$1 = (((((!((map__60361 == null))))?(((((map__60361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60361):map__60361);
var state = (function (){var obj60369 = map__60361__$1;
if((!((obj60369 == null)))){
return (obj60369["state"]);
} else {
return undefined;
}
})();
var map__60372 = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var map__60372__$1 = cljs.core.__destructure_map(map__60372);
var Alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60372__$1,"Alt");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60372__$1,"Shift");
var Enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60372__$1,"Enter");
var spec = (cljs.core.truth_(Enter)?nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight:nextjournal.clojure_mode.extensions.eval_region.mark_spec);
var temp__5755__auto__ = (cljs.core.truth_((function (){var or__4223__auto__ = nextjournal.clojure_mode.node.embedded_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return nextjournal.clojure_mode.node.within_program_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
}
})())?(cljs.core.truth_((function (){var and__4221__auto__ = Alt;
if(cljs.core.truth_(and__4221__auto__)){
return Shift;
} else {
return and__4221__auto__;
}
})())?nextjournal.clojure_mode.extensions.eval_region.top_level_node(state):(cljs.core.truth_(Alt)?(function (){var or__4223__auto__ = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.eval_region.main_selection(state),(function (p1__60357_SHARP_){
return cljs.core.not((function (){var obj60380 = p1__60357_SHARP_;
if((!((obj60380 == null)))){
return (obj60380["empty"]);
} else {
return undefined;
}
})());
}));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return nextjournal.clojure_mode.extensions.eval_region.cursor_range(state);
}
})():null)):null);
if((temp__5755__auto__ == null)){
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none;
} else {
var range = temp__5755__auto__;
return nextjournal.clojure_mode.extensions.eval_region.single_mark(spec,range);
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_region_field = (function nextjournal$clojure_mode$extensions$eval_region$get_region_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.region_field);
});
nextjournal.clojure_mode.extensions.eval_region.current_range = (function nextjournal$clojure_mode$extensions$eval_region$current_range(state){
var or__4223__auto__ = (function (){var G__60398 = nextjournal.clojure_mode.extensions.eval_region.get_region_field(state);
var G__60398__$1 = (((G__60398 == null))?null:(function (){var obj__55881__auto__ = G__60398;
var f__55882__auto__ = (obj__55881__auto__["iter"]);
return f__55882__auto__.call(obj__55881__auto__);
})());
if((G__60398__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__60398__$1,(function (p1__60397_SHARP_){
var obj60402 = p1__60397_SHARP_;
if((!((obj60402 == null)))){
return (obj60402["value"]);
} else {
return undefined;
}
}));
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return state.selection.main;
}
});
/**
 * Maintains modifier-state-field, containing a map of {<modifier> true}, including Enter.
 */
nextjournal.clojure_mode.extensions.eval_region.modifier_extension = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension(modifier){
var handle_enter = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension_$_handle_enter(p__60415){
var map__60418 = p__60415;
var map__60418__$1 = (((((!((map__60418 == null))))?(((((map__60418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60418):map__60418);
var view = map__60418__$1;
var state = (function (){var obj60421 = map__60418__$1;
if((!((obj60421 == null)))){
return (obj60421["state"]);
} else {
return undefined;
}
})();
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state),"Enter",true));

return null;
});
var handle_key_event = (function (p__60422,p__60423){
var map__60428 = p__60422;
var map__60428__$1 = (((((!((map__60428 == null))))?(((((map__60428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60428):map__60428);
var event = map__60428__$1;
var altKey = (function (){var obj60431 = map__60428__$1;
if((!((obj60431 == null)))){
return (obj60431["altKey"]);
} else {
return undefined;
}
})();
var shiftKey = (function (){var obj60432 = map__60428__$1;
if((!((obj60432 == null)))){
return (obj60432["shiftKey"]);
} else {
return undefined;
}
})();
var metaKey = (function (){var obj60433 = map__60428__$1;
if((!((obj60433 == null)))){
return (obj60433["metaKey"]);
} else {
return undefined;
}
})();
var controlKey = (function (){var obj60434 = map__60428__$1;
if((!((obj60434 == null)))){
return (obj60434["controlKey"]);
} else {
return undefined;
}
})();
var type = (function (){var obj60435 = map__60428__$1;
if((!((obj60435 == null)))){
return (obj60435["type"]);
} else {
return undefined;
}
})();
var map__60429 = p__60423;
var map__60429__$1 = (((((!((map__60429 == null))))?(((((map__60429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60429):map__60429);
var view = map__60429__$1;
var state = (function (){var obj60441 = map__60429__$1;
if((!((obj60441 == null)))){
return (obj60441["state"]);
} else {
return undefined;
}
})();
var prev = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var next = (function (){var G__60444 = cljs.core.PersistentArrayMap.EMPTY;
var G__60444__$1 = (cljs.core.truth_(altKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60444,"Alt",true):G__60444);
var G__60444__$2 = (cljs.core.truth_(shiftKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60444__$1,"Shift",true):G__60444__$1);
var G__60444__$3 = (cljs.core.truth_(metaKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60444__$2,"Meta",true):G__60444__$2);
var G__60444__$4 = (cljs.core.truth_(controlKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60444__$3,"Control",true):G__60444__$3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",module$node_modules$w3c_keyname$index_cjs.keyName(event))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60444__$4,"Enter",true);
} else {
return G__60444__$4;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,next);
} else {
}

return false;
});
var handle_backspace = (function (p__60449){
var map__60450 = p__60449;
var map__60450__$1 = (((((!((map__60450 == null))))?(((((map__60450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60450):map__60450);
var view = map__60450__$1;
var state = (function (){var obj60455 = map__60450__$1;
if((!((obj60455 == null)))){
return (obj60455["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj60457 = map__60450__$1;
if((!((obj60457 == null)))){
return (obj60457["dispatch"]);
} else {
return undefined;
}
})();
var map__60459 = nextjournal.clojure_mode.extensions.eval_region.current_range(state);
var map__60459__$1 = (((((!((map__60459 == null))))?(((((map__60459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60459):map__60459);
var from = (function (){var obj60463 = map__60459__$1;
if((!((obj60463 == null)))){
return (obj60463["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj60464 = map__60459__$1;
if((!((obj60464 == null)))){
return (obj60464["to"]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
var G__60472_60525 = ({"changes":({"from":from,"to":to,"insert":""}),"annotations":nextjournal.clojure_mode.util.user_event_annotation("delete")});
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__60472_60525) : dispatch.call(null,G__60472_60525));
} else {
}

return true;
});
return [nextjournal.clojure_mode.extensions.eval_region.modifier_field,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":handle_enter,"run":handle_enter}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Backspace"].join(''),"run":handle_backspace,"shift":handle_backspace})]),module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown": handle_key_event, "keyup": handle_key_event}))];
});
nextjournal.clojure_mode.extensions.eval_region.extension = (function nextjournal$clojure_mode$extensions$eval_region$extension(p__60477){
var map__60478 = p__60477;
var map__60478__$1 = cljs.core.__destructure_map(map__60478);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60478__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt");
return [nextjournal.clojure_mode.extensions.eval_region.modifier_extension(modifier),nextjournal.clojure_mode.extensions.eval_region.region_field,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.eval_region.region_field)];
});
nextjournal.clojure_mode.extensions.eval_region.cursor_node_string = (function nextjournal$clojure_mode$extensions$eval_region$cursor_node_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__60479 = nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
if((G__60479 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__60479);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});
nextjournal.clojure_mode.extensions.eval_region.top_level_string = (function nextjournal$clojure_mode$extensions$eval_region$top_level_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__60480 = nextjournal.clojure_mode.extensions.eval_region.top_level_node(state);
if((G__60480 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__60480);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.eval_region.js.map
