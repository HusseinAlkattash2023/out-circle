"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[3947],{93947:function(n,e,t){t.r(e),t.d(e,{default:function(){return o}});var c=t(70885),a=t(72791),r=t(59434),u=t(74569),i=t.n(u),s=t(80184),o=function(){localStorage.getItem("ads_id");var n=(0,a.useState)([]),e=(0,c.Z)(n,2),t=e[0],u=e[1],o=(0,r.v9)((function(n){return n.BASE_API_URL})),f=(0,a.useCallback)((function(){return new Promise((function(n,e){i().get("".concat(o,"/api/ads/ads-info/6392b9b0c403c854be2f0ef4")).then((function(e){n(e.data)})).catch((function(n){return e(n)}))}))}),[o]);return(0,a.useEffect)((function(){f().then((function(n){u(n),console.log(n)})).catch((function(n){return console.log(n)}))}),[o,f]),(0,s.jsx)("div",{className:"details_ads",children:(0,s.jsx)("div",{className:"rectangle",children:t.map((function(n){return(0,s.jsx)(a.Fragment,{className:"item",children:(0,s.jsx)("p",{children:n.text})},n._id)}))})})}}}]);
//# sourceMappingURL=3947.8c2acb9f.chunk.js.map