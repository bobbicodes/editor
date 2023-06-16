goog.provide('re_frame.registry');
re_frame.registry.kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"cofx","cofx",2013202907),null,new cljs.core.Keyword(null,"fx","fx",-1237829572),null], null), null);

/**
 * @interface
 */
re_frame.registry.IRegistry = function(){};

var re_frame$registry$IRegistry$get_handler$dyn_58751 = (function() {
var G__58752 = null;
var G__58752__2 = (function (this$,kind){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frame.registry.get_handler[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,kind) : m__4522__auto__.call(null,this$,kind));
} else {
var m__4519__auto__ = (re_frame.registry.get_handler["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,kind) : m__4519__auto__.call(null,this$,kind));
} else {
throw cljs.core.missing_protocol("IRegistry.get-handler",this$);
}
}
});
var G__58752__3 = (function (this$,kind,id){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frame.registry.get_handler[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,kind,id) : m__4522__auto__.call(null,this$,kind,id));
} else {
var m__4519__auto__ = (re_frame.registry.get_handler["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,kind,id) : m__4519__auto__.call(null,this$,kind,id));
} else {
throw cljs.core.missing_protocol("IRegistry.get-handler",this$);
}
}
});
var G__58752__4 = (function (this$,kind,id,required_QMARK_){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frame.registry.get_handler[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(this$,kind,id,required_QMARK_) : m__4522__auto__.call(null,this$,kind,id,required_QMARK_));
} else {
var m__4519__auto__ = (re_frame.registry.get_handler["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(this$,kind,id,required_QMARK_) : m__4519__auto__.call(null,this$,kind,id,required_QMARK_));
} else {
throw cljs.core.missing_protocol("IRegistry.get-handler",this$);
}
}
});
G__58752 = function(this$,kind,id,required_QMARK_){
switch(arguments.length){
case 2:
return G__58752__2.call(this,this$,kind);
case 3:
return G__58752__3.call(this,this$,kind,id);
case 4:
return G__58752__4.call(this,this$,kind,id,required_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58752.cljs$core$IFn$_invoke$arity$2 = G__58752__2;
G__58752.cljs$core$IFn$_invoke$arity$3 = G__58752__3;
G__58752.cljs$core$IFn$_invoke$arity$4 = G__58752__4;
return G__58752;
})()
;
re_frame.registry.get_handler = (function re_frame$registry$get_handler(var_args){
var G__58688 = arguments.length;
switch (G__58688) {
case 2:
return re_frame.registry.get_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.registry.get_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_frame.registry.get_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.registry.get_handler.cljs$core$IFn$_invoke$arity$2 = (function (this$,kind){
if((((!((this$ == null)))) && ((!((this$.re_frame$registry$IRegistry$get_handler$arity$2 == null)))))){
return this$.re_frame$registry$IRegistry$get_handler$arity$2(this$,kind);
} else {
return re_frame$registry$IRegistry$get_handler$dyn_58751(this$,kind);
}
}));

(re_frame.registry.get_handler.cljs$core$IFn$_invoke$arity$3 = (function (this$,kind,id){
if((((!((this$ == null)))) && ((!((this$.re_frame$registry$IRegistry$get_handler$arity$3 == null)))))){
return this$.re_frame$registry$IRegistry$get_handler$arity$3(this$,kind,id);
} else {
return re_frame$registry$IRegistry$get_handler$dyn_58751(this$,kind,id);
}
}));

(re_frame.registry.get_handler.cljs$core$IFn$_invoke$arity$4 = (function (this$,kind,id,required_QMARK_){
if((((!((this$ == null)))) && ((!((this$.re_frame$registry$IRegistry$get_handler$arity$4 == null)))))){
return this$.re_frame$registry$IRegistry$get_handler$arity$4(this$,kind,id,required_QMARK_);
} else {
return re_frame$registry$IRegistry$get_handler$dyn_58751(this$,kind,id,required_QMARK_);
}
}));

(re_frame.registry.get_handler.cljs$lang$maxFixedArity = 4);


var re_frame$registry$IRegistry$register_handler$dyn_58756 = (function (this$,kind,id,handler_fn){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frame.registry.register_handler[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(this$,kind,id,handler_fn) : m__4522__auto__.call(null,this$,kind,id,handler_fn));
} else {
var m__4519__auto__ = (re_frame.registry.register_handler["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(this$,kind,id,handler_fn) : m__4519__auto__.call(null,this$,kind,id,handler_fn));
} else {
throw cljs.core.missing_protocol("IRegistry.register-handler",this$);
}
}
});
re_frame.registry.register_handler = (function re_frame$registry$register_handler(this$,kind,id,handler_fn){
if((((!((this$ == null)))) && ((!((this$.re_frame$registry$IRegistry$register_handler$arity$4 == null)))))){
return this$.re_frame$registry$IRegistry$register_handler$arity$4(this$,kind,id,handler_fn);
} else {
return re_frame$registry$IRegistry$register_handler$dyn_58756(this$,kind,id,handler_fn);
}
});

var re_frame$registry$IRegistry$clear_handlers$dyn_58758 = (function() {
var G__58759 = null;
var G__58759__1 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frame.registry.clear_handlers[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (re_frame.registry.clear_handlers["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRegistry.clear-handlers",this$);
}
}
});
var G__58759__2 = (function (this$,kind){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frame.registry.clear_handlers[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,kind) : m__4522__auto__.call(null,this$,kind));
} else {
var m__4519__auto__ = (re_frame.registry.clear_handlers["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,kind) : m__4519__auto__.call(null,this$,kind));
} else {
throw cljs.core.missing_protocol("IRegistry.clear-handlers",this$);
}
}
});
var G__58759__3 = (function (this$,kind,id){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frame.registry.clear_handlers[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,kind,id) : m__4522__auto__.call(null,this$,kind,id));
} else {
var m__4519__auto__ = (re_frame.registry.clear_handlers["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,kind,id) : m__4519__auto__.call(null,this$,kind,id));
} else {
throw cljs.core.missing_protocol("IRegistry.clear-handlers",this$);
}
}
});
G__58759 = function(this$,kind,id){
switch(arguments.length){
case 1:
return G__58759__1.call(this,this$);
case 2:
return G__58759__2.call(this,this$,kind);
case 3:
return G__58759__3.call(this,this$,kind,id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58759.cljs$core$IFn$_invoke$arity$1 = G__58759__1;
G__58759.cljs$core$IFn$_invoke$arity$2 = G__58759__2;
G__58759.cljs$core$IFn$_invoke$arity$3 = G__58759__3;
return G__58759;
})()
;
re_frame.registry.clear_handlers = (function re_frame$registry$clear_handlers(var_args){
var G__58693 = arguments.length;
switch (G__58693) {
case 1:
return re_frame.registry.clear_handlers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.registry.clear_handlers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.registry.clear_handlers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.registry.clear_handlers.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$registry$IRegistry$clear_handlers$arity$1 == null)))))){
return this$.re_frame$registry$IRegistry$clear_handlers$arity$1(this$);
} else {
return re_frame$registry$IRegistry$clear_handlers$dyn_58758(this$);
}
}));

(re_frame.registry.clear_handlers.cljs$core$IFn$_invoke$arity$2 = (function (this$,kind){
if((((!((this$ == null)))) && ((!((this$.re_frame$registry$IRegistry$clear_handlers$arity$2 == null)))))){
return this$.re_frame$registry$IRegistry$clear_handlers$arity$2(this$,kind);
} else {
return re_frame$registry$IRegistry$clear_handlers$dyn_58758(this$,kind);
}
}));

(re_frame.registry.clear_handlers.cljs$core$IFn$_invoke$arity$3 = (function (this$,kind,id){
if((((!((this$ == null)))) && ((!((this$.re_frame$registry$IRegistry$clear_handlers$arity$3 == null)))))){
return this$.re_frame$registry$IRegistry$clear_handlers$arity$3(this$,kind,id);
} else {
return re_frame$registry$IRegistry$clear_handlers$dyn_58758(this$,kind,id);
}
}));

(re_frame.registry.clear_handlers.cljs$lang$maxFixedArity = 3);



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {re_frame.registry.IRegistry}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
re_frame.registry.Registry = (function (kinds,kind__GT_id__GT_handler,__meta,__extmap,__hash){
this.kinds = kinds;
this.kind__GT_id__GT_handler = kind__GT_id__GT_handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(re_frame.registry.Registry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(re_frame.registry.Registry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k58696,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__58700 = k58696;
var G__58700__$1 = (((G__58700 instanceof cljs.core.Keyword))?G__58700.fqn:null);
switch (G__58700__$1) {
case "kinds":
return self__.kinds;

break;
case "kind->id->handler":
return self__.kind__GT_id__GT_handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58696,else__4475__auto__);

}
}));

(re_frame.registry.Registry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__58701){
var vec__58702 = p__58701;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58702,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58702,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(re_frame.registry.Registry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#re-frame.registry.Registry{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kinds","kinds",-294501889),self__.kinds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kind->id->handler","kind->id->handler",-214642779),self__.kind__GT_id__GT_handler],null))], null),self__.__extmap));
}));

(re_frame.registry.Registry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58695){
var self__ = this;
var G__58695__$1 = this;
return (new cljs.core.RecordIter((0),G__58695__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kinds","kinds",-294501889),new cljs.core.Keyword(null,"kind->id->handler","kind->id->handler",-214642779)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(re_frame.registry.Registry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(re_frame.registry.Registry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new re_frame.registry.Registry(self__.kinds,self__.kind__GT_id__GT_handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(re_frame.registry.Registry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(re_frame.registry.Registry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-392757752 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(re_frame.registry.Registry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58697,other58698){
var self__ = this;
var this58697__$1 = this;
return (((!((other58698 == null)))) && ((((this58697__$1.constructor === other58698.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58697__$1.kinds,other58698.kinds)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58697__$1.kind__GT_id__GT_handler,other58698.kind__GT_id__GT_handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58697__$1.__extmap,other58698.__extmap)))))))));
}));

(re_frame.registry.Registry.prototype.re_frame$registry$IRegistry$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame.registry.Registry.prototype.re_frame$registry$IRegistry$get_handler$arity$2 = (function (this$,kind){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.kind__GT_id__GT_handler),kind);
}));

(re_frame.registry.Registry.prototype.re_frame$registry$IRegistry$get_handler$arity$3 = (function (this$,kind,id){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.kind__GT_id__GT_handler),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,id], null));
}));

(re_frame.registry.Registry.prototype.re_frame$registry$IRegistry$get_handler$arity$4 = (function (this$,kind,id,required_QMARK_){
var self__ = this;
var this$__$1 = this;
var handler = this$__$1.re_frame$registry$IRegistry$get_handler$arity$3(null,kind,id);
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_((function (){var and__4221__auto__ = required_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return (handler == null);
} else {
return and__4221__auto__;
}
})())){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.registry",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-handler","missing-handler",453576626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"line","line",212345235),37], null)),null);
} else {
}
} else {
}

return handler;
}));

(re_frame.registry.Registry.prototype.re_frame$registry$IRegistry$register_handler$arity$4 = (function (this$,kind,id,handler_fn){
var self__ = this;
var this$__$1 = this;
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_(this$__$1.re_frame$registry$IRegistry$get_handler$arity$4(null,kind,id,false))){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.registry",new cljs.core.Keyword(null,"trace","trace",-1082747415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overwriting-handler","overwriting-handler",-2015177690),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"line","line",212345235),43], null)),null);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.registry",new cljs.core.Keyword(null,"trace","trace",-1082747415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registered-handler","registered-handler",-1728263318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"line","line",212345235),44], null)),null);
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.kind__GT_id__GT_handler,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,id], null),handler_fn);

return handler_fn;
}));

(re_frame.registry.Registry.prototype.re_frame$registry$IRegistry$clear_handlers$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(self__.kind__GT_id__GT_handler,cljs.core.PersistentArrayMap.EMPTY);
}));

(re_frame.registry.Registry.prototype.re_frame$registry$IRegistry$clear_handlers$arity$2 = (function (this$,kind){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.kinds.cljs$core$IFn$_invoke$arity$1 ? self__.kinds.cljs$core$IFn$_invoke$arity$1(kind) : self__.kinds.call(null,kind)))){
} else {
throw (new Error("Assert failed: (kinds kind)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.kind__GT_id__GT_handler,cljs.core.dissoc,kind);
}));

(re_frame.registry.Registry.prototype.re_frame$registry$IRegistry$clear_handlers$arity$3 = (function (this$,kind,id){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.kinds.cljs$core$IFn$_invoke$arity$1 ? self__.kinds.cljs$core$IFn$_invoke$arity$1(kind) : self__.kinds.call(null,kind)))){
} else {
throw (new Error("Assert failed: (kinds kind)"));
}

if(cljs.core.truth_(this$__$1.re_frame$registry$IRegistry$get_handler$arity$3(null,kind,id))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.kind__GT_id__GT_handler,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.registry",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg","msg",-1386103444),["re-frame: can't clear ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)," handler for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),". Handler not found."].join(''),new cljs.core.Keyword(null,"line","line",212345235),57], null)),null);
}
}));

(re_frame.registry.Registry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind->id->handler","kind->id->handler",-214642779),null,new cljs.core.Keyword(null,"kinds","kinds",-294501889),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new re_frame.registry.Registry(self__.kinds,self__.kind__GT_id__GT_handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(re_frame.registry.Registry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k58696){
var self__ = this;
var this__4479__auto____$1 = this;
var G__58731 = k58696;
var G__58731__$1 = (((G__58731 instanceof cljs.core.Keyword))?G__58731.fqn:null);
switch (G__58731__$1) {
case "kinds":
case "kind->id->handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58696);

}
}));

(re_frame.registry.Registry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__58695){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__58733 = cljs.core.keyword_identical_QMARK_;
var expr__58734 = k__4481__auto__;
if(cljs.core.truth_((pred__58733.cljs$core$IFn$_invoke$arity$2 ? pred__58733.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kinds","kinds",-294501889),expr__58734) : pred__58733.call(null,new cljs.core.Keyword(null,"kinds","kinds",-294501889),expr__58734)))){
return (new re_frame.registry.Registry(G__58695,self__.kind__GT_id__GT_handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58733.cljs$core$IFn$_invoke$arity$2 ? pred__58733.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind->id->handler","kind->id->handler",-214642779),expr__58734) : pred__58733.call(null,new cljs.core.Keyword(null,"kind->id->handler","kind->id->handler",-214642779),expr__58734)))){
return (new re_frame.registry.Registry(self__.kinds,G__58695,self__.__meta,self__.__extmap,null));
} else {
return (new re_frame.registry.Registry(self__.kinds,self__.kind__GT_id__GT_handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__58695),null));
}
}
}));

(re_frame.registry.Registry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"kinds","kinds",-294501889),self__.kinds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"kind->id->handler","kind->id->handler",-214642779),self__.kind__GT_id__GT_handler,null))], null),self__.__extmap));
}));

(re_frame.registry.Registry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__58695){
var self__ = this;
var this__4471__auto____$1 = this;
return (new re_frame.registry.Registry(self__.kinds,self__.kind__GT_id__GT_handler,G__58695,self__.__extmap,self__.__hash));
}));

(re_frame.registry.Registry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(re_frame.registry.Registry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kinds","kinds",1346029638,null),new cljs.core.Symbol(null,"kind->id->handler","kind->id->handler",1425888748,null)], null);
}));

(re_frame.registry.Registry.cljs$lang$type = true);

(re_frame.registry.Registry.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"re-frame.registry/Registry",null,(1),null));
}));

(re_frame.registry.Registry.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"re-frame.registry/Registry");
}));

/**
 * Positional factory function for re-frame.registry/Registry.
 */
re_frame.registry.__GT_Registry = (function re_frame$registry$__GT_Registry(kinds,kind__GT_id__GT_handler){
return (new re_frame.registry.Registry(kinds,kind__GT_id__GT_handler,null,null,null));
});

/**
 * Factory function for re-frame.registry/Registry, taking a map of keywords to field values.
 */
re_frame.registry.map__GT_Registry = (function re_frame$registry$map__GT_Registry(G__58699){
var extmap__4512__auto__ = (function (){var G__58744 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58699,new cljs.core.Keyword(null,"kinds","kinds",-294501889),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"kind->id->handler","kind->id->handler",-214642779)], 0));
if(cljs.core.record_QMARK_(G__58699)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58744);
} else {
return G__58744;
}
})();
return (new re_frame.registry.Registry(new cljs.core.Keyword(null,"kinds","kinds",-294501889).cljs$core$IFn$_invoke$arity$1(G__58699),new cljs.core.Keyword(null,"kind->id->handler","kind->id->handler",-214642779).cljs$core$IFn$_invoke$arity$1(G__58699),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

re_frame.registry.make_registry = (function re_frame$registry$make_registry(){
return re_frame.registry.__GT_Registry(re_frame.registry.kinds,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=re_frame.registry.js.map
