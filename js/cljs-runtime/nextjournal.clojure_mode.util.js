goog.provide('nextjournal.clojure_mode.util');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
/**
 * @define {boolean}
 */
nextjournal.clojure_mode.util.node_js_QMARK_ = goog.define("nextjournal.clojure_mode.util.node_js_QMARK_",false);
nextjournal.clojure_mode.util.user_event_annotation = (function nextjournal$clojure_mode$util$user_event_annotation(event_name){
return module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent.of(event_name);
});
nextjournal.clojure_mode.util.get_user_event_annotation = (function nextjournal$clojure_mode$util$get_user_event_annotation(tr){
return tr.annotation(module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent);
});
nextjournal.clojure_mode.util.guard = (function nextjournal$clojure_mode$util$guard(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
nextjournal.clojure_mode.util.from_to = (function nextjournal$clojure_mode$util$from_to(p1,p2){
if((p1 > p2)){
return ({"from": p2, "to": p1});
} else {
return ({"from": p1, "to": p2});
}
});
/**
 * If passed a transaction, dispatch to view and return true to stop processing commands.
 */
nextjournal.clojure_mode.util.dispatch_some = (function nextjournal$clojure_mode$util$dispatch_some(view,tr){
if(cljs.core.truth_(tr)){
view.dispatch(tr);

return true;
} else {
return false;
}
});
/**
 * Returns a `change` that inserts string `s` at position `from` and moves cursor to end of insertion.
 */
nextjournal.clojure_mode.util.insertion = (function nextjournal$clojure_mode$util$insertion(var_args){
var G__59905 = arguments.length;
switch (G__59905) {
case 2:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2 = (function (from,s){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,from,s);
}));

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3 = (function (from,to,s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"insert","insert",1286475395),s,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((s).length))], null);
}));

(nextjournal.clojure_mode.util.insertion.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.deletion = (function nextjournal$clojure_mode$util$deletion(var_args){
var G__59907 = arguments.length;
switch (G__59907) {
case 1:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1 = (function (from){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (from - (1));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})(),from);
}));

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
var from__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to))?(function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (from - (1));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})():from);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from__$1,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from__$1,new cljs.core.Keyword(null,"to","to",192099007),to], null)], null);
}));

(nextjournal.clojure_mode.util.deletion.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.util.line_content_at = (function nextjournal$clojure_mode$util$line_content_at(state,from){
var obj__55881__auto__ = (function (){var parent__55888__auto__ = (state["doc"]);
var f__55889__auto__ = (parent__55888__auto__["lineAt"]);
return f__55889__auto__.call(parent__55888__auto__,from);
})();
var f__55882__auto__ = (obj__55881__auto__["slice"]);
return f__55882__auto__.call(obj__55881__auto__);
});
nextjournal.clojure_mode.util.map_cursor = (function nextjournal$clojure_mode$util$map_cursor(original_range,state,update_map){
if(cljs.core.map_QMARK_(update_map)){
} else {
throw (new Error("Assert failed: (map? update-map)"));
}

var map__59921 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__59921__$1 = cljs.core.__destructure_map(map__59921);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59921__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59921__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59921__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59921__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59921__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__59926 = ({"range": (function (){var or__4223__auto__ = range;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = (cljs.core.truth_(mapped)?nextjournal.clojure_mode.selections.cursor(change_desc.mapPos(mapped)):(cljs.core.truth_(cursor)?nextjournal.clojure_mode.selections.cursor(cursor):(cljs.core.truth_(from_to)?nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2((from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((0)) : from_to.call(null,(0))),(from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((1)) : from_to.call(null,(1)))):null)));
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return original_range;
}
}
})()});
if(cljs.core.truth_(change_desc)){
var obj59933 = G__59926;
(obj59933["changes"] = change_desc);

return obj59933;
} else {
return G__59926;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__59945 = arguments.length;
switch (G__59945) {
case 2:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2 = (function (state,f){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,null,f);
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3 = (function (state,tr_specs,f){
return state.update((function (p1__59937_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__59937_SHARP_,tr_specs);
})(state.changeByRange((function (range){
var or__4223__auto__ = (function (){var temp__5757__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(range) : f.call(null,range));
if((temp__5757__auto__ == null)){
return null;
} else {
var result = temp__5757__auto__;
return nextjournal.clojure_mode.util.map_cursor(range,state,result);
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return ({"range": range});
}
}))));
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.dispatch_changes = (function nextjournal$clojure_mode$util$dispatch_changes(state,dispatch,changes){
if(cljs.core.truth_(changes.empty)){
return null;
} else {
var G__59958 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__59958) : dispatch.call(null,G__59958));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__4835__auto__ = [];
var len__4829__auto___60130 = arguments.length;
var i__4830__auto___60131 = (0);
while(true){
if((i__4830__auto___60131 < len__4829__auto___60130)){
args__4835__auto__.push((arguments[i__4830__auto___60131]));

var G__60132 = (i__4830__auto___60131 + (1));
i__4830__auto___60131 = G__60132;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__59962){
var vec__59963 = p__59962;
var map__59966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59963,(0),null);
var map__59966__$1 = cljs.core.__destructure_map(map__59966);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59966__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59966__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59966__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__59974 = result;
var map__59974__$1 = (((((!((map__59974 == null))))?(((((map__59974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59974):map__59974);
var done = (function (){var obj59976 = map__59974__$1;
if((!((obj59976 == null)))){
return (obj59976["done"]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj59977 = map__59974__$1;
if((!((obj59977 == null)))){
return (obj59977["lineBreak"]);
} else {
return undefined;
}
})();
var value = (function (){var obj59978 = map__59974__$1;
if((!((obj59978 == null)))){
return (obj59978["value"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4223__auto__ = done;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (from > to);
}
})())){
return state.update(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(({"changes": state.changes(changes)}),spec));
} else {
var G__60133 = iterator.next();
var G__60134 = (function (){var temp__5751__auto__ = (function (){var and__4221__auto__ = cljs.core.not(lineBreak);
if(and__4221__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var change = temp__5751__auto__;
var Array59979 = changes;
Array59979.push(change);

return Array59979;
} else {
return changes;
}
})();
var G__60135 = (from_pos + ((value).length));
var G__60136 = (function (){var G__59980 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__59980 + (1));
} else {
return G__59980;
}
})();
result = G__60133;
changes = G__60134;
from_pos = G__60135;
line_num = G__60136;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq59959){
var G__59960 = cljs.core.first(seq59959);
var seq59959__$1 = cljs.core.next(seq59959);
var G__59961 = cljs.core.first(seq59959__$1);
var seq59959__$2 = cljs.core.next(seq59959__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59960,G__59961,seq59959__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__59995){
var map__60016 = p__59995;
var map__60016__$1 = (((((!((map__60016 == null))))?(((((map__60016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60016):map__60016);
var range = map__60016__$1;
var from = (function (){var obj60022 = map__60016__$1;
if((!((obj60022 == null)))){
return (obj60022["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj60023 = map__60016__$1;
if((!((obj60023 == null)))){
return (obj60023["to"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj60024 = map__60016__$1;
if((!((obj60024 == null)))){
return (obj60024["anchor"]);
} else {
return undefined;
}
})();
var head = (function (){var obj60025 = map__60016__$1;
if((!((obj60025 == null)))){
return (obj60025["head"]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__60036 = line;
var map__60036__$1 = (((((!((map__60036 == null))))?(((((map__60036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60036):map__60036);
var line_number = (function (){var obj60040 = map__60036__$1;
if((!((obj60040 == null)))){
return (obj60040["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj60041 = map__60036__$1;
if((!((obj60041 == null)))){
return (obj60041["to"]);
} else {
return undefined;
}
})();
if((line.number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(line,changes,range) : f.call(null,line,changes,range));
} else {
}

var temp__5751__auto__ = (function (){var and__4221__auto__ = (to > line_to);
if(and__4221__auto__){
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__4221__auto__,map__60036,map__60036__$1,line_number,line_to,changes,map__60016,map__60016__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__59988_SHARP_){
return (p1__59988_SHARP_.number > line_number);
});})(line,and__4221__auto__,map__60036,map__60036__$1,line_number,line_to,changes,map__60016,map__60016__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var next_line = temp__5751__auto__;
var G__60145 = next_line;
line = G__60145;
continue;
} else {
var change_set = state.changes(changes);
return ({"changes": changes, "range": module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(change_set.mapPos(anchor,(1)),change_set.mapPos(head,(1)))});
}
break;
}
}));
});
/**
 * `f` will be called for each changed line with args [line, changes-array]
 * and should *mutate* changes-array. Selections will be mapped through the resulting changeset.
 */
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__60043,f){
var map__60046 = p__60043;
var map__60046__$1 = (((((!((map__60046 == null))))?(((((map__60046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60046):map__60046);
var tr = map__60046__$1;
var map__60047 = (function (){var obj60050 = map__60046__$1;
if((!((obj60050 == null)))){
return (obj60050["state"]);
} else {
return undefined;
}
})();
var map__60047__$1 = (((((!((map__60047 == null))))?(((((map__60047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60047):map__60047);
var state = map__60047__$1;
var doc = (function (){var obj60053 = map__60047__$1;
if((!((obj60053 == null)))){
return (obj60053["doc"]);
} else {
return undefined;
}
})();
var changes = (function (){var obj60056 = map__60046__$1;
if((!((obj60056 == null)))){
return (obj60056["changes"]);
} else {
return undefined;
}
})();
var effects = (function (){var obj60057 = map__60046__$1;
if((!((obj60057 == null)))){
return (obj60057["effects"]);
} else {
return undefined;
}
})();
var selection = (function (){var obj60059 = map__60046__$1;
if((!((obj60059 == null)))){
return (obj60059["selection"]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__60060 = doc.lineAt(from_b);
var map__60060__$1 = (((((!((map__60060 == null))))?(((((map__60060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60060):map__60060);
var line = map__60060__$1;
var line_number = (function (){var obj60064 = map__60060__$1;
if((!((obj60064 == null)))){
return (obj60064["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj60065 = map__60060__$1;
if((!((obj60065 == null)))){
return (obj60065["to"]);
} else {
return undefined;
}
})();
var line__$1 = line;
while(true){
if((line_number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(line__$1,next_changes) : f.call(null,line__$1,next_changes));
} else {
}

if((to_b <= line_to)){
return null;
} else {
var next_line = doc.lineAt((line_to + (1)));
if(cljs.core.truth_((function (){var and__4221__auto__ = next_line;
if(cljs.core.truth_(and__4221__auto__)){
return (next_line.number > line__$1.number);
} else {
return and__4221__auto__;
}
})())){
var G__60163 = next_line;
line__$1 = G__60163;
continue;
} else {
return null;
}
}
break;
}
}));
var next_changeset = state.changes(next_changes);
if(cljs.core.seq(next_changes)){
var G__60077 = (function (){var obj60078 = (function (){var obj60082 = tr;
if((!((obj60082 == null)))){
var out60083 = ({});
var k__55788__auto___60176 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__55788__auto___60176,obj60082)){
var obj60089_60177 = out60083;
(obj60089_60177[k__55788__auto___60176] = (obj60082[k__55788__auto___60176]));

} else {
}

var k__55788__auto___60178 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__55788__auto___60178,obj60082)){
var obj60090_60179 = out60083;
(obj60090_60179[k__55788__auto___60178] = (obj60082[k__55788__auto___60178]));

} else {
}

var k__55788__auto___60180 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__55788__auto___60180,obj60082)){
var obj60091_60181 = out60083;
(obj60091_60181[k__55788__auto___60180] = (obj60082[k__55788__auto___60180]));

} else {
}

return out60083;
} else {
return ({});
}
})();
var obj60095 = (((!((obj60078 == null))))?obj60078:({}));
(obj60095["changes"] = changes.compose(next_changeset));

return obj60095;
})();
var G__60077__$1 = (cljs.core.truth_(selection)?(function (){var obj60098 = G__60077;
var obj60099 = (((!((obj60098 == null))))?obj60098:({}));
(obj60099["selection"] = state.selection.map(next_changeset));

return obj60099;
})():G__60077);
if(cljs.core.truth_(effects)){
var obj60102 = G__60077__$1;
var obj60103 = (((!((obj60102 == null))))?obj60102:({}));
(obj60103["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj60103;
} else {
return G__60077__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__60107){
var map__60108 = p__60107;
var map__60108__$1 = (((((!((map__60108 == null))))?(((((map__60108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60108):map__60108);
var map__60109 = (function (){var obj60111 = map__60108__$1;
if((!((obj60111 == null)))){
return (obj60111["selection"]);
} else {
return undefined;
}
})();
var map__60109__$1 = (((((!((map__60109 == null))))?(((((map__60109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60109):map__60109);
var ranges = (function (){var obj60113 = map__60109__$1;
if((!((obj60113 == null)))){
return (obj60113["ranges"]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__60106_SHARP_){
return p1__60106_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__60116){
var map__60117 = p__60116;
var map__60117__$1 = (((((!((map__60117 == null))))?(((((map__60117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60117):map__60117);
var selection = map__60117__$1;
var from = (function (){var obj60121 = map__60117__$1;
if((!((obj60121 == null)))){
return (obj60121["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj60122 = map__60117__$1;
if((!((obj60122 == null)))){
return (obj60122["to"]);
} else {
return undefined;
}
})();
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__55888__auto__ = (state["doc"]);
var f__55889__auto__ = (parent__55888__auto__["slice"]);
return f__55889__auto__.call(parent__55888__auto__,from,to);
})());
});

//# sourceMappingURL=nextjournal.clojure_mode.util.js.map
