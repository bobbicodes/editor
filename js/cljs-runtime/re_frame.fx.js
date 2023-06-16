goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registry.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registry/kinds kind)"));
}
re_frame.fx.register_built_in_BANG_ = (function re_frame$fx$register_built_in_BANG_(p__59537){
var map__59538 = p__59537;
var map__59538__$1 = cljs.core.__destructure_map(map__59538);
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59538__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var reg_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_frame.registry.register_handler,registry,re_frame.fx.kind);
reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value,p__59539){
var map__59540 = p__59539;
var map__59540__$1 = cljs.core.__destructure_map(map__59540);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59540__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
var seq__59541 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__59542 = null;
var count__59543 = (0);
var i__59544 = (0);
while(true){
if((i__59544 < count__59543)){
var map__59550 = chunk__59542.cljs$core$IIndexed$_nth$arity$2(null,i__59544);
var map__59550__$1 = cljs.core.__destructure_map(map__59550);
var effect = map__59550__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59550__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59550__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__59541,chunk__59542,count__59543,i__59544,map__59550,map__59550__$1,effect,ms,dispatch,map__59540,map__59540__$1,event_queue,reg_fx,map__59538,map__59538__$1,registry){
return (function (){
return re_frame.router.dispatch(event_queue,dispatch);
});})(seq__59541,chunk__59542,count__59543,i__59544,map__59550,map__59550__$1,effect,ms,dispatch,map__59540,map__59540__$1,event_queue,reg_fx,map__59538,map__59538__$1,registry))
,ms);
}


var G__59630 = seq__59541;
var G__59631 = chunk__59542;
var G__59632 = count__59543;
var G__59633 = (i__59544 + (1));
seq__59541 = G__59630;
chunk__59542 = G__59631;
count__59543 = G__59632;
i__59544 = G__59633;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59541);
if(temp__5753__auto__){
var seq__59541__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59541__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__59541__$1);
var G__59634 = cljs.core.chunk_rest(seq__59541__$1);
var G__59635 = c__4649__auto__;
var G__59636 = cljs.core.count(c__4649__auto__);
var G__59637 = (0);
seq__59541 = G__59634;
chunk__59542 = G__59635;
count__59543 = G__59636;
i__59544 = G__59637;
continue;
} else {
var map__59551 = cljs.core.first(seq__59541__$1);
var map__59551__$1 = cljs.core.__destructure_map(map__59551);
var effect = map__59551__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59551__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59551__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__59541,chunk__59542,count__59543,i__59544,map__59551,map__59551__$1,effect,ms,dispatch,seq__59541__$1,temp__5753__auto__,map__59540,map__59540__$1,event_queue,reg_fx,map__59538,map__59538__$1,registry){
return (function (){
return re_frame.router.dispatch(event_queue,dispatch);
});})(seq__59541,chunk__59542,count__59543,i__59544,map__59551,map__59551__$1,effect,ms,dispatch,seq__59541__$1,temp__5753__auto__,map__59540,map__59540__$1,event_queue,reg_fx,map__59538,map__59538__$1,registry))
,ms);
}


var G__59638 = cljs.core.next(seq__59541__$1);
var G__59639 = null;
var G__59640 = (0);
var G__59641 = (0);
seq__59541 = G__59638;
chunk__59542 = G__59639;
count__59543 = G__59640;
i__59544 = G__59641;
continue;
}
} else {
return null;
}
}
break;
}
}));

reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value,p__59552){
var map__59553 = p__59552;
var map__59553__$1 = cljs.core.__destructure_map(map__59553);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59553__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(event_queue,value);
}
}));

reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value,p__59562){
var map__59567 = p__59562;
var map__59567__$1 = cljs.core.__destructure_map(map__59567);
var event_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59567__$1,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713));
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__59568 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__59569 = null;
var count__59570 = (0);
var i__59571 = (0);
while(true){
if((i__59571 < count__59570)){
var event = chunk__59569.cljs$core$IIndexed$_nth$arity$2(null,i__59571);
re_frame.router.dispatch(event_queue,event);


var G__59642 = seq__59568;
var G__59643 = chunk__59569;
var G__59644 = count__59570;
var G__59645 = (i__59571 + (1));
seq__59568 = G__59642;
chunk__59569 = G__59643;
count__59570 = G__59644;
i__59571 = G__59645;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59568);
if(temp__5753__auto__){
var seq__59568__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59568__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__59568__$1);
var G__59646 = cljs.core.chunk_rest(seq__59568__$1);
var G__59647 = c__4649__auto__;
var G__59648 = cljs.core.count(c__4649__auto__);
var G__59649 = (0);
seq__59568 = G__59646;
chunk__59569 = G__59647;
count__59570 = G__59648;
i__59571 = G__59649;
continue;
} else {
var event = cljs.core.first(seq__59568__$1);
re_frame.router.dispatch(event_queue,event);


var G__59650 = cljs.core.next(seq__59568__$1);
var G__59651 = null;
var G__59652 = (0);
var G__59653 = (0);
seq__59568 = G__59650;
chunk__59569 = G__59651;
count__59570 = G__59652;
i__59571 = G__59653;
continue;
}
} else {
return null;
}
}
break;
}
}
}));

reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value,p__59572){
var map__59573 = p__59572;
var map__59573__$1 = cljs.core.__destructure_map(map__59573);
var registry__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59573__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_frame.registry.clear_handlers,registry__$1,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__59574 = cljs.core.seq(value);
var chunk__59575 = null;
var count__59576 = (0);
var i__59577 = (0);
while(true){
if((i__59577 < count__59576)){
var event = chunk__59575.cljs$core$IIndexed$_nth$arity$2(null,i__59577);
clear_event(event);


var G__59654 = seq__59574;
var G__59655 = chunk__59575;
var G__59656 = count__59576;
var G__59657 = (i__59577 + (1));
seq__59574 = G__59654;
chunk__59575 = G__59655;
count__59576 = G__59656;
i__59577 = G__59657;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59574);
if(temp__5753__auto__){
var seq__59574__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59574__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__59574__$1);
var G__59658 = cljs.core.chunk_rest(seq__59574__$1);
var G__59659 = c__4649__auto__;
var G__59660 = cljs.core.count(c__4649__auto__);
var G__59661 = (0);
seq__59574 = G__59658;
chunk__59575 = G__59659;
count__59576 = G__59660;
i__59577 = G__59661;
continue;
} else {
var event = cljs.core.first(seq__59574__$1);
clear_event(event);


var G__59662 = cljs.core.next(seq__59574__$1);
var G__59663 = null;
var G__59664 = (0);
var G__59665 = (0);
seq__59574 = G__59662;
chunk__59575 = G__59663;
count__59576 = G__59664;
i__59577 = G__59665;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));

return reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value,p__59578){
var map__59579 = p__59578;
var map__59579__$1 = cljs.core.__destructure_map(map__59579);
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59579__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
if((cljs.core.deref(app_db) === value)){
return null;
} else {
return cljs.core.reset_BANG_(app_db,value);
}
}));
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = (function re_frame$fx$do_fx(registry){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_$_do_fx_after(context){
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context))){
} else {
throw (new Error("Assert failed: (:frame context)"));
}

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__59580 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__59581 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__59581);

try{try{var seq__59582 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__59583 = null;
var count__59584 = (0);
var i__59585 = (0);
while(true){
if((i__59585 < count__59584)){
var vec__59596 = chunk__59583.cljs$core$IIndexed$_nth$arity$2(null,i__59585);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59596,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59596,(1),null);
var temp__5751__auto___59666 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___59666)){
var effect_fn_59667 = temp__5751__auto___59666;
var G__59599_59668 = effect_value;
var G__59600_59669 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_59667.cljs$core$IFn$_invoke$arity$2 ? effect_fn_59667.cljs$core$IFn$_invoke$arity$2(G__59599_59668,G__59600_59669) : effect_fn_59667.call(null,G__59599_59668,G__59600_59669));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__59670 = seq__59582;
var G__59671 = chunk__59583;
var G__59672 = count__59584;
var G__59673 = (i__59585 + (1));
seq__59582 = G__59670;
chunk__59583 = G__59671;
count__59584 = G__59672;
i__59585 = G__59673;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59582);
if(temp__5753__auto__){
var seq__59582__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59582__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__59582__$1);
var G__59674 = cljs.core.chunk_rest(seq__59582__$1);
var G__59675 = c__4649__auto__;
var G__59676 = cljs.core.count(c__4649__auto__);
var G__59677 = (0);
seq__59582 = G__59674;
chunk__59583 = G__59675;
count__59584 = G__59676;
i__59585 = G__59677;
continue;
} else {
var vec__59601 = cljs.core.first(seq__59582__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59601,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59601,(1),null);
var temp__5751__auto___59678 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___59678)){
var effect_fn_59679 = temp__5751__auto___59678;
var G__59604_59680 = effect_value;
var G__59605_59681 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_59679.cljs$core$IFn$_invoke$arity$2 ? effect_fn_59679.cljs$core$IFn$_invoke$arity$2(G__59604_59680,G__59605_59681) : effect_fn_59679.call(null,G__59604_59680,G__59605_59681));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__59682 = cljs.core.next(seq__59582__$1);
var G__59683 = null;
var G__59684 = (0);
var G__59685 = (0);
seq__59582 = G__59682;
chunk__59583 = G__59683;
count__59584 = G__59684;
i__59585 = G__59685;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__59231__auto___59686 = re_frame.interop.now();
var duration__59232__auto___59687 = (end__59231__auto___59686 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__59232__auto___59687,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__59231__auto___59686);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__59580);
}} else {
var seq__59606 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__59607 = null;
var count__59608 = (0);
var i__59609 = (0);
while(true){
if((i__59609 < count__59608)){
var vec__59620 = chunk__59607.cljs$core$IIndexed$_nth$arity$2(null,i__59609);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59620,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59620,(1),null);
var temp__5751__auto___59688 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___59688)){
var effect_fn_59689 = temp__5751__auto___59688;
var G__59623_59690 = effect_value;
var G__59624_59691 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_59689.cljs$core$IFn$_invoke$arity$2 ? effect_fn_59689.cljs$core$IFn$_invoke$arity$2(G__59623_59690,G__59624_59691) : effect_fn_59689.call(null,G__59623_59690,G__59624_59691));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__59692 = seq__59606;
var G__59693 = chunk__59607;
var G__59694 = count__59608;
var G__59695 = (i__59609 + (1));
seq__59606 = G__59692;
chunk__59607 = G__59693;
count__59608 = G__59694;
i__59609 = G__59695;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59606);
if(temp__5753__auto__){
var seq__59606__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59606__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__59606__$1);
var G__59696 = cljs.core.chunk_rest(seq__59606__$1);
var G__59697 = c__4649__auto__;
var G__59698 = cljs.core.count(c__4649__auto__);
var G__59699 = (0);
seq__59606 = G__59696;
chunk__59607 = G__59697;
count__59608 = G__59698;
i__59609 = G__59699;
continue;
} else {
var vec__59625 = cljs.core.first(seq__59606__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59625,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59625,(1),null);
var temp__5751__auto___59700 = re_frame.registry.get_handler(registry,re_frame.fx.kind,effect_key);
if(cljs.core.truth_(temp__5751__auto___59700)){
var effect_fn_59701 = temp__5751__auto___59700;
var G__59628_59702 = effect_value;
var G__59629_59703 = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(context);
(effect_fn_59701.cljs$core$IFn$_invoke$arity$2 ? effect_fn_59701.cljs$core$IFn$_invoke$arity$2(G__59628_59702,G__59629_59703) : effect_fn_59701.call(null,G__59628_59702,G__59629_59703));
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.fx",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-fx-handler","missing-fx-handler",-530299299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effect-key","effect-key",-588262440),effect_key], null),new cljs.core.Keyword(null,"line","line",212345235),148], null)),null);
}


var G__59704 = cljs.core.next(seq__59606__$1);
var G__59705 = null;
var G__59706 = (0);
var G__59707 = (0);
seq__59606 = G__59704;
chunk__59607 = G__59705;
count__59608 = G__59706;
i__59609 = G__59707;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
});

//# sourceMappingURL=re_frame.fx.js.map
