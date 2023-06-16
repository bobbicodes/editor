goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__60290){
var map__60293 = p__60290;
var map__60293__$1 = (((((!((map__60293 == null))))?(((((map__60293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60293):map__60293);
var type = map__60293__$1;
var type_name = (function (){var obj60307 = map__60293__$1;
if((!((obj60307 == null)))){
return (obj60307["name"]);
} else {
return undefined;
}
})();
return (function (p__60309){
var map__60311 = p__60309;
var map__60311__$1 = (((((!((map__60311 == null))))?(((((map__60311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60311):map__60311);
var context = map__60311__$1;
var pos = (function (){var obj60314 = map__60311__$1;
if((!((obj60314 == null)))){
return (obj60314["pos"]);
} else {
return undefined;
}
})();
var unit = (function (){var obj60316 = map__60311__$1;
if((!((obj60316 == null)))){
return (obj60316["unit"]);
} else {
return undefined;
}
})();
var node = (function (){var obj60317 = map__60311__$1;
if((!((obj60317 == null)))){
return (obj60317["node"]);
} else {
return undefined;
}
})();
var state = (function (){var obj60319 = map__60311__$1;
if((!((obj60319 == null)))){
return (obj60319["state"]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__60322 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__4221__auto__){
var G__60327 = (function (){var G__60328 = node;
var G__60328__$1 = (((G__60328 == null))?null:nextjournal.clojure_mode.node.down(G__60328));
var G__60328__$2 = (((G__60328__$1 == null))?null:nextjournal.clojure_mode.node.right(G__60328__$1));
if((G__60328__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__60328__$2);
}
})();
var fexpr__60326 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["DefLike",null,"NS",null,"Operator",null], null), null);
return (fexpr__60326.cljs$core$IFn$_invoke$arity$1 ? fexpr__60326.cljs$core$IFn$_invoke$arity$1(G__60327) : fexpr__60326.call(null,G__60327));
} else {
return and__4221__auto__;
}
})())){
return (G__60322 + (1));
} else {
return G__60322;
}
} else {
return (-1);

}
}
});
});
nextjournal.clojure_mode.extensions.formatting.props = module$node_modules$$codemirror$language$dist$index_cjs.indentNodeProp.add(nextjournal.clojure_mode.extensions.formatting.indent_node_props);
nextjournal.clojure_mode.extensions.formatting.get_indentation = (function nextjournal$clojure_mode$extensions$formatting$get_indentation(context,pos){
return module$node_modules$$codemirror$language$dist$index_cjs.getIndentation(context.state,pos);
});
nextjournal.clojure_mode.extensions.formatting.make_indent_context = (function nextjournal$clojure_mode$extensions$formatting$make_indent_context(state){
return (new module$node_modules$$codemirror$language$dist$index_cjs.IndentContext(state));
});
nextjournal.clojure_mode.extensions.formatting.indent_all = (function nextjournal$clojure_mode$extensions$formatting$indent_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,content,line_num){
var current_indent = (/^\s*/.exec(content)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(context,from),cljs.core.complement(cljs.core.neg_QMARK_));
if(cljs.core.truth_(indent)){
var G__60331 = cljs.core.compare(indent,current_indent);
switch (G__60331) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60331)].join('')));

}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.extensions.formatting.expected_space = (function nextjournal$clojure_mode$extensions$formatting$expected_space(n1,n2){
if(((nextjournal.clojure_mode.node.start_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.prefix_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.end_edge_type_QMARK_(n2)) || (nextjournal.clojure_mode.node.same_edge_type_QMARK_(n2)))))))){
return (0);
} else {
return (1);
}
});
nextjournal.clojure_mode.extensions.formatting.space_changes = (function nextjournal$clojure_mode$extensions$formatting$space_changes(state,from,to){
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60355_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__60355_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__60355_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__60355_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__60355_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(state,from,to)));
var trim_QMARK_ = (function (){var G__60356 = cljs.core.first(nodes);
var G__60356__$1 = (((G__60356 == null))?null:nextjournal.clojure_mode.node.end(G__60356));
if((G__60356__$1 == null)){
return null;
} else {
return (G__60356__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__60358){
var vec__60360 = p__60358;
var map__60366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60360,(0),null);
var map__60366__$1 = (((((!((map__60366 == null))))?(((((map__60366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60366):map__60366);
var n2 = (function (){var obj60370 = map__60366__$1;
if((!((obj60370 == null)))){
return (obj60370["type"]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj60373 = map__60366__$1;
if((!((obj60373 == null)))){
return (obj60373["from"]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj60374 = map__60366__$1;
if((!((obj60374 == null)))){
return (obj60374["to"]);
} else {
return undefined;
}
})();
var map__60367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60360,(1),null);
var map__60367__$1 = (((((!((map__60367 == null))))?(((((map__60367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60367):map__60367);
var n1 = (function (){var obj60411 = map__60367__$1;
if((!((obj60411 == null)))){
return (obj60411["type"]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj60412 = map__60367__$1;
if((!((obj60412 == null)))){
return (obj60412["from"]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj60414 = map__60367__$1;
if((!((obj60414 == null)))){
return (obj60414["to"]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__60416 = cljs.core.compare(actual,expected);
switch (G__60416) {
case (0):
return out;

break;
case (1):
var Array60417 = out;
Array60417.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return Array60417;

break;
case (-1):
var Array60420 = out;
Array60420.push(({"from": end1, "insert": " "}));

return Array60420;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__60424_60500 = cljs.core.seq(items);
var chunk__60425_60501 = null;
var count__60426_60502 = (0);
var i__60427_60503 = (0);
while(true){
if((i__60427_60503 < count__60426_60502)){
var i_60504 = chunk__60425_60501.cljs$core$IIndexed$_nth$arity$2(null,i__60427_60503);
arr.push(i_60504);


var G__60505 = seq__60424_60500;
var G__60507 = chunk__60425_60501;
var G__60508 = count__60426_60502;
var G__60509 = (i__60427_60503 + (1));
seq__60424_60500 = G__60505;
chunk__60425_60501 = G__60507;
count__60426_60502 = G__60508;
i__60427_60503 = G__60509;
continue;
} else {
var temp__5753__auto___60510 = cljs.core.seq(seq__60424_60500);
if(temp__5753__auto___60510){
var seq__60424_60511__$1 = temp__5753__auto___60510;
if(cljs.core.chunked_seq_QMARK_(seq__60424_60511__$1)){
var c__4649__auto___60512 = cljs.core.chunk_first(seq__60424_60511__$1);
var G__60513 = cljs.core.chunk_rest(seq__60424_60511__$1);
var G__60514 = c__4649__auto___60512;
var G__60515 = cljs.core.count(c__4649__auto___60512);
var G__60516 = (0);
seq__60424_60500 = G__60513;
chunk__60425_60501 = G__60514;
count__60426_60502 = G__60515;
i__60427_60503 = G__60516;
continue;
} else {
var i_60517 = cljs.core.first(seq__60424_60511__$1);
arr.push(i_60517);


var G__60518 = cljs.core.next(seq__60424_60511__$1);
var G__60519 = null;
var G__60520 = (0);
var G__60521 = (0);
seq__60424_60500 = G__60518;
chunk__60425_60501 = G__60519;
count__60426_60502 = G__60520;
i__60427_60503 = G__60521;
continue;
}
} else {
}
}
break;
}

return arr;
});
/**
 * Returns mutated `changes` array
 */
nextjournal.clojure_mode.extensions.formatting.format_line = (function nextjournal$clojure_mode$extensions$formatting$format_line(state,indent_context,from,text,line_num,changes,format_spaces_QMARK_){
if((!((text == null)))){
} else {
throw (new Error("Assert failed: (some? text)"));
}

var current_indent = (/^\s*/.exec(text)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(indent_context,from),cljs.core.complement(cljs.core.neg_QMARK_));
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__60439 = cljs.core.compare(indent,current_indent);
switch (G__60439) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60439)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_((function (){var and__4221__auto__ = format_spaces_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
var or__4223__auto__ = nextjournal.clojure_mode.node.embedded_QMARK_.cljs$core$IFn$_invoke$arity$2(state,from);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return nextjournal.clojure_mode.node.within_program_QMARK_.cljs$core$IFn$_invoke$arity$2(state,from);
}
} else {
return and__4221__auto__;
}
})())?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__60446 = changes;
var G__60446__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__60446,space_changes):G__60446);
if(cljs.core.truth_(indentation_change)){
var Array60448 = G__60446__$1;
Array60448.push(indentation_change);

return Array60448;
} else {
return G__60446__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__60451,changes,range){
var map__60453 = p__60451;
var map__60453__$1 = (((((!((map__60453 == null))))?(((((map__60453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60453):map__60453);
var line = map__60453__$1;
var from = (function (){var obj60456 = map__60453__$1;
if((!((obj60456 == null)))){
return (obj60456["from"]);
} else {
return undefined;
}
})();
var text = (function (){var obj60458 = map__60453__$1;
if((!((obj60458 == null)))){
return (obj60458["text"]);
} else {
return undefined;
}
})();
var number = (function (){var obj60460 = map__60453__$1;
if((!((obj60460 == null)))){
return (obj60460["number"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,number,changes,true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_all = (function nextjournal$clojure_mode$extensions$formatting$format_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,text,line_num){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,line_num,[],true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_transaction = (function nextjournal$clojure_mode$extensions$formatting$format_transaction(tr){
var origin = nextjournal.clojure_mode.util.get_user_event_annotation(tr);
var temp__5755__auto__ = (cljs.core.truth_(nextjournal.clojure_mode.node.within_program_QMARK_.cljs$core$IFn$_invoke$arity$1(tr.startState))?(function (){var G__60467 = origin;
switch (G__60467) {
case "input":
case "input.type":
case "delete":
case "keyboardselection":
case "pointerselection":
case "select.pointer":
case "cut":
case "noformat":
case "evalregion":
return null;

break;
case "format-selections":
return nextjournal.clojure_mode.extensions.formatting.format_selection(tr.state);

break;
default:
if(cljs.core.truth_(tr.changes.empty)){
return null;
} else {
var state = tr.state;
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.iter_changed_lines(tr,(function (line,changes){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,line.from,line.text,line.number,changes,true);
}));
}

}
})():null);
if((temp__5755__auto__ == null)){
return tr;
} else {
var changes = temp__5755__auto__;
return tr.startState.update((function (){var obj60473 = changes;
var obj60474 = (((!((obj60473 == null))))?obj60473:({}));
(obj60474["filter"] = false);

return obj60474;
})());
}
});
nextjournal.clojure_mode.extensions.formatting.format = (function nextjournal$clojure_mode$extensions$formatting$format(state){
if(nextjournal.clojure_mode.util.something_selected_QMARK_(state)){
return state.update(nextjournal.clojure_mode.extensions.formatting.format_selection(state));
} else {
return nextjournal.clojure_mode.extensions.formatting.format_all(state);
}
});
nextjournal.clojure_mode.extensions.formatting.prefix_all = (function nextjournal$clojure_mode$extensions$formatting$prefix_all(prefix,state){
return nextjournal.clojure_mode.util.update_lines(state,(function (from,_,___$1){
return ({"from": from, "insert": prefix});
}));
});
nextjournal.clojure_mode.extensions.formatting.ext_format_changed_lines = (function nextjournal$clojure_mode$extensions$formatting$ext_format_changed_lines(){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.transactionFilter.of(nextjournal.clojure_mode.extensions.formatting.format_transaction);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.formatting.js.map
