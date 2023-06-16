goog.provide('nextjournal.clojure_mode.demo');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
nextjournal.clojure_mode.demo.theme = module$node_modules$$codemirror$view$dist$index_cjs.EditorView.theme(({".cm-content":({"white-space":"pre-wrap","padding":"10px 0","flex":"1 1 0"}),"&.cm-focused":({"outline":"0 !important"}),".cm-line":({"padding":"0 9px","line-height":"1.6","font-size":"16px","font-family":"var(--code-font)"}),".cm-matchingBracket":({"border-bottom":"1px solid var(--teal-color)","color":"inherit"}),".cm-gutters":({"background":"transparent","border":"none"}),".cm-gutterElement":({"margin-left":"5px"}),".cm-cursor":({"visibility":"hidden"}),"&.cm-focused .cm-cursor":({"visibility":"visible"})}));
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.demo !== 'undefined') && (typeof nextjournal.clojure_mode.demo.extensions !== 'undefined')){
} else {
nextjournal.clojure_mode.demo.extensions = [nextjournal.clojure_mode.demo.theme,module$node_modules$$codemirror$commands$dist$index_cjs.history(),module$node_modules$$codemirror$language$dist$index_cjs.syntaxHighlighting(module$node_modules$$codemirror$language$dist$index_cjs.defaultHighlightStyle),module$node_modules$$codemirror$view$dist$index_cjs.drawSelection(),module$node_modules$$codemirror$language$dist$index_cjs.foldGutter(),module$node_modules$$codemirror$state$dist$index_cjs.EditorState.allowMultipleSelections.of(true),nextjournal.clojure_mode.default_extensions
,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of(nextjournal.clojure_mode.complete_keymap),module$node_modules$$codemirror$view$dist$index_cjs.keymap.of(module$node_modules$$codemirror$commands$dist$index_cjs.historyKeymap)];
}
nextjournal.clojure_mode.demo.editor = (function nextjournal$clojure_mode$demo$editor(source,p__58107){
var map__58108 = p__58107;
var map__58108__$1 = cljs.core.__destructure_map(map__58108);
var eval_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58108__$1,new cljs.core.Keyword(null,"eval?","eval?",2053418525));
var with_let58109 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let58109","with-let58109",1945043559));
var temp__5757__auto___58124 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___58124 == null)){
} else {
var c__47102__auto___58125 = temp__5757__auto___58124;
if((with_let58109.generation === c__47102__auto___58125.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let58109.generation = c__47102__auto___58125.ratomGeneration);
}

var init58110 = (with_let58109.length === (0));
var _BANG_view = ((((init58110) || (cljs.core.not(with_let58109.hasOwnProperty((0))))))?(with_let58109[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let58109[(0)]));
var last_result = ((((init58110) || (cljs.core.not(with_let58109.hasOwnProperty((1))))))?(with_let58109[(1)] = (cljs.core.truth_(eval_QMARK_)?reagent.core.atom.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.demo.sci.eval_string.cljs$core$IFn$_invoke$arity$1(source)):null)):(with_let58109[(1)]));
var mount_BANG_ = ((((init58110) || (cljs.core.not(with_let58109.hasOwnProperty((2))))))?(with_let58109[(2)] = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(_BANG_view,(new module$node_modules$$codemirror$view$dist$index_cjs.EditorView(({"state":nextjournal.clojure_mode.test_utils.make_state((function (){var G__58112 = [nextjournal.clojure_mode.demo.extensions];
if(cljs.core.truth_(eval_QMARK_)){
return G__58112.concat([nextjournal.clojure_mode.demo.sci.extension(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt",new cljs.core.Keyword(null,"on-result","on-result",-1034982142),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,last_result)], null))]);
} else {
return G__58112;
}
})(),source),"parent":el}))));
} else {
return null;
}
})):(with_let58109[(2)]));
var res58111 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-md mb-0 text-sm monospace overflow-auto relative border shadow-lg bg-white",new cljs.core.Keyword(null,"ref","ref",1289896967),mount_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),(410)], null)], null)], null),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(last_result))], null);
var destroy__47101__auto___58126 = (function (){
var obj__46651__auto__ = cljs.core.deref(_BANG_view);
var f__46652__auto__ = (obj__46651__auto__["destroy"]);
return f__46652__auto__.call(obj__46651__auto__);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let58109.destroy == null)){
(with_let58109.destroy = destroy__47101__auto___58126);
} else {
}
} else {
destroy__47101__auto___58126();
}

return res58111;
});
nextjournal.clojure_mode.demo.samples = (function nextjournal$clojure_mode$demo$samples(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),(function (){var iter__4622__auto__ = (function nextjournal$clojure_mode$demo$samples_$_iter__58113(s__58114){
return (new cljs.core.LazySeq(null,(function (){
var s__58114__$1 = s__58114;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__58114__$1);
if(temp__5753__auto__){
var s__58114__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58114__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__58114__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__58116 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__58115 = (0);
while(true){
if((i__58115 < size__4621__auto__)){
var source = cljs.core._nth(c__4620__auto__,i__58115);
cljs.core.chunk_append(b__58116,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.demo.editor,source,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval?","eval?",2053418525),true], null)], null));

var G__58127 = (i__58115 + (1));
i__58115 = G__58127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58116),nextjournal$clojure_mode$demo$samples_$_iter__58113(cljs.core.chunk_rest(s__58114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58116),null);
}
} else {
var source = cljs.core.first(s__58114__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.demo.editor,source,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval?","eval?",2053418525),true], null)], null),nextjournal$clojure_mode$demo$samples_$_iter__58113(cljs.core.rest(s__58114__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(comment\n  (fizz-buzz 1)\n  (fizz-buzz 3)\n  (fizz-buzz 5)\n  (fizz-buzz 15)\n  (fizz-buzz 17)\n  (fizz-buzz 42))\n\n(defn fizz-buzz [n]\n  (condp (fn [a b] (zero? (mod b a))) n\n    15 \"fizzbuzz\"\n    3  \"fizz\"\n    5  \"buzz\"\n    n))"], null));
})());
});
nextjournal.clojure_mode.demo.linux_QMARK_ = (function nextjournal$clojure_mode$demo$linux_QMARK_(){
return (!((cljs.core.re_find(/(Linux)|(X11)/,navigator.userAgent) == null)));
});
nextjournal.clojure_mode.demo.mac_QMARK_ = (function nextjournal$clojure_mode$demo$mac_QMARK_(){
return (((!(nextjournal.clojure_mode.demo.linux_QMARK_()))) && ((!((cljs.core.re_find(/(Mac)|(iPhone)|(iPad)|(iPod)/,navigator.platform) == null)))));
});
nextjournal.clojure_mode.demo.key_mapping = (function nextjournal$clojure_mode$demo$key_mapping(){
var G__58117 = new cljs.core.PersistentArrayMap(null, 5, ["ArrowUp","\u2191","ArrowDown","\u2193","ArrowRight","\u2192","ArrowLeft","\u2190","Mod","Ctrl"], null);
if(nextjournal.clojure_mode.demo.mac_QMARK_()){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__58117,new cljs.core.PersistentArrayMap(null, 5, ["Alt","\u2325","Shift","\u21E7","Enter","\u23CE","Ctrl","\u2303","Mod","\u2318"], null)], 0));
} else {
return G__58117;
}
});
nextjournal.clojure_mode.demo.render = (function nextjournal$clojure_mode$demo$render(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.demo.samples], null),document.getElementById("editor"));

document.querySelectorAll("[clojure-mode]").forEach((function (p1__58118_SHARP_){
if(cljs.core.truth_(p1__58118_SHARP_.firstElementChild)){
return null;
} else {
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.demo.editor,clojure.string.trim(p1__58118_SHARP_.innerHTML)], null),p1__58118_SHARP_);
}
}));

var mapping_58128 = nextjournal.clojure_mode.demo.key_mapping();
document.querySelectorAll(".mod,.alt,.ctrl").forEach((function (p1__58119_SHARP_){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mapping_58128,p1__58119_SHARP_.innerHTML);
if(cljs.core.truth_(temp__5753__auto__)){
var k = temp__5753__auto__;
return (p1__58119_SHARP_.innerHTML = k);
} else {
return null;
}
}));

var obj58120_58129 = document.getElementById("viewer-stylesheet");
var obj58121_58130 = (((!((obj58120_58129 == null))))?obj58120_58129:({}));
(obj58121_58130["innerHTML"] = "@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\n@layer base {\r\n  html {\r\n    font-size: 18px;\r\n  }\r\n  @media (max-width: 600px) {\r\n    html {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n  .font-condensed { font-family: \"Fira Sans Condensed\", sans-serif; }\r\n  .font-inter     { font-family: \"Inter\", sans-serif; }\r\n  body {\r\n    @apply font-serif antialiased text-gray-900 sm:overscroll-y-none;\r\n  }\r\n  code, .code {\r\n    @apply font-mono text-sm text-gray-900 bg-slate-50 px-0.5 py-px rounded dark:bg-gray-800;\r\n  }\r\n  code::before, code::after { @apply content-none !important; }\r\n  h1, h3, h4, h5, h6 {\r\n    @apply font-condensed font-bold mt-8 first:mt-0;\r\n  }\r\n  h2 {\r\n    /*We cannot collapse margins due to nesting but we want to*/\r\n    /*keep the h2\u2019s large margin visible*/\r\n    @apply font-condensed font-bold mt-8 first:mt-2;\r\n  }\r\n  h1 { @apply text-4xl; }\r\n  h2 { @apply text-3xl; }\r\n  h3 { @apply text-2xl; }\r\n\r\n  button { @apply focus:outline-none; }\r\n  strong { @apply font-bold; }\r\n  em     { @apply italic; }\r\n  pre    { @apply m-0 font-mono; }\r\n}\r\n\r\n/* Compatibility */\r\n/* --------------------------------------------------------------- */\r\n/* TODO: Verify which colors are in use and replace with Tailwind\r\n   colors accordingly. Move Nj-specific styles out of here. */\r\n\r\n:root {\r\n  --teal-color: #31afd0;\r\n  --dark-teal-color: #095960;\r\n  --near-black-color: #2e2e2c;\r\n  --red-color: #d64242;\r\n  --dark-blue-color: #1f2937;\r\n  --dark-blue-60-color: rgba(28, 42, 56, 0.6);\r\n  --gray-panel-color: rgba(239, 241, 245, 1.000);\r\n  --brand-color: var(--dark-blue-color);\r\n  --link-color: #5046e4;\r\n  --command-bar-selected-color: var(--teal-color);\r\n}\r\n\r\n.serif      { @apply font-serif; }\r\n.sans-serif { @apply font-sans; }\r\n.monospace  { @apply font-mono; }\r\n.inter      { @apply font-inter; }\r\n\r\n.border-color-teal { border-color: var(--dark-teal-color); }\r\n.teal { color: var(--teal-color); }\r\n.bg-dark-blue { background: var(--dark-blue-color); }\r\n.bg-dark-blue-60 { background: rgba(28, 42, 56, 0.6); }\r\n.bg-gray-panel { background: var(--gray-panel-color); }\r\n.text-dark-blue  { color: var(--dark-blue-color); }\r\n.text-dark-blue-60 { color: var(--dark-blue-60-color); }\r\n.border-dark-blue-30 { border-color: rgba(28, 42, 56, 0.6); }\r\n.text-brand { color: var(--dark-blue-color); }\r\n.bg-brand { background: var(--dark-blue-color); }\r\n.text-selected { color: white; }\r\n.red { color: var(--red-color); }\r\n\r\n/* Disclose Button */\r\n/* --------------------------------------------------------------- */\r\n\r\n.disclose {\r\n  @apply content-none border-solid cursor-pointer inline-block relative mr-[3px] top-[-2px] transition-all;\r\n  border-color: var(--near-black-color) transparent;\r\n  border-width: 6px 4px 0;\r\n}\r\n.disclose:hover {\r\n  border-color: var(--near-black-color) transparent;\r\n}\r\n.dark .disclose,\r\n.dark .disclose:hover {\r\n  border-color: white transparent;\r\n}\r\n.disclose.collapsed {\r\n  @apply rotate-[-90deg];\r\n}\r\n\r\n/* Layout */\r\n/* --------------------------------------------------------------- */\r\n\r\n.page {\r\n  @apply max-w-5xl mx-auto px-12 box-border flex-shrink-0;\r\n}\r\n.max-w-prose { @apply max-w-[46rem] !important; }\r\n.max-w-wide  { @apply max-w-3xl !important; }\r\n\r\n/* List Styles */\r\n/* --------------------------------------------------------------- */\r\n\r\n.task-list-item + .task-list-item,\r\n.viewer-markdown ul ul {\r\n  @apply mt-1 mb-0;\r\n}\r\n\r\n/* compact TOC */\r\n.viewer-markdown .toc ul {\r\n  list-style: none;\r\n  @apply my-1;\r\n}\r\n\r\n/* Code Viewer */\r\n/* --------------------------------------------------------------- */\r\n\r\n.viewer-code {\r\n  @apply font-mono bg-slate-100 rounded-sm text-sm mt-4 overflow-x-auto dark:bg-gray-800;\r\n}\r\n.viewer-code .cm-content {\r\n  @apply py-4 px-8;\r\n}\r\n@media (min-width: 960px){\r\n  .viewer-notebook .viewer-code .cm-content {\r\n    @apply py-4 pl-12;\r\n  }\r\n}\r\n/* Don\u2019t show focus outline when double-clicking cell in Safari */\r\n.cm-scroller { @apply focus:outline-none; }\r\n\r\n/* Syntax Highlighting */\r\n/* --------------------------------------------------------------- */\r\n\r\n.inspected-value { @apply text-xs font-mono leading-[1.25rem]; }\r\n.cmt-strong, .cmt-heading { @apply font-bold; }\r\n.cmt-italic, .cmt-emphasis { @apply italic; }\r\n.cmt-strikethrough { @apply line-through; }\r\n.cmt-link { @apply underline; }\r\n.untyped-value { @apply whitespace-nowrap; }\r\n\r\n.cm-editor, .cmt-default, .viewer-result {\r\n  @apply text-slate-800 dark:text-slate-300;\r\n}\r\n.cmt-keyword {\r\n  @apply text-purple-800 dark:text-pink-400;\r\n}\r\n.cmt-atom, .cmt-bool, .cmt-url, .cmt-contentSeparator, .cmt-labelName {\r\n  @apply text-blue-900 dark:text-blue-300;\r\n}\r\n.cmt-inserted, .cmt-literal {\r\n  @apply text-emerald-700 dark:text-emerald-200;\r\n}\r\n.cmt-string, .cmt-deleted {\r\n  @apply text-rose-700 dark:text-sky-300;\r\n}\r\n.cmt-italic.cmt-string {\r\n  @apply dark:text-sky-200;\r\n}\r\n.cmt-regexp, .cmt-escape {\r\n  @apply text-orange-500 dark:text-orange-300;\r\n}\r\n.cmt-variableName {\r\n  @apply text-blue-800 dark:text-sky-300;\r\n}\r\n.cmt-typeName, .cmt-namespace {\r\n  @apply text-emerald-600 dark:text-emerald-300;\r\n}\r\n.cmt-className {\r\n  @apply text-teal-600 dark:text-teal-200;\r\n}\r\n.cmt-macroName {\r\n  @apply text-teal-700 dark:text-teal-200;\r\n}\r\n.cmt-propertyName {\r\n  @apply text-blue-700 dark:text-blue-200;\r\n}\r\n.cmt-comment {\r\n  @apply text-slate-500 dark:text-slate-400;\r\n}\r\n.cmt-meta {\r\n  @apply text-slate-600 dark:text-slate-400;\r\n}\r\n.cmt-invalid {\r\n  @apply text-red-500 dark:text-red-300;\r\n}\r\n\r\n.result-data {\r\n  @apply font-mono text-sm overflow-x-auto whitespace-nowrap leading-normal;\r\n}\r\n.result-data::-webkit-scrollbar, .path-nav::-webkit-scrollbar {\r\n  @apply h-0;\r\n}\r\n.result-data-collapsed {\r\n  @apply whitespace-nowrap;\r\n}\r\n.result-data-field {\r\n  @apply ml-4 whitespace-nowrap;\r\n}\r\n.result-data-field-link{\r\n  @apply ml-4 whitespace-nowrap cursor-pointer;\r\n}\r\n.result-data-field-link:hover {\r\n  @apply text-black bg-black/5;\r\n}\r\n.result-text-empty {\r\n  color: rgba(0,0,0,.3);\r\n}\r\n.browsify-button:hover {\r\n  box-shadow: -2px 0 0 2px #edf2f7;\r\n}\r\n\r\n/* Prose */\r\n/* --------------------------------------------------------------- */\r\n\r\n.viewer-notebook,\r\n.viewer-markdown {\r\n  @apply prose\r\n    dark:prose-invert\r\n    prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline\r\n    dark:prose-a:text-blue-300\r\n    prose-p:mt-4 prose-p:leading-snug\r\n    prose-ol:mt-4 prose-ol:mb-6 prose-ol:leading-snug\r\n    prose-ul:mt-4 prose-ul:mb-6 prose-ul:leading-snug\r\n    prose-blockquote:mt-4 prose-blockquote:leading-snug\r\n    prose-hr:mt-6 prose-hr:border-t-2 prose-hr:border-solid prose-hr:border-slate-200\r\n    prose-figure:mt-4\r\n    prose-figcaption:mt-2 prose-figcaption:text-xs\r\n    prose-headings:mb-4\r\n    prose-table:mt-0\r\n    prose-th:mb-0\r\n    prose-img:my-0\r\n    prose-code:font-medium prose-code:bg-slate-100\r\n    max-w-none;\r\n}\r\n.viewer-markdown blockquote p:first-of-type:before,\r\n.viewer-markdown blockquote p:last-of-type:after {\r\n  @apply content-none;\r\n}\r\n\r\n/* Images */\r\n/* --------------------------------------------------------------- */\r\n\r\n\r\n/* Todo Lists */\r\n/* --------------------------------------------------------------- */\r\n\r\n.contains-task-list {\r\n  @apply pl-6 list-none;\r\n}\r\n.contains-task-list input[type=\"checkbox\"] {\r\n  @apply appearance-none h-4 w-4 rounded border border-slate-200 relative mr-[0.3rem] ml-[-1.5rem] top-[0.15rem];\r\n}\r\n.contains-task-list input[type=\"checkbox\"]:checked {\r\n  @apply border-indigo-600 bg-indigo-600 bg-no-repeat bg-contain;\r\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\r\n}\r\n\r\n/* Markdown TOC */\r\n/* --------------------------------------------------------------- */\r\n\r\n.viewer-markdown .toc      { @apply mt-4; }\r\n.viewer-markdown h1 + .toc { @apply mt-8; }\r\n\r\n.viewer-markdown .toc h1,\r\n.viewer-markdown .toc h2,\r\n.viewer-markdown .toc h3,\r\n.viewer-markdown .toc h4,\r\n.viewer-markdown .toc h5,\r\n.viewer-markdown .toc h6 {\r\n  @apply text-base text-indigo-600 font-sans my-0;\r\n}\r\n.viewer-markdown .toc a {\r\n  @apply text-indigo-600 font-normal no-underline hover:underline;\r\n}\r\n.viewer-markdown .toc li    { @apply m-0; }\r\n.viewer-markdown .toc ul ul { @apply pl-4; }\r\n\r\n/* Notebook Spacing */\r\n/* --------------------------------------------------------------- */\r\n\r\n.viewer-notebook { @apply py-16; }\r\n#clerk-static-app .viewer-notebook { @apply pt-[0.8rem] pb-16; }\r\n.viewer-markdown *:first-child:not(.viewer-code):not(li):not(h2) { @apply mt-0; }\r\n.viewer + .viewer { @apply mt-6; }\r\n.viewer + .viewer-result { @apply mt-0; }\r\n.viewer-code + .viewer-result { @apply mt-3; }\r\n.viewer-markdown + .viewer-markdown { @apply mt-0; }\r\n\r\n/* Sidenotes */\r\n/* --------------------------------------------------------------- */\r\n\r\n.sidenote-ref {\r\n  @apply top-[-3px] inline-flex justify-center items-center w-[18px] h-[18px]\r\n    rounded-full bg-slate-100 border border-slate-300 hover:bg-slate-200 hover:border-slate-300\r\n    m-0 ml-[4px] cursor-pointer;\r\n}\r\n.sidenote {\r\n  @apply hidden float-left clear-both mx-[2.5%] my-4 text-xs relative w-[95%];\r\n}\r\n.sidenote-ref.expanded + .sidenote {\r\n  @apply block;\r\n}\r\n@media (min-width: 860px) {\r\n  .sidenote-ref {\r\n    @apply top-[-0.5em] w-auto h-auto inline border-0 bg-transparent m-0 pointer-events-none;\r\n  }\r\n  .sidenote sup { @apply inline; }\r\n  .viewer-markdown .contains-sidenotes p { @apply max-w-[65%]; }\r\n  .viewer-markdown p .sidenote {\r\n    @apply mr-[-54%] mt-[0.2rem] w-1/2 float-right clear-right relative block;\r\n  }\r\n}\r\n.viewer-code + .viewer:not(.viewer-markdown):not(.viewer-code):not(.viewer-code-folded),\r\n.viewer-code-folded + .viewer:not(.viewer-markdown):not(.viewer-code):not(.viewer-code-folded),\r\n.viewer-result + .viewer-result {\r\n  @apply mt-2;\r\n}\r\n.viewer-result {\r\n  @apply leading-tight;\r\n}\r\n@media (min-width: 768px) {\r\n  .devcard-desc > div {\r\n    @apply max-w-full m-0;\r\n  }\r\n}\r\n\r\n/* Command Palette */\r\n/* --------------------------------------------------------------- */\r\n\r\n.nj-commands-input {\r\n  @apply bg-transparent text-white;\r\n}\r\n.nj-context-menu-item:hover:not([disabled]) {\r\n  @apply cursor-pointer;\r\n  background-color: rgba(255,255,255,.14);\r\n}\r\n\r\n/* Devdocs */\r\n/* --------------------------------------------------------------- */\r\n\r\n.logo, .logo-white {\r\n  @apply block indent-[-999em];\r\n  background: url(/images/nextjournal-logo.svg) center center no-repeat;\r\n}\r\n.devdocs-body {\r\n  @apply font-inter;\r\n}\r\n\r\n/* Workarounds */\r\n/* --------------------------------------------------------------- */\r\n\r\n/* Fixes vega viewer resizing into infinity */\r\n.vega-embed .chart-wrapper { @apply h-auto !important; }\r\n/* fixes fraction separators being overridden by tw\u2019s border-color */\r\n.katex * { @apply border-black; }\r\n");


if(nextjournal.clojure_mode.demo.linux_QMARK_()){
return twemoji.parse(document.body);
} else {
return null;
}
});

//# sourceMappingURL=nextjournal.clojure_mode.demo.js.map
