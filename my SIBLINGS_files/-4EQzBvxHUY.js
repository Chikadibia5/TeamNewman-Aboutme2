;/*FB_PKG_DELIM*/

__d("useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo",selections:[{alias:"viewer_image",args:[{kind:"Literal",name:"context",value:"comet_media_viewer"},{kind:"Literal",name:"height",value:1e6},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:1e6}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometPhotoViewerPlaceholderPassthroughProps_photo"}],type:"Photo",abstractKey:null};e.exports=a}),null);
__d("ProfileCometAccountStatusNotice_data$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"ProfileCometAccountStatusNotice_data$normalization",selections:[{alias:null,args:null,concreteType:"IXAccountStatusProfileEntrypointModel",kind:"LinkedField",name:"profile_entrypoint",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"status_value",storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("ProfileCometAccountStatusNotice_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometAccountStatusNotice_data",selections:[{alias:null,args:null,concreteType:"IXAccountStatusProfileEntrypointModel",kind:"LinkedField",name:"profile_entrypoint",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"status_value",storageKey:null}],storageKey:null}],type:"IXAccountStatus",abstractKey:null};e.exports=a}),null);
__d("ProfileCometGridTileImage_warningScreen.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometGridTileImage_warningScreen",selections:[{args:null,documentName:"ProfileCometGridTileImage_warningScreen",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTilePhotoGridViewItem_image.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometTilePhotoGridViewItem_image",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:150},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:150}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo"}],storageKey:null}],type:"ProfileTileItem",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTilePhotoGridViewItem_profileTileItem.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometTilePhotoGridViewItem_profileTileItem",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometMediaURL_media"},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"profile"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometGridTileImage_warningScreen"}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"profile")'}],type:"CanRenderCIXScreen",abstractKey:"__isCanRenderCIXScreen"},{args:null,kind:"FragmentSpread",name:"useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo"}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:150},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:150}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"ProfileTileItem",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTilePhotoGridView_viewStyleRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c=[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a,b,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null}],storageKey:null}],d={kind:"Variable",name:"scale",variableName:"scale"},e={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},f=[{alias:null,args:null,kind:"ScalarField",name:"reference_token",storageKey:null}];return{kind:"SplitOperation",metadata:{},name:"ProfileCometTilePhotoGridView_viewStyleRenderer$normalization",selections:[{alias:null,args:null,concreteType:"ProfileTileView",kind:"LinkedField",name:"view",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"profile_tile_items",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItem",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[a,b,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_playable",storageKey:null},{kind:"InlineFragment",selections:c,type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:c,type:"Video",abstractKey:null}],type:"Media",abstractKey:"__isMedia"},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"profile"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometGridTileImage_warningScreen",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel",abstractKey:null},{kind:"InlineFragment",selections:[b],type:"Node",abstractKey:"__isNode"}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"profile")'}],type:"CanRenderCIXScreen",abstractKey:"__isCanRenderCIXScreen"},{kind:"InlineFragment",selections:[{alias:"viewer_image",args:[{kind:"Literal",name:"context",value:"comet_media_viewer"},{kind:"Literal",name:"height",value:1e6},d,{kind:"Literal",name:"width",value:1e6}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],type:"Photo",abstractKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:150},d,{kind:"Literal",name:"width",value:150}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[e],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_mediaset",plural:!1,selections:[a,{kind:"InlineFragment",selections:f,type:"GenericMediaSet",abstractKey:null},{kind:"InlineFragment",selections:f,type:"MediaUploadedByUserMediaSet",abstractKey:null},b],storageKey:null},b],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometTilePhotoGridView_viewStyleRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"reference_token",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometTilePhotoGridView_viewStyleRenderer",selections:[{alias:null,args:null,concreteType:"ProfileTileView",kind:"LinkedField",name:"view",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"profile_tile_items",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItem",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometTilePhotoGridViewItem_profileTileItem"},{alias:null,args:[{kind:"Literal",name:"height",value:150},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:150}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_mediaset",plural:!1,selections:[{kind:"InlineFragment",selections:a,type:"GenericMediaSet",abstractKey:null},{kind:"InlineFragment",selections:a,type:"MediaUploadedByUserMediaSet",abstractKey:null}],storageKey:null}],storageKey:null}],type:"ProfileTileViewPhotoGridRenderer",abstractKey:null}}();e.exports=a}),null);
__d("useCometPhotoViewerPlaceholderPassthroughPropsWithURI",["CometRelay","useCometPhotoViewerPlaceholderPassthroughProps","useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var e=a.photo;a=a.productTagReferralCode;e=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometPhotoViewerPlaceholderPassthroughPropsWithURI_photo.graphql"),e);return c("useCometPhotoViewerPlaceholderPassthroughProps")({photo:e,placeholderImageSrc:e==null?void 0:(e=e.viewer_image)==null?void 0:e.uri,productTagReferralCode:a})}g["default"]=a}),98);
__d("CixAccountStatusVpvdFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743357");c=b("FalcoLoggerInternal").create("cix_account_status_vpvd",a);e.exports=c}),null);
__d("XCometAccountStatusRootControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/account_status/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("ProfileCometAccountStatusNotice.react",["fbt","ix","CixAccountStatusVpvdFalcoEvent","CometCard.react","CometLink.react","CometRelay","CometRow.react","CometRowItem.react","Locale","ProfileCometAccountStatusNotice_data.graphql","TetraIcon.react","TetraTextPairing.react","XCometAccountStatusRootControllerRouteBuilder","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useEffect,m=e.useRef,n=d("fbicon")._(i("492539"),24),o=d("fbicon")._(i("492491"),24),p={chevronIcon:{marginTop:"x1gslohp",$$css:!0},redirect:{":hover_backgroundColor":"x10d93hz",$$css:!0},redirectLink:{":hover_textDecoration":"x1lku1pv",$$css:!0},restrictedBackground:{backgroundColor:"x1py5hnd",$$css:!0},root:{marginBottom:"x1yztbdb",$$css:!0},statusIndicator:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",display:"x78zum5",paddingTop:"x1y1aw1k",paddingEnd:"x1sxyh0",paddingBottom:"xwib8y2",paddingStart:"xurb0ha",width:"x1kky2od",$$css:!0},warningBackground:{backgroundColor:"x1rfik1p",$$css:!0}};function q(a){if(a===null)return null;var b,e;switch(a){case"WARNING":b=k.jsx(c("TetraIcon.react"),{icon:d("fbicon")._(i("502061"),16),size:16});e=p.warningBackground;break;default:b=k.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("538075"),16),size:16}),e=p.restrictedBackground}return k.jsx("div",{className:c("stylex")(p.statusIndicator,e),children:b})}q.displayName=q.name+" [from "+f.id+"]";function a(a){a=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometAccountStatusNotice_data.graphql"),a.data);var e=m(null);l(function(){if(e.current===!0)return;if(g!=="WARNING"&&g!=="RESTRICTED")return;e.current=!0;c("CixAccountStatusVpvdFalcoEvent").log(function(){return{event:"render",location:"profile_self",poi:"EP_PROFILE"}})});a=a==null?void 0:a.profile_entrypoint;if(a===null)return null;var f=a==null?void 0:a.status,g=a==null?void 0:a.status_value;if(g!=="WARNING"&&g!=="RESTRICTED")return null;a=q(g);var i=d("Locale").isRTL();return k.jsx("div",{className:"x1yztbdb",children:k.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:k.jsx("div",{className:"x10d93hz",children:k.jsx(c("CometLink.react"),{href:c("XCometAccountStatusRootControllerRouteBuilder").buildURL({location:"profile_self"}),onClick:function(){c("CixAccountStatusVpvdFalcoEvent").log(function(){return{event:"click",location:"profile_self",poi:"EP_PROFILE"}})},target:"_blank",xstyle:p.redirectLink,children:k.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:16,paddingTop:16,paddingVertical:16,children:[k.jsx(c("CometRowItem.react"),{children:a}),k.jsx(c("CometRowItem.react"),{expanding:!0,children:k.jsx(c("TetraTextPairing.react"),{headline:f,level:4,meta:h._("__JHASH__XDODsVB6EzW__JHASH__")})}),k.jsx(c("CometRowItem.react"),{children:k.jsx("div",{className:"x1gslohp",children:k.jsx(c("TetraIcon.react"),{"aria-label":h._("__JHASH__ojPYlPQM0eh__JHASH__"),color:"disabled",icon:i?o:n,size:24})})})]})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometGridTileImage.react",["CometRelay","ProfileCometGridTileImage_warningScreen.graphql","ProfileCometTileImage.react","emptyFunction","react","useCometPreloader"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useCallback;function a(a,e){var f=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometGridTileImage_warningScreen.graphql"),a.warningScreen),g=a.mediaViewerImageProps,k=a.onPress,l=a.passthroughImage,m=a.roundCorner,n=a.src;g={origHeight:g==null?void 0:g.height,origSrc:l,origWidth:g==null?void 0:g.width};var o=j(function(){if(l!=null){var a=new Image();a.src=l}},[l]);o=c("useCometPreloader")("button_aggressive",c("emptyFunction"),o);var p=o[0];o=o[1];return i.jsx("div",{className:"x78zum5 x12nagc x1n2onr6 x1s6qhgt",ref:e,children:i.jsxs("div",{className:"x5yr21d xw3qccf x6ikm8r x10wlt62 x1n2onr6 xh8yej3",children:[i.jsx(c("ProfileCometTileImage.react"),{linkProps:{passthroughProps:babelHelpers["extends"]({},g),traceParams:{profile_comet_tile_view_type:"photo_grid_view"},url:a.url},onHoverIn:p,onHoverOut:o,onPress:k,roundCorner:m,src:n||""}),f!=null&&i.jsx(d("CometRelay").MatchContainer,{match:f,props:{alwaysShowCoverComponent:!0,alwaysUseSmallLayout:!0,data:f,integrityUIElement:"profile_media_tile",mediaUri:n,surface:"profile",url:a.url}})]})})}a.displayName=a.name+" [from "+f.id+"]";e=i.forwardRef(a);g["default"]=e}),98);
__d("ProfileCometTilePhotoGridView.react",["CometRelay","ProfileCometGridTileImage.react","ProfileCometTilePhotoGridViewItem_image.graphql","ProfileCometTilePhotoGridViewItem_profileTileItem.graphql","ProfileCometTilePhotoGridView_viewStyleRenderer.graphql","getRoundedCorners","react","useCometMediaURL","useCometPhotoViewerPlaceholderPassthroughPropsWithURI","useProfileEngagementClickCallback","useProfileEngagementImpression"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=d("react"),l=3;h!==void 0?h:h=b("ProfileCometTilePhotoGridViewItem_image.graphql");function m(a){var e,f,g=a.item,h=a.mediasetToken;a=a.roundCorner;g=d("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometTilePhotoGridViewItem_profileTileItem.graphql"),g);e=(e=g.node)==null?void 0:e.id;f=(f=g.node)==null?void 0:(f=f.cix_screen)==null?void 0:f.view_model;e={content_id:e,item_type:"photo_thumbnail"};var j=c("useProfileEngagementImpression")(e);e=c("useProfileEngagementClickCallback")(e);h=c("useCometMediaURL")(g.node,h);var l=c("useCometPhotoViewerPlaceholderPassthroughPropsWithURI")({photo:g.node});return k.jsx(c("ProfileCometGridTileImage.react"),{mediaViewerImageProps:{height:l.origHeight,width:l.origWidth},onPress:e,passthroughImage:l.origSrc,ref:j,roundCorner:a,src:((e=g.image)==null?void 0:e.uri)||"",url:(l=h)!=null?l:"#",warningScreen:f})}m.displayName=m.name+" [from "+f.id+"]";function a(a){var e;a=a.viewStyleRenderer;a=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometTilePhotoGridView_viewStyleRenderer.graphql"),a);e=a==null?void 0:(e=a.view)==null?void 0:e.profile_tile_items;if(!e)return null;e=e.nodes.filter(function(a){var b;return((b=a.image)==null?void 0:b.uri)!=null&&a.node!=null});var f=(a=a==null?void 0:(a=a.view)==null?void 0:(a=a.view_mediaset)==null?void 0:a.reference_token)!=null?a:"";a=e.length;var g=c("getRoundedCorners")(a,l);a=l-a%l;return k.jsxs("div",{className:"x78zum5 x1a02dak x4vbgl9 xcud41i",children:[e.map(function(a,b){var c;c=(c=a.node)==null?void 0:c.id;return k.jsx(m,{item:a,mediasetToken:f,roundCorner:g[b]||null},(a=c)!=null?a:b)}),a!==l?Array.from(new Array(a),function(a,b){return k.jsx("div",{className:"x5yr21d xw3qccf x6ikm8r x10wlt62 x1n2onr6 xh8yej3"},"filler"+b)}):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);