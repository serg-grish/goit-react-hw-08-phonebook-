(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{91:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(35),i=a(0),o=a(3),r=a(8),l=a(1),c={title:{fontWeight:600,fontSize:48,textAlign:"center",color:"rgb(63, 102, 207)"},form:{width:320,marginLeft:"auto",marginRight:"auto"},label:{display:"flex",flexDirection:"column",marginBottom:15},btn:{display:"block",width:200,marginLeft:"auto",marginTop:35,marginRight:"auto",paddingLeft:15,paddingTop:5,paddingRight:15,paddingBottom:5,fontSize:20,fontWeight:600,color:"rgb(63, 102, 207)"}};function s(){var e=Object(o.b)(),t=Object(i.useState)(""),a=Object(n.a)(t,2),s=a[0],u=a[1],b=Object(i.useState)(""),p=Object(n.a)(b,2),d=p[0],g=p[1],h=Object(i.useState)(""),m=Object(n.a)(h,2),j=m[0],f=m[1],O=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":return u(n);case"email":return g(n);case"password":return f(n);default:return}};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{style:c.title,children:"Registration page"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r.a.register({name:s,email:d,password:j})),u(""),g(""),f("")},style:c.form,autoComplete:"off",children:[Object(l.jsx)("label",{style:c.label,children:Object(l.jsx)("input",{type:"text",name:"name",value:s,onChange:O,placeholder:"Enter your nickname"})}),Object(l.jsx)("label",{style:c.label,children:Object(l.jsx)("input",{type:"email",name:"email",value:d,onChange:O,placeholder:"Enter your email as login"})}),Object(l.jsx)("label",{style:c.label,children:Object(l.jsx)("input",{type:"password",name:"password",value:j,onChange:O,placeholder:"Enter your password"})}),Object(l.jsx)("button",{type:"submit",style:c.btn,children:"Sign Up"})]})]})}}}]);
//# sourceMappingURL=5.3efbd295.chunk.js.map