(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}var c,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),f=(c=r(5443))&&c.__esModule?c:{default:c},s=r(5809),d=r(7190),p=r(9977);function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){y(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"},m=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality,i=new URL("".concat(t.path).concat(O(r))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality,i=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(O(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(O(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function A(e){var t=e.config,r=e.src,n=e.unoptimized,o=e.layout,i=e.width,u=e.quality,c=e.sizes,l=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var f=function(e,t,r,n){var o=e.deviceSizes,i=e.allSizes;if(n&&("fill"===r||"responsive"===r)){for(var u,c=/(^|\s)(1?\d?\d)vw/g,l=[];u=c.exec(n);u)l.push(parseInt(u[2]));if(l.length){var f,s=.01*(f=Math).min.apply(f,a(l));return{widths:i.filter((function(e){return e>=o[0]*s})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return i.find((function(t){return t>=e}))||i[i.length-1]})))),kind:"x"}}(t,i,o,c),s=f.widths,d=f.kind,p=s.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:s.map((function(e,n){return"".concat(l({config:t,src:r,quality:u,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:l({config:t,src:r,quality:u,width:s[p]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=b.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(r))}function O(e){return"/"===e[0]?e.slice(1):e}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},u=r(6273),c=r(387),l=r(7190);var f={};function s(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),i=a.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,p=i.as,y=e.children,v=e.replace,h=e.shallow,m=e.scroll,g=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var b=(t=a.default.Children.only(y))&&"object"===typeof t&&t.ref,w=o(l.useIntersection({rootMargin:"200px"}),2),A=w[0],S=w[1],j=a.default.useCallback((function(e){A(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,A]);a.default.useEffect((function(){var e=S&&r&&u.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,S,g,r,n]);var O={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:a}))}(e,n,d,p,v,h,m,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof g?g:n&&n.locale,E=n&&n.isLocaleDomain&&u.getDomainLocale(p,I,n&&n.locales,n&&n.domainLocales);O.href=E||u.addBasePath(u.addLocale(p,I,n&&n.defaultLocale))}return a.default.cloneElement(t,O)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,f=i.useRef(),s=o(i.useState(!1),2),d=s[0],p=s[1],y=o(i.useState(t?t.current:null),2),v=y[0],h=y[1],m=i.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),l.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]);return i.useEffect((function(){if(!u&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&h(t.current)}),[t]),[m,d]};var i=r(7294),a=r(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){r(8045)},1664:function(e,t,r){e.exports=r(8418)}}]);