;/*FB_PKG_DELIM*/

__d("SearchCometResultsLoggedModule_loggingModel.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SearchCometResultsLoggedModule_loggingModel",selections:[{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"logging_unit_id",storageKey:null}],type:"SearchModuleLoggingViewModel",abstractKey:null};e.exports=a}),null);
__d("SearchCometResultsLoggedResult_loggingModel.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SearchCometResultsLoggedResult_loggingModel",selections:[{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"logging_unit_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tapped_result_id",storageKey:null}],type:"SearchResultLoggingViewModel",abstractKey:null};e.exports=a}),null);
__d("SearchCometResultsCard.react",["BaseHeadingContextWrapper.react","CometCard.react","CometUnitHeader.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={defaultSpacing:{marginTop:"xw7yly9",marginEnd:"xktsk01",marginBottom:"x1yztbdb",marginStart:"x1d52u69",$$css:!0},footer:{marginTop:"xw7yly9",marginEnd:"xktsk01",marginBottom:"x1yztbdb",marginStart:"x1d52u69",$$css:!0},root:{marginBottom:"x1yztbdb",$$css:!0}},j={primary:2,secondary:3};function a(a){var b=a.content,d=a.contentXStyle,e=a["data-testid"];e=a.footer;var f=a.footerXStyle,g=a.padding;g=g===void 0?"default":g;var k=a.subtitle,l=a.title,m=a.titleAction,n=a.titleActionLinkProps;a=a.titleStyle;a=a===void 0?"primary":a;l=l!=null&&l!==""?l:null;m=h.jsx(c("CometUnitHeader.react"),{action:m,actionLinkProps:n,body:k,headline:l,level:j[a]});return h.jsx("div",{className:"x1yztbdb","data-testid":void 0,role:"article",children:h.jsxs(c("CometCard.react"),{background:"white",dropShadow:1,testid:void 0,children:[l!=null?h.jsxs("div",{children:[m,h.jsx("div",{className:c("stylex")(g==="default"&&i.defaultSpacing,d),children:h.jsx(c("BaseHeadingContextWrapper.react"),{children:b})})]}):null,l==null?h.jsx("div",{className:c("stylex")(g==="default"&&i.defaultSpacing,d),children:b}):null,e!=null?h.jsx("div",{className:c("stylex")(g==="default"&&i.footer,f),role:"article",children:e}):null]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometResultsQueryContext",["react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=h.createContext();b=function(a){var b=a.children;a=a.context;return h.jsx(j.Provider,{value:a,children:b})};function a(){var a=i(j);if(a==null)throw c("unrecoverableViolation")("No query context found","search");return a}g.SearchCometResultsQueryContextProvider=b;g.useSearchCometResultsQueryContext=a}),98);
__d("SearchCometResultsLoggedModuleContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({logModuleClick:null,logModuleInlineAction:null,logSeeMoreClick:null,sessionID:null,vpvdLoggerRef:null});g["default"]=b}),98);
__d("SearchResultPageLoggingInlineActionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744351");c=b("FalcoLoggerInternal").create("search_result_page_logging_inline_action",a);e.exports=c}),null);
__d("SearchResultPageLoggingItemClickedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744352");c=b("FalcoLoggerInternal").create("search_result_page_logging_item_clicked",a);e.exports=c}),null);
__d("SearchCometResultsLoggerUtil",["SearchResultPageLoggingInlineActionFalcoEvent","SearchResultPageLoggingItemClickedFalcoEvent","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=function(a,b){c("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(function(){return{click_type:"graph_search_results_module_tapped",common:{logging_unit_id:a,session_id:b,timestamp:Date.now().toString()}}})};b=function(a,b,d){c("SearchResultPageLoggingInlineActionFalcoEvent").logImmediately(function(){return{common:{logging_unit_id:a,session_id:b,timestamp:Date.now().toString()},inline_action_name:d}})};d=function(a,b,d){c("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(function(){return{click_type:"graph_search_results_item_in_module_tapped",common:{logging_unit_id:a,session_id:b,timestamp:Date.now().toString()},unit_id_result_id:d}})};e=function(a,b,d){c("SearchResultPageLoggingInlineActionFalcoEvent").logImmediately(function(){return{common:{logging_unit_id:a,session_id:b,timestamp:Date.now().toString()},inline_action_name:d}})};f=function(a,b){c("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(function(){return{click_type:"graph_search_results_see_more_on_module_tapped",common:{logging_unit_id:a,session_id:b,timestamp:Date.now().toString()}}})};g.logModuleClick=a;g.logModuleInlineAction=b;g.logResultClick=d;g.logResultInlineAction=e;g.logSeeMoreClick=f}),98);
__d("SearchResultPageLoggingViewportViewFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744354");c=b("FalcoLoggerInternal").create("search_result_page_logging_viewport_view",a);e.exports=c}),null);
__d("useSearchCometResultsVPVdLogger",["SearchResultPageLoggingViewportViewFalcoEvent","gkx","react","useVPVDImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=a.loggingUnitID,d=a.sessionID,e=a.tappedResultID,f=h(function(a,f){c("SearchResultPageLoggingViewportViewFalcoEvent").logImmediately(function(){return{common:{logging_unit_id:b,session_id:d,timestamp:Date.now().toString()},is_bootstrap_entity_module:!1,unit_id_result_id:e,vpv_duration:String(f),vpv_start_time:String(a)}})},[b,d,e]);a=h(function(a){var b=a.visibleDuration;a=a.visibleTime;f(a,b)},[f]);return c("useVPVDImpression")({isLite:!0,minVisibleTimeMs:1,onVPVDEnd:a})}g["default"]=a}),98);
__d("SearchCometResultsLoggedModuleProvider.react",["SearchCometResultsLoggedModuleContext","SearchCometResultsLoggerUtil","react","useSearchCometResultsVPVdLogger"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=a.children,e=a.loggingUnitID,f=a.sessionID;a=a.shouldUseCustomVPVdRef;var g=c("useSearchCometResultsVPVdLogger")({loggingUnitID:e,sessionID:f}),j=g[0];g=i(function(){return{logModuleClick:function(){d("SearchCometResultsLoggerUtil").logModuleClick(e,f)},logModuleInlineAction:function(a){d("SearchCometResultsLoggerUtil").logModuleInlineAction(e,f,a)},logSeeMoreClick:function(){d("SearchCometResultsLoggerUtil").logSeeMoreClick(e,f)},sessionID:f,vpvdLoggerRef:j}},[e,f,j]);return h.jsx(c("SearchCometResultsLoggedModuleContext").Provider,{value:g,children:Boolean(a)?b:h.jsx("div",{ref:j,children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometResultsLoggedModule.react",["CometRelay","SearchCometResultsLoggedModuleProvider.react","SearchCometResultsLoggedModule_loggingModel.graphql","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.children,f=a.loggingModel;a=a.shouldUseCustomVPVdRef;if(f==null)throw c("unrecoverableViolation")("Undefined module logging model","search");f=d("CometRelay").useFragment(h!==void 0?h:h=b("SearchCometResultsLoggedModule_loggingModel.graphql"),f);var g=f.logging_unit_id;f=f.session_id;return i.jsx(c("SearchCometResultsLoggedModuleProvider.react"),{loggingUnitID:g,sessionID:f,shouldUseCustomVPVdRef:a,children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometResultsLoggedProfileContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({addEntityToRecentSearches:null});g["default"]=b}),98);
__d("SearchCometResultsLoggedResultContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({logResultClick:null,logResultInlineAction:null,vpvdLoggerRef:null});g["default"]=b}),98);
__d("SearchCometResultsLoggedResultProvider.react",["SearchCometResultsLoggedResultContext","SearchCometResultsLoggerUtil","mergeRefs","react","useSearchCometResultsVPVdLogger","useStoryVPVDLogger"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=a.children,e=a.loggingUnitID,f=a.sessionID,g=a.shouldUseCustomVPVdRef;g=g===void 0?!1:g;var j=a.tappedResultID;a=c("useSearchCometResultsVPVdLogger")({loggingUnitID:e,sessionID:f,tappedResultID:j});var k=a[0];a=c("useStoryVPVDLogger")({interactionSourceOverride:78,position:0,trackable:e});var l=a[0];a[1];var m=i(function(){return c("mergeRefs")(k,l)},[k,l]);a=i(function(){return{logResultClick:function(){d("SearchCometResultsLoggerUtil").logResultClick(e,f,j)},logResultInlineAction:function(a){d("SearchCometResultsLoggerUtil").logResultInlineAction(e,f,a)},vpvdLoggerRef:m}},[e,f,j,m]);return h.jsx(c("SearchCometResultsLoggedResultContext").Provider,{value:a,children:g?b:h.jsx("div",{ref:m,children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometResultsLoggedResult.react",["CometRelay","SearchCometResultsLoggedResultProvider.react","SearchCometResultsLoggedResult_loggingModel.graphql","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.children,f=a.loggingModel;a=a.shouldUseCustomVPVdRef;if(f==null)throw c("unrecoverableViolation")("Undefined result logging model","search");f=d("CometRelay").useFragment(h!==void 0?h:h=b("SearchCometResultsLoggedResult_loggingModel.graphql"),f);var g=f.logging_unit_id,j=f.session_id;f=f.tapped_result_id;return i.jsx(c("SearchCometResultsLoggedResultProvider.react"),{loggingUnitID:g,sessionID:j,shouldUseCustomVPVdRef:a,tappedResultID:f,children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useSearchCometResultsLogger",["SearchCometResultsLoggedModuleContext","SearchCometResultsLoggedProfileContext","SearchCometResultsLoggedResultContext","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";d("react");b=d("react");var h=b.useContext,i=b.useMemo;function a(){var a;a=(a=h(c("SearchCometResultsLoggedModuleContext")))!=null?a:{};var b=a.logModuleClick,d=a.logModuleInlineAction,e=a.logSeeMoreClick,f=a.sessionID,g=a.vpvdLoggerRef;a=(a=h(c("SearchCometResultsLoggedResultContext")))!=null?a:{};var j=a.logResultClick,k=a.logResultInlineAction,l=a.vpvdLoggerRef;a=(a=h(c("SearchCometResultsLoggedProfileContext")))!=null?a:{};var m=a.addEntityToRecentSearches;return i(function(){var a;return{logInlineAction:function(a){k!=null?k(a):d!=null?d(a):c("recoverableViolation")("No module or result logging context found for inline action","search")},logResultClick:function(){j!=null?j():b!=null?b():c("recoverableViolation")("No module or result logging context found for click","search"),m!=null&&m()},logSeeMoreClick:function(){if(e==null){c("recoverableViolation")("No module logging context found for see more click","search");return}e()},sessionID:f,vpvdLoggerRef:(a=l)!=null?a:g}},[m,b,d,j,k,e,g,l,f])}g["default"]=a}),98);
__d("SearchCometResultsLogger",["react","useSearchCometResultsLogger"],(function(a,b,c,d,e,f,g){"use strict";d("react");function a(a){a=a.children;return a(c("useSearchCometResultsLogger")())}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("searchCometResultsWithCard",["SearchCometResultsCard.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){return function(d){return h.jsx(c("SearchCometResultsCard.react"),babelHelpers["extends"]({content:h.jsx(a,babelHelpers["extends"]({},d))},b))}}g["default"]=a}),98);
__d("SearchCometResultsPhotoAttribution.react",["TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.attribution;return h.jsx("div",{className:"x11v4dcs x9f619 x78zum5 x3ieub6 xng8ra xwib8y2 x2qib4z xcu9agk xh8yej3",children:h.jsx(c("TetraText.react"),{color:"primaryOnMedia",numberOfLines:2,type:"headline4",children:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);