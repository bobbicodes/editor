goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__62924 = cljs.core.get_global_hierarchy;
return (fexpr__62924.cljs$core$IFn$_invoke$arity$0 ? fexpr__62924.cljs$core$IFn$_invoke$arity$0() : fexpr__62924.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__62925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__62925.cljs$core$IFn$_invoke$arity$1 ? fexpr__62925.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__62925.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__62930 = cljs.core.get_global_hierarchy;
return (fexpr__62930.cljs$core$IFn$_invoke$arity$0 ? fexpr__62930.cljs$core$IFn$_invoke$arity$0() : fexpr__62930.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__62933 = cljs.core.get_global_hierarchy;
return (fexpr__62933.cljs$core$IFn$_invoke$arity$0 ? fexpr__62933.cljs$core$IFn$_invoke$arity$0() : fexpr__62933.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__62968 = null;
var G__62968__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__62942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__62942.cljs$core$IFn$_invoke$arity$2 ? fexpr__62942.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__62942.call(null,ref,f));
});
var G__62968__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__62944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__62944.cljs$core$IFn$_invoke$arity$3 ? fexpr__62944.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__62944.call(null,ref,f,a1));
});
var G__62968__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__62945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__62945.cljs$core$IFn$_invoke$arity$4 ? fexpr__62945.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__62945.call(null,ref,f,a1,a2));
});
var G__62968__5 = (function() { 
var G__62969__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__62969 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__62970__i = 0, G__62970__a = new Array(arguments.length -  4);
while (G__62970__i < G__62970__a.length) {G__62970__a[G__62970__i] = arguments[G__62970__i + 4]; ++G__62970__i;}
  args = new cljs.core.IndexedSeq(G__62970__a,0,null);
} 
return G__62969__delegate.call(this,ref,f,a1,a2,args);};
G__62969.cljs$lang$maxFixedArity = 4;
G__62969.cljs$lang$applyTo = (function (arglist__62971){
var ref = cljs.core.first(arglist__62971);
arglist__62971 = cljs.core.next(arglist__62971);
var f = cljs.core.first(arglist__62971);
arglist__62971 = cljs.core.next(arglist__62971);
var a1 = cljs.core.first(arglist__62971);
arglist__62971 = cljs.core.next(arglist__62971);
var a2 = cljs.core.first(arglist__62971);
var args = cljs.core.rest(arglist__62971);
return G__62969__delegate(ref,f,a1,a2,args);
});
G__62969.cljs$core$IFn$_invoke$arity$variadic = G__62969__delegate;
return G__62969;
})()
;
G__62968 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__62968__2.call(this,ref,f);
case 3:
return G__62968__3.call(this,ref,f,a1);
case 4:
return G__62968__4.call(this,ref,f,a1,a2);
default:
var G__62975 = null;
if (arguments.length > 4) {
var G__62976__i = 0, G__62976__a = new Array(arguments.length -  4);
while (G__62976__i < G__62976__a.length) {G__62976__a[G__62976__i] = arguments[G__62976__i + 4]; ++G__62976__i;}
G__62975 = new cljs.core.IndexedSeq(G__62976__a,0,null);
}
return G__62968__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__62975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62968.cljs$lang$maxFixedArity = 4;
G__62968.cljs$lang$applyTo = G__62968__5.cljs$lang$applyTo;
G__62968.cljs$core$IFn$_invoke$arity$2 = G__62968__2;
G__62968.cljs$core$IFn$_invoke$arity$3 = G__62968__3;
G__62968.cljs$core$IFn$_invoke$arity$4 = G__62968__4;
G__62968.cljs$core$IFn$_invoke$arity$variadic = G__62968__5.cljs$core$IFn$_invoke$arity$variadic;
return G__62968;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__62947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__62947.cljs$core$IFn$_invoke$arity$2 ? fexpr__62947.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__62947.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__62977__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__62977 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__62978__i = 0, G__62978__a = new Array(arguments.length -  2);
while (G__62978__i < G__62978__a.length) {G__62978__a[G__62978__i] = arguments[G__62978__i + 2]; ++G__62978__i;}
  args = new cljs.core.IndexedSeq(G__62978__a,0,null);
} 
return G__62977__delegate.call(this,ref,f,args);};
G__62977.cljs$lang$maxFixedArity = 2;
G__62977.cljs$lang$applyTo = (function (arglist__62979){
var ref = cljs.core.first(arglist__62979);
arglist__62979 = cljs.core.next(arglist__62979);
var f = cljs.core.first(arglist__62979);
var args = cljs.core.rest(arglist__62979);
return G__62977__delegate(ref,f,args);
});
G__62977.cljs$core$IFn$_invoke$arity$variadic = G__62977__delegate;
return G__62977;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___62980 = arguments.length;
var i__4830__auto___62981 = (0);
while(true){
if((i__4830__auto___62981 < len__4829__auto___62980)){
args__4835__auto__.push((arguments[i__4830__auto___62981]));

var G__62982 = (i__4830__auto___62981 + (1));
i__4830__auto___62981 = G__62982;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq62950){
var G__62951 = cljs.core.first(seq62950);
var seq62950__$1 = cljs.core.next(seq62950);
var G__62952 = cljs.core.first(seq62950__$1);
var seq62950__$2 = cljs.core.next(seq62950__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62951,G__62952,seq62950__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
