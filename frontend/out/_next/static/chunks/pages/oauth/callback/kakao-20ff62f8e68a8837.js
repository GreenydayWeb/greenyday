(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{7594:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oauth/callback/kakao",function(){return e(5529)}])},5529:function(n,t,e){"use strict";e.r(t);var o=e(828),r=e(7294),a=e(594),c=e(417),u=e(1163),i=e.n(u),s=1;t.default=function(){var n=(0,o.Z)((0,r.useState)(""),2),t=n[0],e=n[1],u=(0,o.Z)((0,r.useState)(!1),2),f=u[0],l=u[1];(0,r.useEffect)(function(){e(new URL(window.location.href).searchParams.get("code"))},[]),t&&!f&&(s++,l(!0),a.Z.get("".concat(c.T,"/api/accounts/login/kakao?code=").concat(t),{params:{code:t}}).then(function(n){return console.log(n.data),i().push("/")}).catch(function(n){return console.error(n.response)}))}},828:function(n,t,e){"use strict";e.d(t,{Z:function(){return a}});var o=e(3375),r=e(1566);function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||(0,o.Z)(n,t)||(0,r.Z)(n,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=7594)}),_N_E=n.O()}]);