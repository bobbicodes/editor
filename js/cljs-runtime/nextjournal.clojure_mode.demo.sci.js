goog.provide('nextjournal.clojure_mode.demo.sci');
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
nextjournal.clojure_mode.demo.sci.eval_string = (function nextjournal$clojure_mode$demo$sci$eval_string(var_args){
var G__75535 = arguments.length;
switch (G__75535) {
case 1:
return nextjournal.clojure_mode.demo.sci.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.demo.sci.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.demo.sci.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (source){
return nextjournal.clojure_mode.demo.sci.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_sci_ctx),source);
}));

(nextjournal.clojure_mode.demo.sci.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (ctx,source){
var temp__5757__auto__ = cljs.core.not_empty(clojure.string.trim(source));
if((temp__5757__auto__ == null)){
return null;
} else {
var code = temp__5757__auto__;
try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),sci.core.eval_string_STAR_(ctx,code)], null);
}catch (e75536){if((e75536 instanceof Error)){
var e = e75536;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)], null);
} else {
throw e75536;

}
}}
}));

(nextjournal.clojure_mode.demo.sci.eval_string.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.demo.sci.eval_at_cursor = (function nextjournal$clojure_mode$demo$sci$eval_at_cursor(on_result,p__75537){
var map__75538 = p__75537;
var map__75538__$1 = (((((!((map__75538 == null))))?(((((map__75538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75538):map__75538);
var state = (function (){var obj75540 = map__75538__$1;
if((!((obj75540 == null)))){
return (obj75540["state"]);
} else {
return undefined;
}
})();
var G__75542_75571 = nextjournal.clojure_mode.extensions.eval_region.cursor_node_string(state);
var G__75542_75572__$1 = (((G__75542_75571 == null))?null:nextjournal.clojure_mode.demo.sci.eval_string.cljs$core$IFn$_invoke$arity$1(G__75542_75571));
if((G__75542_75572__$1 == null)){
} else {
(on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__75542_75572__$1) : on_result.call(null,G__75542_75572__$1));
}

return true;
});
nextjournal.clojure_mode.demo.sci.eval_top_level = (function nextjournal$clojure_mode$demo$sci$eval_top_level(on_result,p__75545){
var map__75546 = p__75545;
var map__75546__$1 = (((((!((map__75546 == null))))?(((((map__75546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75546):map__75546);
var state = (function (){var obj75550 = map__75546__$1;
if((!((obj75550 == null)))){
return (obj75550["state"]);
} else {
return undefined;
}
})();
var G__75553_75573 = nextjournal.clojure_mode.extensions.eval_region.top_level_string(state);
var G__75553_75574__$1 = (((G__75553_75573 == null))?null:nextjournal.clojure_mode.demo.sci.eval_string.cljs$core$IFn$_invoke$arity$1(G__75553_75573));
if((G__75553_75574__$1 == null)){
} else {
(on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__75553_75574__$1) : on_result.call(null,G__75553_75574__$1));
}

return true;
});
nextjournal.clojure_mode.demo.sci.eval_cell = (function nextjournal$clojure_mode$demo$sci$eval_cell(on_result,p__75555){
var map__75557 = p__75555;
var map__75557__$1 = (((((!((map__75557 == null))))?(((((map__75557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75557):map__75557);
var state = (function (){var obj75560 = map__75557__$1;
if((!((obj75560 == null)))){
return (obj75560["state"]);
} else {
return undefined;
}
})();
var G__75562_75578 = nextjournal.clojure_mode.demo.sci.eval_string.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(state.doc));
(on_result.cljs$core$IFn$_invoke$arity$1 ? on_result.cljs$core$IFn$_invoke$arity$1(G__75562_75578) : on_result.call(null,G__75562_75578));

return true;
});
nextjournal.clojure_mode.demo.sci.keymap_STAR_ = (function nextjournal$clojure_mode$demo$sci$keymap_STAR_(modifier){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval-cell","eval-cell",-1239042175),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Mod-Enter",new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluate cell"], null)], null),new cljs.core.Keyword(null,"eval-at-cursor","eval-at-cursor",-1422323075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates form at cursor"], null)], null),new cljs.core.Keyword(null,"eval-top-level","eval-top-level",2125288127),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Shift-Enter"].join(''),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates top-level form at cursor"], null)], null)], null);
});
nextjournal.clojure_mode.demo.sci.extension = (function nextjournal$clojure_mode$demo$sci$extension(p__75564){
var map__75565 = p__75564;
var map__75565__$1 = cljs.core.__destructure_map(map__75565);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75565__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788));
var on_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75565__$1,new cljs.core.Keyword(null,"on-result","on-result",-1034982142));
return module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":"Mod-Enter","run":cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.demo.sci.eval_cell,on_result)}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.demo.sci.eval_top_level,on_result),"run":cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.demo.sci.eval_at_cursor,on_result)})]);
});

//# sourceMappingURL=nextjournal.clojure_mode.demo.sci.js.map
