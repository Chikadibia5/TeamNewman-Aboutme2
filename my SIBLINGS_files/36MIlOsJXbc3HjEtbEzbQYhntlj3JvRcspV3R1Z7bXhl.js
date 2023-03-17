;/*FB_PKG_DELIM*/

__d("CometProfileHeaderTopRow.react",["CometEntityHeaderScrollToContext","CometRow.react","CometRowItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useEffect,k=b.useRef;function a(a){var b=a.actor,d=a.align;d=d===void 0?"center":d;var e=a.banner;a=a.titleBlock;var f=k(null),g=i(c("CometEntityHeaderScrollToContext"));j(function(){g.scrollToTop(f,-32)},[g]);return h.jsxs("div",{className:"x78zum5 xdt5ytf"+(d==="start"?" xqcrz7y":""),children:[h.jsx("div",{className:"xuk3077 x78zum5 xqtp20y xw7yly9"+(d==="start"?" xqcrz7y":" xamitd3"),children:h.jsx(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,spacing:0,children:h.jsx(c("CometRowItem.react"),{ref:f,children:b})})}),h.jsx(c("CometRow.react"),{align:d,children:h.jsx(c("CometRowItem.react"),{children:a})}),e]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureEditDialogReducer",[],(function(a,b,c,d,e,f){"use strict";function a(){return{image:null,isUploading:!1,step:"PICKER"}}function b(a,b){switch(b.type){case"ADD_FRAME":return babelHelpers["extends"]({},a,{step:"FRAME"});case"CREATE_AVATAR":return babelHelpers["extends"]({},a,{step:"AVATAR"});case"SELECT_PHOTO":return babelHelpers["extends"]({},a,{image:b.image,step:"PREVIEW"});case"PREVIEW_CANCEL":return babelHelpers["extends"]({},a,{image:null,step:"PICKER"});case"REMOVE_FAILED":return babelHelpers["extends"]({},a,{isUploading:!1});case"REMOVE_STARTED":return babelHelpers["extends"]({},a,{isUploading:!0});case"REMOVE_SUCCESS":return babelHelpers["extends"]({},a,{isUploading:!1});case"UPLOAD_FAILED":return babelHelpers["extends"]({},a,{isUploading:!1});case"UPLOAD_STARTED":return babelHelpers["extends"]({},a,{isUploading:!0});case"UPLOAD_SUCCESS":return babelHelpers["extends"]({},a,{image:babelHelpers["extends"]({},b.image,{isUploaded:!0}),isUploading:!1,step:a.step==="FRAME"?a.step:"PREVIEW"});case"UPDATE_THUMBNAIL":return babelHelpers["extends"]({},a,{image:b.image,step:"THUMBNAIL"});default:return babelHelpers["extends"]({},a)}}f.getInitialState=a;f.reducer=b}),66);
__d("ProfileCometProfilePictureEditDialogContext",["ProfileCometProfilePictureEditDialogReducer","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({dispatch:c("emptyFunction"),loadAvatarEntryPoint:void 0,loadEntryPoint:void 0,state:d("ProfileCometProfilePictureEditDialogReducer").getInitialState()});g["default"]=b}),98);
__d("XProfilePicUploadAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/picture/upload/",{privacy_mutation_token:{type:"String"},profile_id:{type:"Int",required:!0},photo_source:{type:"Enum",defaultValue:9,enumType:0}})}),null);
__d("useProfileCometPhotoUploader",["AsyncUploadRequest","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function a(){var a=i(!1),b=i([]);h(function(){return function(){a.current&&b.current&&b.current.forEach(function(a){return a.abort()})}},[]);return function(d,e,f){d=new(c("AsyncUploadRequest"))(d).setAllowCrossOrigin(!0).setFiles({file:e}).setPreventDefaultErrorHandler(!0);var g=f.onFailed,h=f.onSucceeded;h&&d.subscribe("success",function(a,b){a=b.getResponse();if(a==null)throw c("unrecoverableViolation")("Photo upload result should contain a response.","profile_comet");h(a.getPayload())});g&&d.subscribe("failure",function(a,b){a=b.getResponse()||{};b=a.errorDescription;a=a.errorSummary;g({description:b!=null?b.toString():"",summary:a!=null?a.toString():""})});d.subscribe("progress",function(){return a.current=!0});d.send();b.current.push(d)}}g["default"]=a}),98);
__d("ProfileCometProfilePictureMediaUploadAction.react",["Actor","ActorURI","CometFileSelector.react","ProfileCometProfilePictureEditDialogContext","XProfilePicUploadAsyncController","react","useCometAlertDialog","useProfileCometPhotoUploader"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext;function a(a){var b=a.children,e=a.profileID;a=j(c("ProfileCometProfilePictureEditDialogContext"));var f=a.dispatch,g=c("useCometAlertDialog")(),k=c("useProfileCometPhotoUploader")();a=d("Actor").useActor();var l=a[0],m=i(function(a){var b;f({image:{height:(b=a.imageHeight)!=null?b:0,id:a.fbid,isProfilePicture:!1,uri:(b=a.imageURI)!=null?b:"",width:(b=a.imageWidth)!=null?b:0},type:"UPLOAD_SUCCESS"})},[f]),n=i(function(a){f({type:"UPLOAD_FAILED"}),g({body:a.description,title:a.summary})},[f,g]);a=i(function(a){if(!a.length)return;f({type:"UPLOAD_STARTED"});var b=d("ActorURI").create(c("XProfilePicUploadAsyncController").getURIBuilder().setInt("profile_id",e).setEnum("photo_source",57).getURI(),l);k(b,a[0],{onFailed:n,onSucceeded:m})},[f,n,m,e,k,l]);return h.jsx(c("CometFileSelector.react"),{accept:["image/*","image/heif","image/heic"],onFilesSelected:a,children:function(a){return b(a)}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useDiscardConfirmationDialog",["fbt","react","useCometConfirmationDialog"],(function(a,b,c,d,e,f,g,h){"use strict";b=d("react");var i=b.useCallback,j=b.useRef;function a(){var a=j(null),b=c("useCometConfirmationDialog")(),d=i(function(a){b({body:h._("__JHASH__7xmdVbwftTY__JHASH__"),cancel:h._("__JHASH__sX7c9Q3pReC__JHASH__"),confirm:h._("__JHASH__F6L2xtj0CmW__JHASH__"),title:h._("__JHASH__Nw0vNajDZ5c__JHASH__")},a)},[b]);return[d,a]}g["default"]=a}),98);
__d("XProfilePicUploadAsyncControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/profile/picture/upload/",Object.freeze({photo_source:9}),void 0);b=a;g["default"]=b}),98);
__d("useOnRoutableDialogClose",["CometRouteRenderType","react","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){a===void 0&&(a="/");var b=d("CometRouteRenderType").useIsPushView(),e=c("useCometRouterDispatcher")(),f=d("CometRouteRenderType").useIsHosted();return h(function(){if(e)if(e.popPushView&&b)return e.popPushView();else if(e.goBack&&f)return e.goBack();else return e.go(a,{target:"self"})},[a,e,f,b])}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("ProfileCometAboutInfoDetails_subtitle.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometAboutInfoDetails_subtitle",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometTextWithEntities_textWithEntities"}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("ProfileCometAboutInfoDetails_title.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometAboutInfoDetails_title",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometTextWithEntities_textWithEntities"}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTextWithEntities_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTextWithEntities_textWithEntities",selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("ProfileCometBioTextEditorPrivacyIconQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5009284572488938"}),null);
__d("ProfileCometBioTextEditorPrivacyIconQuery$Parameters",["ProfileCometBioTextEditorPrivacyIconQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometBioTextEditorPrivacyIconQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometBioTextEditorPrivacyIconQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities",selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],type:"AggregatedEntitiesAtRange",abstractKey:null};e.exports=a}),null);
__d("CometMetaLinkedEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometMetaLinkedEntityRenderer_entity",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("ProfileCometAppSectionSearchContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({isSearchEnabled:!1,refetch:null,searchQuery:null,setGlimmerComponent:function(){},setRefetch:function(){},setSearchQuery:function(){}});g["default"]=b}),98);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer",["fbt","CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql","CometTooltip.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");i!==void 0?i:i=b("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql");a=function(a,b){var d;d=(d=b.count)!=null?d:0;b=(b=b.sample_entities)!=null?b:[];d=d-b.length;var e=d>0;return j.jsx(c("CometTooltip.react"),{tooltip:j.jsxs(j.Fragment,{children:[b.map(function(a){if(a.__typename!=="User")return null;var b=a.id;a=a.name;return b!=null&&a!=null?j.jsx("div",{children:a},b):null}),e?j.jsx("div",{children:h._("__JHASH__ba-d3dXGaKh__JHASH__",[h._param("count",d)])}):null]}),children:a})};g["default"]=a}),98);
__d("CometMetaLinkedEntityRenderer",["CometLink.react","CometMetaLinkedEntityRenderer_entity.graphql","CometTextContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useContext;h!==void 0?h:h=b("CometMetaLinkedEntityRenderer_entity.graphql");function k(a){var b,d=a.entity;a=a.node;b=(b=j(c("CometTextContext")))==null?void 0:b.type;if(d.url==null)return a;return b==null||!b.startsWith("meta")?i.jsx(c("CometLink.react"),{href:d.url,children:a}):i.jsx(c("CometLink.react"),{color:"secondary",href:d.url,weight:b==="meta3"||b==="meta4"?"normal":"semibold",children:a})}k.displayName=k.name+" [from "+f.id+"]";a=function(a,b){return i.jsx(k,{entity:b,node:a})};g["default"]=a}),98);
__d("ProfileCometTextWithEntities.react",["CometAggregatedEntitiesTooltipRenderer","CometContextuallyStyledAggregatedEntitiesTooltipRenderer","CometExternalLinkedEntityRenderer","CometHovercardEntityRenderer","CometImageEntityRenderer","CometInlineEntityRenderer","CometLinkedEntityRenderer","CometMetaLinkedEntityRenderer","CometRelay","CometTextWithEntitiesRelay.react","ProfileCometTextWithEntities_textWithEntities.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.textWithEntities,f=a.useExternalLink;f=f===void 0?!1:f;var g=a.useMetaTextContext;a=babelHelpers.objectWithoutPropertiesLoose(a,["textWithEntities","useExternalLink","useMetaTextContext"]);e=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometTextWithEntities_textWithEntities.graphql"),e);g=g!=null&&g;return i.jsx(c("CometTextWithEntitiesRelay.react"),babelHelpers["extends"]({},a,{renderers:{"*":[g?c("CometMetaLinkedEntityRenderer"):f?c("CometExternalLinkedEntityRenderer"):c("CometLinkedEntityRenderer")],Aggregate:[g?c("CometContextuallyStyledAggregatedEntitiesTooltipRenderer"):c("CometAggregatedEntitiesTooltipRenderer")],Event:[c("CometHovercardEntityRenderer")],Group:[c("CometHovercardEntityRenderer")],Image:[c("CometImageEntityRenderer")()],Inline:[c("CometInlineEntityRenderer")],Page:[c("CometHovercardEntityRenderer")],User:[c("CometHovercardEntityRenderer")],XFBWorkroomsUser:[c("CometHovercardEntityRenderer")]},textWithEntities:e}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometAboutInfoDetails.react",["CometRelay","ProfileCometAboutInfoDetails_subtitle.graphql","ProfileCometAboutInfoDetails_title.graphql","ProfileCometTextWithEntities.react","TetraTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react");function a(a){var e=a.color,f=a.subtitle,g=a.subtitleColor,k=a.title;a=a.titleAddon;f=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometAboutInfoDetails_subtitle.graphql"),f);k=d("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometAboutInfoDetails_title.graphql"),k);return j.jsx(c("TetraTextPairing.react"),{body:j.jsxs(j.Fragment,{children:[j.jsx(c("ProfileCometTextWithEntities.react"),{textWithEntities:k}),a]}),bodyColor:e,level:3,meta:f?g?j.jsx(c("TetraTextPairing.react"),{body:j.jsx(c("ProfileCometTextWithEntities.react"),{textWithEntities:f}),bodyColor:g,level:4}):j.jsx(c("ProfileCometTextWithEntities.react"),{textWithEntities:f}):null})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometLoadingOverlay.react",["CometProgressIndicator.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.solidBackground;return h.jsx("div",{className:"x6s0dn4 x2bj2ny x1ey2m1c x9f619 x78zum5 xds687c xl56j7k x10l6tqk x17qophe x13vifvy"+(a==null||a===!1?" x1us6l5c":""),children:h.jsx(c("CometProgressIndicator.react"),{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometBioTextEditor.entrypoint",["JSResourceForInteraction","ProfileCometBioTextEditorPrivacyIconQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.profileID;return{queries:{queryReference:{options:{fetchPolicy:"network-only"},parameters:c("ProfileCometBioTextEditorPrivacyIconQuery$Parameters"),variables:{id:a}}}}},root:c("JSResourceForInteraction")("ProfileCometBioTextEditor.react").__setRef("ProfileCometBioTextEditor.entrypoint")};g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("ProfileCometFeaturedHighlightsEditCollectionDialogQuery.graphql",["ProfileCometFeaturedHighlightsEditCollectionDialogQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"collectionID"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"id",variableName:"collectionID"}],d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={alias:null,args:[{kind:"Literal",name:"height",value:500},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},g=[e];f={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[d,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},f],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:[f],type:"Video",abstractKey:null},{kind:"InlineFragment",selections:g,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:g,type:"DynamicFeedAdAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:g,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:g,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:g,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null};g=[e,f];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"ProfileCometFeaturedHighlightsEditCollectionDialogQuery",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometFeaturedHighlightsEditCollectionDialog_viewer"}],storageKey:null},action:"THROW",path:"viewer"},{kind:"RequiredField",field:{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometFeaturedHighlightsEditCollectionStep_collection"}],type:"StoryHighlightContainer",abstractKey:null}],storageKey:null},action:"THROW",path:"node"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"ProfileCometFeaturedHighlightsEditCollectionDialogQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"globe_focus",storageKey:null}],storageKey:null},{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[d,e,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"StoryHighlightContainerToBackingCardsConnection",kind:"LinkedField",name:"backing_cards",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryHighlightContainerToBackingCardsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"creation_time",storageKey:null},f],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"backing_cover_card",plural:!1,selections:g,storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"cover_card",plural:!1,selections:g,storageKey:null}],type:"StoryHighlightContainer",abstractKey:null}],storageKey:null}]},params:{id:b("ProfileCometFeaturedHighlightsEditCollectionDialogQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometFeaturedHighlightsEditCollectionDialogQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("ProfileCometFeaturedHighlightsEditCollectionDialog_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometFeaturedHighlightsEditCollectionDialog_viewer",selections:[{args:null,kind:"FragmentSpread",name:"useCometFocusedGlobeFilled20_viewer"}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("ProfileCometFeaturedHighlightsEditCollectionDialog.react",["CometMultiStepDialogLegacy.react","CometRelay","ErrorBoundary.react","ProfileCometFeaturedHighlightsEditCollectionDialogQuery.graphql","ProfileCometFeaturedHighlightsEditCollectionDialog_viewer.graphql","ProfileCometFeaturedHighlightsEditCollectionStep.react","ProfileCometFeaturedHighlightsEditDialogContext","ProfileCometFeaturedHighlightsEditDialogReducer","ProfileCometFeaturedHighlightsStrings","react","useCometAlertDialog","useCometFocusedGlobeFilled20"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react");e=d("react");var k=e.useMemo,l=e.useReducer;function m(a){var e=a.collectionRef,f=a.onClose,g=a.profileID;a=a.viewerRef;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometFeaturedHighlightsEditCollectionDialog_viewer.graphql"),a);a=c("useCometFocusedGlobeFilled20")(a);a=l(d("ProfileCometFeaturedHighlightsEditDialogReducer").reducer,d("ProfileCometFeaturedHighlightsEditDialogReducer").getInitialState(a,g));var i=a[0],m=a[1];g=k(function(){return{dispatch:m,state:i}},[i]);return j.jsx(c("ProfileCometFeaturedHighlightsEditDialogContext").Provider,{value:g,children:j.jsx(c("CometMultiStepDialogLegacy.react"),{onClose:f,size:"medium",title:d("ProfileCometFeaturedHighlightsStrings").EDIT_FEATURED_COLLECTION,withCloseButton:!0,children:function(a){return j.jsx(c("ProfileCometFeaturedHighlightsEditCollectionStep.react"),{collectionRef:e,onReturn:f,pushPage:a})}})})}m.displayName=m.name+" [from "+f.id+"]";function a(a){var e=a.props,f=e.onClose;e=e.profileID;a=a.queries.queryReference;a=d("CometRelay").usePreloadedQuery(i!==void 0?i:i=b("ProfileCometFeaturedHighlightsEditCollectionDialogQuery.graphql"),a);var g=a.node;a=a.viewer;var h=c("useCometAlertDialog")();return j.jsx(c("ErrorBoundary.react"),{fallback:function(a,b){h({body:a.description,title:a.message})},children:j.jsx(m,{collectionRef:g,onClose:f,profileID:e,viewerRef:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("useCometFocusedGlobeFilled20_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometFocusedGlobeFilled20_viewer",selections:[{alias:null,args:null,kind:"ScalarField",name:"globe_focus",storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("useCometFocusedGlobeFilled20",["ix","CometRelay","fbicon","recoverableViolation","useCometFocusedGlobeFilled20_viewer.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i!==void 0?i:i=b("useCometFocusedGlobeFilled20_viewer.graphql");function a(a){a=d("CometRelay").useFragment(j,a);a=a==null?void 0:a.globe_focus;switch(a){case"ASIA":return d("fbicon")._(h("482015"),20);case"EAST":return d("fbicon")._(h("482029"),20);case"WEST":return d("fbicon")._(h("560120"),20);default:c("recoverableViolation")("Got a null or invalid globe focus type.","comet_ui");return d("fbicon")._(h("560120"),20)}}g["default"]=a}),98);
__d("ProfileCometFeaturedHighlightsNullState.react",["fbt","ix","CometColumn.react","CometColumnItem.react","CometImage.react","TetraText.react","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(){return j.jsxs(c("CometColumn.react"),{expanding:!0,children:[j.jsx(c("CometColumnItem.react"),{align:"center",children:j.jsx(c("CometImage.react"),{src:i("1654142")})}),j.jsx(c("CometColumnItem.react"),{align:"center",paddingTop:16,children:j.jsx(c("TetraText.react"),{align:"center",color:"tertiary",numberOfLines:2,type:"body3",children:h._("__JHASH__IfhG1YSNEaS__JHASH__")})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useProfileFormField",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function a(a){var b=h(a),c=b[0];b=b[1];a=JSON.stringify(c)!==JSON.stringify(a);return[c,b,a]}g["default"]=a}),98);