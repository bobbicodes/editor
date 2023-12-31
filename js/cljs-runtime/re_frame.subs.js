goog.provide('re_frame.subs');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_((re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registry.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind) : re_frame.registry.kinds.call(null,re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registry/kinds kind)"));
}

/**
 * @interface
 */
re_frame.subs.ICache = function(){};

var re_frame$subs$ICache$_clear$dyn_59433 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frame.subs._clear[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (re_frame.subs._clear["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICache.-clear",this$);
}
}
});
re_frame.subs._clear = (function re_frame$subs$_clear(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$subs$ICache$_clear$arity$1 == null)))))){
return this$.re_frame$subs$ICache$_clear$arity$1(this$);
} else {
return re_frame$subs$ICache$_clear$dyn_59433(this$);
}
});

var re_frame$subs$ICache$_cache_and_return$dyn_59434 = (function (this$,query_v,r){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frame.subs._cache_and_return[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,query_v,r) : m__4522__auto__.call(null,this$,query_v,r));
} else {
var m__4519__auto__ = (re_frame.subs._cache_and_return["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,query_v,r) : m__4519__auto__.call(null,this$,query_v,r));
} else {
throw cljs.core.missing_protocol("ICache.-cache-and-return",this$);
}
}
});
re_frame.subs._cache_and_return = (function re_frame$subs$_cache_and_return(this$,query_v,r){
if((((!((this$ == null)))) && ((!((this$.re_frame$subs$ICache$_cache_and_return$arity$3 == null)))))){
return this$.re_frame$subs$ICache$_cache_and_return$arity$3(this$,query_v,r);
} else {
return re_frame$subs$ICache$_cache_and_return$dyn_59434(this$,query_v,r);
}
});

var re_frame$subs$ICache$_cache_lookup$dyn_59435 = (function (this$,query_v){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frame.subs._cache_lookup[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,query_v) : m__4522__auto__.call(null,this$,query_v));
} else {
var m__4519__auto__ = (re_frame.subs._cache_lookup["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,query_v) : m__4519__auto__.call(null,this$,query_v));
} else {
throw cljs.core.missing_protocol("ICache.-cache-lookup",this$);
}
}
});
re_frame.subs._cache_lookup = (function re_frame$subs$_cache_lookup(this$,query_v){
if((((!((this$ == null)))) && ((!((this$.re_frame$subs$ICache$_cache_lookup$arity$2 == null)))))){
return this$.re_frame$subs$ICache$_cache_lookup$arity$2(this$,query_v);
} else {
return re_frame$subs$ICache$_cache_lookup$dyn_59435(this$,query_v);
}
});


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
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {re_frame.subs.ICache}
*/
re_frame.subs.SubscriptionCache = (function (state,__meta,__extmap,__hash){
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(re_frame.subs.SubscriptionCache.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k59315,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__59319 = k59315;
var G__59319__$1 = (((G__59319 instanceof cljs.core.Keyword))?G__59319.fqn:null);
switch (G__59319__$1) {
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59315,else__4475__auto__);

}
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__59324){
var vec__59325 = p__59324;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59325,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59325,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#re-frame.subs.SubscriptionCache{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59314){
var self__ = this;
var G__59314__$1 = this;
return (new cljs.core.RecordIter((0),G__59314__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new re_frame.subs.SubscriptionCache(self__.state,self__.__meta,self__.__extmap,self__.__hash));
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1783599508 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59316,other59317){
var self__ = this;
var this59316__$1 = this;
return (((!((other59317 == null)))) && ((((this59316__$1.constructor === other59317.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59316__$1.state,other59317.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59316__$1.__extmap,other59317.__extmap)))))));
}));

(re_frame.subs.SubscriptionCache.prototype.re_frame$subs$ICache$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame.subs.SubscriptionCache.prototype.re_frame$subs$ICache$_clear$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__59330 = cljs.core.seq(cljs.core.deref(self__.state));
var chunk__59335 = null;
var count__59336 = (0);
var i__59337 = (0);
while(true){
if((i__59337 < count__59336)){
var vec__59344 = chunk__59335.cljs$core$IIndexed$_nth$arity$2(null,i__59337);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59344,(0),null);
var rxn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59344,(1),null);
re_frame.interop.dispose_BANG_(rxn);


var G__59437 = seq__59330;
var G__59438 = chunk__59335;
var G__59439 = count__59336;
var G__59440 = (i__59337 + (1));
seq__59330 = G__59437;
chunk__59335 = G__59438;
count__59336 = G__59439;
i__59337 = G__59440;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59330);
if(temp__5753__auto__){
var seq__59330__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59330__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__59330__$1);
var G__59441 = cljs.core.chunk_rest(seq__59330__$1);
var G__59442 = c__4649__auto__;
var G__59443 = cljs.core.count(c__4649__auto__);
var G__59444 = (0);
seq__59330 = G__59441;
chunk__59335 = G__59442;
count__59336 = G__59443;
i__59337 = G__59444;
continue;
} else {
var vec__59347 = cljs.core.first(seq__59330__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59347,(0),null);
var rxn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59347,(1),null);
re_frame.interop.dispose_BANG_(rxn);


var G__59445 = cljs.core.next(seq__59330__$1);
var G__59446 = null;
var G__59447 = (0);
var G__59448 = (0);
seq__59330 = G__59445;
chunk__59335 = G__59446;
count__59336 = G__59447;
i__59337 = G__59448;
continue;
}
} else {
return null;
}
}
break;
}
}));

(re_frame.subs.SubscriptionCache.prototype.re_frame$subs$ICache$_cache_and_return$arity$3 = (function (this$,query_v,r){
var self__ = this;
var this$__$1 = this;
re_frame.interop.add_on_dispose_BANG_(r,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.dissoc,query_v);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,query_v,r);

return r;
}));

(re_frame.subs.SubscriptionCache.prototype.re_frame$subs$ICache$_cache_lookup$arity$2 = (function (this$,query_v){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),query_v);
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new re_frame.subs.SubscriptionCache(self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k59315){
var self__ = this;
var this__4479__auto____$1 = this;
var G__59350 = k59315;
var G__59350__$1 = (((G__59350 instanceof cljs.core.Keyword))?G__59350.fqn:null);
switch (G__59350__$1) {
case "state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k59315);

}
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__59314){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__59351 = cljs.core.keyword_identical_QMARK_;
var expr__59352 = k__4481__auto__;
if(cljs.core.truth_((pred__59351.cljs$core$IFn$_invoke$arity$2 ? pred__59351.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__59352) : pred__59351.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__59352)))){
return (new re_frame.subs.SubscriptionCache(G__59314,self__.__meta,self__.__extmap,null));
} else {
return (new re_frame.subs.SubscriptionCache(self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__59314),null));
}
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null))], null),self__.__extmap));
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__59314){
var self__ = this;
var this__4471__auto____$1 = this;
return (new re_frame.subs.SubscriptionCache(self__.state,G__59314,self__.__extmap,self__.__hash));
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(re_frame.subs.SubscriptionCache.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(this$__$1));
}));

(re_frame.subs.SubscriptionCache.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(re_frame.subs.SubscriptionCache.cljs$lang$type = true);

(re_frame.subs.SubscriptionCache.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"re-frame.subs/SubscriptionCache",null,(1),null));
}));

(re_frame.subs.SubscriptionCache.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"re-frame.subs/SubscriptionCache");
}));

/**
 * Positional factory function for re-frame.subs/SubscriptionCache.
 */
re_frame.subs.__GT_SubscriptionCache = (function re_frame$subs$__GT_SubscriptionCache(state){
return (new re_frame.subs.SubscriptionCache(state,null,null,null));
});

/**
 * Factory function for re-frame.subs/SubscriptionCache, taking a map of keywords to field values.
 */
re_frame.subs.map__GT_SubscriptionCache = (function re_frame$subs$map__GT_SubscriptionCache(G__59318){
var extmap__4512__auto__ = (function (){var G__59370 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59318,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.record_QMARK_(G__59318)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59370);
} else {
return G__59370;
}
})();
return (new re_frame.subs.SubscriptionCache(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__59318),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Unregisters all existing subscription handlers and clears the subscription cache
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(p__59372){
var map__59373 = p__59372;
var map__59373__$1 = cljs.core.__destructure_map(map__59373);
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59373__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var subs_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59373__$1,new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721));
re_frame.registry.clear_handlers(registry,re_frame.subs.kind);

return re_frame.subs._clear(subs_cache);
});
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running `on-dispose` on all cached subscriptions
 *   2. Each `on-dispose` will perform the removal of themselves.
 * 
 *   This is for development time use. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(subs_cache){
var seq__59377 = cljs.core.seq(cljs.core.deref(subs_cache));
var chunk__59378 = null;
var count__59379 = (0);
var i__59380 = (0);
while(true){
if((i__59380 < count__59379)){
var vec__59393 = chunk__59378.cljs$core$IIndexed$_nth$arity$2(null,i__59380);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59393,(0),null);
var rxn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59393,(1),null);
re_frame.interop.dispose_BANG_(rxn);


var G__59453 = seq__59377;
var G__59454 = chunk__59378;
var G__59455 = count__59379;
var G__59456 = (i__59380 + (1));
seq__59377 = G__59453;
chunk__59378 = G__59454;
count__59379 = G__59455;
i__59380 = G__59456;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59377);
if(temp__5753__auto__){
var seq__59377__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59377__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__59377__$1);
var G__59457 = cljs.core.chunk_rest(seq__59377__$1);
var G__59458 = c__4649__auto__;
var G__59459 = cljs.core.count(c__4649__auto__);
var G__59460 = (0);
seq__59377 = G__59457;
chunk__59378 = G__59458;
count__59379 = G__59459;
i__59380 = G__59460;
continue;
} else {
var vec__59397 = cljs.core.first(seq__59377__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59397,(0),null);
var rxn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59397,(1),null);
re_frame.interop.dispose_BANG_(rxn);


var G__59461 = cljs.core.next(seq__59377__$1);
var G__59462 = null;
var G__59463 = (0);
var G__59464 = (0);
seq__59377 = G__59461;
chunk__59378 = G__59462;
count__59379 = G__59463;
i__59380 = G__59464;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms
 *   it returns a `Signal`.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(p__59409,query){
var map__59410 = p__59409;
var map__59410__$1 = cljs.core.__destructure_map(map__59410);
var frame = map__59410__$1;
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
var subs_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
if(cljs.core.vector_QMARK_(query)){
} else {
throw (new Error("Assert failed: (vector? query)"));
}

var or__4223__auto__ = re_frame.subs._cache_lookup(subs_cache,query);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var temp__5755__auto__ = re_frame.registry.get_handler(registry,re_frame.subs.kind,cljs.core.first(query));
if((temp__5755__auto__ == null)){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.subs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing-subscription","missing-subscription",2052152909),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),cljs.core.first(query),new cljs.core.Keyword(null,"msg","msg",-1386103444),"subscription not found in registry, returning a nil subscription."], null),new cljs.core.Keyword(null,"line","line",212345235),110], null)),null);
} else {
var handler_fn = temp__5755__auto__;
return re_frame.subs._cache_and_return(subs_cache,query,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(frame,query) : handler_fn.call(null,frame,query)));
}
}
});
/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__59411){
var vec__59412 = p__59411;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59412,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
if(cljs.core.sequential_QMARK_(signals)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_(signals)){
return re_frame.subs.map_vals(cljs.core.deref,signals);
} else {
if(re_frame.interop.deref_QMARK_(signals)){
return cljs.core.deref(signals);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.subs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invalid-signal","invalid-signal",-1421387540),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),query_id,new cljs.core.Keyword(null,"signals","signals",1732137021),signals,new cljs.core.Keyword(null,"msg","msg",-1386103444),"Signals should be derefable, or a map or sequence of derefables."], null),new cljs.core.Keyword(null,"line","line",212345235),128], null)),null);

return cljs.core.List.EMPTY;

}
}
}
});
re_frame.subs.inputs_fn = (function re_frame$subs$inputs_fn(p__59416,query_id,input_args){
var map__59417 = p__59416;
var map__59417__$1 = cljs.core.__destructure_map(map__59417);
var frame = map__59417__$1;
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59417__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
var G__59418 = cljs.core.count(input_args);
switch (G__59418) {
case (0):
return (function() {
var G__59469 = null;
var G__59469__1 = (function (_){
return app_db;
});
var G__59469__2 = (function (_,___$1){
return app_db;
});
G__59469 = function(_,___$1){
switch(arguments.length){
case 1:
return G__59469__1.call(this,_);
case 2:
return G__59469__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59469.cljs$core$IFn$_invoke$arity$1 = G__59469__1;
G__59469.cljs$core$IFn$_invoke$arity$2 = G__59469__2;
return G__59469;
})()

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.subs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invalid-input","invalid-input",1803826007),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),query_id,new cljs.core.Keyword(null,"input-function","input-function",1652919009),f,new cljs.core.Keyword(null,"msg","msg",-1386103444),"Input function is expected to be a function"], null),new cljs.core.Keyword(null,"line","line",212345235),143], null)),null);
}

return (function (p1__59415_SHARP_){
var _STAR_current_frame_STAR__orig_val__59419 = re_frame.registry._STAR_current_frame_STAR_;
var _STAR_current_frame_STAR__temp_val__59420 = frame;
(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__temp_val__59420);

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__59415_SHARP_) : f.call(null,p1__59415_SHARP_));
}finally {(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__orig_val__59419);
}});

break;
case (2):
var vec__59421 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59421,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59421,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.subs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invalid-marker","invalid-marker",1124391287),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),query_id,new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.Keyword(null,"got","got",-1674745710),marker], null),new cljs.core.Keyword(null,"line","line",212345235),150], null)),null);
}

return (function() {
var re_frame$subs$inputs_fn_$_inp_fn = null;
var re_frame$subs$inputs_fn_$_inp_fn__1 = (function (_){
return re_frame.subs.subscribe(frame,cljs.core.second(input_args));
});
var re_frame$subs$inputs_fn_$_inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe(frame,cljs.core.second(input_args));
});
re_frame$subs$inputs_fn_$_inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inputs_fn_$_inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inputs_fn_$_inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inputs_fn_$_inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inputs_fn_$_inp_fn__1;
re_frame$subs$inputs_fn_$_inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inputs_fn_$_inp_fn__2;
return re_frame$subs$inputs_fn_$_inp_fn;
})()

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)))){
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.subs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invalid-marker-pairs","invalid-marker-pairs",-1635022306),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-id","query-id",1474128842),query_id,new cljs.core.Keyword(null,"msg","msg",-1386103444),"expected pairs of :<- and vectors",new cljs.core.Keyword(null,"got","got",-1674745710),pairs], null),new cljs.core.Keyword(null,"line","line",212345235),160], null)),null);
}

return (function() {
var re_frame$subs$inputs_fn_$_inp_fn = null;
var re_frame$subs$inputs_fn_$_inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,frame),vecs);
});
var re_frame$subs$inputs_fn_$_inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,frame),vecs);
});
re_frame$subs$inputs_fn_$_inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inputs_fn_$_inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inputs_fn_$_inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inputs_fn_$_inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inputs_fn_$_inp_fn__1;
re_frame$subs$inputs_fn_$_inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inputs_fn_$_inp_fn__2;
return re_frame$subs$inputs_fn_$_inp_fn;
})()

}
});
/**
 * For a given `query-id`, register two functions: a `computation` function and an `input signals` function.
 * 
 *   During program execution, a call to `subscribe`, such as `(subscribe [:sub-id 3 "blue"])`,
 *   will create a new `:sub-id` node in the Signal Graph. And, at that time, re-frame
 *   needs to know how to create the node.   By calling `reg-sub`, you are registering
 *   'the template' or 'the mechanism' by which nodes in the Signal Graph can be created.
 * 
 *   Repeating: calling `reg-sub` does not create a node. It only creates the template
 *   from which nodes can be created later.
 * 
 *   `reg-sub` arguments are:
 *  - a `query-id` (typically a namespaced keyword)
 *  - a function which returns the inputs required by this kind of node (can be supplied  in one of three ways)
 *  - a function which computes the value of this kind of node
 * 
 *   The `computation function` is always the last argument supplied and it is expected to have the signature:
 *  `(input-values, query-vector) -> a-value`
 * 
 *   When `computation function` is called, the `query-vector` argument will be the vector supplied to the
 *   the `subscribe` which caused the node to be created. So, if the call was `(subscribe [:sub-id 3 "blue"])`,
 *   then the `query-vector` supplied to the computaton function will be `[:sub-id 3 "blue"]`.
 * 
 *   The arguments supplied between the `query-id` and the `computation-function` can vary in 3 ways,
 *   but whatever is there defines the `input signals` part of the template, controlling what input
 *   values "flow into" the `computation function` gets when it is called.
 * 
 *   `reg-sub` can be called in one of three ways, because there are three ways to define the input signals part.
 *   But note, the 2nd method, in which a `signal-fn` is explicitly supplied, is the most canonical and instructive. The other
 *   two are really just sugary variations.
 * 
 *   1. No input signals given:
 *    ```clj
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; has signature:  (fn [db query-vec]  ... ret-value)
 *   ```
 * 
 *   In the absence of an explicit `input-fn`, the node's input signal defaults to `app-db`
 *   and, as a result, the value within `app-db` (a map) is
 *   is given as the 1st argument when `a-computation-fn` is called.
 * 
 * 
 *   2. A signal function is explicitly supplied:
 *   ```clj
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 *   ```
 * 
 *   This is the most canonical and instructive of the three variations.
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from returned nominated signals will be supplied as the 1st argument to
 *   the `a-computation-fn` when it is called - and subject to what this `signal-fn` returns,
 *   this value will be either a singleton, sequence or map of them (paralleling
 *   the structure returned by the `signal-fn`).
 * 
 *   This example `signal-fn` returns a vector of input signals.
 *     ```clj
 *     (fn [query-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 *     ```
 *   The associated computation function must be written
 *   to expect a vector of values for its first argument:
 *     ```clj
 *     (fn [[a b] query-vec]     ;; 1st argument is a seq of two values
 *       ....)
 *      ```
 * 
 *   If, on the other hand, the signal function was simpler and returned a singleton, like this:
 *      ```clj
 *      (fn [query-vec]
 *        (subscribe [:a-sub]))
 *      ```
 *   then the associated computation function must be written to expect a single value
 *   as the 1st argument:
 *      ```clj
 *      (fn [a query-vec]       ;; 1st argument is a single value
 *        ...)
 *      ```
 * 
 *   Further Note: variation #1 above, in which an `input-fn` was not supplied, like this:
 *     ```clj
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; has signature:  (fn [db query-vec]  ... ret-value)
 *   ```
 *   is the equivalent of using this
 *   2nd variation and explicitly suppling a `signal-fn` which returns `app-db`:
 *   ```clj
 *   (reg-sub
 *     :query-id
 *     (fn [_ _]  re-frame/app-db)   ;; <--- explicit input-fn
 *     a-computation-fn)             ;; has signature:  (fn [db query-vec]  ... ret-value)
 *   ```
 * 
 *   3. Syntax Sugar
 * 
 *   ```clj
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] query-vec]    ;; 1st argument is a seq of two values
 *       {:a a :b b}))
 *   ```
 * 
 *   This 3rd variation is just syntactic sugar for the 2nd.  Instead of providing an
 *   `signals-fn` you provide one or more pairs of `:<-` and a subscription vector.
 * 
 *   If you supply only one pair a singleton will be supplied to the computation function,
 *   as if you had supplied a `signal-fn` returning only a single value:
 * 
 *   ```clj
 *   (reg-sub
 *     :a-sub
 *     :<- [:a-sub]
 *     (fn [a query-vec]      ;; only one pair, so 1st argument is a single value
 *       ...))
 *   ```
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__4835__auto__ = [];
var len__4829__auto___59533 = arguments.length;
var i__4830__auto___59534 = (0);
while(true){
if((i__4830__auto___59534 < len__4829__auto___59533)){
args__4835__auto__.push((arguments[i__4830__auto___59534]));

var G__59535 = (i__4830__auto___59534 + (1));
i__4830__auto___59534 = G__59535;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (p__59427,query_id,args){
var map__59428 = p__59427;
var map__59428__$1 = cljs.core.__destructure_map(map__59428);
var frame = map__59428__$1;
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59428__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
return re_frame.registry.register_handler(registry,re_frame.subs.kind,query_id,(function re_frame$subs$subs_handler_fn(frame__$1,query_vec){
var inputs_fn = re_frame.subs.inputs_fn(frame__$1,query_id,input_args);
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
return re_frame.interop.make_reaction((function (){
var _STAR_current_frame_STAR__orig_val__59429 = re_frame.registry._STAR_current_frame_STAR_;
var _STAR_current_frame_STAR__temp_val__59430 = frame__$1;
(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__temp_val__59430);

try{var subscription = (function (){var G__59431 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__59432 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__59431,G__59432) : computation_fn.call(null,G__59431,G__59432));
})();
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("re-frame.subs",new cljs.core.Keyword(null,"finest","finest",-1359568890),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"updated","updated",-1627192056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query_vec,new cljs.core.Keyword(null,"result","result",1415092211),subscription], null),new cljs.core.Keyword(null,"line","line",212345235),310], null)),null);

return subscription;
}finally {(re_frame.registry._STAR_current_frame_STAR_ = _STAR_current_frame_STAR__orig_val__59429);
}}));
}));
}));

(re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq59424){
var G__59425 = cljs.core.first(seq59424);
var seq59424__$1 = cljs.core.next(seq59424);
var G__59426 = cljs.core.first(seq59424__$1);
var seq59424__$2 = cljs.core.next(seq59424__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59425,G__59426,seq59424__$2);
}));


//# sourceMappingURL=re_frame.subs.js.map
