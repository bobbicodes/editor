goog.provide('nextjournal.clojure_mode.extensions.close_brackets');
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$in_string_QMARK_(state,pos){
var G__60300 = nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,pos));
var fexpr__60299 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["StringContent",null,"String",null], null), null);
return (fexpr__60299.cljs$core$IFn$_invoke$arity$1 ? fexpr__60299.cljs$core$IFn$_invoke$arity$1(G__60300) : fexpr__60299.call(null,G__60300));
});
nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$escaped_QMARK_(state,pos){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",state.doc.slice((function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (pos - (1));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})(),pos).toString());
});
nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff = (function nextjournal$clojure_mode$extensions$close_brackets$backspace_backoff(state,from,to){
if(cljs.core.truth_((function (){var and__4221__auto__ = (function (){var G__60312 = nextjournal.clojure_mode.node.node_BAR_(state,(from - (1)));
if((G__60312 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__60312,nextjournal.clojure_mode.node.line_comment_QMARK_);
}
})();
if(cljs.core.truth_(and__4221__auto__)){
return (!(clojure.string.blank_QMARK_(nextjournal.clojure_mode.util.line_content_at(state,from))));
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
}
});
/**
 * - skips over closing brackets
 * - when deleting an opening bracket of an empty list, removes both brackets
 */
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace(p__60336){
var map__60338 = p__60336;
var map__60338__$1 = (((((!((map__60338 == null))))?(((((map__60338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60338):map__60338);
var state = map__60338__$1;
var doc = (function (){var obj60343 = map__60338__$1;
if((!((obj60343 == null)))){
return (obj60343["doc"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),state.selection.ranges.length);
if(and__4221__auto__){
var range = (function (){var obj60346 = (function (){var obj60345 = (function (){var obj60344 = state;
if((!((obj60344 == null)))){
return (obj60344["selection"]);
} else {
return undefined;
}
})();
if((!((obj60345 == null)))){
return (obj60345["ranges"]);
} else {
return undefined;
}
})();
if((!((obj60346 == null)))){
return (obj60346[(0)]);
} else {
return undefined;
}
})();
var and__4221__auto____$1 = range.empty;
if(cljs.core.truth_(and__4221__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),range.from);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return null;
} else {
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("delete")}),(function (p__60349){
var map__60352 = p__60349;
var map__60352__$1 = (((((!((map__60352 == null))))?(((((map__60352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60352):map__60352);
var range = map__60352__$1;
var head = (function (){var obj60375 = map__60352__$1;
if((!((obj60375 == null)))){
return (obj60375["head"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj60376 = map__60352__$1;
if((!((obj60376 == null)))){
return (obj60376["empty"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj60378 = map__60352__$1;
if((!((obj60378 == null)))){
return (obj60378["anchor"]);
} else {
return undefined;
}
})();
var map__60379 = nextjournal.clojure_mode.util.from_to(head,anchor);
var map__60379__$1 = (((((!((map__60379 == null))))?(((((map__60379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60379):map__60379);
var range__$1 = map__60379__$1;
var from = (function (){var obj60394 = map__60379__$1;
if((!((obj60394 == null)))){
return (obj60394["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj60395 = map__60379__$1;
if((!((obj60395 == null)))){
return (obj60395["to"]);
} else {
return undefined;
}
})();
var node_BAR_ = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state).resolveInner(from,(-1));
var parent = node_BAR_.parent;
if(cljs.core.truth_((function (){var or__4223__auto__ = cljs.core.not(empty);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("StringContent",nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1))));
if(or__4223__auto____$1){
return or__4223__auto____$1;
} else {
var and__4221__auto__ = parent;
if(cljs.core.truth_(and__4221__auto__)){
return (((!(nextjournal.clojure_mode.node.balanced_QMARK_(parent)))) && (nextjournal.clojure_mode.node.left_edge_QMARK_(node_BAR_)));
} else {
return and__4221__auto__;
}
}
}
})())){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
} else {
if(((nextjournal.clojure_mode.node.right_edge_QMARK_(node_BAR_)) && ((from === nextjournal.clojure_mode.node.end(parent))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
if(((((nextjournal.clojure_mode.node.start_edge_QMARK_(node_BAR_)) || (nextjournal.clojure_mode.node.same_edge_QMARK_(node_BAR_)))) && ((nextjournal.clojure_mode.node.start(node_BAR_) === nextjournal.clojure_mode.node.start(parent))))){
if(nextjournal.clojure_mode.node.empty_QMARK_(nextjournal.clojure_mode.node.up(node_BAR_))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.node.start(parent),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.util.from_to(nextjournal.clojure_mode.node.start(parent),nextjournal.clojure_mode.node.end(parent))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from], null);
}
} else {
return nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff(state,from,to);

}
}
}
}));
}
});
nextjournal.clojure_mode.extensions.close_brackets.coll_pairs = new cljs.core.PersistentArrayMap(null, 4, ["(",")","[","]","{","}","\"","\""], null);
nextjournal.clojure_mode.extensions.close_brackets.handle_open = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open(state,open){
var close = (nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1(open) : nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.call(null,open));
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__60403){
var map__60405 = p__60403;
var map__60405__$1 = (((((!((map__60405 == null))))?(((((map__60405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60405):map__60405);
var from = (function (){var obj60407 = map__60405__$1;
if((!((obj60407 == null)))){
return (obj60407["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj60408 = map__60405__$1;
if((!((obj60408 == null)))){
return (obj60408["to"]);
} else {
return undefined;
}
})();
var head = (function (){var obj60409 = map__60405__$1;
if((!((obj60409 == null)))){
return (obj60409["head"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj60410 = map__60405__$1;
if((!((obj60410 == null)))){
return (obj60410["anchor"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj60413 = map__60405__$1;
if((!((obj60413 == null)))){
return (obj60413["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(open,"\"")){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2(head,"\\\"");
} else {
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
}
} else {
if(nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from)){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
} else {
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),[open,close].join(''),new cljs.core.Keyword(null,"from","from",1815293044),head], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(head + ((open).length))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),open,new cljs.core.Keyword(null,"from","from",1815293044),from], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),close,new cljs.core.Keyword(null,"from","from",1815293044),to], null)], null),new cljs.core.Keyword(null,"from-to","from-to",-640428401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(anchor + ((open).length)),(head + ((open).length))], null)], null);
}

}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close(state,key_name){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__60437){
var map__60438 = p__60437;
var map__60438__$1 = (((((!((map__60438 == null))))?(((((map__60438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60438):map__60438);
var range = map__60438__$1;
var empty = (function (){var obj60442 = map__60438__$1;
if((!((obj60442 == null)))){
return (obj60442["empty"]);
} else {
return undefined;
}
})();
var head = (function (){var obj60443 = map__60438__$1;
if((!((obj60443 == null)))){
return (obj60443["head"]);
} else {
return undefined;
}
})();
var from = (function (){var obj60445 = map__60438__$1;
if((!((obj60445 == null)))){
return (obj60445["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj60447 = map__60438__$1;
if((!((obj60447 == null)))){
return (obj60447["to"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4223__auto__ = nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from);
}
})())){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,key_name);
} else {
if(cljs.core.truth_(empty)){
var or__4223__auto__ = (function (){var unbalanced = (function (){var G__60462 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,head,(-1));
var G__60462__$1 = (((G__60462 == null))?null:nextjournal.clojure_mode.node.ancestors(G__60462));
var G__60462__$2 = (((G__60462__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,cljs.core.complement(nextjournal.clojure_mode.node.balanced_QMARK_)),G__60462__$1));
if((G__60462__$2 == null)){
return null;
} else {
return cljs.core.first(G__60462__$2);
}
})();
var closing = (function (){var G__60465 = unbalanced;
var G__60465__$1 = (((G__60465 == null))?null:nextjournal.clojure_mode.node.down(G__60465));
if((G__60465__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.closed_by(G__60465__$1);
}
})();
var pos = (function (){var G__60466 = unbalanced;
if((G__60466 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end(G__60466);
}
})();
if(cljs.core.truth_((function (){var and__4221__auto__ = closing;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(closing,key_name);
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),pos,new cljs.core.Keyword(null,"insert","insert",1286475395),closing], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(pos + (1))], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = (function (){var temp__5753__auto__ = (function (){var temp__5753__auto__ = nextjournal.clojure_mode.node.terminal_cursor(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),head,(1));
if(cljs.core.truth_(temp__5753__auto__)){
var cursor = temp__5753__auto__;
while(true){
if(nextjournal.clojure_mode.node.right_edge_type_QMARK_(cursor.type)){
return nextjournal.clojure_mode.node.end(cursor);
} else {
if(cljs.core.truth_(cursor.next())){
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var close_node_end = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),close_node_end], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),head], null);
}
}
} else {
return null;
}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace_cmd(p__60468){
var map__60469 = p__60468;
var map__60469__$1 = (((((!((map__60469 == null))))?(((((map__60469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60469):map__60469);
var view = map__60469__$1;
var state = (function (){var obj60471 = map__60469__$1;
if((!((obj60471 == null)))){
return (obj60471["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open_cmd(key_name){
return (function (p__60489){
var map__60490 = p__60489;
var map__60490__$1 = (((((!((map__60490 == null))))?(((((map__60490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60490):map__60490);
var view = map__60490__$1;
var state = (function (){var obj60492 = map__60490__$1;
if((!((obj60492 == null)))){
return (obj60492["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_open(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close_cmd(key_name){
return (function (p__60497){
var map__60498 = p__60497;
var map__60498__$1 = (((((!((map__60498 == null))))?(((((map__60498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60498):map__60498);
var view = map__60498__$1;
var state = (function (){var obj60506 = map__60498__$1;
if((!((obj60506 == null)))){
return (obj60506["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_close(state,key_name));
});
});
/**
 * Command -> Command
 * 
 *   Guards command for it to be triggered from within the right scope, does nothing and propagates key otherwise
 */
nextjournal.clojure_mode.extensions.close_brackets.guard_scope = (function nextjournal$clojure_mode$extensions$close_brackets$guard_scope(cmd){
return (function (p__60523){
var map__60531 = p__60523;
var map__60531__$1 = (((((!((map__60531 == null))))?(((((map__60531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60531):map__60531);
var view = map__60531__$1;
var state = (function (){var obj60533 = map__60531__$1;
if((!((obj60533 == null)))){
return (obj60533["state"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4223__auto__ = nextjournal.clojure_mode.node.embedded_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return nextjournal.clojure_mode.node.within_program_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return (cmd.cljs$core$IFn$_invoke$arity$1 ? cmd.cljs$core$IFn$_invoke$arity$1(view) : cmd.call(null,view));
} else {
return false;
}
});
});
nextjournal.clojure_mode.extensions.close_brackets.extension = (function nextjournal$clojure_mode$extensions$close_brackets$extension(){
return module$node_modules$$codemirror$state$dist$index_cjs.Prec.high(module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":"Backspace","run":nextjournal.clojure_mode.extensions.close_brackets.guard_scope((function (p__60534){
var map__60535 = p__60534;
var map__60535__$1 = (((((!((map__60535 == null))))?(((((map__60535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60535):map__60535);
var view = map__60535__$1;
var state = (function (){var obj60538 = map__60535__$1;
if((!((obj60538 == null)))){
return (obj60538["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
}))}),({"key":"(","run":nextjournal.clojure_mode.extensions.close_brackets.guard_scope(nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("("))}),({"key":"[","run":nextjournal.clojure_mode.extensions.close_brackets.guard_scope(nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("["))}),({"key":"{","run":nextjournal.clojure_mode.extensions.close_brackets.guard_scope(nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("{"))}),({"key":"\"","run":nextjournal.clojure_mode.extensions.close_brackets.guard_scope(nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("\""))}),({"key":")","run":nextjournal.clojure_mode.extensions.close_brackets.guard_scope(nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd(")"))}),({"key":"]","run":nextjournal.clojure_mode.extensions.close_brackets.guard_scope(nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("]"))}),({"key":"}","run":nextjournal.clojure_mode.extensions.close_brackets.guard_scope(nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("}"))})]));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.close_brackets.js.map
