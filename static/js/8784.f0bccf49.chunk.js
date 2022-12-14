"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[8784],{68784:function(e,a,t){t.r(a);var s=t(1413),n=t(70885),r=t(72791),i=(t(4633),t(16871)),l=t(43504),u=t(75737),c=t.n(u),o=(t(98404),t(99e3)),d=t(39126),p=t(95581),m=t(44695),h=t(62797),_=t(74569),x=t.n(_),y=t(16762),v=t(71720),f=t(63402),k=t(80184),g=h.Ry({user_name:h.Z_().required("Please Enter your username"),email:h.Z_().email().required("Please Enter your Email"),password_:h.Z_().required("Please enter a password").min(4,"Password too short"),confirm_password_:h.Z_().required("Please confirm password").oneOf([h.iH("password_"),null],"Passwords must match"),full_name:h.Z_().required("Please Enter your Full name"),current_city:h.Z_().required("Please Enter your current city"),current_address:h.Z_().required("Please Enter your current address"),mobile_number:h.Rx().required("Please Enter your mobile number"),current_work:h.Z_().required("Please Enter your current work"),experience:h.Z_().required("Please Enter your Detialed practical experience"),skills:h.Z_().required("Please Enter your languages skills"),it_skills:h.Z_().required("Please Enter your IT skills")}).required();a.default=function(){var e=(0,i.s0)(),a=(0,r.useState)({username:"",password:"",confirm_password:"",born_date:"",full_name:"",current_city:"",current_address:"",scientific_sertificate:"",phone_number:"",email:"",current_work:"",academic_certificate:"",work_address:"",work_date:"",work_number:"",extention:"",experience:"",skills:"",it_skills:""}),t=(0,n.Z)(a,2),u=t[0],h=t[1],_=(0,r.useState)(""),j=(0,n.Z)(_,2),A=j[0],N=j[1],Z=(0,r.useState)(),w=(0,n.Z)(Z,2),b=w[0],C=w[1],E=(0,r.useState)(),P=(0,n.Z)(E,2),q=P[0],R=P[1],I=(0,p.cI)({resolver:(0,m.X)(g)}),S=(I.register,I.handleSubmit,I.formState.errors,[{key:"user_name",value:u.username},{key:"email",value:u.email},{key:"password",value:u.password},{key:"confirm_password",value:u.confirm_password},{key:"birthday",value:u.born_date},{key:"full_name",value:u.full_name},{key:"city",value:u.current_city},{key:"current_address",value:u.current_address},{key:"scientific_certificate",value:u.scientific_sertificate},{key:"phone_number",value:A},{key:"whatsapp_number",value:u.phone_number},{key:"current_work",value:u.current_work},{key:"scientific_certificate_details",value:u.academic_certificate},{key:"work_address",value:u.work_address},{key:"work_start_date",value:u.work_date},{key:" business_phone_number",value:u.work_date},{key:"extention",value:u.extention},{key:"scientific_experience_details",value:u.experience},{key:"language_skills",value:u.skills},{key:"technical_skills",value:u.it_skills},{key:"file1",value:b},{key:"file2",value:q}]),F=(0,r.useRef)(),J=(0,r.useRef)();return(0,k.jsxs)("div",{className:"scientific",children:[(0,k.jsx)("header",{children:(0,k.jsxs)(l.rU,{to:"/register-ar",className:"back_ar",children:[(0,k.jsx)("span",{children:"\u0631\u062c\u0648\u0639"}),(0,k.jsx)("img",{src:o,alt:""})]})}),(0,k.jsxs)("section",{className:"body_ar",children:[(0,k.jsxs)("header",{children:[(0,k.jsx)("span",{className:"icon",children:(0,k.jsx)(d.im1,{})}),(0,k.jsx)("span",{className:"text",children:"\u0645\u0633\u062a\u062e\u062f\u0645 \u062c\u062f\u064a\u062f / \u0623\u0641\u0631\u0627\u062f"})]}),(0,k.jsx)("div",{children:(0,k.jsx)(f.x7,{})}),(0,k.jsxs)("form",{onSubmit:function(a){a.preventDefault();var t=new FormData;S.map((function(e){return t.append(e.key,e.value)})),x().post("http://localhost:8000/api/individuals/add-new-user",t).then((function(a){var t=a.data;"string"===typeof t?f.ZP.error(t):(f.ZP.success("...\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628\u0643 \u0628\u0646\u062c\u0627\u062d"),localStorage.setItem("users",JSON.stringify((0,s.Z)({},t))),setTimeout((function(){return e("/individuals")}),2e3))})).catch((function(e){console.error(e)}))},encType:"multipart/form-data",children:[(0,k.jsxs)("div",{className:"bar",children:[(0,k.jsxs)("div",{className:"my-3 input_",children:[(0,k.jsx)("input",{className:"input",value:u.username,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{username:e.target.value}))},placeholder:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",type:"text",name:"user_name"}),(0,k.jsx)("br",{})]}),(0,k.jsxs)("div",{className:"my-3 input_",children:[(0,k.jsx)("input",{className:"input",value:u.password,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{password:e.target.value}))},placeholder:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",type:"password"}),(0,k.jsx)("br",{})]}),(0,k.jsxs)("div",{className:"my-3 input_",children:[(0,k.jsx)("input",{className:"input",value:u.confirm_password,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{confirm_password:e.target.value}))},placeholder:"\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",type:"password"}),(0,k.jsx)("br",{})]}),(0,k.jsxs)("div",{className:"my-3 input_",children:[(0,k.jsx)("input",{className:"input",value:u.full_name,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{full_name:e.target.value}))},placeholder:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",type:"text"}),(0,k.jsx)("br",{})]}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",ref:F,type:"text",placeholder:"\u0627\u0644\u0645\u0648\u0627\u0644\u064a\u062f",value:u.born_date,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{born_date:e.target.value}))},onFocus:function(){return F.current.type="date"},onBlur:function(){return F.current.type="text"}})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",value:u.current_city,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{current_city:e.target.value}))},placeholder:"\u0627\u0644\u0645\u062d\u0627\u0641\u0638\u0629",type:"text"})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",value:u.current_address,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{current_address:e.target.value}))},placeholder:"\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062d\u0627\u0644\u064a",type:"text"})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",value:u.scientific_sertificate,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{scientific_sertificate:e.target.value}))},placeholder:"\u0627\u0644\u0634\u0647\u0627\u062f\u0629 \u0627\u0644\u0639\u0644\u0645\u064a\u0629",type:"text"})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",value:u.academic_certificate,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{academic_certificate:e.target.value}))},placeholder:"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0634\u0647\u0627\u062f\u0629 \u0627\u0644\u0639\u0644\u0645\u064a\u0629",type:"text"})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)(c(),{value:A,onChange:N,className:"phone_number",placeholder:"\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644",defaultCountry:"sy",enableSearchField:!0})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",value:u.phone_number,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{phone_number:e.target.value}))},placeholder:"\u0631\u0642\u0645 \u0627\u0644\u0648\u0627\u062a\u0633 \u0623\u0628",type:"number"})}),(0,k.jsxs)("div",{className:"my-3 input_",children:[(0,k.jsx)("input",{className:"input",value:u.email,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{email:e.target.value}))},placeholder:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0623\u0644\u0643\u062a\u0631\u0648\u0646\u064a",type:"email"}),(0,k.jsx)("br",{})]}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",value:u.current_work,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{current_work:e.target.value}))},placeholder:"\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062d\u0627\u0644\u064a",type:"text"})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",value:u.work_address,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{work_address:e.target.value}))},placeholder:"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0639\u0645\u0644",type:"text"})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",ref:J,type:"text",onFocus:function(){return J.current.type="date"},onBlur:function(){return J.current.type="text"},value:u.work_date,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{work_date:e.target.value}))},placeholder:"\u062a\u0627\u0631\u064a\u062e \u0628\u062f\u0621 \u0627\u0644\u0639\u0645\u0644"})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",value:u.work_number,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{work_number:e.target.value}))},placeholder:"\u0631\u0642\u0645 \u0647\u0627\u062a\u0641 \u0627\u0644\u0639\u0645\u0644",type:"number"})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",value:u.extention,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{extention:e.target.value}))},placeholder:"\u0627\u0644\u062a\u062d\u0648\u064a\u0644\u0629",type:"number"})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",value:u.experience,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{experience:e.target.value}))},placeholder:"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062e\u0628\u0631\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629",type:"text"})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",value:u.skills,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{skills:e.target.value}))},placeholder:"\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0644\u063a\u0648\u064a\u0629",type:"text"})}),(0,k.jsx)("div",{className:"my-3 input_",children:(0,k.jsx)("input",{className:"input",value:u.it_skills,onChange:function(e){h((0,s.Z)((0,s.Z)({},u),{},{it_skills:e.target.value}))},placeholder:"\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629",type:"text"})}),(0,k.jsxs)("div",{className:"my-3 input_1",children:[(0,k.jsxs)("label",{htmlFor:"file1",children:[(0,k.jsx)("p",{children:"\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0634\u0647\u0627\u062f\u0629 \u0627\u0644\u0639\u0644\u0645\u064a\u0629 \u0627\u0644\u0623\u062e\u064a\u0631\u0629"}),(0,k.jsx)("img",{src:v,alt:"",width:"30"})]}),(0,k.jsx)("input",{className:"input text-light",id:"file1",type:"file",onChange:function(e){return C(e.target.files[0])}})]}),(0,k.jsxs)("div",{className:"my-3 input_1",children:[(0,k.jsxs)("label",{htmlFor:"file2",children:[(0,k.jsx)("p",{children:"\u062a\u062d\u0645\u064a\u0644 \u0634\u0647\u0627\u062f\u0627\u062a \u0623\u062e\u0631\u0649 \u0623\u0648 \u062f\u0648\u0631\u0627\u062a \u062a\u062f\u0631\u064a\u0628\u064a\u0629"}),(0,k.jsx)("img",{src:v,alt:"",width:"30"})]}),(0,k.jsx)("input",{className:"input text-light",name:"uploadFile",id:"file2",placeholder:"Upload file",type:"file",onChange:function(e){return R(e.target.files[0])}})]})]}),(0,k.jsx)("button",{className:"mx-3 submit",type:"submit",children:"\u062a\u0633\u062c\u064a\u0644"})]})]}),(0,k.jsx)("div",{className:"background3_ar",children:(0,k.jsx)("img",{src:y,alt:""})})]})}},4633:function(){},16762:function(e,a,t){e.exports=t.p+"static/media/Mask Group -6.fc677ffc06042156ec39.png"},71720:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAmlJREFUaEPtmf0xBEEQxd9FgAgQASJABIgAESACRIAIEAEZIAMiQASIgPqV7qq1dnd2+vZwavqfu9qPmX6v3/RsvRlpymM05fmrAPjtCg5RgTVJG5KWJfH/SdK9pFtJl5JeJwlyHACzkg4l7XckCJhdAzMRHFEAJH9jrL9JOrUkYX3BrgNs1bIGxMUkEEQBkPCepAdJmyabpvwAcWIyWul4LowtAgCdwz7Mo3tk0hUOluqshzNteTECwBM6lnTUIyHkBsgZSXNDL+oIAJhE27DJ/z4ReafPuKGN7N1GroNHWgC7awBGpehYTVXjHmNyLzsiFWgDkEqyDUDbeL3AFAAVmkoFemmm9lCRUJHQZwslImoIvVTaaG0dlgrkdq8ioSKhCgOR1lUkVCRUJNS89ZfP6dwNKfoB9W+7kPtF+KKYWNXg2lKLk/FnvoVIGP9n3mxEXAaMXZy5HTPCsB2rZi+e0ctPf057kk2+EFW4NhOrLuktu1e97lV7Nk81exlEdmI3qQ7M1K1PCsu4d9iOMMzzdChkVA/3TvGSAJMdEQA+Kd4/0hgncKy3JbWRkRw7AgCGH23kHHuxnozLh+uLPUziRjARAAzkzLEe6Di5pzBICxL4PUscknRWIQqAidE0HQeNs0D7guDdK9M85wtUou+738BEATAQi5Tksc1JgFMYOlBXcBhybsxzvkDyTYs7qX1/YBwADgI5sUkRAPADPtgluEeiAAYAkTrZ+TEATIQk6Ey4z6nw8zTabFg21UnGrUB1LLoTDDvbrA9nm8WO3KhQ6kgqRcKX+0MCyJp4qIcLgKGYjI4z9RX4AJDd5DEh+aS6AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=8784.f0bccf49.chunk.js.map