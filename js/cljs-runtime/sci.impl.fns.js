goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var self_ref_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__64556 = (fixed_arity | (0));
switch (G__64556) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__64558){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__64558);

while(true){
var ret__63435__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63435__auto__)){
continue;
} else {
return ret__63435__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_0 = function (var_args){
var G__64558 = null;
if (arguments.length > 0) {
var G__65723__i = 0, G__65723__a = new Array(arguments.length -  0);
while (G__65723__i < G__65723__a.length) {G__65723__a[G__65723__i] = arguments[G__65723__i + 0]; ++G__65723__i;}
  G__64558 = new cljs.core.IndexedSeq(G__65723__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__64558);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__65724){
var G__64558 = cljs.core.seq(arglist__65724);
return sci$impl$fns$fun_$_arity_0__delegate(G__64558);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__64566 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__64564,G__64565){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64564);

(invoc_array[vararg_idx] = G__64565);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_1 = function (G__64564,var_args){
var G__64565 = null;
if (arguments.length > 1) {
var G__65725__i = 0, G__65725__a = new Array(arguments.length -  1);
while (G__65725__i < G__65725__a.length) {G__65725__a[G__65725__i] = arguments[G__65725__i + 1]; ++G__65725__i;}
  G__64565 = new cljs.core.IndexedSeq(G__65725__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__64564,G__64565);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__65726){
var G__64564 = cljs.core.first(arglist__65726);
var G__64565 = cljs.core.rest(arglist__65726);
return sci$impl$fns$fun_$_arity_1__delegate(G__64564,G__64565);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__64571 = cljs.core._nth(params,(0));
var G__64572 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__64568,G__64569,G__64570){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64568);

(invoc_array[(1)] = G__64569);

(invoc_array[vararg_idx] = G__64570);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_2 = function (G__64568,G__64569,var_args){
var G__64570 = null;
if (arguments.length > 2) {
var G__65727__i = 0, G__65727__a = new Array(arguments.length -  2);
while (G__65727__i < G__65727__a.length) {G__65727__a[G__65727__i] = arguments[G__65727__i + 2]; ++G__65727__i;}
  G__64570 = new cljs.core.IndexedSeq(G__65727__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__64568,G__64569,G__64570);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__65728){
var G__64568 = cljs.core.first(arglist__65728);
arglist__65728 = cljs.core.next(arglist__65728);
var G__64569 = cljs.core.first(arglist__65728);
var G__64570 = cljs.core.rest(arglist__65728);
return sci$impl$fns$fun_$_arity_2__delegate(G__64568,G__64569,G__64570);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__64577 = cljs.core._nth(params,(0));
var G__64578 = cljs.core._nth(params,(1));
var G__64579 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__64573,G__64574,G__64575,G__64576){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64573);

(invoc_array[(1)] = G__64574);

(invoc_array[(2)] = G__64575);

(invoc_array[vararg_idx] = G__64576);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_3 = function (G__64573,G__64574,G__64575,var_args){
var G__64576 = null;
if (arguments.length > 3) {
var G__65729__i = 0, G__65729__a = new Array(arguments.length -  3);
while (G__65729__i < G__65729__a.length) {G__65729__a[G__65729__i] = arguments[G__65729__i + 3]; ++G__65729__i;}
  G__64576 = new cljs.core.IndexedSeq(G__65729__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__64573,G__64574,G__64575,G__64576);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__65730){
var G__64573 = cljs.core.first(arglist__65730);
arglist__65730 = cljs.core.next(arglist__65730);
var G__64574 = cljs.core.first(arglist__65730);
arglist__65730 = cljs.core.next(arglist__65730);
var G__64575 = cljs.core.first(arglist__65730);
var G__64576 = cljs.core.rest(arglist__65730);
return sci$impl$fns$fun_$_arity_3__delegate(G__64573,G__64574,G__64575,G__64576);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__64585 = cljs.core._nth(params,(0));
var G__64586 = cljs.core._nth(params,(1));
var G__64587 = cljs.core._nth(params,(2));
var G__64588 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__64580,G__64581,G__64582,G__64583,G__64584){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64580);

(invoc_array[(1)] = G__64581);

(invoc_array[(2)] = G__64582);

(invoc_array[(3)] = G__64583);

(invoc_array[vararg_idx] = G__64584);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_4 = function (G__64580,G__64581,G__64582,G__64583,var_args){
var G__64584 = null;
if (arguments.length > 4) {
var G__65731__i = 0, G__65731__a = new Array(arguments.length -  4);
while (G__65731__i < G__65731__a.length) {G__65731__a[G__65731__i] = arguments[G__65731__i + 4]; ++G__65731__i;}
  G__64584 = new cljs.core.IndexedSeq(G__65731__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__64580,G__64581,G__64582,G__64583,G__64584);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__65732){
var G__64580 = cljs.core.first(arglist__65732);
arglist__65732 = cljs.core.next(arglist__65732);
var G__64581 = cljs.core.first(arglist__65732);
arglist__65732 = cljs.core.next(arglist__65732);
var G__64582 = cljs.core.first(arglist__65732);
arglist__65732 = cljs.core.next(arglist__65732);
var G__64583 = cljs.core.first(arglist__65732);
var G__64584 = cljs.core.rest(arglist__65732);
return sci$impl$fns$fun_$_arity_4__delegate(G__64580,G__64581,G__64582,G__64583,G__64584);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__64599 = cljs.core._nth(params,(0));
var G__64600 = cljs.core._nth(params,(1));
var G__64601 = cljs.core._nth(params,(2));
var G__64602 = cljs.core._nth(params,(3));
var G__64603 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__64593,G__64594,G__64595,G__64596,G__64597,G__64598){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64593);

(invoc_array[(1)] = G__64594);

(invoc_array[(2)] = G__64595);

(invoc_array[(3)] = G__64596);

(invoc_array[(4)] = G__64597);

(invoc_array[vararg_idx] = G__64598);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_5 = function (G__64593,G__64594,G__64595,G__64596,G__64597,var_args){
var G__64598 = null;
if (arguments.length > 5) {
var G__65733__i = 0, G__65733__a = new Array(arguments.length -  5);
while (G__65733__i < G__65733__a.length) {G__65733__a[G__65733__i] = arguments[G__65733__i + 5]; ++G__65733__i;}
  G__64598 = new cljs.core.IndexedSeq(G__65733__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__64593,G__64594,G__64595,G__64596,G__64597,G__64598);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__65734){
var G__64593 = cljs.core.first(arglist__65734);
arglist__65734 = cljs.core.next(arglist__65734);
var G__64594 = cljs.core.first(arglist__65734);
arglist__65734 = cljs.core.next(arglist__65734);
var G__64595 = cljs.core.first(arglist__65734);
arglist__65734 = cljs.core.next(arglist__65734);
var G__64596 = cljs.core.first(arglist__65734);
arglist__65734 = cljs.core.next(arglist__65734);
var G__64597 = cljs.core.first(arglist__65734);
var G__64598 = cljs.core.rest(arglist__65734);
return sci$impl$fns$fun_$_arity_5__delegate(G__64593,G__64594,G__64595,G__64596,G__64597,G__64598);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__64627 = cljs.core._nth(params,(0));
var G__64628 = cljs.core._nth(params,(1));
var G__64629 = cljs.core._nth(params,(2));
var G__64630 = cljs.core._nth(params,(3));
var G__64631 = cljs.core._nth(params,(4));
var G__64632 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__64620,G__64621,G__64622,G__64623,G__64624,G__64625,G__64626){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64620);

(invoc_array[(1)] = G__64621);

(invoc_array[(2)] = G__64622);

(invoc_array[(3)] = G__64623);

(invoc_array[(4)] = G__64624);

(invoc_array[(5)] = G__64625);

(invoc_array[vararg_idx] = G__64626);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_6 = function (G__64620,G__64621,G__64622,G__64623,G__64624,G__64625,var_args){
var G__64626 = null;
if (arguments.length > 6) {
var G__65736__i = 0, G__65736__a = new Array(arguments.length -  6);
while (G__65736__i < G__65736__a.length) {G__65736__a[G__65736__i] = arguments[G__65736__i + 6]; ++G__65736__i;}
  G__64626 = new cljs.core.IndexedSeq(G__65736__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__64620,G__64621,G__64622,G__64623,G__64624,G__64625,G__64626);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__65737){
var G__64620 = cljs.core.first(arglist__65737);
arglist__65737 = cljs.core.next(arglist__65737);
var G__64621 = cljs.core.first(arglist__65737);
arglist__65737 = cljs.core.next(arglist__65737);
var G__64622 = cljs.core.first(arglist__65737);
arglist__65737 = cljs.core.next(arglist__65737);
var G__64623 = cljs.core.first(arglist__65737);
arglist__65737 = cljs.core.next(arglist__65737);
var G__64624 = cljs.core.first(arglist__65737);
arglist__65737 = cljs.core.next(arglist__65737);
var G__64625 = cljs.core.first(arglist__65737);
var G__64626 = cljs.core.rest(arglist__65737);
return sci$impl$fns$fun_$_arity_6__delegate(G__64620,G__64621,G__64622,G__64623,G__64624,G__64625,G__64626);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__64646 = cljs.core._nth(params,(0));
var G__64647 = cljs.core._nth(params,(1));
var G__64648 = cljs.core._nth(params,(2));
var G__64649 = cljs.core._nth(params,(3));
var G__64650 = cljs.core._nth(params,(4));
var G__64651 = cljs.core._nth(params,(5));
var G__64652 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__64638,G__64639,G__64640,G__64641,G__64642,G__64643,G__64644,G__64645){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64638);

(invoc_array[(1)] = G__64639);

(invoc_array[(2)] = G__64640);

(invoc_array[(3)] = G__64641);

(invoc_array[(4)] = G__64642);

(invoc_array[(5)] = G__64643);

(invoc_array[(6)] = G__64644);

(invoc_array[vararg_idx] = G__64645);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_7 = function (G__64638,G__64639,G__64640,G__64641,G__64642,G__64643,G__64644,var_args){
var G__64645 = null;
if (arguments.length > 7) {
var G__65738__i = 0, G__65738__a = new Array(arguments.length -  7);
while (G__65738__i < G__65738__a.length) {G__65738__a[G__65738__i] = arguments[G__65738__i + 7]; ++G__65738__i;}
  G__64645 = new cljs.core.IndexedSeq(G__65738__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__64638,G__64639,G__64640,G__64641,G__64642,G__64643,G__64644,G__64645);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__65739){
var G__64638 = cljs.core.first(arglist__65739);
arglist__65739 = cljs.core.next(arglist__65739);
var G__64639 = cljs.core.first(arglist__65739);
arglist__65739 = cljs.core.next(arglist__65739);
var G__64640 = cljs.core.first(arglist__65739);
arglist__65739 = cljs.core.next(arglist__65739);
var G__64641 = cljs.core.first(arglist__65739);
arglist__65739 = cljs.core.next(arglist__65739);
var G__64642 = cljs.core.first(arglist__65739);
arglist__65739 = cljs.core.next(arglist__65739);
var G__64643 = cljs.core.first(arglist__65739);
arglist__65739 = cljs.core.next(arglist__65739);
var G__64644 = cljs.core.first(arglist__65739);
var G__64645 = cljs.core.rest(arglist__65739);
return sci$impl$fns$fun_$_arity_7__delegate(G__64638,G__64639,G__64640,G__64641,G__64642,G__64643,G__64644,G__64645);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__64665 = cljs.core._nth(params,(0));
var G__64666 = cljs.core._nth(params,(1));
var G__64667 = cljs.core._nth(params,(2));
var G__64668 = cljs.core._nth(params,(3));
var G__64669 = cljs.core._nth(params,(4));
var G__64670 = cljs.core._nth(params,(5));
var G__64671 = cljs.core._nth(params,(6));
var G__64672 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__64656,G__64657,G__64658,G__64659,G__64660,G__64661,G__64662,G__64663,G__64664){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64656);

(invoc_array[(1)] = G__64657);

(invoc_array[(2)] = G__64658);

(invoc_array[(3)] = G__64659);

(invoc_array[(4)] = G__64660);

(invoc_array[(5)] = G__64661);

(invoc_array[(6)] = G__64662);

(invoc_array[(7)] = G__64663);

(invoc_array[vararg_idx] = G__64664);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_8 = function (G__64656,G__64657,G__64658,G__64659,G__64660,G__64661,G__64662,G__64663,var_args){
var G__64664 = null;
if (arguments.length > 8) {
var G__65740__i = 0, G__65740__a = new Array(arguments.length -  8);
while (G__65740__i < G__65740__a.length) {G__65740__a[G__65740__i] = arguments[G__65740__i + 8]; ++G__65740__i;}
  G__64664 = new cljs.core.IndexedSeq(G__65740__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__64656,G__64657,G__64658,G__64659,G__64660,G__64661,G__64662,G__64663,G__64664);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__65741){
var G__64656 = cljs.core.first(arglist__65741);
arglist__65741 = cljs.core.next(arglist__65741);
var G__64657 = cljs.core.first(arglist__65741);
arglist__65741 = cljs.core.next(arglist__65741);
var G__64658 = cljs.core.first(arglist__65741);
arglist__65741 = cljs.core.next(arglist__65741);
var G__64659 = cljs.core.first(arglist__65741);
arglist__65741 = cljs.core.next(arglist__65741);
var G__64660 = cljs.core.first(arglist__65741);
arglist__65741 = cljs.core.next(arglist__65741);
var G__64661 = cljs.core.first(arglist__65741);
arglist__65741 = cljs.core.next(arglist__65741);
var G__64662 = cljs.core.first(arglist__65741);
arglist__65741 = cljs.core.next(arglist__65741);
var G__64663 = cljs.core.first(arglist__65741);
var G__64664 = cljs.core.rest(arglist__65741);
return sci$impl$fns$fun_$_arity_8__delegate(G__64656,G__64657,G__64658,G__64659,G__64660,G__64661,G__64662,G__64663,G__64664);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__64685 = cljs.core._nth(params,(0));
var G__64686 = cljs.core._nth(params,(1));
var G__64687 = cljs.core._nth(params,(2));
var G__64688 = cljs.core._nth(params,(3));
var G__64689 = cljs.core._nth(params,(4));
var G__64690 = cljs.core._nth(params,(5));
var G__64691 = cljs.core._nth(params,(6));
var G__64692 = cljs.core._nth(params,(7));
var G__64693 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__64675,G__64676,G__64677,G__64678,G__64679,G__64680,G__64681,G__64682,G__64683,G__64684){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64675);

(invoc_array[(1)] = G__64676);

(invoc_array[(2)] = G__64677);

(invoc_array[(3)] = G__64678);

(invoc_array[(4)] = G__64679);

(invoc_array[(5)] = G__64680);

(invoc_array[(6)] = G__64681);

(invoc_array[(7)] = G__64682);

(invoc_array[(8)] = G__64683);

(invoc_array[vararg_idx] = G__64684);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_9 = function (G__64675,G__64676,G__64677,G__64678,G__64679,G__64680,G__64681,G__64682,G__64683,var_args){
var G__64684 = null;
if (arguments.length > 9) {
var G__65742__i = 0, G__65742__a = new Array(arguments.length -  9);
while (G__65742__i < G__65742__a.length) {G__65742__a[G__65742__i] = arguments[G__65742__i + 9]; ++G__65742__i;}
  G__64684 = new cljs.core.IndexedSeq(G__65742__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__64675,G__64676,G__64677,G__64678,G__64679,G__64680,G__64681,G__64682,G__64683,G__64684);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__65743){
var G__64675 = cljs.core.first(arglist__65743);
arglist__65743 = cljs.core.next(arglist__65743);
var G__64676 = cljs.core.first(arglist__65743);
arglist__65743 = cljs.core.next(arglist__65743);
var G__64677 = cljs.core.first(arglist__65743);
arglist__65743 = cljs.core.next(arglist__65743);
var G__64678 = cljs.core.first(arglist__65743);
arglist__65743 = cljs.core.next(arglist__65743);
var G__64679 = cljs.core.first(arglist__65743);
arglist__65743 = cljs.core.next(arglist__65743);
var G__64680 = cljs.core.first(arglist__65743);
arglist__65743 = cljs.core.next(arglist__65743);
var G__64681 = cljs.core.first(arglist__65743);
arglist__65743 = cljs.core.next(arglist__65743);
var G__64682 = cljs.core.first(arglist__65743);
arglist__65743 = cljs.core.next(arglist__65743);
var G__64683 = cljs.core.first(arglist__65743);
var G__64684 = cljs.core.rest(arglist__65743);
return sci$impl$fns$fun_$_arity_9__delegate(G__64675,G__64676,G__64677,G__64678,G__64679,G__64680,G__64681,G__64682,G__64683,G__64684);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__64708 = cljs.core._nth(params,(0));
var G__64709 = cljs.core._nth(params,(1));
var G__64710 = cljs.core._nth(params,(2));
var G__64711 = cljs.core._nth(params,(3));
var G__64712 = cljs.core._nth(params,(4));
var G__64713 = cljs.core._nth(params,(5));
var G__64714 = cljs.core._nth(params,(6));
var G__64715 = cljs.core._nth(params,(7));
var G__64716 = cljs.core._nth(params,(8));
var G__64717 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__64697,G__64698,G__64699,G__64700,G__64701,G__64702,G__64703,G__64704,G__64705,G__64706,G__64707){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64697);

(invoc_array[(1)] = G__64698);

(invoc_array[(2)] = G__64699);

(invoc_array[(3)] = G__64700);

(invoc_array[(4)] = G__64701);

(invoc_array[(5)] = G__64702);

(invoc_array[(6)] = G__64703);

(invoc_array[(7)] = G__64704);

(invoc_array[(8)] = G__64705);

(invoc_array[(9)] = G__64706);

(invoc_array[vararg_idx] = G__64707);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_10 = function (G__64697,G__64698,G__64699,G__64700,G__64701,G__64702,G__64703,G__64704,G__64705,G__64706,var_args){
var G__64707 = null;
if (arguments.length > 10) {
var G__65744__i = 0, G__65744__a = new Array(arguments.length -  10);
while (G__65744__i < G__65744__a.length) {G__65744__a[G__65744__i] = arguments[G__65744__i + 10]; ++G__65744__i;}
  G__64707 = new cljs.core.IndexedSeq(G__65744__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__64697,G__64698,G__64699,G__64700,G__64701,G__64702,G__64703,G__64704,G__64705,G__64706,G__64707);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__65745){
var G__64697 = cljs.core.first(arglist__65745);
arglist__65745 = cljs.core.next(arglist__65745);
var G__64698 = cljs.core.first(arglist__65745);
arglist__65745 = cljs.core.next(arglist__65745);
var G__64699 = cljs.core.first(arglist__65745);
arglist__65745 = cljs.core.next(arglist__65745);
var G__64700 = cljs.core.first(arglist__65745);
arglist__65745 = cljs.core.next(arglist__65745);
var G__64701 = cljs.core.first(arglist__65745);
arglist__65745 = cljs.core.next(arglist__65745);
var G__64702 = cljs.core.first(arglist__65745);
arglist__65745 = cljs.core.next(arglist__65745);
var G__64703 = cljs.core.first(arglist__65745);
arglist__65745 = cljs.core.next(arglist__65745);
var G__64704 = cljs.core.first(arglist__65745);
arglist__65745 = cljs.core.next(arglist__65745);
var G__64705 = cljs.core.first(arglist__65745);
arglist__65745 = cljs.core.next(arglist__65745);
var G__64706 = cljs.core.first(arglist__65745);
var G__64707 = cljs.core.rest(arglist__65745);
return sci$impl$fns$fun_$_arity_10__delegate(G__64697,G__64698,G__64699,G__64700,G__64701,G__64702,G__64703,G__64704,G__64705,G__64706,G__64707);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__64745 = cljs.core._nth(params,(0));
var G__64746 = cljs.core._nth(params,(1));
var G__64747 = cljs.core._nth(params,(2));
var G__64748 = cljs.core._nth(params,(3));
var G__64749 = cljs.core._nth(params,(4));
var G__64750 = cljs.core._nth(params,(5));
var G__64751 = cljs.core._nth(params,(6));
var G__64752 = cljs.core._nth(params,(7));
var G__64753 = cljs.core._nth(params,(8));
var G__64754 = cljs.core._nth(params,(9));
var G__64755 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__64733,G__64734,G__64735,G__64736,G__64737,G__64738,G__64739,G__64740,G__64741,G__64742,G__64743,G__64744){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64733);

(invoc_array[(1)] = G__64734);

(invoc_array[(2)] = G__64735);

(invoc_array[(3)] = G__64736);

(invoc_array[(4)] = G__64737);

(invoc_array[(5)] = G__64738);

(invoc_array[(6)] = G__64739);

(invoc_array[(7)] = G__64740);

(invoc_array[(8)] = G__64741);

(invoc_array[(9)] = G__64742);

(invoc_array[(10)] = G__64743);

(invoc_array[vararg_idx] = G__64744);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_11 = function (G__64733,G__64734,G__64735,G__64736,G__64737,G__64738,G__64739,G__64740,G__64741,G__64742,G__64743,var_args){
var G__64744 = null;
if (arguments.length > 11) {
var G__65746__i = 0, G__65746__a = new Array(arguments.length -  11);
while (G__65746__i < G__65746__a.length) {G__65746__a[G__65746__i] = arguments[G__65746__i + 11]; ++G__65746__i;}
  G__64744 = new cljs.core.IndexedSeq(G__65746__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__64733,G__64734,G__64735,G__64736,G__64737,G__64738,G__64739,G__64740,G__64741,G__64742,G__64743,G__64744);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__65747){
var G__64733 = cljs.core.first(arglist__65747);
arglist__65747 = cljs.core.next(arglist__65747);
var G__64734 = cljs.core.first(arglist__65747);
arglist__65747 = cljs.core.next(arglist__65747);
var G__64735 = cljs.core.first(arglist__65747);
arglist__65747 = cljs.core.next(arglist__65747);
var G__64736 = cljs.core.first(arglist__65747);
arglist__65747 = cljs.core.next(arglist__65747);
var G__64737 = cljs.core.first(arglist__65747);
arglist__65747 = cljs.core.next(arglist__65747);
var G__64738 = cljs.core.first(arglist__65747);
arglist__65747 = cljs.core.next(arglist__65747);
var G__64739 = cljs.core.first(arglist__65747);
arglist__65747 = cljs.core.next(arglist__65747);
var G__64740 = cljs.core.first(arglist__65747);
arglist__65747 = cljs.core.next(arglist__65747);
var G__64741 = cljs.core.first(arglist__65747);
arglist__65747 = cljs.core.next(arglist__65747);
var G__64742 = cljs.core.first(arglist__65747);
arglist__65747 = cljs.core.next(arglist__65747);
var G__64743 = cljs.core.first(arglist__65747);
var G__64744 = cljs.core.rest(arglist__65747);
return sci$impl$fns$fun_$_arity_11__delegate(G__64733,G__64734,G__64735,G__64736,G__64737,G__64738,G__64739,G__64740,G__64741,G__64742,G__64743,G__64744);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__64789 = cljs.core._nth(params,(0));
var G__64790 = cljs.core._nth(params,(1));
var G__64791 = cljs.core._nth(params,(2));
var G__64792 = cljs.core._nth(params,(3));
var G__64793 = cljs.core._nth(params,(4));
var G__64794 = cljs.core._nth(params,(5));
var G__64795 = cljs.core._nth(params,(6));
var G__64796 = cljs.core._nth(params,(7));
var G__64797 = cljs.core._nth(params,(8));
var G__64798 = cljs.core._nth(params,(9));
var G__64799 = cljs.core._nth(params,(10));
var G__64800 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__64776,G__64777,G__64778,G__64779,G__64780,G__64781,G__64782,G__64783,G__64784,G__64785,G__64786,G__64787,G__64788){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64776);

(invoc_array[(1)] = G__64777);

(invoc_array[(2)] = G__64778);

(invoc_array[(3)] = G__64779);

(invoc_array[(4)] = G__64780);

(invoc_array[(5)] = G__64781);

(invoc_array[(6)] = G__64782);

(invoc_array[(7)] = G__64783);

(invoc_array[(8)] = G__64784);

(invoc_array[(9)] = G__64785);

(invoc_array[(10)] = G__64786);

(invoc_array[(11)] = G__64787);

(invoc_array[vararg_idx] = G__64788);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_12 = function (G__64776,G__64777,G__64778,G__64779,G__64780,G__64781,G__64782,G__64783,G__64784,G__64785,G__64786,G__64787,var_args){
var G__64788 = null;
if (arguments.length > 12) {
var G__65748__i = 0, G__65748__a = new Array(arguments.length -  12);
while (G__65748__i < G__65748__a.length) {G__65748__a[G__65748__i] = arguments[G__65748__i + 12]; ++G__65748__i;}
  G__64788 = new cljs.core.IndexedSeq(G__65748__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__64776,G__64777,G__64778,G__64779,G__64780,G__64781,G__64782,G__64783,G__64784,G__64785,G__64786,G__64787,G__64788);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__65749){
var G__64776 = cljs.core.first(arglist__65749);
arglist__65749 = cljs.core.next(arglist__65749);
var G__64777 = cljs.core.first(arglist__65749);
arglist__65749 = cljs.core.next(arglist__65749);
var G__64778 = cljs.core.first(arglist__65749);
arglist__65749 = cljs.core.next(arglist__65749);
var G__64779 = cljs.core.first(arglist__65749);
arglist__65749 = cljs.core.next(arglist__65749);
var G__64780 = cljs.core.first(arglist__65749);
arglist__65749 = cljs.core.next(arglist__65749);
var G__64781 = cljs.core.first(arglist__65749);
arglist__65749 = cljs.core.next(arglist__65749);
var G__64782 = cljs.core.first(arglist__65749);
arglist__65749 = cljs.core.next(arglist__65749);
var G__64783 = cljs.core.first(arglist__65749);
arglist__65749 = cljs.core.next(arglist__65749);
var G__64784 = cljs.core.first(arglist__65749);
arglist__65749 = cljs.core.next(arglist__65749);
var G__64785 = cljs.core.first(arglist__65749);
arglist__65749 = cljs.core.next(arglist__65749);
var G__64786 = cljs.core.first(arglist__65749);
arglist__65749 = cljs.core.next(arglist__65749);
var G__64787 = cljs.core.first(arglist__65749);
var G__64788 = cljs.core.rest(arglist__65749);
return sci$impl$fns$fun_$_arity_12__delegate(G__64776,G__64777,G__64778,G__64779,G__64780,G__64781,G__64782,G__64783,G__64784,G__64785,G__64786,G__64787,G__64788);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__64818 = cljs.core._nth(params,(0));
var G__64819 = cljs.core._nth(params,(1));
var G__64820 = cljs.core._nth(params,(2));
var G__64821 = cljs.core._nth(params,(3));
var G__64822 = cljs.core._nth(params,(4));
var G__64823 = cljs.core._nth(params,(5));
var G__64824 = cljs.core._nth(params,(6));
var G__64825 = cljs.core._nth(params,(7));
var G__64826 = cljs.core._nth(params,(8));
var G__64827 = cljs.core._nth(params,(9));
var G__64828 = cljs.core._nth(params,(10));
var G__64829 = cljs.core._nth(params,(11));
var G__64830 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__64804,G__64805,G__64806,G__64807,G__64808,G__64809,G__64810,G__64811,G__64812,G__64813,G__64814,G__64815,G__64816,G__64817){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64804);

(invoc_array[(1)] = G__64805);

(invoc_array[(2)] = G__64806);

(invoc_array[(3)] = G__64807);

(invoc_array[(4)] = G__64808);

(invoc_array[(5)] = G__64809);

(invoc_array[(6)] = G__64810);

(invoc_array[(7)] = G__64811);

(invoc_array[(8)] = G__64812);

(invoc_array[(9)] = G__64813);

(invoc_array[(10)] = G__64814);

(invoc_array[(11)] = G__64815);

(invoc_array[(12)] = G__64816);

(invoc_array[vararg_idx] = G__64817);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_13 = function (G__64804,G__64805,G__64806,G__64807,G__64808,G__64809,G__64810,G__64811,G__64812,G__64813,G__64814,G__64815,G__64816,var_args){
var G__64817 = null;
if (arguments.length > 13) {
var G__65750__i = 0, G__65750__a = new Array(arguments.length -  13);
while (G__65750__i < G__65750__a.length) {G__65750__a[G__65750__i] = arguments[G__65750__i + 13]; ++G__65750__i;}
  G__64817 = new cljs.core.IndexedSeq(G__65750__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__64804,G__64805,G__64806,G__64807,G__64808,G__64809,G__64810,G__64811,G__64812,G__64813,G__64814,G__64815,G__64816,G__64817);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__65751){
var G__64804 = cljs.core.first(arglist__65751);
arglist__65751 = cljs.core.next(arglist__65751);
var G__64805 = cljs.core.first(arglist__65751);
arglist__65751 = cljs.core.next(arglist__65751);
var G__64806 = cljs.core.first(arglist__65751);
arglist__65751 = cljs.core.next(arglist__65751);
var G__64807 = cljs.core.first(arglist__65751);
arglist__65751 = cljs.core.next(arglist__65751);
var G__64808 = cljs.core.first(arglist__65751);
arglist__65751 = cljs.core.next(arglist__65751);
var G__64809 = cljs.core.first(arglist__65751);
arglist__65751 = cljs.core.next(arglist__65751);
var G__64810 = cljs.core.first(arglist__65751);
arglist__65751 = cljs.core.next(arglist__65751);
var G__64811 = cljs.core.first(arglist__65751);
arglist__65751 = cljs.core.next(arglist__65751);
var G__64812 = cljs.core.first(arglist__65751);
arglist__65751 = cljs.core.next(arglist__65751);
var G__64813 = cljs.core.first(arglist__65751);
arglist__65751 = cljs.core.next(arglist__65751);
var G__64814 = cljs.core.first(arglist__65751);
arglist__65751 = cljs.core.next(arglist__65751);
var G__64815 = cljs.core.first(arglist__65751);
arglist__65751 = cljs.core.next(arglist__65751);
var G__64816 = cljs.core.first(arglist__65751);
var G__64817 = cljs.core.rest(arglist__65751);
return sci$impl$fns$fun_$_arity_13__delegate(G__64804,G__64805,G__64806,G__64807,G__64808,G__64809,G__64810,G__64811,G__64812,G__64813,G__64814,G__64815,G__64816,G__64817);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__64849 = cljs.core._nth(params,(0));
var G__64850 = cljs.core._nth(params,(1));
var G__64851 = cljs.core._nth(params,(2));
var G__64852 = cljs.core._nth(params,(3));
var G__64853 = cljs.core._nth(params,(4));
var G__64854 = cljs.core._nth(params,(5));
var G__64855 = cljs.core._nth(params,(6));
var G__64856 = cljs.core._nth(params,(7));
var G__64857 = cljs.core._nth(params,(8));
var G__64858 = cljs.core._nth(params,(9));
var G__64859 = cljs.core._nth(params,(10));
var G__64860 = cljs.core._nth(params,(11));
var G__64861 = cljs.core._nth(params,(12));
var G__64862 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__64834,G__64835,G__64836,G__64837,G__64838,G__64839,G__64840,G__64841,G__64842,G__64843,G__64844,G__64845,G__64846,G__64847,G__64848){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64834);

(invoc_array[(1)] = G__64835);

(invoc_array[(2)] = G__64836);

(invoc_array[(3)] = G__64837);

(invoc_array[(4)] = G__64838);

(invoc_array[(5)] = G__64839);

(invoc_array[(6)] = G__64840);

(invoc_array[(7)] = G__64841);

(invoc_array[(8)] = G__64842);

(invoc_array[(9)] = G__64843);

(invoc_array[(10)] = G__64844);

(invoc_array[(11)] = G__64845);

(invoc_array[(12)] = G__64846);

(invoc_array[(13)] = G__64847);

(invoc_array[vararg_idx] = G__64848);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_14 = function (G__64834,G__64835,G__64836,G__64837,G__64838,G__64839,G__64840,G__64841,G__64842,G__64843,G__64844,G__64845,G__64846,G__64847,var_args){
var G__64848 = null;
if (arguments.length > 14) {
var G__65752__i = 0, G__65752__a = new Array(arguments.length -  14);
while (G__65752__i < G__65752__a.length) {G__65752__a[G__65752__i] = arguments[G__65752__i + 14]; ++G__65752__i;}
  G__64848 = new cljs.core.IndexedSeq(G__65752__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__64834,G__64835,G__64836,G__64837,G__64838,G__64839,G__64840,G__64841,G__64842,G__64843,G__64844,G__64845,G__64846,G__64847,G__64848);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__65753){
var G__64834 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64835 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64836 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64837 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64838 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64839 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64840 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64841 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64842 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64843 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64844 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64845 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64846 = cljs.core.first(arglist__65753);
arglist__65753 = cljs.core.next(arglist__65753);
var G__64847 = cljs.core.first(arglist__65753);
var G__64848 = cljs.core.rest(arglist__65753);
return sci$impl$fns$fun_$_arity_14__delegate(G__64834,G__64835,G__64836,G__64837,G__64838,G__64839,G__64840,G__64841,G__64842,G__64843,G__64844,G__64845,G__64846,G__64847,G__64848);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__64892 = cljs.core._nth(params,(0));
var G__64893 = cljs.core._nth(params,(1));
var G__64894 = cljs.core._nth(params,(2));
var G__64895 = cljs.core._nth(params,(3));
var G__64896 = cljs.core._nth(params,(4));
var G__64897 = cljs.core._nth(params,(5));
var G__64898 = cljs.core._nth(params,(6));
var G__64899 = cljs.core._nth(params,(7));
var G__64900 = cljs.core._nth(params,(8));
var G__64901 = cljs.core._nth(params,(9));
var G__64902 = cljs.core._nth(params,(10));
var G__64903 = cljs.core._nth(params,(11));
var G__64904 = cljs.core._nth(params,(12));
var G__64905 = cljs.core._nth(params,(13));
var G__64906 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__64876,G__64877,G__64878,G__64879,G__64880,G__64881,G__64882,G__64883,G__64884,G__64885,G__64886,G__64887,G__64888,G__64889,G__64890,G__64891){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64876);

(invoc_array[(1)] = G__64877);

(invoc_array[(2)] = G__64878);

(invoc_array[(3)] = G__64879);

(invoc_array[(4)] = G__64880);

(invoc_array[(5)] = G__64881);

(invoc_array[(6)] = G__64882);

(invoc_array[(7)] = G__64883);

(invoc_array[(8)] = G__64884);

(invoc_array[(9)] = G__64885);

(invoc_array[(10)] = G__64886);

(invoc_array[(11)] = G__64887);

(invoc_array[(12)] = G__64888);

(invoc_array[(13)] = G__64889);

(invoc_array[(14)] = G__64890);

(invoc_array[vararg_idx] = G__64891);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_15 = function (G__64876,G__64877,G__64878,G__64879,G__64880,G__64881,G__64882,G__64883,G__64884,G__64885,G__64886,G__64887,G__64888,G__64889,G__64890,var_args){
var G__64891 = null;
if (arguments.length > 15) {
var G__65754__i = 0, G__65754__a = new Array(arguments.length -  15);
while (G__65754__i < G__65754__a.length) {G__65754__a[G__65754__i] = arguments[G__65754__i + 15]; ++G__65754__i;}
  G__64891 = new cljs.core.IndexedSeq(G__65754__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__64876,G__64877,G__64878,G__64879,G__64880,G__64881,G__64882,G__64883,G__64884,G__64885,G__64886,G__64887,G__64888,G__64889,G__64890,G__64891);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__65755){
var G__64876 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64877 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64878 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64879 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64880 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64881 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64882 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64883 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64884 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64885 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64886 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64887 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64888 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64889 = cljs.core.first(arglist__65755);
arglist__65755 = cljs.core.next(arglist__65755);
var G__64890 = cljs.core.first(arglist__65755);
var G__64891 = cljs.core.rest(arglist__65755);
return sci$impl$fns$fun_$_arity_15__delegate(G__64876,G__64877,G__64878,G__64879,G__64880,G__64881,G__64882,G__64883,G__64884,G__64885,G__64886,G__64887,G__64888,G__64889,G__64890,G__64891);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__64924 = cljs.core._nth(params,(0));
var G__64925 = cljs.core._nth(params,(1));
var G__64926 = cljs.core._nth(params,(2));
var G__64927 = cljs.core._nth(params,(3));
var G__64928 = cljs.core._nth(params,(4));
var G__64929 = cljs.core._nth(params,(5));
var G__64930 = cljs.core._nth(params,(6));
var G__64931 = cljs.core._nth(params,(7));
var G__64932 = cljs.core._nth(params,(8));
var G__64933 = cljs.core._nth(params,(9));
var G__64934 = cljs.core._nth(params,(10));
var G__64935 = cljs.core._nth(params,(11));
var G__64936 = cljs.core._nth(params,(12));
var G__64937 = cljs.core._nth(params,(13));
var G__64938 = cljs.core._nth(params,(14));
var G__64939 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__64907,G__64908,G__64909,G__64910,G__64911,G__64912,G__64913,G__64914,G__64915,G__64916,G__64917,G__64918,G__64919,G__64920,G__64921,G__64922,G__64923){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64907);

(invoc_array[(1)] = G__64908);

(invoc_array[(2)] = G__64909);

(invoc_array[(3)] = G__64910);

(invoc_array[(4)] = G__64911);

(invoc_array[(5)] = G__64912);

(invoc_array[(6)] = G__64913);

(invoc_array[(7)] = G__64914);

(invoc_array[(8)] = G__64915);

(invoc_array[(9)] = G__64916);

(invoc_array[(10)] = G__64917);

(invoc_array[(11)] = G__64918);

(invoc_array[(12)] = G__64919);

(invoc_array[(13)] = G__64920);

(invoc_array[(14)] = G__64921);

(invoc_array[(15)] = G__64922);

(invoc_array[vararg_idx] = G__64923);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_16 = function (G__64907,G__64908,G__64909,G__64910,G__64911,G__64912,G__64913,G__64914,G__64915,G__64916,G__64917,G__64918,G__64919,G__64920,G__64921,G__64922,var_args){
var G__64923 = null;
if (arguments.length > 16) {
var G__65758__i = 0, G__65758__a = new Array(arguments.length -  16);
while (G__65758__i < G__65758__a.length) {G__65758__a[G__65758__i] = arguments[G__65758__i + 16]; ++G__65758__i;}
  G__64923 = new cljs.core.IndexedSeq(G__65758__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__64907,G__64908,G__64909,G__64910,G__64911,G__64912,G__64913,G__64914,G__64915,G__64916,G__64917,G__64918,G__64919,G__64920,G__64921,G__64922,G__64923);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__65759){
var G__64907 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64908 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64909 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64910 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64911 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64912 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64913 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64914 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64915 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64916 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64917 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64918 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64919 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64920 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64921 = cljs.core.first(arglist__65759);
arglist__65759 = cljs.core.next(arglist__65759);
var G__64922 = cljs.core.first(arglist__65759);
var G__64923 = cljs.core.rest(arglist__65759);
return sci$impl$fns$fun_$_arity_16__delegate(G__64907,G__64908,G__64909,G__64910,G__64911,G__64912,G__64913,G__64914,G__64915,G__64916,G__64917,G__64918,G__64919,G__64920,G__64921,G__64922,G__64923);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__64961 = cljs.core._nth(params,(0));
var G__64962 = cljs.core._nth(params,(1));
var G__64963 = cljs.core._nth(params,(2));
var G__64964 = cljs.core._nth(params,(3));
var G__64965 = cljs.core._nth(params,(4));
var G__64966 = cljs.core._nth(params,(5));
var G__64967 = cljs.core._nth(params,(6));
var G__64968 = cljs.core._nth(params,(7));
var G__64969 = cljs.core._nth(params,(8));
var G__64970 = cljs.core._nth(params,(9));
var G__64971 = cljs.core._nth(params,(10));
var G__64972 = cljs.core._nth(params,(11));
var G__64973 = cljs.core._nth(params,(12));
var G__64974 = cljs.core._nth(params,(13));
var G__64975 = cljs.core._nth(params,(14));
var G__64976 = cljs.core._nth(params,(15));
var G__64977 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__64943,G__64944,G__64945,G__64946,G__64947,G__64948,G__64949,G__64950,G__64951,G__64952,G__64953,G__64954,G__64955,G__64956,G__64957,G__64958,G__64959,G__64960){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64943);

(invoc_array[(1)] = G__64944);

(invoc_array[(2)] = G__64945);

(invoc_array[(3)] = G__64946);

(invoc_array[(4)] = G__64947);

(invoc_array[(5)] = G__64948);

(invoc_array[(6)] = G__64949);

(invoc_array[(7)] = G__64950);

(invoc_array[(8)] = G__64951);

(invoc_array[(9)] = G__64952);

(invoc_array[(10)] = G__64953);

(invoc_array[(11)] = G__64954);

(invoc_array[(12)] = G__64955);

(invoc_array[(13)] = G__64956);

(invoc_array[(14)] = G__64957);

(invoc_array[(15)] = G__64958);

(invoc_array[(16)] = G__64959);

(invoc_array[vararg_idx] = G__64960);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_17 = function (G__64943,G__64944,G__64945,G__64946,G__64947,G__64948,G__64949,G__64950,G__64951,G__64952,G__64953,G__64954,G__64955,G__64956,G__64957,G__64958,G__64959,var_args){
var G__64960 = null;
if (arguments.length > 17) {
var G__65769__i = 0, G__65769__a = new Array(arguments.length -  17);
while (G__65769__i < G__65769__a.length) {G__65769__a[G__65769__i] = arguments[G__65769__i + 17]; ++G__65769__i;}
  G__64960 = new cljs.core.IndexedSeq(G__65769__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__64943,G__64944,G__64945,G__64946,G__64947,G__64948,G__64949,G__64950,G__64951,G__64952,G__64953,G__64954,G__64955,G__64956,G__64957,G__64958,G__64959,G__64960);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__65770){
var G__64943 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64944 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64945 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64946 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64947 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64948 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64949 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64950 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64951 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64952 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64953 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64954 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64955 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64956 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64957 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64958 = cljs.core.first(arglist__65770);
arglist__65770 = cljs.core.next(arglist__65770);
var G__64959 = cljs.core.first(arglist__65770);
var G__64960 = cljs.core.rest(arglist__65770);
return sci$impl$fns$fun_$_arity_17__delegate(G__64943,G__64944,G__64945,G__64946,G__64947,G__64948,G__64949,G__64950,G__64951,G__64952,G__64953,G__64954,G__64955,G__64956,G__64957,G__64958,G__64959,G__64960);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__65000 = cljs.core._nth(params,(0));
var G__65001 = cljs.core._nth(params,(1));
var G__65002 = cljs.core._nth(params,(2));
var G__65003 = cljs.core._nth(params,(3));
var G__65004 = cljs.core._nth(params,(4));
var G__65005 = cljs.core._nth(params,(5));
var G__65006 = cljs.core._nth(params,(6));
var G__65007 = cljs.core._nth(params,(7));
var G__65008 = cljs.core._nth(params,(8));
var G__65009 = cljs.core._nth(params,(9));
var G__65010 = cljs.core._nth(params,(10));
var G__65011 = cljs.core._nth(params,(11));
var G__65012 = cljs.core._nth(params,(12));
var G__65013 = cljs.core._nth(params,(13));
var G__65014 = cljs.core._nth(params,(14));
var G__65015 = cljs.core._nth(params,(15));
var G__65016 = cljs.core._nth(params,(16));
var G__65017 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__64981,G__64982,G__64983,G__64984,G__64985,G__64986,G__64987,G__64988,G__64989,G__64990,G__64991,G__64992,G__64993,G__64994,G__64995,G__64996,G__64997,G__64998,G__64999){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__64981);

(invoc_array[(1)] = G__64982);

(invoc_array[(2)] = G__64983);

(invoc_array[(3)] = G__64984);

(invoc_array[(4)] = G__64985);

(invoc_array[(5)] = G__64986);

(invoc_array[(6)] = G__64987);

(invoc_array[(7)] = G__64988);

(invoc_array[(8)] = G__64989);

(invoc_array[(9)] = G__64990);

(invoc_array[(10)] = G__64991);

(invoc_array[(11)] = G__64992);

(invoc_array[(12)] = G__64993);

(invoc_array[(13)] = G__64994);

(invoc_array[(14)] = G__64995);

(invoc_array[(15)] = G__64996);

(invoc_array[(16)] = G__64997);

(invoc_array[(17)] = G__64998);

(invoc_array[vararg_idx] = G__64999);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_18 = function (G__64981,G__64982,G__64983,G__64984,G__64985,G__64986,G__64987,G__64988,G__64989,G__64990,G__64991,G__64992,G__64993,G__64994,G__64995,G__64996,G__64997,G__64998,var_args){
var G__64999 = null;
if (arguments.length > 18) {
var G__65772__i = 0, G__65772__a = new Array(arguments.length -  18);
while (G__65772__i < G__65772__a.length) {G__65772__a[G__65772__i] = arguments[G__65772__i + 18]; ++G__65772__i;}
  G__64999 = new cljs.core.IndexedSeq(G__65772__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__64981,G__64982,G__64983,G__64984,G__64985,G__64986,G__64987,G__64988,G__64989,G__64990,G__64991,G__64992,G__64993,G__64994,G__64995,G__64996,G__64997,G__64998,G__64999);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__65773){
var G__64981 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64982 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64983 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64984 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64985 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64986 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64987 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64988 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64989 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64990 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64991 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64992 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64993 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64994 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64995 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64996 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64997 = cljs.core.first(arglist__65773);
arglist__65773 = cljs.core.next(arglist__65773);
var G__64998 = cljs.core.first(arglist__65773);
var G__64999 = cljs.core.rest(arglist__65773);
return sci$impl$fns$fun_$_arity_18__delegate(G__64981,G__64982,G__64983,G__64984,G__64985,G__64986,G__64987,G__64988,G__64989,G__64990,G__64991,G__64992,G__64993,G__64994,G__64995,G__64996,G__64997,G__64998,G__64999);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__65049 = cljs.core._nth(params,(0));
var G__65050 = cljs.core._nth(params,(1));
var G__65051 = cljs.core._nth(params,(2));
var G__65052 = cljs.core._nth(params,(3));
var G__65053 = cljs.core._nth(params,(4));
var G__65054 = cljs.core._nth(params,(5));
var G__65055 = cljs.core._nth(params,(6));
var G__65056 = cljs.core._nth(params,(7));
var G__65057 = cljs.core._nth(params,(8));
var G__65058 = cljs.core._nth(params,(9));
var G__65059 = cljs.core._nth(params,(10));
var G__65060 = cljs.core._nth(params,(11));
var G__65061 = cljs.core._nth(params,(12));
var G__65062 = cljs.core._nth(params,(13));
var G__65063 = cljs.core._nth(params,(14));
var G__65064 = cljs.core._nth(params,(15));
var G__65065 = cljs.core._nth(params,(16));
var G__65066 = cljs.core._nth(params,(17));
var G__65067 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__65029,G__65030,G__65031,G__65032,G__65033,G__65034,G__65035,G__65036,G__65037,G__65038,G__65039,G__65040,G__65041,G__65042,G__65043,G__65044,G__65045,G__65046,G__65047,G__65048){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65029);

(invoc_array[(1)] = G__65030);

(invoc_array[(2)] = G__65031);

(invoc_array[(3)] = G__65032);

(invoc_array[(4)] = G__65033);

(invoc_array[(5)] = G__65034);

(invoc_array[(6)] = G__65035);

(invoc_array[(7)] = G__65036);

(invoc_array[(8)] = G__65037);

(invoc_array[(9)] = G__65038);

(invoc_array[(10)] = G__65039);

(invoc_array[(11)] = G__65040);

(invoc_array[(12)] = G__65041);

(invoc_array[(13)] = G__65042);

(invoc_array[(14)] = G__65043);

(invoc_array[(15)] = G__65044);

(invoc_array[(16)] = G__65045);

(invoc_array[(17)] = G__65046);

(invoc_array[(18)] = G__65047);

(invoc_array[vararg_idx] = G__65048);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_19 = function (G__65029,G__65030,G__65031,G__65032,G__65033,G__65034,G__65035,G__65036,G__65037,G__65038,G__65039,G__65040,G__65041,G__65042,G__65043,G__65044,G__65045,G__65046,G__65047,var_args){
var G__65048 = null;
if (arguments.length > 19) {
var G__65777__i = 0, G__65777__a = new Array(arguments.length -  19);
while (G__65777__i < G__65777__a.length) {G__65777__a[G__65777__i] = arguments[G__65777__i + 19]; ++G__65777__i;}
  G__65048 = new cljs.core.IndexedSeq(G__65777__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__65029,G__65030,G__65031,G__65032,G__65033,G__65034,G__65035,G__65036,G__65037,G__65038,G__65039,G__65040,G__65041,G__65042,G__65043,G__65044,G__65045,G__65046,G__65047,G__65048);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__65779){
var G__65029 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65030 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65031 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65032 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65033 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65034 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65035 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65036 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65037 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65038 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65039 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65040 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65041 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65042 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65043 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65044 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65045 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65046 = cljs.core.first(arglist__65779);
arglist__65779 = cljs.core.next(arglist__65779);
var G__65047 = cljs.core.first(arglist__65779);
var G__65048 = cljs.core.rest(arglist__65779);
return sci$impl$fns$fun_$_arity_19__delegate(G__65029,G__65030,G__65031,G__65032,G__65033,G__65034,G__65035,G__65036,G__65037,G__65038,G__65039,G__65040,G__65041,G__65042,G__65043,G__65044,G__65045,G__65046,G__65047,G__65048);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__65089 = cljs.core._nth(params,(0));
var G__65090 = cljs.core._nth(params,(1));
var G__65091 = cljs.core._nth(params,(2));
var G__65092 = cljs.core._nth(params,(3));
var G__65093 = cljs.core._nth(params,(4));
var G__65094 = cljs.core._nth(params,(5));
var G__65095 = cljs.core._nth(params,(6));
var G__65096 = cljs.core._nth(params,(7));
var G__65097 = cljs.core._nth(params,(8));
var G__65098 = cljs.core._nth(params,(9));
var G__65099 = cljs.core._nth(params,(10));
var G__65100 = cljs.core._nth(params,(11));
var G__65101 = cljs.core._nth(params,(12));
var G__65102 = cljs.core._nth(params,(13));
var G__65103 = cljs.core._nth(params,(14));
var G__65104 = cljs.core._nth(params,(15));
var G__65105 = cljs.core._nth(params,(16));
var G__65106 = cljs.core._nth(params,(17));
var G__65107 = cljs.core._nth(params,(18));
var G__65108 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__65068,G__65069,G__65070,G__65071,G__65072,G__65073,G__65074,G__65075,G__65076,G__65077,G__65078,G__65079,G__65080,G__65081,G__65082,G__65083,G__65084,G__65085,G__65086,G__65087,G__65088){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65068);

(invoc_array[(1)] = G__65069);

(invoc_array[(2)] = G__65070);

(invoc_array[(3)] = G__65071);

(invoc_array[(4)] = G__65072);

(invoc_array[(5)] = G__65073);

(invoc_array[(6)] = G__65074);

(invoc_array[(7)] = G__65075);

(invoc_array[(8)] = G__65076);

(invoc_array[(9)] = G__65077);

(invoc_array[(10)] = G__65078);

(invoc_array[(11)] = G__65079);

(invoc_array[(12)] = G__65080);

(invoc_array[(13)] = G__65081);

(invoc_array[(14)] = G__65082);

(invoc_array[(15)] = G__65083);

(invoc_array[(16)] = G__65084);

(invoc_array[(17)] = G__65085);

(invoc_array[(18)] = G__65086);

(invoc_array[(19)] = G__65087);

(invoc_array[vararg_idx] = G__65088);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_20 = function (G__65068,G__65069,G__65070,G__65071,G__65072,G__65073,G__65074,G__65075,G__65076,G__65077,G__65078,G__65079,G__65080,G__65081,G__65082,G__65083,G__65084,G__65085,G__65086,G__65087,var_args){
var G__65088 = null;
if (arguments.length > 20) {
var G__65780__i = 0, G__65780__a = new Array(arguments.length -  20);
while (G__65780__i < G__65780__a.length) {G__65780__a[G__65780__i] = arguments[G__65780__i + 20]; ++G__65780__i;}
  G__65088 = new cljs.core.IndexedSeq(G__65780__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__65068,G__65069,G__65070,G__65071,G__65072,G__65073,G__65074,G__65075,G__65076,G__65077,G__65078,G__65079,G__65080,G__65081,G__65082,G__65083,G__65084,G__65085,G__65086,G__65087,G__65088);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__65781){
var G__65068 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65069 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65070 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65071 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65072 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65073 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65074 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65075 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65076 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65077 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65078 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65079 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65080 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65081 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65082 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65083 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65084 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65085 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65086 = cljs.core.first(arglist__65781);
arglist__65781 = cljs.core.next(arglist__65781);
var G__65087 = cljs.core.first(arglist__65781);
var G__65088 = cljs.core.rest(arglist__65781);
return sci$impl$fns$fun_$_arity_20__delegate(G__65068,G__65069,G__65070,G__65071,G__65072,G__65073,G__65074,G__65075,G__65076,G__65077,G__65078,G__65079,G__65080,G__65081,G__65082,G__65083,G__65084,G__65085,G__65086,G__65087,G__65088);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64556)].join('')));

}
})():(function (){var G__65112 = (fixed_arity | (0));
switch (G__65112) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__63435__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63435__auto__)){
continue;
} else {
return ret__63435__auto__;
}
break;
}
});

break;
case (1):
var G__65118 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__65117){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65117);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (2):
var G__65121 = cljs.core._nth(params,(0));
var G__65122 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__65119,G__65120){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65119);

(invoc_array[(1)] = G__65120);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (3):
var G__65132 = cljs.core._nth(params,(0));
var G__65133 = cljs.core._nth(params,(1));
var G__65134 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__65129,G__65130,G__65131){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65129);

(invoc_array[(1)] = G__65130);

(invoc_array[(2)] = G__65131);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (4):
var G__65139 = cljs.core._nth(params,(0));
var G__65140 = cljs.core._nth(params,(1));
var G__65141 = cljs.core._nth(params,(2));
var G__65142 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__65135,G__65136,G__65137,G__65138){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65135);

(invoc_array[(1)] = G__65136);

(invoc_array[(2)] = G__65137);

(invoc_array[(3)] = G__65138);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (5):
var G__65154 = cljs.core._nth(params,(0));
var G__65155 = cljs.core._nth(params,(1));
var G__65156 = cljs.core._nth(params,(2));
var G__65157 = cljs.core._nth(params,(3));
var G__65158 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__65149,G__65150,G__65151,G__65152,G__65153){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65149);

(invoc_array[(1)] = G__65150);

(invoc_array[(2)] = G__65151);

(invoc_array[(3)] = G__65152);

(invoc_array[(4)] = G__65153);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (6):
var G__65169 = cljs.core._nth(params,(0));
var G__65170 = cljs.core._nth(params,(1));
var G__65171 = cljs.core._nth(params,(2));
var G__65172 = cljs.core._nth(params,(3));
var G__65173 = cljs.core._nth(params,(4));
var G__65174 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__65163,G__65164,G__65165,G__65166,G__65167,G__65168){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65163);

(invoc_array[(1)] = G__65164);

(invoc_array[(2)] = G__65165);

(invoc_array[(3)] = G__65166);

(invoc_array[(4)] = G__65167);

(invoc_array[(5)] = G__65168);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (7):
var G__65182 = cljs.core._nth(params,(0));
var G__65183 = cljs.core._nth(params,(1));
var G__65184 = cljs.core._nth(params,(2));
var G__65185 = cljs.core._nth(params,(3));
var G__65186 = cljs.core._nth(params,(4));
var G__65187 = cljs.core._nth(params,(5));
var G__65188 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__65175,G__65176,G__65177,G__65178,G__65179,G__65180,G__65181){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65175);

(invoc_array[(1)] = G__65176);

(invoc_array[(2)] = G__65177);

(invoc_array[(3)] = G__65178);

(invoc_array[(4)] = G__65179);

(invoc_array[(5)] = G__65180);

(invoc_array[(6)] = G__65181);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (8):
var G__65197 = cljs.core._nth(params,(0));
var G__65198 = cljs.core._nth(params,(1));
var G__65199 = cljs.core._nth(params,(2));
var G__65200 = cljs.core._nth(params,(3));
var G__65201 = cljs.core._nth(params,(4));
var G__65202 = cljs.core._nth(params,(5));
var G__65203 = cljs.core._nth(params,(6));
var G__65204 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__65189,G__65190,G__65191,G__65192,G__65193,G__65194,G__65195,G__65196){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65189);

(invoc_array[(1)] = G__65190);

(invoc_array[(2)] = G__65191);

(invoc_array[(3)] = G__65192);

(invoc_array[(4)] = G__65193);

(invoc_array[(5)] = G__65194);

(invoc_array[(6)] = G__65195);

(invoc_array[(7)] = G__65196);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (9):
var G__65218 = cljs.core._nth(params,(0));
var G__65219 = cljs.core._nth(params,(1));
var G__65220 = cljs.core._nth(params,(2));
var G__65221 = cljs.core._nth(params,(3));
var G__65222 = cljs.core._nth(params,(4));
var G__65223 = cljs.core._nth(params,(5));
var G__65224 = cljs.core._nth(params,(6));
var G__65225 = cljs.core._nth(params,(7));
var G__65226 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__65209,G__65210,G__65211,G__65212,G__65213,G__65214,G__65215,G__65216,G__65217){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65209);

(invoc_array[(1)] = G__65210);

(invoc_array[(2)] = G__65211);

(invoc_array[(3)] = G__65212);

(invoc_array[(4)] = G__65213);

(invoc_array[(5)] = G__65214);

(invoc_array[(6)] = G__65215);

(invoc_array[(7)] = G__65216);

(invoc_array[(8)] = G__65217);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (10):
var G__65237 = cljs.core._nth(params,(0));
var G__65238 = cljs.core._nth(params,(1));
var G__65239 = cljs.core._nth(params,(2));
var G__65240 = cljs.core._nth(params,(3));
var G__65241 = cljs.core._nth(params,(4));
var G__65242 = cljs.core._nth(params,(5));
var G__65243 = cljs.core._nth(params,(6));
var G__65244 = cljs.core._nth(params,(7));
var G__65245 = cljs.core._nth(params,(8));
var G__65246 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__65227,G__65228,G__65229,G__65230,G__65231,G__65232,G__65233,G__65234,G__65235,G__65236){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65227);

(invoc_array[(1)] = G__65228);

(invoc_array[(2)] = G__65229);

(invoc_array[(3)] = G__65230);

(invoc_array[(4)] = G__65231);

(invoc_array[(5)] = G__65232);

(invoc_array[(6)] = G__65233);

(invoc_array[(7)] = G__65234);

(invoc_array[(8)] = G__65235);

(invoc_array[(9)] = G__65236);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (11):
var G__65258 = cljs.core._nth(params,(0));
var G__65259 = cljs.core._nth(params,(1));
var G__65260 = cljs.core._nth(params,(2));
var G__65261 = cljs.core._nth(params,(3));
var G__65262 = cljs.core._nth(params,(4));
var G__65263 = cljs.core._nth(params,(5));
var G__65264 = cljs.core._nth(params,(6));
var G__65265 = cljs.core._nth(params,(7));
var G__65266 = cljs.core._nth(params,(8));
var G__65267 = cljs.core._nth(params,(9));
var G__65268 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__65247,G__65248,G__65249,G__65250,G__65251,G__65252,G__65253,G__65254,G__65255,G__65256,G__65257){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65247);

(invoc_array[(1)] = G__65248);

(invoc_array[(2)] = G__65249);

(invoc_array[(3)] = G__65250);

(invoc_array[(4)] = G__65251);

(invoc_array[(5)] = G__65252);

(invoc_array[(6)] = G__65253);

(invoc_array[(7)] = G__65254);

(invoc_array[(8)] = G__65255);

(invoc_array[(9)] = G__65256);

(invoc_array[(10)] = G__65257);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (12):
var G__65281 = cljs.core._nth(params,(0));
var G__65282 = cljs.core._nth(params,(1));
var G__65283 = cljs.core._nth(params,(2));
var G__65284 = cljs.core._nth(params,(3));
var G__65285 = cljs.core._nth(params,(4));
var G__65286 = cljs.core._nth(params,(5));
var G__65287 = cljs.core._nth(params,(6));
var G__65288 = cljs.core._nth(params,(7));
var G__65289 = cljs.core._nth(params,(8));
var G__65290 = cljs.core._nth(params,(9));
var G__65291 = cljs.core._nth(params,(10));
var G__65292 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__65269,G__65270,G__65271,G__65272,G__65273,G__65274,G__65275,G__65276,G__65277,G__65278,G__65279,G__65280){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65269);

(invoc_array[(1)] = G__65270);

(invoc_array[(2)] = G__65271);

(invoc_array[(3)] = G__65272);

(invoc_array[(4)] = G__65273);

(invoc_array[(5)] = G__65274);

(invoc_array[(6)] = G__65275);

(invoc_array[(7)] = G__65276);

(invoc_array[(8)] = G__65277);

(invoc_array[(9)] = G__65278);

(invoc_array[(10)] = G__65279);

(invoc_array[(11)] = G__65280);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (13):
var G__65312 = cljs.core._nth(params,(0));
var G__65313 = cljs.core._nth(params,(1));
var G__65314 = cljs.core._nth(params,(2));
var G__65315 = cljs.core._nth(params,(3));
var G__65316 = cljs.core._nth(params,(4));
var G__65317 = cljs.core._nth(params,(5));
var G__65318 = cljs.core._nth(params,(6));
var G__65319 = cljs.core._nth(params,(7));
var G__65320 = cljs.core._nth(params,(8));
var G__65321 = cljs.core._nth(params,(9));
var G__65322 = cljs.core._nth(params,(10));
var G__65323 = cljs.core._nth(params,(11));
var G__65324 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__65299,G__65300,G__65301,G__65302,G__65303,G__65304,G__65305,G__65306,G__65307,G__65308,G__65309,G__65310,G__65311){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65299);

(invoc_array[(1)] = G__65300);

(invoc_array[(2)] = G__65301);

(invoc_array[(3)] = G__65302);

(invoc_array[(4)] = G__65303);

(invoc_array[(5)] = G__65304);

(invoc_array[(6)] = G__65305);

(invoc_array[(7)] = G__65306);

(invoc_array[(8)] = G__65307);

(invoc_array[(9)] = G__65308);

(invoc_array[(10)] = G__65309);

(invoc_array[(11)] = G__65310);

(invoc_array[(12)] = G__65311);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (14):
var G__65340 = cljs.core._nth(params,(0));
var G__65341 = cljs.core._nth(params,(1));
var G__65342 = cljs.core._nth(params,(2));
var G__65343 = cljs.core._nth(params,(3));
var G__65344 = cljs.core._nth(params,(4));
var G__65345 = cljs.core._nth(params,(5));
var G__65346 = cljs.core._nth(params,(6));
var G__65347 = cljs.core._nth(params,(7));
var G__65348 = cljs.core._nth(params,(8));
var G__65349 = cljs.core._nth(params,(9));
var G__65350 = cljs.core._nth(params,(10));
var G__65351 = cljs.core._nth(params,(11));
var G__65352 = cljs.core._nth(params,(12));
var G__65353 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__65326,G__65327,G__65328,G__65329,G__65330,G__65331,G__65332,G__65333,G__65334,G__65335,G__65336,G__65337,G__65338,G__65339){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65326);

(invoc_array[(1)] = G__65327);

(invoc_array[(2)] = G__65328);

(invoc_array[(3)] = G__65329);

(invoc_array[(4)] = G__65330);

(invoc_array[(5)] = G__65331);

(invoc_array[(6)] = G__65332);

(invoc_array[(7)] = G__65333);

(invoc_array[(8)] = G__65334);

(invoc_array[(9)] = G__65335);

(invoc_array[(10)] = G__65336);

(invoc_array[(11)] = G__65337);

(invoc_array[(12)] = G__65338);

(invoc_array[(13)] = G__65339);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (15):
var G__65376 = cljs.core._nth(params,(0));
var G__65377 = cljs.core._nth(params,(1));
var G__65378 = cljs.core._nth(params,(2));
var G__65379 = cljs.core._nth(params,(3));
var G__65380 = cljs.core._nth(params,(4));
var G__65381 = cljs.core._nth(params,(5));
var G__65382 = cljs.core._nth(params,(6));
var G__65383 = cljs.core._nth(params,(7));
var G__65384 = cljs.core._nth(params,(8));
var G__65385 = cljs.core._nth(params,(9));
var G__65386 = cljs.core._nth(params,(10));
var G__65387 = cljs.core._nth(params,(11));
var G__65388 = cljs.core._nth(params,(12));
var G__65389 = cljs.core._nth(params,(13));
var G__65390 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__65361,G__65362,G__65363,G__65364,G__65365,G__65366,G__65367,G__65368,G__65369,G__65370,G__65371,G__65372,G__65373,G__65374,G__65375){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65361);

(invoc_array[(1)] = G__65362);

(invoc_array[(2)] = G__65363);

(invoc_array[(3)] = G__65364);

(invoc_array[(4)] = G__65365);

(invoc_array[(5)] = G__65366);

(invoc_array[(6)] = G__65367);

(invoc_array[(7)] = G__65368);

(invoc_array[(8)] = G__65369);

(invoc_array[(9)] = G__65370);

(invoc_array[(10)] = G__65371);

(invoc_array[(11)] = G__65372);

(invoc_array[(12)] = G__65373);

(invoc_array[(13)] = G__65374);

(invoc_array[(14)] = G__65375);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (16):
var G__65407 = cljs.core._nth(params,(0));
var G__65408 = cljs.core._nth(params,(1));
var G__65409 = cljs.core._nth(params,(2));
var G__65410 = cljs.core._nth(params,(3));
var G__65411 = cljs.core._nth(params,(4));
var G__65412 = cljs.core._nth(params,(5));
var G__65413 = cljs.core._nth(params,(6));
var G__65414 = cljs.core._nth(params,(7));
var G__65415 = cljs.core._nth(params,(8));
var G__65416 = cljs.core._nth(params,(9));
var G__65417 = cljs.core._nth(params,(10));
var G__65418 = cljs.core._nth(params,(11));
var G__65419 = cljs.core._nth(params,(12));
var G__65420 = cljs.core._nth(params,(13));
var G__65421 = cljs.core._nth(params,(14));
var G__65422 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__65391,G__65392,G__65393,G__65394,G__65395,G__65396,G__65397,G__65398,G__65399,G__65400,G__65401,G__65402,G__65403,G__65404,G__65405,G__65406){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65391);

(invoc_array[(1)] = G__65392);

(invoc_array[(2)] = G__65393);

(invoc_array[(3)] = G__65394);

(invoc_array[(4)] = G__65395);

(invoc_array[(5)] = G__65396);

(invoc_array[(6)] = G__65397);

(invoc_array[(7)] = G__65398);

(invoc_array[(8)] = G__65399);

(invoc_array[(9)] = G__65400);

(invoc_array[(10)] = G__65401);

(invoc_array[(11)] = G__65402);

(invoc_array[(12)] = G__65403);

(invoc_array[(13)] = G__65404);

(invoc_array[(14)] = G__65405);

(invoc_array[(15)] = G__65406);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (17):
var G__65441 = cljs.core._nth(params,(0));
var G__65442 = cljs.core._nth(params,(1));
var G__65443 = cljs.core._nth(params,(2));
var G__65444 = cljs.core._nth(params,(3));
var G__65445 = cljs.core._nth(params,(4));
var G__65446 = cljs.core._nth(params,(5));
var G__65447 = cljs.core._nth(params,(6));
var G__65448 = cljs.core._nth(params,(7));
var G__65449 = cljs.core._nth(params,(8));
var G__65450 = cljs.core._nth(params,(9));
var G__65451 = cljs.core._nth(params,(10));
var G__65452 = cljs.core._nth(params,(11));
var G__65453 = cljs.core._nth(params,(12));
var G__65454 = cljs.core._nth(params,(13));
var G__65455 = cljs.core._nth(params,(14));
var G__65456 = cljs.core._nth(params,(15));
var G__65457 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__65424,G__65425,G__65426,G__65427,G__65428,G__65429,G__65430,G__65431,G__65432,G__65433,G__65434,G__65435,G__65436,G__65437,G__65438,G__65439,G__65440){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65424);

(invoc_array[(1)] = G__65425);

(invoc_array[(2)] = G__65426);

(invoc_array[(3)] = G__65427);

(invoc_array[(4)] = G__65428);

(invoc_array[(5)] = G__65429);

(invoc_array[(6)] = G__65430);

(invoc_array[(7)] = G__65431);

(invoc_array[(8)] = G__65432);

(invoc_array[(9)] = G__65433);

(invoc_array[(10)] = G__65434);

(invoc_array[(11)] = G__65435);

(invoc_array[(12)] = G__65436);

(invoc_array[(13)] = G__65437);

(invoc_array[(14)] = G__65438);

(invoc_array[(15)] = G__65439);

(invoc_array[(16)] = G__65440);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (18):
var G__65481 = cljs.core._nth(params,(0));
var G__65482 = cljs.core._nth(params,(1));
var G__65483 = cljs.core._nth(params,(2));
var G__65484 = cljs.core._nth(params,(3));
var G__65485 = cljs.core._nth(params,(4));
var G__65486 = cljs.core._nth(params,(5));
var G__65487 = cljs.core._nth(params,(6));
var G__65488 = cljs.core._nth(params,(7));
var G__65489 = cljs.core._nth(params,(8));
var G__65490 = cljs.core._nth(params,(9));
var G__65491 = cljs.core._nth(params,(10));
var G__65492 = cljs.core._nth(params,(11));
var G__65493 = cljs.core._nth(params,(12));
var G__65494 = cljs.core._nth(params,(13));
var G__65495 = cljs.core._nth(params,(14));
var G__65496 = cljs.core._nth(params,(15));
var G__65497 = cljs.core._nth(params,(16));
var G__65498 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__65463,G__65464,G__65465,G__65466,G__65467,G__65468,G__65469,G__65470,G__65471,G__65472,G__65473,G__65474,G__65475,G__65476,G__65477,G__65478,G__65479,G__65480){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65463);

(invoc_array[(1)] = G__65464);

(invoc_array[(2)] = G__65465);

(invoc_array[(3)] = G__65466);

(invoc_array[(4)] = G__65467);

(invoc_array[(5)] = G__65468);

(invoc_array[(6)] = G__65469);

(invoc_array[(7)] = G__65470);

(invoc_array[(8)] = G__65471);

(invoc_array[(9)] = G__65472);

(invoc_array[(10)] = G__65473);

(invoc_array[(11)] = G__65474);

(invoc_array[(12)] = G__65475);

(invoc_array[(13)] = G__65476);

(invoc_array[(14)] = G__65477);

(invoc_array[(15)] = G__65478);

(invoc_array[(16)] = G__65479);

(invoc_array[(17)] = G__65480);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (19):
var G__65519 = cljs.core._nth(params,(0));
var G__65520 = cljs.core._nth(params,(1));
var G__65521 = cljs.core._nth(params,(2));
var G__65522 = cljs.core._nth(params,(3));
var G__65523 = cljs.core._nth(params,(4));
var G__65524 = cljs.core._nth(params,(5));
var G__65525 = cljs.core._nth(params,(6));
var G__65526 = cljs.core._nth(params,(7));
var G__65527 = cljs.core._nth(params,(8));
var G__65528 = cljs.core._nth(params,(9));
var G__65529 = cljs.core._nth(params,(10));
var G__65530 = cljs.core._nth(params,(11));
var G__65531 = cljs.core._nth(params,(12));
var G__65532 = cljs.core._nth(params,(13));
var G__65533 = cljs.core._nth(params,(14));
var G__65534 = cljs.core._nth(params,(15));
var G__65535 = cljs.core._nth(params,(16));
var G__65536 = cljs.core._nth(params,(17));
var G__65537 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__65500,G__65501,G__65502,G__65503,G__65504,G__65505,G__65506,G__65507,G__65508,G__65509,G__65510,G__65511,G__65512,G__65513,G__65514,G__65515,G__65516,G__65517,G__65518){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65500);

(invoc_array[(1)] = G__65501);

(invoc_array[(2)] = G__65502);

(invoc_array[(3)] = G__65503);

(invoc_array[(4)] = G__65504);

(invoc_array[(5)] = G__65505);

(invoc_array[(6)] = G__65506);

(invoc_array[(7)] = G__65507);

(invoc_array[(8)] = G__65508);

(invoc_array[(9)] = G__65509);

(invoc_array[(10)] = G__65510);

(invoc_array[(11)] = G__65511);

(invoc_array[(12)] = G__65512);

(invoc_array[(13)] = G__65513);

(invoc_array[(14)] = G__65514);

(invoc_array[(15)] = G__65515);

(invoc_array[(16)] = G__65516);

(invoc_array[(17)] = G__65517);

(invoc_array[(18)] = G__65518);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
case (20):
var G__65560 = cljs.core._nth(params,(0));
var G__65561 = cljs.core._nth(params,(1));
var G__65562 = cljs.core._nth(params,(2));
var G__65563 = cljs.core._nth(params,(3));
var G__65564 = cljs.core._nth(params,(4));
var G__65565 = cljs.core._nth(params,(5));
var G__65566 = cljs.core._nth(params,(6));
var G__65567 = cljs.core._nth(params,(7));
var G__65568 = cljs.core._nth(params,(8));
var G__65569 = cljs.core._nth(params,(9));
var G__65570 = cljs.core._nth(params,(10));
var G__65571 = cljs.core._nth(params,(11));
var G__65572 = cljs.core._nth(params,(12));
var G__65573 = cljs.core._nth(params,(13));
var G__65574 = cljs.core._nth(params,(14));
var G__65575 = cljs.core._nth(params,(15));
var G__65576 = cljs.core._nth(params,(16));
var G__65577 = cljs.core._nth(params,(17));
var G__65578 = cljs.core._nth(params,(18));
var G__65579 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__65540,G__65541,G__65542,G__65543,G__65544,G__65545,G__65546,G__65547,G__65548,G__65549,G__65550,G__65551,G__65552,G__65553,G__65554,G__65555,G__65556,G__65557,G__65558,G__65559){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__65540);

(invoc_array[(1)] = G__65541);

(invoc_array[(2)] = G__65542);

(invoc_array[(3)] = G__65543);

(invoc_array[(4)] = G__65544);

(invoc_array[(5)] = G__65545);

(invoc_array[(6)] = G__65546);

(invoc_array[(7)] = G__65547);

(invoc_array[(8)] = G__65548);

(invoc_array[(9)] = G__65549);

(invoc_array[(10)] = G__65550);

(invoc_array[(11)] = G__65551);

(invoc_array[(12)] = G__65552);

(invoc_array[(13)] = G__65553);

(invoc_array[(14)] = G__65554);

(invoc_array[(15)] = G__65555);

(invoc_array[(16)] = G__65556);

(invoc_array[(17)] = G__65557);

(invoc_array[(18)] = G__65558);

(invoc_array[(19)] = G__65559);

while(true){
var ret__63436__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__63436__auto__)){
continue;
} else {
return ret__63436__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65112)].join('')));

}
})());
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn){
var enclosed_array = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,enclosed_array,bindings,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__65803__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5751__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__65803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65805__i = 0, G__65805__a = new Array(arguments.length -  0);
while (G__65805__i < G__65805__a.length) {G__65805__a[G__65805__i] = arguments[G__65805__i + 0]; ++G__65805__i;}
  args = new cljs.core.IndexedSeq(G__65805__a,0,null);
} 
return G__65803__delegate.call(this,args);};
G__65803.cljs$lang$maxFixedArity = 0;
G__65803.cljs$lang$applyTo = (function (arglist__65806){
var args = cljs.core.seq(arglist__65806);
return G__65803__delegate(args);
});
G__65803.cljs$core$IFn$_invoke$arity$variadic = G__65803__delegate;
return G__65803;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__65580_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__65580_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
