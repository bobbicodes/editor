goog.provide('nextjournal.clerk.viewer');

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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
nextjournal.clerk.viewer.ViewerEval = (function (form,__meta,__extmap,__hash){
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k58299,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__58303 = k58299;
var G__58303__$1 = (((G__58303 instanceof cljs.core.Keyword))?G__58303.fqn:null);
switch (G__58303__$1) {
case "form":
return self__.form;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58299,else__4475__auto__);

}
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__58304){
var vec__58305 = p__58304;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58305,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58305,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#nextjournal.clerk.viewer.ViewerEval{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58298){
var self__ = this;
var G__58298__$1 = this;
return (new cljs.core.RecordIter((0),G__58298__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new nextjournal.clerk.viewer.ViewerEval(self__.form,self__.__meta,self__.__extmap,self__.__hash));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-737905796 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58300,other58301){
var self__ = this;
var this58300__$1 = this;
return (((!((other58301 == null)))) && ((((this58300__$1.constructor === other58301.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58300__$1.form,other58301.form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58300__$1.__extmap,other58301.__extmap)))))));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new nextjournal.clerk.viewer.ViewerEval(self__.form,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k58299){
var self__ = this;
var this__4479__auto____$1 = this;
var G__58308 = k58299;
var G__58308__$1 = (((G__58308 instanceof cljs.core.Keyword))?G__58308.fqn:null);
switch (G__58308__$1) {
case "form":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58299);

}
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__58298){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__58310 = cljs.core.keyword_identical_QMARK_;
var expr__58311 = k__4481__auto__;
if(cljs.core.truth_((pred__58310.cljs$core$IFn$_invoke$arity$2 ? pred__58310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471),expr__58311) : pred__58310.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__58311)))){
return (new nextjournal.clerk.viewer.ViewerEval(G__58298,self__.__meta,self__.__extmap,null));
} else {
return (new nextjournal.clerk.viewer.ViewerEval(self__.form,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__58298),null));
}
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"form","form",-1624062471),self__.form,null))], null),self__.__extmap));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__58298){
var self__ = this;
var this__4471__auto____$1 = this;
return (new nextjournal.clerk.viewer.ViewerEval(self__.form,G__58298,self__.__extmap,self__.__hash));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(nextjournal.clerk.viewer.ViewerEval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null);
}));

(nextjournal.clerk.viewer.ViewerEval.cljs$lang$type = true);

(nextjournal.clerk.viewer.ViewerEval.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"nextjournal.clerk.viewer/ViewerEval",null,(1),null));
}));

(nextjournal.clerk.viewer.ViewerEval.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"nextjournal.clerk.viewer/ViewerEval");
}));

/**
 * Positional factory function for nextjournal.clerk.viewer/ViewerEval.
 */
nextjournal.clerk.viewer.__GT_ViewerEval = (function nextjournal$clerk$viewer$__GT_ViewerEval(form){
return (new nextjournal.clerk.viewer.ViewerEval(form,null,null,null));
});

/**
 * Factory function for nextjournal.clerk.viewer/ViewerEval, taking a map of keywords to field values.
 */
nextjournal.clerk.viewer.map__GT_ViewerEval = (function nextjournal$clerk$viewer$map__GT_ViewerEval(G__58302){
var extmap__4512__auto__ = (function (){var G__58315 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__58302,new cljs.core.Keyword(null,"form","form",-1624062471));
if(cljs.core.record_QMARK_(G__58302)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58315);
} else {
return G__58315;
}
})();
return (new nextjournal.clerk.viewer.ViewerEval(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__58302),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
nextjournal.clerk.viewer.ViewerFn = (function (form,f,__meta,__extmap,__hash){
this.form = form;
this.f = f;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k58319,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__58329 = k58319;
var G__58329__$1 = (((G__58329 instanceof cljs.core.Keyword))?G__58329.fqn:null);
switch (G__58329__$1) {
case "form":
return self__.form;

break;
case "f":
return self__.f;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58319,else__4475__auto__);

}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__58330){
var vec__58333 = p__58330;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58333,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58333,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#nextjournal.clerk.viewer.ViewerFn{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null))], null),self__.__extmap));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58318){
var self__ = this;
var G__58318__$1 = this;
return (new cljs.core.RecordIter((0),G__58318__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"f","f",-1597136552)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new nextjournal.clerk.viewer.ViewerFn(self__.form,self__.f,self__.__meta,self__.__extmap,self__.__hash));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1201497063 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58320,other58321){
var self__ = this;
var this58320__$1 = this;
return (((!((other58321 == null)))) && ((((this58320__$1.constructor === other58321.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58320__$1.form,other58321.form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58320__$1.f,other58321.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58320__$1.__extmap,other58321.__extmap)))))))));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new nextjournal.clerk.viewer.ViewerFn(self__.form,self__.f,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k58319){
var self__ = this;
var this__4479__auto____$1 = this;
var G__58352 = k58319;
var G__58352__$1 = (((G__58352 instanceof cljs.core.Keyword))?G__58352.fqn:null);
switch (G__58352__$1) {
case "form":
case "f":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58319);

}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__58318){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__58353 = cljs.core.keyword_identical_QMARK_;
var expr__58354 = k__4481__auto__;
if(cljs.core.truth_((pred__58353.cljs$core$IFn$_invoke$arity$2 ? pred__58353.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471),expr__58354) : pred__58353.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__58354)))){
return (new nextjournal.clerk.viewer.ViewerFn(G__58318,self__.f,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58353.cljs$core$IFn$_invoke$arity$2 ? pred__58353.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),expr__58354) : pred__58353.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__58354)))){
return (new nextjournal.clerk.viewer.ViewerFn(self__.form,G__58318,self__.__meta,self__.__extmap,null));
} else {
return (new nextjournal.clerk.viewer.ViewerFn(self__.form,self__.f,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__58318),null));
}
}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"form","form",-1624062471),self__.form,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null))], null),self__.__extmap));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__58318){
var self__ = this;
var this__4471__auto____$1 = this;
return (new nextjournal.clerk.viewer.ViewerFn(self__.form,self__.f,G__58318,self__.__extmap,self__.__hash));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.call = (function (unused__11876__auto__){
var self__ = this;
var self__ = this;
var G__58356 = (arguments.length - (1));
switch (G__58356) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.apply = (function (self__,args58326){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args58326)));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
var fexpr__58357 = new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(this$);
return (fexpr__58357.cljs$core$IFn$_invoke$arity$1 ? fexpr__58357.cljs$core$IFn$_invoke$arity$1(x) : fexpr__58357.call(null,x));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var self__ = this;
var this$ = this;
var fexpr__58358 = new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(this$);
return (fexpr__58358.cljs$core$IFn$_invoke$arity$2 ? fexpr__58358.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__58358.call(null,x,y));
}));

(nextjournal.clerk.viewer.ViewerFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null);
}));

(nextjournal.clerk.viewer.ViewerFn.cljs$lang$type = true);

(nextjournal.clerk.viewer.ViewerFn.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"nextjournal.clerk.viewer/ViewerFn",null,(1),null));
}));

(nextjournal.clerk.viewer.ViewerFn.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"nextjournal.clerk.viewer/ViewerFn");
}));

/**
 * Positional factory function for nextjournal.clerk.viewer/ViewerFn.
 */
nextjournal.clerk.viewer.__GT_ViewerFn = (function nextjournal$clerk$viewer$__GT_ViewerFn(form,f){
return (new nextjournal.clerk.viewer.ViewerFn(form,f,null,null,null));
});

/**
 * Factory function for nextjournal.clerk.viewer/ViewerFn, taking a map of keywords to field values.
 */
nextjournal.clerk.viewer.map__GT_ViewerFn = (function nextjournal$clerk$viewer$map__GT_ViewerFn(G__58323){
var extmap__4512__auto__ = (function (){var G__58359 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58323,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552)], 0));
if(cljs.core.record_QMARK_(G__58323)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58359);
} else {
return G__58359;
}
})();
return (new nextjournal.clerk.viewer.ViewerFn(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__58323),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__58323),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

nextjournal.clerk.viewer.viewer_fn_QMARK_ = (function nextjournal$clerk$viewer$viewer_fn_QMARK_(x){
return (x instanceof nextjournal.clerk.viewer.ViewerFn);
});
nextjournal.clerk.viewer.viewer_eval_QMARK_ = (function nextjournal$clerk$viewer$viewer_eval_QMARK_(x){
return (x instanceof nextjournal.clerk.viewer.ViewerEval);
});
nextjournal.clerk.viewer.__GT_viewer_fn = (function nextjournal$clerk$viewer$__GT_viewer_fn(form){
return nextjournal.clerk.viewer.map__GT_ViewerFn(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.eval(form)], null));
});
nextjournal.clerk.viewer.__GT_viewer_eval = (function nextjournal$clerk$viewer$__GT_viewer_eval(form){
return nextjournal.clerk.viewer.map__GT_ViewerEval(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
});
/**
 * Tests if `x` is a map containing a `:nextjournal/value`.
 */
nextjournal.clerk.viewer.wrapped_value_QMARK_ = (function nextjournal$clerk$viewer$wrapped_value_QMARK_(x){
var and__4221__auto__ = cljs.core.map_QMARK_(x);
if(and__4221__auto__){
try{return cljs.core.contains_QMARK_(x,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
}catch (e58362){if((e58362 instanceof Error)){
var _e = e58362;
return false;
} else {
throw e58362;

}
}} else {
return and__4221__auto__;
}
});
/**
 * Ensures `x` is wrapped in a map under a `:nextjournal/value` key.
 */
nextjournal.clerk.viewer.ensure_wrapped = (function nextjournal$clerk$viewer$ensure_wrapped(var_args){
var G__58368 = arguments.length;
switch (G__58368) {
case 1:
return nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(x))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),x], null);
}
}));

(nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$2 = (function (x,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),v);
}));

(nextjournal.clerk.viewer.ensure_wrapped.cljs$lang$maxFixedArity = 2);

/**
 * Takes `x` and returns the `:nextjournal/value` from it, or otherwise `x` unmodified.
 */
nextjournal.clerk.viewer.__GT_value = (function nextjournal$clerk$viewer$__GT_value(x){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(x))){
return new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
/**
 * Returns the `:nextjournal/viewer` for a given wrapped value `x`, `nil` otherwise.
 */
nextjournal.clerk.viewer.__GT_viewer = (function nextjournal$clerk$viewer$__GT_viewer(x){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(x))){
return new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759).cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
/**
 * Returns the `:nextjournal/viewers` for a given wrapped value `x`, `nil` otherwise.
 */
nextjournal.clerk.viewer.__GT_viewers = (function nextjournal$clerk$viewer$__GT_viewers(x){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(x))){
return new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841).cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
/**
 * Returns the `:nextjournal/width` for a given wrapped value `x`, `nil` otherwise.
 */
nextjournal.clerk.viewer.width = (function nextjournal$clerk$viewer$width(x){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(x))){
return new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537).cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
nextjournal.clerk.viewer.normalize_viewer_opts = (function nextjournal$clerk$viewer$normalize_viewer_opts(opts){
if(cljs.core.map_QMARK_(opts)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("normalize-viewer-opts not passed `map?` opts",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),opts], null));
}

return clojure.set.rename_keys(opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("nextjournal.clerk","viewer","nextjournal.clerk/viewer",484555418),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword("nextjournal.clerk","viewers","nextjournal.clerk/viewers",713654002),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),new cljs.core.Keyword("nextjournal.clerk","opts","nextjournal.clerk/opts",1288842658),new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249),new cljs.core.Keyword("nextjournal.clerk","width","nextjournal.clerk/width",-1405645288),new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537)], null));
});
nextjournal.clerk.viewer.normalize_viewer = (function nextjournal$clerk$viewer$normalize_viewer(viewer){
if((viewer instanceof cljs.core.Keyword)){
return viewer;
} else {
if(cljs.core.map_QMARK_(viewer)){
return viewer;
} else {
if((((viewer instanceof cljs.core.Symbol)) || (((cljs.core.seq_QMARK_(viewer)) || (cljs.core.fn_QMARK_(viewer)))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),viewer], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot normalize viewer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),viewer], null));

}
}
}
});
/**
 * Wraps the given value `x` and associates it with the given `viewer`. Takes an optional second `viewer-opts` arg.
 */
nextjournal.clerk.viewer.with_viewer = (function nextjournal$clerk$viewer$with_viewer(var_args){
var G__58380 = arguments.length;
switch (G__58380) {
case 2:
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2 = (function (viewer,x){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$3(viewer,null,x);
}));

(nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$3 = (function (viewer,viewer_opts,x){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(viewer_opts)?nextjournal.clerk.viewer.normalize_viewer_opts(viewer_opts):null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),nextjournal.clerk.viewer.normalize_viewer(viewer))], 0));
}));

(nextjournal.clerk.viewer.with_viewer.cljs$lang$maxFixedArity = 3);

nextjournal.clerk.viewer.with_viewer_extracting_opts = (function nextjournal$clerk$viewer$with_viewer_extracting_opts(var_args){
var args__4835__auto__ = [];
var len__4829__auto___58786 = arguments.length;
var i__4830__auto___58787 = (0);
while(true){
if((i__4830__auto___58787 < len__4829__auto___58786)){
args__4835__auto__.push((arguments[i__4830__auto___58787]));

var G__58788 = (i__4830__auto___58787 + (1));
i__4830__auto___58787 = G__58788;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return nextjournal.clerk.viewer.with_viewer_extracting_opts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(nextjournal.clerk.viewer.with_viewer_extracting_opts.cljs$core$IFn$_invoke$arity$variadic = (function (viewer,opts_PLUS_items){
if(((cljs.core.map_QMARK_(cljs.core.first(opts_PLUS_items))) && (cljs.core.not(nextjournal.clerk.viewer.wrapped_value_QMARK_(cljs.core.first(opts_PLUS_items)))))){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$3(viewer,cljs.core.first(opts_PLUS_items),cljs.core.rest(opts_PLUS_items));
} else {
if(((cljs.core.sequential_QMARK_(cljs.core.first(opts_PLUS_items))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(opts_PLUS_items))))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,viewer),opts_PLUS_items);
} else {
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(viewer,opts_PLUS_items);

}
}
}));

(nextjournal.clerk.viewer.with_viewer_extracting_opts.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nextjournal.clerk.viewer.with_viewer_extracting_opts.cljs$lang$applyTo = (function (seq58381){
var G__58382 = cljs.core.first(seq58381);
var seq58381__$1 = cljs.core.next(seq58381);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58382,seq58381__$1);
}));

/**
 * Binds viewers to types, eg {:boolean view-fn}
 */
nextjournal.clerk.viewer.with_viewers = (function nextjournal$clerk$viewer$with_viewers(viewers,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),viewers);
});
nextjournal.clerk.viewer.rpad_vec = (function nextjournal$clerk$viewer$rpad_vec(v,length,padding){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(v,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(padding))));
});
nextjournal.clerk.viewer.missing_pred = new cljs.core.Keyword("nextjournal","missing","nextjournal/missing",-1931810187);
nextjournal.clerk.viewer.normalize_seq_of_seq = (function nextjournal$clerk$viewer$normalize_seq_of_seq(s){
var max_count = cljs.core.count(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,s));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58386_SHARP_){
return nextjournal.clerk.viewer.rpad_vec(nextjournal.clerk.viewer.__GT_value(p1__58386_SHARP_),max_count,nextjournal.clerk.viewer.missing_pred);
}),s)], null);
});
nextjournal.clerk.viewer.normalize_seq_of_map = (function nextjournal$clerk$viewer$normalize_seq_of_map(s){
var ks = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),ks,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58387_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,p1__58387_SHARP_,nextjournal.clerk.viewer.missing_pred);
}),ks);
}),s)], null);
});
nextjournal.clerk.viewer.normalize_map_of_seq = (function nextjournal$clerk$viewer$normalize_map_of_seq(m){
var ks = cljs.core.vec(cljs.core.keys(m));
var m_STAR_ = ((cljs.core.seq_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(ks))))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__58397){
var vec__58398 = p__58397;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58398,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58398,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.vec(s));
}),cljs.core.PersistentArrayMap.EMPTY,m):m);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),ks,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58394_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58394_SHARP_,i], null),nextjournal.clerk.viewer.missing_pred);
}),ks);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.val(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.val),m_STAR_)))))], null);
});
nextjournal.clerk.viewer.normalize_seq_to_vec = (function nextjournal$clerk$viewer$normalize_seq_to_vec(p__58401){
var map__58402 = p__58401;
var map__58402__$1 = cljs.core.__destructure_map(map__58402);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58402__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58402__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var G__58403 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec(rows)], null);
if(cljs.core.truth_(head)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58403,new cljs.core.Keyword(null,"head","head",-771383919),cljs.core.vec(head));
} else {
return G__58403;
}
});
nextjournal.clerk.viewer.use_headers = (function nextjournal$clerk$viewer$use_headers(s){
var map__58405 = nextjournal.clerk.viewer.normalize_seq_of_seq(s);
var map__58405__$1 = cljs.core.__destructure_map(map__58405);
var table = map__58405__$1;
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58405__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.Keyword(null,"head","head",-771383919),cljs.core.first(rows)),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.rest);
});
nextjournal.clerk.viewer.normalize_table_data = (function nextjournal$clerk$viewer$normalize_table_data(data){
if(((cljs.core.map_QMARK_(data)) && (cljs.core.sequential_QMARK_(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(data))))){
return nextjournal.clerk.viewer.normalize_seq_to_vec(data);
} else {
if(((cljs.core.map_QMARK_(data)) && (cljs.core.sequential_QMARK_(cljs.core.first(cljs.core.vals(data)))))){
return nextjournal.clerk.viewer.normalize_map_of_seq(data);
} else {
if(((cljs.core.sequential_QMARK_(data)) && (cljs.core.map_QMARK_(cljs.core.first(data))))){
return nextjournal.clerk.viewer.normalize_seq_of_map(data);
} else {
if(((cljs.core.sequential_QMARK_(data)) && (cljs.core.sequential_QMARK_(cljs.core.first(data))))){
return nextjournal.clerk.viewer.normalize_seq_of_seq(data);
} else {
return null;

}
}
}
}
});
nextjournal.clerk.viewer.demunge_ex_data = (function nextjournal$clerk$viewer$demunge_ex_data(ex_data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ex_data,new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (traces){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58409_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__58409_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.demunge,cljs.core.pr_str));
}),traces);
}));
});









nextjournal.clerk.viewer.inspect_fn = (function nextjournal$clerk$viewer$inspect_fn(){
return cljs.core.eval(new cljs.core.Symbol("v","inspect","v/inspect",-1965639778,null));
});
nextjournal.clerk.viewer.when_wrapped = (function nextjournal$clerk$viewer$when_wrapped(f){
return (function (p1__58410_SHARP_){
var G__58411 = p1__58410_SHARP_;
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(p1__58410_SHARP_))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58411) : f.call(null,G__58411));
} else {
return G__58411;
}
});
});
nextjournal.clerk.viewer.inspect_wrapped_value = (function nextjournal$clerk$viewer$inspect_wrapped_value(wrapped_value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.viewer.inspect_fn(),(function (){var G__58412 = (nextjournal.clerk.viewer.apply_viewers.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.apply_viewers.cljs$core$IFn$_invoke$arity$1(wrapped_value) : nextjournal.clerk.viewer.apply_viewers.call(null,wrapped_value));
return (nextjournal.clerk.viewer.process_wrapped_value.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.process_wrapped_value.cljs$core$IFn$_invoke$arity$1(G__58412) : nextjournal.clerk.viewer.process_wrapped_value.call(null,G__58412));
})()], null);
});
nextjournal.clerk.viewer.mark_presented = (function nextjournal$clerk$viewer$mark_presented(wrapped_value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wrapped_value,new cljs.core.Keyword("nextjournal","presented?","nextjournal/presented?",302564567),true);
});
nextjournal.clerk.viewer.mark_preserve_keys = (function nextjournal$clerk$viewer$mark_preserve_keys(wrapped_value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wrapped_value,new cljs.core.Keyword("nextjournal","preserve-keys?","nextjournal/preserve-keys?",-231586167),true);
});
nextjournal.clerk.viewer.fetch_all = (function nextjournal$clerk$viewer$fetch_all(_opts,_xs){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`fetch-all` is deprecated, please use a `:transform-fn` with `mark-presented` instead.",cljs.core.PersistentArrayMap.EMPTY);
});
nextjournal.clerk.viewer.get_safe = (function nextjournal$clerk$viewer$get_safe(var_args){
var G__58420 = arguments.length;
switch (G__58420) {
case 1:
return nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$1 = (function (key){
return (function (p1__58418_SHARP_){
return nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$2(p1__58418_SHARP_,key);
});
}));

(nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$2 = (function (map,key){
if(cljs.core.map_QMARK_(map)){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,key);
}catch (e58422){if((e58422 instanceof Error)){
var _e = e58422;
return null;
} else {
throw e58422;

}
}} else {
return null;
}
}));

(nextjournal.clerk.viewer.get_safe.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.var_from_def_QMARK_ = nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal.clerk","var-from-def","nextjournal.clerk/var-from-def",270952447));
nextjournal.clerk.viewer.datafied_QMARK_ = nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal.clerk","datafied","nextjournal.clerk/datafied",795076723));
nextjournal.clerk.viewer.with_md_viewer = (function nextjournal$clerk$viewer$with_md_viewer(wrapped_value){
var map__58423 = nextjournal.clerk.viewer.__GT_value(wrapped_value);
var map__58423__$1 = cljs.core.__destructure_map(map__58423);
var node = map__58423__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58423__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("no type given for with-md-viewer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrapped-value","wrapped-value",1668982996),wrapped_value], null));
}

return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("nextjournal.markdown",cljs.core.name(type)),wrapped_value);
});
nextjournal.clerk.viewer.into_markup = (function nextjournal$clerk$viewer$into_markup(markup){
return (function (p__58425){
var map__58426 = p__58425;
var map__58426__$1 = cljs.core.__destructure_map(map__58426);
var wrapped_value = map__58426__$1;
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58426__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.mark_presented(nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"html-","html-",2137536874),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","html","v/html",641734256,null)], null),wrapped_value)),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (p__58427){
var map__58428 = p__58427;
var map__58428__$1 = cljs.core.__destructure_map(map__58428);
var node = map__58428__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58428__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58428__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__58429 = markup;
if(cljs.core.fn_QMARK_(markup)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__58429,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null));
} else {
return G__58429;
}
})(),(cljs.core.truth_(text)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text], null):(cljs.core.truth_(content)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58424_SHARP_){
var w = (function (){var G__58430 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.with_md_viewer(p1__58424_SHARP_),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),viewers);
return (nextjournal.clerk.viewer.apply_viewers.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.apply_viewers.cljs$core$IFn$_invoke$arity$1(G__58430) : nextjournal.clerk.viewer.apply_viewers.call(null,G__58430));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"html-","html-",2137536874),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_viewer(w)))){
return nextjournal.clerk.viewer.__GT_value(w);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.viewer.inspect_fn(),(nextjournal.clerk.viewer.process_wrapped_value.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.process_wrapped_value.cljs$core$IFn$_invoke$arity$1(w) : nextjournal.clerk.viewer.process_wrapped_value.call(null,w))], null);
}
}),content):null)));
}));
});
});
nextjournal.clerk.viewer.apply_viewer_unwrapping_var_from_def = (function nextjournal$clerk$viewer$apply_viewer_unwrapping_var_from_def(p__58431){
var map__58432 = p__58431;
var map__58432__$1 = cljs.core.__destructure_map(map__58432);
var result = map__58432__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58432__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58432__$1,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
if(cljs.core.truth_(viewer)){
var map__58433 = (function (){var and__4221__auto__ = cljs.core.map_QMARK_(viewer);
if(and__4221__auto__){
return viewer;
} else {
return and__4221__auto__;
}
})();
var map__58433__$1 = cljs.core.__destructure_map(map__58433);
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327));
var value__$1 = (cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.not(transform_fn);
if(and__4221__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("nextjournal.clerk","var-from-def","nextjournal.clerk/var-from-def",270952447));
} else {
return and__4221__auto__;
}
})())?cljs.core.deref(new cljs.core.Keyword("nextjournal.clerk","var-from-def","nextjournal.clerk/var-from-def",270952447).cljs$core$IFn$_invoke$arity$1(value)):value);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),((((cljs.core.var_QMARK_(viewer)) || (cljs.core.fn_QMARK_(viewer))))?(viewer.cljs$core$IFn$_invoke$arity$1 ? viewer.cljs$core$IFn$_invoke$arity$1(value__$1) : viewer.call(null,value__$1)):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),value__$1,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),nextjournal.clerk.viewer.normalize_viewer(viewer)], null)));
} else {
return result;
}
});
nextjournal.clerk.viewer.get_default_viewers = (function nextjournal$clerk$viewer$get_default_viewers(){
return new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nextjournal.clerk.viewer._BANG_viewers),nextjournal.clerk.viewer.default_viewers);
});
nextjournal.clerk.viewer.get_viewers = (function nextjournal$clerk$viewer$get_viewers(var_args){
var G__58436 = arguments.length;
switch (G__58436) {
case 1:
return nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$1 = (function (scope){
return nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$2(scope,null);
}));

(nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$2 = (function (scope,value){
var or__4223__auto__ = (cljs.core.truth_(value)?nextjournal.clerk.viewer.__GT_viewers(value):null);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = (cljs.core.truth_(scope)?(function (){var fexpr__58437 = cljs.core.deref(nextjournal.clerk.viewer._BANG_viewers);
return (fexpr__58437.cljs$core$IFn$_invoke$arity$1 ? fexpr__58437.cljs$core$IFn$_invoke$arity$1(scope) : fexpr__58437.call(null,scope));
})():null);
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return nextjournal.clerk.viewer.get_default_viewers();
}
}
}));

(nextjournal.clerk.viewer.get_viewers.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.hide_result_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-result","hide-result",-968725584),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (_){
return null;
})], null);
nextjournal.clerk.viewer.result_hidden_QMARK_ = (function nextjournal$clerk$viewer$result_hidden_QMARK_(result){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"hide-result","hide-result",-968725584),nextjournal.clerk.viewer.hide_result_viewer]),nextjournal.clerk.viewer.__GT_viewer(nextjournal.clerk.viewer.__GT_value(result)));
});
nextjournal.clerk.viewer.__GT_display = (function nextjournal$clerk$viewer$__GT_display(p__58440){
var map__58441 = p__58440;
var map__58441__$1 = cljs.core.__destructure_map(map__58441);
var code_cell = map__58441__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58441__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58441__$1,new cljs.core.Keyword(null,"ns?","ns?",-1192630279));
var map__58442 = result;
var map__58442__$1 = cljs.core.__destructure_map(map__58442);
var visibility = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58442__$1,new cljs.core.Keyword("nextjournal.clerk","visibility","nextjournal.clerk/visibility",-1860031708));
var result_QMARK_ = ((cljs.core.contains_QMARK_(code_cell,new cljs.core.Keyword(null,"result","result",1415092211))) && ((((!(nextjournal.clerk.viewer.result_hidden_QMARK_(result)))) && ((((!(cljs.core.contains_QMARK_(visibility,new cljs.core.Keyword(null,"hide-ns","hide-ns",-279339071))))) && (cljs.core.not((function (){var and__4221__auto____$3 = ns_QMARK_;
if(cljs.core.truth_(and__4221__auto____$3)){
return cljs.core.contains_QMARK_(visibility,new cljs.core.Keyword(null,"hide","hide",-596913169));
} else {
return and__4221__auto____$3;
}
})())))))));
var fold_QMARK_ = (((!(cljs.core.contains_QMARK_(visibility,new cljs.core.Keyword(null,"hide-ns","hide-ns",-279339071))))) && (((cljs.core.contains_QMARK_(visibility,new cljs.core.Keyword(null,"fold","fold",-887461332))) || (cljs.core.contains_QMARK_(visibility,new cljs.core.Keyword(null,"fold-ns","fold-ns",-340136982))))));
var code_QMARK_ = ((fold_QMARK_) || (cljs.core.contains_QMARK_(visibility,new cljs.core.Keyword(null,"show","show",-576705889))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result?","result?",1877293881),result_QMARK_,new cljs.core.Keyword(null,"fold?","fold?",-838772533),fold_QMARK_,new cljs.core.Keyword(null,"code?","code?",1380577153),code_QMARK_], null);
});
nextjournal.clerk.viewer.update_viewers = (function nextjournal$clerk$viewer$update_viewers(viewers,select_fn__GT_update_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (viewers__$1,p__58446){
var vec__58447 = p__58446;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58447,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58447,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (viewer){
var G__58450 = viewer;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(viewer) : pred.call(null,viewer)))){
return (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(G__58450) : update_fn.call(null,G__58450));
} else {
return G__58450;
}
}),viewers__$1);
}),viewers,select_fn__GT_update_fn);
});
nextjournal.clerk.viewer.add_viewers = (function nextjournal$clerk$viewer$add_viewers(var_args){
var G__58456 = arguments.length;
switch (G__58456) {
case 1:
return nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$1 = (function (added_viewers){
return nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.get_default_viewers(),added_viewers);
}));

(nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$2 = (function (viewers,added_viewers){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(added_viewers),viewers);
}));

(nextjournal.clerk.viewer.add_viewers.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.table_missing_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","missing","nextjournal/missing",-1931810187),null], null), null),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null)))], null);
nextjournal.clerk.viewer.table_markup_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("table","markup","table/markup",-1739626078),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"head+body","head+body",1604720934,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.text-xs.sans-serif.text-gray-900.dark:text-white.not-prose","table.text-xs.sans-serif.text-gray-900.dark:text-white.not-prose",-355725270)], null),cljs.core.list(new cljs.core.Symbol("v","inspect-children","v/inspect-children",248950098,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),new cljs.core.Symbol(null,"head+body","head+body",1604720934,null))))], null);
nextjournal.clerk.viewer.table_head_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("table","head","table/head",-743087705),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"header-row","header-row",983561376,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"number-col?","number-col?",-158949342,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead.border-b.border-gray-300.dark:border-slate-700","thead.border-b.border-gray-300.dark:border-slate-700",1960304842),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"header-cell","header-cell",1376541765,null),new cljs.core.Keyword("nextjournal","keys","nextjournal/keys",-1477484234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"title","title",-2017930186,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"value","value",1946509744,null)),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"value","value",1946509744,null)),cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),new cljs.core.Symbol(null,"value","value",1946509744,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.relative.pl-6.pr-2.py-1.align-bottom.font-medium","th.relative.pl-6.pr-2.py-1.align-bottom.font-medium",1224063935),cljs.core.list(new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"number-col?","number-col?",-158949342,null),new cljs.core.Symbol(null,"i","i",253690212,null)),"text-right")], null),new cljs.core.Symbol(null,"title","title",-2017930186,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"title","title",-2017930186,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),cljs.core.list(new cljs.core.Symbol("v","inspect","v/inspect",-1965639778,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"header-cell","header-cell",1376541765,null))], null)], null)))),new cljs.core.Symbol(null,"header-row","header-row",983561376,null))], null)))], null);
nextjournal.clerk.viewer.table_body_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("table","body","table/body",2087444141),new cljs.core.Keyword(null,"fetch-opts","fetch-opts",-1704398338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(20)], null),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"row","row",1070392006,null)], null),cljs.core.list(new cljs.core.Symbol("v","inspect","v/inspect",-1965639778,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)),new cljs.core.Symbol(null,"row","row",1070392006,null)))),new cljs.core.Symbol(null,"rows","rows",-1804386089,null))))], null);
nextjournal.clerk.viewer.table_row_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("table","row","table/row",-747986867),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"number-col?","number-col?",-158949342,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.hover:bg-gray-200.dark:hover:bg-slate-700","tr.hover:bg-gray-200.dark:hover:bg-slate-700",-1843832203),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"peek","peek",1349135202,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),"bg-black/5 dark:bg-gray-800","bg-white dark:bg-gray-900")], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"cell","cell",-1890190685,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pl-6.pr-2.py-1","td.pl-6.pr-2.py-1",134838880),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"number-col?","number-col?",-158949342,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-right"], null)),cljs.core.list(new cljs.core.Symbol("v","inspect","v/inspect",-1965639778,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"cell","cell",-1890190685,null))], null))),new cljs.core.Symbol(null,"row","row",1070392006,null))))], null);
nextjournal.clerk.viewer.update_table_viewers = (function nextjournal$clerk$viewer$update_table_viewers(viewers){
return nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.update_viewers(viewers,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.string_QMARK_]),new cljs.core.Keyword(null,"pred","pred",1927423397)),(function (p1__58457_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58457_SHARP_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","string-viewer","v/string-viewer",-607089457,null));
}),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.number_QMARK_]),new cljs.core.Keyword(null,"pred","pred",1927423397)),(function (p1__58458_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58458_SHARP_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tabular-nums","span.tabular-nums",-471576308),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("js","Number.isNaN","js/Number.isNaN",271195703,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),"NaN",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], null))));
}),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elision","elision",1599157097),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177)),(function (p1__58459_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58459_SHARP_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"fetch-opts","fetch-opts",-63866811,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"total","total",-737625351,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"unbounded?","unbounded?",-991489119,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num-cols","num-cols",729489141,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("v","consume-view-context","v/consume-view-context",1580793129,null),new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fetch-fn","fetch-fn",1682847910,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.border-t.dark:border-slate-700","tr.border-t.dark:border-slate-700",-965823596),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-center.py-1","td.text-center.py-1",43985783),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),new cljs.core.Symbol(null,"num-cols","num-cols",729489141,null),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"fetch-fn","fetch-fn",1682847910,null)),"bg-indigo-50 hover:bg-indigo-100 dark:bg-gray-800 dark:hover:bg-slate-700 cursor-pointer","text-gray-400 text-slate-500"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"fetch-fn","fetch-fn",1682847910,null)),cljs.core.list(new cljs.core.Symbol(null,"fetch-fn","fetch-fn",1682847910,null),new cljs.core.Symbol(null,"fetch-opts","fetch-opts",-63866811,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"total","total",-737625351,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"unbounded?","unbounded?",-991489119,null),"+"),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"fetch-fn","fetch-fn",1682847910,null))," more\u2026"," more elided")], null)], null))], null))));
})])),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.viewer.table_missing_viewer,nextjournal.clerk.viewer.table_markup_viewer,nextjournal.clerk.viewer.table_head_viewer,nextjournal.clerk.viewer.table_body_viewer,nextjournal.clerk.viewer.table_row_viewer], null));
});
nextjournal.clerk.viewer.update_val = (function nextjournal$clerk$viewer$update_val(var_args){
var args__4835__auto__ = [];
var len__4829__auto___58814 = arguments.length;
var i__4830__auto___58815 = (0);
while(true){
if((i__4830__auto___58815 < len__4829__auto___58814)){
args__4835__auto__.push((arguments[i__4830__auto___58815]));

var G__58816 = (i__4830__auto___58815 + (1));
i__4830__auto___58815 = G__58816;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return nextjournal.clerk.viewer.update_val.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(nextjournal.clerk.viewer.update_val.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function (wrapped_value){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,wrapped_value,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),f,args);
});
}));

(nextjournal.clerk.viewer.update_val.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nextjournal.clerk.viewer.update_val.cljs$lang$applyTo = (function (seq58464){
var G__58465 = cljs.core.first(seq58464);
var seq58464__$1 = cljs.core.next(seq58464);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58465,seq58464__$1);
}));

nextjournal.clerk.viewer.markdown_viewers = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","doc","nextjournal.markdown/doc",-681589518),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","heading","nextjournal.markdown/heading",-318469386),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p__58474){
var map__58475 = p__58474;
var map__58475__$1 = cljs.core.__destructure_map(map__58475);
var node = map__58475__$1;
var heading_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading_level)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),lambdaisland.uri.normalize.normalize_fragment(nextjournal.markdown.transform.__GT_text(node))], null)], null);
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","image","nextjournal.markdown/image",-2078770273),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (p1__58467_SHARP_){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.inline","img.inline",-1116141579),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_value(p1__58467_SHARP_))], null));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","blockquote","nextjournal.markdown/blockquote",928507835),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote","blockquote",372264190)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","paragraph","nextjournal.markdown/paragraph",655734744),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","plain","nextjournal.markdown/plain",-1301352754),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","ruler","nextjournal.markdown/ruler",579881142),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","code","nextjournal.markdown/code",-1188751795),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (wrapped_value){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-code","div.viewer-code",567168659),nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),nextjournal.markdown.transform.__GT_text(nextjournal.clerk.viewer.__GT_value(wrapped_value)))], null));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","em","nextjournal.markdown/em",-1954041482),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","strong","nextjournal.markdown/strong",2108286045),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","monospace","nextjournal.markdown/monospace",540373836),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","strikethrough","nextjournal.markdown/strikethrough",301946795),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","link","nextjournal.markdown/link",-232520869),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p1__58468_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__58468_SHARP_)],null));
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","internal-link","nextjournal.markdown/internal-link",140443891),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p1__58469_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p1__58469_SHARP_))].join('')], null)],null));
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","hashtag","nextjournal.markdown/hashtag",1163949980),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p1__58470_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p1__58470_SHARP_))].join('')], null)],null));
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","text","nextjournal.markdown/text",-1344313640),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","softbreak","nextjournal.markdown/softbreak",-520361768),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (_){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," "], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","formula","nextjournal.markdown/formula",-441899729),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),nextjournal.clerk.viewer.__GT_value),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tex","tex",-1347377810,null)], null),cljs.core.list(new cljs.core.Symbol("v","katex-viewer","v/katex-viewer",2004115584,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inline?","inline?",-1674483791),true], null)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","block-formula","nextjournal.markdown/block-formula",-1473484788),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),nextjournal.clerk.viewer.__GT_value),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","katex-viewer","v/katex-viewer",2004115584,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","bullet-list","nextjournal.markdown/bullet-list",-398734570),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","numbered-list","nextjournal.markdown/numbered-list",-1217603445),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","todo-list","nextjournal.markdown/todo-list",8807481),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.contains-task-list","ul.contains-task-list",-299292859)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","list-item","nextjournal.markdown/list-item",1772087365),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","todo-item","nextjournal.markdown/todo-item",940523205),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p__58477){
var map__58478 = p__58477;
var map__58478__$1 = cljs.core.__destructure_map(map__58478);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58478__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(attrs)], null)], null)], null);
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","table","nextjournal.markdown/table",-1954735827),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","table-head","nextjournal.markdown/table-head",1504661249),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","table-body","nextjournal.markdown/table-body",1018071804),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","table-row","nextjournal.markdown/table-row",544131596),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","table-header","nextjournal.markdown/table-header",-1008564809),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p1__58472_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),nextjournal.markdown.transform.table_alignment(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__58472_SHARP_))], null)],null));
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","table-data","nextjournal.markdown/table-data",-255288050),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p1__58473_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),nextjournal.markdown.transform.table_alignment(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__58473_SHARP_))], null)],null));
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","toc","nextjournal.markdown/toc",343559258),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toc","div.toc",2085460476)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","sidenote","nextjournal.markdown/sidenote",-2067797147),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p__58482){
var map__58483 = p__58482;
var map__58483__$1 = cljs.core.__destructure_map(map__58483);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58483__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sidenote","span.sidenote",-1886925254),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"3px"], null)], null),(new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(attrs) + (1))], null)], null);
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","sidenote-ref","nextjournal.markdown/sidenote-ref",1709421577),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.sidenote-ref","sup.sidenote-ref",-900607849)], null))], null)], true);
nextjournal.clerk.viewer.char_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.char_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-string.inspected-value","span.cmt-string.inspected-value",-610812505),"\\",new cljs.core.Symbol(null,"c","c",-122660552,null)], null)))], null);
nextjournal.clerk.viewer.string_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","quoted-string-viewer","v/quoted-string-viewer",-2051885616,null),new cljs.core.Keyword(null,"fetch-opts","fetch-opts",-1704398338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(80)], null)], null);
nextjournal.clerk.viewer.number_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","number-viewer","v/number-viewer",1292682586,null)], null);
nextjournal.clerk.viewer.number_hex_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"number-hex","number-hex",-9072138),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null)], null),cljs.core.list(new cljs.core.Symbol("v","number-viewer","v/number-viewer",1292682586,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"0x",cljs.core.list(new cljs.core.Symbol(null,".toString",".toString",1703252567,null),cljs.core.list(new cljs.core.Symbol("js","Number.","js/Number.",952837503,null),new cljs.core.Symbol(null,"num","num",-669195096,null)),(16)))))], null);
nextjournal.clerk.viewer.symbol_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.symbol_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-keyword.inspected-value","span.cmt-keyword.inspected-value",-1622971182),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null)))], null);
nextjournal.clerk.viewer.keyword_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-atom.inspected-value","span.cmt-atom.inspected-value",95454221),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null)))], null);
nextjournal.clerk.viewer.nil_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-default.inspected-value","span.cmt-default.inspected-value",588849128),"nil"], null)))], null);
nextjournal.clerk.viewer.boolean_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-bool.inspected-value","span.cmt-bool.inspected-value",-117987200),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null)))], null);
nextjournal.clerk.viewer.map_entry_viewer = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.map_entry_QMARK_,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"map-entry","map-entry",-1310914056),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xs","xs",-2004992428,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.list(new cljs.core.Symbol("v","inspect-children","v/inspect-children",248950098,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),cljs.core.list(new cljs.core.Symbol(null,"interpose","interpose",-2078295140,null)," ")),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)))),new cljs.core.Keyword(null,"fetch-opts","fetch-opts",-1704398338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(2)], null)], null);
nextjournal.clerk.viewer.var_from_def_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),nextjournal.clerk.viewer.var_from_def_QMARK_,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.update_val(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,new cljs.core.Keyword("nextjournal.clerk","var-from-def","nextjournal.clerk/var-from-def",270952447)))], null);
nextjournal.clerk.viewer.read_PLUS_inspect_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"read+inspect","read+inspect",71456950),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"try","try",-1273693247,null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("v","inspect-paginated","v/inspect-paginated",1092423606,null),cljs.core.list(new cljs.core.Symbol("v","read-string","v/read-string",-558384589,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null)),cljs.core.list(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),new cljs.core.Symbol(null,"_e","_e",-1055975395,null),cljs.core.list(new cljs.core.Symbol("v","unreadable-edn-viewer","v/unreadable-edn-viewer",-1057395076,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))], null);
nextjournal.clerk.viewer.vector_viewer = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","coll-viewer","v/coll-viewer",-1280598828,null),new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203),"[",new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602),"]",new cljs.core.Keyword(null,"fetch-opts","fetch-opts",-1704398338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(20)], null)], null);
nextjournal.clerk.viewer.set_viewer = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","coll-viewer","v/coll-viewer",-1280598828,null),new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203),"#{",new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602),"}",new cljs.core.Keyword(null,"fetch-opts","fetch-opts",-1704398338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(20)], null)], null);
nextjournal.clerk.viewer.sequential_viewer = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","coll-viewer","v/coll-viewer",-1280598828,null),new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203),"(",new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602),")",new cljs.core.Keyword(null,"fetch-opts","fetch-opts",-1704398338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(20)], null)], null);
nextjournal.clerk.viewer.map_viewer = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","map-viewer","v/map-viewer",-1236941237,null),new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203),"{",new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602),"}",new cljs.core.Keyword(null,"fetch-opts","fetch-opts",-1704398338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(10)], null)], null);
nextjournal.clerk.viewer.var__GT_symbol = (function nextjournal$clerk$viewer$var__GT_symbol(v){
if(sci.impl.vars.var_QMARK_(v)){
return sci.impl.vars.toSymbol(v);
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
}
});
nextjournal.clerk.viewer.var_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.var_QMARK_,sci.impl.vars.var_QMARK_),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.var__GT_symbol,nextjournal.clerk.viewer.__GT_value),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#'",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null)], null)))], null);
nextjournal.clerk.viewer.throwable_viewer = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),(function (e){
return (e instanceof Error);
}),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","throwable-viewer","v/throwable-viewer",1465148876,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.mark_presented,nextjournal.clerk.viewer.update_val(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.demunge_ex_data,clojure.datafy.datafy)))], null);
nextjournal.clerk.viewer.ideref_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__58498_SHARP_){
return (p1__58498_SHARP_ instanceof cljs.core.IDeref);
}),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (wrapped_value){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tagged-value","tagged-value",-1751091030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"object",new cljs.core.Keyword(null,"value","value",305978217),(function (){var r = nextjournal.clerk.viewer.__GT_value(wrapped_value);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.type(r),(function (){var temp__5751__auto__ = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.deref_as_map !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.deref_as_map;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","deref-as-map","cljs.core/deref-as-map",92502742,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null);
if(cljs.core.truth_(temp__5751__auto__)){
var deref_as_map = temp__5751__auto__;
return (deref_as_map.cljs$core$IFn$_invoke$arity$1 ? deref_as_map.cljs$core$IFn$_invoke$arity$1(r) : deref_as_map.call(null,r));
} else {
return r;
}
})()],null));
})()], null));
})], null);
nextjournal.clerk.viewer.regex_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.regexp_QMARK_,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (wrapped_value){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tagged-value","tagged-value",-1751091030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"",new cljs.core.Keyword(null,"value","value",305978217),(function (){var regex = nextjournal.clerk.viewer.__GT_value(wrapped_value);
return regex.source;
})()], null));
})], null);
nextjournal.clerk.viewer.fallback_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.constantly(new cljs.core.Keyword(null,"true","true",-1114210334)),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.update_val((function (p1__58509_SHARP_){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"read+inspect","read+inspect",71456950),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__58509_SHARP_], 0)));
}))], null);
nextjournal.clerk.viewer.elision_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"elision","elision",1599157097),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","elision-viewer","v/elision-viewer",194264003,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.katex_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"latex","latex",-1820161144),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","katex-viewer","v/katex-viewer",2004115584,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.mathjax_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"mathjax","mathjax",-1009833386),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","mathjax-viewer","v/mathjax-viewer",1826405246,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.html_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.mark_presented,nextjournal.clerk.viewer.update_val(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.walk.postwalk,nextjournal.clerk.viewer.when_wrapped(nextjournal.clerk.viewer.inspect_wrapped_value))))], null);
nextjournal.clerk.viewer.plotly_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"plotly","plotly",817625458),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","plotly-viewer","v/plotly-viewer",746101709,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.vega_lite_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","vega-lite-viewer","v/vega-lite-viewer",2144084417,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.markdown_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (wrapped_value){
return nextjournal.clerk.viewer.with_md_viewer(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.mark_presented(wrapped_value),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (p1__58510_SHARP_){
var G__58513 = p1__58510_SHARP_;
if(typeof p1__58510_SHARP_ === 'string'){
return nextjournal.markdown.parse(G__58513);
} else {
return G__58513;
}
})),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),nextjournal.clerk.viewer.add_viewers,nextjournal.clerk.viewer.markdown_viewers));
})], null);
nextjournal.clerk.viewer.code_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","code-viewer","v/code-viewer",1979929432,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.mark_presented,nextjournal.clerk.viewer.update_val((function (v){
if(typeof v === 'string'){
return v;
} else {
return clojure.string.trim((function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58517_58875 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58518_58876 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58519_58877 = true;
var _STAR_print_fn_STAR__temp_val__58520_58878 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58519_58877);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58520_58878);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(v);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58518_58876);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58517_58875);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})());
}
})))], null);
nextjournal.clerk.viewer.code_folded_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code-folded","code-folded",-864616068),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","foldable-code-viewer","v/foldable-code-viewer",850003924,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.mark_presented,nextjournal.clerk.viewer.update_val((function (v){
if(typeof v === 'string'){
return v;
} else {
var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58526_58879 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58527_58880 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58528_58881 = true;
var _STAR_print_fn_STAR__temp_val__58529_58882 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58528_58881);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58529_58882);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(v);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58527_58880);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58526_58879);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
}
})))], null);
nextjournal.clerk.viewer.reagent_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"reagent","reagent",2131627322),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","reagent-viewer","v/reagent-viewer",-1176806613,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.row_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"item-count","item-count",1649190299,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"items","items",-1622480831,null))], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"md:flex md:flex-row md:gap-4 not-prose",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"item","item",1889905329,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.flex-auto","div.flex.items-center.justify-center.flex-auto",336202477),cljs.core.list(new cljs.core.Symbol("v","inspect","v/inspect",-1965639778,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"item","item",1889905329,null))], null))),new cljs.core.Symbol(null,"items","items",-1622480831,null)))))], null);
nextjournal.clerk.viewer.col_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"md:flex md:flex-col md:gap-4 clerk-grid not-prose",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"item","item",1889905329,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center","div.flex.items-center.justify-center",-1114622942),cljs.core.list(new cljs.core.Symbol("v","inspect","v/inspect",-1965639778,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"item","item",1889905329,null))], null))),new cljs.core.Symbol(null,"items","items",-1622480831,null))))], null);
nextjournal.clerk.viewer.table_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (wrapped_value){
var temp__5751__auto__ = nextjournal.clerk.viewer.normalize_table_data(nextjournal.clerk.viewer.__GT_value(wrapped_value));
if(cljs.core.truth_(temp__5751__auto__)){
var map__58538 = temp__5751__auto__;
var map__58538__$1 = cljs.core.__destructure_map(map__58538);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58538__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58538__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wrapped_value,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword("table","markup","table/markup",-1739626078)),new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537),(function (p1__58535_SHARP_){
var or__4223__auto__ = p1__58535_SHARP_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"wide","wide",-151772487);
}
})),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),nextjournal.clerk.viewer.update_table_viewers),new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-cols","num-cols",-911042386),cljs.core.count((function (){var or__4223__auto__ = head;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.first(rows);
}
})()),new cljs.core.Keyword(null,"number-col?","number-col?",-1799480869),((cljs.core.seq(cljs.core.first(rows)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,cljs.core.first(rows)):cljs.core.PersistentArrayMap.EMPTY)], null)),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (){var G__58539 = cljs.core.PersistentVector.EMPTY;
var G__58539__$1 = ((cljs.core.seq(rows))?cljs.core.cons(nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("table","body","table/body",2087444141),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,new cljs.core.Keyword("table","row","table/row",-747986867)),rows)),G__58539):G__58539);
if(cljs.core.truth_(head)){
return cljs.core.cons(nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("table","head","table/head",-743087705),head),G__58539__$1);
} else {
return G__58539__$1;
}
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.mark_presented(wrapped_value),new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537),new cljs.core.Keyword(null,"wide","wide",-151772487)),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1(wrapped_value) : nextjournal.clerk.viewer.present.call(null,wrapped_value))], null)),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","table-error","v/table-error",1752758815,null)], null));
}
})], null);
nextjournal.clerk.viewer.table_error_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table-error","table-error",112227742),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","table-error","v/table-error",1752758815,null),new cljs.core.Keyword(null,"fetch-opts","fetch-opts",-1704398338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(1)], null)], null);
nextjournal.clerk.viewer.code_block_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("clerk","code-block","clerk/code-block",-2085230478),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (p__58546){
var map__58547 = p__58546;
var map__58547__$1 = cljs.core.__destructure_map(map__58547);
var wrapped_value = map__58547__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wrapped_value,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),(cljs.core.truth_(new cljs.core.Keyword(null,"fold?","fold?",-838772533).cljs$core$IFn$_invoke$arity$1(value))?new cljs.core.Keyword(null,"code-folded","code-folded",-864616068):new cljs.core.Keyword(null,"code","code",1586293142))),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Keyword(null,"text","text",-1790561697));
})], null);
nextjournal.clerk.viewer.tagged_value_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tagged-value","tagged-value",-1751091030),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"space?","space?",271216862,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),cljs.core.list(new cljs.core.Symbol("v","tagged-value","v/tagged-value",-110559897,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space?","space?",-1369314665),new cljs.core.Symbol(null,"space?","space?",271216862,null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"#",new cljs.core.Symbol(null,"tag","tag",350170304,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("v","inspect-paginated","v/inspect-paginated",1092423606,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)))),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (wrapped_value){
return nextjournal.clerk.viewer.mark_presented(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(wrapped_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Keyword(null,"value","value",305978217)], null),nextjournal.clerk.viewer.present));
})], null);
nextjournal.clerk.viewer.result_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("clerk","result","clerk/result",1506041978),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","result-viewer","v/result-viewer",-341122538,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.notebook_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("clerk","notebook","clerk/notebook",699315010),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("v","notebook-viewer","v/notebook-viewer",-1214195312,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.default_viewers = cljs.core.PersistentVector.fromArray([nextjournal.clerk.viewer.char_viewer,nextjournal.clerk.viewer.string_viewer,nextjournal.clerk.viewer.number_viewer,nextjournal.clerk.viewer.number_hex_viewer,nextjournal.clerk.viewer.symbol_viewer,nextjournal.clerk.viewer.keyword_viewer,nextjournal.clerk.viewer.nil_viewer,nextjournal.clerk.viewer.boolean_viewer,nextjournal.clerk.viewer.map_entry_viewer,nextjournal.clerk.viewer.var_from_def_viewer,nextjournal.clerk.viewer.read_PLUS_inspect_viewer,nextjournal.clerk.viewer.vector_viewer,nextjournal.clerk.viewer.set_viewer,nextjournal.clerk.viewer.sequential_viewer,nextjournal.clerk.viewer.map_viewer,nextjournal.clerk.viewer.var_viewer,nextjournal.clerk.viewer.throwable_viewer,nextjournal.clerk.viewer.buffered_image_viewer,nextjournal.clerk.viewer.ideref_viewer,nextjournal.clerk.viewer.regex_viewer,nextjournal.clerk.viewer.fallback_viewer,nextjournal.clerk.viewer.elision_viewer,nextjournal.clerk.viewer.katex_viewer,nextjournal.clerk.viewer.mathjax_viewer,nextjournal.clerk.viewer.html_viewer,nextjournal.clerk.viewer.plotly_viewer,nextjournal.clerk.viewer.vega_lite_viewer,nextjournal.clerk.viewer.markdown_viewer,nextjournal.clerk.viewer.code_viewer,nextjournal.clerk.viewer.code_folded_viewer,nextjournal.clerk.viewer.reagent_viewer,nextjournal.clerk.viewer.row_viewer,nextjournal.clerk.viewer.col_viewer,nextjournal.clerk.viewer.table_viewer,nextjournal.clerk.viewer.table_error_viewer,nextjournal.clerk.viewer.code_block_viewer,nextjournal.clerk.viewer.tagged_value_viewer,nextjournal.clerk.viewer.result_viewer,nextjournal.clerk.viewer.notebook_viewer,nextjournal.clerk.viewer.hide_result_viewer], true);
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.viewer !== 'undefined') && (typeof nextjournal.clerk.viewer._BANG_viewers !== 'undefined')){
} else {
/**
 * atom containing a map of and per-namespace viewers or `:defaults` overridden viewers.
 */
nextjournal.clerk.viewer._BANG_viewers = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
nextjournal.clerk.viewer.rank_val = (function nextjournal$clerk$viewer$rank_val(val){
return cljs.core.reduce_kv((function (res,idx,pred){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.ifn_QMARK_(pred);
if(and__4221__auto__){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(val) : pred.call(null,val));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.reduced(idx);
} else {
return res;
}
}),(-1),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pred","pred",1927423397)),nextjournal.clerk.viewer.default_viewers));
});
nextjournal.clerk.viewer.resilient_compare = (function nextjournal$clerk$viewer$resilient_compare(a,b){
try{return cljs.core.compare(a,b);
}catch (e58555){if((e58555 instanceof Error)){
var _e = e58555;
return cljs.core.compare(nextjournal.clerk.viewer.rank_val(a),nextjournal.clerk.viewer.rank_val(b));
} else {
throw e58555;

}
}});
nextjournal.clerk.viewer.ensure_sorted = (function nextjournal$clerk$viewer$ensure_sorted(xs){
if(cljs.core.sorted_QMARK_(xs)){
return xs;
} else {
if(cljs.core.map_QMARK_(xs)){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,nextjournal.clerk.viewer.resilient_compare,xs);
} else {
if(cljs.core.set_QMARK_(xs)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.resilient_compare,xs);
} else {
return xs;

}
}
}
});
nextjournal.clerk.viewer.find_viewer = (function nextjournal$clerk$viewer$find_viewer(viewers,select_fn){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(select_fn,viewers));
});
nextjournal.clerk.viewer.find_named_viewer = (function nextjournal$clerk$viewer$find_named_viewer(viewers,viewer_name){
return nextjournal.clerk.viewer.find_viewer(viewers,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([viewer_name]),new cljs.core.Keyword(null,"name","name",1843675177)));
});
nextjournal.clerk.viewer.viewer_for = (function nextjournal$clerk$viewer$viewer_for(viewers,x){
var or__4223__auto__ = (function (){var temp__5753__auto__ = nextjournal.clerk.viewer.__GT_viewer(x);
if(cljs.core.truth_(temp__5753__auto__)){
var selected_viewer = temp__5753__auto__;
if((selected_viewer instanceof cljs.core.Keyword)){
var or__4223__auto__ = nextjournal.clerk.viewer.find_named_viewer(viewers,selected_viewer);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot find viewer named ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_viewer)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected-viewer","selected-viewer",771788520),selected_viewer,new cljs.core.Keyword(null,"viewers","viewers",-415894011),viewers], null));
}
} else {
return selected_viewer;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = nextjournal.clerk.viewer.find_viewer(viewers,(function (){var v = nextjournal.clerk.viewer.__GT_value(x);
return (function (p__58558){
var map__58559 = p__58558;
var map__58559__$1 = cljs.core.__destructure_map(map__58559);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58559__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var and__4221__auto__ = cljs.core.ifn_QMARK_(pred);
if(and__4221__auto__){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v));
} else {
return and__4221__auto__;
}
});
})());
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot find matching viewer for value",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),nextjournal.clerk.viewer.__GT_value(x),new cljs.core.Keyword(null,"viewers","viewers",-415894011),viewers,new cljs.core.Keyword(null,"x","x",2099068185),x], null));
}
}
});
nextjournal.clerk.viewer.ensure_wrapped_with_viewers = (function nextjournal$clerk$viewer$ensure_wrapped_with_viewers(var_args){
var G__58561 = arguments.length;
switch (G__58561) {
case 1:
return nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$1 = (function (x){
return nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),x);
}));

(nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2 = (function (viewers,x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),(function (x_viewers){
var or__4223__auto__ = x_viewers;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return viewers;
}
}));
}));

(nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.__GT_opts = (function nextjournal$clerk$viewer$__GT_opts(wrapped_value){
return cljs.core.select_keys(wrapped_value,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537),new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249),new cljs.core.Keyword(null,"!budget","!budget",-1542780076),new cljs.core.Keyword(null,"budget","budget",-405386281),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"current-path","current-path",-113759954),new cljs.core.Keyword(null,"offset","offset",296498311)], null));
});
nextjournal.clerk.viewer.apply_viewers_STAR_ = (function nextjournal$clerk$viewer$apply_viewers_STAR_(wrapped_value){
while(true){
if(cljs.core.empty_QMARK_(nextjournal.clerk.viewer.__GT_viewers(wrapped_value))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot apply empty viewers",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrapped-value","wrapped-value",1668982996),wrapped_value], null));
} else {
}

var viewers = nextjournal.clerk.viewer.__GT_viewers(wrapped_value);
var map__58576 = nextjournal.clerk.viewer.viewer_for(viewers,wrapped_value);
var map__58576__$1 = cljs.core.__destructure_map(map__58576);
var viewer = map__58576__$1;
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58576__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58576__$1,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327));
var transformed_value = nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2(viewers,(function (){var G__58577 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(wrapped_value,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
if(cljs.core.truth_(transform_fn)){
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(G__58577) : transform_fn.call(null,G__58577));
} else {
return G__58577;
}
})());
var wrapped_value_SINGLEQUOTE_ = (function (){var G__58578 = transformed_value;
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(nextjournal.clerk.viewer.__GT_value(transformed_value)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__58578,nextjournal.clerk.viewer.__GT_value(transformed_value)], 0));
} else {
return G__58578;
}
})();
if(cljs.core.truth_((function (){var and__4221__auto__ = transform_fn;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(render_fn);
} else {
return and__4221__auto__;
}
})())){
var G__58935 = wrapped_value_SINGLEQUOTE_;
wrapped_value = G__58935;
continue;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wrapped_value_SINGLEQUOTE_,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),viewer),nextjournal.clerk.viewer.__GT_opts(wrapped_value)], 0));
}
break;
}
});
nextjournal.clerk.viewer.apply_viewers = (function nextjournal$clerk$viewer$apply_viewers(x){
return nextjournal.clerk.viewer.apply_viewers_STAR_(nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$1(x));
});
/**
 * Helper function to walk a given `x` and replace the viewers with their counts. Useful for debugging.
 */
nextjournal.clerk.viewer.count_viewers = (function nextjournal$clerk$viewer$count_viewers(x){
return clojure.walk.postwalk((function (p1__58581_SHARP_){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(p1__58581_SHARP_))){
var G__58582 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__58581_SHARP_,new cljs.core.Keyword(null,"!budget","!budget",-1542780076));
if(cljs.core.truth_(new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841).cljs$core$IFn$_invoke$arity$1(p1__58581_SHARP_))){
return clojure.set.rename_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__58582,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),cljs.core.count),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),new cljs.core.Keyword("nextjournal","viewers-count","nextjournal/viewers-count",-1708484127)], null));
} else {
return G__58582;
}
} else {
return p1__58581_SHARP_;
}
}),x);
});
nextjournal.clerk.viewer.bounded_count_opts = (function nextjournal$clerk$viewer$bounded_count_opts(n,xs){
if(typeof n === 'number'){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("n must be a number?",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"xs","xs",649443341),xs], null));
}

var limit = (n + (10000));
var total = (function (){try{return cljs.core.bounded_count(limit,xs);
}catch (e58583){if((e58583 instanceof Error)){
var _ = e58583;
return null;
} else {
throw e58583;

}
}})();
var G__58586 = cljs.core.PersistentArrayMap.EMPTY;
var G__58586__$1 = (cljs.core.truth_(total)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58586,new cljs.core.Keyword(null,"total","total",1916810418),total):G__58586);
if(((cljs.core.not(total)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total,limit)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58586__$1,new cljs.core.Keyword(null,"unbounded?","unbounded?",1662946650),true);
} else {
return G__58586__$1;
}
});
/**
 * Takes a map with optional `:n` and `:offset` and returns a transducer that drops `:offset` and takes `:n`.
 */
nextjournal.clerk.viewer.drop_PLUS_take_xf = (function nextjournal$clerk$viewer$drop_PLUS_take_xf(p__58587){
var map__58588 = p__58587;
var map__58588__$1 = cljs.core.__destructure_map(map__58588);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword(null,"n","n",562130025));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58588__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var G__58589 = cljs.core.drop.cljs$core$IFn$_invoke$arity$1(offset);
if(cljs.core.int_QMARK_(n)){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__58589,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n));
} else {
return G__58589;
}
});
nextjournal.clerk.viewer.process_render_fn = (function nextjournal$clerk$viewer$process_render_fn(p__58590){
var map__58591 = p__58590;
var map__58591__$1 = cljs.core.__destructure_map(map__58591);
var viewer = map__58591__$1;
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58591__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));
var G__58592 = viewer;
if(cljs.core.truth_((function (){var and__4221__auto__ = render_fn;
if(cljs.core.truth_(and__4221__auto__)){
return (!(nextjournal.clerk.viewer.viewer_fn_QMARK_(render_fn)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__58592,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),nextjournal.clerk.viewer.__GT_viewer_fn);
} else {
return G__58592;
}
});
nextjournal.clerk.viewer.process_viewer = (function nextjournal$clerk$viewer$process_viewer(viewer){
if((!(cljs.core.map_QMARK_(viewer)))){
return viewer;
} else {
return nextjournal.clerk.viewer.process_render_fn(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(viewer,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),new cljs.core.Keyword(null,"update-viewers-fn","update-viewers-fn",-992231949)], 0)));
}
});
nextjournal.clerk.viewer.process_wrapped_value = (function nextjournal$clerk$viewer$process_wrapped_value(wrapped_value){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(wrapped_value,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537),new cljs.core.Keyword("nextjournal","content-type","nextjournal/content-type",1223991450),new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"n","n",562130025)], null)),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),nextjournal.clerk.viewer.process_viewer);
});
nextjournal.clerk.viewer.make_elision = (function nextjournal$clerk$viewer$make_elision(viewers,fetch_opts){
return nextjournal.clerk.viewer.process_wrapped_value(nextjournal.clerk.viewer.apply_viewers(nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2(viewers,nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elision","elision",1599157097),fetch_opts))));
});
nextjournal.clerk.viewer.find_elision = (function nextjournal$clerk$viewer$find_elision(desc){
return nextjournal.clerk.viewer.__GT_value(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elision","elision",1599157097),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759)),cljs.core.tree_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.vector_QMARK_),(function (p1__58600_SHARP_){
var G__58601 = p1__58600_SHARP_;
if(cljs.core.map_QMARK_(p1__58600_SHARP_)){
return cljs.core.vals(G__58601);
} else {
return G__58601;
}
}),desc))));
});
nextjournal.clerk.viewer.__GT_fetch_opts = (function nextjournal$clerk$viewer$__GT_fetch_opts(wrapped_value){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fetch-opts","fetch-opts",-1704398338).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_viewer(wrapped_value)),cljs.core.select_keys(wrapped_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311)], null))], 0));
});
nextjournal.clerk.viewer.get_elision = (function nextjournal$clerk$viewer$get_elision(wrapped_value){
var map__58603 = nextjournal.clerk.viewer.__GT_fetch_opts(wrapped_value);
var map__58603__$1 = cljs.core.__destructure_map(map__58603);
var fetch_opts = map__58603__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58603__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58603__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58603__$1,new cljs.core.Keyword(null,"n","n",562130025));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fetch_opts,nextjournal.clerk.viewer.bounded_count_opts(n,nextjournal.clerk.viewer.__GT_value(wrapped_value))], 0));
});
nextjournal.clerk.viewer.get_fetch_opts_n = (function nextjournal$clerk$viewer$get_fetch_opts_n(wrapped_value){
return new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_fetch_opts(wrapped_value));
});
nextjournal.clerk.viewer.inherit_opts = (function nextjournal$clerk$viewer$inherit_opts(p__58604,value,path_segment){
var map__58605 = p__58604;
var map__58605__$1 = cljs.core.__destructure_map(map__58605);
var wrapped_value = map__58605__$1;
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58605__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2(viewers,value),nextjournal.clerk.viewer.__GT_opts(wrapped_value)], 0)),new cljs.core.Keyword(null,"offset","offset",296498311)),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),path_segment),new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),path_segment);
});
nextjournal.clerk.viewer.present_PLUS_paginate_children = (function nextjournal$clerk$viewer$present_PLUS_paginate_children(p__58607){
var map__58608 = p__58607;
var map__58608__$1 = cljs.core.__destructure_map(map__58608);
var wrapped_value = map__58608__$1;
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58608__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
var preserve_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58608__$1,new cljs.core.Keyword("nextjournal","preserve-keys?","nextjournal/preserve-keys?",-231586167));
var _BANG_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58608__$1,new cljs.core.Keyword(null,"!budget","!budget",-1542780076));
var budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58608__$1,new cljs.core.Keyword(null,"budget","budget",-405386281));
var map__58609 = nextjournal.clerk.viewer.__GT_fetch_opts(wrapped_value);
var map__58609__$1 = cljs.core.__destructure_map(map__58609);
var fetch_opts = map__58609__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58609__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58609__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58609__$1,new cljs.core.Keyword(null,"n","n",562130025));
var xs = nextjournal.clerk.viewer.__GT_value(wrapped_value);
var paginate_QMARK_ = ((typeof n === 'number') && (cljs.core.not(preserve_keys_QMARK_)));
var fetch_opts_SINGLEQUOTE_ = (function (){var G__58613 = fetch_opts;
if(cljs.core.truth_((function (){var and__4221__auto__ = paginate_QMARK_;
if(and__4221__auto__){
var and__4221__auto____$1 = _BANG_budget;
if(cljs.core.truth_(and__4221__auto____$1)){
return (!(cljs.core.map_entry_QMARK_(xs)));
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58613,new cljs.core.Keyword(null,"n","n",562130025),cljs.core.min,cljs.core.deref(_BANG_budget));
} else {
return G__58613;
}
})();
var children = (cljs.core.truth_(preserve_keys_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__58614){
var vec__58615 = p__58614;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58615,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58615,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__58618 = nextjournal.clerk.viewer.inherit_opts(wrapped_value,v,k);
return (nextjournal.clerk.viewer.present_STAR_.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.present_STAR_.cljs$core$IFn$_invoke$arity$1(G__58618) : nextjournal.clerk.viewer.present_STAR_.call(null,G__58618));
})()], null);
})),xs):cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(((paginate_QMARK_)?nextjournal.clerk.viewer.drop_PLUS_take_xf(fetch_opts_SINGLEQUOTE_):cljs.core.identity),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,x){
var G__58619 = nextjournal.clerk.viewer.inherit_opts(wrapped_value,x,(i + (function (){var or__4223__auto__ = offset;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})()));
return (nextjournal.clerk.viewer.present_STAR_.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.present_STAR_.cljs$core$IFn$_invoke$arity$1(G__58619) : nextjournal.clerk.viewer.present_STAR_.call(null,G__58619));
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_)),nextjournal.clerk.viewer.ensure_sorted(xs)));
var map__58610 = (function (){var and__4221__auto__ = paginate_QMARK_;
if(and__4221__auto__){
return nextjournal.clerk.viewer.get_elision(wrapped_value);
} else {
return and__4221__auto__;
}
})();
var map__58610__$1 = cljs.core.__destructure_map(map__58610);
var elision = map__58610__$1;
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var unbounded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword(null,"unbounded?","unbounded?",1662946650));
var new_offset = ((paginate_QMARK_)?(function (){var or__4223__auto__ = (function (){var G__58620 = children;
var G__58620__$1 = (((G__58620 == null))?null:cljs.core.peek(G__58620));
var G__58620__$2 = (((G__58620__$1 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__58620__$1));
var G__58620__$3 = (((G__58620__$2 == null))?null:cljs.core.peek(G__58620__$2));
if((G__58620__$3 == null)){
return null;
} else {
return (G__58620__$3 + (1));
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})():null);
var G__58621 = children;
if(cljs.core.truth_((function (){var and__4221__auto__ = paginate_QMARK_;
if(and__4221__auto__){
var or__4223__auto__ = unbounded_QMARK_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new_offset < total);
}
} else {
return and__4221__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58621,(function (){var fetch_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elision,new cljs.core.Keyword(null,"offset","offset",296498311),new_offset);
return nextjournal.clerk.viewer.make_elision(viewers,fetch_opts__$1);
})());
} else {
return G__58621;
}
});
nextjournal.clerk.viewer.present_PLUS_paginate_string = (function nextjournal$clerk$viewer$present_PLUS_paginate_string(p__58623){
var map__58624 = p__58623;
var map__58624__$1 = cljs.core.__destructure_map(map__58624);
var wrapped_value = map__58624__$1;
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var map__58625 = (function (){var and__4221__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fetch-opts","fetch-opts",-1704398338).cljs$core$IFn$_invoke$arity$1(viewer));
if(cljs.core.truth_(and__4221__auto__)){
return nextjournal.clerk.viewer.get_elision(wrapped_value);
} else {
return and__4221__auto__;
}
})();
var map__58625__$1 = cljs.core.__destructure_map(map__58625);
var elision = map__58625__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"n","n",562130025));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
if(cljs.core.truth_((function (){var and__4221__auto__ = n;
if(cljs.core.truth_(and__4221__auto__)){
return (n < total);
} else {
return and__4221__auto__;
}
})())){
var new_offset = (function (){var x__4309__auto__ = ((function (){var or__4223__auto__ = offset;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() + n);
var y__4310__auto__ = total;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var G__58626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(function (){var or__4223__auto__ = offset;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})(),new_offset)], null);
var G__58626__$1 = ((((total - new_offset) > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58626,(function (){var fetch_opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(elision,new cljs.core.Keyword(null,"offset","offset",296498311),new_offset,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"replace-path","replace-path",475635929),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new_offset)], 0));
return nextjournal.clerk.viewer.make_elision(viewers,fetch_opts);
})()):G__58626);
return nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1(G__58626__$1);

} else {
return value;
}
});
nextjournal.clerk.viewer.present_STAR_ = (function nextjournal$clerk$viewer$present_STAR_(p__58628){
var map__58629 = p__58628;
var map__58629__$1 = cljs.core.__destructure_map(map__58629);
var wrapped_value = map__58629__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58629__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58629__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var _BANG_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58629__$1,new cljs.core.Keyword(null,"!budget","!budget",-1542780076));
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58629__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
if(cljs.core.empty_QMARK_(viewers)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot present* with empty viewers",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrapped-value","wrapped-value",1668982996),wrapped_value], null));
} else {
}

var map__58630 = nextjournal.clerk.viewer.apply_viewers_STAR_(wrapped_value);
var map__58630__$1 = cljs.core.__destructure_map(map__58630);
var wrapped_value__$1 = map__58630__$1;
var viewers__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
var presented_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword("nextjournal","presented?","nextjournal/presented?",302564567));
var descend_QMARK_ = (cljs.core.count(current_path) < cljs.core.count(path));
var xs = nextjournal.clerk.viewer.__GT_value(wrapped_value__$1);
if(cljs.core.truth_((function (){var and__4221__auto__ = _BANG_budget;
if(cljs.core.truth_(and__4221__auto__)){
return (((!(descend_QMARK_))) && (cljs.core.not(presented_QMARK_)));
} else {
return and__4221__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_budget,(function (p1__58627_SHARP_){
var x__4306__auto__ = (p1__58627_SHARP_ - (1));
var y__4307__auto__ = (0);
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
}));
} else {
}

return nextjournal.clerk.viewer.process_wrapped_value(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clerk.viewer.__GT_opts(wrapped_value__$1),nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.__GT_viewer(wrapped_value__$1),(cljs.core.truth_(presented_QMARK_)?wrapped_value__$1:((descend_QMARK_)?(function (){var idx = cljs.core.first(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(current_path),path));
var G__58636 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2(viewers__$1,((((cljs.core.map_QMARK_(xs)) && ((idx instanceof cljs.core.Keyword))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(xs,idx):((((cljs.core.map_QMARK_(xs)) || (cljs.core.set_QMARK_(xs))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(nextjournal.clerk.viewer.ensure_sorted(xs)),idx):((cljs.core.associative_QMARK_(xs))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(xs,idx):((cljs.core.sequential_QMARK_(xs))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,idx):null))))),nextjournal.clerk.viewer.__GT_opts(wrapped_value__$1)], 0)),new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),idx);
return (nextjournal.clerk.viewer.present_STAR_.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.present_STAR_.cljs$core$IFn$_invoke$arity$1(G__58636) : nextjournal.clerk.viewer.present_STAR_.call(null,G__58636));
})():((typeof xs === 'string')?nextjournal.clerk.viewer.present_PLUS_paginate_string(wrapped_value__$1):(cljs.core.truth_((function (){var and__4221__auto__ = xs;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.seqable_QMARK_(xs);
} else {
return and__4221__auto__;
}
})())?nextjournal.clerk.viewer.present_PLUS_paginate_children(wrapped_value__$1):xs
)))))], 0)));
});
nextjournal.clerk.viewer.assign_content_lengths = (function nextjournal$clerk$viewer$assign_content_lengths(wrapped_value){
return clojure.walk.postwalk((function (x){
var temp__5751__auto__ = (function (){var and__4221__auto__ = nextjournal.clerk.viewer.wrapped_value_QMARK_(x);
if(cljs.core.truth_(and__4221__auto__)){
return new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
var map__58644 = x;
var map__58644__$1 = cljs.core.__destructure_map(map__58644);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58644__$1,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
var map__58645 = viewer;
var map__58645__$1 = cljs.core.__destructure_map(map__58645);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opening_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203));
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
var elision_content_length = (6);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword(null,"content-length","content-length",441319507),(((((value == null)) || (((cljs.core.char_QMARK_(value)) || (((typeof value === 'string') || ((((value instanceof cljs.core.Keyword)) || ((((value instanceof cljs.core.Symbol)) || (typeof value === 'number')))))))))))?((cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))).length):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elision","elision",1599157097),null], null), null),name))?elision_content_length:((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-entry","map-entry",-1310914056),null], null), null),name))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58642_SHARP_){
return new cljs.core.Keyword(null,"content-length","content-length",441319507).cljs$core$IFn$_invoke$arity$2(p1__58642_SHARP_,(0));
}),value)):((cljs.core.vector_QMARK_(value))?((cljs.core.count(value) - (1)) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(cljs.core.count(opening_paren) + cljs.core.count(closing_paren)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58643_SHARP_){
return new cljs.core.Keyword(null,"content-length","content-length",441319507).cljs$core$IFn$_invoke$arity$2(p1__58643_SHARP_,(0));
}),value))):(0)
)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),name], 0));
} else {
return x;
}
}),wrapped_value);
});
nextjournal.clerk.viewer.compute_expanded_at = (function nextjournal$clerk$viewer$compute_expanded_at(p__58647,p__58648){
var map__58652 = p__58647;
var map__58652__$1 = cljs.core.__destructure_map(map__58652);
var state = map__58652__$1;
var indents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword(null,"indents","indents",-569647275));
var expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword(null,"expanded-at","expanded-at",2146079043));
var prev_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword(null,"prev-type","prev-type",212113111));
var map__58653 = p__58648;
var map__58653__$1 = cljs.core.__destructure_map(map__58653);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var content_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58653__$1,new cljs.core.Keyword(null,"content-length","content-length",441319507),(0));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var max_length = ((80) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),indents));
var expanded_QMARK_ = (max_length < content_length);
var state_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"expanded-at","expanded-at",2146079043),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expanded_at,path,expanded_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prev-type","prev-type",212113111),type,new cljs.core.Keyword(null,"indents","indents",-569647275),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),indents)),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-entry","map-entry",-1310914056),null], null), null),prev_type))?(function (){var or__4223__auto__ = content_length;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})():((cljs.core.vector_QMARK_(value))?(2):(1)
)))], 0));
if(cljs.core.vector_QMARK_(value)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.compute_expanded_at,state_SINGLEQUOTE_,value);
} else {
return state_SINGLEQUOTE_;
}
});
nextjournal.clerk.viewer.assign_expanded_at = (function nextjournal$clerk$viewer$assign_expanded_at(wrapped_value){
var G__58661 = wrapped_value;
if(cljs.core.truth_(new cljs.core.Keyword(null,"content-length","content-length",441319507).cljs$core$IFn$_invoke$arity$1(wrapped_value))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58661,new cljs.core.Keyword("nextjournal","expanded-at","nextjournal/expanded-at",-1490351009),new cljs.core.Keyword(null,"expanded-at","expanded-at",2146079043).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.compute_expanded_at(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indents","indents",-569647275),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded-at","expanded-at",2146079043),cljs.core.PersistentArrayMap.EMPTY], null),wrapped_value)));
} else {
return G__58661;
}
});
/**
 * Returns a subset of a given `value`.
 */
nextjournal.clerk.viewer.present = (function nextjournal$clerk$viewer$present(var_args){
var G__58668 = arguments.length;
switch (G__58668) {
case 1:
return nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1 = (function (x){
return nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2 = (function (x,opts){
var G__58670 = nextjournal.clerk.viewer.present_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$1(x),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"!budget","!budget",-1542780076),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$2(opts,(200))),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"current-path","current-path",-113759954),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.PersistentVector.EMPTY)], null),opts], 0)));
return (nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$1(G__58670) : nextjournal.clerk.viewer.assign_closing_parens.call(null,G__58670));
}));

(nextjournal.clerk.viewer.present.cljs$lang$maxFixedArity = 2);

/**
 * Takes a `description` and returns its value. Inverse of `present`. Mostly useful for debugging.
 */
nextjournal.clerk.viewer.desc__GT_values = (function nextjournal$clerk$viewer$desc__GT_values(desc){
var x = nextjournal.clerk.viewer.__GT_value(desc);
var viewer_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_viewer(desc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(viewer_name,new cljs.core.Keyword(null,"elision","elision",1599157097))){
return cljs.core.with_meta(new cljs.core.Symbol(null,"\u2026","\u2026",781471991,null),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__58686 = viewer_name;
var G__58686__$1 = (((G__58686 instanceof cljs.core.Keyword))?G__58686.fqn:null);
switch (G__58686__$1) {
case "map":
case "table":
return cljs.core.PersistentArrayMap.EMPTY;

break;
default:
var or__4223__auto__ = cljs.core.empty(x);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}

}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.desc__GT_values),x);
} else {
return x;

}
}
});
nextjournal.clerk.viewer.path_to_value = (function nextjournal$clerk$viewer$path_to_value(path){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(path,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947))),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
});
nextjournal.clerk.viewer.merge_presentations = (function nextjournal$clerk$viewer$merge_presentations(root,more,elision){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(root,nextjournal.clerk.viewer.path_to_value(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(elision)),(function (value){
var map__58689 = new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(cljs.core.peek(value));
var map__58689__$1 = cljs.core.__destructure_map(map__58689);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58689__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path_from_value = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,offset);
var path_from_more = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"replace-path","replace-path",475635929).cljs$core$IFn$_invoke$arity$1(elision);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(more)));
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path_from_value,path_from_more)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("paths mismatch",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path-from-value","path-from-value",-182953106),path_from_value,new cljs.core.Keyword(null,"path-from-more","path-from-more",116927044),path_from_more,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"more","more",-2058821800),more,new cljs.core.Keyword(null,"path-to-value","path-to-value",-1876354751),nextjournal.clerk.viewer.path_to_value(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(more)),new cljs.core.Keyword(null,"value","value",305978217),value], null));
} else {
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(value),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(more));
}));
});
nextjournal.clerk.viewer.assign_closing_parens = (function nextjournal$clerk$viewer$assign_closing_parens(var_args){
var G__58691 = arguments.length;
switch (G__58691) {
case 1:
return nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$1 = (function (node){
return nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,node);
}));

(nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$2 = (function (closing_parens,node){
var value = nextjournal.clerk.viewer.__GT_value(node);
var viewer = nextjournal.clerk.viewer.__GT_viewer(node);
var closing = new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602).cljs$core$IFn$_invoke$arity$1(viewer);
var non_leaf_QMARK_ = (function (){var and__4221__auto__ = cljs.core.vector_QMARK_(value);
if(and__4221__auto__){
return nextjournal.clerk.viewer.wrapped_value_QMARK_(cljs.core.first(value));
} else {
return and__4221__auto__;
}
})();
var defer_closing_QMARK_ = (function (){var and__4221__auto__ = non_leaf_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
var or__4223__auto__ = new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759).cljs$core$IFn$_invoke$arity$1(cljs.core.last(value)));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map-entry","map-entry",-1310914056),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759).cljs$core$IFn$_invoke$arity$1(cljs.core.last(value))));
if(and__4221__auto____$1){
return new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(cljs.core.last(value)))));
} else {
return and__4221__auto____$1;
}
}
} else {
return and__4221__auto__;
}
})();
var G__58694 = ((cljs.core.not(closing))?node:(cljs.core.truth_(defer_closing_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),cljs.core.dissoc,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602)):cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602)], null),cljs.core.cons,closing_parens)
));
if(cljs.core.truth_(non_leaf_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__58694,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,x){
return nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__4221__auto__ = defer_closing_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.count(xs) - (1)),i);
} else {
return and__4221__auto__;
}
})())?(function (){var G__58709 = closing_parens;
if(cljs.core.truth_(closing)){
return cljs.core.cons(closing,G__58709);
} else {
return G__58709;
}
})():cljs.core.List.EMPTY),x);
})),xs);
}));
} else {
return G__58694;
}
}));

(nextjournal.clerk.viewer.assign_closing_parens.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.reset_viewers_BANG_ = (function nextjournal$clerk$viewer$reset_viewers_BANG_(var_args){
var G__58711 = arguments.length;
switch (G__58711) {
case 1:
return nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (viewers){
return nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_ns_STAR_,viewers);
}));

(nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (scope,viewers){
if(cljs.core.truth_((function (){var fexpr__58740 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null);
return (fexpr__58740.cljs$core$IFn$_invoke$arity$1 ? fexpr__58740.cljs$core$IFn$_invoke$arity$1(scope) : fexpr__58740.call(null,scope));
})())){
} else {
throw (new Error("Assert failed: (or (#{:default} scope))"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nextjournal.clerk.viewer._BANG_viewers,cljs.core.assoc,scope,viewers);
}));

(nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.add_viewers_BANG_ = (function nextjournal$clerk$viewer$add_viewers_BANG_(viewers){
nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_ns_STAR_,nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.get_default_viewers(),viewers));

return viewers;
});
nextjournal.clerk.viewer.html = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.html_viewer);
nextjournal.clerk.viewer.md = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.markdown_viewer);
nextjournal.clerk.viewer.plotly = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.plotly_viewer);
nextjournal.clerk.viewer.vl = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.vega_lite_viewer);
nextjournal.clerk.viewer.table = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.table_viewer);
nextjournal.clerk.viewer.row = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer_extracting_opts,nextjournal.clerk.viewer.row_viewer);
nextjournal.clerk.viewer.col = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer_extracting_opts,nextjournal.clerk.viewer.col_viewer);
nextjournal.clerk.viewer.tex = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.katex_viewer);
nextjournal.clerk.viewer.hide_result = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.hide_result_viewer);
nextjournal.clerk.viewer.notebook = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.notebook_viewer));
nextjournal.clerk.viewer.code = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.code_viewer);
nextjournal.clerk.viewer.doc_url = (function nextjournal$clerk$viewer$doc_url(path){
return nextjournal.clerk.viewer.__GT_viewer_eval((new cljs.core.List(null,new cljs.core.Symbol("v","doc-url","v/doc-url",-1594574757,null),(new cljs.core.List(null,path,null,(1),null)),(2),null)));
});
nextjournal.clerk.viewer.eval_cljs_result_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),cljs.core.list(new cljs.core.Symbol("v","inspect-paginated","v/inspect-paginated",1092423606,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))], null);
nextjournal.clerk.viewer.eval_cljs_str = (function nextjournal$clerk$viewer$eval_cljs_str(code_string){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.eval_cljs_result_viewer,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.__GT_viewer_eval((new cljs.core.List(null,new cljs.core.Symbol(null,"binding","binding",-2114503176,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null)], null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"load-string","load-string",-403739145,null),(new cljs.core.List(null,code_string,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))),new cljs.core.Keyword(null,"remount?","remount?",1072689773),true));
});
nextjournal.clerk.viewer.example_viewer = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (p__58766){
var map__58767 = p__58766;
var map__58767__$1 = cljs.core.__destructure_map(map__58767);
var wrapped_value = map__58767__$1;
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.mark_preserve_keys(wrapped_value),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap","div.flex.flex-wrap",-407942064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-[7px]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-slate-100.px-2.rounded","div.bg-slate-100.px-2.rounded",-1818338235),cljs.core.list(new cljs.core.Symbol("v","inspect","v/inspect",-1965639778,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"form","form",16469056,null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.mt-1","div.flex.mt-1",-692809234),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-2.font-sans.text-xs.text-slate-500","div.mx-2.font-sans.text-xs.text-slate-500",791613663),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-[2px]"], null),"\u21D2"], null),cljs.core.list(new cljs.core.Symbol("v","inspect","v/inspect",-1965639778,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"val","val",1769233139,null))], null)], null)))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Keyword(null,"form","form",-1624062471)], null),nextjournal.clerk.viewer.code);
})], null);
nextjournal.clerk.viewer.examples_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.update_val((function (examples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.example_viewer),examples);
})),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"examples","examples",1166818971,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol("v","html","v/html",641734256,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-l-2.border-slate-300.pl-4","div.border-l-2.border-slate-300.pl-4",-1408703104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uppercase.tracking-wider.text-xs.font-sans.text-slate-500.mt-4.mb-2","div.uppercase.tracking-wider.text-xs.font-sans.text-slate-500.mt-4.mb-2",-1343651332),"Examples"], null)], null),cljs.core.list(new cljs.core.Symbol("v","inspect-children","v/inspect-children",248950098,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),new cljs.core.Symbol(null,"examples","examples",1166818971,null))))], null);

//# sourceMappingURL=nextjournal.clerk.viewer.js.map
