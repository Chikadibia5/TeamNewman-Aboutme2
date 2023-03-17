;/*FB_PKG_DELIM*/

__d("CometMoreContentButton.react",["CometPressable.react","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={bottom:{bottom:"x1escl5o",$$css:!0},container:{display:"x78zum5",justifyContent:"xl56j7k",position:"x10l6tqk",start:"xtzzx4i",$$css:!0},deemphasized:{backgroundColor:"x1l31dnx",$$css:!0},"default":{alignItems:"x6s0dn4",borderTop:"x76ihet",borderEnd:"xwmqs3e",borderBottom:"x112ta8",borderStart:"xxxdfa6",borderTopStartRadius:"x10m1dyt",borderTopEndRadius:"xx7vh7w",borderBottomEndRadius:"xqw4mrg",borderBottomStartRadius:"x18f6g3z",boxShadow:"x2c8kfy",display:"x78zum5",height:"xt7dq6l",justifyContent:"xl56j7k",paddingTop:"xyamay9",paddingEnd:"xn6708d",paddingBottom:"x1l90r2v",paddingStart:"x1ye3gou",position:"x10l6tqk",$$css:!0},emphasized:{backgroundColor:"xtvsq51",$$css:!0},"static":{position:"x1uhb9sk",$$css:!0},top:{top:"x13vifvy",$$css:!0}};function a(a){var b=a["aria-hidden"],d=a.children,e=a.deemphasized;e=e===void 0?!1:e;var f=a.disabled,g=a.isStaticPosition;g=g===void 0?!1:g;var j=a.linkProps,k=a.onPress,l=a.position;l=l===void 0?"top":l;a=a.xstyle;return h.jsx("div",{className:c("stylex")([i.container,g&&i["static"],i[l],a]),children:h.jsx(c("CometPressable.react"),{"aria-hidden":b,disabled:f,display:"inline",linkProps:j,onPress:k,overlayDisabled:!0,xstyle:[i["default"],g&&i["static"],e?i.deemphasized:i.emphasized],children:h.jsx(c("TetraText.react"),{color:e?"primary":"white",numberOfLines:1,type:"button2",children:d})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHomeContentMoreContentButton.react",["CometMoreContentButton.react","CometProgressRingIndeterminate.react","CometVisualCompletionAttributes","clearTimeout","react","setTimeout","useCurrentRouteBuilder"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useEffect,j=b.useState,k=200,l={button:{paddingTop:"xz9dl7a",$$css:!0},container:{opacity:"x1hc1fzr",position:"x7wzq59",top:"x1w1tb2m",transform:"xnn1q72",transitionDuration:"x13dflua",transitionProperty:"x6o7n8i",transitionTimingFunction:"x9lcvmn",zIndex:"x1vjfegm","@media(max-width: 900px)_top":"xsz5k2l",$$css:!0},hidden:{opacity:"xg01cxk",pointerEvents:"x47corl",transform:"x1cna9jh",$$css:!0},spinner:{height:"x10w6t97",$$css:!0}};function a(a){a=a.isLoading;var b=j(null),d=b[0],e=b[1];a&&(d!=="LOADING"&&e("LOADING"));var f=a;i(function(){if(f===!1){var a=c("setTimeout")(function(){return e(null)},k+50);return function(){return c("clearTimeout")(a)}}},[f]);b=c("useCurrentRouteBuilder")();if(b==null)return null;b=b.buildURL({});return h.jsx("div",babelHelpers["extends"]({"aria-hidden":!f,className:"x7wzq59 x1w1tb2m x13dflua x6o7n8i x9lcvmn x1vjfegm xsz5k2l"+(f?" x1hc1fzr xnn1q72":" xg01cxk x1cna9jh x47corl")},c("CometVisualCompletionAttributes").IGNORE,{children:h.jsx(c("CometMoreContentButton.react"),{deemphasized:!0,disabled:a,linkProps:{url:b},xstyle:l.button,children:d==="LOADING"?h.jsx("div",{className:"x10w6t97",children:h.jsx(c("CometProgressRingIndeterminate.react"),{color:"blue",size:32})}):null})}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesTrayLogger",["DirectMessagingTypedLogger"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b){var c={eventStories:0,followeeStories:0,friendStories:0,groupStories:0,hasSelfStory:!1,liveStories:0,newNonSelfStories:0,pageStories:0,storyPromos:0,storyThreadIDs:new Map(),totalNoneSelfStories:0};if(a==null)return c;c=a.reduce(function(a,c){var d,e,f;c=c;if(c==null)return a;var g=c.story_bucket_type;d=((d=c.story_bucket_owner)==null?void 0:d.is_viewer_friend)||!1;var h=c.is_bucket_seen_by_viewer||!1;e=((e=c.unified_stories)==null?void 0:e.is_empty)===!1?1:0;f=(f=c.story_bucket_owner)==null?void 0:f.id;c=(c=c.unified_stories)==null?void 0:c.nodes;c=c!=null?c.map(function(a){return a.id}):null;(g==="LIVE_STORY"||e>0)&&(b===f?a.hasSelfStory=!0:(a.totalNoneSelfStories++,h&&a.newNonSelfStories++),g==="LIVE_STORY"?a.liveStories++:g==="PAGE_STORY"?a.pageStories++:g==="EVENT_STORY"?a.eventStories++:g==="GROUP_STORY"?a.groupStories++:g==="PROMOTION_STORY"?a.storyPromos++:!d?a.followeeStories++:a.friendStories++);f!=null&&c!=null&&a.storyThreadIDs.set(f,c);return a},c);return c}function a(a){var b=a.actorID,d=a.buckets,e=a.feedUnitTrackingString,f=a.sessionID;a=a.source;if(d==null)return;d=h(d,b);b=new(c("DirectMessagingTypedLogger"))();b.setHasMyStory(d.hasSelfStory).setNumberStories(d.totalNoneSelfStories).setNumberNewStories(d.newNonSelfStories).setNumberLiveStories(d.liveStories).setLiveStoriesInTray(d.liveStories).setPageStoriesInTray(d.pageStories).setEventStoriesInTray(d.eventStories).setGroupStoriesInTray(d.groupStories).setFolloweeStoriesInTray(d.followeeStories).setFriendStoriesInTray(d.friendStories).setPromotionStoriesInTray(d.storyPromos).setClientStoryThreadIds(d.storyThreadIDs).setName("story_tray_load").setSource(a).setTraySessionID(f).setStoriesTrayFeedUnitTrackingString(e).log()}g._getLoggingData=h;g.logStoryTrayLoad=a}),98);
__d("CometNewsFeedEofFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743385");c=b("FalcoLoggerInternal").create("comet_news_feed_eof",a);e.exports=c}),null);
__d("CometNewsFeedEofUnmountedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743386");c=b("FalcoLoggerInternal").create("comet_news_feed_eof_unmounted",a);e.exports=c}),null);
__d("FbShortsUnifiedTofuVideoClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1894");c=b("FalcoLoggerInternal").create("fb_shorts_unified_tofu_video_click",a);e.exports=c}),null);
__d("FbShortsUnifiedTofuVideoVpvFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1895");c=b("FalcoLoggerInternal").create("fb_shorts_unified_tofu_video_vpv",a);e.exports=c}),null);
__d("StoryProfileImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744412");c=b("FalcoLoggerInternal").create("story_profile_impression",a);e.exports=c}),null);
__d("UnifiedTofuTrayImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1975");c=b("FalcoLoggerInternal").create("unified_tofu_tray_impression",a);e.exports=c}),null);
__d("UnifiedTofuTrayTabSwitchFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1976");c=b("FalcoLoggerInternal").create("unified_tofu_tray_tab_switch",a);e.exports=c}),null);
__d("UnifiedTofuTrayVpvEndFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1977");c=b("FalcoLoggerInternal").create("unified_tofu_tray_vpv_end",a);e.exports=c}),null);
__d("UnifiedTofuTrayVpvStartFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1978");c=b("FalcoLoggerInternal").create("unified_tofu_tray_vpv_start",a);e.exports=c}),null);
__d("CometFeedGapRuleViolationTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:CometFeedGapRuleViolationLoggerConfig")}),null);