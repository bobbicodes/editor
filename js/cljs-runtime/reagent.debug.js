goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__56923__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__56923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56924__i = 0, G__56924__a = new Array(arguments.length -  0);
while (G__56924__i < G__56924__a.length) {G__56924__a[G__56924__i] = arguments[G__56924__i + 0]; ++G__56924__i;}
  args = new cljs.core.IndexedSeq(G__56924__a,0,null);
} 
return G__56923__delegate.call(this,args);};
G__56923.cljs$lang$maxFixedArity = 0;
G__56923.cljs$lang$applyTo = (function (arglist__56925){
var args = cljs.core.seq(arglist__56925);
return G__56923__delegate(args);
});
G__56923.cljs$core$IFn$_invoke$arity$variadic = G__56923__delegate;
return G__56923;
})()
);

(o.error = (function() { 
var G__56926__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__56926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56927__i = 0, G__56927__a = new Array(arguments.length -  0);
while (G__56927__i < G__56927__a.length) {G__56927__a[G__56927__i] = arguments[G__56927__i + 0]; ++G__56927__i;}
  args = new cljs.core.IndexedSeq(G__56927__a,0,null);
} 
return G__56926__delegate.call(this,args);};
G__56926.cljs$lang$maxFixedArity = 0;
G__56926.cljs$lang$applyTo = (function (arglist__56928){
var args = cljs.core.seq(arglist__56928);
return G__56926__delegate(args);
});
G__56926.cljs$core$IFn$_invoke$arity$variadic = G__56926__delegate;
return G__56926;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
