"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[4980],{54980:function(e,s,a){a.r(s);var r=a(1413),n=a(70885),t=a(72791),i=(a(27604),a(75737)),l=a.n(i),u=(a(98404),a(99e3)),c=a(39126),o=a(16871),d=a(43504),m=a(95581),p=a(44695),h=a(62797),y=a(71720),v=a(7508),x=a(74569),_=a.n(x),f=a(63402),g=a(59434),A=a(80184),j=h.Ry({username:h.Z_().required("Please Enter your username"),email:h.Z_().email().required("Please enter your Email"),password:h.Z_().required("Please enter a password").min(4,"Password too short"),confirm_password:h.Z_().oneOf([h.iH("password"),null],"Passwords must match"),full_name:h.Z_().required("Please enter your Full name"),current_city:h.Z_().required("Please enter your current city"),current_address:h.Z_().required("Please enter your current address"),scientific_specialization:h.Z_().required("Please enter your scientific specialization"),mobile_number:h.Z_().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Please enter your phone number")});s.default=function(){var e,s,a,i,h,x,Z,b,k,N=(0,m.cI)({resolver:(0,p.X)(j)}),w=N.register,C=N.handleSubmit,P=N.formState.errors,E=(0,t.useState)({username:"",password:"",comfirm_password:"",email:"",full_name:"",born_date:"",current_city:"",current_address:"",scientific_specialization:"",start_date:"",whatsapp_number:"",phone_number:""}),z=(0,n.Z)(E,2),R=z[0],S=z[1],q=(0,t.useState)(""),I=(0,n.Z)(q,2),B=I[0],U=I[1],F=(0,t.useState)(),J=(0,n.Z)(F,2),T=J[0],D=J[1],K=(0,g.v9)((function(e){return e.BASE_API_URL})),M=(0,t.useRef)(),H=(0,t.useRef)(),L=(0,o.s0)(),X=[{key:"user_name",value:R.username},{key:"email",value:R.email},{key:"password",value:R.password},{key:"confirm_password",value:R.confirm_password},{key:"birthday",value:R.born_date},{key:"full_name",value:R.full_name},{key:"city",value:R.current_city},{key:"current_address",value:R.current_address},{key:"craftsmanship",value:R.scientific_specialization},{key:"landline_number",value:R.phone_number},{key:"phone_number",value:B},{key:"whatsapp_number",value:R.whatsapp_number},{key:"work_start_date",value:R.start_date},{key:"file_src",value:T}];return(0,A.jsxs)("div",{className:"scientific",children:[(0,A.jsx)("header",{children:(0,A.jsxs)(d.rU,{to:"/register",children:[(0,A.jsx)("span",{children:"Back"}),(0,A.jsx)("img",{src:u,alt:""})]})}),(0,A.jsxs)("section",{className:"register3",children:[(0,A.jsxs)("header",{children:[(0,A.jsx)("span",{className:"icon",children:(0,A.jsx)(c.im1,{})}),(0,A.jsx)("span",{className:"text",children:"New User / Profisional Scientific"})]}),(0,A.jsx)("div",{children:(0,A.jsx)(f.x7,{})}),(0,A.jsxs)("form",{onSubmit:C((function(){var e=new FormData;X.map((function(s){return e.append(s.key,s.value)})),_().post("".concat(K,"/api/scientific-careers/add-new-user"),e).then((function(e){"string"===typeof e.data?f.ZP.error("Sorry, the email you entered already exists, please enter another email..."):(f.ZP.success("Your account has been created successfully"),localStorage.setItem("user_scientific",JSON.stringify({data:R})),setTimeout((function(){return L("/scientific")}),2e3))})).catch((function(e){console.error(e)}))})),encType:"multipart/form-data",children:[(0,A.jsxs)("div",{className:"bar",children:[(0,A.jsx)("div",{}),(0,A.jsxs)("div",{className:"my-3 input_",children:[(0,A.jsx)("input",(0,r.Z)((0,r.Z)({},w("username")),{},{value:R.username,onChange:function(e){S((0,r.Z)((0,r.Z)({},R),{},{username:e.target.value}))},placeholder:"User name",className:"input",type:"text"})),(0,A.jsx)("br",{}),(0,A.jsx)("span",{style:{color:"red"},children:null===(e=P.username)||void 0===e?void 0:e.message})]}),(0,A.jsxs)("div",{className:"my-3 input_",children:[(0,A.jsx)("input",(0,r.Z)((0,r.Z)({},w("password")),{},{value:R.password,onChange:function(e){S((0,r.Z)((0,r.Z)({},R),{},{password:e.target.value}))},placeholder:"Password",className:"input",type:"password"})),(0,A.jsx)("br",{}),(0,A.jsx)("span",{style:{color:"red"},children:null===(s=P.password)||void 0===s?void 0:s.message})]}),(0,A.jsxs)("div",{className:"my-3 input_",children:[(0,A.jsx)("input",(0,r.Z)((0,r.Z)({},w("confirm_password")),{},{className:"input",value:R.confirm_password,onChange:function(e){S((0,r.Z)((0,r.Z)({},R),{},{confirm_password:e.target.value}))},placeholder:"Confirm password",type:"password"})),(0,A.jsx)("br",{}),(0,A.jsx)("span",{style:{color:"red"},children:null===(a=P.confirm_password)||void 0===a?void 0:a.message})]}),(0,A.jsxs)("div",{className:"my-3 input_",children:[(0,A.jsx)("input",(0,r.Z)((0,r.Z)({},w("full_name")),{},{value:R.full_name,onChange:function(e){S((0,r.Z)((0,r.Z)({},R),{},{full_name:e.target.value}))},placeholder:"Full Name",className:"input",type:"text"})),(0,A.jsx)("br",{}),(0,A.jsx)("span",{style:{color:"red"},children:null===(i=P.full_name)||void 0===i?void 0:i.message})]}),(0,A.jsx)("div",{className:"my-3 input_",children:(0,A.jsx)("input",{required:!0,value:R.born_date,onChange:function(e){S((0,r.Z)((0,r.Z)({},R),{},{born_date:e.target.value}))},ref:M,type:"text",placeholder:"Born date",onFocus:function(){return M.current.type="date"},onBlur:function(){return M.current.type="text"},className:"input"})}),(0,A.jsxs)("div",{className:"my-3 input_",children:[(0,A.jsx)("input",(0,r.Z)((0,r.Z)({},w("current_city")),{},{value:R.current_city,onChange:function(e){S((0,r.Z)((0,r.Z)({},R),{},{current_city:e.target.value}))},className:"input",placeholder:"Current city",type:"text"})),(0,A.jsx)("br",{}),(0,A.jsx)("span",{style:{color:"red"},children:null===(h=P.current_city)||void 0===h?void 0:h.message})]}),(0,A.jsxs)("div",{className:"my-3 input_",children:[(0,A.jsx)("input",(0,r.Z)((0,r.Z)({},w("current_address")),{},{value:R.current_address,onChange:function(e){S((0,r.Z)((0,r.Z)({},R),{},{current_address:e.target.value}))},className:"input",placeholder:"Current Address",type:"text"})),(0,A.jsx)("br",{}),(0,A.jsx)("span",{style:{color:"red"},children:null===(x=P.current_address)||void 0===x?void 0:x.message})]}),(0,A.jsxs)("div",{className:"my-3 input_",children:[(0,A.jsx)("textarea",(0,r.Z)((0,r.Z)({},w("scientific_specialization")),{},{style:{resize:"none"},value:R.scientific_specialization,onChange:function(e){S((0,r.Z)((0,r.Z)({},R),{},{scientific_specialization:e.target.value}))},className:"input",placeholder:"Scientific specialization",type:"text"})),(0,A.jsx)("br",{}),(0,A.jsx)("span",{style:{color:"red"},children:null===(Z=P.scientific_specialization)||void 0===Z?void 0:Z.message})]}),(0,A.jsx)("div",{className:"my-3 input_",children:(0,A.jsx)("input",{required:!0,value:R.start_date,onChange:function(e){S((0,r.Z)((0,r.Z)({},R),{},{start_date:e.target.value}))},className:"input",ref:H,onFocus:function(){return H.current.type="date"},onBlur:function(){return H.current.type="text"},placeholder:"Actaul start date",type:"text"})}),(0,A.jsxs)("div",{className:"my-3 input_",children:[(0,A.jsx)("input",(0,r.Z)((0,r.Z)({},w("mobile_number")),{},{value:R.phone_number,onChange:function(e){S((0,r.Z)((0,r.Z)({},R),{},{phone_number:e.target.value}))},className:"input",placeholder:"Phone number",type:"number"})),(0,A.jsx)("br",{}),(0,A.jsx)("span",{style:{color:"red"},children:null===(b=P.mobile_number)||void 0===b?void 0:b.message})]}),(0,A.jsx)("div",{className:"my-3 input_",children:(0,A.jsx)(l(),{value:B,onChange:U,className:"phone_number",placeholder:"Mobile number",defaultCountry:"sy",enableSearchField:!0})}),(0,A.jsx)("div",{className:"my-3 input_",children:(0,A.jsx)("input",{value:R.whatsapp_number,onChange:function(e){S((0,r.Z)((0,r.Z)({},R),{},{whatsapp_number:e.target.value}))},className:"input",placeholder:"Whatsapp number",type:"number"})}),(0,A.jsxs)("div",{className:"my-3 input_",children:[(0,A.jsx)("input",(0,r.Z)((0,r.Z)({},w("email")),{},{value:R.email,onChange:function(e){S((0,r.Z)((0,r.Z)({},R),{},{email:e.target.value}))},className:"input",placeholder:"Email Address",type:"email"})),(0,A.jsx)("br",{}),(0,A.jsx)("span",{style:{color:"red"},children:null===(k=P.email)||void 0===k?void 0:k.message})]}),(0,A.jsxs)("div",{className:"my-3 input_1",children:[(0,A.jsxs)("label",{htmlFor:"file1",children:[(0,A.jsx)("p",{children:"Upload work license and certificate"}),(0,A.jsx)("img",{src:y,alt:"",width:"30"})]}),(0,A.jsx)("input",{required:!0,onChange:function(e){return D(e.target.files[0])},className:"input text-light",name:"uploadFile",id:"file1",type:"file"}),(0,A.jsx)("br",{})]})]}),(0,A.jsx)("button",{className:"mx-3 submit",type:"submit",children:"Register"})]})]}),(0,A.jsx)("div",{className:"background1",children:(0,A.jsx)("img",{src:v,alt:""})})]})}},27604:function(){},7508:function(e,s,a){e.exports=a.p+"static/media/Mask Group -4.81915eade77e912f4244.png"},71720:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAmlJREFUaEPtmf0xBEEQxd9FgAgQASJABIgAESACRIAIEAEZIAMiQASIgPqV7qq1dnd2+vZwavqfu9qPmX6v3/RsvRlpymM05fmrAPjtCg5RgTVJG5KWJfH/SdK9pFtJl5JeJwlyHACzkg4l7XckCJhdAzMRHFEAJH9jrL9JOrUkYX3BrgNs1bIGxMUkEEQBkPCepAdJmyabpvwAcWIyWul4LowtAgCdwz7Mo3tk0hUOluqshzNteTECwBM6lnTUIyHkBsgZSXNDL+oIAJhE27DJ/z4ReafPuKGN7N1GroNHWgC7awBGpehYTVXjHmNyLzsiFWgDkEqyDUDbeL3AFAAVmkoFemmm9lCRUJHQZwslImoIvVTaaG0dlgrkdq8ioSKhCgOR1lUkVCRUJNS89ZfP6dwNKfoB9W+7kPtF+KKYWNXg2lKLk/FnvoVIGP9n3mxEXAaMXZy5HTPCsB2rZi+e0ctPf057kk2+EFW4NhOrLuktu1e97lV7Nk81exlEdmI3qQ7M1K1PCsu4d9iOMMzzdChkVA/3TvGSAJMdEQA+Kd4/0hgncKy3JbWRkRw7AgCGH23kHHuxnozLh+uLPUziRjARAAzkzLEe6Di5pzBICxL4PUscknRWIQqAidE0HQeNs0D7guDdK9M85wtUou+738BEATAQi5Tksc1JgFMYOlBXcBhybsxzvkDyTYs7qX1/YBwADgI5sUkRAPADPtgluEeiAAYAkTrZ+TEATIQk6Ey4z6nw8zTabFg21UnGrUB1LLoTDDvbrA9nm8WO3KhQ6kgqRcKX+0MCyJp4qIcLgKGYjI4z9RX4AJDd5DEh+aS6AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=4980.9af38dcb.chunk.js.map