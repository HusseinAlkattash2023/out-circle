"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[7825],{47825:function(e,n,s){s.r(n);var i=s(70885),r=s(72791),t=s(43504),c=s(74569),a=s.n(c),d=s(59434),l=s(99e3),h=s(77433),u=(s(39263),s(99394)),o=s(80184);function f(){var e=window;return{innerWidth:e.innerWidth,innerHeight:e.innerHeight}}n.default=function(){var e=(0,r.useState)(f()),n=(0,i.Z)(e,2),s=n[0],c=n[1];(0,r.useEffect)((function(){function e(){c(f())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var x=s.innerWidth,j=(0,r.useState)([]),v=(0,i.Z)(j,2),p=v[0],m=v[1],w=(0,d.v9)((function(e){return e.BASE_API_URL}));return(0,r.useEffect)((function(){a().get("".concat(w,"/api/news/all-news")).then((function(e){var n=e.data;m(n)})).catch((function(e){return console.log(e)}))}),[w]),(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:"news",children:[(0,o.jsx)("header",{children:(0,o.jsxs)(t.rU,{className:"back_ar",to:"/ar",children:[(0,o.jsx)("span",{children:"\u0631\u062c\u0648\u0639"}),(0,o.jsx)("img",{src:l,alt:"",width:"30px"})]})}),(0,o.jsx)("div",{className:"rectangle_ar",children:p.map((function(e){return(0,o.jsx)("div",{className:"content",children:(0,o.jsx)("p",{children:e.content})},e._id)}))}),(0,o.jsxs)("div",{className:"side_ar",children:[(0,o.jsx)(t.rU,{to:"/",children:(0,o.jsx)("img",{src:h.Z,alt:""})}),(0,o.jsx)("span",{className:"title",children:"\u0627\u0644\u0623\u062e\u0628\u0627\u0631"})]}),(0,o.jsx)("div",{children:x<600&&(0,o.jsxs)("div",{className:"head",children:[(0,o.jsx)("span",{className:"title ar",children:"\u0627\u0644\u0623\u062e\u0628\u0627\u0631"}),(0,o.jsx)(t.rU,{to:"/",children:(0,o.jsx)("img",{src:u.Z,alt:""})})]})})]})})}},39263:function(){}}]);
//# sourceMappingURL=7825.b612085e.chunk.js.map