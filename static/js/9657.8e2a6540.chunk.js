"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[9657],{19657:function(e,s,t){t.r(s);var n=t(70885),a=t(72791),c=t(74569),i=t.n(c),l=t(59434),r=t(80184);s.default=function(){var e=(0,l.v9)((function(e){return e.BASE_API_URL})),s=(0,a.useState)([]),t=(0,n.Z)(s,2),c=t[0],d=t[1];return(0,a.useEffect)((function(){i().get("".concat(e,"/api/institutes/all-institutes-info")).then((function(e){d(e.data)})).catch((function(e){return console.log(e)}))}),[e]),(0,r.jsx)("div",{className:"institutes-managment text-center",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h1",{children:"Institutes Managment Page"}),c.length>0?(0,r.jsx)("section",{className:"institutes-info",children:c.map((function(s,t){return(0,r.jsxs)("div",{className:"institute-details-box mb-5",children:[(0,r.jsxs)("h5",{className:"mb-4",children:["Institute #",t+1," info :"]}),(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"fw-bold p-3",children:"User Name"}),(0,r.jsx)("td",{className:"p-3",children:s.user_name})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"fw-bold",children:"Files"}),s.file_paths.length>0?(0,r.jsx)("td",{children:s.file_paths.map((function(s,t){return(0,r.jsxs)("a",{href:"".concat(e,"/").concat(s),target:"_blank",className:"d-block btn btn-success mb-3",children:["Download File ",t+1]},t)}))}):(0,r.jsx)("td",{children:"Sorry Can't Files Added By User !!"})]})]})})]},s._id)}))}):(0,r.jsx)("p",{className:"alert alert-danger",children:"Sorry' Can't Users Now !!!"})]})})}}}]);
//# sourceMappingURL=9657.8e2a6540.chunk.js.map