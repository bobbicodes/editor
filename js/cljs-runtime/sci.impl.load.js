goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__62306){
var vec__62307 = p__62306;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62307,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62307,(1),null);
if(cljs.core.truth_((function (){var and__4221__auto__ = (k instanceof cljs.core.Symbol);
if(and__4221__auto__){
var and__4221__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4221__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__62319){
var map__62320 = p__62319;
var map__62320__$1 = cljs.core.__destructure_map(map__62320);
var _parsed_libspec = map__62320__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62320__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62320__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62320__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62320__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62320__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62320__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4223__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4223__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5751__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__62337 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62337,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62337,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5753__auto___62541 = (function (){var G__62340 = the_loaded_ns;
var G__62340__$1 = (((G__62340 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__62340));
var G__62340__$2 = (((G__62340__$1 == null))?null:cljs.core.meta(G__62340__$1));
if((G__62340__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__62340__$2);
}
})();
if(cljs.core.truth_(temp__5753__auto___62541)){
var on_loaded_62542 = temp__5753__auto___62541;
var G__62341_62543 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_62542.cljs$core$IFn$_invoke$arity$1 ? on_loaded_62542.cljs$core$IFn$_invoke$arity$1(G__62341_62543) : on_loaded_62542.call(null,G__62341_62543));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var lib__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),lib))?new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null):lib);
var temp__5751__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5751__auto__)){
var as_alias = temp__5751__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,null,lib__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__62344 = opts;
var map__62344__$1 = cljs.core.__destructure_map(map__62344);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62344__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62344__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__4223__auto__ = reload;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = reload_all;
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5751__auto___62547__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1));
if(cljs.core.truth_(temp__5751__auto___62547__$1)){
var the_loaded_ns_62548 = temp__5751__auto___62547__$1;
var loading_62549 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__4221__auto__ = loading_62549;
if(cljs.core.truth_(and__4221__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib__$1)))) && (cljs.core.nat_int_QMARK_(loading_62549.indexOf(lib__$1))));
} else {
return and__4221__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_62549,lib__$1);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib__$1);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_62548,lib__$1,opts));
}
} else {
var temp__5751__auto___62551__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5751__auto___62551__$2)){
var load_fn_62552 = temp__5751__auto___62551__$2;
var temp__5751__auto___62553__$3 = (function (){var G__62350 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib__$1,new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__4223__auto__ = reload;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_62552.cljs$core$IFn$_invoke$arity$1 ? load_fn_62552.cljs$core$IFn$_invoke$arity$1(G__62350) : load_fn_62552.call(null,G__62350));
})();
if(cljs.core.truth_(temp__5751__auto___62553__$3)){
var map__62352_62557 = temp__5751__auto___62553__$3;
var map__62352_62558__$1 = cljs.core.__destructure_map(map__62352_62557);
var file_62559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62352_62558__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_62560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62352_62558__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var handled_62561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62352_62558__$1,new cljs.core.Keyword(null,"handled","handled",1889700151));
var ctx_62563__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib__$1], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib__$1);
}
}));
if(cljs.core.truth_(source_62560)){
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file_62559]));

try{var fexpr__62355_62564 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__62355_62564.cljs$core$IFn$_invoke$arity$2 ? fexpr__62355_62564.cljs$core$IFn$_invoke$arity$2(ctx_62563__$1,source_62560) : fexpr__62355_62564.call(null,ctx_62563__$1,source_62560));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e62353){if((e62353 instanceof Error)){
var e_62566 = e62353;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib__$1], 0));

throw e_62566;
} else {
throw e62353;

}
}} else {
}

if(cljs.core.truth_(handled_62561)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib__$1);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib__$1,opts);
}));
}
} else {
var or__4223__auto___62567 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1);
if(cljs.core.truth_(temp__5753__auto__)){
var the_loaded_ns = temp__5753__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib__$1,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4223__auto___62567)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib__$1);

return null;
}
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62568 = arguments.length;
var i__4830__auto___62569 = (0);
while(true){
if((i__4830__auto___62569 < len__4829__auto___62568)){
args__4835__auto__.push((arguments[i__4830__auto___62569]));

var G__62570 = (i__4830__auto___62569 + (1));
i__4830__auto___62569 = G__62570;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__4221__auto__ = prefix;
if(cljs.core.truth_(and__4221__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__4221__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq62363){
var G__62364 = cljs.core.first(seq62363);
var seq62363__$1 = cljs.core.next(seq62363);
var G__62365 = cljs.core.first(seq62363__$1);
var seq62363__$2 = cljs.core.next(seq62363__$1);
var G__62366 = cljs.core.first(seq62363__$2);
var seq62363__$3 = cljs.core.next(seq62363__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62364,G__62365,G__62366,seq62363__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_62578 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_62579 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_62578,flags));
if(unsupported_62579){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_62579)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__62382 = cljs.core.seq(args_STAR___$1);
var chunk__62383 = null;
var count__62384 = (0);
var i__62385 = (0);
while(true){
if((i__62385 < count__62384)){
var arg = chunk__62383.cljs$core$IIndexed$_nth$arity$2(null,i__62385);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__62437_62580 = arg;
var seq__62439_62581 = cljs.core.seq(vec__62437_62580);
var first__62440_62582 = cljs.core.first(seq__62439_62581);
var seq__62439_62583__$1 = cljs.core.next(seq__62439_62581);
var prefix_62584 = first__62440_62582;
var args_STAR__62585__$2 = seq__62439_62583__$1;
if((prefix_62584 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__62442_62588 = cljs.core.seq(args_STAR__62585__$2);
var chunk__62443_62589 = null;
var count__62444_62590 = (0);
var i__62445_62591 = (0);
while(true){
if((i__62445_62591 < count__62444_62590)){
var arg_62592__$1 = chunk__62443_62589.cljs$core$IIndexed$_nth$arity$2(null,i__62445_62591);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_62584,sci.impl.load.prependss(arg_62592__$1,opts));


var G__62593 = seq__62442_62588;
var G__62594 = chunk__62443_62589;
var G__62595 = count__62444_62590;
var G__62596 = (i__62445_62591 + (1));
seq__62442_62588 = G__62593;
chunk__62443_62589 = G__62594;
count__62444_62590 = G__62595;
i__62445_62591 = G__62596;
continue;
} else {
var temp__5753__auto___62597 = cljs.core.seq(seq__62442_62588);
if(temp__5753__auto___62597){
var seq__62442_62598__$1 = temp__5753__auto___62597;
if(cljs.core.chunked_seq_QMARK_(seq__62442_62598__$1)){
var c__4649__auto___62599 = cljs.core.chunk_first(seq__62442_62598__$1);
var G__62600 = cljs.core.chunk_rest(seq__62442_62598__$1);
var G__62601 = c__4649__auto___62599;
var G__62602 = cljs.core.count(c__4649__auto___62599);
var G__62603 = (0);
seq__62442_62588 = G__62600;
chunk__62443_62589 = G__62601;
count__62444_62590 = G__62602;
i__62445_62591 = G__62603;
continue;
} else {
var arg_62604__$1 = cljs.core.first(seq__62442_62598__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_62584,sci.impl.load.prependss(arg_62604__$1,opts));


var G__62605 = cljs.core.next(seq__62442_62598__$1);
var G__62606 = null;
var G__62607 = (0);
var G__62608 = (0);
seq__62442_62588 = G__62605;
chunk__62443_62589 = G__62606;
count__62444_62590 = G__62607;
i__62445_62591 = G__62608;
continue;
}
} else {
}
}
break;
}
}


var G__62609 = seq__62382;
var G__62610 = chunk__62383;
var G__62611 = count__62384;
var G__62612 = (i__62385 + (1));
seq__62382 = G__62609;
chunk__62383 = G__62610;
count__62384 = G__62611;
i__62385 = G__62612;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62382);
if(temp__5753__auto__){
var seq__62382__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62382__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__62382__$1);
var G__62615 = cljs.core.chunk_rest(seq__62382__$1);
var G__62616 = c__4649__auto__;
var G__62617 = cljs.core.count(c__4649__auto__);
var G__62618 = (0);
seq__62382 = G__62615;
chunk__62383 = G__62616;
count__62384 = G__62617;
i__62385 = G__62618;
continue;
} else {
var arg = cljs.core.first(seq__62382__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__62464_62619 = arg;
var seq__62465_62620 = cljs.core.seq(vec__62464_62619);
var first__62466_62621 = cljs.core.first(seq__62465_62620);
var seq__62465_62622__$1 = cljs.core.next(seq__62465_62620);
var prefix_62623 = first__62466_62621;
var args_STAR__62624__$2 = seq__62465_62622__$1;
if((prefix_62623 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__62470_62626 = cljs.core.seq(args_STAR__62624__$2);
var chunk__62471_62627 = null;
var count__62472_62628 = (0);
var i__62473_62629 = (0);
while(true){
if((i__62473_62629 < count__62472_62628)){
var arg_62630__$1 = chunk__62471_62627.cljs$core$IIndexed$_nth$arity$2(null,i__62473_62629);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_62623,sci.impl.load.prependss(arg_62630__$1,opts));


var G__62631 = seq__62470_62626;
var G__62632 = chunk__62471_62627;
var G__62633 = count__62472_62628;
var G__62634 = (i__62473_62629 + (1));
seq__62470_62626 = G__62631;
chunk__62471_62627 = G__62632;
count__62472_62628 = G__62633;
i__62473_62629 = G__62634;
continue;
} else {
var temp__5753__auto___62635__$1 = cljs.core.seq(seq__62470_62626);
if(temp__5753__auto___62635__$1){
var seq__62470_62636__$1 = temp__5753__auto___62635__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62470_62636__$1)){
var c__4649__auto___62637 = cljs.core.chunk_first(seq__62470_62636__$1);
var G__62638 = cljs.core.chunk_rest(seq__62470_62636__$1);
var G__62639 = c__4649__auto___62637;
var G__62640 = cljs.core.count(c__4649__auto___62637);
var G__62641 = (0);
seq__62470_62626 = G__62638;
chunk__62471_62627 = G__62639;
count__62472_62628 = G__62640;
i__62473_62629 = G__62641;
continue;
} else {
var arg_62643__$1 = cljs.core.first(seq__62470_62636__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_62623,sci.impl.load.prependss(arg_62643__$1,opts));


var G__62644 = cljs.core.next(seq__62470_62636__$1);
var G__62645 = null;
var G__62646 = (0);
var G__62647 = (0);
seq__62470_62626 = G__62644;
chunk__62471_62627 = G__62645;
count__62472_62628 = G__62646;
i__62473_62629 = G__62647;
continue;
}
} else {
}
}
break;
}
}


var G__62648 = cljs.core.next(seq__62382__$1);
var G__62649 = null;
var G__62650 = (0);
var G__62651 = (0);
seq__62382 = G__62648;
chunk__62383 = G__62649;
count__62384 = G__62650;
i__62385 = G__62651;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62654 = arguments.length;
var i__4830__auto___62655 = (0);
while(true){
if((i__4830__auto___62655 < len__4829__auto___62654)){
args__4835__auto__.push((arguments[i__4830__auto___62655]));

var G__62656 = (i__4830__auto___62655 + (1));
i__4830__auto___62655 = G__62656;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq62480){
var G__62482 = cljs.core.first(seq62480);
var seq62480__$1 = cljs.core.next(seq62480);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62482,seq62480__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62662 = arguments.length;
var i__4830__auto___62663 = (0);
while(true){
if((i__4830__auto___62663 < len__4829__auto___62662)){
args__4835__auto__.push((arguments[i__4830__auto___62663]));

var G__62664 = (i__4830__auto___62663 + (1));
i__4830__auto___62663 = G__62664;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq62487){
var G__62488 = cljs.core.first(seq62487);
var seq62487__$1 = cljs.core.next(seq62487);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62488,seq62487__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__62498 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62498,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62498,(1),null);
var G__62501_62668 = k;
var G__62501_62669__$1 = (((G__62501_62668 instanceof cljs.core.Keyword))?G__62501_62668.fqn:null);
switch (G__62501_62669__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__62501_62668,G__62501_62669__$1,vec__62498,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__62501_62668,G__62501_62669__$1,vec__62498,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__62501_62668,G__62501_62669__$1,vec__62498,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__62501_62668,G__62501_62669__$1,vec__62498,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__62501_62668,G__62501_62669__$1,vec__62498,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__62501_62668,G__62501_62669__$1,vec__62498,k,v,ns_sym){
return (function (acc,p__62503){
var vec__62504 = p__62503;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62504,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62504,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__62501_62668,G__62501_62669__$1,vec__62498,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__62501_62668,G__62501_62669__$1,vec__62498,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62501_62669__$1)].join('')));

}

var G__62673 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__62673;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__4221__auto__ = to_do;
if(cljs.core.truth_(and__4221__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__4221__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__4223__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62678 = arguments.length;
var i__4830__auto___62679 = (0);
while(true){
if((i__4830__auto___62679 < len__4829__auto___62678)){
args__4835__auto__.push((arguments[i__4830__auto___62679]));

var G__62680 = (i__4830__auto___62679 + (1));
i__4830__auto___62679 = G__62680;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq62518){
var G__62519 = cljs.core.first(seq62518);
var seq62518__$1 = cljs.core.next(seq62518);
var G__62520 = cljs.core.first(seq62518__$1);
var seq62518__$2 = cljs.core.next(seq62518__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62519,G__62520,seq62518__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
