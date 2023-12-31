goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__59251){
var map__59252 = p__59251;
var map__59252__$1 = cljs.core.__destructure_map(map__59252);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59252__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59252__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59252__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59252__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__59253_59280 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__59254_59281 = null;
var count__59255_59282 = (0);
var i__59256_59283 = (0);
while(true){
if((i__59256_59283 < count__59255_59282)){
var vec__59267_59284 = chunk__59254_59281.cljs$core$IIndexed$_nth$arity$2(null,i__59256_59283);
var k_59285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59267_59284,(0),null);
var cb_59286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59267_59284,(1),null);
try{var G__59271_59287 = cljs.core.deref(re_frame.trace.traces);
(cb_59286.cljs$core$IFn$_invoke$arity$1 ? cb_59286.cljs$core$IFn$_invoke$arity$1(G__59271_59287) : cb_59286.call(null,G__59271_59287));
}catch (e59270){var e_59288 = e59270;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_59285,"while storing",cljs.core.deref(re_frame.trace.traces),e_59288], 0));
}

var G__59290 = seq__59253_59280;
var G__59291 = chunk__59254_59281;
var G__59292 = count__59255_59282;
var G__59293 = (i__59256_59283 + (1));
seq__59253_59280 = G__59290;
chunk__59254_59281 = G__59291;
count__59255_59282 = G__59292;
i__59256_59283 = G__59293;
continue;
} else {
var temp__5753__auto___59294 = cljs.core.seq(seq__59253_59280);
if(temp__5753__auto___59294){
var seq__59253_59295__$1 = temp__5753__auto___59294;
if(cljs.core.chunked_seq_QMARK_(seq__59253_59295__$1)){
var c__4649__auto___59296 = cljs.core.chunk_first(seq__59253_59295__$1);
var G__59297 = cljs.core.chunk_rest(seq__59253_59295__$1);
var G__59298 = c__4649__auto___59296;
var G__59299 = cljs.core.count(c__4649__auto___59296);
var G__59300 = (0);
seq__59253_59280 = G__59297;
chunk__59254_59281 = G__59298;
count__59255_59282 = G__59299;
i__59256_59283 = G__59300;
continue;
} else {
var vec__59272_59301 = cljs.core.first(seq__59253_59295__$1);
var k_59302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59272_59301,(0),null);
var cb_59303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59272_59301,(1),null);
try{var G__59276_59304 = cljs.core.deref(re_frame.trace.traces);
(cb_59303.cljs$core$IFn$_invoke$arity$1 ? cb_59303.cljs$core$IFn$_invoke$arity$1(G__59276_59304) : cb_59303.call(null,G__59276_59304));
}catch (e59275){var e_59305 = e59275;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_59302,"while storing",cljs.core.deref(re_frame.trace.traces),e_59305], 0));
}

var G__59306 = cljs.core.next(seq__59253_59295__$1);
var G__59307 = null;
var G__59308 = (0);
var G__59309 = (0);
seq__59253_59280 = G__59306;
chunk__59254_59281 = G__59307;
count__59255_59282 = G__59308;
i__59256_59283 = G__59309;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
