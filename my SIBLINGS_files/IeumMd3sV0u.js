;/*FB_PKG_DELIM*/

__d("CometFlexibleGrid.react",["react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useLayoutEffect,j=b.useRef,k=b.useState,l={grid:{alignContent:"x8gbvx8",display:"x78zum5",flexDirection:"x1q0g3np",flexWrap:"x1a02dak",justifyContent:"x1nhvcw1",marginTop:"x1rdy4ex",marginEnd:"xcud41i",marginBottom:"x4vbgl9",marginStart:"x139jcc6",$$css:!0},gridJustifyCenter:{justifyContent:"xl56j7k",$$css:!0},item:{boxSizing:"x9f619",display:"x78zum5",flexBasis:"x1r8uery",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",flexShrink:"xs83m0k",paddingEnd:"x150jy0e",paddingStart:"x1e558r4",visibility:"xlshs6z",$$css:!0},itemVisible:{paddingBottom:"xjkvuk6",paddingTop:"x1iorvi4",visibility:"xnpuxes",$$css:!0}};function a(a){var b=a.columnMaxWidth,d=a.columnMinWidth,e=a.justify;e=e===void 0?"start":e;var f=a.maxItems;f=f===void 0?Infinity:f;var g=a.minItems,m=g===void 0?1:g,n=a.onTotalItemsChanged;g=a.xstyle;var o=h.Children.toArray(a.children);a=k(o.length);var p=a[0],q=a[1],r=j(null);i(function(){function a(a){a!==p&&(n&&n(a),q(a))}function b(){if(r.current!=null){var b=r.current.children;if(m<1||m>b.length){a(b.length);return}var c=b[m-1].offsetTop;for(var d=m;d<b.length;d++)if(b[d].offsetTop>c){a(d);return}a(b.length)}}b();window.addEventListener("resize",b);return function(){window.removeEventListener("resize",b)}},[b,d,m,f,p,n]);if(m>f)throw c("unrecoverableViolation")("minItems must be less than maxItems","comet_ui");a=Math.min(Math.max(m,o.length+(e!=="center"?10:0)),f);return h.jsx("div",{className:c("stylex")(l.grid,e==="center"&&l.gridJustifyCenter,g),ref:r,children:Array(a).fill().map(function(a,c){a=o[c];var e=c<p;return h.jsx("div",{className:"x9f619 x78zum5 x1r8uery xdt5ytf x1iyjqo2 xs83m0k x150jy0e x1e558r4"+(e?" xnpuxes xjkvuk6 x1iorvi4":" xlshs6z"),style:{maxWidth:b,minWidth:d},children:e?a:null},(e=a==null?void 0:a.key)!=null?e:c)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometGamingArenaHomeControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/gaming/tournaments/",Object.freeze({open_create_tournament_form:!1}),void 0);b=a;g["default"]=b}),98);