goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56596 = arguments.length;
var i__4830__auto___56597 = (0);
while(true){
if((i__4830__auto___56597 < len__4829__auto___56596)){
args__4835__auto__.push((arguments[i__4830__auto___56597]));

var G__56598 = (i__4830__auto___56597 + (1));
i__4830__auto___56597 = G__56598;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq56164){
var G__56166 = cljs.core.first(seq56164);
var seq56164__$1 = cljs.core.next(seq56164);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56166,seq56164__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__56295 = cljs.core.seq(sources);
var chunk__56296 = null;
var count__56297 = (0);
var i__56298 = (0);
while(true){
if((i__56298 < count__56297)){
var map__56334 = chunk__56296.cljs$core$IIndexed$_nth$arity$2(null,i__56298);
var map__56334__$1 = cljs.core.__destructure_map(map__56334);
var src = map__56334__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56334__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56334__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56334__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56334__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e56340){var e_56599 = e56340;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56599);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56599.message)].join('')));
}

var G__56600 = seq__56295;
var G__56601 = chunk__56296;
var G__56602 = count__56297;
var G__56603 = (i__56298 + (1));
seq__56295 = G__56600;
chunk__56296 = G__56601;
count__56297 = G__56602;
i__56298 = G__56603;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56295);
if(temp__5753__auto__){
var seq__56295__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56295__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__56295__$1);
var G__56604 = cljs.core.chunk_rest(seq__56295__$1);
var G__56605 = c__4649__auto__;
var G__56606 = cljs.core.count(c__4649__auto__);
var G__56607 = (0);
seq__56295 = G__56604;
chunk__56296 = G__56605;
count__56297 = G__56606;
i__56298 = G__56607;
continue;
} else {
var map__56342 = cljs.core.first(seq__56295__$1);
var map__56342__$1 = cljs.core.__destructure_map(map__56342);
var src = map__56342__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56342__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56342__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56342__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56342__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e56345){var e_56608 = e56345;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56608);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56608.message)].join('')));
}

var G__56609 = cljs.core.next(seq__56295__$1);
var G__56610 = null;
var G__56611 = (0);
var G__56612 = (0);
seq__56295 = G__56609;
chunk__56296 = G__56610;
count__56297 = G__56611;
i__56298 = G__56612;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__56393 = cljs.core.seq(js_requires);
var chunk__56394 = null;
var count__56395 = (0);
var i__56396 = (0);
while(true){
if((i__56396 < count__56395)){
var js_ns = chunk__56394.cljs$core$IIndexed$_nth$arity$2(null,i__56396);
var require_str_56613 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56613);


var G__56614 = seq__56393;
var G__56615 = chunk__56394;
var G__56616 = count__56395;
var G__56617 = (i__56396 + (1));
seq__56393 = G__56614;
chunk__56394 = G__56615;
count__56395 = G__56616;
i__56396 = G__56617;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56393);
if(temp__5753__auto__){
var seq__56393__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56393__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__56393__$1);
var G__56618 = cljs.core.chunk_rest(seq__56393__$1);
var G__56619 = c__4649__auto__;
var G__56620 = cljs.core.count(c__4649__auto__);
var G__56621 = (0);
seq__56393 = G__56618;
chunk__56394 = G__56619;
count__56395 = G__56620;
i__56396 = G__56621;
continue;
} else {
var js_ns = cljs.core.first(seq__56393__$1);
var require_str_56622 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56622);


var G__56623 = cljs.core.next(seq__56393__$1);
var G__56624 = null;
var G__56625 = (0);
var G__56626 = (0);
seq__56393 = G__56623;
chunk__56394 = G__56624;
count__56395 = G__56625;
i__56396 = G__56626;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__56398){
var map__56399 = p__56398;
var map__56399__$1 = cljs.core.__destructure_map(map__56399);
var msg = map__56399__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56399__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56399__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56400(s__56401){
return (new cljs.core.LazySeq(null,(function (){
var s__56401__$1 = s__56401;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56401__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__56406 = cljs.core.first(xs__6308__auto__);
var map__56406__$1 = cljs.core.__destructure_map(map__56406);
var src = map__56406__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__56401__$1,map__56406,map__56406__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__56399,map__56399__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56400_$_iter__56402(s__56403){
return (new cljs.core.LazySeq(null,((function (s__56401__$1,map__56406,map__56406__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__56399,map__56399__$1,msg,info,reload_info){
return (function (){
var s__56403__$1 = s__56403;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__56403__$1);
if(temp__5753__auto____$1){
var s__56403__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56403__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__56403__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__56405 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__56404 = (0);
while(true){
if((i__56404 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__56404);
cljs.core.chunk_append(b__56405,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__56627 = (i__56404 + (1));
i__56404 = G__56627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56405),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56400_$_iter__56402(cljs.core.chunk_rest(s__56403__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56405),null);
}
} else {
var warning = cljs.core.first(s__56403__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56400_$_iter__56402(cljs.core.rest(s__56403__$2)));
}
} else {
return null;
}
break;
}
});})(s__56401__$1,map__56406,map__56406__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__56399,map__56399__$1,msg,info,reload_info))
,null,null));
});})(s__56401__$1,map__56406,map__56406__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__56399,map__56399__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56400(cljs.core.rest(s__56401__$1)));
} else {
var G__56628 = cljs.core.rest(s__56401__$1);
s__56401__$1 = G__56628;
continue;
}
} else {
var G__56629 = cljs.core.rest(s__56401__$1);
s__56401__$1 = G__56629;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__56407_56630 = cljs.core.seq(warnings);
var chunk__56408_56631 = null;
var count__56409_56632 = (0);
var i__56410_56633 = (0);
while(true){
if((i__56410_56633 < count__56409_56632)){
var map__56414_56634 = chunk__56408_56631.cljs$core$IIndexed$_nth$arity$2(null,i__56410_56633);
var map__56414_56635__$1 = cljs.core.__destructure_map(map__56414_56634);
var w_56636 = map__56414_56635__$1;
var msg_56637__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56414_56635__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56414_56635__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56414_56635__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56414_56635__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56640)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56638),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56639),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56637__$1)].join(''));


var G__56641 = seq__56407_56630;
var G__56642 = chunk__56408_56631;
var G__56643 = count__56409_56632;
var G__56644 = (i__56410_56633 + (1));
seq__56407_56630 = G__56641;
chunk__56408_56631 = G__56642;
count__56409_56632 = G__56643;
i__56410_56633 = G__56644;
continue;
} else {
var temp__5753__auto___56645 = cljs.core.seq(seq__56407_56630);
if(temp__5753__auto___56645){
var seq__56407_56646__$1 = temp__5753__auto___56645;
if(cljs.core.chunked_seq_QMARK_(seq__56407_56646__$1)){
var c__4649__auto___56647 = cljs.core.chunk_first(seq__56407_56646__$1);
var G__56648 = cljs.core.chunk_rest(seq__56407_56646__$1);
var G__56649 = c__4649__auto___56647;
var G__56650 = cljs.core.count(c__4649__auto___56647);
var G__56651 = (0);
seq__56407_56630 = G__56648;
chunk__56408_56631 = G__56649;
count__56409_56632 = G__56650;
i__56410_56633 = G__56651;
continue;
} else {
var map__56415_56652 = cljs.core.first(seq__56407_56646__$1);
var map__56415_56653__$1 = cljs.core.__destructure_map(map__56415_56652);
var w_56654 = map__56415_56653__$1;
var msg_56655__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56415_56653__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56415_56653__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56415_56653__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56415_56653__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56658)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56656),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56657),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56655__$1)].join(''));


var G__56661 = cljs.core.next(seq__56407_56646__$1);
var G__56662 = null;
var G__56663 = (0);
var G__56664 = (0);
seq__56407_56630 = G__56661;
chunk__56408_56631 = G__56662;
count__56409_56632 = G__56663;
i__56410_56633 = G__56664;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__56397_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__56397_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__56423){
var map__56424 = p__56423;
var map__56424__$1 = cljs.core.__destructure_map(map__56424);
var msg = map__56424__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56424__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__56425 = cljs.core.seq(updates);
var chunk__56427 = null;
var count__56428 = (0);
var i__56429 = (0);
while(true){
if((i__56429 < count__56428)){
var path = chunk__56427.cljs$core$IIndexed$_nth$arity$2(null,i__56429);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56470_56665 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56474_56666 = null;
var count__56475_56667 = (0);
var i__56476_56668 = (0);
while(true){
if((i__56476_56668 < count__56475_56667)){
var node_56669 = chunk__56474_56666.cljs$core$IIndexed$_nth$arity$2(null,i__56476_56668);
if(cljs.core.not(node_56669.shadow$old)){
var path_match_56670 = shadow.cljs.devtools.client.browser.match_paths(node_56669.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56670)){
var new_link_56671 = (function (){var G__56494 = node_56669.cloneNode(true);
G__56494.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56670),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56494;
})();
(node_56669.shadow$old = true);

(new_link_56671.onload = ((function (seq__56470_56665,chunk__56474_56666,count__56475_56667,i__56476_56668,seq__56425,chunk__56427,count__56428,i__56429,new_link_56671,path_match_56670,node_56669,path,map__56424,map__56424__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_56669);
});})(seq__56470_56665,chunk__56474_56666,count__56475_56667,i__56476_56668,seq__56425,chunk__56427,count__56428,i__56429,new_link_56671,path_match_56670,node_56669,path,map__56424,map__56424__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56670], 0));

goog.dom.insertSiblingAfter(new_link_56671,node_56669);


var G__56672 = seq__56470_56665;
var G__56673 = chunk__56474_56666;
var G__56674 = count__56475_56667;
var G__56675 = (i__56476_56668 + (1));
seq__56470_56665 = G__56672;
chunk__56474_56666 = G__56673;
count__56475_56667 = G__56674;
i__56476_56668 = G__56675;
continue;
} else {
var G__56676 = seq__56470_56665;
var G__56677 = chunk__56474_56666;
var G__56678 = count__56475_56667;
var G__56679 = (i__56476_56668 + (1));
seq__56470_56665 = G__56676;
chunk__56474_56666 = G__56677;
count__56475_56667 = G__56678;
i__56476_56668 = G__56679;
continue;
}
} else {
var G__56680 = seq__56470_56665;
var G__56681 = chunk__56474_56666;
var G__56682 = count__56475_56667;
var G__56683 = (i__56476_56668 + (1));
seq__56470_56665 = G__56680;
chunk__56474_56666 = G__56681;
count__56475_56667 = G__56682;
i__56476_56668 = G__56683;
continue;
}
} else {
var temp__5753__auto___56684 = cljs.core.seq(seq__56470_56665);
if(temp__5753__auto___56684){
var seq__56470_56685__$1 = temp__5753__auto___56684;
if(cljs.core.chunked_seq_QMARK_(seq__56470_56685__$1)){
var c__4649__auto___56686 = cljs.core.chunk_first(seq__56470_56685__$1);
var G__56687 = cljs.core.chunk_rest(seq__56470_56685__$1);
var G__56688 = c__4649__auto___56686;
var G__56689 = cljs.core.count(c__4649__auto___56686);
var G__56690 = (0);
seq__56470_56665 = G__56687;
chunk__56474_56666 = G__56688;
count__56475_56667 = G__56689;
i__56476_56668 = G__56690;
continue;
} else {
var node_56691 = cljs.core.first(seq__56470_56685__$1);
if(cljs.core.not(node_56691.shadow$old)){
var path_match_56692 = shadow.cljs.devtools.client.browser.match_paths(node_56691.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56692)){
var new_link_56693 = (function (){var G__56501 = node_56691.cloneNode(true);
G__56501.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56692),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56501;
})();
(node_56691.shadow$old = true);

(new_link_56693.onload = ((function (seq__56470_56665,chunk__56474_56666,count__56475_56667,i__56476_56668,seq__56425,chunk__56427,count__56428,i__56429,new_link_56693,path_match_56692,node_56691,seq__56470_56685__$1,temp__5753__auto___56684,path,map__56424,map__56424__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_56691);
});})(seq__56470_56665,chunk__56474_56666,count__56475_56667,i__56476_56668,seq__56425,chunk__56427,count__56428,i__56429,new_link_56693,path_match_56692,node_56691,seq__56470_56685__$1,temp__5753__auto___56684,path,map__56424,map__56424__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56692], 0));

goog.dom.insertSiblingAfter(new_link_56693,node_56691);


var G__56694 = cljs.core.next(seq__56470_56685__$1);
var G__56695 = null;
var G__56696 = (0);
var G__56697 = (0);
seq__56470_56665 = G__56694;
chunk__56474_56666 = G__56695;
count__56475_56667 = G__56696;
i__56476_56668 = G__56697;
continue;
} else {
var G__56698 = cljs.core.next(seq__56470_56685__$1);
var G__56699 = null;
var G__56700 = (0);
var G__56701 = (0);
seq__56470_56665 = G__56698;
chunk__56474_56666 = G__56699;
count__56475_56667 = G__56700;
i__56476_56668 = G__56701;
continue;
}
} else {
var G__56702 = cljs.core.next(seq__56470_56685__$1);
var G__56703 = null;
var G__56704 = (0);
var G__56705 = (0);
seq__56470_56665 = G__56702;
chunk__56474_56666 = G__56703;
count__56475_56667 = G__56704;
i__56476_56668 = G__56705;
continue;
}
}
} else {
}
}
break;
}


var G__56706 = seq__56425;
var G__56707 = chunk__56427;
var G__56708 = count__56428;
var G__56709 = (i__56429 + (1));
seq__56425 = G__56706;
chunk__56427 = G__56707;
count__56428 = G__56708;
i__56429 = G__56709;
continue;
} else {
var G__56710 = seq__56425;
var G__56711 = chunk__56427;
var G__56712 = count__56428;
var G__56713 = (i__56429 + (1));
seq__56425 = G__56710;
chunk__56427 = G__56711;
count__56428 = G__56712;
i__56429 = G__56713;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56425);
if(temp__5753__auto__){
var seq__56425__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56425__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__56425__$1);
var G__56714 = cljs.core.chunk_rest(seq__56425__$1);
var G__56715 = c__4649__auto__;
var G__56716 = cljs.core.count(c__4649__auto__);
var G__56717 = (0);
seq__56425 = G__56714;
chunk__56427 = G__56715;
count__56428 = G__56716;
i__56429 = G__56717;
continue;
} else {
var path = cljs.core.first(seq__56425__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56502_56718 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56506_56719 = null;
var count__56507_56720 = (0);
var i__56508_56721 = (0);
while(true){
if((i__56508_56721 < count__56507_56720)){
var node_56722 = chunk__56506_56719.cljs$core$IIndexed$_nth$arity$2(null,i__56508_56721);
if(cljs.core.not(node_56722.shadow$old)){
var path_match_56723 = shadow.cljs.devtools.client.browser.match_paths(node_56722.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56723)){
var new_link_56724 = (function (){var G__56518 = node_56722.cloneNode(true);
G__56518.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56723),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56518;
})();
(node_56722.shadow$old = true);

(new_link_56724.onload = ((function (seq__56502_56718,chunk__56506_56719,count__56507_56720,i__56508_56721,seq__56425,chunk__56427,count__56428,i__56429,new_link_56724,path_match_56723,node_56722,path,seq__56425__$1,temp__5753__auto__,map__56424,map__56424__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_56722);
});})(seq__56502_56718,chunk__56506_56719,count__56507_56720,i__56508_56721,seq__56425,chunk__56427,count__56428,i__56429,new_link_56724,path_match_56723,node_56722,path,seq__56425__$1,temp__5753__auto__,map__56424,map__56424__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56723], 0));

goog.dom.insertSiblingAfter(new_link_56724,node_56722);


var G__56726 = seq__56502_56718;
var G__56727 = chunk__56506_56719;
var G__56728 = count__56507_56720;
var G__56729 = (i__56508_56721 + (1));
seq__56502_56718 = G__56726;
chunk__56506_56719 = G__56727;
count__56507_56720 = G__56728;
i__56508_56721 = G__56729;
continue;
} else {
var G__56730 = seq__56502_56718;
var G__56731 = chunk__56506_56719;
var G__56732 = count__56507_56720;
var G__56733 = (i__56508_56721 + (1));
seq__56502_56718 = G__56730;
chunk__56506_56719 = G__56731;
count__56507_56720 = G__56732;
i__56508_56721 = G__56733;
continue;
}
} else {
var G__56734 = seq__56502_56718;
var G__56735 = chunk__56506_56719;
var G__56736 = count__56507_56720;
var G__56737 = (i__56508_56721 + (1));
seq__56502_56718 = G__56734;
chunk__56506_56719 = G__56735;
count__56507_56720 = G__56736;
i__56508_56721 = G__56737;
continue;
}
} else {
var temp__5753__auto___56738__$1 = cljs.core.seq(seq__56502_56718);
if(temp__5753__auto___56738__$1){
var seq__56502_56739__$1 = temp__5753__auto___56738__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56502_56739__$1)){
var c__4649__auto___56740 = cljs.core.chunk_first(seq__56502_56739__$1);
var G__56741 = cljs.core.chunk_rest(seq__56502_56739__$1);
var G__56742 = c__4649__auto___56740;
var G__56743 = cljs.core.count(c__4649__auto___56740);
var G__56744 = (0);
seq__56502_56718 = G__56741;
chunk__56506_56719 = G__56742;
count__56507_56720 = G__56743;
i__56508_56721 = G__56744;
continue;
} else {
var node_56745 = cljs.core.first(seq__56502_56739__$1);
if(cljs.core.not(node_56745.shadow$old)){
var path_match_56746 = shadow.cljs.devtools.client.browser.match_paths(node_56745.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56746)){
var new_link_56747 = (function (){var G__56521 = node_56745.cloneNode(true);
G__56521.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56746),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56521;
})();
(node_56745.shadow$old = true);

(new_link_56747.onload = ((function (seq__56502_56718,chunk__56506_56719,count__56507_56720,i__56508_56721,seq__56425,chunk__56427,count__56428,i__56429,new_link_56747,path_match_56746,node_56745,seq__56502_56739__$1,temp__5753__auto___56738__$1,path,seq__56425__$1,temp__5753__auto__,map__56424,map__56424__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_56745);
});})(seq__56502_56718,chunk__56506_56719,count__56507_56720,i__56508_56721,seq__56425,chunk__56427,count__56428,i__56429,new_link_56747,path_match_56746,node_56745,seq__56502_56739__$1,temp__5753__auto___56738__$1,path,seq__56425__$1,temp__5753__auto__,map__56424,map__56424__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56746], 0));

goog.dom.insertSiblingAfter(new_link_56747,node_56745);


var G__56749 = cljs.core.next(seq__56502_56739__$1);
var G__56750 = null;
var G__56751 = (0);
var G__56752 = (0);
seq__56502_56718 = G__56749;
chunk__56506_56719 = G__56750;
count__56507_56720 = G__56751;
i__56508_56721 = G__56752;
continue;
} else {
var G__56753 = cljs.core.next(seq__56502_56739__$1);
var G__56754 = null;
var G__56755 = (0);
var G__56756 = (0);
seq__56502_56718 = G__56753;
chunk__56506_56719 = G__56754;
count__56507_56720 = G__56755;
i__56508_56721 = G__56756;
continue;
}
} else {
var G__56757 = cljs.core.next(seq__56502_56739__$1);
var G__56758 = null;
var G__56759 = (0);
var G__56760 = (0);
seq__56502_56718 = G__56757;
chunk__56506_56719 = G__56758;
count__56507_56720 = G__56759;
i__56508_56721 = G__56760;
continue;
}
}
} else {
}
}
break;
}


var G__56761 = cljs.core.next(seq__56425__$1);
var G__56762 = null;
var G__56763 = (0);
var G__56764 = (0);
seq__56425 = G__56761;
chunk__56427 = G__56762;
count__56428 = G__56763;
i__56429 = G__56764;
continue;
} else {
var G__56765 = cljs.core.next(seq__56425__$1);
var G__56766 = null;
var G__56767 = (0);
var G__56768 = (0);
seq__56425 = G__56765;
chunk__56427 = G__56766;
count__56428 = G__56767;
i__56429 = G__56768;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__56522){
var map__56523 = p__56522;
var map__56523__$1 = cljs.core.__destructure_map(map__56523);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56523__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__56553){
var map__56554 = p__56553;
var map__56554__$1 = cljs.core.__destructure_map(map__56554);
var _ = map__56554__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56554__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__56569,done,error){
var map__56570 = p__56569;
var map__56570__$1 = cljs.core.__destructure_map(map__56570);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__56575,done,error){
var map__56576 = p__56575;
var map__56576__$1 = cljs.core.__destructure_map(map__56576);
var msg = map__56576__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56576__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56576__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56576__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__56577){
var map__56578 = p__56577;
var map__56578__$1 = cljs.core.__destructure_map(map__56578);
var src = map__56578__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56578__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__56582 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__56582) : done.call(null,G__56582));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__56583){
var map__56584 = p__56583;
var map__56584__$1 = cljs.core.__destructure_map(map__56584);
var msg__$1 = map__56584__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56584__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e56585){var ex = e56585;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__56586){
var map__56587 = p__56586;
var map__56587__$1 = cljs.core.__destructure_map(map__56587);
var env = map__56587__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56587__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__56588){
var map__56589 = p__56588;
var map__56589__$1 = cljs.core.__destructure_map(map__56589);
var msg = map__56589__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56589__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__56592){
var map__56593 = p__56592;
var map__56593__$1 = cljs.core.__destructure_map(map__56593);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56593__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56593__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__56594){
var map__56595 = p__56594;
var map__56595__$1 = cljs.core.__destructure_map(map__56595);
var svc = map__56595__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56595__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
