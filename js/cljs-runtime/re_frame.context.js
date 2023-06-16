goog.provide('re_frame.context');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
re_frame.context.frame_context = module$node_modules$react$index.createContext(re_frame.core.default_frame);
re_frame.context.set_default_frame = (function re_frame$context$set_default_frame(frame){
goog.object.set(re_frame.context.frame_context,"_currentValue",frame);

return goog.object.set(re_frame.context.frame_context,"_currentValue2",frame);
});
/**
 * Gets the react Context for the current component, to be used in lifecycle
 *   hooks (e.g. render). Assumes that Component.contextType has been set.
 */
re_frame.context.current_context = (function re_frame$context$current_context(){
var temp__5753__auto__ = reagent.core.current_component();
if(cljs.core.truth_(temp__5753__auto__)){
var cmp = temp__5753__auto__;
if((!(cljs.core.object_QMARK_(cmp.context)))){
return cmp.context;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Get the current frame provided by the context, falling back to the default
 *   frame. Assumes that Component.contextType = frame-context.
 */
re_frame.context.current_frame = (function re_frame$context$current_frame(){
var or__4223__auto__ = re_frame.registry._STAR_current_frame_STAR_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = re_frame.context.current_context();
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return goog.object.get(re_frame.context.frame_context,"_currentValue");
}
}
});
re_frame.context.bound_frame = (function re_frame$context$bound_frame(){
var or__4223__auto__ = re_frame.registry._STAR_current_frame_STAR_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = re_frame.context.current_context();
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
throw (new Error("No frame bound"));
}
}
});
/**
 * Component that acts as a provider for the frame, so to run an isolated version
 *   of your app, use.
 * 
 *    [provide-frame (frame/make-frame)
 *     [app]]
 */
re_frame.context.provide_frame = (function re_frame$context$provide_frame(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59908 = arguments.length;
var i__4830__auto___59909 = (0);
while(true){
if((i__4830__auto___59909 < len__4829__auto___59908)){
args__4835__auto__.push((arguments[i__4830__auto___59909]));

var G__59910 = (i__4830__auto___59909 + (1));
i__4830__auto___59909 = G__59910;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return re_frame.context.provide_frame.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(re_frame.context.provide_frame.cljs$core$IFn$_invoke$arity$variadic = (function (frame,children){
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(re_frame.context.frame_context.Provider,({"value": frame, "children": reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children))}));
}));

(re_frame.context.provide_frame.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.context.provide_frame.cljs$lang$applyTo = (function (seq59878){
var G__59879 = cljs.core.first(seq59878);
var seq59878__$1 = cljs.core.next(seq59878);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59879,seq59878__$1);
}));

/**
 * Component that acts as a provider for the app-db, it takes the registry from
 *   the current frame, but uses the given atom for the app-db
 */
re_frame.context.provide_app_db = cljs.core.with_meta((function() { 
var re_frame$context$provide_app_db__delegate = function (app_db,children){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,re_frame.context.provide_frame,null,(1),null)),(new cljs.core.List(null,re_frame.frame.make_frame.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(re_frame.context.current_frame()),new cljs.core.Keyword(null,"app-db","app-db",865606302),app_db], null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0)))));
};
var re_frame$context$provide_app_db = function (app_db,var_args){
var children = null;
if (arguments.length > 1) {
var G__59911__i = 0, G__59911__a = new Array(arguments.length -  1);
while (G__59911__i < G__59911__a.length) {G__59911__a[G__59911__i] = arguments[G__59911__i + 1]; ++G__59911__i;}
  children = new cljs.core.IndexedSeq(G__59911__a,0,null);
} 
return re_frame$context$provide_app_db__delegate.call(this,app_db,children);};
re_frame$context$provide_app_db.cljs$lang$maxFixedArity = 1;
re_frame$context$provide_app_db.cljs$lang$applyTo = (function (arglist__59912){
var app_db = cljs.core.first(arglist__59912);
var children = cljs.core.rest(arglist__59912);
return re_frame$context$provide_app_db__delegate(app_db,children);
});
re_frame$context$provide_app_db.cljs$core$IFn$_invoke$arity$variadic = re_frame$context$provide_app_db__delegate;
return re_frame$context$provide_app_db;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context-type","context-type",-1445212185),re_frame.context.frame_context], null));
re_frame.context.subscribe = (function re_frame$context$subscribe(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59913 = arguments.length;
var i__4830__auto___59914 = (0);
while(true){
if((i__4830__auto___59914 < len__4829__auto___59913)){
args__4835__auto__.push((arguments[i__4830__auto___59914]));

var G__59915 = (i__4830__auto___59914 + (1));
i__4830__auto___59914 = G__59915;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.subscribe.cljs$core$IFn$_invoke$arity$variadic = (function (args__59863__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.subscribe,re_frame.context.current_frame(),args__59863__auto__);
}));

(re_frame.context.subscribe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.subscribe.cljs$lang$applyTo = (function (seq59880){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59880));
}));

re_frame.context.dispatch = (function re_frame$context$dispatch(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59916 = arguments.length;
var i__4830__auto___59917 = (0);
while(true){
if((i__4830__auto___59917 < len__4829__auto___59916)){
args__4835__auto__.push((arguments[i__4830__auto___59917]));

var G__59918 = (i__4830__auto___59917 + (1));
i__4830__auto___59917 = G__59918;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.dispatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (args__59863__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.dispatch,re_frame.context.current_frame(),args__59863__auto__);
}));

(re_frame.context.dispatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.dispatch.cljs$lang$applyTo = (function (seq59881){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59881));
}));

re_frame.context.dispatch_sync = (function re_frame$context$dispatch_sync(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59919 = arguments.length;
var i__4830__auto___59920 = (0);
while(true){
if((i__4830__auto___59920 < len__4829__auto___59919)){
args__4835__auto__.push((arguments[i__4830__auto___59920]));

var G__59922 = (i__4830__auto___59920 + (1));
i__4830__auto___59920 = G__59922;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.dispatch_sync.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.dispatch_sync.cljs$core$IFn$_invoke$arity$variadic = (function (args__59863__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.dispatch_sync,re_frame.context.current_frame(),args__59863__auto__);
}));

(re_frame.context.dispatch_sync.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.dispatch_sync.cljs$lang$applyTo = (function (seq59883){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59883));
}));

re_frame.context.clear_sub = (function re_frame$context$clear_sub(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59923 = arguments.length;
var i__4830__auto___59924 = (0);
while(true){
if((i__4830__auto___59924 < len__4829__auto___59923)){
args__4835__auto__.push((arguments[i__4830__auto___59924]));

var G__59925 = (i__4830__auto___59924 + (1));
i__4830__auto___59924 = G__59925;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.clear_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__59863__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_sub,re_frame.context.current_frame(),args__59863__auto__);
}));

(re_frame.context.clear_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_sub.cljs$lang$applyTo = (function (seq59885){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59885));
}));

re_frame.context.reg_fx = (function re_frame$context$reg_fx(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59927 = arguments.length;
var i__4830__auto___59928 = (0);
while(true){
if((i__4830__auto___59928 < len__4829__auto___59927)){
args__4835__auto__.push((arguments[i__4830__auto___59928]));

var G__59929 = (i__4830__auto___59928 + (1));
i__4830__auto___59928 = G__59929;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_fx.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.reg_fx.cljs$core$IFn$_invoke$arity$variadic = (function (args__59863__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_fx,re_frame.context.current_frame(),args__59863__auto__);
}));

(re_frame.context.reg_fx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_fx.cljs$lang$applyTo = (function (seq59886){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59886));
}));

re_frame.context.reg_cofx = (function re_frame$context$reg_cofx(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59930 = arguments.length;
var i__4830__auto___59931 = (0);
while(true){
if((i__4830__auto___59931 < len__4829__auto___59930)){
args__4835__auto__.push((arguments[i__4830__auto___59931]));

var G__59932 = (i__4830__auto___59931 + (1));
i__4830__auto___59931 = G__59932;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.reg_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__59863__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_cofx,re_frame.context.current_frame(),args__59863__auto__);
}));

(re_frame.context.reg_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_cofx.cljs$lang$applyTo = (function (seq59887){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59887));
}));

re_frame.context.inject_cofx = (function re_frame$context$inject_cofx(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59934 = arguments.length;
var i__4830__auto___59935 = (0);
while(true){
if((i__4830__auto___59935 < len__4829__auto___59934)){
args__4835__auto__.push((arguments[i__4830__auto___59935]));

var G__59936 = (i__4830__auto___59935 + (1));
i__4830__auto___59935 = G__59936;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.inject_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.inject_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__59863__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.inject_cofx,re_frame.context.current_frame(),args__59863__auto__);
}));

(re_frame.context.inject_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.inject_cofx.cljs$lang$applyTo = (function (seq59889){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59889));
}));

re_frame.context.clear_cofx = (function re_frame$context$clear_cofx(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59938 = arguments.length;
var i__4830__auto___59939 = (0);
while(true){
if((i__4830__auto___59939 < len__4829__auto___59938)){
args__4835__auto__.push((arguments[i__4830__auto___59939]));

var G__59940 = (i__4830__auto___59939 + (1));
i__4830__auto___59939 = G__59940;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_cofx.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.clear_cofx.cljs$core$IFn$_invoke$arity$variadic = (function (args__59863__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_cofx,re_frame.context.current_frame(),args__59863__auto__);
}));

(re_frame.context.clear_cofx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_cofx.cljs$lang$applyTo = (function (seq59890){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59890));
}));

re_frame.context.reg_event_db = (function re_frame$context$reg_event_db(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59942 = arguments.length;
var i__4830__auto___59943 = (0);
while(true){
if((i__4830__auto___59943 < len__4829__auto___59942)){
args__4835__auto__.push((arguments[i__4830__auto___59943]));

var G__59944 = (i__4830__auto___59943 + (1));
i__4830__auto___59943 = G__59944;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_db.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.reg_event_db.cljs$core$IFn$_invoke$arity$variadic = (function (args__59863__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_db,re_frame.context.current_frame(),args__59863__auto__);
}));

(re_frame.context.reg_event_db.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_db.cljs$lang$applyTo = (function (seq59891){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59891));
}));

re_frame.context.reg_event_fx = (function re_frame$context$reg_event_fx(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59946 = arguments.length;
var i__4830__auto___59947 = (0);
while(true){
if((i__4830__auto___59947 < len__4829__auto___59946)){
args__4835__auto__.push((arguments[i__4830__auto___59947]));

var G__59948 = (i__4830__auto___59947 + (1));
i__4830__auto___59947 = G__59948;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_fx.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.reg_event_fx.cljs$core$IFn$_invoke$arity$variadic = (function (args__59863__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_fx,re_frame.context.current_frame(),args__59863__auto__);
}));

(re_frame.context.reg_event_fx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_fx.cljs$lang$applyTo = (function (seq59892){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59892));
}));

re_frame.context.reg_event_ctx = (function re_frame$context$reg_event_ctx(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59949 = arguments.length;
var i__4830__auto___59950 = (0);
while(true){
if((i__4830__auto___59950 < len__4829__auto___59949)){
args__4835__auto__.push((arguments[i__4830__auto___59950]));

var G__59951 = (i__4830__auto___59950 + (1));
i__4830__auto___59950 = G__59951;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.reg_event_ctx.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.reg_event_ctx.cljs$core$IFn$_invoke$arity$variadic = (function (args__59863__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.reg_event_ctx,re_frame.context.current_frame(),args__59863__auto__);
}));

(re_frame.context.reg_event_ctx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.reg_event_ctx.cljs$lang$applyTo = (function (seq59893){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59893));
}));

re_frame.context.clear_event = (function re_frame$context$clear_event(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59952 = arguments.length;
var i__4830__auto___59953 = (0);
while(true){
if((i__4830__auto___59953 < len__4829__auto___59952)){
args__4835__auto__.push((arguments[i__4830__auto___59953]));

var G__59954 = (i__4830__auto___59953 + (1));
i__4830__auto___59953 = G__59954;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_event.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.clear_event.cljs$core$IFn$_invoke$arity$variadic = (function (args__59863__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.frame.clear_event,re_frame.context.current_frame(),args__59863__auto__);
}));

(re_frame.context.clear_event.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_event.cljs$lang$applyTo = (function (seq59894){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59894));
}));

re_frame.context.reg_sub_raw = (function re_frame$context$reg_sub_raw(query_id,handler_fn){
return re_frame.frame.reg_sub_raw(re_frame.context.current_frame(),query_id,(function (frame,query_v){
var G__59895 = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(frame);
var G__59896 = query_v;
return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(G__59895,G__59896) : handler_fn.call(null,G__59895,G__59896));
}));
});
re_frame.context.reg_sub = (function re_frame$context$reg_sub(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59955 = arguments.length;
var i__4830__auto___59956 = (0);
while(true){
if((i__4830__auto___59956 < len__4829__auto___59955)){
args__4835__auto__.push((arguments[i__4830__auto___59956]));

var G__59957 = (i__4830__auto___59956 + (1));
i__4830__auto___59956 = G__59957;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return re_frame.context.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(re_frame.context.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
return re_frame.frame.reg_sub(re_frame.context.current_frame(),query_id,args);
}));

(re_frame.context.reg_sub.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.context.reg_sub.cljs$lang$applyTo = (function (seq59897){
var G__59898 = cljs.core.first(seq59897);
var seq59897__$1 = cljs.core.next(seq59897);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59898,seq59897__$1);
}));

re_frame.context.clear_subscriptions_cache_BANG_ = (function re_frame$context$clear_subscriptions_cache_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59981 = arguments.length;
var i__4830__auto___59982 = (0);
while(true){
if((i__4830__auto___59982 < len__4829__auto___59981)){
args__4835__auto__.push((arguments[i__4830__auto___59982]));

var G__59983 = (i__4830__auto___59982 + (1));
i__4830__auto___59982 = G__59983;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frame.context.clear_subscriptions_cache_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frame.context.clear_subscriptions_cache_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.subs._clear,new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721).cljs$core$IFn$_invoke$arity$1(re_frame.context.current_frame()),args);
}));

(re_frame.context.clear_subscriptions_cache_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.context.clear_subscriptions_cache_BANG_.cljs$lang$applyTo = (function (seq59899){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59899));
}));

/**
 * Returns subscribe/dispatch/dispatch-sync functions that are bound to the current frame. Use like this
 * 
 *    (defc my-component []
 *      (reagent/with-let [{:keys [subscribe dispatch]} (re-frame/context-fns)]
 *        ,,,
 *        )) 
 */
re_frame.context.context_fns = (function re_frame$context$context_fns(var_args){
var G__59901 = arguments.length;
switch (G__59901) {
case 0:
return re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$1(re_frame.context.current_frame());
}));

(re_frame.context.context_fns.cljs$core$IFn$_invoke$arity$1 = (function (frame){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"subscribe","subscribe",416253756),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.subscribe,frame),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.dispatch,frame),new cljs.core.Keyword(null,"dispatch-sync","dispatch-sync",1664398243),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.frame.dispatch_sync,frame)], null);
}));

(re_frame.context.context_fns.cljs$lang$maxFixedArity = 1);

re_frame.context.bind_fn = (function re_frame$context$bind_fn(f){
var frame = re_frame.context.current_frame();
return (function() { 
var G__59985__delegate = function (args){
var _STAR_current_frame_STAR__orig_val__59902 = re_frame.registry._STAR_current_frame_STAR_;
var _STAR_current_frame_STAR__temp_val__59903 = frame;
(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__temp_val__59903);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__orig_val__59902);
}};
var G__59985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59986__i = 0, G__59986__a = new Array(arguments.length -  0);
while (G__59986__i < G__59986__a.length) {G__59986__a[G__59986__i] = arguments[G__59986__i + 0]; ++G__59986__i;}
  args = new cljs.core.IndexedSeq(G__59986__a,0,null);
} 
return G__59985__delegate.call(this,args);};
G__59985.cljs$lang$maxFixedArity = 0;
G__59985.cljs$lang$applyTo = (function (arglist__59987){
var args = cljs.core.seq(arglist__59987);
return G__59985__delegate(args);
});
G__59985.cljs$core$IFn$_invoke$arity$variadic = G__59985__delegate;
return G__59985;
})()
;
});

//# sourceMappingURL=re_frame.context.js.map
