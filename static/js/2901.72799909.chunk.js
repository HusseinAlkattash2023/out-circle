"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[2901],{42901:function(e,t,n){n.r(t);var a=n(70885),s=n(72791),r=n(74569),d=n.n(r),i=n(59434),l=n(16871),c=n(63402),o=n(80184);t.default=function(){var e=(0,l.s0)(),t=(0,s.useState)(""),n=(0,a.Z)(t,2),r=n[0],u=n[1],m=(0,s.useState)(),f=(0,a.Z)(m,2),p=f[0],h=f[1],x=(0,s.useState)(),b=(0,a.Z)(x,2),g=b[0],j=b[1],v=(0,i.v9)((function(e){return e.BASE_API_URL}));(0,s.useEffect)((function(){localStorage.getItem("admin_login")||e("/dashboard/admin/login")}),[e]);return(0,o.jsx)("div",{className:"add-ads text-center",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("div",{children:(0,o.jsx)(c.x7,{})}),(0,o.jsx)("h1",{children:"Add Ads"}),(0,o.jsxs)("form",{className:"add-ads-form mb-4",onSubmit:function(t){t.preventDefault();var n=new FormData;n.append("text",r),n.append("yourFile",p);for(var a=0;a<g.length;a++)n.append("file"+a,g[a]);d().post("".concat(v,"/api/ads/add-new-ads"),n).then((function(t){c.ZP.success("\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0628\u0646\u062c\u0627\u062d"),setTimeout((function(){e("/dashboard/admin/ads-managment")}),3e3)})).catch((function(e){return console.log(e)}))},encType:"multipart/form-data",children:[(0,o.jsx)("textarea",{type:"text",placeholder:"Please Enter Your Ads Text",className:"form-control mb-4",onChange:function(e){return u(e.target.value)},style:{resize:"none"},required:!0}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{children:"Add Your Ads Image: "}),(0,o.jsx)("input",{type:"file",className:"form-control mb-4",onChange:function(e){return h(e.target.files[0])},required:!0})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{children:"Add Customer's Files: "}),(0,o.jsx)("input",{type:"file",className:"form-control mb-4",onChange:function(e){return j(e.target.files)},multiple:!0,required:!0})]}),(0,o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add Ads"})]})]})})}}}]);
//# sourceMappingURL=2901.72799909.chunk.js.map