"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[8143],{98143:function(e,s,a){a.r(s);var r=a(1413),n=a(70885),t=a(72791),i=(a(4633),a(16871)),l=a(43504),u=a(75737),c=a.n(u),o=(a(98404),a(99e3)),d=a(39126),p=a(95581),m=a(44695),h=a(62797),x=a(74569),_=a.n(x),v=a(49766),y=a(71720),f=a(63402),k=a(59434),g=a(80184),j=h.Ry({user_name:h.Z_().required("Please enter your username"),email:h.Z_().email().required("Please enter your Email"),password:h.Z_().required("Please enter a password").min(4,"Password must be more than 4 characters"),confirm_password:h.Z_().oneOf([h.iH("password"),null],"Passwords must match"),full_name:h.Z_().required("Please enter your Full name"),mobile_number:h.Z_().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Please Enter your whatsapp number"),current_city:h.Z_().required("Please enter your current city"),current_address:h.Z_().required("Please enter your current address"),current_work:h.Z_().required("Please enter your current work"),experience:h.Z_().required("Please enter your practical experience details"),skills:h.Z_().required("Please enter your languages skills"),it_skills:h.Z_().required("Please enter your IT skills")});s.default=function(){var e,s,a,u,h,x,Z,A,b,w,N,C,P,E=(0,i.s0)(),I=(0,t.useState)({username:"",password:"",confirm_password:"",born_date:"",full_name:"",current_city:"",current_address:"",scientific_sertificate:"",phone_number:"",email:"",current_work:"",academic_certificate:"",work_address:"",work_date:"",work_number:"",extention:"",experience:"",skills:"",it_skills:""}),S=(0,n.Z)(I,2),R=S[0],U=S[1],q=(0,t.useState)(""),B=(0,n.Z)(q,2),F=B[0],J=B[1],T=(0,t.useState)(),D=(0,n.Z)(T,2),z=D[0],K=D[1],L=(0,t.useState)(),M=(0,n.Z)(L,2),W=M[0],H=M[1],X=(0,k.v9)((function(e){return e.BASE_API_URL})),Q=(0,p.cI)({resolver:(0,m.X)(j)}),G=Q.register,O=Q.handleSubmit,V=Q.formState.errors,Y=[{key:"user_name",value:R.username},{key:"email",value:R.email},{key:"password",value:R.password},{key:"confirm_password",value:R.confirm_password},{key:"birthday",value:R.born_date},{key:"full_name",value:R.full_name},{key:"city",value:R.current_city},{key:"current_address",value:R.current_address},{key:"scientific_certificate",value:R.scientific_sertificate},{key:"phone_number",value:F},{key:"whatsapp_number",value:R.phone_number},{key:"current_work",value:R.current_work},{key:"scientific_certificate_details",value:R.academic_certificate},{key:"work_address",value:R.work_address},{key:"work_start_date",value:R.work_date},{key:" business_phone_number",value:R.work_number},{key:"extention",value:R.extention},{key:"scientific_experience_details",value:R.experience},{key:"language_skills",value:R.skills},{key:"technical_skills",value:R.it_skills},{key:"file1",value:z},{key:"file2",value:W}],$=(0,t.useRef)(),ee=(0,t.useRef)();return(0,g.jsxs)("div",{className:"register_individuals",children:[(0,g.jsx)("header",{children:(0,g.jsxs)(l.rU,{to:"/register",children:[(0,g.jsx)("span",{children:"Back"}),(0,g.jsx)("img",{src:o,alt:""})]})}),(0,g.jsxs)("section",{className:"body",children:[(0,g.jsxs)("header",{children:[(0,g.jsx)("span",{className:"icon",children:(0,g.jsx)(d.im1,{})}),(0,g.jsx)("span",{className:"text",children:"New User / Individuals"})]}),(0,g.jsx)("div",{children:(0,g.jsx)(f.x7,{})}),(0,g.jsxs)("form",{onSubmit:O((function(){var e=new FormData;Y.map((function(s){return e.append(s.key,s.value)})),_().post("".concat(X,"/api/individuals/add-new-user"),e).then((function(e){"string"===typeof e.data?f.ZP.error("Sorry, the email you entered already exists, please enter another email..."):(f.ZP.success("Your account has been created successfully"),localStorage.setItem("user_individuals",JSON.stringify((0,r.Z)({},R))),setTimeout((function(){return E("/individuals")}),2e3))})).catch((function(e){console.error(e)}))})),encType:"multipart/form-data",children:[(0,g.jsxs)("div",{className:"bar",children:[(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({type:"text"},G("user_name")),{},{className:"input",value:R.username,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{username:e.target.value}))},placeholder:"User name"})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(e=V.user_name)||void 0===e?void 0:e.message})]}),(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},G("password")),{},{className:"input",value:R.password,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{password:e.target.value}))},placeholder:"Password",type:"password"})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(s=V.password)||void 0===s?void 0:s.message})]}),(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},G("confirm_password")),{},{className:"input",value:R.confirm_password,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{confirm_password:e.target.value}))},placeholder:"Confirm password",type:"password"})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(a=V.confirm_password)||void 0===a?void 0:a.message})]}),(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},G("full_name")),{},{className:"input",value:R.full_name,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{full_name:e.target.value}))},placeholder:"Full Name",type:"text"})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(u=V.full_name)||void 0===u?void 0:u.message})]}),(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},G("born_date")),{},{className:"input",ref:$,type:"text",placeholder:"Born date",value:R.born_date,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{born_date:e.target.value}))},onFocus:function(){return $.current.type="date"},onBlur:function(){return $.current.type="text"}})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(h=V.born_date)||void 0===h?void 0:h.message})]}),(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},G("current_city")),{},{className:"input",value:R.current_city,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{current_city:e.target.value}))},placeholder:"Current city",type:"text"})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(x=V.current_city)||void 0===x?void 0:x.message})]}),(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},G("current_address")),{},{className:"input",value:R.current_address,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{current_address:e.target.value}))},placeholder:"Current Address",type:"text"})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(Z=V.current_address)||void 0===Z?void 0:Z.message})]}),(0,g.jsx)("div",{className:"my-3 input_",children:(0,g.jsx)("input",{className:"input",value:R.scientific_sertificate,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{scientific_sertificate:e.target.value}))},placeholder:"Scientific sertificate",type:"text"})}),(0,g.jsx)("div",{className:"my-3 input_",children:(0,g.jsx)("input",{className:"input",value:R.academic_certificate,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{academic_certificate:e.target.value}))},placeholder:"Details of the academic certificate",type:"text"})}),(0,g.jsx)("div",{className:"my-3 input_",children:(0,g.jsx)(c(),{value:F,onChange:J,className:"phone_number",placeholder:"Mobile number",defaultCountry:"sy",enableSearchField:!0})}),(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},G("mobile_number")),{},{className:"input",value:R.phone_number,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{phone_number:e.target.value}))},placeholder:"Whatsapp number",type:"number"})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(A=V.mobile_number)||void 0===A?void 0:A.message})]}),(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},G("email")),{},{className:"input",value:R.email,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{email:e.target.value}))},placeholder:"Email Address",type:"email"})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(b=V.email)||void 0===b?void 0:b.message})]}),(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},G("current_work")),{},{className:"input",value:R.current_work,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{current_work:e.target.value}))},placeholder:"Current Work",type:"text"})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(w=V.current_work)||void 0===w?void 0:w.message})]}),(0,g.jsx)("div",{className:"my-3 input_",children:(0,g.jsx)("input",{className:"input",value:R.work_address,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{work_address:e.target.value}))},placeholder:"Work Address",type:"text"})}),(0,g.jsx)("div",{className:"my-3 input_",children:(0,g.jsx)("input",{className:"input",ref:ee,type:"text",onFocus:function(){return ee.current.type="date"},onBlur:function(){return ee.current.type="text"},value:R.work_date,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{work_date:e.target.value}))},placeholder:"Work Start date"})}),(0,g.jsx)("div",{className:"my-3 input_",children:(0,g.jsx)("input",{className:"input",value:R.work_number,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{work_number:e.target.value}))},placeholder:"Work phone number",type:"number"})}),(0,g.jsx)("div",{className:"my-3 input_",children:(0,g.jsx)("input",{className:"input",value:R.extention,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{extention:e.target.value}))},placeholder:"Extention",type:"number"})}),(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},G("experience")),{},{className:"input",value:R.experience,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{experience:e.target.value}))},placeholder:"Detialed practical experience",type:"text"})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(N=V.experience)||void 0===N?void 0:N.message})]}),(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},G("skills")),{},{className:"input",value:R.skills,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{skills:e.target.value}))},placeholder:"Languages skills",type:"text"})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(C=V.skills)||void 0===C?void 0:C.message})]}),(0,g.jsxs)("div",{className:"my-3 input_",children:[(0,g.jsx)("input",(0,r.Z)((0,r.Z)({},G("it_skills")),{},{className:"input",value:R.it_skills,onChange:function(e){U((0,r.Z)((0,r.Z)({},R),{},{it_skills:e.target.value}))},placeholder:"IT skills",type:"text"})),(0,g.jsx)("br",{}),(0,g.jsx)("span",{style:{color:"red"},children:null===(P=V.it_skills)||void 0===P?void 0:P.message})]}),(0,g.jsxs)("div",{className:"my-3 input_1",children:[(0,g.jsxs)("label",{htmlFor:"file1",children:[(0,g.jsx)("p",{children:"Upload last academic certificate"}),(0,g.jsx)("img",{src:y,alt:"",width:"30"})]}),(0,g.jsx)("input",{className:"input text-light",id:"file1",type:"file",onChange:function(e){return K(e.target.files[0])}})]}),(0,g.jsxs)("div",{className:"my-3 input_1",children:[(0,g.jsxs)("label",{htmlFor:"file2",children:[(0,g.jsx)("p",{children:"Upload Other certificate orobtained"}),(0,g.jsx)("img",{src:y,alt:"",width:"30"})]}),(0,g.jsx)("input",{className:"input text-light",name:"uploadFile",id:"file2",placeholder:"Upload file",type:"file",onChange:function(e){return H(e.target.files[0])}})]})]}),(0,g.jsx)("button",{className:"mx-3 submit",type:"submit",children:"Register"})]})]}),(0,g.jsx)("div",{className:"background3",children:(0,g.jsx)("img",{src:v,alt:""})})]})}},4633:function(){},49766:function(e,s,a){e.exports=a.p+"static/media/Mask Group -5.f82a3042071a32e5ab60.png"},71720:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAmlJREFUaEPtmf0xBEEQxd9FgAgQASJABIgAESACRIAIEAEZIAMiQASIgPqV7qq1dnd2+vZwavqfu9qPmX6v3/RsvRlpymM05fmrAPjtCg5RgTVJG5KWJfH/SdK9pFtJl5JeJwlyHACzkg4l7XckCJhdAzMRHFEAJH9jrL9JOrUkYX3BrgNs1bIGxMUkEEQBkPCepAdJmyabpvwAcWIyWul4LowtAgCdwz7Mo3tk0hUOluqshzNteTECwBM6lnTUIyHkBsgZSXNDL+oIAJhE27DJ/z4ReafPuKGN7N1GroNHWgC7awBGpehYTVXjHmNyLzsiFWgDkEqyDUDbeL3AFAAVmkoFemmm9lCRUJHQZwslImoIvVTaaG0dlgrkdq8ioSKhCgOR1lUkVCRUJNS89ZfP6dwNKfoB9W+7kPtF+KKYWNXg2lKLk/FnvoVIGP9n3mxEXAaMXZy5HTPCsB2rZi+e0ctPf057kk2+EFW4NhOrLuktu1e97lV7Nk81exlEdmI3qQ7M1K1PCsu4d9iOMMzzdChkVA/3TvGSAJMdEQA+Kd4/0hgncKy3JbWRkRw7AgCGH23kHHuxnozLh+uLPUziRjARAAzkzLEe6Di5pzBICxL4PUscknRWIQqAidE0HQeNs0D7guDdK9M85wtUou+738BEATAQi5Tksc1JgFMYOlBXcBhybsxzvkDyTYs7qX1/YBwADgI5sUkRAPADPtgluEeiAAYAkTrZ+TEATIQk6Ey4z6nw8zTabFg21UnGrUB1LLoTDDvbrA9nm8WO3KhQ6kgqRcKX+0MCyJp4qIcLgKGYjI4z9RX4AJDd5DEh+aS6AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=8143.e0ce43b8.chunk.js.map