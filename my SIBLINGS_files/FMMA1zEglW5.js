;/*FB_PKG_DELIM*/

__d("FriendingCometManageFriendsDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6027070797369640"}),null);
__d("FriendingCometManageFriendsDialogQuery$Parameters",["FriendingCometManageFriendsDialogQuery_facebookRelayOperation","StoriesRing.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FriendingCometManageFriendsDialogQuery_facebookRelayOperation"),metadata:{},name:"FriendingCometManageFriendsDialogQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")}}};e.exports=a}),null);
__d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4776188739159440"}),null);
__d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql",["FriendingCometProactiveFriendingAlertImpressionUpdateMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"ProactiveFriendingAlertImpressionUpdateResponsePayload",kind:"LinkedField",name:"proactive_friending_alert_impression_update",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometProactiveFriendingAlertImpressionUpdateMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometProactiveFriendingAlertImpressionUpdateMutation",selections:c},params:{id:b("FriendingCometProactiveFriendingAlertImpressionUpdateMutation_facebookRelayOperation"),metadata:{},name:"FriendingCometProactiveFriendingAlertImpressionUpdateMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("NullStatePeople",["cr:3586"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:3586")}),98);
__d("NullStatePeopleFB",["IconSource"],(function(a,b,c,d,e,f,g){"use strict";a={dark:new(c("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/people/null_states_people_dark_mode.svg",112),"default":new(c("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg",112)};g["default"]=a}),98);
__d("FriendingCometNullStateView.react",["fbt","CometContentArea.react","NullStatePeople","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.hasRequestsOrSuggestions;a=a?h._("__JHASH__gulzVE2DQt6__JHASH__"):h._("__JHASH__3eebHJDyj0l__JHASH__");return i.jsx(c("CometContentArea.react"),{verticalAlign:"middle",children:i.jsx(c("TetraNullState.react"),{headline:a,icon:c("NullStatePeople")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometPanel.react",["CometUnitHeader.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"xu06os2 xwya9rg",children:h.jsx(c("CometUnitHeader.react"),{action:a.headlineAddOn,actionLinkProps:a.headlineAddOnLinkProps,headline:a.heading,level:3,onActionPress:a.onHeadlineAddOnPress})}),a.children]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometManageFriendsDialog.entrypoint",["FriendingCometManageFriendsDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{queryReference:{parameters:b("FriendingCometManageFriendsDialogQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("FriendingCometManageFriendsDialog.react").__setRef("FriendingCometManageFriendsDialog.entrypoint")};g["default"]=a}),98);
__d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation",["CometRelay","FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql");function a(a,b,c){return d("CometRelay").commitMutation(a,{mutation:i,onError:c,variables:{input:b}})}g.commit=a}),98);
__d("ManageFriendsEntryPointClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743888");c=b("FalcoLoggerInternal").create("manage_friends_entry_point_click",a);e.exports=c}),null);
__d("ManageFriendsEntryPointDismissalFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743889");c=b("FalcoLoggerInternal").create("manage_friends_entry_point_dismissal",a);e.exports=c}),null);
__d("ManageFriendsEntryPointImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743890");c=b("FalcoLoggerInternal").create("manage_friends_entry_point_impression",a);e.exports=c}),null);
__d("FriendingCometFriendLimitWarning.react",["fbt","ix","CometCard.react","CometRelay","FriendingCometManageFriendsDialog.entrypoint","FriendingCometProactiveFriendingAlertImpressionUpdateMutation","ManageFriendsEntryPointClickFalcoEvent","ManageFriendsEntryPointDismissalFalcoEvent","ManageFriendsEntryPointImpressionFalcoEvent","TetraButton.react","TetraCircleButton.react","TetraIcon.react","TetraTextPairing.react","fbicon","react","useCometEntryPointDialog","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useCallback,l=b.useRef;function a(a){var b=d("CometRelay").useRelayEnvironment();a=c("useCometEntryPointDialog")(c("FriendingCometManageFriendsDialog.entrypoint"),{});var e=a[0],f=l(!1);a=k(function(){f.current||(d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation").commit(b,{}),c("ManageFriendsEntryPointImpressionFalcoEvent").log(function(){return{entry_point:"proactive_module"}}),f.current=!0)},[b]);a=c("useVisibilityObserver")({onVisible:a});var g=j.jsx("div",{className:"x5yr21d",children:j.jsx("div",{className:"x6s0dn4 x1wbbese x14yjl9h xudhj91 x18nykt9 xww2gxu x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 x1fgtraw xl56j7k xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 xgd8bvy",children:j.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("502061"),16)})})}),m=j.jsx("div",{className:"x1iyjqo2 x1fqp7bg x1emribx x1i64zmx x1ok221b",children:j.jsx(c("TetraTextPairing.react"),{body:h._("__JHASH__sAaqZqNPSPl__JHASH__"),headline:h._("__JHASH__4QzB8gvKrrv__JHASH__"),level:3})}),n=j.jsx("div",{className:"x5yr21d",children:j.jsx(c("TetraCircleButton.react"),{color:"secondary",icon:d("fbicon")._(i("478238"),20),label:h._("__JHASH__tka7rMJuL69__JHASH__"),onPress:function(){d("CometRelay").commitLocalUpdate(b,function(a){a=a.get(d("CometRelay").VIEWER_ID);a==null?void 0:a.setValue(!1,"should_show_proactive_friending_alert")}),c("ManageFriendsEntryPointDismissalFalcoEvent").log(function(){return{entry_point:"proactive_module"}})},size:32})}),o=j.jsx(c("TetraButton.react"),{label:h._("__JHASH__WZrupv7wVsU__JHASH__"),onPress:function(){e({}),c("ManageFriendsEntryPointClickFalcoEvent").log(function(){return{entry_point:"proactive_module"}})},padding:"wide",type:"secondary"});return j.jsx("div",{className:"xod5an3 xktsk01 x1d52u69 x1sy10c2",ref:a,children:j.jsx(c("CometCard.react"),{dropShadow:2,children:j.jsxs("div",{className:"xqy66fx x14uny0o xr1496l xvpee5o",children:[j.jsxs("div",{className:"x78zum5",children:[g,m,n]}),o]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometSectionTabViewLeftRail.react",["fbt","CometLeftRailBreadcrumbs.react","CometLeftRailComponent.react","CometLeftRailHeader.react","CometRouteParams","XCometFriendingControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=d("CometRouteParams").useRouteParams();b=b.friending_section;var e=c("XCometFriendingControllerRouteBuilder").buildURL({}),f=[{label:h._("__JHASH__er6w-V3UvvZ__JHASH__"),url:e}];return i.jsx(c("CometLeftRailComponent.react"),{header:i.jsx(c("CometLeftRailHeader.react"),{backActionAddOn:{linkProps:{passthroughProps:{ref_tab:b},url:e}},meta:i.jsx(c("CometLeftRailBreadcrumbs.react"),{breadcrumbs:f}),title:a.title}),primaryNav:a.leftRail})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometSectionTabView.react",["CometLeftRailAndMainContentContainer.react","FriendingCometSectionTabViewLeftRail.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b;return h.jsx(c("CometLeftRailAndMainContentContainer.react"),{leftRailContent:h.jsx(c("FriendingCometSectionTabViewLeftRail.react"),{leftRail:a.leftRail,title:a.title}),leftRailHeading:a.title,mainContent:(b=a.children)!=null?b:a.mainContent,mainContentHeading:a.title})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendsCenterOpenedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743630");c=b("FalcoLoggerInternal").create("friends_center_opened",a);e.exports=c}),null);