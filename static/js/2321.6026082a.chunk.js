"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[2321],{77433:function(n,e,i){i(72791);e.Z=i.p+"static/media/Group 360.9759f5e39d748aed772b37c333329921.svg"},32321:function(n,e,i){i.r(e);var t=i(70885),c=i(72791),s=(i(78711),i(43504)),a=i(99e3),r=i(77433),l=i(99394),d=i(59434),o=i(74569),u=i.n(o),h=i(80184);function f(){var n=window;return{innerWidth:n.innerWidth,innerHeight:n.innerHeight}}e.default=function(){var n=(0,c.useState)([]),e=(0,t.Z)(n,2),i=e[0],o=e[1],m=(0,c.useState)(f()),x=(0,t.Z)(m,2),j=x[0],v=x[1];(0,c.useEffect)((function(){function n(){v(f())}return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]);var p=j.innerWidth,g=(0,d.v9)((function(n){return n.BASE_API_URL})),w=localStorage.getItem("email"),N=(0,c.useCallback)((function(){return new Promise((function(n,e){u().get("".concat(g,"/api/notifications/all-notifications?email=").concat(w)).then((function(e){n(e.data)})).catch((function(n){return e(n)}))}))}),[g,w]);return(0,c.useEffect)((function(){N().then((function(n){o(n)})).catch((function(n){return console.log(n)}))}),[g,N]),(0,h.jsx)("div",{className:"notifications",children:(0,h.jsxs)("div",{className:"notification",children:[(0,h.jsx)("header",{children:(0,h.jsxs)(s.rU,{className:"back_ar",to:"/individuals",children:[(0,h.jsx)("span",{children:"\u0631\u062c\u0648\u0639"}),(0,h.jsx)("img",{src:a,alt:"",width:"30px"})]})}),(0,h.jsx)("div",{className:"rectangle_ar",children:i.map((function(n){return(0,h.jsx)("div",{className:"content",children:(0,h.jsx)("p",{className:"news_ads",children:n.content})},n._id)}))}),(0,h.jsxs)("div",{className:"side_ar",children:[(0,h.jsx)(s.rU,{to:"/",children:(0,h.jsx)("img",{src:r.Z,alt:""})}),(0,h.jsx)("span",{className:"title",children:"\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a"})]}),(0,h.jsx)("div",{children:p<600&&(0,h.jsxs)("div",{className:"head",children:[(0,h.jsx)("span",{className:"title",children:"\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a"}),(0,h.jsx)(s.rU,{to:"/",children:(0,h.jsx)("img",{src:l.Z,alt:""})})]})})]})})}},78711:function(){}}]);
//# sourceMappingURL=2321.6026082a.chunk.js.map