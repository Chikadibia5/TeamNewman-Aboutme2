;/*FB_PKG_DELIM*/

__d("CometAIProductTagSuggestionsUtil_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"CometAIProductTagSuggestionsUtil_photo"};e.exports=a}),null);
__d("ProductTagConfidence",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["HIGH","LOW","VERY_HIGH","VERY_LOW"]);c=a;f["default"]=c}),66);
__d("ProductTagConfidenceUtils.facebook",["$InternalEnumUtils","ProductTagConfidence"],(function(a,b,c,d,e,f,g){a=d("$InternalEnumUtils").createToJSEnum(c("ProductTagConfidence"));b=d("$InternalEnumUtils").createFromJSEnum(c("ProductTagConfidence"));g.toJSEnum=a;g.fromJSEnum=b}),98);
__d("SharedAIProductTagUtils",["ProductTagConfidenceUtils.facebook"],(function(a,b,c,d,e,f,g){"use strict";var h=5;function a(a){var b=new Map();a.product_tag_suggestions.map(function(a){var c=a.media_id;a=a.suggestions;if(c==null||a==null)return;var e=[],f=[];a.map(function(a){a=(a=a)!=null?a:{};var b=a.bottom_right,c=a.center_x,g=a.center_y,h=a.confidence,i=a.products,j=a.score;a=a.top_left;if(c==null||g==null||j==null)return;c=c*100;g=g*100;i=i==null?void 0:i[0];var k=i==null?void 0:i.score;h=d("ProductTagConfidenceUtils.facebook").toJSEnum(h);var l=i==null?void 0:i.time_range;i=(i=i==null?void 0:i.product_item)!=null?i:{};var m=i.id,n=i.listing_price,o=i.name,p=i.per_unit_price;i=i.primary_listing_photo;b={boundingBoxJSON:JSON.stringify({bottomRight:b,topLeft:a}),boxScore:j,confidence:h,productID:m,productScore:k,timeRange:l};if((h==="VERY_HIGH"||h==="HIGH")&&e.length===0){if(m==null||o==null)return null;j={id:m,image_uri:i==null?void 0:(a=i.image)==null?void 0:a.uri,metadata:{product_tag_type:"AI_HIGH_CONFIDENCE"},name:o,product_per_unit_price:p==null?void 0:p.formatted_text,product_price:n==null?void 0:n.formatted_amount};k=babelHelpers["extends"]({},b,{source:"AI_suggested",taggee:j,x:c,y:g});e.push(k)}else l==null&&h==="LOW"&&f.push(babelHelpers["extends"]({},b,{x:c,y:g}))});b.set(c,{knownSuggestions:e,unknownSuggestions:f})});return b}function b(a,b,c,d){return a>=c-h&&a<=c+h&&b>=d-h&&b<=d+h}g.USER_TAGGING_TOLERANCE=h;g.processAIProductTagSuggestionsQueryResponse=a;g.isPointNearbyPoint=b}),98);
__d("CometAIProductTagSuggestionsUtil.react",["CometAIProductTagSuggestionsUtil_photo.graphql","CometRelay","SharedAIProductTagUtils"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometAIProductTagSuggestionsUtil_photo.graphql");function j(a,b){return a.productID===b.productID||d("SharedAIProductTagUtils").isPointNearbyPoint(a.x,a.y,b.x,b.y)}function k(a){return(a=a==null?void 0:(a=a.photo_product_tags)==null?void 0:a.map(function(a){var b;b=(b=a.listing)==null?void 0:b.id;a=a.xy_location;var c=a==null?void 0:a.x;a=a==null?void 0:a.y;return c==null||a===void 0||a===null||b===null||b===void 0?null:{productID:b,x:c,y:a}}).filter(Boolean))!=null?a:[]}function a(a,b){a=d("CometRelay").readInlineData(i,a);b=b==null?void 0:b.get((b=a==null?void 0:a.id)!=null?b:"");var c=k(a);return!b?[]:b==null?void 0:b.filter(function(a){var b=(c==null?void 0:c.filter(function(b){return j({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b})}function c(a,b){a=d("CometRelay").readInlineData(i,a);b=b==null?void 0:b.get((b=a==null?void 0:a.id)!=null?b:"");var c=k(a);return!b?[]:b==null?void 0:b.filter(function(a){var b=(c==null?void 0:c.filter(function(b){return j({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b})}function e(a){return!a}g.getUntaggedKnownTags=a;g.getUntaggedUnknownTags=c;g.canUsePretagExperience=e}),98);
__d("HoveredProductIDContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({hoveredProductID:null,setHoveredProductID:c("emptyFunction")});g["default"]=b}),98);
__d("CometPhotoViewerViewStateContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({highlightedKnownAITagID:null,isProductTagging:!1,knownAITags:null,tagModeEnabled:!1,unknownAITags:null});g["default"]=b}),98);
__d("CometPhotoViewerViewStateDispatcherContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("CommerceShoppableContentLandingClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("3079");c=b("FalcoLoggerInternal").create("commerce_shoppable_content_landing_click",a);e.exports=c}),null);
__d("CommerceViewProductTagFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743420");c=b("FalcoLoggerInternal").create("commerce_view_product_tag",a);e.exports=c}),null);
__d("CreatorToolsGrowthEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("70");c=b("FalcoLoggerInternal").create("creator_tools_growth_event",a);e.exports=c}),null);
__d("LiveShoppingViewerFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743808");c=b("FalcoLoggerInternal").create("live_shopping_viewer",a);e.exports=c}),null);
__d("ProductTaggingAiEvaluationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744233");c=b("FalcoLoggerInternal").create("product_tagging_ai_evaluation",a);e.exports=c}),null);
__d("XCometPageShopsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/shop/",Object.freeze({ref:"",preview:!1}),void 0);b=a;g["default"]=b}),98);