"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[6043],{46043:function(s,e,a){a.r(e);var r=a(70885),l=a(72791),c=a(74569),d=a.n(c),n=a(59434),t=a(16871),i=a(80184);e.default=function(){var s=(0,n.v9)((function(s){return s.BASE_API_URL})),e=(0,t.s0)(),a=(0,l.useState)([]),c=(0,r.Z)(a,2),h=c[0],m=c[1];return(0,l.useEffect)((function(){localStorage.getItem("admin_login")||e("/dashboard/admin/login"),d().get("".concat(s,"/api/craftsmen/all-craftsmen-users-info")).then((function(s){m(s.data)})).catch((function(s){return console.log(s)}))}),[s,e]),(0,i.jsx)("div",{className:"handcraft-managment text-center",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h1",{children:"Handicraft Managment Page"}),h.length>0?(0,i.jsx)("section",{className:"handcrafts-info",children:h.map((function(e,a){return(0,i.jsxs)("div",{className:"handcraft-details-box mb-5",children:[(0,i.jsxs)("h5",{className:"mb-4",children:["Handcraft #",a+1," info :"]}),(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"User Name"}),(0,i.jsx)("td",{className:"p-3",children:e.user_name})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"Full Name"}),(0,i.jsx)("td",{className:"p-3",children:e.full_name})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"Born Date"}),(0,i.jsx)("td",{className:"p-3",children:e.birthday})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"Current City"}),(0,i.jsx)("td",{className:"p-3",children:e.city})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"Current Address"}),(0,i.jsx)("td",{className:"p-3",children:e.current_address})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"Scientific Certificate"}),(0,i.jsx)("td",{className:"p-3",children:e.scientific_certificate})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"Craft Specialization"}),(0,i.jsx)("td",{className:"p-3",children:e.craftsmanship})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"Actual Start Date"}),(0,i.jsx)("td",{className:"p-3",children:e.work_start_date})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"Current Work Address"}),(0,i.jsx)("td",{className:"p-3",children:e.work_address})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"Phone Number"}),(0,i.jsx)("td",{className:"p-3",children:e.landline_number})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"Mobile Number"}),(0,i.jsx)("td",{className:"p-3",children:e.phone_number})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"Whatsapp Number"}),(0,i.jsx)("td",{className:"p-3",children:e.whatsapp_number})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold p-3",children:"Email Address"}),(0,i.jsx)("td",{className:"p-3",children:e.email})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"fw-bold",children:"Files"}),e.file_paths.length>0?(0,i.jsx)("td",{children:e.file_paths.map((function(e,a){return(0,i.jsxs)("a",{href:"".concat(s,"/").concat(e),target:"_blank",className:"d-block btn btn-success mb-3",children:["Download File ",a+1]},a)}))}):(0,i.jsx)("td",{children:"Sorry Can't Files Added By User !!"})]})]})})]},e._id)}))}):(0,i.jsx)("p",{className:"alert alert-danger",children:"Sorry' Can't Users Now !!!"})]})})}}}]);
//# sourceMappingURL=6043.aef3a6a5.chunk.js.map