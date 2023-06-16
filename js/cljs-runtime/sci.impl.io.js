goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__63266 = arguments.length;
switch (G__63266) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__63267 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__63268 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__63268);

try{var G__63269 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__63269);

return G__63269;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__63267);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__63270 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__63271 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__63271);

try{var G__63272 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__63272);

return G__63272;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__63270);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__63273 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__63274 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__63274);

try{var G__63275 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__63275);

return G__63275;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__63273);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__63276 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__63277 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__63277);

try{var G__63278 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__63278);

return G__63278;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__63276);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__63279 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__63280 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__63280);

try{var G__63281 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__63281);

return G__63281;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__63279);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_dup_var = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),cljs.core._STAR_print_dup_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__63282 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__63283 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63283);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63282);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4835__auto__ = [];
var len__4829__auto___63452 = arguments.length;
var i__4830__auto___63453 = (0);
while(true){
if((i__4830__auto___63453 < len__4829__auto___63452)){
args__4835__auto__.push((arguments[i__4830__auto___63453]));

var G__63457 = (i__4830__auto___63453 + (1));
i__4830__auto___63453 = G__63457;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__63285 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__63286 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__63287 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__63288 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__63289 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__63290 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__63291 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__63292 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__63293 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__63294 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__63295 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__63296 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__63297 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__63298 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__63299 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__63300 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63293);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__63294);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__63295);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__63296);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__63297);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__63298);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63299);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__63300);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__63292);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63291);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__63290);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__63289);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__63288);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__63287);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__63286);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63285);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq63284){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63284));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__63301 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__63302 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63302);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63301);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___63458 = arguments.length;
var i__4830__auto___63459 = (0);
while(true){
if((i__4830__auto___63459 < len__4829__auto___63458)){
args__4835__auto__.push((arguments[i__4830__auto___63459]));

var G__63460 = (i__4830__auto___63459 + (1));
i__4830__auto___63459 = G__63460;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__63304 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__63305 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__63306 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__63307 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__63308 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__63309 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__63310 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__63311 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__63312 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__63313 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__63314 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__63315 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__63316 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__63317 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__63311);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__63312);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__63313);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__63314);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__63315);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63316);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__63317);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__63310);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63309);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__63308);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__63307);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__63306);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__63305);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__63304);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq63303){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63303));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4835__auto__ = [];
var len__4829__auto___63461 = arguments.length;
var i__4830__auto___63462 = (0);
while(true){
if((i__4830__auto___63462 < len__4829__auto___63461)){
args__4835__auto__.push((arguments[i__4830__auto___63462]));

var G__63463 = (i__4830__auto___63462 + (1));
i__4830__auto___63462 = G__63463;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__63319 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__63320 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__63321 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__63322 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__63323 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__63324 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__63325 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__63326 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__63327 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__63328 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__63329 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__63330 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__63331 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__63332 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__63333 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__63334 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63327);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__63328);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__63329);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__63330);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__63331);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__63332);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63333);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__63334);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__63326);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63325);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__63324);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__63323);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__63322);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__63321);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__63320);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63319);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq63318){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63318));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___63464 = arguments.length;
var i__4830__auto___63465 = (0);
while(true){
if((i__4830__auto___63465 < len__4829__auto___63464)){
args__4835__auto__.push((arguments[i__4830__auto___63465]));

var G__63466 = (i__4830__auto___63465 + (1));
i__4830__auto___63465 = G__63466;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__63339 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__63340 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__63341 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__63342 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__63343 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__63344 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__63345 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__63346 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__63347 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__63348 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__63349 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__63350 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__63351 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__63352 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__63346);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__63347);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__63348);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__63349);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__63350);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63351);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__63352);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__63345);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63344);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__63343);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__63342);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__63341);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__63340);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__63339);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq63338){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63338));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4835__auto__ = [];
var len__4829__auto___63467 = arguments.length;
var i__4830__auto___63468 = (0);
while(true){
if((i__4830__auto___63468 < len__4829__auto___63467)){
args__4835__auto__.push((arguments[i__4830__auto___63468]));

var G__63469 = (i__4830__auto___63468 + (1));
i__4830__auto___63468 = G__63469;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__63354 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__63355 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__63356 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__63357 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__63358 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__63359 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__63360 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__63361 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__63362 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__63363 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__63364 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__63365 = null;
var _STAR_print_newline_STAR__temp_val__63366 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__63367 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63361);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__63362);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__63363);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__63364);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__63365);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63366);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__63367);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__63360);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63359);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__63358);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__63357);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__63356);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__63355);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63354);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq63353){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63353));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___63470 = arguments.length;
var i__4830__auto___63471 = (0);
while(true){
if((i__4830__auto___63471 < len__4829__auto___63470)){
args__4835__auto__.push((arguments[i__4830__auto___63471]));

var G__63472 = (i__4830__auto___63471 + (1));
i__4830__auto___63471 = G__63472;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__63379 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__63380 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__63381 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__63382 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__63383 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__63384 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__63385 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__63386 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__63387 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__63388 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__63389 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__63390 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__63391 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__63392 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__63386);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__63387);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__63388);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__63389);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__63390);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63391);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__63392);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__63385);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63384);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__63383);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__63382);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__63381);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__63380);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__63379);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq63378){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63378));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4835__auto__ = [];
var len__4829__auto___63475 = arguments.length;
var i__4830__auto___63476 = (0);
while(true){
if((i__4830__auto___63476 < len__4829__auto___63475)){
args__4835__auto__.push((arguments[i__4830__auto___63476]));

var G__63477 = (i__4830__auto___63476 + (1));
i__4830__auto___63476 = G__63477;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__63407 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__63408 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__63409 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__63410 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__63411 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__63412 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__63413 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__63414 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__63415 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__63416 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__63417 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__63418 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__63419 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__63420 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__63421 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__63422 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63415);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__63416);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__63417);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__63418);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__63419);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__63420);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63421);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__63422);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__63414);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63413);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__63412);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__63411);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__63410);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__63409);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__63408);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63407);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq63405){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63405));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4835__auto__ = [];
var len__4829__auto___63479 = arguments.length;
var i__4830__auto___63480 = (0);
while(true){
if((i__4830__auto___63480 < len__4829__auto___63479)){
args__4835__auto__.push((arguments[i__4830__auto___63480]));

var G__63481 = (i__4830__auto___63480 + (1));
i__4830__auto___63480 = G__63481;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__63437__auto__","s__63437__auto__",1935869738,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__63438__auto__","x__63438__auto__",2109383354,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__63437__auto__","s__63437__auto__",1935869738,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__63438__auto__","x__63438__auto__",2109383354,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__63437__auto__","s__63437__auto__",1935869738,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq63439){
var G__63440 = cljs.core.first(seq63439);
var seq63439__$1 = cljs.core.next(seq63439);
var G__63441 = cljs.core.first(seq63439__$1);
var seq63439__$2 = cljs.core.next(seq63439__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63440,G__63441,seq63439__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
