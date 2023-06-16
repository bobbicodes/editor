goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__55414,p__55415){
var map__55416 = p__55414;
var map__55416__$1 = cljs.core.__destructure_map(map__55416);
var svc = map__55416__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55416__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55416__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55416__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__55417 = p__55415;
var map__55417__$1 = cljs.core.__destructure_map(map__55417);
var msg = map__55417__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55417__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55417__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55417__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55417__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__55423,p__55424){
var map__55425 = p__55423;
var map__55425__$1 = cljs.core.__destructure_map(map__55425);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55425__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__55426 = p__55424;
var map__55426__$1 = cljs.core.__destructure_map(map__55426);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55426__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__55429,p__55430){
var map__55431 = p__55429;
var map__55431__$1 = cljs.core.__destructure_map(map__55431);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55431__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55431__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__55432 = p__55430;
var map__55432__$1 = cljs.core.__destructure_map(map__55432);
var msg = map__55432__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55432__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__55435,tid){
var map__55437 = p__55435;
var map__55437__$1 = cljs.core.__destructure_map(map__55437);
var svc = map__55437__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55437__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__55447 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__55448 = null;
var count__55449 = (0);
var i__55450 = (0);
while(true){
if((i__55450 < count__55449)){
var vec__55460 = chunk__55448.cljs$core$IIndexed$_nth$arity$2(null,i__55450);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55460,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55460,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__55471 = seq__55447;
var G__55472 = chunk__55448;
var G__55473 = count__55449;
var G__55474 = (i__55450 + (1));
seq__55447 = G__55471;
chunk__55448 = G__55472;
count__55449 = G__55473;
i__55450 = G__55474;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55447);
if(temp__5753__auto__){
var seq__55447__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55447__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55447__$1);
var G__55475 = cljs.core.chunk_rest(seq__55447__$1);
var G__55476 = c__4649__auto__;
var G__55477 = cljs.core.count(c__4649__auto__);
var G__55478 = (0);
seq__55447 = G__55475;
chunk__55448 = G__55476;
count__55449 = G__55477;
i__55450 = G__55478;
continue;
} else {
var vec__55465 = cljs.core.first(seq__55447__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55465,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55465,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__55479 = cljs.core.next(seq__55447__$1);
var G__55480 = null;
var G__55481 = (0);
var G__55482 = (0);
seq__55447 = G__55479;
chunk__55448 = G__55480;
count__55449 = G__55481;
i__55450 = G__55482;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__55439_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__55439_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__55440_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__55440_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__55441_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__55441_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__55442_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__55442_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__55469){
var map__55470 = p__55469;
var map__55470__$1 = cljs.core.__destructure_map(map__55470);
var svc = map__55470__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55470__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55470__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
