"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[5397],{35397:function(e,s,r){r.r(s);var n=r(74165),t=r(15861),a=r(70885),c=r(16296),l=r(72791),d=r(74569),i=r.n(d),o=r(59434),h=r(16871),m=r(80184);s.default=function(){var e=(0,h.s0)(),s=(0,o.v9)((function(e){return e.BASE_API_URL})),r=(0,l.useState)([]),d=(0,a.Z)(r,2),x=d[0],u=d[1],p=(0,l.useState)([[]]),j=(0,a.Z)(p,2),f=j[0],b=j[1],N=(0,l.useCallback)((function(){return new Promise((function(e,r){i().get("".concat(s,"/api/companies/all-compaines")).then((function(s){u(s.data),e(s.data)})).catch((function(e){return r(e)}))}))})),y=(0,l.useCallback)(function(){var e=(0,t.Z)((0,n.Z)().mark((function e(r){var t,a,l,d,o,h,m,x,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=!1,l=!1,e.prev=3,o=(0,c.Z)(r);case 5:return e.next=7,o.next();case 7:if(!(a=!(h=e.sent).done)){e.next=19;break}return m=h.value,e.next=11,i().get("".concat(s,"/api/partners/partners-info?company_id=").concat(m._id));case 11:return x=e.sent,e.next=14,x.data;case 14:u=e.sent,t.push(u);case 16:a=!1,e.next=5;break;case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(3),l=!0,d=e.t0;case 25:if(e.prev=25,e.prev=26,!a||null==o.return){e.next=30;break}return e.next=30,o.return();case 30:if(e.prev=30,!l){e.next=33;break}throw d;case 33:return e.finish(30);case 34:return e.finish(25);case 35:b(t);case 36:case"end":return e.stop()}}),e,null,[[3,21,25,35],[26,,30,34]])})));return function(s){return e.apply(this,arguments)}}());return(0,l.useEffect)((function(){localStorage.getItem("admin_login")?N().then((function(e){y(e)})).catch((function(e){return console.log(e)})):e("/dashboard/admin/login")}),[s,N,y,e]),(0,m.jsx)("div",{className:"corporate-managment text-center",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h1",{children:"Corporate Managment Page"}),x.length>0?(0,m.jsx)("section",{className:"companies-info",children:x.map((function(e,r){return(0,m.jsxs)(l.Fragment,{children:[(0,m.jsxs)("div",{className:"company-details-box mb-5",children:[(0,m.jsxs)("h5",{className:"mb-4",children:["Corporate #",r+1," info :"]}),(0,m.jsx)("table",{children:(0,m.jsxs)("tbody",{children:[(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold p-3",children:"User Name"}),(0,m.jsx)("td",{className:"p-3",children:e.user_name})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Company Name"}),(0,m.jsx)("td",{className:"p-3",children:e.company_name})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Type Of Company"}),(0,m.jsx)("td",{className:"p-3",children:e.company_type})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Company Record Number"}),(0,m.jsx)("td",{className:"p-3",children:e.company_record_number})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Company Record Date"}),(0,m.jsx)("td",{className:"p-3",children:e.company_record_history})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Current City"}),(0,m.jsx)("td",{className:"p-3",children:e.city})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Current Address"}),(0,m.jsx)("td",{className:"p-3",children:e.current_address})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Company's detailed bussiness"}),(0,m.jsx)("td",{className:"p-3",children:e.current_company_activity_details})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Company Email Address"}),(0,m.jsx)("td",{className:"p-3",children:e.email})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Company Mobile Number"}),(0,m.jsx)("td",{className:"p-3",children:e.phone_number})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Actual Start Date"}),(0,m.jsx)("td",{className:"p-3",children:e.work_start_date})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Phone Number"}),(0,m.jsx)("td",{className:"p-3",children:e.landline_number})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Fax Number"}),(0,m.jsx)("td",{className:"p-3",children:e.fax_number})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Number Of Partners"}),(0,m.jsx)("td",{className:"p-3",children:e.number_of_partners})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Files"}),e.file_paths.length>0?(0,m.jsx)("td",{children:e.file_paths.map((function(e,r){return(0,m.jsxs)("a",{href:"".concat(s,"/").concat(e),target:"_blank",className:"d-block btn btn-success mb-3",children:["Download File ",r+1]},r)}))}):(0,m.jsx)("td",{children:"Sorry Can't Files Added By User !!"})]}),(0,m.jsx)("tr",{children:(0,m.jsx)("td",{className:"fw-bold text-center bg-info",colSpan:"2",children:"Partners Info"})}),(0,m.jsx)("tr",{children:(0,m.jsx)("td",{colSpan:"2",children:function(){for(var e=[],s=r;s<f.length;s++){for(var n=0;n<f[s].length;n++)e.push((0,m.jsxs)("table",{className:"mb-3",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("th",{className:"fw-bold text-center bg-secondary text-white",colSpan:"2",children:["Partner #",r+1," info :"]})}),(0,m.jsxs)("tbody",{children:[(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold p-3",children:"Partner's Full Name"}),(0,m.jsx)("td",{className:"p-3",children:f[s][n].full_name})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Born Date"}),(0,m.jsx)("td",{className:"p-3",children:f[s][n].birthday})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Personal Mobile Number"}),(0,m.jsx)("td",{className:"p-3",children:f[s][n].phone_number})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Whatsapp Number"}),(0,m.jsx)("td",{className:"p-3",children:f[s][n].whatsapp_number})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Landline Extension"}),(0,m.jsx)("td",{className:"p-3",children:f[s][n].land_phone_extension})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Personal Email Address"}),(0,m.jsx)("td",{className:"p-3",children:f[s][n].email})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"fw-bold",children:"Participation Rate"}),(0,m.jsx)("td",{className:"p-3",children:f[s][n].participation_rate})]})]})]},f[s][n]._id));break}return e}()})})]})})]},r),(0,m.jsx)("hr",{style:{borderWidth:"12px",color:"000"}})]})}))}):(0,m.jsx)("p",{className:"alert alert-danger",children:"Sorry' Can't Users Now !!!"})]})})}},16296:function(e,s,r){function n(e){var s,r,n,a=2;for("undefined"!=typeof Symbol&&(r=Symbol.asyncIterator,n=Symbol.iterator);a--;){if(r&&null!=(s=e[r]))return s.call(e);if(n&&null!=(s=e[n]))return new t(s.call(e));r="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function t(e){function s(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var s=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:s}}))}return t=function(e){this.s=e,this.n=e.next},t.prototype={s:null,n:null,next:function(){return s(this.n.apply(this.s,arguments))},return:function(e){var r=this.s.return;return void 0===r?Promise.resolve({value:e,done:!0}):s(r.apply(this.s,arguments))},throw:function(e){var r=this.s.return;return void 0===r?Promise.reject(e):s(r.apply(this.s,arguments))}},new t(e)}r.d(s,{Z:function(){return n}})}}]);
//# sourceMappingURL=5397.af576546.chunk.js.map