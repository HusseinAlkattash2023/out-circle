"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[9817],{49817:function(s,e,l){l.r(e);var a=l(70885),d=l(72791),c=l(74569),r=l.n(c),i=l(59434),n=l(16871),t=l(80184);e.default=function(){var s=(0,n.s0)(),e=(0,i.v9)((function(s){return s.BASE_API_URL})),l=(0,d.useState)([]),c=(0,a.Z)(l,2),h=c[0],x=c[1];return(0,d.useEffect)((function(){localStorage.getItem("admin_login")||s("/dashboard/admin/login"),r().get("".concat(e,"/api/individuals/all-individuals-users-info")).then((function(s){x(s.data)})).catch((function(s){return console.log(s)}))}),[e,s]),(0,t.jsx)("div",{className:"individuals-managment text-center",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h1",{children:"Individuals Managment Page"}),h.length>0?(0,t.jsx)("section",{className:"individuals-info",children:h.map((function(s,l){return(0,t.jsxs)("div",{className:"individual-details-box mb-5",children:[(0,t.jsxs)("h5",{className:"mb-4",children:["Individual #",l+1," info :"]}),(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"User Name"}),(0,t.jsx)("td",{className:"p-3",children:s.user_name})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Full Name"}),(0,t.jsx)("td",{className:"p-3",children:s.full_name})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Born Date"}),(0,t.jsx)("td",{className:"p-3",children:s.birthday})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Current City"}),(0,t.jsx)("td",{className:"p-3",children:s.city})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Current Address"}),(0,t.jsx)("td",{className:"p-3",children:s.current_address})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Scientific Certificate"}),(0,t.jsx)("td",{className:"p-3",children:s.scientific_certificate})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Details of the academic certificate"}),(0,t.jsx)("td",{className:"p-3",children:s.scientific_certificate_details})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Mobile Number"}),(0,t.jsx)("td",{className:"p-3",children:s.phone_number})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Whatsapp Number"}),(0,t.jsx)("td",{className:"p-3",children:s.whatsapp_number})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Email Address"}),(0,t.jsx)("td",{className:"p-3",children:s.email})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Current Work"}),(0,t.jsx)("td",{className:"p-3",children:s.current_work})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Work Address"}),(0,t.jsx)("td",{className:"p-3",children:s.work_address})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Work Start Date"}),(0,t.jsx)("td",{className:"p-3",children:s.work_start_date})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Work Phone Number"}),(0,t.jsx)("td",{className:"p-3",children:s.business_phone_number})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Extension"}),(0,t.jsx)("td",{className:"p-3",children:s.shunt})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Detailed Practical Experience"}),(0,t.jsx)("td",{className:"p-3",children:s.scientific_experience_details})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"Languages Skills"}),(0,t.jsx)("td",{className:"p-3",children:s.language_skills})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold p-3",children:"IT Skills"}),(0,t.jsx)("td",{className:"p-3",children:s.technical_skills})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"fw-bold",children:"Files"}),s.file_paths.length>0?(0,t.jsx)("td",{children:s.file_paths.map((function(s,l){return(0,t.jsxs)("a",{href:"".concat(e,"/").concat(s),target:"_blank",className:"d-block btn btn-success mb-3",children:["Download File ",l+1]},l)}))}):(0,t.jsx)("td",{children:"Sorry Can't Files Added By User !!"})]})]})})]},s._id)}))}):(0,t.jsx)("p",{className:"alert alert-danger",children:"Sorry' Can't Users Now !!!"})]})})}}}]);
//# sourceMappingURL=9817.eb737ab0.chunk.js.map