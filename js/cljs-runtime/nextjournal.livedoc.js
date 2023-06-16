goog.provide('nextjournal.livedoc');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$lang_markdown$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$lang_markdown$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$lezer$markdown$dist$index_cjs=shadow.js.require("module$node_modules$$lezer$markdown$dist$index_cjs", {});




nextjournal.livedoc.doc_QMARK_ = (function nextjournal$livedoc$doc_QMARK_(node){
return (module$node_modules$$lezer$markdown$dist$index_cjs.parser.nodeTypes.Document === node.type.id);
});
nextjournal.livedoc.fenced_code_QMARK_ = (function nextjournal$livedoc$fenced_code_QMARK_(node){
return (module$node_modules$$lezer$markdown$dist$index_cjs.parser.nodeTypes.FencedCode === node.type.id);
});
nextjournal.livedoc.within_QMARK_ = (function nextjournal$livedoc$within_QMARK_(pos,p__75225){
var map__75226 = p__75225;
var map__75226__$1 = cljs.core.__destructure_map(map__75226);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75226__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75226__$1,new cljs.core.Keyword(null,"to","to",192099007));
return (((from <= pos)) && ((pos < to)));
});
nextjournal.livedoc.__GT_cursor_pos = (function nextjournal$livedoc$__GT_cursor_pos(x){
return x.selection.main.anchor;
});
nextjournal.livedoc.bounded_inc = (function nextjournal$livedoc$bounded_inc(i,b){
var x__4309__auto__ = (b - (1));
var y__4310__auto__ = (i + (1));
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
});
nextjournal.livedoc.bounded_dec = (function nextjournal$livedoc$bounded_dec(i){
var x__4306__auto__ = (0);
var y__4307__auto__ = (i - (1));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
});
/**
 * Returns a lazy-seq of ranges inside a RangeSet (like a Decoration set)
 */
nextjournal.livedoc.rangeset_seq = (function nextjournal$livedoc$rangeset_seq(var_args){
var G__75234 = arguments.length;
switch (G__75234) {
case 1:
return nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$1 = (function (rset){
return nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$2(rset,(0));
}));

(nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$2 = (function (rset,from){
var iterator = rset.iter(from);
return (function nextjournal$livedoc$step(){
var temp__5757__auto__ = iterator.value;
if((temp__5757__auto__ == null)){
return null;
} else {
var val = temp__5757__auto__;
var from__$1 = iterator.from;
var to = iterator.to;
iterator.next();

return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from__$1,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"val","val",128701612),val], null),(new cljs.core.LazySeq(null,(function (){
return nextjournal$livedoc$step();
}),null,null)));
}
})();
}));

(nextjournal.livedoc.rangeset_seq.cljs$lang$maxFixedArity = 2);

nextjournal.livedoc.when_fn = (function nextjournal$livedoc$when_fn(p){
return (function (x){
if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x)))){
return x;
} else {
return null;
}
});
});
nextjournal.livedoc.block_at = (function nextjournal$livedoc$block_at(blocks,pos){
return cljs.core.some(nextjournal.livedoc.when_fn(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.livedoc.within_QMARK_,pos)),nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$1(blocks));
});
nextjournal.livedoc.get_block_by_id = (function nextjournal$livedoc$get_block_by_id(state,id){
return cljs.core.some(nextjournal.livedoc.when_fn((function (p1__75238_SHARP_){
return (id === new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(p1__75238_SHARP_).widget.id);
})),(nextjournal.livedoc.get_blocks.cljs$core$IFn$_invoke$arity$1 ? nextjournal.livedoc.get_blocks.cljs$core$IFn$_invoke$arity$1(state) : nextjournal.livedoc.get_blocks.call(null,state)));
});
nextjournal.livedoc.with_index = (function nextjournal$livedoc$with_index(coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__75239_SHARP_,p2__75240_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__75239_SHARP_,p2__75240_SHARP_],null));
}),coll);
});
nextjournal.livedoc.pos__GT_block_idx = (function nextjournal$livedoc$pos__GT_block_idx(blocks,pos){
return cljs.core.some((function (p__75241){
var vec__75242 = p__75241;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75242,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75242,(1),null);
if(nextjournal.livedoc.within_QMARK_(pos,b)){
return i;
} else {
return null;
}
}),nextjournal.livedoc.with_index(blocks));
});
nextjournal.livedoc.block_eq_QMARK_ = (function nextjournal$livedoc$block_eq_QMARK_(p__75245,p__75246){
var map__75247 = p__75245;
var map__75247__$1 = cljs.core.__destructure_map(map__75247);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75247__$1,new cljs.core.Keyword(null,"val","val",128701612));
var map__75248 = p__75246;
var map__75248__$1 = cljs.core.__destructure_map(map__75248);
var other = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75248__$1,new cljs.core.Keyword(null,"val","val",128701612));
return val.widget.eq(other.widget);
});
nextjournal.livedoc.__GT_widget = (function nextjournal$livedoc$__GT_widget(p__75250){
var map__75251 = p__75250;
var map__75251__$1 = cljs.core.__destructure_map(map__75251);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75251__$1,new cljs.core.Keyword(null,"val","val",128701612));
return val.widget;
});
nextjournal.livedoc.update_block = (function nextjournal$livedoc$update_block(p__75254,f){
var map__75255 = p__75254;
var map__75255__$1 = cljs.core.__destructure_map(map__75255);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75255__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75255__$1,new cljs.core.Keyword(null,"to","to",192099007));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75255__$1,new cljs.core.Keyword(null,"val","val",128701612));

var G__75257 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__75258 = cljs.core.deref(val.widget.state);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__75258) : f.call(null,G__75258));
})(),new cljs.core.Keyword(null,"from","from",1815293044),from,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"to","to",192099007),to], 0));
return (nextjournal.livedoc.block_opts__GT_decoration.cljs$core$IFn$_invoke$arity$1 ? nextjournal.livedoc.block_opts__GT_decoration.cljs$core$IFn$_invoke$arity$1(G__75257) : nextjournal.livedoc.block_opts__GT_decoration.call(null,G__75257));
});
nextjournal.livedoc.update_blocks = (function nextjournal$livedoc$update_blocks(update_spec,blocks){
return blocks.update(update_spec);
});
nextjournal.livedoc.set_selected = (function nextjournal$livedoc$set_selected(p__75260,pos){
var map__75261 = p__75260;
var map__75261__$1 = cljs.core.__destructure_map(map__75261);
var doc = map__75261__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75261__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"selected","selected",574897764),nextjournal.livedoc.pos__GT_block_idx(nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$1(blocks),pos));
});
nextjournal.livedoc.default_config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
var map__75262 = cljs.core.deref(state);
var map__75262__$1 = cljs.core.__destructure_map(map__75262);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75262__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75262__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75262__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.m-2.border.rounded","div.m-2.border.rounded",-1611687755),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selected_QMARK_)?"ring-4":null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),type))?"bg-slate-100":null)], null)], null),(function (){var G__75264 = type;
var G__75264__$1 = (((G__75264 instanceof cljs.core.Keyword))?G__75264.fqn:null);
switch (G__75264__$1) {
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-2","div.p-2",-325121057),text], null);

break;
case "code":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.p-2","pre.p-2",-80322918),text], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75264__$1)].join('')));

}
})()], null);
})], null);
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.livedoc !== 'undefined') && (typeof nextjournal.livedoc.config_state !== 'undefined')){
} else {
/**
 * Configurable entrypoint see also `extensions/1` fn below.
 */
nextjournal.livedoc.config_state = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(nextjournal.livedoc.default_config),"update":(function (cfg,_){
return cfg;
})}));
}
nextjournal.livedoc.config_get = (function nextjournal$livedoc$config_get(var_args){
var G__75273 = arguments.length;
switch (G__75273) {
case 1:
return nextjournal.livedoc.config_get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.livedoc.config_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.livedoc.config_get.cljs$core$IFn$_invoke$arity$1 = (function (state){
return state.field(nextjournal.livedoc.config_state);
}));

(nextjournal.livedoc.config_get.cljs$core$IFn$_invoke$arity$2 = (function (state,key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(nextjournal.livedoc.config_get.cljs$core$IFn$_invoke$arity$1(state),key);
}));

(nextjournal.livedoc.config_get.cljs$lang$maxFixedArity = 2);

if((typeof nextjournal !== 'undefined') && (typeof nextjournal.livedoc !== 'undefined') && (typeof nextjournal.livedoc.doc_apply_op !== 'undefined')){
} else {
nextjournal.livedoc.doc_apply_op = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.define();
}
/**
 * Get first effect value matching type from a transaction
 */
nextjournal.livedoc.get_effect_value = (function nextjournal$livedoc$get_effect_value(tr,effect_type){
return cljs.core.some((function (p1__75274_SHARP_){
var and__4221__auto__ = p1__75274_SHARP_.is(effect_type);
if(cljs.core.truth_(and__4221__auto__)){
return p1__75274_SHARP_.value;
} else {
return and__4221__auto__;
}
}),tr.effects);
});
nextjournal.livedoc.decorate = (function nextjournal$livedoc$decorate(state){
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.set((nextjournal.livedoc.state__GT_blocks.cljs$core$IFn$_invoke$arity$1 ? nextjournal.livedoc.state__GT_blocks.cljs$core$IFn$_invoke$arity$1(state) : nextjournal.livedoc.state__GT_blocks.call(null,state)));
});
nextjournal.livedoc.decorate_PLUS_eval_BANG_ = (function nextjournal$livedoc$decorate_PLUS_eval_BANG_(state){
var G__75304 = state;
var G__75305 = module$node_modules$$codemirror$view$dist$index_cjs.Decoration.set((nextjournal.livedoc.state__GT_blocks.cljs$core$IFn$_invoke$arity$1 ? nextjournal.livedoc.state__GT_blocks.cljs$core$IFn$_invoke$arity$1(state) : nextjournal.livedoc.state__GT_blocks.call(null,state)));
return (nextjournal.livedoc.eval_all_BANG_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.livedoc.eval_all_BANG_.cljs$core$IFn$_invoke$arity$2(G__75304,G__75305) : nextjournal.livedoc.eval_all_BANG_.call(null,G__75304,G__75305));
});
nextjournal.livedoc.edit_gap_blocks = (function nextjournal$livedoc$edit_gap_blocks(p__75307,state){
var map__75308 = p__75307;
var map__75308__$1 = cljs.core.__destructure_map(map__75308);
var edit_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75308__$1,new cljs.core.Keyword(null,"edit-from","edit-from",-2107415077));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75308__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
if(cljs.core.truth_(edit_from)){
var bs = (function (){var G__75312 = state;
var G__75313 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),edit_from,new cljs.core.Keyword(null,"to","to",192099007),(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.some(nextjournal.livedoc.when_fn((function (p1__75306_SHARP_){
return (edit_from < new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__75306_SHARP_));
})),nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$2(blocks,edit_from)));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return state.doc.length;
}
})()], null);
return (nextjournal.livedoc.state__GT_blocks.cljs$core$IFn$_invoke$arity$2 ? nextjournal.livedoc.state__GT_blocks.cljs$core$IFn$_invoke$arity$2(G__75312,G__75313) : nextjournal.livedoc.state__GT_blocks.call(null,G__75312,G__75313));
})();
var seq__75316_75613 = cljs.core.seq(bs);
var chunk__75317_75614 = null;
var count__75318_75615 = (0);
var i__75319_75616 = (0);
while(true){
if((i__75319_75616 < count__75318_75615)){
var b_75617 = chunk__75317_75614.cljs$core$IIndexed$_nth$arity$2(null,i__75319_75616);
var G__75329_75618 = state;
var G__75330_75619 = b_75617.value.widget;
(nextjournal.livedoc.eval_widget_BANG_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.livedoc.eval_widget_BANG_.cljs$core$IFn$_invoke$arity$2(G__75329_75618,G__75330_75619) : nextjournal.livedoc.eval_widget_BANG_.call(null,G__75329_75618,G__75330_75619));


var G__75620 = seq__75316_75613;
var G__75621 = chunk__75317_75614;
var G__75622 = count__75318_75615;
var G__75623 = (i__75319_75616 + (1));
seq__75316_75613 = G__75620;
chunk__75317_75614 = G__75621;
count__75318_75615 = G__75622;
i__75319_75616 = G__75623;
continue;
} else {
var temp__5753__auto___75624 = cljs.core.seq(seq__75316_75613);
if(temp__5753__auto___75624){
var seq__75316_75625__$1 = temp__5753__auto___75624;
if(cljs.core.chunked_seq_QMARK_(seq__75316_75625__$1)){
var c__4649__auto___75626 = cljs.core.chunk_first(seq__75316_75625__$1);
var G__75627 = cljs.core.chunk_rest(seq__75316_75625__$1);
var G__75628 = c__4649__auto___75626;
var G__75629 = cljs.core.count(c__4649__auto___75626);
var G__75630 = (0);
seq__75316_75613 = G__75627;
chunk__75317_75614 = G__75628;
count__75318_75615 = G__75629;
i__75319_75616 = G__75630;
continue;
} else {
var b_75631 = cljs.core.first(seq__75316_75625__$1);
var G__75332_75632 = state;
var G__75333_75633 = b_75631.value.widget;
(nextjournal.livedoc.eval_widget_BANG_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.livedoc.eval_widget_BANG_.cljs$core$IFn$_invoke$arity$2(G__75332_75632,G__75333_75633) : nextjournal.livedoc.eval_widget_BANG_.call(null,G__75332_75632,G__75333_75633));


var G__75634 = cljs.core.next(seq__75316_75625__$1);
var G__75635 = null;
var G__75636 = (0);
var G__75637 = (0);
seq__75316_75613 = G__75634;
chunk__75317_75614 = G__75635;
count__75318_75615 = G__75636;
i__75319_75616 = G__75637;
continue;
}
} else {
}
}
break;
}

return bs;
} else {
return null;
}
});
nextjournal.livedoc.edit_at = (function nextjournal$livedoc$edit_at(p__75341,tr,pos){
var map__75342 = p__75341;
var map__75342__$1 = cljs.core.__destructure_map(map__75342);
var doc = map__75342__$1;
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75342__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75342__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var edit_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75342__$1,new cljs.core.Keyword(null,"edit-from","edit-from",-2107415077));
var map__75344 = nextjournal.livedoc.block_at(blocks,pos);
var map__75344__$1 = cljs.core.__destructure_map(map__75344);
var current_block = map__75344__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75344__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var gap_blocks = nextjournal.livedoc.edit_gap_blocks(doc,tr.state);
var selected_block = (cljs.core.truth_(selected)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$1(blocks),selected):null);
var G__75345 = doc;
if(cljs.core.truth_(current_block)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__75345,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-all?","edit-all?",345949029)], 0)),new cljs.core.Keyword(null,"edit-from","edit-from",-2107415077),from,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"doc-changed?","doc-changed?",1729979339),(function (){var and__4221__auto__ = edit_from;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(edit_from,from);
} else {
return and__4221__auto__;
}
})()], 0)),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.livedoc.update_blocks,(function (){var G__75346 = ({"filter":(function (_from,_to,p__75347){
var map__75350 = p__75347;
var map__75350__$1 = (((((!((map__75350 == null))))?(((((map__75350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75350):map__75350);
var widget = (function (){var obj75352 = map__75350__$1;
if((!((obj75352 == null)))){
return (obj75352["widget"]);
} else {
return undefined;
}
})();
return cljs.core.not((function (){var or__4223__auto__ = widget.eq(nextjournal.livedoc.__GT_widget(current_block));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.truth_(selected_block)){
return widget.eq(nextjournal.livedoc.__GT_widget(selected_block));
} else {
return null;
}
}
})());
})});
var G__75346__$1 = (cljs.core.truth_(gap_blocks)?(function (){var obj75353 = G__75346;
var obj75354 = (((!((obj75353 == null))))?obj75353:({}));
(obj75354["add"] = gap_blocks);

return obj75354;
})():G__75346);
if(cljs.core.truth_((function (){var and__4221__auto__ = selected_block;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(nextjournal.livedoc.block_eq_QMARK_(selected_block,current_block));
} else {
return and__4221__auto__;
}
})())){
var obj75357 = G__75346__$1;
var obj75358 = (((!((obj75357 == null))))?obj75357:({}));
(obj75358["add"] = [nextjournal.livedoc.update_block(selected_block,(function (p1__75337_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__75337_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
}))]);

return obj75358;
} else {
return G__75346__$1;
}
})()));
} else {
return G__75345;
}
});
nextjournal.livedoc.preview_PLUS_select_PLUS_eval = (function nextjournal$livedoc$preview_PLUS_select_PLUS_eval(doc,tr){
var gap_blocks = nextjournal.livedoc.edit_gap_blocks(doc,tr.state);
var G__75361 = doc;
if(cljs.core.truth_(gap_blocks)){
return nextjournal.livedoc.set_selected(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__75361,new cljs.core.Keyword(null,"edit-all?","edit-all?",345949029),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-from","edit-from",-2107415077),new cljs.core.Keyword(null,"doc-changed?","doc-changed?",1729979339)], 0)),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.livedoc.update_blocks,({"add":gap_blocks}))),nextjournal.livedoc.__GT_cursor_pos(tr.state));
} else {
return G__75361;
}
});
nextjournal.livedoc.preview_all_PLUS_select_PLUS_eval = (function nextjournal$livedoc$preview_all_PLUS_select_PLUS_eval(doc,tr){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(nextjournal.livedoc.set_selected(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"blocks","blocks",-610462153),nextjournal.livedoc.decorate_PLUS_eval_BANG_(tr.state)),nextjournal.livedoc.__GT_cursor_pos(tr.state)),new cljs.core.Keyword(null,"edit-all?","edit-all?",345949029),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"doc-changed?","doc-changed?",1729979339),new cljs.core.Keyword(null,"edit-from","edit-from",-2107415077)], 0));
});
nextjournal.livedoc.edit_all = (function nextjournal$livedoc$edit_all(doc,_tr){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(doc,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"doc-changed?","doc-changed?",1729979339),new cljs.core.Keyword(null,"edit-from","edit-from",-2107415077)], 0)),new cljs.core.Keyword(null,"edit-all?","edit-all?",345949029),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blocks","blocks",-610462153),module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none], 0));
});
nextjournal.livedoc.move_block_selection_BANG_ = (function nextjournal$livedoc$move_block_selection_BANG_(p__75368,_tr,dir){
var map__75369 = p__75368;
var map__75369__$1 = cljs.core.__destructure_map(map__75369);
var doc = map__75369__$1;
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75369__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75369__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var block_seq = nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$1(blocks);
var next_idx = (function (){var G__75370 = dir;
var G__75370__$1 = (((G__75370 instanceof cljs.core.Keyword))?G__75370.fqn:null);
switch (G__75370__$1) {
case "up":
return nextjournal.livedoc.bounded_dec(selected);

break;
case "down":
return nextjournal.livedoc.bounded_inc(selected,cljs.core.count(block_seq));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75370__$1)].join('')));

}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected,next_idx)){
var seq__75374_75644 = cljs.core.seq(nextjournal.livedoc.with_index(block_seq));
var chunk__75375_75645 = null;
var count__75376_75646 = (0);
var i__75377_75647 = (0);
while(true){
if((i__75377_75647 < count__75376_75646)){
var vec__75388_75648 = chunk__75375_75645.cljs$core$IIndexed$_nth$arity$2(null,i__75377_75647);
var idx_75649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75388_75648,(0),null);
var map__75391_75650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75388_75648,(1),null);
var map__75391_75651__$1 = cljs.core.__destructure_map(map__75391_75650);
var val_75652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75391_75651__$1,new cljs.core.Keyword(null,"val","val",128701612));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(val_75652.widget.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_idx,idx_75649));


var G__75653 = seq__75374_75644;
var G__75654 = chunk__75375_75645;
var G__75655 = count__75376_75646;
var G__75656 = (i__75377_75647 + (1));
seq__75374_75644 = G__75653;
chunk__75375_75645 = G__75654;
count__75376_75646 = G__75655;
i__75377_75647 = G__75656;
continue;
} else {
var temp__5753__auto___75657 = cljs.core.seq(seq__75374_75644);
if(temp__5753__auto___75657){
var seq__75374_75658__$1 = temp__5753__auto___75657;
if(cljs.core.chunked_seq_QMARK_(seq__75374_75658__$1)){
var c__4649__auto___75659 = cljs.core.chunk_first(seq__75374_75658__$1);
var G__75660 = cljs.core.chunk_rest(seq__75374_75658__$1);
var G__75661 = c__4649__auto___75659;
var G__75662 = cljs.core.count(c__4649__auto___75659);
var G__75663 = (0);
seq__75374_75644 = G__75660;
chunk__75375_75645 = G__75661;
count__75376_75646 = G__75662;
i__75377_75647 = G__75663;
continue;
} else {
var vec__75393_75664 = cljs.core.first(seq__75374_75658__$1);
var idx_75665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75393_75664,(0),null);
var map__75396_75666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75393_75664,(1),null);
var map__75396_75667__$1 = cljs.core.__destructure_map(map__75396_75666);
var val_75668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75396_75667__$1,new cljs.core.Keyword(null,"val","val",128701612));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(val_75668.widget.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_idx,idx_75665));


var G__75669 = cljs.core.next(seq__75374_75658__$1);
var G__75670 = null;
var G__75671 = (0);
var G__75672 = (0);
seq__75374_75644 = G__75669;
chunk__75375_75645 = G__75670;
count__75376_75646 = G__75671;
i__75377_75647 = G__75672;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"selected","selected",574897764),next_idx),new cljs.core.Keyword(null,"edit-all?","edit-all?",345949029),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"doc-changed?","doc-changed?",1729979339),new cljs.core.Keyword(null,"edit-from","edit-from",-2107415077)], 0));
});
nextjournal.livedoc.select_all_BANG_ = (function nextjournal$livedoc$select_all_BANG_(p__75397){
var map__75398 = p__75397;
var map__75398__$1 = cljs.core.__destructure_map(map__75398);
var doc = map__75398__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75398__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var seq__75399_75673 = cljs.core.seq(nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$1(blocks));
var chunk__75400_75674 = null;
var count__75401_75675 = (0);
var i__75402_75676 = (0);
while(true){
if((i__75402_75676 < count__75401_75675)){
var map__75405_75677 = chunk__75400_75674.cljs$core$IIndexed$_nth$arity$2(null,i__75402_75676);
var map__75405_75678__$1 = cljs.core.__destructure_map(map__75405_75677);
var val_75679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75405_75678__$1,new cljs.core.Keyword(null,"val","val",128701612));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(val_75679.widget.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);


var G__75680 = seq__75399_75673;
var G__75681 = chunk__75400_75674;
var G__75682 = count__75401_75675;
var G__75683 = (i__75402_75676 + (1));
seq__75399_75673 = G__75680;
chunk__75400_75674 = G__75681;
count__75401_75675 = G__75682;
i__75402_75676 = G__75683;
continue;
} else {
var temp__5753__auto___75684 = cljs.core.seq(seq__75399_75673);
if(temp__5753__auto___75684){
var seq__75399_75685__$1 = temp__5753__auto___75684;
if(cljs.core.chunked_seq_QMARK_(seq__75399_75685__$1)){
var c__4649__auto___75686 = cljs.core.chunk_first(seq__75399_75685__$1);
var G__75687 = cljs.core.chunk_rest(seq__75399_75685__$1);
var G__75688 = c__4649__auto___75686;
var G__75689 = cljs.core.count(c__4649__auto___75686);
var G__75690 = (0);
seq__75399_75673 = G__75687;
chunk__75400_75674 = G__75688;
count__75401_75675 = G__75689;
i__75402_75676 = G__75690;
continue;
} else {
var map__75406_75691 = cljs.core.first(seq__75399_75685__$1);
var map__75406_75692__$1 = cljs.core.__destructure_map(map__75406_75691);
var val_75693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75406_75692__$1,new cljs.core.Keyword(null,"val","val",128701612));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(val_75693.widget.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);


var G__75694 = cljs.core.next(seq__75399_75685__$1);
var G__75695 = null;
var G__75696 = (0);
var G__75697 = (0);
seq__75399_75673 = G__75694;
chunk__75400_75674 = G__75695;
count__75401_75675 = G__75696;
i__75402_75676 = G__75697;
continue;
}
} else {
}
}
break;
}

return doc;
});
nextjournal.livedoc.restore_selection_BANG_ = (function nextjournal$livedoc$restore_selection_BANG_(p__75424){
var map__75425 = p__75424;
var map__75425__$1 = cljs.core.__destructure_map(map__75425);
var doc = map__75425__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75425__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75425__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var seq__75426_75698 = cljs.core.seq(nextjournal.livedoc.with_index(nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$1(blocks)));
var chunk__75427_75699 = null;
var count__75428_75700 = (0);
var i__75429_75701 = (0);
while(true){
if((i__75429_75701 < count__75428_75700)){
var vec__75439_75702 = chunk__75427_75699.cljs$core$IIndexed$_nth$arity$2(null,i__75429_75701);
var idx_75703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75439_75702,(0),null);
var map__75442_75704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75439_75702,(1),null);
var map__75442_75705__$1 = cljs.core.__destructure_map(map__75442_75704);
var val_75706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75442_75705__$1,new cljs.core.Keyword(null,"val","val",128701612));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(val_75706.widget.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx_75703,selected));


var G__75707 = seq__75426_75698;
var G__75708 = chunk__75427_75699;
var G__75709 = count__75428_75700;
var G__75710 = (i__75429_75701 + (1));
seq__75426_75698 = G__75707;
chunk__75427_75699 = G__75708;
count__75428_75700 = G__75709;
i__75429_75701 = G__75710;
continue;
} else {
var temp__5753__auto___75711 = cljs.core.seq(seq__75426_75698);
if(temp__5753__auto___75711){
var seq__75426_75712__$1 = temp__5753__auto___75711;
if(cljs.core.chunked_seq_QMARK_(seq__75426_75712__$1)){
var c__4649__auto___75713 = cljs.core.chunk_first(seq__75426_75712__$1);
var G__75714 = cljs.core.chunk_rest(seq__75426_75712__$1);
var G__75715 = c__4649__auto___75713;
var G__75716 = cljs.core.count(c__4649__auto___75713);
var G__75717 = (0);
seq__75426_75698 = G__75714;
chunk__75427_75699 = G__75715;
count__75428_75700 = G__75716;
i__75429_75701 = G__75717;
continue;
} else {
var vec__75449_75719 = cljs.core.first(seq__75426_75712__$1);
var idx_75720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75449_75719,(0),null);
var map__75452_75721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75449_75719,(1),null);
var map__75452_75722__$1 = cljs.core.__destructure_map(map__75452_75721);
var val_75723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75452_75722__$1,new cljs.core.Keyword(null,"val","val",128701612));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(val_75723.widget.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx_75720,selected));


var G__75725 = cljs.core.next(seq__75426_75712__$1);
var G__75726 = null;
var G__75727 = (0);
var G__75728 = (0);
seq__75426_75698 = G__75725;
chunk__75427_75699 = G__75726;
count__75428_75700 = G__75727;
i__75429_75701 = G__75728;
continue;
}
} else {
}
}
break;
}

return doc;
});
nextjournal.livedoc.eval_widget_BANG_ = (function nextjournal$livedoc$eval_widget_BANG_(state,widget){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(widget.state)))){
var temp__5757__auto__ = nextjournal.livedoc.config_get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"eval-fn!","eval-fn!",-1362754376));
if((temp__5757__auto__ == null)){
return null;
} else {
var eval_fn_BANG_ = temp__5757__auto__;
var G__75453 = widget.state;
return (eval_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? eval_fn_BANG_.cljs$core$IFn$_invoke$arity$1(G__75453) : eval_fn_BANG_.call(null,G__75453));
}
} else {
return null;
}
});
nextjournal.livedoc.eval_all_BANG_ = (function nextjournal$livedoc$eval_all_BANG_(state,blocks){
var seq__75455_75729 = cljs.core.seq(nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$1(blocks));
var chunk__75456_75730 = null;
var count__75457_75731 = (0);
var i__75458_75732 = (0);
while(true){
if((i__75458_75732 < count__75457_75731)){
var map__75462_75733 = chunk__75456_75730.cljs$core$IIndexed$_nth$arity$2(null,i__75458_75732);
var map__75462_75734__$1 = cljs.core.__destructure_map(map__75462_75733);
var val_75735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75462_75734__$1,new cljs.core.Keyword(null,"val","val",128701612));
nextjournal.livedoc.eval_widget_BANG_(state,val_75735.widget);


var G__75736 = seq__75455_75729;
var G__75737 = chunk__75456_75730;
var G__75738 = count__75457_75731;
var G__75739 = (i__75458_75732 + (1));
seq__75455_75729 = G__75736;
chunk__75456_75730 = G__75737;
count__75457_75731 = G__75738;
i__75458_75732 = G__75739;
continue;
} else {
var temp__5753__auto___75740 = cljs.core.seq(seq__75455_75729);
if(temp__5753__auto___75740){
var seq__75455_75741__$1 = temp__5753__auto___75740;
if(cljs.core.chunked_seq_QMARK_(seq__75455_75741__$1)){
var c__4649__auto___75742 = cljs.core.chunk_first(seq__75455_75741__$1);
var G__75743 = cljs.core.chunk_rest(seq__75455_75741__$1);
var G__75744 = c__4649__auto___75742;
var G__75745 = cljs.core.count(c__4649__auto___75742);
var G__75746 = (0);
seq__75455_75729 = G__75743;
chunk__75456_75730 = G__75744;
count__75457_75731 = G__75745;
i__75458_75732 = G__75746;
continue;
} else {
var map__75463_75747 = cljs.core.first(seq__75455_75741__$1);
var map__75463_75748__$1 = cljs.core.__destructure_map(map__75463_75747);
var val_75749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75463_75748__$1,new cljs.core.Keyword(null,"val","val",128701612));
nextjournal.livedoc.eval_widget_BANG_(state,val_75749.widget);


var G__75750 = cljs.core.next(seq__75455_75741__$1);
var G__75751 = null;
var G__75752 = (0);
var G__75753 = (0);
seq__75455_75729 = G__75750;
chunk__75456_75730 = G__75751;
count__75457_75731 = G__75752;
i__75458_75732 = G__75753;
continue;
}
} else {
}
}
break;
}

return blocks;
});
nextjournal.livedoc.preview_PLUS_eval = (function nextjournal$livedoc$preview_PLUS_eval(p__75465,tr,all_QMARK_){
var map__75466 = p__75465;
var map__75466__$1 = cljs.core.__destructure_map(map__75466);
var doc = map__75466__$1;
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75466__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var edit_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75466__$1,new cljs.core.Keyword(null,"edit-from","edit-from",-2107415077));
var edit_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75466__$1,new cljs.core.Keyword(null,"edit-all?","edit-all?",345949029));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75466__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
if(cljs.core.truth_(edit_all_QMARK_)){
return nextjournal.livedoc.preview_all_PLUS_select_PLUS_eval(doc,tr);
} else {
if(cljs.core.truth_(edit_from)){
return nextjournal.livedoc.preview_PLUS_select_PLUS_eval(doc,tr);
} else {
if(cljs.core.truth_(all_QMARK_)){
nextjournal.livedoc.eval_all_BANG_(tr.state,blocks);
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = selected;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(all_QMARK_);
} else {
return and__4221__auto__;
}
})())){
var temp__5757__auto___75756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$1(blocks),selected);
if((temp__5757__auto___75756 == null)){
} else {
var map__75467_75757 = temp__5757__auto___75756;
var map__75467_75758__$1 = cljs.core.__destructure_map(map__75467_75757);
var val_75759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75467_75758__$1,new cljs.core.Keyword(null,"val","val",128701612));
nextjournal.livedoc.eval_widget_BANG_(tr.state,val_75759.widget);
}
} else {
}
}

return doc;

}
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.livedoc !== 'undefined') && (typeof nextjournal.livedoc.doc_state !== 'undefined')){
} else {
/**
 * Maintains a document description at block level
 */
nextjournal.livedoc.doc_state = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"provide":(function (field){
return module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(field,(function (p1__75468_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__75468_SHARP_,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
}));
}),"create":(function (cm_state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),(0),new cljs.core.Keyword(null,"blocks","blocks",-610462153),nextjournal.livedoc.decorate_PLUS_eval_BANG_(cm_state)], null);
}),"update":(function (p__75472,tr){
var map__75473 = p__75472;
var map__75473__$1 = cljs.core.__destructure_map(map__75473);
var doc = map__75473__$1;
var edit_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75473__$1,new cljs.core.Keyword(null,"edit-all?","edit-all?",345949029));
var map__75474 = nextjournal.livedoc.get_effect_value(tr,nextjournal.livedoc.doc_apply_op);
var map__75474__$1 = cljs.core.__destructure_map(map__75474);
var apply_op = map__75474__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75474__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75474__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var map__75475 = nextjournal.livedoc.get_effect_value(tr,nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
var map__75475__$1 = cljs.core.__destructure_map(map__75475);
var me = map__75475__$1;
var Meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75475__$1,"Meta");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75475__$1,"Shift");
if(cljs.core.truth_(apply_op)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(op,doc,tr,args);
} else {
if(cljs.core.truth_(tr.docChanged)){
var G__75476 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"doc-changed?","doc-changed?",1729979339),true);
if(cljs.core.not(edit_all_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__75476,new cljs.core.Keyword(null,"blocks","blocks",-610462153),(function (p1__75469_SHARP_){
return p1__75469_SHARP_.map(tr.changes);
}));
} else {
return G__75476;
}
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = me;
if(cljs.core.truth_(and__4221__auto__)){
var and__4221__auto____$1 = Meta;
if(cljs.core.truth_(and__4221__auto____$1)){
return Shift;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return nextjournal.livedoc.select_all_BANG_(doc);
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = me;
if(cljs.core.truth_(and__4221__auto__)){
return ((cljs.core.not(Meta)) || (cljs.core.not(Shift)));
} else {
return and__4221__auto__;
}
})())){
return nextjournal.livedoc.restore_selection_BANG_(doc);
} else {
return doc;

}
}
}
}
})}));
}
nextjournal.livedoc.get_blocks = (function nextjournal$livedoc$get_blocks(state){
return nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state.field(nextjournal.livedoc.doc_state)));
});
nextjournal.livedoc.render_block_preview = (function nextjournal$livedoc$render_block_preview(widget,view){
var el = document.createElement("div");
var editor_state = view.state;
var widget_state = widget.state;
var render = nextjournal.livedoc.config_get.cljs$core$IFn$_invoke$arity$2(editor_state,new cljs.core.Keyword(null,"render","render",-1408033454));
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cursor-pointer","div.cursor-pointer",1719595822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
var temp__5757__auto__ = nextjournal.livedoc.get_block_by_id(editor_state,widget.id);
if((temp__5757__auto__ == null)){
return null;
} else {
var map__75482 = temp__5757__auto__;
var map__75482__$1 = cljs.core.__destructure_map(map__75482);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75482__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return view.dispatch(({"effects":nextjournal.livedoc.doc_apply_op.of(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),nextjournal.livedoc.edit_at,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from], null)], null)),"selection":({"anchor":from}),"scrollIntoView":true}));
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [render,widget_state], null)], null),el);

return el;
});
nextjournal.livedoc.BlockPreviewWidget = class nextjournal$livedoc$BlockPreviewWidget extends module$node_modules$$codemirror$view$dist$index_cjs.WidgetType {
  constructor(G__75483) {
var spec_75772 = G__75483;
super();
var self__ = this;

var obj75484_75774 = self__;
var obj75485_75775 = (function (){var obj75486 = (function (){var obj75487 = (function (){var obj75488 = (function (){var obj75489 = (((!((obj75484_75774 == null))))?obj75484_75774:({}));
(obj75489["id"] = cljs.core.random_uuid());

return obj75489;
})();
(obj75488["state"] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(spec_75772));

return obj75488;
})();
(obj75487["ignoreEvent"] = cljs.core.constantly(false));

return obj75487;
})();
(obj75486["toDOM"] = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.livedoc.render_block_preview,self__));

return obj75486;
})();
(obj75485_75775["eq"] = (function (other){
return (self__.id === other.id);
}));

  }
};
nextjournal.livedoc.block_opts__GT_decoration = (function nextjournal$livedoc$block_opts__GT_decoration(p__75492){
var map__75493 = p__75492;
var map__75493__$1 = cljs.core.__destructure_map(map__75493);
var opts = map__75493__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75493__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75493__$1,new cljs.core.Keyword(null,"to","to",192099007));
if((from < to)){
} else {
throw (new Error(["Assert failed: ",["Bad range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opts)].join(''),"\n","(< from to)"].join('')));
}

return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.replace(({"block":true,"widget":(new nextjournal.livedoc.BlockPreviewWidget(cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null))))})).range(from,to);
});
nextjournal.livedoc.node_info__GT_decoration = (function nextjournal$livedoc$node_info__GT_decoration(state,p__75494){
var map__75495 = p__75494;
var map__75495__$1 = cljs.core.__destructure_map(map__75495);
var opts = map__75495__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75495__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75495__$1,new cljs.core.Keyword(null,"to","to",192099007));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75495__$1,new cljs.core.Keyword(null,"node","node",581201198));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75495__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75495__$1,new cljs.core.Keyword(null,"select?","select?",-1012224063));
return nextjournal.livedoc.block_opts__GT_decoration((function (){var G__75496 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"text","text",-1790561697),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),type))?state.doc.sliceString(from,to):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),type))?(function (){var temp__5755__auto__ = node.getChild("CodeText");
if((temp__5755__auto__ == null)){
return "";
} else {
var code_text = temp__5755__auto__;
return state.doc.sliceString(code_text.from,code_text.to);
}
})():null)));
if(cljs.core.truth_((function (){var and__4221__auto__ = select_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return nextjournal.livedoc.within_QMARK_(nextjournal.livedoc.__GT_cursor_pos(state),opts);
} else {
return and__4221__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75496,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
} else {
return G__75496;
}
})());
});
/**
 * Partitions the document into ranges delimited by code blocks
 */
nextjournal.livedoc.state__GT_blocks = (function nextjournal$livedoc$state__GT_blocks(var_args){
var G__75498 = arguments.length;
switch (G__75498) {
case 1:
return nextjournal.livedoc.state__GT_blocks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.livedoc.state__GT_blocks.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.livedoc.state__GT_blocks.cljs$core$IFn$_invoke$arity$1 = (function (state){
return nextjournal.livedoc.state__GT_blocks.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.livedoc.state__GT_blocks.cljs$core$IFn$_invoke$arity$2 = (function (state,p__75499){
var map__75500 = p__75499;
var map__75500__$1 = cljs.core.__destructure_map(map__75500);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75500__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75500__$1,new cljs.core.Keyword(null,"to","to",192099007),state.doc.length);
var select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75500__$1,new cljs.core.Keyword(null,"select?","select?",-1012224063),true);
var blocks = [];
(function (){var or__4223__auto__ = module$node_modules$$codemirror$language$dist$index_cjs.ensureSyntaxTree(state,to,(1000));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return module$node_modules$$codemirror$language$dist$index_cjs.syntaxTree(state);
}
})().iterate(({"from":from,"to":to,"enter":(function (node){
if(nextjournal.livedoc.doc_QMARK_(node)){
return true;
} else {
if(nextjournal.livedoc.fenced_code_QMARK_(node)){
var last_to_75785 = (function (){var G__75501 = blocks;
var G__75501__$1 = (((G__75501 == null))?null:G__75501.at((-1)));
if((G__75501__$1 == null)){
return null;
} else {
return G__75501__$1.to;
}
})();
var block_from_75786 = (function (){var or__4223__auto__ = last_to_75785;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return from;
}
})();
var G__75502_75787 = blocks;
var G__75502_75788__$1 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,nextjournal.clojure_mode.node.start(node))) && ((((block_from_75786 < nextjournal.clojure_mode.node.start(node))) && (((cljs.core.not(last_to_75785)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((last_to_75785 + (1)),nextjournal.clojure_mode.node.start(node)))))))))?(function (){var Array75503 = G__75502_75787;
Array75503.push(nextjournal.livedoc.node_info__GT_decoration(state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),block_from_75786,new cljs.core.Keyword(null,"to","to",192099007),nextjournal.clojure_mode.node.start(node),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"select?","select?",-1012224063),select_QMARK_], null)));

return Array75503;
})():G__75502_75787);
if((((from <= nextjournal.clojure_mode.node.start(node))) && ((nextjournal.clojure_mode.node.end(node) <= to)))){
var Array75504_75789 = G__75502_75788__$1;
Array75504_75789.push(nextjournal.livedoc.node_info__GT_decoration(state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(node),new cljs.core.Keyword(null,"to","to",192099007),(function (){var x__4309__auto__ = (nextjournal.clojure_mode.node.end(node) + (1));
var y__4310__auto__ = to;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})(),new cljs.core.Keyword(null,"node","node",581201198),node.node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"select?","select?",-1012224063),select_QMARK_], null)));

} else {
}
} else {
}

return false;
}
})}));

var last_to = (function (){var G__75505 = blocks;
var G__75505__$1 = (((G__75505 == null))?null:G__75505.at((-1)));
if((G__75505__$1 == null)){
return null;
} else {
return G__75505__$1.to;
}
})();
var G__75506 = blocks;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(to,last_to)){
var Array75507 = G__75506;
Array75507.push(nextjournal.livedoc.node_info__GT_decoration(state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),(function (){var or__4223__auto__ = last_to;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return from;
}
})(),new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"select?","select?",-1012224063),select_QMARK_], null)));

return Array75507;
} else {
return G__75506;
}
}));

(nextjournal.livedoc.state__GT_blocks.cljs$lang$maxFixedArity = 2);

nextjournal.livedoc.eval_region_text = (function nextjournal$livedoc$eval_region_text(state){
var er = state.field(nextjournal.clojure_mode.extensions.eval_region.region_field);
if(((0) < er.size)){
var i = er.iter();
var from = i.from;
var to = i.to;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"text","text",-1790561697),state.doc.sliceString(from,to)], null);
} else {
return null;
}
});
nextjournal.livedoc.eval_region_text__GT_tooltip = (function nextjournal$livedoc$eval_region_text__GT_tooltip(create_fn,p__75512){
var map__75513 = p__75512;
var map__75513__$1 = cljs.core.__destructure_map(map__75513);
var ers = map__75513__$1;
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75513__$1,new cljs.core.Keyword(null,"to","to",192099007));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75513__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
if(cljs.core.seq(ers)){
return ({"pos":to,"above":false,"strictSide":true,"arrow":true,"create":cljs.core.partial.cljs$core$IFn$_invoke$arity$2(create_fn,text)});
} else {
return null;
}
});
nextjournal.livedoc.tooltip_theme = module$node_modules$$codemirror$view$dist$index_cjs.EditorView.theme(({".cm-tooltip":({"background-color":"#e2e8f0","border":"1px solid #cbd5e1"})}));
nextjournal.livedoc.eval_region_tooltip = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(null),"update":(function (_,tr){
return nextjournal.livedoc.eval_region_text(tr.state);
}),"provide":(function (f){
return module$node_modules$$codemirror$view$dist$index_cjs.showTooltip.compute([f,nextjournal.livedoc.config_state],(function (state){
var temp__5757__auto__ = new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058).cljs$core$IFn$_invoke$arity$1(state.field(nextjournal.livedoc.config_state));
if((temp__5757__auto__ == null)){
return null;
} else {
var tooltip_create_fn = temp__5757__auto__;
return nextjournal.livedoc.eval_region_text__GT_tooltip(tooltip_create_fn,state.field(f));
}
}));
})}));
nextjournal.livedoc.edit_adjacent_block_at = (function nextjournal$livedoc$edit_adjacent_block_at(view,blocks,key){
var pos = nextjournal.livedoc.__GT_cursor_pos(view.state);
var temp__5757__auto__ = (function (){var G__75521 = key;
var G__75521__$1 = (((G__75521 instanceof cljs.core.Keyword))?G__75521.fqn:null);
switch (G__75521__$1) {
case "up":
case "left":
return cljs.core.some(nextjournal.livedoc.when_fn((function (p1__75516_SHARP_){
return (new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__75516_SHARP_) <= pos);
})),cljs.core.reverse(blocks));

break;
case "down":
case "right":
return cljs.core.some(nextjournal.livedoc.when_fn((function (p1__75518_SHARP_){
return (pos <= new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__75518_SHARP_));
})),blocks);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75521__$1)].join('')));

}
})();
if((temp__5757__auto__ == null)){
return null;
} else {
var next_block = temp__5757__auto__;
var line = view.state.doc.lineAt(pos);
var G__75522 = key;
var G__75522__$1 = (((G__75522 instanceof cljs.core.Keyword))?G__75522.fqn:null);
switch (G__75522__$1) {
case "down":
case "right":
var offset = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),key))?(line.to - pos):null);
var new_pos = (function (){var G__75523 = (pos + (1));
if(cljs.core.truth_(offset)){
return (G__75523 + offset);
} else {
return G__75523;
}
})();
var end = view.state.doc.length;
if((((new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(next_block) < new_pos)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,view.moveVertically(view.state.selection.main,true).anchor)))))){
return view.state.doc.lineAt(new_pos).from;
} else {
return null;
}

break;
case "up":
case "left":
var offset = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),key))?(pos - line.from):null);
var new_pos = (function (){var G__75526 = (pos - (1));
if(cljs.core.truth_(offset)){
return (G__75526 - offset);
} else {
return G__75526;
}
})();
if((((new_pos <= new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(next_block))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),view.moveVertically(view.state.selection.main,false).anchor)))))){
return view.state.doc.lineAt(new_pos).from;
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75522__$1)].join('')));

}
}
});
nextjournal.livedoc.handle_keydown = (function nextjournal$livedoc$handle_keydown(e,view){
var temp__5757__auto__ = (function (){var G__75527 = e.which;
switch (G__75527) {
case (13):
if(cljs.core.truth_(e.metaKey)){
return new cljs.core.Keyword(null,"eval","eval",-1103567905);
} else {
return null;
}

break;
case (40):
return new cljs.core.Keyword(null,"down","down",1565245570);

break;
case (38):
return new cljs.core.Keyword(null,"up","up",-269712113);

break;
case (27):
return new cljs.core.Keyword(null,"esc","esc",-1671924121);

break;
case (39):
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
case (37):
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
default:
return null;

}
})();
if((temp__5757__auto__ == null)){
return null;
} else {
var key = temp__5757__auto__;
var map__75529 = view.state.field(nextjournal.livedoc.doc_state);
var map__75529__$1 = cljs.core.__destructure_map(map__75529);
var doc_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75529__$1,new cljs.core.Keyword(null,"doc-changed?","doc-changed?",1729979339));
var edit_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75529__$1,new cljs.core.Keyword(null,"edit-all?","edit-all?",345949029));
var edit_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75529__$1,new cljs.core.Keyword(null,"edit-from","edit-from",-2107415077));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75529__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75529__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var block_seq = nextjournal.livedoc.rangeset_seq.cljs$core$IFn$_invoke$arity$1(blocks);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eval","eval",-1103567905),key)){
view.dispatch(({"effects":nextjournal.livedoc.doc_apply_op.of(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),nextjournal.livedoc.preview_PLUS_eval,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.shiftKey], null)], null))}));

return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"esc","esc",-1671924121),key)){
if(cljs.core.truth_(selected)){
var at = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(block_seq,selected));
view.dispatch(({"effects":nextjournal.livedoc.doc_apply_op.of(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),nextjournal.livedoc.edit_at,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [at], null)], null)),"selection":({"anchor":at}),"scrollIntoView":true}));

return true;
} else {
if(cljs.core.truth_(edit_all_QMARK_)){
view.dispatch(({"effects":nextjournal.livedoc.doc_apply_op.of(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),nextjournal.livedoc.preview_all_PLUS_select_PLUS_eval], null))}));

return true;
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = edit_from;
if(cljs.core.truth_(and__4221__auto__)){
return doc_changed_QMARK_;
} else {
return and__4221__auto__;
}
})())){
view.dispatch(({"effects":nextjournal.livedoc.doc_apply_op.of(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),nextjournal.livedoc.preview_PLUS_select_PLUS_eval], null))}));

return true;
} else {
view.dispatch(({"effects":nextjournal.livedoc.doc_apply_op.of(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),nextjournal.livedoc.edit_all], null))}));

return true;

}
}
}
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = (function (){var fexpr__75530 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),null,new cljs.core.Keyword(null,"up","up",-269712113),null], null), null);
return (fexpr__75530.cljs$core$IFn$_invoke$arity$1 ? fexpr__75530.cljs$core$IFn$_invoke$arity$1(key) : fexpr__75530.call(null,key));
})();
if(cljs.core.truth_(and__4221__auto__)){
return selected;
} else {
return and__4221__auto__;
}
})())){
view.dispatch(({"effects":nextjournal.livedoc.doc_apply_op.of(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),nextjournal.livedoc.move_block_selection_BANG_,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)], null)),"scrollIntoView":true}));

return true;
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"esc","esc",-1671924121),key)) && (((cljs.core.not(selected)) && (((cljs.core.not(edit_all_QMARK_)) && (cljs.core.not(view.state.field(nextjournal.livedoc.eval_region_tooltip))))))))){
var temp__5757__auto____$1 = nextjournal.livedoc.edit_adjacent_block_at(view,block_seq,key);
if((temp__5757__auto____$1 == null)){
return null;
} else {
var at = temp__5757__auto____$1;
view.dispatch(({"effects":nextjournal.livedoc.doc_apply_op.of(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),nextjournal.livedoc.edit_at,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [at], null)], null)),"selection":({"anchor":at}),"scrollIntoView":true}));

return true;
}
} else {
return false;

}
}
}
}
}
});
/**
 * An extension turning a Markdown document in a blockwise preview-able editor
 */
nextjournal.livedoc.default_extensions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$codemirror$state$dist$index_cjs.Prec.low(nextjournal.livedoc.doc_state),module$node_modules$$codemirror$state$dist$index_cjs.Prec.highest(module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown":nextjournal.livedoc.handle_keydown}))),nextjournal.livedoc.eval_region_tooltip,nextjournal.livedoc.tooltip_theme], null);
/**
 * Accepts an `opts` map with optional keys:
 * * `:render` a component function taking a reagent atom as argument, such "state" derefs to a map with keys:
 *    - `:text` a cell's text
 *    - `:type` with values `:code` or `:markdown`
 *    - `:selected?`
 *    the component is used to render blocks in preview mode
 * 
 * * `:eval-fn!` a function which is called against each selected block's state when eval commands are invoked
 * 
 * * `:tooltip` (String -> EditorView -> TooltipView) as per https://codemirror.net/docs/ref/#view.TooltipView
 *    when present, enables a Codemirror tooltips.
 *    Receives text spanned by the current region as per `nextjournal.clojure-mode.extensions.eval-region`, positions
 *    a tooltip at the end of the region.
 * 
 * Returns a default set of codemirror extensions.
 * 
 */
nextjournal.livedoc.extensions = (function nextjournal$livedoc$extensions(var_args){
var G__75532 = arguments.length;
switch (G__75532) {
case 0:
return nextjournal.livedoc.extensions.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return nextjournal.livedoc.extensions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.livedoc.extensions.cljs$core$IFn$_invoke$arity$0 = (function (){
return nextjournal.livedoc.extensions.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.livedoc.extensions.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cljs.core.cons((function (){var G__75533 = nextjournal.livedoc.config_state;
if(cljs.core.seq(opts)){
return G__75533.init((function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.livedoc.default_config,opts], 0));
}));
} else {
return G__75533;
}
})(),nextjournal.livedoc.default_extensions);
}));

(nextjournal.livedoc.extensions.cljs$lang$maxFixedArity = 1);

nextjournal.livedoc.handle_open_backticks = (function nextjournal$livedoc$handle_open_backticks(view){
var state = view.state;
if(nextjournal.livedoc.doc_QMARK_(state.tree)){
var sel = state.selection.main;
if(cljs.core.truth_((function (){var and__4221__auto__ = sel.empty;
if(cljs.core.truth_(and__4221__auto__)){
return ("``" === state.doc.lineAt(sel.anchor).text);
} else {
return and__4221__auto__;
}
})())){
return view.dispatch(state.update(({"changes":[({"insert":"\n```","from":sel.anchor})]})));
} else {
return null;
}
} else {
return null;
}
});
nextjournal.livedoc.markdown_language_support = (function (){var md = module$node_modules$$codemirror$lang_markdown$dist$index_cjs.markdown(({"defaultCodeLanguage":nextjournal.clojure_mode.language_support,"base":(new module$node_modules$$codemirror$language$dist$index_cjs.Language(module$node_modules$$codemirror$lang_markdown$dist$index_cjs.markdownLanguage.data,module$node_modules$$codemirror$lang_markdown$dist$index_cjs.markdownLanguage.parser.configure(({"props":[module$node_modules$$codemirror$language$dist$index_cjs.indentNodeProp.add(({"Document":cljs.core.constantly((0))}))]}))))}));
return (new module$node_modules$$codemirror$language$dist$index_cjs.LanguageSupport(md.language,[md.support,module$node_modules$$codemirror$state$dist$index_cjs.Prec.high(module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":"`","run":nextjournal.livedoc.handle_open_backticks})]))]));
})();
nextjournal.livedoc.editor_state = (function nextjournal$livedoc$editor_state(p__75541){
var map__75543 = p__75541;
var map__75543__$1 = cljs.core.__destructure_map(map__75543);
var opts = map__75543__$1;
var extras = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75543__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75543__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.create(({"doc":clojure.string.trim(doc),"extensions":cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var G__75544 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(nextjournal.livedoc.extensions.cljs$core$IFn$_invoke$arity$1(cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"eval-fn!","eval-fn!",-1362754376)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$codemirror$language$dist$index_cjs.syntaxHighlighting(module$node_modules$$codemirror$language$dist$index_cjs.defaultHighlightStyle),module$node_modules$$codemirror$view$dist$index_cjs.keymap.of(nextjournal.clojure_mode.complete_keymap),nextjournal.livedoc.markdown_language_support], null));
if(cljs.core.seq(extras)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__75544,extras);
} else {
return G__75544;
}
})())}));
});
/**
 * A convenience function/component bundling a basic editor setup with
 * 
 *   * markdown + nested clojure-mode language support and their syntax highlighting
 *   * clojure mode keybindings for paredit actions among others
 *   * livedoc extensions configurable via `opts` (see `extensions`).
 * 
 *   Takes extra keys:
 * - `:doc` a markdown string setting the editor's initial document
 * - `:extenstions` extra codemirror extensions to be stacked on top of the default
 * - `:focus?` when true let the codemirror instance acquire focus.
 */
nextjournal.livedoc.editor = (function nextjournal$livedoc$editor(_opts){
return (function (p__75548){
var map__75549 = p__75548;
var map__75549__$1 = cljs.core.__destructure_map(map__75549);
var opts = map__75549__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75549__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75549__$1,new cljs.core.Keyword(null,"focus?","focus?",-3018488));
var with_let75551 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let75551","with-let75551",1986668381));
var temp__5757__auto___75803 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___75803 == null)){
} else {
var c__57349__auto___75804 = temp__5757__auto___75803;
if((with_let75551.generation === c__57349__auto___75804.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let75551.generation = c__57349__auto___75804.ratomGeneration);
}

var init75552 = (with_let75551.length === (0));
var _BANG_v = ((((init75552) || (cljs.core.not(with_let75551.hasOwnProperty((0))))))?(with_let75551[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let75551[(0)]));
var res75554 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(_BANG_v,(function (){var G__75556 = (new module$node_modules$$codemirror$view$dist$index_cjs.EditorView(({"state":nextjournal.livedoc.editor_state(opts),"parent":el})));
var G__75559_75805 = G__75556;
if(cljs.core.truth_(focus_QMARK_)){
G__75559_75805.focus();
} else {
}

return G__75556;
})());
} else {
var G__75561 = cljs.core.deref(_BANG_v);
if((G__75561 == null)){
return null;
} else {
return G__75561.destroy();
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),doc], null));
return res75554;
});
});

//# sourceMappingURL=nextjournal.livedoc.js.map
