"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{9263:function(e,n,t){t.d(n,{l:function(){return ew}});var r=t(3241),i=t(4736),o=t(7414),a=t(7294),c=Object.defineProperty,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&d(e,t,n[t]);if(u)for(var t of u(n))s.call(n,t)&&d(e,t,n[t]);return e};function p(e){return a.createElement("svg",f({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem"},e),a.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function m(e){return"number"==typeof e}function v(e){return"[object Object]"===Object.prototype.toString.call(e)}function g(e){return v(e)||Array.isArray(e)}function h(e){return Math.abs(e)}function b(e){return e?e/h(e):0}function y(e){return S(e).map(Number)}function x(e){return e[w(e)]}function w(e){return Math.max(0,e.length-1)}function S(e){return Object.keys(e)}function E(e,n){var t=h(e-n);function r(t){return t<e||t>n}return{length:t,max:n,min:e,constrain:function(t){return r(t)?t<e?e:n:t},reachedAny:r,reachedMax:function(e){return e>n},reachedMin:function(n){return n<e},removeOffset:function(e){return t?e-t*Math.ceil((e-n)/t):e}}}function O(){var e=[],n={add:function(t,r,i,o){return void 0===o&&(o={passive:!0}),t.addEventListener(r,i,o),e.push(function(){return t.removeEventListener(r,i,o)}),n},removeAll:function(){return e=e.filter(function(e){return e()}),n}};return n}function z(e){var n=e;function t(e){return n/=e,i}function r(e){return m(e)?e:e.get()}var i={add:function(e){return n+=r(e),i},divide:t,get:function(){return n},multiply:function(e){return n*=e,i},normalize:function(){return 0!==n&&t(n),i},set:function(e){return n=r(e),i},subtract:function(e){return n-=r(e),i}};return i}function k(e,n,t){var r="x"===e.scroll?function(e){return"translate3d(".concat(e,"px,0px,0px)")}:function(e){return"translate3d(0px,".concat(e,"px,0px)")},i=t.style,o=!1;return{clear:function(){o||(i.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(e){o||(i.transform=r(n.apply(e.get())))},toggleActive:function(e){o=!e}}}var C={align:"center",axis:"x",containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function I(){function e(e,n){return function e(n,t){return[n,t].reduce(function(n,t){return S(t).forEach(function(r){var i=n[r],o=t[r],a=v(i)&&v(o);n[r]=a?e(i,o):o}),n},{})}(e,n||{})}return{merge:e,areEqual:function(e,n){return JSON.stringify(S(e.breakpoints||{}))===JSON.stringify(S(n.breakpoints||{}))&&function e(n,t){var r=S(n),i=S(t);return r.length===i.length&&r.every(function(r){var i=n[r],o=t[r];return"function"==typeof i?"".concat(i)==="".concat(o):g(i)&&g(o)?e(i,o):i===o})}(e,n)},atMedia:function(n){var t=n.breakpoints||{},r=S(t).filter(function(e){return window.matchMedia(e).matches}).map(function(e){return t[e]}).reduce(function(n,t){return e(n,t)},{});return e(n,r)}}}function P(e,n,t){var r,i,o,a,c,u,l,s=O(),d=I(),f=function(){var e=I(),n=e.atMedia,t=e.areEqual,r=[],i=[];function o(e){var r=n(e.options);return function(){return!t(r,n(e.options))}}return{init:function(e,t){return i=e.map(o),(r=e.filter(function(e){return n(e.options).active})).forEach(function(e){return e.init(t)}),e.reduce(function(e,n){var t;return Object.assign(e,((t={})[n.name]=n,t))},{})},destroy:function(){r=r.filter(function(e){return e.destroy()})},haveChanged:function(){return i.some(function(e){return e()})}}}(),p=(r={},i={emit:function(e){return(r[e]||[]).forEach(function(n){return n(e)}),i},off:function(e,n){return r[e]=(r[e]||[]).filter(function(e){return e!==n}),i},on:function(e,n){return r[e]=(r[e]||[]).concat([n]),i}}),v=p.on,g=p.off,S=!1,A=d.merge(C,P.globalOptions),N=d.merge(A),j=[],M=0;function T(n,t){if(!S){var r,i;if(r="container"in e&&e.container,i="slides"in e&&e.slides,c="root"in e?e.root:e,u=r||c.children[0],l=i||[].slice.call(u.children),A=d.merge(A,n),M=(o=function(e,n,t,r,i){var o,a,c,u,l,s,d,f,p,v,g,S,C,I,P,A,N,j,M,T,L,B,R,D,G,$,H,V,F,W,q,U,_,K=r.align,J=r.axis,X=r.direction,Y=r.startIndex,Z=r.inViewThreshold,Q=r.loop,ee=r.speed,en=r.dragFree,et=r.slidesToScroll,er=r.skipSnaps,ei=r.containScroll,eo=n.getBoundingClientRect(),ea=t.map(function(e){return e.getBoundingClientRect()}),ec=(l="rtl"===X?-1:1,{apply:function(e){return e*l}}),eu={scroll:s="y"===J?"y":"x",cross:"y"===J?"x":"y",startEdge:"y"===s?"top":"rtl"===X?"right":"left",endEdge:"y"===s?"bottom":"rtl"===X?"left":"right",measureSize:function(e){var n=e.width,t=e.height;return"x"===s?n:t}},el=eu.measureSize(eo),es={measure:function(e){return el*(e/100)}},ed=(o={start:function(){return 0},center:function(e){return(el-e)/2},end:function(e){return el-e}},{measure:function(e){return m(K)?el*Number(K):o[K](e)}}),ef=!Q&&""!==ei,ep=(d=eu.measureSize,f=eu.startEdge,p=eu.endEdge,v=ea[0]&&(Q||""!==ei),g=function(){if(!v)return 0;var e=ea[0];return h(eo[f]-e[f])}(),S=v?parseFloat(window.getComputedStyle(x(t)).getPropertyValue("margin-".concat(p))):0,C=ea.map(d),I=ea.map(function(e,n,t){var r=n===w(t);return n?r?C[n]+S:t[n+1][f]-e[f]:C[n]+g}).map(h),{slideSizes:C,slideSizesWithGaps:I}),em=ep.slideSizes,ev=ep.slideSizesWithGaps,eg=(P=m(et),{groupSlides:function(e){return P?y(e).filter(function(e){return e%et==0}).map(function(n){return e.slice(n,n+et)}):y(e).reduce(function(e,n){var t=ev.slice(x(e),n+1).reduce(function(e,n){return e+n},0);return!n||t>el?e.concat(n):e},[]).map(function(n,t,r){return e.slice(n,r[t+1])})}}),eh=(A=eu.startEdge,N=eu.endEdge,M=(j=eg.groupSlides)(ea).map(function(e){return x(e)[N]-e[0][A]}).map(h).map(ed.measure),a=x(T=ea.map(function(e){return eo[A]-e[A]}).map(function(e){return-h(e)}))-x(ev),L=j(T).map(function(e){return e[0]}).map(function(e,n,t){var r=n===w(t);return ef&&!n?0:ef&&r?a:e+M[n]}),{snaps:T,snapsAligned:L}),eb=eh.snaps,ey=eh.snapsAligned,ex=-x(eb)+x(ev),ew=(B=E(-ex+el,ey[0]),R=ey.map(B.constrain),{snapsContained:function(){if(ex<=el)return[B.max];if("keepSnaps"===ei)return R;var e,n,t=(e=R[0],n=x(R),E(R.lastIndexOf(e),R.indexOf(n)+1)),r=t.min,i=t.max;return R.slice(r,i)}()}).snapsContained,eS=ef?ew:ey,eE={limit:(c=eS[0],u=x(eS),E(Q?c-ex:u,c))}.limit,eO=function e(n,t,r){var i=E(0,n),o=i.min,a=i.constrain,c=n+1,u=l(t);function l(e){return r?h((c+e)%c):a(e)}function s(e){return u=l(e),d}var d={add:function(e){return s(u+e)},clone:function(){return e(n,u,r)},get:function(){return u},set:s,min:o,max:n};return d}(w(eS),Y,Q),ez=eO.clone(),ek=y(t),eC=function(e){var n=0;function t(e,t){return function(){!!n===e&&t()}}function r(){n=window.requestAnimationFrame(e)}return{proceed:t(!0,r),start:t(!1,r),stop:t(!0,function(){window.cancelAnimationFrame(n),n=0})}}(function(){Q||eB.scrollBounds.constrain(eB.dragHandler.pointerDown()),eB.scrollBody.seek(eA).update();var e=eB.scrollBody.settle(eA);e&&!eB.dragHandler.pointerDown()&&(eB.animation.stop(),i.emit("settle")),e||i.emit("scroll"),Q&&(eB.scrollLooper.loop(eB.scrollBody.direction()),eB.slideLooper.loop()),eB.translate.to(eP),eB.animation.proceed()}),eI=eS[eO.get()],eP=z(eI),eA=z(eI),eN=function(e,n,t){var r=z(0),i=z(0),o=z(0),a=0,c=n,u=t;function l(e){return c=e,d}function s(e){return u=e,d}var d={direction:function(){return a},seek:function(n){o.set(n).subtract(e);var t=0+(c-0)*((o.get()-0)/100);return a=b(o.get()),o.normalize().multiply(t).subtract(r),o.divide(u),i.add(o),d},settle:function(n){var t=!(Math.round((n.get()-e.get())*100)/100);return t&&e.set(n),t},update:function(){r.add(i),e.add(r),i.multiply(0)},useBaseMass:function(){return s(t)},useBaseSpeed:function(){return l(n)},useMass:s,useSpeed:l};return d}(eP,ee,1),ej=function(e,n,t,r,i){var o=r.reachedAny,a=r.removeOffset,c=r.constrain;function u(e){return e.concat().sort(function(e,n){return h(e)-h(n)})[0]}function l(n,r){var i=[n,n+t,n-t];return e?r?u(i.filter(function(e){return b(e)===r})):u(i):i[0]}return{byDistance:function(t,r){var u,s=i.get()+t,d=(u=e?a(s):c(s),{index:n.map(function(e){return e-u}).map(function(e){return l(e,0)}).map(function(e,n){return{diff:e,index:n}}).sort(function(e,n){return h(e.diff)-h(n.diff)})[0].index,distance:u}),f=d.index,p=d.distance,m=!e&&o(s);if(!r||m)return{index:f,distance:t};var v=t+l(n[f]-p,0);return{index:f,distance:v}},byIndex:function(e,t){var r=l(n[e]-i.get(),t);return{index:e,distance:r}},shortcut:l}}(Q,eS,ex,eE,eA),eM=function(e,n,t,r,i,o){function a(r){var a=r.distance,c=r.index!==n.get();a&&(e.start(),i.add(a)),c&&(t.set(n.get()),n.set(r.index),o.emit("select"))}return{distance:function(e,n){a(r.byDistance(e,n))},index:function(e,t){var i=n.clone().set(e);a(r.byIndex(i.get(),t))}}}(eC,eO,ez,ej,eA,i),eT=function(e,n,t,r,i,o,a){var c=i.removeOffset,u=i.constrain,l=o?[0,n,-n]:[0],s=d(l,a);function d(n,i){var o,a=(o=i||0,t.map(function(e){return E(.5,e-.5).constrain(e*o)}));return(n||l).reduce(function(n,i){var o=r.map(function(n,r){return{start:n-t[r]+a[r]+i,end:n+e-a[r]+i,index:r}});return n.concat(o)},[])}return{check:function(e,n){var t=o?c(e):u(e);return(n||s).reduce(function(e,n){var r=n.index,i=n.start,o=n.end;return!(-1!==e.indexOf(r))&&i<t&&o>t?e.concat([r]):e},[])},findSlideBounds:d}}(el,ex,em,eb,eE,Q,Z),eL=function(e,n,t,r,i,o,a,c,u,l,s,d,f,p,m,v){var g=e.cross,y=["INPUT","SELECT","TEXTAREA"],x={passive:!1},w=z(0),S=O(),E=O(),k=f.measure(20),C={mouse:300,touch:400},I={mouse:500,touch:600},P=m?5:16,A=0,N=0,j=!1,M=!1,T=!1,L=!1;function B(e){if((!(L=!i.isTouchEvent(e))||0===e.button)&&(n=e.target.nodeName||"",!(y.indexOf(n)>-1))){var n,a,c=h(r.get()-o.get())>=2,l=L||!c;j=!0,i.pointerDown(e),w.set(r),r.set(o),u.useBaseMass().useSpeed(80),a=L?document:t,E.add(a,"touchmove",R,x).add(a,"touchend",D).add(a,"mousemove",R,x).add(a,"mouseup",D),A=i.readPoint(e),N=i.readPoint(e,g),d.emit("pointerDown"),l&&(T=!1)}}function R(e){if(!M&&!L){if(!e.cancelable)return D(e);var t=i.readPoint(e),o=i.readPoint(e,g);if(!(M=h(t-A)>h(o-N))&&!T)return D(e)}var c=i.pointerMove(e);!T&&c&&(T=!0),a.start(),r.add(n.apply(c)),e.preventDefault()}function D(e){var t,o,a,f,g=l.byDistance(0,!1).index!==s.get(),y=i.pointerUp(e)*(m?I:C)[L?"mouse":"touch"],x=(t=n.apply(y),a=(o=s.clone().add(-1*b(t))).get()===s.min||o.get()===s.max,f=l.byDistance(t,!m).distance,m||h(t)<k?f:!p&&a?.4*f:v&&g?.5*f:l.byIndex(o.get(),0).distance),S=function(e,n){if(0===e||0===n||h(e)<=h(n))return 0;var t,r,i=(t=h(e),r=h(n),h(t-r));return h(i/e)}(y,x),O=h(r.get()-w.get())>=.5,z=g&&S>.75,A=h(y)<k;O&&!L&&(T=!0),M=!1,j=!1,E.removeAll(),u.useSpeed(A?9:z?10:P).useMass(z?1+2.5*S:1),c.distance(x,!m),L=!1,d.emit("pointerUp")}function G(e){T&&(e.stopPropagation(),e.preventDefault())}return{addActivationEvents:function(){S.add(t,"dragstart",function(e){return e.preventDefault()},x).add(t,"touchmove",function(){},x).add(t,"touchend",function(){}).add(t,"touchstart",B).add(t,"mousedown",B).add(t,"touchcancel",D).add(t,"contextmenu",D).add(t,"click",G,!0)},clickAllowed:function(){return!T},pointerDown:function(){return j},removeAllEvents:function(){S.removeAll(),E.removeAll()}}}(eu,ec,e,eA,function(e){var n,t;function r(e){return"undefined"!=typeof TouchEvent&&e instanceof TouchEvent}function i(e){return e.timeStamp}function o(n,t){var i=t||e.scroll;return(r(n)?n.touches[0]:n)["client".concat("x"===i?"X":"Y")]}return{isTouchEvent:r,pointerDown:function(e){return n=e,t=e,o(e)},pointerMove:function(e){var r=o(e)-o(t),a=i(e)-i(n)>170;return t=e,a&&(n=e),r},pointerUp:function(e){if(!n||!t)return 0;var r=o(t)-o(n),a=i(e)-i(n),c=i(e)-i(t)>170,u=r/a;return a&&!c&&h(u)>.1?u:0},readPoint:o}}(eu),eP,eC,eM,eN,ej,eO,i,es,Q,en,er),eB={containerRect:eo,slideRects:ea,animation:eC,axis:eu,direction:ec,dragHandler:eL,eventStore:O(),percentOfView:es,index:eO,indexPrevious:ez,limit:eE,location:eP,options:r,scrollBody:eN,scrollBounds:(G=es.measure(10),$=es.measure(50),H=!1,{constrain:function(e){if(!H&&eE.reachedAny(eA.get())&&eE.reachedAny(eP.get())){var n=eE.reachedMin(eP.get())?"min":"max",t=h(eE[n]-eP.get()),r=eA.get()-eP.get();eA.subtract(r*Math.min(t/$,.85)),!e&&h(r)<G&&(eA.set(eE.constrain(eA.get())),eN.useSpeed(10).useMass(3))}},toggleActive:function(e){H=!e}}),scrollLooper:(V=[eP,eA],W=(F=E(eE.min+.1,eE.max+.1)).reachedMin,q=F.reachedMax,{loop:function(e){if(1===e?q(eP.get()):-1===e&&W(eP.get())){var n=ex*(-1*e);V.forEach(function(e){return e.add(n)})}}}),scrollProgress:(U=eE.max,_=eE.length,{get:function(e){return-((e-U)/_)}}),scrollSnaps:eS,scrollTarget:ej,scrollTo:eM,slideLooper:function(e,n,t,r,i,o,a,c,u){var l=y(i),s=p(f(y(i).reverse(),o[0]-1),"end").concat(p(f(l,t-o[0]-1),"start"));function d(e,n){return e.reduce(function(e,n){return e-i[n]},n)}function f(e,n){return e.reduce(function(e,t){return d(e,n)>0?e.concat([t]):e},[])}function p(t,i){var o="start"===i,l=a.findSlideBounds([o?-r:r]);return t.map(function(t){var i=o?0:-r,a=o?r:0,s=l.filter(function(e){return e.index===t})[0][o?"end":"start"],d=z(-1),f=z(-1),p=k(e,n,u[t]);return{index:t,location:f,translate:p,target:function(){return d.set(c.get()>s?i:a)}}})}return{canLoop:function(){return s.every(function(e){var n=e.index;return .1>=d(l.filter(function(e){return e!==n}),t)})},clear:function(){s.forEach(function(e){return e.translate.clear()})},loop:function(){s.forEach(function(e){var n=e.target,t=e.translate,r=e.location,i=n();i.get()!==r.get()&&(0===i.get()?t.clear():t.to(i),r.set(i))})},loopPoints:s}}(eu,ec,el,ex,ev,eS,eT,eP,t),slidesToScroll:eg,slidesInView:eT,slideIndexes:ek,target:eA,translate:k(eu,ec,n)};return eB}(c,u,l,N=d.atMedia(A),p)).axis.measureSize(c.getBoundingClientRect()),!N.active)return B();if(o.translate.to(o.location),j=t||j,a=f.init(j,$),N.loop){if(!o.slideLooper.canLoop()){B(),T({loop:!1},t),A=d.merge(A,{loop:!0});return}o.slideLooper.loop()}N.draggable&&u.offsetParent&&l.length&&o.dragHandler.addActivationEvents()}}function L(e,n){var t=G();B(),T(d.merge({startIndex:t},e),n),p.emit("reInit")}function B(){o.dragHandler.removeAllEvents(),o.animation.stop(),o.eventStore.removeAll(),o.translate.clear(),o.slideLooper.clear(),f.destroy()}function R(e){var n=o[e?"target":"location"].get(),t=N.loop?"removeOffset":"constrain";return o.slidesInView.check(o.limit[t](n))}function D(e,n,t){N.active&&!S&&(o.scrollBody.useBaseMass().useSpeed(n?100:N.speed),o.scrollTo.index(e,t||0))}function G(){return o.index.get()}var $={canScrollNext:function(){return o.index.clone().add(1).get()!==G()},canScrollPrev:function(){return o.index.clone().add(-1).get()!==G()},clickAllowed:function(){return o.dragHandler.clickAllowed()},containerNode:function(){return u},internalEngine:function(){return o},destroy:function(){S||(S=!0,s.removeAll(),B(),p.emit("destroy"))},off:g,on:v,plugins:function(){return a},previousScrollSnap:function(){return o.indexPrevious.get()},reInit:L,rootNode:function(){return c},scrollNext:function(e){D(o.index.clone().add(1).get(),!0===e,-1)},scrollPrev:function(e){D(o.index.clone().add(-1).get(),!0===e,1)},scrollProgress:function(){return o.scrollProgress.get(o.location.get())},scrollSnapList:function(){return o.scrollSnaps.map(o.scrollProgress.get)},scrollTo:D,selectedScrollSnap:G,slideNodes:function(){return l},slidesInView:R,slidesNotInView:function(e){var n=R(e);return o.slideIndexes.filter(function(e){return -1===n.indexOf(e)})}};return T(n,t),s.add(window,"resize",function(){var e=d.atMedia(A),n=!d.areEqual(e,N),t=M!==o.axis.measureSize(c.getBoundingClientRect()),r=f.haveChanged();(t||n||r)&&L(),p.emit("resize")}),setTimeout(function(){return p.emit("init")},0),$}function A(e){return e.concat().sort(function(e,n){return e.name>n.name?1:-1}).map(function(e){return e.options})}function N(e,n){void 0===e&&(e={}),void 0===n&&(n=[]);var t=(0,a.useRef)(P.optionsHandler()),r=(0,a.useRef)(e),i=(0,a.useRef)(n),o=(0,a.useState)(),c=o[0],u=o[1],l=(0,a.useState)(),s=l[0],d=l[1],f=(0,a.useCallback)(function(){c&&c.reInit(r.current,i.current)},[c]);return(0,a.useEffect)(function(){if("undefined"!=typeof window&&window.document&&window.document.createElement&&s){P.globalOptions=N.globalOptions;var e=P(s,r.current,i.current);return u(e),function(){return e.destroy()}}u(void 0)},[s,u]),(0,a.useEffect)(function(){t.current.areEqual(r.current,e)||(r.current=e,f())},[e,f]),(0,a.useEffect)(function(){!function(e,n){if(e.length!==n.length)return!1;var t=P.optionsHandler().areEqual,r=A(e),i=A(n);return r.every(function(e,n){return t(e,i[n])})}(i.current,n)&&(i.current=n,f())},[n,f]),[d,c]}P.globalOptions=void 0,P.optionsHandler=I,N.globalOptions=void 0;var j=t(8216);let[M,T]=(0,j.R)("[@mantine/carousel] Carousel.Slide was rendered outside of Carousel context");var L=t(6817),B=t(4258),R=t(3687),D=t(6768),G=t(58),$=Object.defineProperty,H=Object.defineProperties,V=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,U=(e,n,t)=>n in e?$(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,_=(e,n)=>{for(var t in n||(n={}))W.call(n,t)&&U(e,t,n[t]);if(F)for(var t of F(n))q.call(n,t)&&U(e,t,n[t]);return e},K=(e,n)=>H(e,V(n)),J=(0,L.k)((e,{controlSize:n,controlsOffset:t,orientation:r,height:i,includeGapInSize:o,breakpoints:a=[],slideGap:c})=>{let u="horizontal"===r,l=n=>{if(!o)return{};let t=(0,B.a)({size:n,sizes:e.spacing});return{["horizontal"===r?"marginRight":"marginBottom"]:`calc(${t} * -1)`}},s=a.some(e=>void 0!==e.slideGap||void 0!==e.slideSize),d=s?(0,R.I)(e,a).reduce((n,t)=>{let r="maxWidth"in t?"max-width":"min-width",i=(0,B.a)({size:"max-width"===r?t.maxWidth:t.minWidth,sizes:e.breakpoints}),o=void 0===t.slideGap?void 0:(0,D.h)(t.slideGap),a=(0,G.oI)(i)-("max-width"===r?1:0);return n[`@media (${r}: ${(0,D.h)(a)})`]=l(o),n},{}):null;return{root:{position:"relative"},viewport:{height:(0,D.h)(i),overflow:"hidden"},container:_(_({display:"flex",flexDirection:u?"row":"column",height:(0,D.h)(i)},l(c)),d),controls:{position:"absolute",zIndex:1,left:u?0:`calc(50% - ${(0,D.h)(n)} / 2)`,right:u?0:void 0,top:u?`calc(50% - ${(0,D.h)(n)} / 2)`:0,bottom:u?void 0:0,display:"flex",flexDirection:u?"row":"column",alignItems:"center",justifyContent:"space-between",paddingLeft:u?(0,B.a)({size:t,sizes:e.spacing}):void 0,paddingRight:u?(0,B.a)({size:t,sizes:e.spacing}):void 0,paddingTop:u?void 0:(0,B.a)({size:t,sizes:e.spacing}),paddingBottom:u?void 0:(0,B.a)({size:t,sizes:e.spacing}),pointerEvents:"none"},control:K(_({display:"flex",justifyContent:"center",alignItems:"center",minWidth:(0,D.h)(n),minHeight:(0,D.h)(n),borderRadius:(0,D.h)(n),pointerEvents:"all",backgroundColor:e.white,color:e.black,boxShadow:e.shadows.md,opacity:"dark"===e.colorScheme?.65:.85,border:`${(0,D.h)(1)} solid ${e.colors.gray[3]}`,transition:`opacity 150ms ${e.transitionTimingFunction}`},e.fn.hover({opacity:1})),{"&:active":e.activeStyles}),indicators:{position:"absolute",bottom:u?e.spacing.md:0,top:u?void 0:0,left:u?0:void 0,right:u?0:e.spacing.md,display:"flex",flexDirection:u?"row":"column",justifyContent:"center",gap:(0,D.h)(8),pointerEvents:"none"},indicator:{pointerEvents:"all",width:u?(0,D.h)(25):(0,D.h)(5),height:u?(0,D.h)(5):(0,D.h)(25),borderRadius:e.radius.xl,backgroundColor:e.white,boxShadow:e.shadows.sm,opacity:.6,transition:`opacity 150ms ${e.transitionTimingFunction}`,"&[data-active]":{opacity:1}}}}),X=Object.defineProperty,Y=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,ee=(e,n,t)=>n in e?X(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,en=(e,n)=>{for(var t in n||(n={}))Z.call(n,t)&&ee(e,t,n[t]);if(Y)for(var t of Y(n))Q.call(n,t)&&ee(e,t,n[t]);return e},et=(0,L.k)((e,{size:n,gap:t,orientation:r,includeGapInSize:i,breakpoints:o=[]})=>{let a=(n,t)=>{let o=(0,B.a)({size:n,sizes:e.spacing}),a=(0,D.h)(t);return en({flex:`0 0 ${a}`},i?{["horizontal"===r?"paddingRight":"paddingBottom"]:o}:{["horizontal"===r?"marginRight":"marginBottom"]:o})},c=o.some(e=>void 0!==e.slideGap||void 0!==e.slideSize),u=c?(0,R.I)(e,o).reduce((n,r)=>{let i="maxWidth"in r?"max-width":"min-width",o=(0,B.a)({size:"max-width"===i?r.maxWidth:r.minWidth,sizes:e.breakpoints}),c=void 0===r.slideGap?t:r.slideGap,u=(0,G.oI)(o)-("max-width"===i?1:0);return n[`@media (${i}: ${(0,D.h)(u)})`]=a(c,r.slideSize),n},{}):null;return{slide:en(en({position:"relative"},a(t,n)),u)}}),er=Object.defineProperty,ei=Object.getOwnPropertySymbols,eo=Object.prototype.hasOwnProperty,ea=Object.prototype.propertyIsEnumerable,ec=(e,n,t)=>n in e?er(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,eu=(e,n)=>{for(var t in n||(n={}))eo.call(n,t)&&ec(e,t,n[t]);if(ei)for(var t of ei(n))ea.call(n,t)&&ec(e,t,n[t]);return e},el=(e,n)=>{var t={};for(var r in e)eo.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&ei)for(var r of ei(e))0>n.indexOf(r)&&ea.call(e,r)&&(t[r]=e[r]);return t};let es=(0,a.forwardRef)((e,n)=>{var{children:t,className:r,size:i,gap:c,onClick:u}=e,l=el(e,["children","className","size","gap","onClick"]);let s=T(),{classes:d,cx:f}=et({gap:void 0===c?s.slideGap:c,size:void 0===i?s.slideSize:i,orientation:s.orientation,includeGapInSize:s.includeGapInSize,breakpoints:s.breakpoints},{name:"Carousel",classNames:s.classNames,styles:s.styles,unstyled:s.unstyled,variant:s.variant}),p=(0,a.useCallback)(e=>{var n;(null==(n=s.embla)?void 0:n.clickAllowed())&&(null==u||u(e))},[s.embla,u]);return a.createElement(o.x,eu({className:f(d.slide,r),ref:n,onClick:p},l),t)});function ed({dir:e,orientation:n,direction:t}){return"previous"===t?"horizontal"===n?90*("ltr"===e?1:-1):-180:"horizontal"===n?90*("ltr"===e?-1:1):0}es.displayName="@mantine/carousel/CarouselSlide";var ef=Object.defineProperty,ep=Object.getOwnPropertySymbols,em=Object.prototype.hasOwnProperty,ev=Object.prototype.propertyIsEnumerable,eg=(e,n,t)=>n in e?ef(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,eh=(e,n)=>{for(var t in n||(n={}))em.call(n,t)&&eg(e,t,n[t]);if(ep)for(var t of ep(n))ev.call(n,t)&&eg(e,t,n[t]);return e},eb=(e,n)=>{var t={};for(var r in e)em.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&ep)for(var r of ep(e))0>n.indexOf(r)&&ev.call(e,r)&&(t[r]=e[r]);return t};let ey={controlSize:26,controlsOffset:"sm",slideSize:"100%",slideGap:0,orientation:"horizontal",align:"center",slidesToScroll:1,includeGapInSize:!0,draggable:!0,dragFree:!1,loop:!1,speed:10,initialSlide:0,inViewThreshold:0,withControls:!0,withIndicators:!1,skipSnaps:!1,containScroll:"",withKeyboardEvents:!0},ex=(0,a.forwardRef)((e,n)=>{let t=(0,r.N4)("Carousel",ey,e),{children:c,className:u,getEmblaApi:l,onNextSlide:s,onPreviousSlide:d,onSlideChange:f,nextControlLabel:m,previousControlLabel:v,controlSize:g,controlsOffset:h,classNames:b,styles:y,unstyled:x,slideSize:w,slideGap:S,orientation:E,height:O,align:z,slidesToScroll:k,includeGapInSize:C,draggable:I,dragFree:P,loop:A,speed:j,initialSlide:T,inViewThreshold:L,withControls:B,withIndicators:R,plugins:D,nextControlIcon:G,previousControlIcon:$,breakpoints:H,skipSnaps:V,containScroll:F,withKeyboardEvents:W,variant:q}=t,U=eb(t,["children","className","getEmblaApi","onNextSlide","onPreviousSlide","onSlideChange","nextControlLabel","previousControlLabel","controlSize","controlsOffset","classNames","styles","unstyled","slideSize","slideGap","orientation","height","align","slidesToScroll","includeGapInSize","draggable","dragFree","loop","speed","initialSlide","inViewThreshold","withControls","withIndicators","plugins","nextControlIcon","previousControlIcon","breakpoints","skipSnaps","containScroll","withKeyboardEvents","variant"]),{classes:_,cx:K,theme:X}=J({controlSize:g,controlsOffset:h,orientation:E,height:O,includeGapInSize:C,breakpoints:H,slideGap:S},{name:"Carousel",classNames:b,styles:y,unstyled:x,variant:q}),[Y,Z]=N({axis:"horizontal"===E?"x":"y",direction:"horizontal"===E?X.dir:void 0,startIndex:T,loop:A,align:z,slidesToScroll:k,draggable:I,dragFree:P,speed:j,inViewThreshold:L,skipSnaps:V,containScroll:F},D),[Q,ee]=(0,a.useState)(0),[en,et]=(0,a.useState)(0),er=(0,a.useCallback)(e=>Z&&Z.scrollTo(e),[Z]),ei=(0,a.useCallback)(()=>{if(!Z)return;let e=Z.selectedScrollSnap();ee(e),null==f||f(e)},[Z,ee]),eo=(0,a.useCallback)(()=>{null==Z||Z.scrollPrev(),null==d||d()},[Z]),ea=(0,a.useCallback)(()=>{null==Z||Z.scrollNext(),null==s||s()},[Z]),ec=(0,a.useCallback)(e=>{W&&("ArrowRight"===e.key&&(e.preventDefault(),ea()),"ArrowLeft"===e.key&&(e.preventDefault(),eo()))},[Z]);(0,a.useEffect)(()=>{if(Z)return null==l||l(Z),ei(),et(Z.scrollSnapList().length),Z.on("select",ei),()=>{Z.off("select",ei)}},[Z,k]),(0,a.useEffect)(()=>{Z&&(Z.reInit(),et(Z.scrollSnapList().length),ee(e=>Math.min(Math.max(e,0),a.Children.toArray(c).length-1)))},[a.Children.toArray(c).length,k]);let eu=(null==Z?void 0:Z.canScrollPrev())||!1,el=(null==Z?void 0:Z.canScrollNext())||!1,es=Array(en).fill(0).map((e,n)=>a.createElement(i.k,{key:n,"data-active":n===Q||void 0,className:_.indicator,"aria-hidden":!0,tabIndex:-1,onClick:()=>er(n)}));return a.createElement(M,{value:{slideGap:S,slideSize:w,embla:Z,orientation:E,includeGapInSize:C,breakpoints:H,classNames:b,styles:y,unstyled:x,variant:q}},a.createElement(o.x,eh({className:K(_.root,u),ref:n,onKeyDownCapture:ec},U),a.createElement("div",{className:_.viewport,ref:Y},a.createElement("div",{className:_.container},c)),R&&a.createElement("div",{className:_.indicators},es),B&&a.createElement("div",{className:_.controls},a.createElement(i.k,{onClick:eo,className:_.control,"aria-label":v,"data-inactive":!eu||void 0,tabIndex:eu?0:-1},void 0!==$?$:a.createElement(p,{style:{transform:`rotate(${ed({dir:X.dir,orientation:E,direction:"previous"})}deg)`}})),a.createElement(i.k,{onClick:ea,className:_.control,"aria-label":m,"data-inactive":!el||void 0,tabIndex:el?0:-1},void 0!==G?G:a.createElement(p,{style:{transform:`rotate(${ed({dir:X.dir,orientation:E,direction:"next"})}deg)`}})))))});ex.Slide=es,ex.displayName="@mantine/carousel/Carousel";let ew=ex}}]);