"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[3762],{54179:function(s,e,a){a.r(e),a.d(e,{default:function(){return z}});var i=a(70885),c=a(72791),n=a(96129),t=a(79595),r=a(44437),l=a(11561),d=a(86195),m=a(99826),o=a(89539),x=a(43504),h=a(58133),u=a(14938),j=a(82890),p=a(77433),g=a(58108),f=a(66607),N=a(12502),b=a.p+"static/media/Component 16 \u2013 5.1be713f40de8e6842a7a.png",v=a.p+"static/media/Component 16 \u2013 4.29a6d62508ee897856ee.png",w=a.p+"static/media/Component 16 \u2013 3.c74c350b4ce90653e79b.png",_=a.p+"static/media/Component 16 \u2013 2.09c09d13f54acbd9bfba.png",k=a.p+"static/media/Component 16 \u2013 1.1c6cf522e844bdfee8eb.png",C=a.p+"static/media/16.8017ba52eaf121512c73.png",y=a.p+"static/media/20.e2951d0e6536e3a5494e.png",U=a.p+"static/media/19.b4c0210a725a0723239a.png",E=a.p+"static/media/18.fa5238c85e5ace4a1498.png",Z=a.p+"static/media/17.ef3ea7e106addd5aa460.png",A=a(16871),S=(a(38613),a.p,a(59434)),W=a(74569),L=a.n(W),R=a(96173),D=a(58563),I=(a(4676),a(15880),a(84432),a(1281)),P=a(80184);function q(){var s=window;return{innerWidth:s.innerWidth,innerHeight:s.innerHeight}}var z=function(){var s=(0,c.useState)(q()),e=(0,i.Z)(s,2),a=e[0],W=e[1];(0,c.useEffect)((function(){function s(){W(q())}return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[]);var z=a.innerWidth,B=(0,c.useState)([]),G=(0,i.Z)(B,2),H=G[0],O=G[1],F=(0,c.useState)([]),K=(0,i.Z)(F,2),J=K[0],M=K[1],Q=(0,S.v9)((function(s){return s.BASE_API_URL})),T=(0,c.useCallback)((function(){return new Promise((function(s,e){L().get("".concat(Q,"/api/news/all-news")).then((function(e){s(e.data)})).catch((function(s){return e(s)}))}))}),[Q]),V=(0,c.useCallback)((function(){return new Promise((function(s,e){L().get("".concat(Q,"/api/ads/all-ads")).then((function(e){s(e.data)})).catch((function(s){return e(s)}))}))}),[Q]);(0,c.useEffect)((function(){T().then((function(s){M(s),V().then((function(s){O(s)})).catch((function(s){return console.log(s)}))})).catch((function(s){return console.log(s)}))}),[Q,T,V]);var X=(0,A.s0)();return(0,P.jsxs)("div",{className:"home",children:[(0,P.jsx)("img",{className:"img2",src:N,alt:""}),(0,P.jsxs)("header",{className:"_header1",children:[(0,P.jsx)("button",{className:"Ar",style:{borderRadius:"20px 0px 0px 20px",width:"40px",border:"2px solid #000"},onClick:function(){return X("/ar")},children:"Ar"}),(0,P.jsx)("button",{className:"En",style:{borderRadius:"0px 20px 20px 0px",width:"40px",border:"2px solid #000"},onClick:function(){return X("/")},children:"En"})]}),(0,P.jsx)("header",{className:"_header2"}),(0,P.jsx)(x.rU,{to:"/news",children:(0,P.jsx)("marquee",{direction:"left",children:J.map((function(s){return(0,P.jsxs)(c.Fragment,{children:[(0,P.jsx)("span",{children:s.content}),(0,P.jsx)("span",{children:"|"})]},s._id)}))})}),(0,P.jsxs)("div",{children:[(0,P.jsx)("div",{className:"login1",children:(0,P.jsxs)(x.rU,{to:"/login",className:"mx-1",style:{display:"flex",alignItems:"center"},children:[(0,P.jsx)("div",{style:{border:"2px solid black",color:"black"},children:"Login"}),(0,P.jsx)("img",{src:g,alt:"",width:"36px",style:{background:"#DCECDD",borderRadius:"50%"}})]})}),(0,P.jsx)("div",{className:"active",children:z<1300&&(0,P.jsx)(R.Z,{item1:"Why us",item2:"Goals & Advanteges",item3:"Contact us"})}),(0,P.jsxs)("div",{className:"main",children:[(0,P.jsx)("img",{className:"outcircle",src:f.Z,alt:"",width:"154"}),(0,P.jsxs)("div",{className:"cards",children:[(0,P.jsxs)(x.rU,{to:"/corporate",className:"hov",onClick:function(){X("/login")},children:[(0,P.jsx)("img",{className:"img_ mx-3",src:b,alt:""}),(0,P.jsx)("img",{className:"iui",src:C,alt:""})]}),(0,P.jsxs)(x.rU,{to:"/institute",className:"hov",children:[(0,P.jsx)("img",{className:"img_ mx-3",src:v,alt:""}),(0,P.jsx)("img",{className:"iui",src:y,alt:""})]}),(0,P.jsxs)(x.rU,{to:"/scientific",className:"hov",children:[(0,P.jsx)("img",{className:"img_ mx-3",src:w,alt:""}),(0,P.jsx)("img",{className:"iui",src:U,alt:""})]}),(0,P.jsxs)(x.rU,{to:"/handicraft",className:"hov",children:[(0,P.jsx)("img",{className:"img_ mx-3",src:_,alt:""}),(0,P.jsx)("img",{className:"iui",src:E,alt:""})]}),(0,P.jsxs)(x.rU,{to:"/individuals",className:"hov",children:[(0,P.jsx)("img",{className:"img_ mx-3",src:k,alt:""}),(0,P.jsx)("img",{className:"iu",src:Z,alt:""})]})]})]})]}),(0,P.jsxs)("div",{className:"sidebar_",children:[(0,P.jsx)(x.rU,{to:"/",className:"logo",children:(0,P.jsx)("img",{src:p.Z,alt:""})}),(0,P.jsxs)("nav",{className:"navbar_",children:[(0,P.jsxs)(x.rU,{to:"/why-us",className:"my-4 icon1",children:[(0,P.jsx)("img",{src:h,alt:"",width:"60px"}),(0,P.jsx)("span",{children:"Why us"})]}),(0,P.jsxs)(x.rU,{to:"/goals",className:"my-4 icon2",children:[(0,P.jsx)("img",{src:u,alt:"",width:"60px"}),(0,P.jsxs)("span",{children:["Goals&",(0,P.jsx)("br",{}),"Advanteges"]})]}),(0,P.jsxs)(x.rU,{to:"/contact-us",className:"my-4 icon3",children:[(0,P.jsx)("img",{src:j,alt:"",width:"60px"}),(0,P.jsx)("span",{children:"Contact us"})]})]})]}),(0,P.jsxs)("footer",{children:[(0,P.jsx)(D.tq,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{clickable:!0},modules:[I.pt],className:"mySwiper",children:H.map((function(s){return(0,P.jsx)(D.o5,{children:(0,P.jsx)(x.rU,{to:"/ads",children:(0,P.jsx)("img",{className:"ads_space",src:"http://localhost:8000/".concat(s.file_paths[0]),alt:""})})},s._id)}))}),(0,P.jsxs)("div",{className:"icons",children:[(0,P.jsxs)("ul",{children:[(0,P.jsx)("li",{className:"mx-0",children:(0,P.jsx)("a",{href:"https://wa.me/+963946202311",target:"_blank",children:(0,P.jsx)("img",{src:n,alt:""})})}),(0,P.jsx)("li",{className:"mx-0",children:(0,P.jsx)("a",{href:"https://m.facebook.com/profile.php?id=100088302496274&mibextid=ZbWKwL",target:"_blank",children:(0,P.jsx)("img",{src:t,alt:""})})}),(0,P.jsx)("li",{className:"mx-0",children:(0,P.jsx)("a",{href:"",target:"_blank",children:(0,P.jsx)("img",{src:r,alt:""})})}),(0,P.jsx)("li",{className:"mx-0",children:(0,P.jsx)("a",{href:"http://t.me/OutCircle",target:"_blank",children:(0,P.jsx)("img",{src:l,alt:""})})}),(0,P.jsx)("li",{className:"mx-0",children:(0,P.jsx)("a",{href:"",target:"_blank",children:(0,P.jsx)("img",{src:d,alt:""})})})]}),(0,P.jsxs)("div",{className:"ms-4",children:[(0,P.jsx)(x.rU,{to:"",className:"me-1",children:(0,P.jsx)("img",{src:o,alt:""})}),(0,P.jsx)(x.rU,{to:"",className:"ms-1",children:(0,P.jsx)("img",{src:m,alt:""})})]})]})]})]})}}}]);
//# sourceMappingURL=3762.26c1fb31.chunk.js.map