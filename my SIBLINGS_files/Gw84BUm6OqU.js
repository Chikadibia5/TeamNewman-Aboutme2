;/*FB_PKG_DELIM*/

__d("NullStateNoResults",["cr:3584"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:3584")}),98);
__d("NullStateNoResultsFB",["IconSource","bx"],(function(a,b,c,d,e,f,g){"use strict";a={dark:new(c("IconSource"))("nullStateGlyphs",c("bx").getURL(c("bx")("1160064")),112),"default":new(c("IconSource"))("nullStateGlyphs",c("bx").getURL(c("bx")("1160065")),112)};g["default"]=a}),98);
__d("GroupsCometMemberActionSourceContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext();g["default"]=b}),98);
__d("XCometGroupsTabDiscoverControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/discover/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometGroupsTabEngageControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/feed/",Object.freeze({inline_composer_post:!1}),void 0);b=a;g["default"]=b}),98);
__d("GroupsCometNullState.react",["fbt","CometCard.react","NullStateMedia","NullStateNoResults","TetraButton.react","TetraNullState.react","XCometGroupsTabDiscoverControllerRouteBuilder","XCometGroupsTabEngageControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=c("XCometGroupsTabDiscoverControllerRouteBuilder").buildURL({}),k=c("XCometGroupsTabEngageControllerRouteBuilder").buildURL({}),l=h._("__JHASH__KMFjEn2xtRV__JHASH__"),m=h._("__JHASH__NG6nLliU94j__JHASH__");function a(a){a=a.subTab;a=a!=="feed";return i.jsx("div",{className:"x1yztbdb",role:"article",children:i.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:i.jsx(c("TetraNullState.react"),{action:i.jsx(c("TetraButton.react"),{label:a?m:l,linkProps:{url:a?k:j}}),body:h._("__JHASH__K5Oe-W3kYnD__JHASH__"),headline:h._("__JHASH__XcMrMBe3VX0__JHASH__"),icon:a?c("NullStateNoResults"):c("NullStateMedia")})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useGroupMarkPostsAsReadUpdate",["CometRelay","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(){var a=d("CometRelay").useRelayEnvironment();return h(function(b){if(b==null){c("recoverableViolation")("Group null for left rail item","groups_comet");return}a.commitUpdate(function(a){a=a.get(b);a!=null&&(a.setValue(0,"unread_count"),a.setValue(!1,"should_show_community_panel_badge"))})},[a])}g["default"]=a}),98);
__d("CommunityVerticalsEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1032");c=b("FalcoLoggerInternal").create("community_verticals_event",a);e.exports=c}),null);
__d("GroupsCometSettingMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5449426838422455"}),null);
__d("useCometTypeaheadStaticDataSource",["BaseTypeaheadBaseStaticDataSource","BaseTypeaheadPayloadDecoratorAddLimit","react","useDeepEqualMemo"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useMemo;function a(a){var b=a.limit;a=babelHelpers.objectWithoutPropertiesLoose(a,["limit"]);var d=h(function(){return c("BaseTypeaheadPayloadDecoratorAddLimit")(b)},[b]),e=c("useDeepEqualMemo")(a),f=h(function(){return new(c("BaseTypeaheadBaseStaticDataSource"))(e)},[e]);return h(function(){return{fetchCache:function(a){return d(f.fetchCache(a))}}},[f,d])}g["default"]=a}),98);