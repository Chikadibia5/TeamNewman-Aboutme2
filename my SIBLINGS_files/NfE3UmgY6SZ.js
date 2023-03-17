;/*FB_PKG_DELIM*/

__d("CometTahoeEndCardScreen_video_home_section.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"initialTracePolicy"},{defaultValue:null,kind:"LocalArgument",name:"videoID"}],kind:"Fragment",metadata:null,name:"CometTahoeEndCardScreen_video_home_section",selections:[{alias:null,args:[{kind:"Variable",name:"initial_trace_policy",variableName:"initialTracePolicy"},{kind:"Variable",name:"video_id",variableName:"videoID"}],concreteType:"VideoHomeSection",kind:"LinkedField",name:"tahoe_end_card_section",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"tahoe_end_screen_title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:10}],concreteType:"VideoHomeSectionComponentsConnection",kind:"LinkedField",name:"section_components",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoHomeSectionComponentsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"feed_unit",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometTahoeEndCard_video"}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewability_config",storageKey:null},{alias:null,args:null,concreteType:"CometClientViewConfig",kind:"LinkedField",name:"client_view_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_delay_log_impression",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_signal_imp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_vital_imp",storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],type:"VideoHomeFeedUnitSectionComponent",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:"section_components(first:10)"}],storageKey:null}],type:"Query",abstractKey:null};e.exports=a}),null);
__d("CometTahoeEndCard_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTahoeEndCard_video",selections:[{args:null,kind:"FragmentSpread",name:"CometTahoeEndCardUFISummary_video"},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:280},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:'image(height:280,sizing:"cover-fill-cropped",width:500)'},{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:a,type:"User",abstractKey:null},{kind:"InlineFragment",selections:a,type:"Page",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"play_count",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoViewAndCrosspostedInfo_video"}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("CometTahoeUpNextOverlayAndEndScreenQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5833224963459670"}),null);
__d("CometTahoeUpNextOverlayAndEndScreenQuery.graphql",["CometTahoeUpNextOverlayAndEndScreenQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"initialTracePolicy"},{defaultValue:null,kind:"LocalArgument",name:"upNextVideoID"},{defaultValue:null,kind:"LocalArgument",name:"useDefaultActor"},{defaultValue:null,kind:"LocalArgument",name:"videoID"}],c=[{kind:"Variable",name:"id",variableName:"upNextVideoID"}],d={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},e={kind:"Literal",name:"sizing",value:"cover-fill-cropped"},f=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],g={alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},k=[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],l={alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},m={alias:"i18n_reaction_count",args:null,kind:"ScalarField",name:"reaction_count_reduced",storageKey:null},n=[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],o=[j],p={kind:"InlineFragment",selections:o,type:"Node",abstractKey:"__isNode"};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometTahoeUpNextOverlayAndEndScreenQuery",selections:[{alias:null,args:c,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTahoeUpNextOverlay_video"},d],storageKey:null},{args:[{kind:"Variable",name:"initialTracePolicy",variableName:"initialTracePolicy"},{kind:"Variable",name:"videoID",variableName:"videoID"}],kind:"FragmentSpread",name:"CometTahoeEndCardScreen_video_home_section"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometTahoeUpNextOverlayAndEndScreenQuery",selections:[{alias:null,args:c,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:145},e,{kind:"Literal",name:"width",value:257}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:f,storageKey:'image(height:145,sizing:"cover-fill-cropped",width:257)'},g,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[h,i,j],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_premiere",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_huddle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_video_broadcast",storageKey:null},d,j],storageKey:null},{alias:null,args:[{kind:"Variable",name:"initial_trace_policy",variableName:"initialTracePolicy"},{kind:"Variable",name:"video_id",variableName:"videoID"}],concreteType:"VideoHomeSection",kind:"LinkedField",name:"tahoe_end_card_section",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"tahoe_end_screen_title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:10}],concreteType:"VideoHomeSectionComponentsConnection",kind:"LinkedField",name:"section_components",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoHomeSectionComponentsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[h,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"feed_unit",plural:!1,selections:[h,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[h,{kind:"InlineFragment",selections:[j,{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:k,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"viewer_feedback_reaction_info",plural:!1,selections:[l,j],storageKey:null},j,{alias:null,args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",kind:"LinkedField",name:"top_reactions",plural:!1,selections:[{alias:null,args:null,concreteType:"TopReactionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"node",plural:!1,selections:[l,j,{alias:null,args:null,kind:"ScalarField",name:"localized_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null}],storageKey:null},m],storageKey:null}],storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])'},{alias:null,args:k,concreteType:null,kind:"LinkedField",name:"viewer_actor",plural:!1,selections:[h,j],storageKey:null},m],storageKey:null},d,{alias:null,args:[{kind:"Literal",name:"height",value:280},e,{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:f,storageKey:'image(height:280,sizing:"cover-fill-cropped",width:500)'},g,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[h,i,{kind:"InlineFragment",selections:n,type:"User",abstractKey:null},{kind:"InlineFragment",selections:n,type:"Page",abstractKey:null},j],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"play_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"total_posts",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"post_play_count",storageKey:null}],type:"Video",abstractKey:null},p,{kind:"InlineFragment",selections:o,type:"DynamicFeedAdAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:o,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:o,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:o,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewability_config",storageKey:null},{alias:null,args:null,concreteType:"CometClientViewConfig",kind:"LinkedField",name:"client_view_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_delay_log_impression",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_signal_imp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_vital_imp",storageKey:null}],storageKey:null}],type:"Story",abstractKey:null},p,{kind:"InlineFragment",selections:o,type:"FBShortsMidCardFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:o,type:"XFBDummyReelsInWatchIFU",abstractKey:null},{kind:"InlineFragment",selections:o,type:"XFBSFTFeedUnit",abstractKey:null}],storageKey:null}],type:"VideoHomeFeedUnitSectionComponent",abstractKey:null},p],storageKey:null}],storageKey:null}],storageKey:"section_components(first:10)"},j],storageKey:null}]},params:{id:b("CometTahoeUpNextOverlayAndEndScreenQuery_facebookRelayOperation"),metadata:{},name:"CometTahoeUpNextOverlayAndEndScreenQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometTahoeUpNextOverlayAndEndScreenWrapper_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometTahoeUpNextOverlayAndEndScreenWrapper_renderer$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("CometTahoeUpNextOverlayAndEndScreenWrapper_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTahoeUpNextOverlayAndEndScreenWrapper_renderer",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"CometTahoeVODUpNextOverlayRenderer",abstractKey:null};e.exports=a}),null);
__d("CometTahoeEndCardUFISummary_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTahoeEndCardUFISummary_video",selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"UFI2TopReactions_feedback"},{alias:null,args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",kind:"LinkedField",name:"top_reactions",plural:!1,selections:[{alias:null,args:null,concreteType:"TopReactionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])'},{alias:"i18n_reaction_count",args:null,kind:"ScalarField",name:"reaction_count_reduced",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("useVideoPlayerPlayFromBeginning",["VideoPlayerHooks","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=d("VideoPlayerHooks").useController();return h(function(){b.seek(0),b.play(a)},[b,a])}g["default"]=a}),98);
__d("ReactionIconClassNames",["cx"],(function(a,b,c,d,e,f,g,h){"use strict";a="_9zc";b="_2p78";c="_8382";d={like:"_3j7l",love:"_3j7m",anger:"_3j7q",wow:"_3j7n",haha:"_3j7o",sorry:"_3j7r",yay:"_3j7p",confused:"_3j7s",dorothy:"_3rya",toto:"_4aou",flame:"_3qr6",plane:"_4vps",support:"_906t"};e={14:"_8383",16:"_9--",18:"_19kl",20:"_7tr3",48:"_9-_",96:"_9_0"};g.root=a;g.icon=b;g.menuIcon=c;g.reactions=d;g.sizes=e}),98);
__d("UFIReactionIconImpl.react",["FeedbackReactionTypeNames","ReactionIconClassNames","joinClasses","react"],(function(a,b,c,d,e,f,g){var h=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var e=b.prototype;e.shouldComponentUpdate=function(a){return a.className!==this.props.className||a.reaction!==this.props.reaction||a.size!==this.props.size||a.grayscale!==this.props.grayscale};e.renderImage=function(){var a=c("FeedbackReactionTypeNames")[this.props.reaction].toLowerCase();return h.jsx("i",{className:c("joinClasses")(d("ReactionIconClassNames").reactions[a],d("ReactionIconClassNames").icon,d("ReactionIconClassNames").sizes[this.props.size])})};e.render=function(){return h.jsx("span",{className:c("joinClasses")(d("ReactionIconClassNames").root,d("ReactionIconClassNames").sizes[this.props.size],this.props.className),children:this.renderImage()})};return b}(h.Component);a.defaultProps={className:null,grayscale:!1,size:"16"};g["default"]=a}),98);
__d("getReactionKeyFromType",["invariant","FeedbackReactionType","getJSEnumSafe"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){var b=c("getJSEnumSafe")(c("FeedbackReactionType"),a);typeof b==="number"||h(0,11851,a);return b}g["default"]=a}),98);
__d("CometTahoeEndCardUFISummary.react",["CometRelay","CometTahoeEndCardUFISummary_video.graphql","TetraText.react","TetraTextPairing.react","UFIReactionIconImpl.react","getReactionKeyFromType","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e;a=a.video;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometTahoeEndCardUFISummary_video.graphql"),a);a=a==null?void 0:a.feedback;if(a==null)return null;e=(e=a.top_reactions)==null?void 0:e.edges;if(!e){c("recoverableViolation")("CometTahoeEndCardUFISummary: Expected top reactions","watch_www_bug_rotation");return null}if(e.length===0)return null;e=e.filter(function(a){return((a=a.node)==null?void 0:a.reaction_type)!=null}).slice(0,3);a=a.i18n_reaction_count;if(a==null){c("recoverableViolation")("CometTahoeEndCardUFISummary: Expected an i18n_reaction_count","watch_www_bug_rotation");return null}return a==="0"?null:i.jsx(c("TetraTextPairing.react"),{body:i.jsxs("div",{className:"x6s0dn4 x78zum5",children:[e.map(function(a,b){a=(a=a.node)==null?void 0:a.reaction_type;if(a==null){c("recoverableViolation")("CometTahoeEndCardUFISummary: Expected reaction_type on reaction","watch_www_bug_rotation");return null}a=c("getReactionKeyFromType")(a);return i.jsx(c("UFIReactionIconImpl.react"),{className:"x16dsc37",reaction:a,size:"16"},b)}),i.jsx("div",{className:"xurb0ha",children:i.jsx(c("TetraText.react"),{color:"primaryOnMedia",numberOfLines:1,type:"meta1",children:a})})]}),bodyColor:"tertiary",level:4})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTahoeEndCard.react",["CometImage.react","CometLink.react","CometMiddot.react","CometPressable.react","CometRelay","CometTahoeEndCardUFISummary.react","CometTahoeEndCard_video.graphql","CometVideoViewAndCrosspostedInfo.react","FBLogger","TetraTextPairing.react","VideoPlayerLoggingExternalLogContext","XCometVideoHomePlaylistControllerRouteBuilder","XCometWatchControllerRouteBuilder","react","useCometRouterDispatcher","useCometTahoeChainingDepth","useIsVideoHomePlayerOriginFromTracePolicy","useRoutePassthroughProps","useStoryViewabilityLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useContext,k=e.useState,l=c("FBLogger")("watch_www_bug_rotation"),m={divider:{color:"x14ctfv",marginEnd:"xfs2ol5",marginStart:"x12mruv9",$$css:!0},endCard:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",paddingTop:"xrg5d16",position:"x1n2onr6",width:"xh8yej3",$$css:!0},endCardMeta:{backgroundImage:"x1f90px3",bottom:"x1ey2m1c",color:"x14ctfv",end:"xds687c",minWidth:"x5w4yej",paddingTop:"xyamay9",paddingEnd:"x1pi30zi",paddingBottom:"x1l90r2v",paddingStart:"x1swvt13",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},endCardMetaOnHover:{backgroundColor:"xatbrnm",$$css:!0},endCardThumbnail:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",height:"x5yr21d",objectFit:"xl1xv1r",width:"xh8yej3",$$css:!0},endCardThumbnailContainer:{bottom:"x1ey2m1c",end:"xds687c",justifyContent:"xl56j7k",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},metaInfo:{display:"x78zum5",$$css:!0},metaInfoItem:{alignItems:"x6s0dn4",display:"x78zum5",$$css:!0}};function a(a){var e,f,g=a.clientViewConfig,n=a.encryptedTracking,o=a.initialTracePolicy,p=a.logTahoeEvent,q=a.position,r=a.reactionVideoChannelType,s=a.subOrigin,t=a.video;a=a.viewabilityConfig;var u=c("useCometRouterDispatcher")(),v=j(c("VideoPlayerLoggingExternalLogContext")),w=v.externalLogID;v=v.externalLogType;var x=d("useCometTahoeChainingDepth").useChainingDepthContext(),y=x.chainingDepthDispatch;x=c("useRoutePassthroughProps")();var z=k(!1),A=z[0];z=z[1];t=d("CometRelay").useFragment(h!==void 0?h:h=b("CometTahoeEndCard_video.graphql"),t);g=c("useStoryViewabilityLogger")({clientViewConfig:g,encryptedTracking:n,position:q,viewabilityConfig:a});n=g.debuggingInfoLoggers;q=g.ref;a=c("useIsVideoHomePlayerOriginFromTracePolicy")(o);g=(g=t.image)==null?void 0:g.uri;var B=t.title_with_fallback;e=(e=t.owner)==null?void 0:e.name;f=(f=t.owner)==null?void 0:f.uri_token;f=f!=null?c("XCometVideoHomePlaylistControllerRouteBuilder").buildURL({idorvanity:f}):null;var C=t.id!=null?c("XCometWatchControllerRouteBuilder").buildURL({v:t.id}):null,D=a?t.url:C;if(g==null)return null;var E=babelHelpers["extends"]({caller:x==null?void 0:x.caller,externalLogID:w,externalLogType:v,initialTracePolicy:o},a&&{playerSubOrigin:s},{reactionVideoChannelType:r,searchKeyword:x==null?void 0:x.searchKeyword});C=function(){u==null?l.warn("Route dispatcher is null, unable to navigate to next video."):D===""||D==null?l.warn("Cannot use Comet Router to navigate to an empty URL."):(p("grid_view_end_screen_click_video"),y&&y({type:"INCREMENT"}),u.go(D,{passthroughProps:E,target:"self"}))};var F=[];v=(w=t.play_count)!=null?w:0;v>0&&F.push(i.jsx(c("CometVideoViewAndCrosspostedInfo.react"),{color:"white",showTooltip:!1,video:t}));F.push(i.jsx(c("CometTahoeEndCardUFISummary.react"),{video:t}));o=i.jsx("div",{className:"x78zum5",children:F.map(function(a,b){return i.jsxs("div",{className:"x6s0dn4 x78zum5",children:[a,b===F.length-1?null:i.jsx(c("CometMiddot.react"),{className:"x14ctfv xfs2ol5 x12mruv9"})]},b)})});return i.jsxs(c("CometPressable.react"),{onHoverChange:z,onPress:C,overlayDisabled:!0,ref:q,xstyle:m.endCard,children:[n,i.jsx("div",{className:"x1ey2m1c xds687c xl56j7k x10l6tqk x17qophe x13vifvy",children:i.jsx(c("CometImage.react"),{src:g,xstyle:m.endCardThumbnail})}),i.jsx("div",{className:"x1f90px3 x1ey2m1c x14ctfv xds687c x5w4yej xyamay9 x1pi30zi x1l90r2v x1swvt13 x10l6tqk x17qophe x13vifvy"+(A?" xatbrnm":""),children:i.jsx(c("TetraTextPairing.react"),{body:i.jsx(c("CometLink.react"),{color:"white",href:f,weight:"normal",children:e}),bodyColor:"white",bodyLineLimit:2,headline:i.jsx(c("CometLink.react"),{onClick:C,children:B}),headlineColor:"white",headlineLineLimit:2,level:4,meta:A?o:null})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTahoeEndCardScreen.react",["CometFlexibleGrid.react","CometInteractionSourceContext","CometRelay","CometTahoeEndCard.react","CometTahoeEndCardScreen_video_home_section.graphql","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useEffect,k=h!==void 0?h:h=b("CometTahoeEndCardScreen_video_home_section.graphql");function a(a){var b=a.excludeVideoID,e=a.initialTracePolicy,f=a.logTahoeEvent,g=a.reactionVideoChannelType,h=a.subOrigin,l=a.videoHomeSectionFragmentRef,m=a.visible;a=d("CometRelay").useFragment(k,l);j(function(){m&&f("grid_view_end_screen_shown")},[f,m]);if(!m)return null;l=a==null?void 0:(l=a.tahoe_end_card_section)==null?void 0:(l=l.tahoe_end_screen_title)==null?void 0:l.text;a=a==null?void 0:(a=a.tahoe_end_card_section)==null?void 0:(a=a.section_components)==null?void 0:a.edges;if(a==null)return null;var n=[];for(var o=0;o<a.length;o++){var p,q,r,s=a[o];p=s==null?void 0:(p=s.node)==null?void 0:(p=p.feed_unit)==null?void 0:(p=p.attachments)==null?void 0:(p=p[0])==null?void 0:p.media;if(p==null||p.__typename!=="Video")continue;if(p.id===b)continue;q=s==null?void 0:(q=s.node)==null?void 0:(q=q.feed_unit)==null?void 0:q.encrypted_tracking;r=s==null?void 0:(r=s.node)==null?void 0:(r=r.feed_unit)==null?void 0:r.viewability_config;s=s==null?void 0:(s=s.node)==null?void 0:(s=s.feed_unit)==null?void 0:s.client_view_config;s={can_delay_log_impression:s==null?void 0:s.can_delay_log_impression,use_banzai_signal_imp:s==null?void 0:s.use_banzai_signal_imp,use_banzai_vital_imp:s==null?void 0:s.use_banzai_vital_imp};n.push(i.jsx("div",{className:"x1y1aw1k x1sxyh0 xwib8y2 xurb0ha",children:i.jsx(c("CometTahoeEndCard.react"),{clientViewConfig:s,encryptedTracking:q,initialTracePolicy:e,logTahoeEvent:f,position:o,reactionVideoChannelType:g,subOrigin:h,video:p,viewabilityConfig:r})},o))}return i.jsx("div",{className:"x78zum5 xdt5ytf xkrivgy x1gryazu xnk5j39 xm6i5cn",children:i.jsxs(c("CometInteractionSourceContext").Provider,{value:59,children:[i.jsx("div",{className:"x1a8lsjc xurb0ha",children:i.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized2",children:l})}),i.jsxs("div",{className:"x7v9bd0 x10e4vud x1v7wizp x127lhb5",children:[i.jsx(c("CometFlexibleGrid.react"),{columnMaxWidth:1040,columnMinWidth:260,maxItems:3,minItems:2,children:n.slice(0,3)}),i.jsx(c("CometFlexibleGrid.react"),{columnMaxWidth:1040,columnMinWidth:260,maxItems:3,minItems:2,children:n.slice(3,6)}),i.jsx(c("CometFlexibleGrid.react"),{columnMaxWidth:1040,columnMinWidth:260,maxItems:3,minItems:2,children:n.slice(6,9)})]})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTahoeUpNextOverlayAndEndScreen.react",["fbt","CometImage.react","CometPlaceholder.react","CometPressable.react","CometRelay","CometTahoeEndCardScreen.react","CometTahoeUpNextOverlay.react","CometTahoeUpNextOverlayAndEndScreenQuery.graphql","CometTahoeUpNextVideoContext","CometTrackingCodeProvider.react","VideoPlayerHooks","VideoPlayerInstreamAdsStateHooks","VideoPlayerInteractionOverlay.react","XCometWatchControllerRouteBuilder","react","useVideoPlayerPlayFromBeginning"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useContext,l=e.useState,m=6,n=3,o=15;function a(a){var e=a.initialTracePolicy,f=a.logTahoeEvent,g=a.openNextVideoInPermalink;g=g===void 0?!1:g;var p=a.pressInteraction,q=a.reactionVideoChannelType,r=a.subOrigin;a=a.videoID;var s=k(c("CometTahoeUpNextVideoContext")),t=s.upNextChainingCursor,u=s.upNextTrackingCode;s=s.upNextVideoID;var v=l(!1),w=v[0],x=v[1];v=d("VideoPlayerHooks").useCurrentTime_DO_NOT_USE();var y=d("VideoPlayerHooks").useDuration(),z=d("VideoPlayerHooks").usePlaying(),A=d("VideoPlayerHooks").useEnded(),B=c("useVideoPlayerPlayFromBeginning")("user_initiated"),C=d("VideoPlayerInstreamAdsStateHooks").useInstreamAdsPostRollEndedOrSkippedStateValue(),D=m,E=n;v=y-v<=E;E=y<o;y=D===0;var F=d("VideoPlayerHooks").useIsLive();F=v&&!E&&!w&&!y&&!F&&C;C=F&&(z||A);z=(w||E)&&v&&A&&!y;E=d("CometRelay").useLazyLoadQuery(i!==void 0?i:i=b("CometTahoeUpNextOverlayAndEndScreenQuery.graphql"),{initialTracePolicy:e,upNextVideoID:(w=s)!=null?w:"",useDefaultActor:!1,videoID:a});w=E.video;g=g?s!=null?c("XCometWatchControllerRouteBuilder")==null?void 0:c("XCometWatchControllerRouteBuilder").buildURL({v:s}):null:w==null?void 0:w.url;if(w==null||g==null)return null;s=function(){f("up_next_overlay_cancel"),x(!0)};t=j.jsx(c("CometTahoeUpNextOverlay.react"),{chainingCursor:t,currentVideoID:a,initialTracePolicy:e,isMakingProgress:C,logTahoeEvent:f,nextVideoURL:g,onCancelCallback:s,reactionVideoChannelType:q,subOrigin:r,timeoutSec:D,video:w,visible:F});u!=null&&(t=j.jsx(c("CometTrackingCodeProvider.react"),{trackingCode:u,children:t}));C=j.jsx(c("CometPlaceholder.react"),{fallback:null,children:j.jsx(c("CometTahoeEndCardScreen.react"),{excludeVideoID:a,initialTracePolicy:e,logTahoeEvent:f,reactionVideoChannelType:q,subOrigin:r,videoHomeSectionFragmentRef:E,visible:z})});return j.jsxs(j.Fragment,{children:[j.jsx(d("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{pressInteraction:p,children:j.jsxs("div",{className:"x1ey2m1c x9f619 xds687c x10l6tqk x17qophe x13vifvy"+((v&&A&&y?" x6s0dn4 x78zum5 xl56j7k":""+(v&&A?"":""))+(v&&A?" xal61yo":"")),children:[C,y&&v&&A&&j.jsx(c("CometPressable.react"),{display:"inline",label:h._("__JHASH__3wtbhevyblT__JHASH__"),onPress:B,overlayDisabled:!0,children:j.jsx(c("CometImage.react"),{src:"/images/video/replay_circle_40dp-2x.png"})})]})}),t]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTahoeUpNextOverlayAndEndScreenWrapper.react",["CometPrerenderer.react","CometRelay","CometTahoeUpNextOverlayAndEndScreen.react","CometTahoeUpNextOverlayAndEndScreenWrapper_renderer.graphql","VideoPlayerHooks","react","useVideoPlayerControllerSubscription"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=6,k=3,l=10,m=h!==void 0?h:h=b("CometTahoeUpNextOverlayAndEndScreenWrapper_renderer.graphql");function a(a){var b=a.initialTracePolicy,e=a.logTahoeEvent,f=a.openNextVideoInPermalink,g=a.pressInteraction,h=a.reactionVideoChannelType,n=a.renderer$key,o=a.subOrigin,p=a.videoID;d("CometRelay").useFragment(m,n);var q=d("VideoPlayerHooks").useIsLive();a=c("useVideoPlayerControllerSubscription")(function(a,b){var c;if(q){var d=a.getCurrentState().ended;c=d;d=d}else{var e=a.getPlayheadPosition();a=a.getCurrentState().duration;var f=j,g=k;a=a-e;e=a<=g;d=a<=g+l;a=f===0;c=e&&!a}return b!=null&&b.isVisible===c&&b.shouldPrerender===d?b:{isVisible:c,shouldPrerender:d}});return i.jsx(c("CometPrerenderer.react"),{prerenderingProps:a,children:function(a){return i.jsx(c("CometTahoeUpNextOverlayAndEndScreen.react"),babelHelpers["extends"]({initialTracePolicy:b,logTahoeEvent:e,openNextVideoInPermalink:f,pressInteraction:g,reactionVideoChannelType:h,subOrigin:o,videoID:p},a))}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);