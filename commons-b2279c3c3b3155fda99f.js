(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9eSz":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a,i=r(n("PJYZ")),o=r(n("VbXa")),l=r(n("8OQS")),s=r(n("pVnL")),c=r(n("q1tI")),u=r(n("17x9")),d=function(e){var t=(0,s.default)({},e),n=t.resolutions,r=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=k([].concat(t.fluid))),t.fixed&&(t.fixed=k([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,n=e.fixed,r=g(t||n||[]);return r&&r.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},h=Object.create({}),p=function(e){var t=d(e),n=m(t);return h[n]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,w=new WeakMap;function x(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:r,sizes:i}),n&&c.default.createElement("source",{media:a,srcSet:n,sizes:i}))}))}function k(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function E(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function S(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function L(e,t){var n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?r:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return n&&(n.observe(e),w.set(e,t)),function(){n.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+c+o+l+n+r+t+i+a+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=c.default.forwardRef((function(e,t){var n=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(j,(0,s.default)({ref:t,src:n},i,{ariaHidden:o}));return r.length>1?c.default.createElement("picture",null,a(r),l):l})),j=c.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:n,srcSet:r,src:a},g,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));j.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var I=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=v&&p(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!b&&y&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||v&&(b||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn,isHydrated:!1},n.imageRef=c.default.createRef(),n.placeholderRef=t.placeholderRef||c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),(n=m(t))&&(h[n]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,p=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,k=e.loading,L=e.draggable,O=h||p;if(!O)return null;var I=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,s.default)({opacity:I?1:0,transition:V?"opacity "+v+"ms":"none"},l),P="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},C=(0,s.default)({opacity:this.state.imgLoaded?0:1},V&&T,l,f),W={title:t,alt:this.state.isVisible?"":n,style:C,className:m,itemProp:w},q=this.state.isHydrated?g(O):O[0];if(h)return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),P&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&T)}),q.base64&&c.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:W,imageVariants:O,generateSources:S}),q.tracedSVG&&c.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:W,imageVariants:O,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,x(O),c.default.createElement(j,{alt:n,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:k,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:n,title:t,loading:k},q,{imageVariants:O}))}}));if(p){var A=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete A.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},P&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:P,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},V&&T)}),q.base64&&c.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:W,imageVariants:O,generateSources:S}),q.tracedSVG&&c.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:W,imageVariants:O,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,x(O),c.default.createElement(j,{alt:n,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:k,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:n,title:t,loading:k},q,{imageVariants:O}))}}))}return null},t}(c.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),H=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function P(e){return function(t,n,r){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((a={})[n]=e,a),t,"prop",r)}}I.propTypes={resolutions:V,sizes:H,fixed:P(u.default.oneOfType([V,u.default.arrayOf(V)])),fluid:P(u.default.oneOfType([H,u.default.arrayOf(H)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=I;t.default=T},GR5B:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"k",(function(){return s})),n.d(t,"h",(function(){return f})),n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return v})),n.d(t,"l",(function(){return k})),n.d(t,"i",(function(){return E})),n.d(t,"j",(function(){return S})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return V})),n.d(t,"n",(function(){return T})),n.d(t,"m",(function(){return C}));var r=n("MUpH"),a=n("vOnD");function i(){var e=Object(r.a)(["\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;\n  grid-template-rows: 7.8rem 20rem 5rem auto;\n  gap: 0 2rem;\n\n  @media "," {\n    grid-template-columns: 2rem repeat(6, 1fr) 2rem;\n    grid-gap: 0 1rem;\n  }\n\n  @media "," {\n    grid-template-columns: 1rem repeat(6, 1fr) 1rem;\n  }\n"]);return i=function(){return e},e}var o=a.c.div(i(),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.mobile}));function l(){var e=Object(r.a)(["\n  grid-column: 2 / span 12;\n  grid-row: 1 / 2;\n  display: flex;\n  align-items: center;\n\n  img {\n    height: 50px;\n  }\n\n  @media "," {\n    grid-column: 2 / span 6;\n  }\n"]);return l=function(){return e},e}var s=a.c.nav(l(),(function(e){return e.theme.breakpoints.tablet}));function c(){var e=Object(r.a)(["\n  flex: 0 0 100%;\n  margin-bottom: 2rem;\n\n  img {\n    height: 22px;\n    padding: 0 1rem;\n    transition: filter 0.3s ease;\n  }\n\n  img:hover,\n  img:focus {\n    filter: brightness(50%);\n  }\n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  text-align: center;\n\n  p {\n    text-align: center;\n    flex: 0 0 100%;\n  }\n"]);return u=function(){return e},e}function d(){var e=Object(r.a)(["\n  grid-column: 2 / span 12;\n  min-height: 11.25rem;\n  padding: 3rem 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n\n  @media "," {\n    grid-column: 2 / span 6;\n  }\n"]);return d=function(){return e},e}var f=a.c.footer(d(),(function(e){return e.theme.breakpoints.tablet})),m=a.c.div(u()),g=a.c.div(c());function h(){var e=Object(r.a)(["\n  grid-column: 3 / span 10;\n  grid-row: 2 / 4;\n  overflow: hidden;\n  position: relative;\n\n  @media "," {\n    grid-column: 2 / span 6;\n  }\n"]);return h=function(){return e},e}var p=a.c.div(h(),(function(e){return e.theme.breakpoints.tablet}));function b(){var e=Object(r.a)(["\n  grid-column: 4 / span 8;\n  grid-row: 3 / span 5;\n  background-color: ",";\n  padding: ",";\n  box-shadow: ",";\n  z-index: 2;\n\n  @media "," {\n    grid-column: 2 / span 6;\n  }\n\n  @media "," {\n    padding: ",";\n  }\n"]);return b=function(){return e},e}var v=a.c.div(b(),(function(e){return e.theme.colors.light2}),(function(e){return e.theme.spacings.xLarge+" "+e.theme.spacings.xxLarge}),(function(e){return e.theme.shadows.shadow1}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.mobile}),(function(e){return e.theme.spacings.medium+" "+e.theme.spacings.large}));function y(){var e=Object(r.a)(["\n  font-size: 1.5rem;\n  line-height: 1.875rem;\n  color: ",";\n  font-weight: 400;\n  text-align: ",";\n  margin: ",";\n"]);return y=function(){return e},e}function w(){var e=Object(r.a)(["\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  color: ",";\n  font-weight: 400;\n  text-align: ",";\n  margin: ",";\n"]);return w=function(){return e},e}function x(){var e=Object(r.a)(["\n  margin: ",";\n  font-size: ",";\n  line-height: ",";\n  text-decoration: ",";\n  font-weight: ",";\n  color: ",";\n  text-align: ",";\n"]);return x=function(){return e},e}var k=a.c.p(x(),(function(e){return e.margin?e.margin:0}),(function(e){switch(e.size){case"medium":return"1.125rem";case"small":return"1rem";case"xSmall":return"0.875rem";default:return"1.125rem"}}),(function(e){switch(e.size){case"medium":return"1.125rem";case"small":return"1rem";case"xSmall":return"0.875rem";default:return"1.125rem"}}),(function(e){return e.decoration?e.decoration:"none"}),(function(e){switch(e.weight){case"normal":return 400;case"bold":return 700;default:return 400}}),(function(e){switch(e.color){case"dark1":return e.theme.colors.dark1;case"dark2":return e.theme.colors.dark2;case"dark3":return e.theme.colors.dark3;case"light1":return e.theme.colors.light1;case"light2":return e.theme.colors.light2;default:return e.theme.colors.dark1}}),(function(e){return e.textAlign?e.textAlign:"left"})),E=a.c.h1(w(),(function(e){switch(e.color){case"dark1":return e.theme.colors.dark1;case"dark2":return e.theme.colors.dark2;case"dark3":return e.theme.colors.dark3;case"light1":return e.theme.colors.light1;case"light2":return e.theme.colors.light2;default:return e.theme.colors.dark1}}),(function(e){return e.textAlign?e.textAlign:"left"}),(function(e){return e.margin?e.margin:0})),S=a.c.h2(y(),(function(e){switch(e.color){case"dark1":return e.theme.colors.dark1;case"dark2":return e.theme.colors.dark2;case"dark3":return e.theme.colors.dark3;case"light1":return e.theme.colors.light1;case"light2":return e.theme.colors.light2;default:return e.theme.colors.dark1}}),(function(e){return e.textAlign?e.textAlign:"left"}),(function(e){return e.margin?e.margin:0}));function L(){var e=Object(r.a)(["\n  margin-top: 2rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return L=function(){return e},e}var O=a.c.div(L()),R=n("q1tI"),z=n.n(R),j=n("Wbzz");function I(){var e=Object(r.a)(["\n  padding: 0.5rem 0.75rem;\n  background-color: ",";\n  border-radius: 0.5rem;\n  color: ",";\n  font-weight: 700;\n  font-size: 0.875rem;\n  width: fit-content;\n  transition: filter 0.3s ease;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    filter: brightness() 110%;\n  }\n"]);return I=function(){return e},e}var V=Object(a.c)((function(e){return z.a.createElement(j.a,e)}))(I(),(function(e){return e.theme.colors.main1}),(function(e){return e.theme.colors.light1}));function H(){var e=Object(r.a)(["\n  font-size: 0.875rem;\n  line-height: 1.125rem;\n  font-weight: 400;\n  text-decoration: none;\n  margin: 0 2rem;\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n"]);return H=function(){return e},e}function P(){var e=Object(r.a)(["\n  grid-column: 2 / span 12;\n  padding: 3rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  a:nth-child(1) {\n    color: ",";\n    pointer-events: ",";\n    cursor: ",";\n  }\n  a:nth-child(2) {\n    color: ",";\n    pointer-events: ",";\n    cursor: ",";\n  }\n\n  @media "," {\n    grid-column: 2 / span 6;\n  }\n"]);return P=function(){return e},e}var T=a.c.div(P(),(function(e){return e.isFirst?e.theme.colors.dark3:e.theme.colors.dark1}),(function(e){return e.isFirst?"none":"auto"}),(function(e){return e.isFirst?"default":"pointer"}),(function(e){return e.isLast?e.theme.colors.dark3:e.theme.colors.dark1}),(function(e){return e.isLast?"none":"auto"}),(function(e){return e.isLast?"default":"pointer"}),(function(e){return e.theme.breakpoints.tablet})),C=Object(a.c)((function(e){return z.a.createElement(j.a,e)}))(H());function W(){var e=Object(r.a)(["\n  grid-column: 4 / span 8;\n  grid-row: 3 / span 5;\n  background-color: ",";\n  padding: ",";\n  box-shadow: ",";\n  z-index: 2;\n\n  @media "," {\n    grid-column: 2 / span 6;\n  }\n\n  @media "," {\n    padding: ",";\n  }\n"]);return W=function(){return e},e}a.c.div(W(),(function(e){return e.theme.colors.light2}),(function(e){return e.theme.spacings.xLarge+" "+e.theme.spacings.xxLarge}),(function(e){return e.theme.shadows.shadow1}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.mobile}),(function(e){return e.theme.spacings.medium+" "+e.theme.spacings.large}))},Kvkj:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return h})),n.d(t,"h",(function(){return p})),n.d(t,"i",(function(){return b}));var r=n("q1tI"),a=n.n(r),i=n("GR5B"),o=function(e){var t=e.children;return a.a.createElement(i.c,null,a.a.createElement(s,null),t,a.a.createElement(c,null))},l=n("Wbzz"),s=function(){var e=Object(l.c)("670651827");return a.a.createElement(i.k,null,a.a.createElement(l.a,{to:"/"},a.a.createElement("img",{src:e.logo.publicURL,alt:"My Logo"})))},c=function(){var e=Object(l.c)("1766761758");return a.a.createElement(i.h,null,a.a.createElement(i.g,null,a.a.createElement(i.f,null,a.a.createElement("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:e.facebook.publicURL,alt:"Facebook logo"})),a.a.createElement("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:e.instagram.publicURL,alt:"instagram logo"})),a.a.createElement("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:e.linkedin.publicURL,alt:"LinkedIn logo"})),a.a.createElement("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:e.twitter.publicURL,alt:"Twitter logo"}))),a.a.createElement(i.l,{size:"xSmall",color:"dark3"},"2020 KacperKarczArtworks. All rights reserved.")))},u=n("9eSz"),d=n.n(u),f=function(e){var t=e.fixed,n=Object(l.c)("1358805498");return a.a.createElement(i.e,null,a.a.createElement(d.a,{fixed:t||n.imageSharp.fixed,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"}}))},m=function(e){var t=e.children;return a.a.createElement(i.d,null,t)},g=function(e){var t=e.date,n=e.title,r=e.excerpt,o=e.slug;return a.a.createElement(i.b,null,a.a.createElement(i.l,{size:"xSmall",textAlign:"center",margin:"0 0 0.5rem 0",color:"dark2"},t),a.a.createElement(i.j,{textAlign:"center",margin:"0 0 1rem 0"},n),a.a.createElement(i.l,{size:"small",color:"dark2",textAlign:"center",margin:"0 0 1.5rem 0"},r),a.a.createElement(h,{href:o},"Read More"))},h=function(e){var t=e.children,n=e.href;return a.a.createElement(i.a,{to:"/"+n},t)},p=function(e){var t=e.isFirst,n=e.isLast,r=e.prevPage,o=e.nextPage;return a.a.createElement(i.n,{isFirst:t,isLast:n},a.a.createElement(i.m,{to:r},"Previous Page"),a.a.createElement(i.m,{to:o},"next Page"))},b=function(e){var t=e.children;return a.a.createElement(i.d,null,t)}}}]);
//# sourceMappingURL=commons-b2279c3c3b3155fda99f.js.map