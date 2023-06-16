goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56270 = arguments.length;
var i__4830__auto___56271 = (0);
while(true){
if((i__4830__auto___56271 < len__4829__auto___56270)){
args__4835__auto__.push((arguments[i__4830__auto___56271]));

var G__56272 = (i__4830__auto___56271 + (1));
i__4830__auto___56271 = G__56272;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__56103_56273 = keyvals;
var vec__56104_56274 = G__56103_56273;
var seq__56105_56275 = cljs.core.seq(vec__56104_56274);
var first__56106_56276 = cljs.core.first(seq__56105_56275);
var seq__56105_56277__$1 = cljs.core.next(seq__56105_56275);
var k_56278 = first__56106_56276;
var first__56106_56279__$1 = cljs.core.first(seq__56105_56277__$1);
var seq__56105_56280__$2 = cljs.core.next(seq__56105_56277__$1);
var v_56281 = first__56106_56279__$1;
var keyvals_56282__$1 = seq__56105_56280__$2;
var G__56103_56283__$1 = G__56103_56273;
while(true){
var vec__56107_56284 = G__56103_56283__$1;
var seq__56108_56285 = cljs.core.seq(vec__56107_56284);
var first__56109_56286 = cljs.core.first(seq__56108_56285);
var seq__56108_56287__$1 = cljs.core.next(seq__56108_56285);
var k_56288__$1 = first__56109_56286;
var first__56109_56289__$1 = cljs.core.first(seq__56108_56287__$1);
var seq__56108_56290__$2 = cljs.core.next(seq__56108_56287__$1);
var v_56291__$1 = first__56109_56289__$1;
var keyvals_56292__$2 = seq__56108_56290__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_56288__$1)] = v_56291__$1);

if(keyvals_56292__$2){
var G__56293 = keyvals_56292__$2;
G__56103_56283__$1 = G__56293;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq56080){
var G__56081 = cljs.core.first(seq56080);
var seq56080__$1 = cljs.core.next(seq56080);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56081,seq56080__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__56120 = arguments.length;
switch (G__56120) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj56123 = obj;
if((!((obj56123 == null)))){
return (obj56123[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj56125 = obj;
if((!((obj56125 == null)))){
return (obj56125[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__55756__auto__ = (function (){var obj56126 = obj;
if((!((obj56126 == null)))){
return (obj56126[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__55756__auto__)){
return not_found;
} else {
return val__55756__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__56129 = arguments.length;
switch (G__56129) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj56139 = self__.obj;
if((!((obj56139 == null)))){
return (obj56139[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__55756__auto__ = (function (){var obj56140 = self__.obj;
if((!((obj56140 == null)))){
return (obj56140[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__55756__auto__)){
return not_found;
} else {
return val__55756__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56301 = arguments.length;
var i__4830__auto___56302 = (0);
while(true){
if((i__4830__auto___56302 < len__4829__auto___56301)){
args__4835__auto__.push((arguments[i__4830__auto___56302]));

var G__56303 = (i__4830__auto___56302 + (1));
i__4830__auto___56302 = G__56303;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__56151 = keyvals;
var vec__56153 = G__56151;
var seq__56154 = cljs.core.seq(vec__56153);
var first__56155 = cljs.core.first(seq__56154);
var seq__56154__$1 = cljs.core.next(seq__56154);
var k = first__56155;
var first__56155__$1 = cljs.core.first(seq__56154__$1);
var seq__56154__$2 = cljs.core.next(seq__56154__$1);
var v = first__56155__$1;
var kvs = seq__56154__$2;
var G__56151__$1 = G__56151;
while(true){
var vec__56157 = G__56151__$1;
var seq__56158 = cljs.core.seq(vec__56157);
var first__56159 = cljs.core.first(seq__56158);
var seq__56158__$1 = cljs.core.next(seq__56158);
var k__$1 = first__56159;
var first__56159__$1 = cljs.core.first(seq__56158__$1);
var seq__56158__$2 = cljs.core.next(seq__56158__$1);
var v__$1 = first__56159__$1;
var kvs__$1 = seq__56158__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__56305 = kvs__$1;
G__56151__$1 = G__56305;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq56143){
var G__56144 = cljs.core.first(seq56143);
var seq56143__$1 = cljs.core.next(seq56143);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56144,seq56143__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56306 = arguments.length;
var i__4830__auto___56307 = (0);
while(true){
if((i__4830__auto___56307 < len__4829__auto___56306)){
args__4835__auto__.push((arguments[i__4830__auto___56307]));

var G__56308 = (i__4830__auto___56307 + (1));
i__4830__auto___56307 = G__56308;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq56160){
var G__56161 = cljs.core.first(seq56160);
var seq56160__$1 = cljs.core.next(seq56160);
var G__56162 = cljs.core.first(seq56160__$1);
var seq56160__$2 = cljs.core.next(seq56160__$1);
var G__56163 = cljs.core.first(seq56160__$2);
var seq56160__$3 = cljs.core.next(seq56160__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56161,G__56162,G__56163,seq56160__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56309 = arguments.length;
var i__4830__auto___56310 = (0);
while(true){
if((i__4830__auto___56310 < len__4829__auto___56309)){
args__4835__auto__.push((arguments[i__4830__auto___56310]));

var G__56311 = (i__4830__auto___56310 + (1));
i__4830__auto___56310 = G__56311;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq56168){
var G__56169 = cljs.core.first(seq56168);
var seq56168__$1 = cljs.core.next(seq56168);
var G__56170 = cljs.core.first(seq56168__$1);
var seq56168__$2 = cljs.core.next(seq56168__$1);
var G__56171 = cljs.core.first(seq56168__$2);
var seq56168__$3 = cljs.core.next(seq56168__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56169,G__56170,G__56171,seq56168__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__56182 = arguments.length;
switch (G__56182) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___56313 = arguments.length;
var i__4830__auto___56314 = (0);
while(true){
if((i__4830__auto___56314 < len__4829__auto___56313)){
args_arr__4850__auto__.push((arguments[i__4830__auto___56314]));

var G__56315 = (i__4830__auto___56314 + (1));
i__4830__auto___56314 = G__56315;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4851__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__56185_56317 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__56186_56318 = null;
var count__56187_56319 = (0);
var i__56188_56320 = (0);
while(true){
if((i__56188_56320 < count__56187_56319)){
var k_56321 = chunk__56186_56318.cljs$core$IIndexed$_nth$arity$2(null,i__56188_56320);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_56321,applied_science.js_interop.unchecked_get(x,k_56321)], 0));


var G__56322 = seq__56185_56317;
var G__56323 = chunk__56186_56318;
var G__56324 = count__56187_56319;
var G__56325 = (i__56188_56320 + (1));
seq__56185_56317 = G__56322;
chunk__56186_56318 = G__56323;
count__56187_56319 = G__56324;
i__56188_56320 = G__56325;
continue;
} else {
var temp__5753__auto___56327 = cljs.core.seq(seq__56185_56317);
if(temp__5753__auto___56327){
var seq__56185_56328__$1 = temp__5753__auto___56327;
if(cljs.core.chunked_seq_QMARK_(seq__56185_56328__$1)){
var c__4649__auto___56329 = cljs.core.chunk_first(seq__56185_56328__$1);
var G__56330 = cljs.core.chunk_rest(seq__56185_56328__$1);
var G__56331 = c__4649__auto___56329;
var G__56332 = cljs.core.count(c__4649__auto___56329);
var G__56333 = (0);
seq__56185_56317 = G__56330;
chunk__56186_56318 = G__56331;
count__56187_56319 = G__56332;
i__56188_56320 = G__56333;
continue;
} else {
var k_56335 = cljs.core.first(seq__56185_56328__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_56335,applied_science.js_interop.unchecked_get(x,k_56335)], 0));


var G__56336 = cljs.core.next(seq__56185_56328__$1);
var G__56337 = null;
var G__56338 = (0);
var G__56339 = (0);
seq__56185_56317 = G__56336;
chunk__56186_56318 = G__56337;
count__56187_56319 = G__56338;
i__56188_56320 = G__56339;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq56179){
var G__56180 = cljs.core.first(seq56179);
var seq56179__$1 = cljs.core.next(seq56179);
var G__56181 = cljs.core.first(seq56179__$1);
var seq56179__$2 = cljs.core.next(seq56179__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56180,G__56181,seq56179__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__56194 = array;
G__56194.push(x);

return G__56194;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__56202 = array;
G__56202.unshift(x);

return G__56202;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56341 = arguments.length;
var i__4830__auto___56343 = (0);
while(true){
if((i__4830__auto___56343 < len__4829__auto___56341)){
args__4835__auto__.push((arguments[i__4830__auto___56343]));

var G__56344 = (i__4830__auto___56343 + (1));
i__4830__auto___56343 = G__56344;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj56210 = obj;
if((!((obj56210 == null)))){
return (obj56210[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq56203){
var G__56204 = cljs.core.first(seq56203);
var seq56203__$1 = cljs.core.next(seq56203);
var G__56205 = cljs.core.first(seq56203__$1);
var seq56203__$2 = cljs.core.next(seq56203__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56204,G__56205,seq56203__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj56213 = obj;
if((!((obj56213 == null)))){
return (obj56213[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56346 = arguments.length;
var i__4830__auto___56347 = (0);
while(true){
if((i__4830__auto___56347 < len__4829__auto___56346)){
args__4835__auto__.push((arguments[i__4830__auto___56347]));

var G__56348 = (i__4830__auto___56347 + (1));
i__4830__auto___56347 = G__56348;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq56214){
var G__56215 = cljs.core.first(seq56214);
var seq56214__$1 = cljs.core.next(seq56214);
var G__56216 = cljs.core.first(seq56214__$1);
var seq56214__$2 = cljs.core.next(seq56214__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56215,G__56216,seq56214__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56349 = arguments.length;
var i__4830__auto___56350 = (0);
while(true){
if((i__4830__auto___56350 < len__4829__auto___56349)){
args__4835__auto__.push((arguments[i__4830__auto___56350]));

var G__56351 = (i__4830__auto___56350 + (1));
i__4830__auto___56350 = G__56351;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__56222_56352 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__56223_56353 = null;
var count__56224_56354 = (0);
var i__56225_56355 = (0);
while(true){
if((i__56225_56355 < count__56224_56354)){
var vec__56254_56356 = chunk__56223_56353.cljs$core$IIndexed$_nth$arity$2(null,i__56225_56355);
var k_56357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56254_56356,(0),null);
var v_56358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56254_56356,(1),null);
var obj56257_56359 = obj;
var obj56260_56360 = (((!((obj56257_56359 == null))))?obj56257_56359:({}));
(obj56260_56360[applied_science.js_interop.impl.wrap_key(k_56357)] = v_56358);



var G__56361 = seq__56222_56352;
var G__56362 = chunk__56223_56353;
var G__56363 = count__56224_56354;
var G__56364 = (i__56225_56355 + (1));
seq__56222_56352 = G__56361;
chunk__56223_56353 = G__56362;
count__56224_56354 = G__56363;
i__56225_56355 = G__56364;
continue;
} else {
var temp__5753__auto___56365 = cljs.core.seq(seq__56222_56352);
if(temp__5753__auto___56365){
var seq__56222_56373__$1 = temp__5753__auto___56365;
if(cljs.core.chunked_seq_QMARK_(seq__56222_56373__$1)){
var c__4649__auto___56374 = cljs.core.chunk_first(seq__56222_56373__$1);
var G__56375 = cljs.core.chunk_rest(seq__56222_56373__$1);
var G__56376 = c__4649__auto___56374;
var G__56377 = cljs.core.count(c__4649__auto___56374);
var G__56378 = (0);
seq__56222_56352 = G__56375;
chunk__56223_56353 = G__56376;
count__56224_56354 = G__56377;
i__56225_56355 = G__56378;
continue;
} else {
var vec__56263_56379 = cljs.core.first(seq__56222_56373__$1);
var k_56380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56263_56379,(0),null);
var v_56381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56263_56379,(1),null);
var obj56266_56382 = obj;
var obj56267_56383 = (((!((obj56266_56382 == null))))?obj56266_56382:({}));
(obj56267_56383[applied_science.js_interop.impl.wrap_key(k_56380)] = v_56381);



var G__56384 = cljs.core.next(seq__56222_56373__$1);
var G__56385 = null;
var G__56386 = (0);
var G__56387 = (0);
seq__56222_56352 = G__56384;
chunk__56223_56353 = G__56385;
count__56224_56354 = G__56386;
i__56225_56355 = G__56387;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq56219){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56219));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
