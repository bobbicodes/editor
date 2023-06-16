goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50876 = arguments.length;
switch (G__50876) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50877 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50877 = (function (f,blockable,meta50878){
this.f = f;
this.blockable = blockable;
this.meta50878 = meta50878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50879,meta50878__$1){
var self__ = this;
var _50879__$1 = this;
return (new cljs.core.async.t_cljs$core$async50877(self__.f,self__.blockable,meta50878__$1));
}));

(cljs.core.async.t_cljs$core$async50877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50879){
var self__ = this;
var _50879__$1 = this;
return self__.meta50878;
}));

(cljs.core.async.t_cljs$core$async50877.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50877.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50878","meta50878",1575056776,null)], null);
}));

(cljs.core.async.t_cljs$core$async50877.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50877");

(cljs.core.async.t_cljs$core$async50877.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50877");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50877.
 */
cljs.core.async.__GT_t_cljs$core$async50877 = (function cljs$core$async$__GT_t_cljs$core$async50877(f__$1,blockable__$1,meta50878){
return (new cljs.core.async.t_cljs$core$async50877(f__$1,blockable__$1,meta50878));
});

}

return (new cljs.core.async.t_cljs$core$async50877(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__50882 = arguments.length;
switch (G__50882) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50884 = arguments.length;
switch (G__50884) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__50886 = arguments.length;
switch (G__50886) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_52458 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52458) : fn1.call(null,val_52458));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52458) : fn1.call(null,val_52458));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50888 = arguments.length;
switch (G__50888) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___52464 = n;
var x_52465 = (0);
while(true){
if((x_52465 < n__4706__auto___52464)){
(a[x_52465] = x_52465);

var G__52466 = (x_52465 + (1));
x_52465 = G__52466;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50889 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50889 = (function (flag,meta50890){
this.flag = flag;
this.meta50890 = meta50890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50891,meta50890__$1){
var self__ = this;
var _50891__$1 = this;
return (new cljs.core.async.t_cljs$core$async50889(self__.flag,meta50890__$1));
}));

(cljs.core.async.t_cljs$core$async50889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50891){
var self__ = this;
var _50891__$1 = this;
return self__.meta50890;
}));

(cljs.core.async.t_cljs$core$async50889.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50889.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50890","meta50890",-878642458,null)], null);
}));

(cljs.core.async.t_cljs$core$async50889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50889");

(cljs.core.async.t_cljs$core$async50889.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50889.
 */
cljs.core.async.__GT_t_cljs$core$async50889 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50889(flag__$1,meta50890){
return (new cljs.core.async.t_cljs$core$async50889(flag__$1,meta50890));
});

}

return (new cljs.core.async.t_cljs$core$async50889(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50892 = (function (flag,cb,meta50893){
this.flag = flag;
this.cb = cb;
this.meta50893 = meta50893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50894,meta50893__$1){
var self__ = this;
var _50894__$1 = this;
return (new cljs.core.async.t_cljs$core$async50892(self__.flag,self__.cb,meta50893__$1));
}));

(cljs.core.async.t_cljs$core$async50892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50894){
var self__ = this;
var _50894__$1 = this;
return self__.meta50893;
}));

(cljs.core.async.t_cljs$core$async50892.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50892.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50893","meta50893",60477056,null)], null);
}));

(cljs.core.async.t_cljs$core$async50892.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50892");

(cljs.core.async.t_cljs$core$async50892.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50892");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50892.
 */
cljs.core.async.__GT_t_cljs$core$async50892 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50892(flag__$1,cb__$1,meta50893){
return (new cljs.core.async.t_cljs$core$async50892(flag__$1,cb__$1,meta50893));
});

}

return (new cljs.core.async.t_cljs$core$async50892(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50895_SHARP_){
var G__50897 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50895_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50897) : fret.call(null,G__50897));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50896_SHARP_){
var G__50898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50896_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50898) : fret.call(null,G__50898));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52474 = (i + (1));
i = G__52474;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52475 = arguments.length;
var i__4830__auto___52476 = (0);
while(true){
if((i__4830__auto___52476 < len__4829__auto___52475)){
args__4835__auto__.push((arguments[i__4830__auto___52476]));

var G__52477 = (i__4830__auto___52476 + (1));
i__4830__auto___52476 = G__52477;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50901){
var map__50902 = p__50901;
var map__50902__$1 = cljs.core.__destructure_map(map__50902);
var opts = map__50902__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50899){
var G__50900 = cljs.core.first(seq50899);
var seq50899__$1 = cljs.core.next(seq50899);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50900,seq50899__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50904 = arguments.length;
switch (G__50904) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50818__auto___52479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_50928){
var state_val_50929 = (state_50928[(1)]);
if((state_val_50929 === (7))){
var inst_50924 = (state_50928[(2)]);
var state_50928__$1 = state_50928;
var statearr_50930_52480 = state_50928__$1;
(statearr_50930_52480[(2)] = inst_50924);

(statearr_50930_52480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50929 === (1))){
var state_50928__$1 = state_50928;
var statearr_50931_52481 = state_50928__$1;
(statearr_50931_52481[(2)] = null);

(statearr_50931_52481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50929 === (4))){
var inst_50907 = (state_50928[(7)]);
var inst_50907__$1 = (state_50928[(2)]);
var inst_50908 = (inst_50907__$1 == null);
var state_50928__$1 = (function (){var statearr_50932 = state_50928;
(statearr_50932[(7)] = inst_50907__$1);

return statearr_50932;
})();
if(cljs.core.truth_(inst_50908)){
var statearr_50933_52482 = state_50928__$1;
(statearr_50933_52482[(1)] = (5));

} else {
var statearr_50934_52483 = state_50928__$1;
(statearr_50934_52483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50929 === (13))){
var state_50928__$1 = state_50928;
var statearr_50935_52484 = state_50928__$1;
(statearr_50935_52484[(2)] = null);

(statearr_50935_52484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50929 === (6))){
var inst_50907 = (state_50928[(7)]);
var state_50928__$1 = state_50928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50928__$1,(11),to,inst_50907);
} else {
if((state_val_50929 === (3))){
var inst_50926 = (state_50928[(2)]);
var state_50928__$1 = state_50928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50928__$1,inst_50926);
} else {
if((state_val_50929 === (12))){
var state_50928__$1 = state_50928;
var statearr_50936_52485 = state_50928__$1;
(statearr_50936_52485[(2)] = null);

(statearr_50936_52485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50929 === (2))){
var state_50928__$1 = state_50928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50928__$1,(4),from);
} else {
if((state_val_50929 === (11))){
var inst_50917 = (state_50928[(2)]);
var state_50928__$1 = state_50928;
if(cljs.core.truth_(inst_50917)){
var statearr_50937_52486 = state_50928__$1;
(statearr_50937_52486[(1)] = (12));

} else {
var statearr_50938_52487 = state_50928__$1;
(statearr_50938_52487[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50929 === (9))){
var state_50928__$1 = state_50928;
var statearr_50939_52488 = state_50928__$1;
(statearr_50939_52488[(2)] = null);

(statearr_50939_52488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50929 === (5))){
var state_50928__$1 = state_50928;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50940_52489 = state_50928__$1;
(statearr_50940_52489[(1)] = (8));

} else {
var statearr_50941_52490 = state_50928__$1;
(statearr_50941_52490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50929 === (14))){
var inst_50922 = (state_50928[(2)]);
var state_50928__$1 = state_50928;
var statearr_50942_52491 = state_50928__$1;
(statearr_50942_52491[(2)] = inst_50922);

(statearr_50942_52491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50929 === (10))){
var inst_50914 = (state_50928[(2)]);
var state_50928__$1 = state_50928;
var statearr_50943_52492 = state_50928__$1;
(statearr_50943_52492[(2)] = inst_50914);

(statearr_50943_52492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50929 === (8))){
var inst_50911 = cljs.core.async.close_BANG_(to);
var state_50928__$1 = state_50928;
var statearr_50944_52493 = state_50928__$1;
(statearr_50944_52493[(2)] = inst_50911);

(statearr_50944_52493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50579__auto__ = null;
var cljs$core$async$state_machine__50579__auto____0 = (function (){
var statearr_50945 = [null,null,null,null,null,null,null,null];
(statearr_50945[(0)] = cljs$core$async$state_machine__50579__auto__);

(statearr_50945[(1)] = (1));

return statearr_50945;
});
var cljs$core$async$state_machine__50579__auto____1 = (function (state_50928){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_50928);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e50946){var ex__50582__auto__ = e50946;
var statearr_50947_52494 = state_50928;
(statearr_50947_52494[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_50928[(4)]))){
var statearr_50948_52495 = state_50928;
(statearr_50948_52495[(1)] = cljs.core.first((state_50928[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52496 = state_50928;
state_50928 = G__52496;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$state_machine__50579__auto__ = function(state_50928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50579__auto____1.call(this,state_50928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50579__auto____0;
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50579__auto____1;
return cljs$core$async$state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_50949 = f__50819__auto__();
(statearr_50949[(6)] = c__50818__auto___52479);

return statearr_50949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__50950){
var vec__50951 = p__50950;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50951,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50951,(1),null);
var job = vec__50951;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50818__auto___52497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_50958){
var state_val_50959 = (state_50958[(1)]);
if((state_val_50959 === (1))){
var state_50958__$1 = state_50958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50958__$1,(2),res,v);
} else {
if((state_val_50959 === (2))){
var inst_50955 = (state_50958[(2)]);
var inst_50956 = cljs.core.async.close_BANG_(res);
var state_50958__$1 = (function (){var statearr_50960 = state_50958;
(statearr_50960[(7)] = inst_50955);

return statearr_50960;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50958__$1,inst_50956);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0 = (function (){
var statearr_50961 = [null,null,null,null,null,null,null,null];
(statearr_50961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__);

(statearr_50961[(1)] = (1));

return statearr_50961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1 = (function (state_50958){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_50958);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e50962){var ex__50582__auto__ = e50962;
var statearr_50963_52498 = state_50958;
(statearr_50963_52498[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_50958[(4)]))){
var statearr_50964_52499 = state_50958;
(statearr_50964_52499[(1)] = cljs.core.first((state_50958[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52500 = state_50958;
state_50958 = G__52500;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__ = function(state_50958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1.call(this,state_50958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_50965 = f__50819__auto__();
(statearr_50965[(6)] = c__50818__auto___52497);

return statearr_50965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50966){
var vec__50967 = p__50966;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50967,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50967,(1),null);
var job = vec__50967;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___52501 = n;
var __52502 = (0);
while(true){
if((__52502 < n__4706__auto___52501)){
var G__50970_52503 = type;
var G__50970_52504__$1 = (((G__50970_52503 instanceof cljs.core.Keyword))?G__50970_52503.fqn:null);
switch (G__50970_52504__$1) {
case "compute":
var c__50818__auto___52506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52502,c__50818__auto___52506,G__50970_52503,G__50970_52504__$1,n__4706__auto___52501,jobs,results,process,async){
return (function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = ((function (__52502,c__50818__auto___52506,G__50970_52503,G__50970_52504__$1,n__4706__auto___52501,jobs,results,process,async){
return (function (state_50983){
var state_val_50984 = (state_50983[(1)]);
if((state_val_50984 === (1))){
var state_50983__$1 = state_50983;
var statearr_50985_52507 = state_50983__$1;
(statearr_50985_52507[(2)] = null);

(statearr_50985_52507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (2))){
var state_50983__$1 = state_50983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50983__$1,(4),jobs);
} else {
if((state_val_50984 === (3))){
var inst_50981 = (state_50983[(2)]);
var state_50983__$1 = state_50983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50983__$1,inst_50981);
} else {
if((state_val_50984 === (4))){
var inst_50973 = (state_50983[(2)]);
var inst_50974 = process(inst_50973);
var state_50983__$1 = state_50983;
if(cljs.core.truth_(inst_50974)){
var statearr_50986_52508 = state_50983__$1;
(statearr_50986_52508[(1)] = (5));

} else {
var statearr_50987_52509 = state_50983__$1;
(statearr_50987_52509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (5))){
var state_50983__$1 = state_50983;
var statearr_50988_52510 = state_50983__$1;
(statearr_50988_52510[(2)] = null);

(statearr_50988_52510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (6))){
var state_50983__$1 = state_50983;
var statearr_50989_52511 = state_50983__$1;
(statearr_50989_52511[(2)] = null);

(statearr_50989_52511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (7))){
var inst_50979 = (state_50983[(2)]);
var state_50983__$1 = state_50983;
var statearr_50990_52512 = state_50983__$1;
(statearr_50990_52512[(2)] = inst_50979);

(statearr_50990_52512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52502,c__50818__auto___52506,G__50970_52503,G__50970_52504__$1,n__4706__auto___52501,jobs,results,process,async))
;
return ((function (__52502,switch__50578__auto__,c__50818__auto___52506,G__50970_52503,G__50970_52504__$1,n__4706__auto___52501,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0 = (function (){
var statearr_50991 = [null,null,null,null,null,null,null];
(statearr_50991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__);

(statearr_50991[(1)] = (1));

return statearr_50991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1 = (function (state_50983){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_50983);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e50992){var ex__50582__auto__ = e50992;
var statearr_50993_52513 = state_50983;
(statearr_50993_52513[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_50983[(4)]))){
var statearr_50994_52514 = state_50983;
(statearr_50994_52514[(1)] = cljs.core.first((state_50983[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52515 = state_50983;
state_50983 = G__52515;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__ = function(state_50983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1.call(this,state_50983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__;
})()
;})(__52502,switch__50578__auto__,c__50818__auto___52506,G__50970_52503,G__50970_52504__$1,n__4706__auto___52501,jobs,results,process,async))
})();
var state__50820__auto__ = (function (){var statearr_50995 = f__50819__auto__();
(statearr_50995[(6)] = c__50818__auto___52506);

return statearr_50995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
});})(__52502,c__50818__auto___52506,G__50970_52503,G__50970_52504__$1,n__4706__auto___52501,jobs,results,process,async))
);


break;
case "async":
var c__50818__auto___52516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52502,c__50818__auto___52516,G__50970_52503,G__50970_52504__$1,n__4706__auto___52501,jobs,results,process,async){
return (function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = ((function (__52502,c__50818__auto___52516,G__50970_52503,G__50970_52504__$1,n__4706__auto___52501,jobs,results,process,async){
return (function (state_51008){
var state_val_51009 = (state_51008[(1)]);
if((state_val_51009 === (1))){
var state_51008__$1 = state_51008;
var statearr_51010_52517 = state_51008__$1;
(statearr_51010_52517[(2)] = null);

(statearr_51010_52517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (2))){
var state_51008__$1 = state_51008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51008__$1,(4),jobs);
} else {
if((state_val_51009 === (3))){
var inst_51006 = (state_51008[(2)]);
var state_51008__$1 = state_51008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51008__$1,inst_51006);
} else {
if((state_val_51009 === (4))){
var inst_50998 = (state_51008[(2)]);
var inst_50999 = async(inst_50998);
var state_51008__$1 = state_51008;
if(cljs.core.truth_(inst_50999)){
var statearr_51011_52518 = state_51008__$1;
(statearr_51011_52518[(1)] = (5));

} else {
var statearr_51012_52519 = state_51008__$1;
(statearr_51012_52519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (5))){
var state_51008__$1 = state_51008;
var statearr_51013_52520 = state_51008__$1;
(statearr_51013_52520[(2)] = null);

(statearr_51013_52520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (6))){
var state_51008__$1 = state_51008;
var statearr_51014_52521 = state_51008__$1;
(statearr_51014_52521[(2)] = null);

(statearr_51014_52521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (7))){
var inst_51004 = (state_51008[(2)]);
var state_51008__$1 = state_51008;
var statearr_51015_52522 = state_51008__$1;
(statearr_51015_52522[(2)] = inst_51004);

(statearr_51015_52522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52502,c__50818__auto___52516,G__50970_52503,G__50970_52504__$1,n__4706__auto___52501,jobs,results,process,async))
;
return ((function (__52502,switch__50578__auto__,c__50818__auto___52516,G__50970_52503,G__50970_52504__$1,n__4706__auto___52501,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0 = (function (){
var statearr_51016 = [null,null,null,null,null,null,null];
(statearr_51016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__);

(statearr_51016[(1)] = (1));

return statearr_51016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1 = (function (state_51008){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_51008);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e51017){var ex__50582__auto__ = e51017;
var statearr_51018_52525 = state_51008;
(statearr_51018_52525[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_51008[(4)]))){
var statearr_51019_52526 = state_51008;
(statearr_51019_52526[(1)] = cljs.core.first((state_51008[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52527 = state_51008;
state_51008 = G__52527;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__ = function(state_51008){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1.call(this,state_51008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__;
})()
;})(__52502,switch__50578__auto__,c__50818__auto___52516,G__50970_52503,G__50970_52504__$1,n__4706__auto___52501,jobs,results,process,async))
})();
var state__50820__auto__ = (function (){var statearr_51020 = f__50819__auto__();
(statearr_51020[(6)] = c__50818__auto___52516);

return statearr_51020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
});})(__52502,c__50818__auto___52516,G__50970_52503,G__50970_52504__$1,n__4706__auto___52501,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50970_52504__$1)].join('')));

}

var G__52530 = (__52502 + (1));
__52502 = G__52530;
continue;
} else {
}
break;
}

var c__50818__auto___52531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_51042){
var state_val_51043 = (state_51042[(1)]);
if((state_val_51043 === (7))){
var inst_51038 = (state_51042[(2)]);
var state_51042__$1 = state_51042;
var statearr_51044_52532 = state_51042__$1;
(statearr_51044_52532[(2)] = inst_51038);

(statearr_51044_52532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51043 === (1))){
var state_51042__$1 = state_51042;
var statearr_51045_52534 = state_51042__$1;
(statearr_51045_52534[(2)] = null);

(statearr_51045_52534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51043 === (4))){
var inst_51023 = (state_51042[(7)]);
var inst_51023__$1 = (state_51042[(2)]);
var inst_51024 = (inst_51023__$1 == null);
var state_51042__$1 = (function (){var statearr_51046 = state_51042;
(statearr_51046[(7)] = inst_51023__$1);

return statearr_51046;
})();
if(cljs.core.truth_(inst_51024)){
var statearr_51047_52536 = state_51042__$1;
(statearr_51047_52536[(1)] = (5));

} else {
var statearr_51048_52537 = state_51042__$1;
(statearr_51048_52537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51043 === (6))){
var inst_51023 = (state_51042[(7)]);
var inst_51028 = (state_51042[(8)]);
var inst_51028__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_51029 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51030 = [inst_51023,inst_51028__$1];
var inst_51031 = (new cljs.core.PersistentVector(null,2,(5),inst_51029,inst_51030,null));
var state_51042__$1 = (function (){var statearr_51049 = state_51042;
(statearr_51049[(8)] = inst_51028__$1);

return statearr_51049;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51042__$1,(8),jobs,inst_51031);
} else {
if((state_val_51043 === (3))){
var inst_51040 = (state_51042[(2)]);
var state_51042__$1 = state_51042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51042__$1,inst_51040);
} else {
if((state_val_51043 === (2))){
var state_51042__$1 = state_51042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51042__$1,(4),from);
} else {
if((state_val_51043 === (9))){
var inst_51035 = (state_51042[(2)]);
var state_51042__$1 = (function (){var statearr_51050 = state_51042;
(statearr_51050[(9)] = inst_51035);

return statearr_51050;
})();
var statearr_51051_52538 = state_51042__$1;
(statearr_51051_52538[(2)] = null);

(statearr_51051_52538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51043 === (5))){
var inst_51026 = cljs.core.async.close_BANG_(jobs);
var state_51042__$1 = state_51042;
var statearr_51052_52539 = state_51042__$1;
(statearr_51052_52539[(2)] = inst_51026);

(statearr_51052_52539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51043 === (8))){
var inst_51028 = (state_51042[(8)]);
var inst_51033 = (state_51042[(2)]);
var state_51042__$1 = (function (){var statearr_51053 = state_51042;
(statearr_51053[(10)] = inst_51033);

return statearr_51053;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51042__$1,(9),results,inst_51028);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0 = (function (){
var statearr_51054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__);

(statearr_51054[(1)] = (1));

return statearr_51054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1 = (function (state_51042){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_51042);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e51055){var ex__50582__auto__ = e51055;
var statearr_51056_52540 = state_51042;
(statearr_51056_52540[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_51042[(4)]))){
var statearr_51057_52541 = state_51042;
(statearr_51057_52541[(1)] = cljs.core.first((state_51042[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52542 = state_51042;
state_51042 = G__52542;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__ = function(state_51042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1.call(this,state_51042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_51058 = f__50819__auto__();
(statearr_51058[(6)] = c__50818__auto___52531);

return statearr_51058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


var c__50818__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_51096){
var state_val_51097 = (state_51096[(1)]);
if((state_val_51097 === (7))){
var inst_51092 = (state_51096[(2)]);
var state_51096__$1 = state_51096;
var statearr_51098_52543 = state_51096__$1;
(statearr_51098_52543[(2)] = inst_51092);

(statearr_51098_52543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (20))){
var state_51096__$1 = state_51096;
var statearr_51099_52544 = state_51096__$1;
(statearr_51099_52544[(2)] = null);

(statearr_51099_52544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (1))){
var state_51096__$1 = state_51096;
var statearr_51100_52545 = state_51096__$1;
(statearr_51100_52545[(2)] = null);

(statearr_51100_52545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (4))){
var inst_51061 = (state_51096[(7)]);
var inst_51061__$1 = (state_51096[(2)]);
var inst_51062 = (inst_51061__$1 == null);
var state_51096__$1 = (function (){var statearr_51101 = state_51096;
(statearr_51101[(7)] = inst_51061__$1);

return statearr_51101;
})();
if(cljs.core.truth_(inst_51062)){
var statearr_51102_52546 = state_51096__$1;
(statearr_51102_52546[(1)] = (5));

} else {
var statearr_51103_52547 = state_51096__$1;
(statearr_51103_52547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (15))){
var inst_51074 = (state_51096[(8)]);
var state_51096__$1 = state_51096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51096__$1,(18),to,inst_51074);
} else {
if((state_val_51097 === (21))){
var inst_51087 = (state_51096[(2)]);
var state_51096__$1 = state_51096;
var statearr_51104_52548 = state_51096__$1;
(statearr_51104_52548[(2)] = inst_51087);

(statearr_51104_52548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (13))){
var inst_51089 = (state_51096[(2)]);
var state_51096__$1 = (function (){var statearr_51105 = state_51096;
(statearr_51105[(9)] = inst_51089);

return statearr_51105;
})();
var statearr_51106_52549 = state_51096__$1;
(statearr_51106_52549[(2)] = null);

(statearr_51106_52549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (6))){
var inst_51061 = (state_51096[(7)]);
var state_51096__$1 = state_51096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51096__$1,(11),inst_51061);
} else {
if((state_val_51097 === (17))){
var inst_51082 = (state_51096[(2)]);
var state_51096__$1 = state_51096;
if(cljs.core.truth_(inst_51082)){
var statearr_51107_52550 = state_51096__$1;
(statearr_51107_52550[(1)] = (19));

} else {
var statearr_51108_52551 = state_51096__$1;
(statearr_51108_52551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (3))){
var inst_51094 = (state_51096[(2)]);
var state_51096__$1 = state_51096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51096__$1,inst_51094);
} else {
if((state_val_51097 === (12))){
var inst_51071 = (state_51096[(10)]);
var state_51096__$1 = state_51096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51096__$1,(14),inst_51071);
} else {
if((state_val_51097 === (2))){
var state_51096__$1 = state_51096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51096__$1,(4),results);
} else {
if((state_val_51097 === (19))){
var state_51096__$1 = state_51096;
var statearr_51109_52552 = state_51096__$1;
(statearr_51109_52552[(2)] = null);

(statearr_51109_52552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (11))){
var inst_51071 = (state_51096[(2)]);
var state_51096__$1 = (function (){var statearr_51110 = state_51096;
(statearr_51110[(10)] = inst_51071);

return statearr_51110;
})();
var statearr_51111_52553 = state_51096__$1;
(statearr_51111_52553[(2)] = null);

(statearr_51111_52553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (9))){
var state_51096__$1 = state_51096;
var statearr_51112_52554 = state_51096__$1;
(statearr_51112_52554[(2)] = null);

(statearr_51112_52554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (5))){
var state_51096__$1 = state_51096;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51113_52555 = state_51096__$1;
(statearr_51113_52555[(1)] = (8));

} else {
var statearr_51114_52556 = state_51096__$1;
(statearr_51114_52556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (14))){
var inst_51074 = (state_51096[(8)]);
var inst_51076 = (state_51096[(11)]);
var inst_51074__$1 = (state_51096[(2)]);
var inst_51075 = (inst_51074__$1 == null);
var inst_51076__$1 = cljs.core.not(inst_51075);
var state_51096__$1 = (function (){var statearr_51115 = state_51096;
(statearr_51115[(8)] = inst_51074__$1);

(statearr_51115[(11)] = inst_51076__$1);

return statearr_51115;
})();
if(inst_51076__$1){
var statearr_51116_52557 = state_51096__$1;
(statearr_51116_52557[(1)] = (15));

} else {
var statearr_51117_52558 = state_51096__$1;
(statearr_51117_52558[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (16))){
var inst_51076 = (state_51096[(11)]);
var state_51096__$1 = state_51096;
var statearr_51118_52559 = state_51096__$1;
(statearr_51118_52559[(2)] = inst_51076);

(statearr_51118_52559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (10))){
var inst_51068 = (state_51096[(2)]);
var state_51096__$1 = state_51096;
var statearr_51119_52560 = state_51096__$1;
(statearr_51119_52560[(2)] = inst_51068);

(statearr_51119_52560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (18))){
var inst_51079 = (state_51096[(2)]);
var state_51096__$1 = state_51096;
var statearr_51120_52561 = state_51096__$1;
(statearr_51120_52561[(2)] = inst_51079);

(statearr_51120_52561[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (8))){
var inst_51065 = cljs.core.async.close_BANG_(to);
var state_51096__$1 = state_51096;
var statearr_51121_52562 = state_51096__$1;
(statearr_51121_52562[(2)] = inst_51065);

(statearr_51121_52562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0 = (function (){
var statearr_51122 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__);

(statearr_51122[(1)] = (1));

return statearr_51122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1 = (function (state_51096){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_51096);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e51123){var ex__50582__auto__ = e51123;
var statearr_51124_52563 = state_51096;
(statearr_51124_52563[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_51096[(4)]))){
var statearr_51125_52564 = state_51096;
(statearr_51125_52564[(1)] = cljs.core.first((state_51096[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52565 = state_51096;
state_51096 = G__52565;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__ = function(state_51096){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1.call(this,state_51096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_51126 = f__50819__auto__();
(statearr_51126[(6)] = c__50818__auto__);

return statearr_51126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));

return c__50818__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__51128 = arguments.length;
switch (G__51128) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__51130 = arguments.length;
switch (G__51130) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__51132 = arguments.length;
switch (G__51132) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__50818__auto___52571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_51158){
var state_val_51159 = (state_51158[(1)]);
if((state_val_51159 === (7))){
var inst_51154 = (state_51158[(2)]);
var state_51158__$1 = state_51158;
var statearr_51160_52572 = state_51158__$1;
(statearr_51160_52572[(2)] = inst_51154);

(statearr_51160_52572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51159 === (1))){
var state_51158__$1 = state_51158;
var statearr_51161_52573 = state_51158__$1;
(statearr_51161_52573[(2)] = null);

(statearr_51161_52573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51159 === (4))){
var inst_51135 = (state_51158[(7)]);
var inst_51135__$1 = (state_51158[(2)]);
var inst_51136 = (inst_51135__$1 == null);
var state_51158__$1 = (function (){var statearr_51162 = state_51158;
(statearr_51162[(7)] = inst_51135__$1);

return statearr_51162;
})();
if(cljs.core.truth_(inst_51136)){
var statearr_51163_52574 = state_51158__$1;
(statearr_51163_52574[(1)] = (5));

} else {
var statearr_51164_52575 = state_51158__$1;
(statearr_51164_52575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51159 === (13))){
var state_51158__$1 = state_51158;
var statearr_51165_52576 = state_51158__$1;
(statearr_51165_52576[(2)] = null);

(statearr_51165_52576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51159 === (6))){
var inst_51135 = (state_51158[(7)]);
var inst_51141 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51135) : p.call(null,inst_51135));
var state_51158__$1 = state_51158;
if(cljs.core.truth_(inst_51141)){
var statearr_51166_52577 = state_51158__$1;
(statearr_51166_52577[(1)] = (9));

} else {
var statearr_51167_52578 = state_51158__$1;
(statearr_51167_52578[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51159 === (3))){
var inst_51156 = (state_51158[(2)]);
var state_51158__$1 = state_51158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51158__$1,inst_51156);
} else {
if((state_val_51159 === (12))){
var state_51158__$1 = state_51158;
var statearr_51168_52579 = state_51158__$1;
(statearr_51168_52579[(2)] = null);

(statearr_51168_52579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51159 === (2))){
var state_51158__$1 = state_51158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51158__$1,(4),ch);
} else {
if((state_val_51159 === (11))){
var inst_51135 = (state_51158[(7)]);
var inst_51145 = (state_51158[(2)]);
var state_51158__$1 = state_51158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51158__$1,(8),inst_51145,inst_51135);
} else {
if((state_val_51159 === (9))){
var state_51158__$1 = state_51158;
var statearr_51169_52581 = state_51158__$1;
(statearr_51169_52581[(2)] = tc);

(statearr_51169_52581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51159 === (5))){
var inst_51138 = cljs.core.async.close_BANG_(tc);
var inst_51139 = cljs.core.async.close_BANG_(fc);
var state_51158__$1 = (function (){var statearr_51170 = state_51158;
(statearr_51170[(8)] = inst_51138);

return statearr_51170;
})();
var statearr_51171_52582 = state_51158__$1;
(statearr_51171_52582[(2)] = inst_51139);

(statearr_51171_52582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51159 === (14))){
var inst_51152 = (state_51158[(2)]);
var state_51158__$1 = state_51158;
var statearr_51172_52583 = state_51158__$1;
(statearr_51172_52583[(2)] = inst_51152);

(statearr_51172_52583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51159 === (10))){
var state_51158__$1 = state_51158;
var statearr_51173_52584 = state_51158__$1;
(statearr_51173_52584[(2)] = fc);

(statearr_51173_52584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51159 === (8))){
var inst_51147 = (state_51158[(2)]);
var state_51158__$1 = state_51158;
if(cljs.core.truth_(inst_51147)){
var statearr_51174_52585 = state_51158__$1;
(statearr_51174_52585[(1)] = (12));

} else {
var statearr_51175_52586 = state_51158__$1;
(statearr_51175_52586[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50579__auto__ = null;
var cljs$core$async$state_machine__50579__auto____0 = (function (){
var statearr_51176 = [null,null,null,null,null,null,null,null,null];
(statearr_51176[(0)] = cljs$core$async$state_machine__50579__auto__);

(statearr_51176[(1)] = (1));

return statearr_51176;
});
var cljs$core$async$state_machine__50579__auto____1 = (function (state_51158){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_51158);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e51177){var ex__50582__auto__ = e51177;
var statearr_51178_52589 = state_51158;
(statearr_51178_52589[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_51158[(4)]))){
var statearr_51179_52590 = state_51158;
(statearr_51179_52590[(1)] = cljs.core.first((state_51158[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52591 = state_51158;
state_51158 = G__52591;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$state_machine__50579__auto__ = function(state_51158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50579__auto____1.call(this,state_51158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50579__auto____0;
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50579__auto____1;
return cljs$core$async$state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_51180 = f__50819__auto__();
(statearr_51180[(6)] = c__50818__auto___52571);

return statearr_51180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__50818__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_51202){
var state_val_51203 = (state_51202[(1)]);
if((state_val_51203 === (7))){
var inst_51198 = (state_51202[(2)]);
var state_51202__$1 = state_51202;
var statearr_51204_52592 = state_51202__$1;
(statearr_51204_52592[(2)] = inst_51198);

(statearr_51204_52592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51203 === (1))){
var inst_51181 = init;
var inst_51182 = inst_51181;
var state_51202__$1 = (function (){var statearr_51205 = state_51202;
(statearr_51205[(7)] = inst_51182);

return statearr_51205;
})();
var statearr_51206_52593 = state_51202__$1;
(statearr_51206_52593[(2)] = null);

(statearr_51206_52593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51203 === (4))){
var inst_51185 = (state_51202[(8)]);
var inst_51185__$1 = (state_51202[(2)]);
var inst_51186 = (inst_51185__$1 == null);
var state_51202__$1 = (function (){var statearr_51207 = state_51202;
(statearr_51207[(8)] = inst_51185__$1);

return statearr_51207;
})();
if(cljs.core.truth_(inst_51186)){
var statearr_51208_52595 = state_51202__$1;
(statearr_51208_52595[(1)] = (5));

} else {
var statearr_51209_52596 = state_51202__$1;
(statearr_51209_52596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51203 === (6))){
var inst_51185 = (state_51202[(8)]);
var inst_51189 = (state_51202[(9)]);
var inst_51182 = (state_51202[(7)]);
var inst_51189__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_51182,inst_51185) : f.call(null,inst_51182,inst_51185));
var inst_51190 = cljs.core.reduced_QMARK_(inst_51189__$1);
var state_51202__$1 = (function (){var statearr_51210 = state_51202;
(statearr_51210[(9)] = inst_51189__$1);

return statearr_51210;
})();
if(inst_51190){
var statearr_51211_52598 = state_51202__$1;
(statearr_51211_52598[(1)] = (8));

} else {
var statearr_51212_52599 = state_51202__$1;
(statearr_51212_52599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51203 === (3))){
var inst_51200 = (state_51202[(2)]);
var state_51202__$1 = state_51202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51202__$1,inst_51200);
} else {
if((state_val_51203 === (2))){
var state_51202__$1 = state_51202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51202__$1,(4),ch);
} else {
if((state_val_51203 === (9))){
var inst_51189 = (state_51202[(9)]);
var inst_51182 = inst_51189;
var state_51202__$1 = (function (){var statearr_51213 = state_51202;
(statearr_51213[(7)] = inst_51182);

return statearr_51213;
})();
var statearr_51214_52600 = state_51202__$1;
(statearr_51214_52600[(2)] = null);

(statearr_51214_52600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51203 === (5))){
var inst_51182 = (state_51202[(7)]);
var state_51202__$1 = state_51202;
var statearr_51215_52601 = state_51202__$1;
(statearr_51215_52601[(2)] = inst_51182);

(statearr_51215_52601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51203 === (10))){
var inst_51196 = (state_51202[(2)]);
var state_51202__$1 = state_51202;
var statearr_51216_52602 = state_51202__$1;
(statearr_51216_52602[(2)] = inst_51196);

(statearr_51216_52602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51203 === (8))){
var inst_51189 = (state_51202[(9)]);
var inst_51192 = cljs.core.deref(inst_51189);
var state_51202__$1 = state_51202;
var statearr_51217_52603 = state_51202__$1;
(statearr_51217_52603[(2)] = inst_51192);

(statearr_51217_52603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__50579__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50579__auto____0 = (function (){
var statearr_51218 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51218[(0)] = cljs$core$async$reduce_$_state_machine__50579__auto__);

(statearr_51218[(1)] = (1));

return statearr_51218;
});
var cljs$core$async$reduce_$_state_machine__50579__auto____1 = (function (state_51202){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_51202);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e51219){var ex__50582__auto__ = e51219;
var statearr_51220_52604 = state_51202;
(statearr_51220_52604[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_51202[(4)]))){
var statearr_51221_52605 = state_51202;
(statearr_51221_52605[(1)] = cljs.core.first((state_51202[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52606 = state_51202;
state_51202 = G__52606;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50579__auto__ = function(state_51202){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50579__auto____1.call(this,state_51202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50579__auto____0;
cljs$core$async$reduce_$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50579__auto____1;
return cljs$core$async$reduce_$_state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_51222 = f__50819__auto__();
(statearr_51222[(6)] = c__50818__auto__);

return statearr_51222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));

return c__50818__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50818__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_51228){
var state_val_51229 = (state_51228[(1)]);
if((state_val_51229 === (1))){
var inst_51223 = cljs.core.async.reduce(f__$1,init,ch);
var state_51228__$1 = state_51228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51228__$1,(2),inst_51223);
} else {
if((state_val_51229 === (2))){
var inst_51225 = (state_51228[(2)]);
var inst_51226 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_51225) : f__$1.call(null,inst_51225));
var state_51228__$1 = state_51228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51228__$1,inst_51226);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__50579__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50579__auto____0 = (function (){
var statearr_51230 = [null,null,null,null,null,null,null];
(statearr_51230[(0)] = cljs$core$async$transduce_$_state_machine__50579__auto__);

(statearr_51230[(1)] = (1));

return statearr_51230;
});
var cljs$core$async$transduce_$_state_machine__50579__auto____1 = (function (state_51228){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_51228);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e51231){var ex__50582__auto__ = e51231;
var statearr_51232_52607 = state_51228;
(statearr_51232_52607[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_51228[(4)]))){
var statearr_51233_52608 = state_51228;
(statearr_51233_52608[(1)] = cljs.core.first((state_51228[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52609 = state_51228;
state_51228 = G__52609;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50579__auto__ = function(state_51228){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50579__auto____1.call(this,state_51228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50579__auto____0;
cljs$core$async$transduce_$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50579__auto____1;
return cljs$core$async$transduce_$_state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_51234 = f__50819__auto__();
(statearr_51234[(6)] = c__50818__auto__);

return statearr_51234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));

return c__50818__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__51236 = arguments.length;
switch (G__51236) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50818__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_51265){
var state_val_51266 = (state_51265[(1)]);
if((state_val_51266 === (7))){
var inst_51247 = (state_51265[(2)]);
var state_51265__$1 = state_51265;
var statearr_51267_52611 = state_51265__$1;
(statearr_51267_52611[(2)] = inst_51247);

(statearr_51267_52611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51266 === (1))){
var inst_51241 = cljs.core.seq(coll);
var inst_51242 = inst_51241;
var state_51265__$1 = (function (){var statearr_51268 = state_51265;
(statearr_51268[(7)] = inst_51242);

return statearr_51268;
})();
var statearr_51269_52612 = state_51265__$1;
(statearr_51269_52612[(2)] = null);

(statearr_51269_52612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51266 === (4))){
var inst_51242 = (state_51265[(7)]);
var inst_51245 = cljs.core.first(inst_51242);
var state_51265__$1 = state_51265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51265__$1,(7),ch,inst_51245);
} else {
if((state_val_51266 === (13))){
var inst_51259 = (state_51265[(2)]);
var state_51265__$1 = state_51265;
var statearr_51270_52613 = state_51265__$1;
(statearr_51270_52613[(2)] = inst_51259);

(statearr_51270_52613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51266 === (6))){
var inst_51250 = (state_51265[(2)]);
var state_51265__$1 = state_51265;
if(cljs.core.truth_(inst_51250)){
var statearr_51271_52614 = state_51265__$1;
(statearr_51271_52614[(1)] = (8));

} else {
var statearr_51272_52615 = state_51265__$1;
(statearr_51272_52615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51266 === (3))){
var inst_51263 = (state_51265[(2)]);
var state_51265__$1 = state_51265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51265__$1,inst_51263);
} else {
if((state_val_51266 === (12))){
var state_51265__$1 = state_51265;
var statearr_51273_52616 = state_51265__$1;
(statearr_51273_52616[(2)] = null);

(statearr_51273_52616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51266 === (2))){
var inst_51242 = (state_51265[(7)]);
var state_51265__$1 = state_51265;
if(cljs.core.truth_(inst_51242)){
var statearr_51274_52617 = state_51265__$1;
(statearr_51274_52617[(1)] = (4));

} else {
var statearr_51275_52618 = state_51265__$1;
(statearr_51275_52618[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51266 === (11))){
var inst_51256 = cljs.core.async.close_BANG_(ch);
var state_51265__$1 = state_51265;
var statearr_51276_52619 = state_51265__$1;
(statearr_51276_52619[(2)] = inst_51256);

(statearr_51276_52619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51266 === (9))){
var state_51265__$1 = state_51265;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51277_52620 = state_51265__$1;
(statearr_51277_52620[(1)] = (11));

} else {
var statearr_51278_52621 = state_51265__$1;
(statearr_51278_52621[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51266 === (5))){
var inst_51242 = (state_51265[(7)]);
var state_51265__$1 = state_51265;
var statearr_51279_52622 = state_51265__$1;
(statearr_51279_52622[(2)] = inst_51242);

(statearr_51279_52622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51266 === (10))){
var inst_51261 = (state_51265[(2)]);
var state_51265__$1 = state_51265;
var statearr_51280_52623 = state_51265__$1;
(statearr_51280_52623[(2)] = inst_51261);

(statearr_51280_52623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51266 === (8))){
var inst_51242 = (state_51265[(7)]);
var inst_51252 = cljs.core.next(inst_51242);
var inst_51242__$1 = inst_51252;
var state_51265__$1 = (function (){var statearr_51281 = state_51265;
(statearr_51281[(7)] = inst_51242__$1);

return statearr_51281;
})();
var statearr_51282_52624 = state_51265__$1;
(statearr_51282_52624[(2)] = null);

(statearr_51282_52624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50579__auto__ = null;
var cljs$core$async$state_machine__50579__auto____0 = (function (){
var statearr_51283 = [null,null,null,null,null,null,null,null];
(statearr_51283[(0)] = cljs$core$async$state_machine__50579__auto__);

(statearr_51283[(1)] = (1));

return statearr_51283;
});
var cljs$core$async$state_machine__50579__auto____1 = (function (state_51265){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_51265);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e51284){var ex__50582__auto__ = e51284;
var statearr_51285_52629 = state_51265;
(statearr_51285_52629[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_51265[(4)]))){
var statearr_51286_52630 = state_51265;
(statearr_51286_52630[(1)] = cljs.core.first((state_51265[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52631 = state_51265;
state_51265 = G__52631;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$state_machine__50579__auto__ = function(state_51265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50579__auto____1.call(this,state_51265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50579__auto____0;
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50579__auto____1;
return cljs$core$async$state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_51289 = f__50819__auto__();
(statearr_51289[(6)] = c__50818__auto__);

return statearr_51289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));

return c__50818__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__51291 = arguments.length;
switch (G__51291) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_52633 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_52633(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52634 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_52634(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52635 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_52635(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52636 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_52636(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51296 = (function (ch,cs,meta51297){
this.ch = ch;
this.cs = cs;
this.meta51297 = meta51297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51298,meta51297__$1){
var self__ = this;
var _51298__$1 = this;
return (new cljs.core.async.t_cljs$core$async51296(self__.ch,self__.cs,meta51297__$1));
}));

(cljs.core.async.t_cljs$core$async51296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51298){
var self__ = this;
var _51298__$1 = this;
return self__.meta51297;
}));

(cljs.core.async.t_cljs$core$async51296.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51296.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51296.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async51296.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async51296.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async51296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51297","meta51297",-210830710,null)], null);
}));

(cljs.core.async.t_cljs$core$async51296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51296");

(cljs.core.async.t_cljs$core$async51296.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51296.
 */
cljs.core.async.__GT_t_cljs$core$async51296 = (function cljs$core$async$mult_$___GT_t_cljs$core$async51296(ch__$1,cs__$1,meta51297){
return (new cljs.core.async.t_cljs$core$async51296(ch__$1,cs__$1,meta51297));
});

}

return (new cljs.core.async.t_cljs$core$async51296(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__50818__auto___52637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_51431){
var state_val_51432 = (state_51431[(1)]);
if((state_val_51432 === (7))){
var inst_51427 = (state_51431[(2)]);
var state_51431__$1 = state_51431;
var statearr_51433_52638 = state_51431__$1;
(statearr_51433_52638[(2)] = inst_51427);

(statearr_51433_52638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (20))){
var inst_51332 = (state_51431[(7)]);
var inst_51344 = cljs.core.first(inst_51332);
var inst_51345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51344,(0),null);
var inst_51346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51344,(1),null);
var state_51431__$1 = (function (){var statearr_51434 = state_51431;
(statearr_51434[(8)] = inst_51345);

return statearr_51434;
})();
if(cljs.core.truth_(inst_51346)){
var statearr_51435_52639 = state_51431__$1;
(statearr_51435_52639[(1)] = (22));

} else {
var statearr_51436_52640 = state_51431__$1;
(statearr_51436_52640[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (27))){
var inst_51301 = (state_51431[(9)]);
var inst_51374 = (state_51431[(10)]);
var inst_51381 = (state_51431[(11)]);
var inst_51376 = (state_51431[(12)]);
var inst_51381__$1 = cljs.core._nth(inst_51374,inst_51376);
var inst_51382 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51381__$1,inst_51301,done);
var state_51431__$1 = (function (){var statearr_51441 = state_51431;
(statearr_51441[(11)] = inst_51381__$1);

return statearr_51441;
})();
if(cljs.core.truth_(inst_51382)){
var statearr_51442_52641 = state_51431__$1;
(statearr_51442_52641[(1)] = (30));

} else {
var statearr_51443_52642 = state_51431__$1;
(statearr_51443_52642[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (1))){
var state_51431__$1 = state_51431;
var statearr_51444_52643 = state_51431__$1;
(statearr_51444_52643[(2)] = null);

(statearr_51444_52643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (24))){
var inst_51332 = (state_51431[(7)]);
var inst_51351 = (state_51431[(2)]);
var inst_51352 = cljs.core.next(inst_51332);
var inst_51310 = inst_51352;
var inst_51311 = null;
var inst_51312 = (0);
var inst_51313 = (0);
var state_51431__$1 = (function (){var statearr_51445 = state_51431;
(statearr_51445[(13)] = inst_51310);

(statearr_51445[(14)] = inst_51351);

(statearr_51445[(15)] = inst_51312);

(statearr_51445[(16)] = inst_51311);

(statearr_51445[(17)] = inst_51313);

return statearr_51445;
})();
var statearr_51446_52644 = state_51431__$1;
(statearr_51446_52644[(2)] = null);

(statearr_51446_52644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (39))){
var state_51431__$1 = state_51431;
var statearr_51454_52645 = state_51431__$1;
(statearr_51454_52645[(2)] = null);

(statearr_51454_52645[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (4))){
var inst_51301 = (state_51431[(9)]);
var inst_51301__$1 = (state_51431[(2)]);
var inst_51302 = (inst_51301__$1 == null);
var state_51431__$1 = (function (){var statearr_51455 = state_51431;
(statearr_51455[(9)] = inst_51301__$1);

return statearr_51455;
})();
if(cljs.core.truth_(inst_51302)){
var statearr_51456_52646 = state_51431__$1;
(statearr_51456_52646[(1)] = (5));

} else {
var statearr_51457_52647 = state_51431__$1;
(statearr_51457_52647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (15))){
var inst_51310 = (state_51431[(13)]);
var inst_51312 = (state_51431[(15)]);
var inst_51311 = (state_51431[(16)]);
var inst_51313 = (state_51431[(17)]);
var inst_51328 = (state_51431[(2)]);
var inst_51329 = (inst_51313 + (1));
var tmp51447 = inst_51310;
var tmp51448 = inst_51312;
var tmp51449 = inst_51311;
var inst_51310__$1 = tmp51447;
var inst_51311__$1 = tmp51449;
var inst_51312__$1 = tmp51448;
var inst_51313__$1 = inst_51329;
var state_51431__$1 = (function (){var statearr_51458 = state_51431;
(statearr_51458[(13)] = inst_51310__$1);

(statearr_51458[(15)] = inst_51312__$1);

(statearr_51458[(16)] = inst_51311__$1);

(statearr_51458[(18)] = inst_51328);

(statearr_51458[(17)] = inst_51313__$1);

return statearr_51458;
})();
var statearr_51459_52648 = state_51431__$1;
(statearr_51459_52648[(2)] = null);

(statearr_51459_52648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (21))){
var inst_51355 = (state_51431[(2)]);
var state_51431__$1 = state_51431;
var statearr_51463_52649 = state_51431__$1;
(statearr_51463_52649[(2)] = inst_51355);

(statearr_51463_52649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (31))){
var inst_51381 = (state_51431[(11)]);
var inst_51385 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51381);
var state_51431__$1 = state_51431;
var statearr_51464_52650 = state_51431__$1;
(statearr_51464_52650[(2)] = inst_51385);

(statearr_51464_52650[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (32))){
var inst_51373 = (state_51431[(19)]);
var inst_51375 = (state_51431[(20)]);
var inst_51374 = (state_51431[(10)]);
var inst_51376 = (state_51431[(12)]);
var inst_51387 = (state_51431[(2)]);
var inst_51388 = (inst_51376 + (1));
var tmp51460 = inst_51373;
var tmp51461 = inst_51375;
var tmp51462 = inst_51374;
var inst_51373__$1 = tmp51460;
var inst_51374__$1 = tmp51462;
var inst_51375__$1 = tmp51461;
var inst_51376__$1 = inst_51388;
var state_51431__$1 = (function (){var statearr_51465 = state_51431;
(statearr_51465[(21)] = inst_51387);

(statearr_51465[(19)] = inst_51373__$1);

(statearr_51465[(20)] = inst_51375__$1);

(statearr_51465[(10)] = inst_51374__$1);

(statearr_51465[(12)] = inst_51376__$1);

return statearr_51465;
})();
var statearr_51466_52651 = state_51431__$1;
(statearr_51466_52651[(2)] = null);

(statearr_51466_52651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (40))){
var inst_51400 = (state_51431[(22)]);
var inst_51404 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51400);
var state_51431__$1 = state_51431;
var statearr_51467_52652 = state_51431__$1;
(statearr_51467_52652[(2)] = inst_51404);

(statearr_51467_52652[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (33))){
var inst_51391 = (state_51431[(23)]);
var inst_51393 = cljs.core.chunked_seq_QMARK_(inst_51391);
var state_51431__$1 = state_51431;
if(inst_51393){
var statearr_51468_52653 = state_51431__$1;
(statearr_51468_52653[(1)] = (36));

} else {
var statearr_51469_52654 = state_51431__$1;
(statearr_51469_52654[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (13))){
var inst_51322 = (state_51431[(24)]);
var inst_51325 = cljs.core.async.close_BANG_(inst_51322);
var state_51431__$1 = state_51431;
var statearr_51470_52655 = state_51431__$1;
(statearr_51470_52655[(2)] = inst_51325);

(statearr_51470_52655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (22))){
var inst_51345 = (state_51431[(8)]);
var inst_51348 = cljs.core.async.close_BANG_(inst_51345);
var state_51431__$1 = state_51431;
var statearr_51471_52656 = state_51431__$1;
(statearr_51471_52656[(2)] = inst_51348);

(statearr_51471_52656[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (36))){
var inst_51391 = (state_51431[(23)]);
var inst_51395 = cljs.core.chunk_first(inst_51391);
var inst_51396 = cljs.core.chunk_rest(inst_51391);
var inst_51397 = cljs.core.count(inst_51395);
var inst_51373 = inst_51396;
var inst_51374 = inst_51395;
var inst_51375 = inst_51397;
var inst_51376 = (0);
var state_51431__$1 = (function (){var statearr_51472 = state_51431;
(statearr_51472[(19)] = inst_51373);

(statearr_51472[(20)] = inst_51375);

(statearr_51472[(10)] = inst_51374);

(statearr_51472[(12)] = inst_51376);

return statearr_51472;
})();
var statearr_51473_52657 = state_51431__$1;
(statearr_51473_52657[(2)] = null);

(statearr_51473_52657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (41))){
var inst_51391 = (state_51431[(23)]);
var inst_51406 = (state_51431[(2)]);
var inst_51407 = cljs.core.next(inst_51391);
var inst_51373 = inst_51407;
var inst_51374 = null;
var inst_51375 = (0);
var inst_51376 = (0);
var state_51431__$1 = (function (){var statearr_51474 = state_51431;
(statearr_51474[(19)] = inst_51373);

(statearr_51474[(20)] = inst_51375);

(statearr_51474[(10)] = inst_51374);

(statearr_51474[(25)] = inst_51406);

(statearr_51474[(12)] = inst_51376);

return statearr_51474;
})();
var statearr_51475_52658 = state_51431__$1;
(statearr_51475_52658[(2)] = null);

(statearr_51475_52658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (43))){
var state_51431__$1 = state_51431;
var statearr_51476_52659 = state_51431__$1;
(statearr_51476_52659[(2)] = null);

(statearr_51476_52659[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (29))){
var inst_51415 = (state_51431[(2)]);
var state_51431__$1 = state_51431;
var statearr_51477_52660 = state_51431__$1;
(statearr_51477_52660[(2)] = inst_51415);

(statearr_51477_52660[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (44))){
var inst_51424 = (state_51431[(2)]);
var state_51431__$1 = (function (){var statearr_51478 = state_51431;
(statearr_51478[(26)] = inst_51424);

return statearr_51478;
})();
var statearr_51479_52661 = state_51431__$1;
(statearr_51479_52661[(2)] = null);

(statearr_51479_52661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (6))){
var inst_51365 = (state_51431[(27)]);
var inst_51364 = cljs.core.deref(cs);
var inst_51365__$1 = cljs.core.keys(inst_51364);
var inst_51366 = cljs.core.count(inst_51365__$1);
var inst_51367 = cljs.core.reset_BANG_(dctr,inst_51366);
var inst_51372 = cljs.core.seq(inst_51365__$1);
var inst_51373 = inst_51372;
var inst_51374 = null;
var inst_51375 = (0);
var inst_51376 = (0);
var state_51431__$1 = (function (){var statearr_51480 = state_51431;
(statearr_51480[(19)] = inst_51373);

(statearr_51480[(20)] = inst_51375);

(statearr_51480[(10)] = inst_51374);

(statearr_51480[(27)] = inst_51365__$1);

(statearr_51480[(28)] = inst_51367);

(statearr_51480[(12)] = inst_51376);

return statearr_51480;
})();
var statearr_51481_52662 = state_51431__$1;
(statearr_51481_52662[(2)] = null);

(statearr_51481_52662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (28))){
var inst_51373 = (state_51431[(19)]);
var inst_51391 = (state_51431[(23)]);
var inst_51391__$1 = cljs.core.seq(inst_51373);
var state_51431__$1 = (function (){var statearr_51482 = state_51431;
(statearr_51482[(23)] = inst_51391__$1);

return statearr_51482;
})();
if(inst_51391__$1){
var statearr_51483_52663 = state_51431__$1;
(statearr_51483_52663[(1)] = (33));

} else {
var statearr_51484_52664 = state_51431__$1;
(statearr_51484_52664[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (25))){
var inst_51375 = (state_51431[(20)]);
var inst_51376 = (state_51431[(12)]);
var inst_51378 = (inst_51376 < inst_51375);
var inst_51379 = inst_51378;
var state_51431__$1 = state_51431;
if(cljs.core.truth_(inst_51379)){
var statearr_51485_52665 = state_51431__$1;
(statearr_51485_52665[(1)] = (27));

} else {
var statearr_51486_52666 = state_51431__$1;
(statearr_51486_52666[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (34))){
var state_51431__$1 = state_51431;
var statearr_51487_52667 = state_51431__$1;
(statearr_51487_52667[(2)] = null);

(statearr_51487_52667[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (17))){
var state_51431__$1 = state_51431;
var statearr_51488_52668 = state_51431__$1;
(statearr_51488_52668[(2)] = null);

(statearr_51488_52668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (3))){
var inst_51429 = (state_51431[(2)]);
var state_51431__$1 = state_51431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51431__$1,inst_51429);
} else {
if((state_val_51432 === (12))){
var inst_51360 = (state_51431[(2)]);
var state_51431__$1 = state_51431;
var statearr_51489_52669 = state_51431__$1;
(statearr_51489_52669[(2)] = inst_51360);

(statearr_51489_52669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (2))){
var state_51431__$1 = state_51431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51431__$1,(4),ch);
} else {
if((state_val_51432 === (23))){
var state_51431__$1 = state_51431;
var statearr_51490_52670 = state_51431__$1;
(statearr_51490_52670[(2)] = null);

(statearr_51490_52670[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (35))){
var inst_51413 = (state_51431[(2)]);
var state_51431__$1 = state_51431;
var statearr_51491_52671 = state_51431__$1;
(statearr_51491_52671[(2)] = inst_51413);

(statearr_51491_52671[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (19))){
var inst_51332 = (state_51431[(7)]);
var inst_51336 = cljs.core.chunk_first(inst_51332);
var inst_51337 = cljs.core.chunk_rest(inst_51332);
var inst_51338 = cljs.core.count(inst_51336);
var inst_51310 = inst_51337;
var inst_51311 = inst_51336;
var inst_51312 = inst_51338;
var inst_51313 = (0);
var state_51431__$1 = (function (){var statearr_51492 = state_51431;
(statearr_51492[(13)] = inst_51310);

(statearr_51492[(15)] = inst_51312);

(statearr_51492[(16)] = inst_51311);

(statearr_51492[(17)] = inst_51313);

return statearr_51492;
})();
var statearr_51493_52672 = state_51431__$1;
(statearr_51493_52672[(2)] = null);

(statearr_51493_52672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (11))){
var inst_51310 = (state_51431[(13)]);
var inst_51332 = (state_51431[(7)]);
var inst_51332__$1 = cljs.core.seq(inst_51310);
var state_51431__$1 = (function (){var statearr_51494 = state_51431;
(statearr_51494[(7)] = inst_51332__$1);

return statearr_51494;
})();
if(inst_51332__$1){
var statearr_51495_52673 = state_51431__$1;
(statearr_51495_52673[(1)] = (16));

} else {
var statearr_51496_52674 = state_51431__$1;
(statearr_51496_52674[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (9))){
var inst_51362 = (state_51431[(2)]);
var state_51431__$1 = state_51431;
var statearr_51497_52675 = state_51431__$1;
(statearr_51497_52675[(2)] = inst_51362);

(statearr_51497_52675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (5))){
var inst_51308 = cljs.core.deref(cs);
var inst_51309 = cljs.core.seq(inst_51308);
var inst_51310 = inst_51309;
var inst_51311 = null;
var inst_51312 = (0);
var inst_51313 = (0);
var state_51431__$1 = (function (){var statearr_51498 = state_51431;
(statearr_51498[(13)] = inst_51310);

(statearr_51498[(15)] = inst_51312);

(statearr_51498[(16)] = inst_51311);

(statearr_51498[(17)] = inst_51313);

return statearr_51498;
})();
var statearr_51499_52676 = state_51431__$1;
(statearr_51499_52676[(2)] = null);

(statearr_51499_52676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (14))){
var state_51431__$1 = state_51431;
var statearr_51500_52677 = state_51431__$1;
(statearr_51500_52677[(2)] = null);

(statearr_51500_52677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (45))){
var inst_51421 = (state_51431[(2)]);
var state_51431__$1 = state_51431;
var statearr_51501_52678 = state_51431__$1;
(statearr_51501_52678[(2)] = inst_51421);

(statearr_51501_52678[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (26))){
var inst_51365 = (state_51431[(27)]);
var inst_51417 = (state_51431[(2)]);
var inst_51418 = cljs.core.seq(inst_51365);
var state_51431__$1 = (function (){var statearr_51502 = state_51431;
(statearr_51502[(29)] = inst_51417);

return statearr_51502;
})();
if(inst_51418){
var statearr_51503_52679 = state_51431__$1;
(statearr_51503_52679[(1)] = (42));

} else {
var statearr_51504_52680 = state_51431__$1;
(statearr_51504_52680[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (16))){
var inst_51332 = (state_51431[(7)]);
var inst_51334 = cljs.core.chunked_seq_QMARK_(inst_51332);
var state_51431__$1 = state_51431;
if(inst_51334){
var statearr_51505_52681 = state_51431__$1;
(statearr_51505_52681[(1)] = (19));

} else {
var statearr_51506_52682 = state_51431__$1;
(statearr_51506_52682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (38))){
var inst_51410 = (state_51431[(2)]);
var state_51431__$1 = state_51431;
var statearr_51507_52683 = state_51431__$1;
(statearr_51507_52683[(2)] = inst_51410);

(statearr_51507_52683[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (30))){
var state_51431__$1 = state_51431;
var statearr_51508_52684 = state_51431__$1;
(statearr_51508_52684[(2)] = null);

(statearr_51508_52684[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (10))){
var inst_51311 = (state_51431[(16)]);
var inst_51313 = (state_51431[(17)]);
var inst_51321 = cljs.core._nth(inst_51311,inst_51313);
var inst_51322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51321,(0),null);
var inst_51323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51321,(1),null);
var state_51431__$1 = (function (){var statearr_51509 = state_51431;
(statearr_51509[(24)] = inst_51322);

return statearr_51509;
})();
if(cljs.core.truth_(inst_51323)){
var statearr_51510_52685 = state_51431__$1;
(statearr_51510_52685[(1)] = (13));

} else {
var statearr_51511_52686 = state_51431__$1;
(statearr_51511_52686[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (18))){
var inst_51358 = (state_51431[(2)]);
var state_51431__$1 = state_51431;
var statearr_51512_52687 = state_51431__$1;
(statearr_51512_52687[(2)] = inst_51358);

(statearr_51512_52687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (42))){
var state_51431__$1 = state_51431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51431__$1,(45),dchan);
} else {
if((state_val_51432 === (37))){
var inst_51400 = (state_51431[(22)]);
var inst_51301 = (state_51431[(9)]);
var inst_51391 = (state_51431[(23)]);
var inst_51400__$1 = cljs.core.first(inst_51391);
var inst_51401 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51400__$1,inst_51301,done);
var state_51431__$1 = (function (){var statearr_51513 = state_51431;
(statearr_51513[(22)] = inst_51400__$1);

return statearr_51513;
})();
if(cljs.core.truth_(inst_51401)){
var statearr_51514_52688 = state_51431__$1;
(statearr_51514_52688[(1)] = (39));

} else {
var statearr_51515_52689 = state_51431__$1;
(statearr_51515_52689[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (8))){
var inst_51312 = (state_51431[(15)]);
var inst_51313 = (state_51431[(17)]);
var inst_51315 = (inst_51313 < inst_51312);
var inst_51316 = inst_51315;
var state_51431__$1 = state_51431;
if(cljs.core.truth_(inst_51316)){
var statearr_51516_52690 = state_51431__$1;
(statearr_51516_52690[(1)] = (10));

} else {
var statearr_51517_52691 = state_51431__$1;
(statearr_51517_52691[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__50579__auto__ = null;
var cljs$core$async$mult_$_state_machine__50579__auto____0 = (function (){
var statearr_51518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51518[(0)] = cljs$core$async$mult_$_state_machine__50579__auto__);

(statearr_51518[(1)] = (1));

return statearr_51518;
});
var cljs$core$async$mult_$_state_machine__50579__auto____1 = (function (state_51431){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_51431);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e51519){var ex__50582__auto__ = e51519;
var statearr_51520_52692 = state_51431;
(statearr_51520_52692[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_51431[(4)]))){
var statearr_51521_52693 = state_51431;
(statearr_51521_52693[(1)] = cljs.core.first((state_51431[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52694 = state_51431;
state_51431 = G__52694;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50579__auto__ = function(state_51431){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50579__auto____1.call(this,state_51431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50579__auto____0;
cljs$core$async$mult_$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50579__auto____1;
return cljs$core$async$mult_$_state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_51522 = f__50819__auto__();
(statearr_51522[(6)] = c__50818__auto___52637);

return statearr_51522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__51524 = arguments.length;
switch (G__51524) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_52696 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_52696(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52697 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_52697(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52698 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52698(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52699 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_52699(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52700 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52700(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52701 = arguments.length;
var i__4830__auto___52702 = (0);
while(true){
if((i__4830__auto___52702 < len__4829__auto___52701)){
args__4835__auto__.push((arguments[i__4830__auto___52702]));

var G__52703 = (i__4830__auto___52702 + (1));
i__4830__auto___52702 = G__52703;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51529){
var map__51530 = p__51529;
var map__51530__$1 = cljs.core.__destructure_map(map__51530);
var opts = map__51530__$1;
var statearr_51531_52704 = state;
(statearr_51531_52704[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51532_52705 = state;
(statearr_51532_52705[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_51533_52706 = state;
(statearr_51533_52706[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51525){
var G__51526 = cljs.core.first(seq51525);
var seq51525__$1 = cljs.core.next(seq51525);
var G__51527 = cljs.core.first(seq51525__$1);
var seq51525__$2 = cljs.core.next(seq51525__$1);
var G__51528 = cljs.core.first(seq51525__$2);
var seq51525__$3 = cljs.core.next(seq51525__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51526,G__51527,G__51528,seq51525__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51534 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51535){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51535 = meta51535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51536,meta51535__$1){
var self__ = this;
var _51536__$1 = this;
return (new cljs.core.async.t_cljs$core$async51534(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51535__$1));
}));

(cljs.core.async.t_cljs$core$async51534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51536){
var self__ = this;
var _51536__$1 = this;
return self__.meta51535;
}));

(cljs.core.async.t_cljs$core$async51534.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51534.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51534.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51534.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51534.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51534.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51534.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51534.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51535","meta51535",1638937878,null)], null);
}));

(cljs.core.async.t_cljs$core$async51534.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51534");

(cljs.core.async.t_cljs$core$async51534.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51534");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51534.
 */
cljs.core.async.__GT_t_cljs$core$async51534 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51534(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51535){
return (new cljs.core.async.t_cljs$core$async51534(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51535));
});

}

return (new cljs.core.async.t_cljs$core$async51534(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50818__auto___52707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_51604){
var state_val_51605 = (state_51604[(1)]);
if((state_val_51605 === (7))){
var inst_51564 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
if(cljs.core.truth_(inst_51564)){
var statearr_51606_52708 = state_51604__$1;
(statearr_51606_52708[(1)] = (8));

} else {
var statearr_51607_52709 = state_51604__$1;
(statearr_51607_52709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (20))){
var inst_51557 = (state_51604[(7)]);
var state_51604__$1 = state_51604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51604__$1,(23),out,inst_51557);
} else {
if((state_val_51605 === (1))){
var inst_51540 = calc_state();
var inst_51541 = cljs.core.__destructure_map(inst_51540);
var inst_51542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51541,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51541,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51541,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51545 = inst_51540;
var state_51604__$1 = (function (){var statearr_51608 = state_51604;
(statearr_51608[(8)] = inst_51544);

(statearr_51608[(9)] = inst_51543);

(statearr_51608[(10)] = inst_51542);

(statearr_51608[(11)] = inst_51545);

return statearr_51608;
})();
var statearr_51609_52710 = state_51604__$1;
(statearr_51609_52710[(2)] = null);

(statearr_51609_52710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (24))){
var inst_51548 = (state_51604[(12)]);
var inst_51545 = inst_51548;
var state_51604__$1 = (function (){var statearr_51610 = state_51604;
(statearr_51610[(11)] = inst_51545);

return statearr_51610;
})();
var statearr_51611_52711 = state_51604__$1;
(statearr_51611_52711[(2)] = null);

(statearr_51611_52711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (4))){
var inst_51559 = (state_51604[(13)]);
var inst_51557 = (state_51604[(7)]);
var inst_51556 = (state_51604[(2)]);
var inst_51557__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51556,(0),null);
var inst_51558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51556,(1),null);
var inst_51559__$1 = (inst_51557__$1 == null);
var state_51604__$1 = (function (){var statearr_51612 = state_51604;
(statearr_51612[(14)] = inst_51558);

(statearr_51612[(13)] = inst_51559__$1);

(statearr_51612[(7)] = inst_51557__$1);

return statearr_51612;
})();
if(cljs.core.truth_(inst_51559__$1)){
var statearr_51613_52712 = state_51604__$1;
(statearr_51613_52712[(1)] = (5));

} else {
var statearr_51614_52713 = state_51604__$1;
(statearr_51614_52713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (15))){
var inst_51578 = (state_51604[(15)]);
var inst_51549 = (state_51604[(16)]);
var inst_51578__$1 = cljs.core.empty_QMARK_(inst_51549);
var state_51604__$1 = (function (){var statearr_51615 = state_51604;
(statearr_51615[(15)] = inst_51578__$1);

return statearr_51615;
})();
if(inst_51578__$1){
var statearr_51616_52714 = state_51604__$1;
(statearr_51616_52714[(1)] = (17));

} else {
var statearr_51617_52715 = state_51604__$1;
(statearr_51617_52715[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (21))){
var inst_51548 = (state_51604[(12)]);
var inst_51545 = inst_51548;
var state_51604__$1 = (function (){var statearr_51618 = state_51604;
(statearr_51618[(11)] = inst_51545);

return statearr_51618;
})();
var statearr_51619_52716 = state_51604__$1;
(statearr_51619_52716[(2)] = null);

(statearr_51619_52716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (13))){
var inst_51571 = (state_51604[(2)]);
var inst_51572 = calc_state();
var inst_51545 = inst_51572;
var state_51604__$1 = (function (){var statearr_51621 = state_51604;
(statearr_51621[(17)] = inst_51571);

(statearr_51621[(11)] = inst_51545);

return statearr_51621;
})();
var statearr_51622_52717 = state_51604__$1;
(statearr_51622_52717[(2)] = null);

(statearr_51622_52717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (22))){
var inst_51598 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
var statearr_51624_52718 = state_51604__$1;
(statearr_51624_52718[(2)] = inst_51598);

(statearr_51624_52718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (6))){
var inst_51558 = (state_51604[(14)]);
var inst_51562 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51558,change);
var state_51604__$1 = state_51604;
var statearr_51625_52719 = state_51604__$1;
(statearr_51625_52719[(2)] = inst_51562);

(statearr_51625_52719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (25))){
var state_51604__$1 = state_51604;
var statearr_51626_52720 = state_51604__$1;
(statearr_51626_52720[(2)] = null);

(statearr_51626_52720[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (17))){
var inst_51558 = (state_51604[(14)]);
var inst_51550 = (state_51604[(18)]);
var inst_51580 = (inst_51550.cljs$core$IFn$_invoke$arity$1 ? inst_51550.cljs$core$IFn$_invoke$arity$1(inst_51558) : inst_51550.call(null,inst_51558));
var inst_51581 = cljs.core.not(inst_51580);
var state_51604__$1 = state_51604;
var statearr_51627_52721 = state_51604__$1;
(statearr_51627_52721[(2)] = inst_51581);

(statearr_51627_52721[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (3))){
var inst_51602 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51604__$1,inst_51602);
} else {
if((state_val_51605 === (12))){
var state_51604__$1 = state_51604;
var statearr_51628_52722 = state_51604__$1;
(statearr_51628_52722[(2)] = null);

(statearr_51628_52722[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (2))){
var inst_51545 = (state_51604[(11)]);
var inst_51548 = (state_51604[(12)]);
var inst_51548__$1 = cljs.core.__destructure_map(inst_51545);
var inst_51549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51548__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51548__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51548__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51604__$1 = (function (){var statearr_51630 = state_51604;
(statearr_51630[(18)] = inst_51550);

(statearr_51630[(16)] = inst_51549);

(statearr_51630[(12)] = inst_51548__$1);

return statearr_51630;
})();
return cljs.core.async.ioc_alts_BANG_(state_51604__$1,(4),inst_51551);
} else {
if((state_val_51605 === (23))){
var inst_51589 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
if(cljs.core.truth_(inst_51589)){
var statearr_51639_52723 = state_51604__$1;
(statearr_51639_52723[(1)] = (24));

} else {
var statearr_51640_52724 = state_51604__$1;
(statearr_51640_52724[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (19))){
var inst_51584 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
var statearr_51641_52725 = state_51604__$1;
(statearr_51641_52725[(2)] = inst_51584);

(statearr_51641_52725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (11))){
var inst_51558 = (state_51604[(14)]);
var inst_51568 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51558);
var state_51604__$1 = state_51604;
var statearr_51648_52726 = state_51604__$1;
(statearr_51648_52726[(2)] = inst_51568);

(statearr_51648_52726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (9))){
var inst_51558 = (state_51604[(14)]);
var inst_51575 = (state_51604[(19)]);
var inst_51549 = (state_51604[(16)]);
var inst_51575__$1 = (inst_51549.cljs$core$IFn$_invoke$arity$1 ? inst_51549.cljs$core$IFn$_invoke$arity$1(inst_51558) : inst_51549.call(null,inst_51558));
var state_51604__$1 = (function (){var statearr_51649 = state_51604;
(statearr_51649[(19)] = inst_51575__$1);

return statearr_51649;
})();
if(cljs.core.truth_(inst_51575__$1)){
var statearr_51650_52727 = state_51604__$1;
(statearr_51650_52727[(1)] = (14));

} else {
var statearr_51654_52728 = state_51604__$1;
(statearr_51654_52728[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (5))){
var inst_51559 = (state_51604[(13)]);
var state_51604__$1 = state_51604;
var statearr_51655_52729 = state_51604__$1;
(statearr_51655_52729[(2)] = inst_51559);

(statearr_51655_52729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (14))){
var inst_51575 = (state_51604[(19)]);
var state_51604__$1 = state_51604;
var statearr_51656_52730 = state_51604__$1;
(statearr_51656_52730[(2)] = inst_51575);

(statearr_51656_52730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (26))){
var inst_51594 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
var statearr_51659_52731 = state_51604__$1;
(statearr_51659_52731[(2)] = inst_51594);

(statearr_51659_52731[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (16))){
var inst_51586 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
if(cljs.core.truth_(inst_51586)){
var statearr_51660_52733 = state_51604__$1;
(statearr_51660_52733[(1)] = (20));

} else {
var statearr_51661_52734 = state_51604__$1;
(statearr_51661_52734[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (10))){
var inst_51600 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
var statearr_51662_52735 = state_51604__$1;
(statearr_51662_52735[(2)] = inst_51600);

(statearr_51662_52735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (18))){
var inst_51578 = (state_51604[(15)]);
var state_51604__$1 = state_51604;
var statearr_51663_52736 = state_51604__$1;
(statearr_51663_52736[(2)] = inst_51578);

(statearr_51663_52736[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (8))){
var inst_51557 = (state_51604[(7)]);
var inst_51566 = (inst_51557 == null);
var state_51604__$1 = state_51604;
if(cljs.core.truth_(inst_51566)){
var statearr_51667_52737 = state_51604__$1;
(statearr_51667_52737[(1)] = (11));

} else {
var statearr_51668_52739 = state_51604__$1;
(statearr_51668_52739[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__50579__auto__ = null;
var cljs$core$async$mix_$_state_machine__50579__auto____0 = (function (){
var statearr_51669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51669[(0)] = cljs$core$async$mix_$_state_machine__50579__auto__);

(statearr_51669[(1)] = (1));

return statearr_51669;
});
var cljs$core$async$mix_$_state_machine__50579__auto____1 = (function (state_51604){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_51604);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e51670){var ex__50582__auto__ = e51670;
var statearr_51671_52740 = state_51604;
(statearr_51671_52740[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_51604[(4)]))){
var statearr_51672_52741 = state_51604;
(statearr_51672_52741[(1)] = cljs.core.first((state_51604[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52742 = state_51604;
state_51604 = G__52742;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50579__auto__ = function(state_51604){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50579__auto____1.call(this,state_51604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50579__auto____0;
cljs$core$async$mix_$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50579__auto____1;
return cljs$core$async$mix_$_state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_51673 = f__50819__auto__();
(statearr_51673[(6)] = c__50818__auto___52707);

return statearr_51673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_52743 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_52743(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52744 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_52744(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52745 = (function() {
var G__52746 = null;
var G__52746__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__52746__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__52746 = function(p,v){
switch(arguments.length){
case 1:
return G__52746__1.call(this,p);
case 2:
return G__52746__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52746.cljs$core$IFn$_invoke$arity$1 = G__52746__1;
G__52746.cljs$core$IFn$_invoke$arity$2 = G__52746__2;
return G__52746;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51675 = arguments.length;
switch (G__51675) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52745(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52745(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51678 = arguments.length;
switch (G__51678) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51676_SHARP_){
if(cljs.core.truth_((p1__51676_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51676_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51676_SHARP_.call(null,topic)))){
return p1__51676_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51676_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51679 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51680){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51680 = meta51680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51681,meta51680__$1){
var self__ = this;
var _51681__$1 = this;
return (new cljs.core.async.t_cljs$core$async51679(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51680__$1));
}));

(cljs.core.async.t_cljs$core$async51679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51681){
var self__ = this;
var _51681__$1 = this;
return self__.meta51680;
}));

(cljs.core.async.t_cljs$core$async51679.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51679.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51679.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51679.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51679.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51679.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51680","meta51680",1589128156,null)], null);
}));

(cljs.core.async.t_cljs$core$async51679.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51679");

(cljs.core.async.t_cljs$core$async51679.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51679");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51679.
 */
cljs.core.async.__GT_t_cljs$core$async51679 = (function cljs$core$async$__GT_t_cljs$core$async51679(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51680){
return (new cljs.core.async.t_cljs$core$async51679(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51680));
});

}

return (new cljs.core.async.t_cljs$core$async51679(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50818__auto___52749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_51753){
var state_val_51754 = (state_51753[(1)]);
if((state_val_51754 === (7))){
var inst_51749 = (state_51753[(2)]);
var state_51753__$1 = state_51753;
var statearr_51755_52750 = state_51753__$1;
(statearr_51755_52750[(2)] = inst_51749);

(statearr_51755_52750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (20))){
var state_51753__$1 = state_51753;
var statearr_51756_52751 = state_51753__$1;
(statearr_51756_52751[(2)] = null);

(statearr_51756_52751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (1))){
var state_51753__$1 = state_51753;
var statearr_51757_52752 = state_51753__$1;
(statearr_51757_52752[(2)] = null);

(statearr_51757_52752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (24))){
var inst_51732 = (state_51753[(7)]);
var inst_51741 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51732);
var state_51753__$1 = state_51753;
var statearr_51758_52753 = state_51753__$1;
(statearr_51758_52753[(2)] = inst_51741);

(statearr_51758_52753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (4))){
var inst_51684 = (state_51753[(8)]);
var inst_51684__$1 = (state_51753[(2)]);
var inst_51685 = (inst_51684__$1 == null);
var state_51753__$1 = (function (){var statearr_51759 = state_51753;
(statearr_51759[(8)] = inst_51684__$1);

return statearr_51759;
})();
if(cljs.core.truth_(inst_51685)){
var statearr_51760_52754 = state_51753__$1;
(statearr_51760_52754[(1)] = (5));

} else {
var statearr_51761_52755 = state_51753__$1;
(statearr_51761_52755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (15))){
var inst_51726 = (state_51753[(2)]);
var state_51753__$1 = state_51753;
var statearr_51762_52756 = state_51753__$1;
(statearr_51762_52756[(2)] = inst_51726);

(statearr_51762_52756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (21))){
var inst_51746 = (state_51753[(2)]);
var state_51753__$1 = (function (){var statearr_51763 = state_51753;
(statearr_51763[(9)] = inst_51746);

return statearr_51763;
})();
var statearr_51764_52757 = state_51753__$1;
(statearr_51764_52757[(2)] = null);

(statearr_51764_52757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (13))){
var inst_51708 = (state_51753[(10)]);
var inst_51710 = cljs.core.chunked_seq_QMARK_(inst_51708);
var state_51753__$1 = state_51753;
if(inst_51710){
var statearr_51765_52758 = state_51753__$1;
(statearr_51765_52758[(1)] = (16));

} else {
var statearr_51766_52759 = state_51753__$1;
(statearr_51766_52759[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (22))){
var inst_51738 = (state_51753[(2)]);
var state_51753__$1 = state_51753;
if(cljs.core.truth_(inst_51738)){
var statearr_51767_52760 = state_51753__$1;
(statearr_51767_52760[(1)] = (23));

} else {
var statearr_51768_52761 = state_51753__$1;
(statearr_51768_52761[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (6))){
var inst_51684 = (state_51753[(8)]);
var inst_51732 = (state_51753[(7)]);
var inst_51734 = (state_51753[(11)]);
var inst_51732__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51684) : topic_fn.call(null,inst_51684));
var inst_51733 = cljs.core.deref(mults);
var inst_51734__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51733,inst_51732__$1);
var state_51753__$1 = (function (){var statearr_51769 = state_51753;
(statearr_51769[(7)] = inst_51732__$1);

(statearr_51769[(11)] = inst_51734__$1);

return statearr_51769;
})();
if(cljs.core.truth_(inst_51734__$1)){
var statearr_51770_52762 = state_51753__$1;
(statearr_51770_52762[(1)] = (19));

} else {
var statearr_51771_52763 = state_51753__$1;
(statearr_51771_52763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (25))){
var inst_51743 = (state_51753[(2)]);
var state_51753__$1 = state_51753;
var statearr_51772_52764 = state_51753__$1;
(statearr_51772_52764[(2)] = inst_51743);

(statearr_51772_52764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (17))){
var inst_51708 = (state_51753[(10)]);
var inst_51717 = cljs.core.first(inst_51708);
var inst_51718 = cljs.core.async.muxch_STAR_(inst_51717);
var inst_51719 = cljs.core.async.close_BANG_(inst_51718);
var inst_51720 = cljs.core.next(inst_51708);
var inst_51694 = inst_51720;
var inst_51695 = null;
var inst_51696 = (0);
var inst_51697 = (0);
var state_51753__$1 = (function (){var statearr_51773 = state_51753;
(statearr_51773[(12)] = inst_51719);

(statearr_51773[(13)] = inst_51696);

(statearr_51773[(14)] = inst_51695);

(statearr_51773[(15)] = inst_51697);

(statearr_51773[(16)] = inst_51694);

return statearr_51773;
})();
var statearr_51774_52765 = state_51753__$1;
(statearr_51774_52765[(2)] = null);

(statearr_51774_52765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (3))){
var inst_51751 = (state_51753[(2)]);
var state_51753__$1 = state_51753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51753__$1,inst_51751);
} else {
if((state_val_51754 === (12))){
var inst_51728 = (state_51753[(2)]);
var state_51753__$1 = state_51753;
var statearr_51775_52766 = state_51753__$1;
(statearr_51775_52766[(2)] = inst_51728);

(statearr_51775_52766[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (2))){
var state_51753__$1 = state_51753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51753__$1,(4),ch);
} else {
if((state_val_51754 === (23))){
var state_51753__$1 = state_51753;
var statearr_51776_52767 = state_51753__$1;
(statearr_51776_52767[(2)] = null);

(statearr_51776_52767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (19))){
var inst_51684 = (state_51753[(8)]);
var inst_51734 = (state_51753[(11)]);
var inst_51736 = cljs.core.async.muxch_STAR_(inst_51734);
var state_51753__$1 = state_51753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51753__$1,(22),inst_51736,inst_51684);
} else {
if((state_val_51754 === (11))){
var inst_51708 = (state_51753[(10)]);
var inst_51694 = (state_51753[(16)]);
var inst_51708__$1 = cljs.core.seq(inst_51694);
var state_51753__$1 = (function (){var statearr_51777 = state_51753;
(statearr_51777[(10)] = inst_51708__$1);

return statearr_51777;
})();
if(inst_51708__$1){
var statearr_51778_52768 = state_51753__$1;
(statearr_51778_52768[(1)] = (13));

} else {
var statearr_51779_52769 = state_51753__$1;
(statearr_51779_52769[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (9))){
var inst_51730 = (state_51753[(2)]);
var state_51753__$1 = state_51753;
var statearr_51780_52770 = state_51753__$1;
(statearr_51780_52770[(2)] = inst_51730);

(statearr_51780_52770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (5))){
var inst_51691 = cljs.core.deref(mults);
var inst_51692 = cljs.core.vals(inst_51691);
var inst_51693 = cljs.core.seq(inst_51692);
var inst_51694 = inst_51693;
var inst_51695 = null;
var inst_51696 = (0);
var inst_51697 = (0);
var state_51753__$1 = (function (){var statearr_51781 = state_51753;
(statearr_51781[(13)] = inst_51696);

(statearr_51781[(14)] = inst_51695);

(statearr_51781[(15)] = inst_51697);

(statearr_51781[(16)] = inst_51694);

return statearr_51781;
})();
var statearr_51782_52771 = state_51753__$1;
(statearr_51782_52771[(2)] = null);

(statearr_51782_52771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (14))){
var state_51753__$1 = state_51753;
var statearr_51786_52772 = state_51753__$1;
(statearr_51786_52772[(2)] = null);

(statearr_51786_52772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (16))){
var inst_51708 = (state_51753[(10)]);
var inst_51712 = cljs.core.chunk_first(inst_51708);
var inst_51713 = cljs.core.chunk_rest(inst_51708);
var inst_51714 = cljs.core.count(inst_51712);
var inst_51694 = inst_51713;
var inst_51695 = inst_51712;
var inst_51696 = inst_51714;
var inst_51697 = (0);
var state_51753__$1 = (function (){var statearr_51787 = state_51753;
(statearr_51787[(13)] = inst_51696);

(statearr_51787[(14)] = inst_51695);

(statearr_51787[(15)] = inst_51697);

(statearr_51787[(16)] = inst_51694);

return statearr_51787;
})();
var statearr_51788_52773 = state_51753__$1;
(statearr_51788_52773[(2)] = null);

(statearr_51788_52773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (10))){
var inst_51696 = (state_51753[(13)]);
var inst_51695 = (state_51753[(14)]);
var inst_51697 = (state_51753[(15)]);
var inst_51694 = (state_51753[(16)]);
var inst_51702 = cljs.core._nth(inst_51695,inst_51697);
var inst_51703 = cljs.core.async.muxch_STAR_(inst_51702);
var inst_51704 = cljs.core.async.close_BANG_(inst_51703);
var inst_51705 = (inst_51697 + (1));
var tmp51783 = inst_51696;
var tmp51784 = inst_51695;
var tmp51785 = inst_51694;
var inst_51694__$1 = tmp51785;
var inst_51695__$1 = tmp51784;
var inst_51696__$1 = tmp51783;
var inst_51697__$1 = inst_51705;
var state_51753__$1 = (function (){var statearr_51789 = state_51753;
(statearr_51789[(13)] = inst_51696__$1);

(statearr_51789[(14)] = inst_51695__$1);

(statearr_51789[(15)] = inst_51697__$1);

(statearr_51789[(16)] = inst_51694__$1);

(statearr_51789[(17)] = inst_51704);

return statearr_51789;
})();
var statearr_51790_52774 = state_51753__$1;
(statearr_51790_52774[(2)] = null);

(statearr_51790_52774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (18))){
var inst_51723 = (state_51753[(2)]);
var state_51753__$1 = state_51753;
var statearr_51791_52775 = state_51753__$1;
(statearr_51791_52775[(2)] = inst_51723);

(statearr_51791_52775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51754 === (8))){
var inst_51696 = (state_51753[(13)]);
var inst_51697 = (state_51753[(15)]);
var inst_51699 = (inst_51697 < inst_51696);
var inst_51700 = inst_51699;
var state_51753__$1 = state_51753;
if(cljs.core.truth_(inst_51700)){
var statearr_51792_52776 = state_51753__$1;
(statearr_51792_52776[(1)] = (10));

} else {
var statearr_51793_52777 = state_51753__$1;
(statearr_51793_52777[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50579__auto__ = null;
var cljs$core$async$state_machine__50579__auto____0 = (function (){
var statearr_51794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51794[(0)] = cljs$core$async$state_machine__50579__auto__);

(statearr_51794[(1)] = (1));

return statearr_51794;
});
var cljs$core$async$state_machine__50579__auto____1 = (function (state_51753){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_51753);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e51795){var ex__50582__auto__ = e51795;
var statearr_51796_52778 = state_51753;
(statearr_51796_52778[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_51753[(4)]))){
var statearr_51797_52779 = state_51753;
(statearr_51797_52779[(1)] = cljs.core.first((state_51753[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52780 = state_51753;
state_51753 = G__52780;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$state_machine__50579__auto__ = function(state_51753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50579__auto____1.call(this,state_51753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50579__auto____0;
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50579__auto____1;
return cljs$core$async$state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_51798 = f__50819__auto__();
(statearr_51798[(6)] = c__50818__auto___52749);

return statearr_51798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51800 = arguments.length;
switch (G__51800) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51802 = arguments.length;
switch (G__51802) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51804 = arguments.length;
switch (G__51804) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__50818__auto___52784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_51847){
var state_val_51848 = (state_51847[(1)]);
if((state_val_51848 === (7))){
var state_51847__$1 = state_51847;
var statearr_51849_52785 = state_51847__$1;
(statearr_51849_52785[(2)] = null);

(statearr_51849_52785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (1))){
var state_51847__$1 = state_51847;
var statearr_51850_52786 = state_51847__$1;
(statearr_51850_52786[(2)] = null);

(statearr_51850_52786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (4))){
var inst_51807 = (state_51847[(7)]);
var inst_51808 = (state_51847[(8)]);
var inst_51810 = (inst_51808 < inst_51807);
var state_51847__$1 = state_51847;
if(cljs.core.truth_(inst_51810)){
var statearr_51851_52787 = state_51847__$1;
(statearr_51851_52787[(1)] = (6));

} else {
var statearr_51852_52788 = state_51847__$1;
(statearr_51852_52788[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (15))){
var inst_51833 = (state_51847[(9)]);
var inst_51838 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51833);
var state_51847__$1 = state_51847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51847__$1,(17),out,inst_51838);
} else {
if((state_val_51848 === (13))){
var inst_51833 = (state_51847[(9)]);
var inst_51833__$1 = (state_51847[(2)]);
var inst_51834 = cljs.core.some(cljs.core.nil_QMARK_,inst_51833__$1);
var state_51847__$1 = (function (){var statearr_51854 = state_51847;
(statearr_51854[(9)] = inst_51833__$1);

return statearr_51854;
})();
if(cljs.core.truth_(inst_51834)){
var statearr_51855_52789 = state_51847__$1;
(statearr_51855_52789[(1)] = (14));

} else {
var statearr_51856_52790 = state_51847__$1;
(statearr_51856_52790[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (6))){
var state_51847__$1 = state_51847;
var statearr_51857_52791 = state_51847__$1;
(statearr_51857_52791[(2)] = null);

(statearr_51857_52791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (17))){
var inst_51840 = (state_51847[(2)]);
var state_51847__$1 = (function (){var statearr_51859 = state_51847;
(statearr_51859[(10)] = inst_51840);

return statearr_51859;
})();
var statearr_51860_52792 = state_51847__$1;
(statearr_51860_52792[(2)] = null);

(statearr_51860_52792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (3))){
var inst_51845 = (state_51847[(2)]);
var state_51847__$1 = state_51847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51847__$1,inst_51845);
} else {
if((state_val_51848 === (12))){
var _ = (function (){var statearr_51861 = state_51847;
(statearr_51861[(4)] = cljs.core.rest((state_51847[(4)])));

return statearr_51861;
})();
var state_51847__$1 = state_51847;
var ex51858 = (state_51847__$1[(2)]);
var statearr_51874_52793 = state_51847__$1;
(statearr_51874_52793[(5)] = ex51858);


if((ex51858 instanceof Object)){
var statearr_51886_52794 = state_51847__$1;
(statearr_51886_52794[(1)] = (11));

(statearr_51886_52794[(5)] = null);

} else {
throw ex51858;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (2))){
var inst_51806 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51807 = cnt;
var inst_51808 = (0);
var state_51847__$1 = (function (){var statearr_51887 = state_51847;
(statearr_51887[(11)] = inst_51806);

(statearr_51887[(7)] = inst_51807);

(statearr_51887[(8)] = inst_51808);

return statearr_51887;
})();
var statearr_51888_52795 = state_51847__$1;
(statearr_51888_52795[(2)] = null);

(statearr_51888_52795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (11))){
var inst_51812 = (state_51847[(2)]);
var inst_51813 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51847__$1 = (function (){var statearr_51889 = state_51847;
(statearr_51889[(12)] = inst_51812);

return statearr_51889;
})();
var statearr_51890_52796 = state_51847__$1;
(statearr_51890_52796[(2)] = inst_51813);

(statearr_51890_52796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (9))){
var inst_51808 = (state_51847[(8)]);
var _ = (function (){var statearr_51891 = state_51847;
(statearr_51891[(4)] = cljs.core.cons((12),(state_51847[(4)])));

return statearr_51891;
})();
var inst_51819 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51808) : chs__$1.call(null,inst_51808));
var inst_51820 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51808) : done.call(null,inst_51808));
var inst_51821 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51819,inst_51820);
var ___$1 = (function (){var statearr_51892 = state_51847;
(statearr_51892[(4)] = cljs.core.rest((state_51847[(4)])));

return statearr_51892;
})();
var state_51847__$1 = state_51847;
var statearr_51893_52797 = state_51847__$1;
(statearr_51893_52797[(2)] = inst_51821);

(statearr_51893_52797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (5))){
var inst_51831 = (state_51847[(2)]);
var state_51847__$1 = (function (){var statearr_51894 = state_51847;
(statearr_51894[(13)] = inst_51831);

return statearr_51894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51847__$1,(13),dchan);
} else {
if((state_val_51848 === (14))){
var inst_51836 = cljs.core.async.close_BANG_(out);
var state_51847__$1 = state_51847;
var statearr_51940_52798 = state_51847__$1;
(statearr_51940_52798[(2)] = inst_51836);

(statearr_51940_52798[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (16))){
var inst_51843 = (state_51847[(2)]);
var state_51847__$1 = state_51847;
var statearr_51962_52799 = state_51847__$1;
(statearr_51962_52799[(2)] = inst_51843);

(statearr_51962_52799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (10))){
var inst_51808 = (state_51847[(8)]);
var inst_51824 = (state_51847[(2)]);
var inst_51825 = (inst_51808 + (1));
var inst_51808__$1 = inst_51825;
var state_51847__$1 = (function (){var statearr_51963 = state_51847;
(statearr_51963[(14)] = inst_51824);

(statearr_51963[(8)] = inst_51808__$1);

return statearr_51963;
})();
var statearr_51964_52800 = state_51847__$1;
(statearr_51964_52800[(2)] = null);

(statearr_51964_52800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51848 === (8))){
var inst_51829 = (state_51847[(2)]);
var state_51847__$1 = state_51847;
var statearr_51965_52801 = state_51847__$1;
(statearr_51965_52801[(2)] = inst_51829);

(statearr_51965_52801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50579__auto__ = null;
var cljs$core$async$state_machine__50579__auto____0 = (function (){
var statearr_51966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51966[(0)] = cljs$core$async$state_machine__50579__auto__);

(statearr_51966[(1)] = (1));

return statearr_51966;
});
var cljs$core$async$state_machine__50579__auto____1 = (function (state_51847){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_51847);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e51968){var ex__50582__auto__ = e51968;
var statearr_51969_52804 = state_51847;
(statearr_51969_52804[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_51847[(4)]))){
var statearr_51970_52805 = state_51847;
(statearr_51970_52805[(1)] = cljs.core.first((state_51847[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52806 = state_51847;
state_51847 = G__52806;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$state_machine__50579__auto__ = function(state_51847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50579__auto____1.call(this,state_51847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50579__auto____0;
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50579__auto____1;
return cljs$core$async$state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_51979 = f__50819__auto__();
(statearr_51979[(6)] = c__50818__auto___52784);

return statearr_51979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51986 = arguments.length;
switch (G__51986) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50818__auto___52809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_52018){
var state_val_52019 = (state_52018[(1)]);
if((state_val_52019 === (7))){
var inst_51998 = (state_52018[(7)]);
var inst_51997 = (state_52018[(8)]);
var inst_51997__$1 = (state_52018[(2)]);
var inst_51998__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51997__$1,(0),null);
var inst_51999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51997__$1,(1),null);
var inst_52000 = (inst_51998__$1 == null);
var state_52018__$1 = (function (){var statearr_52021 = state_52018;
(statearr_52021[(9)] = inst_51999);

(statearr_52021[(7)] = inst_51998__$1);

(statearr_52021[(8)] = inst_51997__$1);

return statearr_52021;
})();
if(cljs.core.truth_(inst_52000)){
var statearr_52022_52814 = state_52018__$1;
(statearr_52022_52814[(1)] = (8));

} else {
var statearr_52023_52815 = state_52018__$1;
(statearr_52023_52815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52019 === (1))){
var inst_51987 = cljs.core.vec(chs);
var inst_51988 = inst_51987;
var state_52018__$1 = (function (){var statearr_52024 = state_52018;
(statearr_52024[(10)] = inst_51988);

return statearr_52024;
})();
var statearr_52025_52816 = state_52018__$1;
(statearr_52025_52816[(2)] = null);

(statearr_52025_52816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52019 === (4))){
var inst_51988 = (state_52018[(10)]);
var state_52018__$1 = state_52018;
return cljs.core.async.ioc_alts_BANG_(state_52018__$1,(7),inst_51988);
} else {
if((state_val_52019 === (6))){
var inst_52014 = (state_52018[(2)]);
var state_52018__$1 = state_52018;
var statearr_52026_52817 = state_52018__$1;
(statearr_52026_52817[(2)] = inst_52014);

(statearr_52026_52817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52019 === (3))){
var inst_52016 = (state_52018[(2)]);
var state_52018__$1 = state_52018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52018__$1,inst_52016);
} else {
if((state_val_52019 === (2))){
var inst_51988 = (state_52018[(10)]);
var inst_51990 = cljs.core.count(inst_51988);
var inst_51991 = (inst_51990 > (0));
var state_52018__$1 = state_52018;
if(cljs.core.truth_(inst_51991)){
var statearr_52028_52818 = state_52018__$1;
(statearr_52028_52818[(1)] = (4));

} else {
var statearr_52029_52819 = state_52018__$1;
(statearr_52029_52819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52019 === (11))){
var inst_51988 = (state_52018[(10)]);
var inst_52007 = (state_52018[(2)]);
var tmp52027 = inst_51988;
var inst_51988__$1 = tmp52027;
var state_52018__$1 = (function (){var statearr_52030 = state_52018;
(statearr_52030[(11)] = inst_52007);

(statearr_52030[(10)] = inst_51988__$1);

return statearr_52030;
})();
var statearr_52031_52820 = state_52018__$1;
(statearr_52031_52820[(2)] = null);

(statearr_52031_52820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52019 === (9))){
var inst_51998 = (state_52018[(7)]);
var state_52018__$1 = state_52018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52018__$1,(11),out,inst_51998);
} else {
if((state_val_52019 === (5))){
var inst_52012 = cljs.core.async.close_BANG_(out);
var state_52018__$1 = state_52018;
var statearr_52032_52821 = state_52018__$1;
(statearr_52032_52821[(2)] = inst_52012);

(statearr_52032_52821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52019 === (10))){
var inst_52010 = (state_52018[(2)]);
var state_52018__$1 = state_52018;
var statearr_52033_52822 = state_52018__$1;
(statearr_52033_52822[(2)] = inst_52010);

(statearr_52033_52822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52019 === (8))){
var inst_51999 = (state_52018[(9)]);
var inst_51998 = (state_52018[(7)]);
var inst_51997 = (state_52018[(8)]);
var inst_51988 = (state_52018[(10)]);
var inst_52002 = (function (){var cs = inst_51988;
var vec__51993 = inst_51997;
var v = inst_51998;
var c = inst_51999;
return (function (p1__51980_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51980_SHARP_);
});
})();
var inst_52003 = cljs.core.filterv(inst_52002,inst_51988);
var inst_51988__$1 = inst_52003;
var state_52018__$1 = (function (){var statearr_52034 = state_52018;
(statearr_52034[(10)] = inst_51988__$1);

return statearr_52034;
})();
var statearr_52035_52823 = state_52018__$1;
(statearr_52035_52823[(2)] = null);

(statearr_52035_52823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50579__auto__ = null;
var cljs$core$async$state_machine__50579__auto____0 = (function (){
var statearr_52036 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52036[(0)] = cljs$core$async$state_machine__50579__auto__);

(statearr_52036[(1)] = (1));

return statearr_52036;
});
var cljs$core$async$state_machine__50579__auto____1 = (function (state_52018){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_52018);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e52037){var ex__50582__auto__ = e52037;
var statearr_52038_52824 = state_52018;
(statearr_52038_52824[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_52018[(4)]))){
var statearr_52039_52825 = state_52018;
(statearr_52039_52825[(1)] = cljs.core.first((state_52018[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52826 = state_52018;
state_52018 = G__52826;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$state_machine__50579__auto__ = function(state_52018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50579__auto____1.call(this,state_52018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50579__auto____0;
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50579__auto____1;
return cljs$core$async$state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_52040 = f__50819__auto__();
(statearr_52040[(6)] = c__50818__auto___52809);

return statearr_52040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__52042 = arguments.length;
switch (G__52042) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50818__auto___52828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_52066){
var state_val_52067 = (state_52066[(1)]);
if((state_val_52067 === (7))){
var inst_52048 = (state_52066[(7)]);
var inst_52048__$1 = (state_52066[(2)]);
var inst_52049 = (inst_52048__$1 == null);
var inst_52050 = cljs.core.not(inst_52049);
var state_52066__$1 = (function (){var statearr_52068 = state_52066;
(statearr_52068[(7)] = inst_52048__$1);

return statearr_52068;
})();
if(inst_52050){
var statearr_52069_52829 = state_52066__$1;
(statearr_52069_52829[(1)] = (8));

} else {
var statearr_52070_52830 = state_52066__$1;
(statearr_52070_52830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52067 === (1))){
var inst_52043 = (0);
var state_52066__$1 = (function (){var statearr_52071 = state_52066;
(statearr_52071[(8)] = inst_52043);

return statearr_52071;
})();
var statearr_52072_52831 = state_52066__$1;
(statearr_52072_52831[(2)] = null);

(statearr_52072_52831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52067 === (4))){
var state_52066__$1 = state_52066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52066__$1,(7),ch);
} else {
if((state_val_52067 === (6))){
var inst_52061 = (state_52066[(2)]);
var state_52066__$1 = state_52066;
var statearr_52073_52832 = state_52066__$1;
(statearr_52073_52832[(2)] = inst_52061);

(statearr_52073_52832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52067 === (3))){
var inst_52063 = (state_52066[(2)]);
var inst_52064 = cljs.core.async.close_BANG_(out);
var state_52066__$1 = (function (){var statearr_52074 = state_52066;
(statearr_52074[(9)] = inst_52063);

return statearr_52074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52066__$1,inst_52064);
} else {
if((state_val_52067 === (2))){
var inst_52043 = (state_52066[(8)]);
var inst_52045 = (inst_52043 < n);
var state_52066__$1 = state_52066;
if(cljs.core.truth_(inst_52045)){
var statearr_52075_52834 = state_52066__$1;
(statearr_52075_52834[(1)] = (4));

} else {
var statearr_52076_52835 = state_52066__$1;
(statearr_52076_52835[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52067 === (11))){
var inst_52043 = (state_52066[(8)]);
var inst_52053 = (state_52066[(2)]);
var inst_52054 = (inst_52043 + (1));
var inst_52043__$1 = inst_52054;
var state_52066__$1 = (function (){var statearr_52077 = state_52066;
(statearr_52077[(10)] = inst_52053);

(statearr_52077[(8)] = inst_52043__$1);

return statearr_52077;
})();
var statearr_52078_52837 = state_52066__$1;
(statearr_52078_52837[(2)] = null);

(statearr_52078_52837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52067 === (9))){
var state_52066__$1 = state_52066;
var statearr_52079_52838 = state_52066__$1;
(statearr_52079_52838[(2)] = null);

(statearr_52079_52838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52067 === (5))){
var state_52066__$1 = state_52066;
var statearr_52080_52839 = state_52066__$1;
(statearr_52080_52839[(2)] = null);

(statearr_52080_52839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52067 === (10))){
var inst_52058 = (state_52066[(2)]);
var state_52066__$1 = state_52066;
var statearr_52081_52840 = state_52066__$1;
(statearr_52081_52840[(2)] = inst_52058);

(statearr_52081_52840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52067 === (8))){
var inst_52048 = (state_52066[(7)]);
var state_52066__$1 = state_52066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52066__$1,(11),out,inst_52048);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50579__auto__ = null;
var cljs$core$async$state_machine__50579__auto____0 = (function (){
var statearr_52082 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52082[(0)] = cljs$core$async$state_machine__50579__auto__);

(statearr_52082[(1)] = (1));

return statearr_52082;
});
var cljs$core$async$state_machine__50579__auto____1 = (function (state_52066){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_52066);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e52083){var ex__50582__auto__ = e52083;
var statearr_52084_52841 = state_52066;
(statearr_52084_52841[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_52066[(4)]))){
var statearr_52085_52842 = state_52066;
(statearr_52085_52842[(1)] = cljs.core.first((state_52066[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52843 = state_52066;
state_52066 = G__52843;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$state_machine__50579__auto__ = function(state_52066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50579__auto____1.call(this,state_52066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50579__auto____0;
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50579__auto____1;
return cljs$core$async$state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_52086 = f__50819__auto__();
(statearr_52086[(6)] = c__50818__auto___52828);

return statearr_52086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52088 = (function (f,ch,meta52089){
this.f = f;
this.ch = ch;
this.meta52089 = meta52089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52090,meta52089__$1){
var self__ = this;
var _52090__$1 = this;
return (new cljs.core.async.t_cljs$core$async52088(self__.f,self__.ch,meta52089__$1));
}));

(cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52090){
var self__ = this;
var _52090__$1 = this;
return self__.meta52089;
}));

(cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52091 = (function (f,ch,meta52089,_,fn1,meta52092){
this.f = f;
this.ch = ch;
this.meta52089 = meta52089;
this._ = _;
this.fn1 = fn1;
this.meta52092 = meta52092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52093,meta52092__$1){
var self__ = this;
var _52093__$1 = this;
return (new cljs.core.async.t_cljs$core$async52091(self__.f,self__.ch,self__.meta52089,self__._,self__.fn1,meta52092__$1));
}));

(cljs.core.async.t_cljs$core$async52091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52093){
var self__ = this;
var _52093__$1 = this;
return self__.meta52092;
}));

(cljs.core.async.t_cljs$core$async52091.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52091.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async52091.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52091.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__52087_SHARP_){
var G__52094 = (((p1__52087_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52087_SHARP_) : self__.f.call(null,p1__52087_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52094) : f1.call(null,G__52094));
});
}));

(cljs.core.async.t_cljs$core$async52091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52089","meta52089",-527693808,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52088","cljs.core.async/t_cljs$core$async52088",-765222189,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52092","meta52092",1016978820,null)], null);
}));

(cljs.core.async.t_cljs$core$async52091.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52091");

(cljs.core.async.t_cljs$core$async52091.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async52091");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52091.
 */
cljs.core.async.__GT_t_cljs$core$async52091 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52091(f__$1,ch__$1,meta52089__$1,___$2,fn1__$1,meta52092){
return (new cljs.core.async.t_cljs$core$async52091(f__$1,ch__$1,meta52089__$1,___$2,fn1__$1,meta52092));
});

}

return (new cljs.core.async.t_cljs$core$async52091(self__.f,self__.ch,self__.meta52089,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52095 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52095) : self__.f.call(null,G__52095));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52088.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async52088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52089","meta52089",-527693808,null)], null);
}));

(cljs.core.async.t_cljs$core$async52088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52088");

(cljs.core.async.t_cljs$core$async52088.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async52088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52088.
 */
cljs.core.async.__GT_t_cljs$core$async52088 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52088(f__$1,ch__$1,meta52089){
return (new cljs.core.async.t_cljs$core$async52088(f__$1,ch__$1,meta52089));
});

}

return (new cljs.core.async.t_cljs$core$async52088(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52096 = (function (f,ch,meta52097){
this.f = f;
this.ch = ch;
this.meta52097 = meta52097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52098,meta52097__$1){
var self__ = this;
var _52098__$1 = this;
return (new cljs.core.async.t_cljs$core$async52096(self__.f,self__.ch,meta52097__$1));
}));

(cljs.core.async.t_cljs$core$async52096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52098){
var self__ = this;
var _52098__$1 = this;
return self__.meta52097;
}));

(cljs.core.async.t_cljs$core$async52096.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52096.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52096.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async52096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52097","meta52097",865857437,null)], null);
}));

(cljs.core.async.t_cljs$core$async52096.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52096");

(cljs.core.async.t_cljs$core$async52096.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async52096");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52096.
 */
cljs.core.async.__GT_t_cljs$core$async52096 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52096(f__$1,ch__$1,meta52097){
return (new cljs.core.async.t_cljs$core$async52096(f__$1,ch__$1,meta52097));
});

}

return (new cljs.core.async.t_cljs$core$async52096(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52099 = (function (p,ch,meta52100){
this.p = p;
this.ch = ch;
this.meta52100 = meta52100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52101,meta52100__$1){
var self__ = this;
var _52101__$1 = this;
return (new cljs.core.async.t_cljs$core$async52099(self__.p,self__.ch,meta52100__$1));
}));

(cljs.core.async.t_cljs$core$async52099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52101){
var self__ = this;
var _52101__$1 = this;
return self__.meta52100;
}));

(cljs.core.async.t_cljs$core$async52099.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52099.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52099.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52099.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async52099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52100","meta52100",-1249977893,null)], null);
}));

(cljs.core.async.t_cljs$core$async52099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52099");

(cljs.core.async.t_cljs$core$async52099.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async52099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52099.
 */
cljs.core.async.__GT_t_cljs$core$async52099 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52099(p__$1,ch__$1,meta52100){
return (new cljs.core.async.t_cljs$core$async52099(p__$1,ch__$1,meta52100));
});

}

return (new cljs.core.async.t_cljs$core$async52099(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__52103 = arguments.length;
switch (G__52103) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50818__auto___52858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_52124){
var state_val_52125 = (state_52124[(1)]);
if((state_val_52125 === (7))){
var inst_52120 = (state_52124[(2)]);
var state_52124__$1 = state_52124;
var statearr_52126_52859 = state_52124__$1;
(statearr_52126_52859[(2)] = inst_52120);

(statearr_52126_52859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52125 === (1))){
var state_52124__$1 = state_52124;
var statearr_52127_52863 = state_52124__$1;
(statearr_52127_52863[(2)] = null);

(statearr_52127_52863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52125 === (4))){
var inst_52106 = (state_52124[(7)]);
var inst_52106__$1 = (state_52124[(2)]);
var inst_52107 = (inst_52106__$1 == null);
var state_52124__$1 = (function (){var statearr_52128 = state_52124;
(statearr_52128[(7)] = inst_52106__$1);

return statearr_52128;
})();
if(cljs.core.truth_(inst_52107)){
var statearr_52129_52864 = state_52124__$1;
(statearr_52129_52864[(1)] = (5));

} else {
var statearr_52130_52865 = state_52124__$1;
(statearr_52130_52865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52125 === (6))){
var inst_52106 = (state_52124[(7)]);
var inst_52111 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52106) : p.call(null,inst_52106));
var state_52124__$1 = state_52124;
if(cljs.core.truth_(inst_52111)){
var statearr_52131_52866 = state_52124__$1;
(statearr_52131_52866[(1)] = (8));

} else {
var statearr_52132_52867 = state_52124__$1;
(statearr_52132_52867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52125 === (3))){
var inst_52122 = (state_52124[(2)]);
var state_52124__$1 = state_52124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52124__$1,inst_52122);
} else {
if((state_val_52125 === (2))){
var state_52124__$1 = state_52124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52124__$1,(4),ch);
} else {
if((state_val_52125 === (11))){
var inst_52114 = (state_52124[(2)]);
var state_52124__$1 = state_52124;
var statearr_52133_52869 = state_52124__$1;
(statearr_52133_52869[(2)] = inst_52114);

(statearr_52133_52869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52125 === (9))){
var state_52124__$1 = state_52124;
var statearr_52134_52873 = state_52124__$1;
(statearr_52134_52873[(2)] = null);

(statearr_52134_52873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52125 === (5))){
var inst_52109 = cljs.core.async.close_BANG_(out);
var state_52124__$1 = state_52124;
var statearr_52135_52877 = state_52124__$1;
(statearr_52135_52877[(2)] = inst_52109);

(statearr_52135_52877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52125 === (10))){
var inst_52117 = (state_52124[(2)]);
var state_52124__$1 = (function (){var statearr_52136 = state_52124;
(statearr_52136[(8)] = inst_52117);

return statearr_52136;
})();
var statearr_52137_52878 = state_52124__$1;
(statearr_52137_52878[(2)] = null);

(statearr_52137_52878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52125 === (8))){
var inst_52106 = (state_52124[(7)]);
var state_52124__$1 = state_52124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52124__$1,(11),out,inst_52106);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50579__auto__ = null;
var cljs$core$async$state_machine__50579__auto____0 = (function (){
var statearr_52138 = [null,null,null,null,null,null,null,null,null];
(statearr_52138[(0)] = cljs$core$async$state_machine__50579__auto__);

(statearr_52138[(1)] = (1));

return statearr_52138;
});
var cljs$core$async$state_machine__50579__auto____1 = (function (state_52124){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_52124);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e52139){var ex__50582__auto__ = e52139;
var statearr_52140_52879 = state_52124;
(statearr_52140_52879[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_52124[(4)]))){
var statearr_52141_52880 = state_52124;
(statearr_52141_52880[(1)] = cljs.core.first((state_52124[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52881 = state_52124;
state_52124 = G__52881;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$state_machine__50579__auto__ = function(state_52124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50579__auto____1.call(this,state_52124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50579__auto____0;
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50579__auto____1;
return cljs$core$async$state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_52142 = f__50819__auto__();
(statearr_52142[(6)] = c__50818__auto___52858);

return statearr_52142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52144 = arguments.length;
switch (G__52144) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50818__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_52206){
var state_val_52207 = (state_52206[(1)]);
if((state_val_52207 === (7))){
var inst_52202 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
var statearr_52208_52889 = state_52206__$1;
(statearr_52208_52889[(2)] = inst_52202);

(statearr_52208_52889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (20))){
var inst_52172 = (state_52206[(7)]);
var inst_52183 = (state_52206[(2)]);
var inst_52184 = cljs.core.next(inst_52172);
var inst_52158 = inst_52184;
var inst_52159 = null;
var inst_52160 = (0);
var inst_52161 = (0);
var state_52206__$1 = (function (){var statearr_52209 = state_52206;
(statearr_52209[(8)] = inst_52158);

(statearr_52209[(9)] = inst_52160);

(statearr_52209[(10)] = inst_52183);

(statearr_52209[(11)] = inst_52159);

(statearr_52209[(12)] = inst_52161);

return statearr_52209;
})();
var statearr_52210_52890 = state_52206__$1;
(statearr_52210_52890[(2)] = null);

(statearr_52210_52890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (1))){
var state_52206__$1 = state_52206;
var statearr_52211_52894 = state_52206__$1;
(statearr_52211_52894[(2)] = null);

(statearr_52211_52894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (4))){
var inst_52147 = (state_52206[(13)]);
var inst_52147__$1 = (state_52206[(2)]);
var inst_52148 = (inst_52147__$1 == null);
var state_52206__$1 = (function (){var statearr_52212 = state_52206;
(statearr_52212[(13)] = inst_52147__$1);

return statearr_52212;
})();
if(cljs.core.truth_(inst_52148)){
var statearr_52213_52895 = state_52206__$1;
(statearr_52213_52895[(1)] = (5));

} else {
var statearr_52215_52896 = state_52206__$1;
(statearr_52215_52896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (15))){
var state_52206__$1 = state_52206;
var statearr_52220_52897 = state_52206__$1;
(statearr_52220_52897[(2)] = null);

(statearr_52220_52897[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (21))){
var state_52206__$1 = state_52206;
var statearr_52221_52898 = state_52206__$1;
(statearr_52221_52898[(2)] = null);

(statearr_52221_52898[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (13))){
var inst_52158 = (state_52206[(8)]);
var inst_52160 = (state_52206[(9)]);
var inst_52159 = (state_52206[(11)]);
var inst_52161 = (state_52206[(12)]);
var inst_52168 = (state_52206[(2)]);
var inst_52169 = (inst_52161 + (1));
var tmp52217 = inst_52158;
var tmp52218 = inst_52160;
var tmp52219 = inst_52159;
var inst_52158__$1 = tmp52217;
var inst_52159__$1 = tmp52219;
var inst_52160__$1 = tmp52218;
var inst_52161__$1 = inst_52169;
var state_52206__$1 = (function (){var statearr_52222 = state_52206;
(statearr_52222[(8)] = inst_52158__$1);

(statearr_52222[(9)] = inst_52160__$1);

(statearr_52222[(14)] = inst_52168);

(statearr_52222[(11)] = inst_52159__$1);

(statearr_52222[(12)] = inst_52161__$1);

return statearr_52222;
})();
var statearr_52223_52899 = state_52206__$1;
(statearr_52223_52899[(2)] = null);

(statearr_52223_52899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (22))){
var state_52206__$1 = state_52206;
var statearr_52224_52900 = state_52206__$1;
(statearr_52224_52900[(2)] = null);

(statearr_52224_52900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (6))){
var inst_52147 = (state_52206[(13)]);
var inst_52156 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52147) : f.call(null,inst_52147));
var inst_52157 = cljs.core.seq(inst_52156);
var inst_52158 = inst_52157;
var inst_52159 = null;
var inst_52160 = (0);
var inst_52161 = (0);
var state_52206__$1 = (function (){var statearr_52226 = state_52206;
(statearr_52226[(8)] = inst_52158);

(statearr_52226[(9)] = inst_52160);

(statearr_52226[(11)] = inst_52159);

(statearr_52226[(12)] = inst_52161);

return statearr_52226;
})();
var statearr_52227_52902 = state_52206__$1;
(statearr_52227_52902[(2)] = null);

(statearr_52227_52902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (17))){
var inst_52172 = (state_52206[(7)]);
var inst_52176 = cljs.core.chunk_first(inst_52172);
var inst_52177 = cljs.core.chunk_rest(inst_52172);
var inst_52178 = cljs.core.count(inst_52176);
var inst_52158 = inst_52177;
var inst_52159 = inst_52176;
var inst_52160 = inst_52178;
var inst_52161 = (0);
var state_52206__$1 = (function (){var statearr_52229 = state_52206;
(statearr_52229[(8)] = inst_52158);

(statearr_52229[(9)] = inst_52160);

(statearr_52229[(11)] = inst_52159);

(statearr_52229[(12)] = inst_52161);

return statearr_52229;
})();
var statearr_52231_52903 = state_52206__$1;
(statearr_52231_52903[(2)] = null);

(statearr_52231_52903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (3))){
var inst_52204 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52206__$1,inst_52204);
} else {
if((state_val_52207 === (12))){
var inst_52192 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
var statearr_52232_52904 = state_52206__$1;
(statearr_52232_52904[(2)] = inst_52192);

(statearr_52232_52904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (2))){
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52206__$1,(4),in$);
} else {
if((state_val_52207 === (23))){
var inst_52200 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
var statearr_52233_52905 = state_52206__$1;
(statearr_52233_52905[(2)] = inst_52200);

(statearr_52233_52905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (19))){
var inst_52187 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
var statearr_52234_52906 = state_52206__$1;
(statearr_52234_52906[(2)] = inst_52187);

(statearr_52234_52906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (11))){
var inst_52158 = (state_52206[(8)]);
var inst_52172 = (state_52206[(7)]);
var inst_52172__$1 = cljs.core.seq(inst_52158);
var state_52206__$1 = (function (){var statearr_52235 = state_52206;
(statearr_52235[(7)] = inst_52172__$1);

return statearr_52235;
})();
if(inst_52172__$1){
var statearr_52236_52907 = state_52206__$1;
(statearr_52236_52907[(1)] = (14));

} else {
var statearr_52237_52908 = state_52206__$1;
(statearr_52237_52908[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (9))){
var inst_52194 = (state_52206[(2)]);
var inst_52195 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_52206__$1 = (function (){var statearr_52238 = state_52206;
(statearr_52238[(15)] = inst_52194);

return statearr_52238;
})();
if(cljs.core.truth_(inst_52195)){
var statearr_52239_52909 = state_52206__$1;
(statearr_52239_52909[(1)] = (21));

} else {
var statearr_52240_52910 = state_52206__$1;
(statearr_52240_52910[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (5))){
var inst_52150 = cljs.core.async.close_BANG_(out);
var state_52206__$1 = state_52206;
var statearr_52241_52911 = state_52206__$1;
(statearr_52241_52911[(2)] = inst_52150);

(statearr_52241_52911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (14))){
var inst_52172 = (state_52206[(7)]);
var inst_52174 = cljs.core.chunked_seq_QMARK_(inst_52172);
var state_52206__$1 = state_52206;
if(inst_52174){
var statearr_52242_52912 = state_52206__$1;
(statearr_52242_52912[(1)] = (17));

} else {
var statearr_52243_52913 = state_52206__$1;
(statearr_52243_52913[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (16))){
var inst_52190 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
var statearr_52244_52914 = state_52206__$1;
(statearr_52244_52914[(2)] = inst_52190);

(statearr_52244_52914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (10))){
var inst_52159 = (state_52206[(11)]);
var inst_52161 = (state_52206[(12)]);
var inst_52166 = cljs.core._nth(inst_52159,inst_52161);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52206__$1,(13),out,inst_52166);
} else {
if((state_val_52207 === (18))){
var inst_52172 = (state_52206[(7)]);
var inst_52181 = cljs.core.first(inst_52172);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52206__$1,(20),out,inst_52181);
} else {
if((state_val_52207 === (8))){
var inst_52160 = (state_52206[(9)]);
var inst_52161 = (state_52206[(12)]);
var inst_52163 = (inst_52161 < inst_52160);
var inst_52164 = inst_52163;
var state_52206__$1 = state_52206;
if(cljs.core.truth_(inst_52164)){
var statearr_52245_52915 = state_52206__$1;
(statearr_52245_52915[(1)] = (10));

} else {
var statearr_52246_52916 = state_52206__$1;
(statearr_52246_52916[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50579__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50579__auto____0 = (function (){
var statearr_52247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52247[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50579__auto__);

(statearr_52247[(1)] = (1));

return statearr_52247;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50579__auto____1 = (function (state_52206){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_52206);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e52248){var ex__50582__auto__ = e52248;
var statearr_52249_52917 = state_52206;
(statearr_52249_52917[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_52206[(4)]))){
var statearr_52250_52918 = state_52206;
(statearr_52250_52918[(1)] = cljs.core.first((state_52206[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52919 = state_52206;
state_52206 = G__52919;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50579__auto__ = function(state_52206){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50579__auto____1.call(this,state_52206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50579__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50579__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_52251 = f__50819__auto__();
(statearr_52251[(6)] = c__50818__auto__);

return statearr_52251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));

return c__50818__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52253 = arguments.length;
switch (G__52253) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52255 = arguments.length;
switch (G__52255) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52257 = arguments.length;
switch (G__52257) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50818__auto___52923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_52281){
var state_val_52282 = (state_52281[(1)]);
if((state_val_52282 === (7))){
var inst_52276 = (state_52281[(2)]);
var state_52281__$1 = state_52281;
var statearr_52283_52924 = state_52281__$1;
(statearr_52283_52924[(2)] = inst_52276);

(statearr_52283_52924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52282 === (1))){
var inst_52258 = null;
var state_52281__$1 = (function (){var statearr_52284 = state_52281;
(statearr_52284[(7)] = inst_52258);

return statearr_52284;
})();
var statearr_52285_52925 = state_52281__$1;
(statearr_52285_52925[(2)] = null);

(statearr_52285_52925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52282 === (4))){
var inst_52261 = (state_52281[(8)]);
var inst_52261__$1 = (state_52281[(2)]);
var inst_52262 = (inst_52261__$1 == null);
var inst_52263 = cljs.core.not(inst_52262);
var state_52281__$1 = (function (){var statearr_52286 = state_52281;
(statearr_52286[(8)] = inst_52261__$1);

return statearr_52286;
})();
if(inst_52263){
var statearr_52287_52926 = state_52281__$1;
(statearr_52287_52926[(1)] = (5));

} else {
var statearr_52288_52927 = state_52281__$1;
(statearr_52288_52927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52282 === (6))){
var state_52281__$1 = state_52281;
var statearr_52289_52928 = state_52281__$1;
(statearr_52289_52928[(2)] = null);

(statearr_52289_52928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52282 === (3))){
var inst_52278 = (state_52281[(2)]);
var inst_52279 = cljs.core.async.close_BANG_(out);
var state_52281__$1 = (function (){var statearr_52290 = state_52281;
(statearr_52290[(9)] = inst_52278);

return statearr_52290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52281__$1,inst_52279);
} else {
if((state_val_52282 === (2))){
var state_52281__$1 = state_52281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52281__$1,(4),ch);
} else {
if((state_val_52282 === (11))){
var inst_52261 = (state_52281[(8)]);
var inst_52270 = (state_52281[(2)]);
var inst_52258 = inst_52261;
var state_52281__$1 = (function (){var statearr_52291 = state_52281;
(statearr_52291[(7)] = inst_52258);

(statearr_52291[(10)] = inst_52270);

return statearr_52291;
})();
var statearr_52292_52929 = state_52281__$1;
(statearr_52292_52929[(2)] = null);

(statearr_52292_52929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52282 === (9))){
var inst_52261 = (state_52281[(8)]);
var state_52281__$1 = state_52281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52281__$1,(11),out,inst_52261);
} else {
if((state_val_52282 === (5))){
var inst_52258 = (state_52281[(7)]);
var inst_52261 = (state_52281[(8)]);
var inst_52265 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52261,inst_52258);
var state_52281__$1 = state_52281;
if(inst_52265){
var statearr_52294_52930 = state_52281__$1;
(statearr_52294_52930[(1)] = (8));

} else {
var statearr_52295_52931 = state_52281__$1;
(statearr_52295_52931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52282 === (10))){
var inst_52273 = (state_52281[(2)]);
var state_52281__$1 = state_52281;
var statearr_52296_52932 = state_52281__$1;
(statearr_52296_52932[(2)] = inst_52273);

(statearr_52296_52932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52282 === (8))){
var inst_52258 = (state_52281[(7)]);
var tmp52293 = inst_52258;
var inst_52258__$1 = tmp52293;
var state_52281__$1 = (function (){var statearr_52298 = state_52281;
(statearr_52298[(7)] = inst_52258__$1);

return statearr_52298;
})();
var statearr_52299_52933 = state_52281__$1;
(statearr_52299_52933[(2)] = null);

(statearr_52299_52933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50579__auto__ = null;
var cljs$core$async$state_machine__50579__auto____0 = (function (){
var statearr_52301 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52301[(0)] = cljs$core$async$state_machine__50579__auto__);

(statearr_52301[(1)] = (1));

return statearr_52301;
});
var cljs$core$async$state_machine__50579__auto____1 = (function (state_52281){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_52281);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e52302){var ex__50582__auto__ = e52302;
var statearr_52303_52934 = state_52281;
(statearr_52303_52934[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_52281[(4)]))){
var statearr_52305_52936 = state_52281;
(statearr_52305_52936[(1)] = cljs.core.first((state_52281[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52937 = state_52281;
state_52281 = G__52937;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$state_machine__50579__auto__ = function(state_52281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50579__auto____1.call(this,state_52281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50579__auto____0;
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50579__auto____1;
return cljs$core$async$state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_52306 = f__50819__auto__();
(statearr_52306[(6)] = c__50818__auto___52923);

return statearr_52306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52308 = arguments.length;
switch (G__52308) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50818__auto___52939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_52346){
var state_val_52347 = (state_52346[(1)]);
if((state_val_52347 === (7))){
var inst_52342 = (state_52346[(2)]);
var state_52346__$1 = state_52346;
var statearr_52348_52940 = state_52346__$1;
(statearr_52348_52940[(2)] = inst_52342);

(statearr_52348_52940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (1))){
var inst_52309 = (new Array(n));
var inst_52310 = inst_52309;
var inst_52311 = (0);
var state_52346__$1 = (function (){var statearr_52349 = state_52346;
(statearr_52349[(7)] = inst_52310);

(statearr_52349[(8)] = inst_52311);

return statearr_52349;
})();
var statearr_52350_52942 = state_52346__$1;
(statearr_52350_52942[(2)] = null);

(statearr_52350_52942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (4))){
var inst_52314 = (state_52346[(9)]);
var inst_52314__$1 = (state_52346[(2)]);
var inst_52315 = (inst_52314__$1 == null);
var inst_52316 = cljs.core.not(inst_52315);
var state_52346__$1 = (function (){var statearr_52351 = state_52346;
(statearr_52351[(9)] = inst_52314__$1);

return statearr_52351;
})();
if(inst_52316){
var statearr_52352_52943 = state_52346__$1;
(statearr_52352_52943[(1)] = (5));

} else {
var statearr_52353_52944 = state_52346__$1;
(statearr_52353_52944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (15))){
var inst_52336 = (state_52346[(2)]);
var state_52346__$1 = state_52346;
var statearr_52354_52945 = state_52346__$1;
(statearr_52354_52945[(2)] = inst_52336);

(statearr_52354_52945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (13))){
var state_52346__$1 = state_52346;
var statearr_52355_52946 = state_52346__$1;
(statearr_52355_52946[(2)] = null);

(statearr_52355_52946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (6))){
var inst_52311 = (state_52346[(8)]);
var inst_52332 = (inst_52311 > (0));
var state_52346__$1 = state_52346;
if(cljs.core.truth_(inst_52332)){
var statearr_52356_52947 = state_52346__$1;
(statearr_52356_52947[(1)] = (12));

} else {
var statearr_52357_52948 = state_52346__$1;
(statearr_52357_52948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (3))){
var inst_52344 = (state_52346[(2)]);
var state_52346__$1 = state_52346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52346__$1,inst_52344);
} else {
if((state_val_52347 === (12))){
var inst_52310 = (state_52346[(7)]);
var inst_52334 = cljs.core.vec(inst_52310);
var state_52346__$1 = state_52346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52346__$1,(15),out,inst_52334);
} else {
if((state_val_52347 === (2))){
var state_52346__$1 = state_52346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52346__$1,(4),ch);
} else {
if((state_val_52347 === (11))){
var inst_52326 = (state_52346[(2)]);
var inst_52327 = (new Array(n));
var inst_52310 = inst_52327;
var inst_52311 = (0);
var state_52346__$1 = (function (){var statearr_52358 = state_52346;
(statearr_52358[(7)] = inst_52310);

(statearr_52358[(8)] = inst_52311);

(statearr_52358[(10)] = inst_52326);

return statearr_52358;
})();
var statearr_52359_52952 = state_52346__$1;
(statearr_52359_52952[(2)] = null);

(statearr_52359_52952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (9))){
var inst_52310 = (state_52346[(7)]);
var inst_52324 = cljs.core.vec(inst_52310);
var state_52346__$1 = state_52346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52346__$1,(11),out,inst_52324);
} else {
if((state_val_52347 === (5))){
var inst_52310 = (state_52346[(7)]);
var inst_52314 = (state_52346[(9)]);
var inst_52319 = (state_52346[(11)]);
var inst_52311 = (state_52346[(8)]);
var inst_52318 = (inst_52310[inst_52311] = inst_52314);
var inst_52319__$1 = (inst_52311 + (1));
var inst_52320 = (inst_52319__$1 < n);
var state_52346__$1 = (function (){var statearr_52360 = state_52346;
(statearr_52360[(11)] = inst_52319__$1);

(statearr_52360[(12)] = inst_52318);

return statearr_52360;
})();
if(cljs.core.truth_(inst_52320)){
var statearr_52361_52953 = state_52346__$1;
(statearr_52361_52953[(1)] = (8));

} else {
var statearr_52362_52954 = state_52346__$1;
(statearr_52362_52954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (14))){
var inst_52339 = (state_52346[(2)]);
var inst_52340 = cljs.core.async.close_BANG_(out);
var state_52346__$1 = (function (){var statearr_52364 = state_52346;
(statearr_52364[(13)] = inst_52339);

return statearr_52364;
})();
var statearr_52365_52955 = state_52346__$1;
(statearr_52365_52955[(2)] = inst_52340);

(statearr_52365_52955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (10))){
var inst_52330 = (state_52346[(2)]);
var state_52346__$1 = state_52346;
var statearr_52366_52956 = state_52346__$1;
(statearr_52366_52956[(2)] = inst_52330);

(statearr_52366_52956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (8))){
var inst_52310 = (state_52346[(7)]);
var inst_52319 = (state_52346[(11)]);
var tmp52363 = inst_52310;
var inst_52310__$1 = tmp52363;
var inst_52311 = inst_52319;
var state_52346__$1 = (function (){var statearr_52367 = state_52346;
(statearr_52367[(7)] = inst_52310__$1);

(statearr_52367[(8)] = inst_52311);

return statearr_52367;
})();
var statearr_52368_52957 = state_52346__$1;
(statearr_52368_52957[(2)] = null);

(statearr_52368_52957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50579__auto__ = null;
var cljs$core$async$state_machine__50579__auto____0 = (function (){
var statearr_52369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52369[(0)] = cljs$core$async$state_machine__50579__auto__);

(statearr_52369[(1)] = (1));

return statearr_52369;
});
var cljs$core$async$state_machine__50579__auto____1 = (function (state_52346){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_52346);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e52370){var ex__50582__auto__ = e52370;
var statearr_52371_52958 = state_52346;
(statearr_52371_52958[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_52346[(4)]))){
var statearr_52372_52959 = state_52346;
(statearr_52372_52959[(1)] = cljs.core.first((state_52346[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52960 = state_52346;
state_52346 = G__52960;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$state_machine__50579__auto__ = function(state_52346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50579__auto____1.call(this,state_52346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50579__auto____0;
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50579__auto____1;
return cljs$core$async$state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_52373 = f__50819__auto__();
(statearr_52373[(6)] = c__50818__auto___52939);

return statearr_52373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52375 = arguments.length;
switch (G__52375) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50818__auto___52962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50819__auto__ = (function (){var switch__50578__auto__ = (function (state_52420){
var state_val_52421 = (state_52420[(1)]);
if((state_val_52421 === (7))){
var inst_52416 = (state_52420[(2)]);
var state_52420__$1 = state_52420;
var statearr_52422_52963 = state_52420__$1;
(statearr_52422_52963[(2)] = inst_52416);

(statearr_52422_52963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (1))){
var inst_52376 = [];
var inst_52377 = inst_52376;
var inst_52378 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52420__$1 = (function (){var statearr_52423 = state_52420;
(statearr_52423[(7)] = inst_52377);

(statearr_52423[(8)] = inst_52378);

return statearr_52423;
})();
var statearr_52424_52964 = state_52420__$1;
(statearr_52424_52964[(2)] = null);

(statearr_52424_52964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (4))){
var inst_52381 = (state_52420[(9)]);
var inst_52381__$1 = (state_52420[(2)]);
var inst_52382 = (inst_52381__$1 == null);
var inst_52383 = cljs.core.not(inst_52382);
var state_52420__$1 = (function (){var statearr_52425 = state_52420;
(statearr_52425[(9)] = inst_52381__$1);

return statearr_52425;
})();
if(inst_52383){
var statearr_52426_52965 = state_52420__$1;
(statearr_52426_52965[(1)] = (5));

} else {
var statearr_52427_52966 = state_52420__$1;
(statearr_52427_52966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (15))){
var inst_52377 = (state_52420[(7)]);
var inst_52408 = cljs.core.vec(inst_52377);
var state_52420__$1 = state_52420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52420__$1,(18),out,inst_52408);
} else {
if((state_val_52421 === (13))){
var inst_52403 = (state_52420[(2)]);
var state_52420__$1 = state_52420;
var statearr_52428_52967 = state_52420__$1;
(statearr_52428_52967[(2)] = inst_52403);

(statearr_52428_52967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (6))){
var inst_52377 = (state_52420[(7)]);
var inst_52405 = inst_52377.length;
var inst_52406 = (inst_52405 > (0));
var state_52420__$1 = state_52420;
if(cljs.core.truth_(inst_52406)){
var statearr_52429_52968 = state_52420__$1;
(statearr_52429_52968[(1)] = (15));

} else {
var statearr_52430_52969 = state_52420__$1;
(statearr_52430_52969[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (17))){
var inst_52413 = (state_52420[(2)]);
var inst_52414 = cljs.core.async.close_BANG_(out);
var state_52420__$1 = (function (){var statearr_52431 = state_52420;
(statearr_52431[(10)] = inst_52413);

return statearr_52431;
})();
var statearr_52432_52970 = state_52420__$1;
(statearr_52432_52970[(2)] = inst_52414);

(statearr_52432_52970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (3))){
var inst_52418 = (state_52420[(2)]);
var state_52420__$1 = state_52420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52420__$1,inst_52418);
} else {
if((state_val_52421 === (12))){
var inst_52377 = (state_52420[(7)]);
var inst_52396 = cljs.core.vec(inst_52377);
var state_52420__$1 = state_52420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52420__$1,(14),out,inst_52396);
} else {
if((state_val_52421 === (2))){
var state_52420__$1 = state_52420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52420__$1,(4),ch);
} else {
if((state_val_52421 === (11))){
var inst_52381 = (state_52420[(9)]);
var inst_52377 = (state_52420[(7)]);
var inst_52385 = (state_52420[(11)]);
var inst_52393 = inst_52377.push(inst_52381);
var tmp52433 = inst_52377;
var inst_52377__$1 = tmp52433;
var inst_52378 = inst_52385;
var state_52420__$1 = (function (){var statearr_52434 = state_52420;
(statearr_52434[(7)] = inst_52377__$1);

(statearr_52434[(8)] = inst_52378);

(statearr_52434[(12)] = inst_52393);

return statearr_52434;
})();
var statearr_52435_52971 = state_52420__$1;
(statearr_52435_52971[(2)] = null);

(statearr_52435_52971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (9))){
var inst_52378 = (state_52420[(8)]);
var inst_52389 = cljs.core.keyword_identical_QMARK_(inst_52378,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_52420__$1 = state_52420;
var statearr_52436_52972 = state_52420__$1;
(statearr_52436_52972[(2)] = inst_52389);

(statearr_52436_52972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (5))){
var inst_52381 = (state_52420[(9)]);
var inst_52385 = (state_52420[(11)]);
var inst_52378 = (state_52420[(8)]);
var inst_52386 = (state_52420[(13)]);
var inst_52385__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52381) : f.call(null,inst_52381));
var inst_52386__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52385__$1,inst_52378);
var state_52420__$1 = (function (){var statearr_52437 = state_52420;
(statearr_52437[(11)] = inst_52385__$1);

(statearr_52437[(13)] = inst_52386__$1);

return statearr_52437;
})();
if(inst_52386__$1){
var statearr_52438_52974 = state_52420__$1;
(statearr_52438_52974[(1)] = (8));

} else {
var statearr_52439_52975 = state_52420__$1;
(statearr_52439_52975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (14))){
var inst_52381 = (state_52420[(9)]);
var inst_52385 = (state_52420[(11)]);
var inst_52398 = (state_52420[(2)]);
var inst_52399 = [];
var inst_52400 = inst_52399.push(inst_52381);
var inst_52377 = inst_52399;
var inst_52378 = inst_52385;
var state_52420__$1 = (function (){var statearr_52440 = state_52420;
(statearr_52440[(14)] = inst_52398);

(statearr_52440[(7)] = inst_52377);

(statearr_52440[(15)] = inst_52400);

(statearr_52440[(8)] = inst_52378);

return statearr_52440;
})();
var statearr_52441_52976 = state_52420__$1;
(statearr_52441_52976[(2)] = null);

(statearr_52441_52976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (16))){
var state_52420__$1 = state_52420;
var statearr_52442_52977 = state_52420__$1;
(statearr_52442_52977[(2)] = null);

(statearr_52442_52977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (10))){
var inst_52391 = (state_52420[(2)]);
var state_52420__$1 = state_52420;
if(cljs.core.truth_(inst_52391)){
var statearr_52443_52978 = state_52420__$1;
(statearr_52443_52978[(1)] = (11));

} else {
var statearr_52444_52979 = state_52420__$1;
(statearr_52444_52979[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (18))){
var inst_52410 = (state_52420[(2)]);
var state_52420__$1 = state_52420;
var statearr_52445_52980 = state_52420__$1;
(statearr_52445_52980[(2)] = inst_52410);

(statearr_52445_52980[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52421 === (8))){
var inst_52386 = (state_52420[(13)]);
var state_52420__$1 = state_52420;
var statearr_52446_52982 = state_52420__$1;
(statearr_52446_52982[(2)] = inst_52386);

(statearr_52446_52982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50579__auto__ = null;
var cljs$core$async$state_machine__50579__auto____0 = (function (){
var statearr_52447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52447[(0)] = cljs$core$async$state_machine__50579__auto__);

(statearr_52447[(1)] = (1));

return statearr_52447;
});
var cljs$core$async$state_machine__50579__auto____1 = (function (state_52420){
while(true){
var ret_value__50580__auto__ = (function (){try{while(true){
var result__50581__auto__ = switch__50578__auto__(state_52420);
if(cljs.core.keyword_identical_QMARK_(result__50581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50581__auto__;
}
break;
}
}catch (e52448){var ex__50582__auto__ = e52448;
var statearr_52449_52984 = state_52420;
(statearr_52449_52984[(2)] = ex__50582__auto__);


if(cljs.core.seq((state_52420[(4)]))){
var statearr_52450_52985 = state_52420;
(statearr_52450_52985[(1)] = cljs.core.first((state_52420[(4)])));

} else {
throw ex__50582__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52986 = state_52420;
state_52420 = G__52986;
continue;
} else {
return ret_value__50580__auto__;
}
break;
}
});
cljs$core$async$state_machine__50579__auto__ = function(state_52420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50579__auto____1.call(this,state_52420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50579__auto____0;
cljs$core$async$state_machine__50579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50579__auto____1;
return cljs$core$async$state_machine__50579__auto__;
})()
})();
var state__50820__auto__ = (function (){var statearr_52451 = f__50819__auto__();
(statearr_52451[(6)] = c__50818__auto___52962);

return statearr_52451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50820__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
