(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e),n.d(e,"register",(function(){return b})),n.d(e,"logIn",(function(){return d})),n.d(e,"logOut",(function(){return j})),n.d(e,"fetchCurrentUser",(function(){return f}));var r=n(7),c=n.n(r),a=n(19),o=n(13),i=n.n(o),s=n(4);i.a.defaults.baseURL="https://connections-api.herokuapp.com/";var u=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},l=function(){i.a.defaults.headers.common.Authorization=""},b=Object(s.c)("auth/register",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,i.a.post("/users/signup",e);case 4:return a=t.sent,o=a.data,u(o.token),t.abrupt("return",o);case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),d=Object(s.c)("auth/login",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,i.a.post("/users/login",e);case 4:return a=t.sent,o=a.data,u(o.token),t.abrupt("return",o);case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),j=Object(s.c)("auth/logout",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,i.a.post("/users/logout");case 4:l(),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),f=Object(s.c)("auth/refresh",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,o,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return u(a),t.prev=5,t.next=8,i.a.get("/users/current");case 8:return o=t.sent,s=o.data,t.abrupt("return",s);case 13:return t.prev=13,t.t0=t.catch(5),t.abrupt("return",n.rejectWithValue(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}())},21:function(t,e,n){t.exports={form:"ContactForm_form__1NiH1",label:"ContactForm_label__3KgVy",input:"ContactForm_input__3emgF",btn:"ContactForm_btn__1BmbG"}},28:function(t,e,n){"use strict";var r,c=n(9),a=n(4),o=n(17),i=Object(a.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(r={},Object(c.a)(r,o.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(c.a)(r,o.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(c.a)(r,o.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(c.a)(r,o.fetchCurrentUser.pending,(function(t){t.isFetchingCurrentUser=!0})),Object(c.a)(r,o.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0,t.isFetchingCurrentUser=!1})),Object(c.a)(r,o.fetchCurrentUser.rejected,(function(t){t.isFetchingCurrentUser=!1})),r)});e.a=i.reducer},32:function(t,e,n){t.exports={list:"ContactList_list__3wSXY",list__item:"ContactList_list__item__29IJl",btn:"ContactList_btn__LjK5L"}},38:function(t,e,n){t.exports={label:"Filter_label__2pNgv",input:"Filter_input__YmgBH"}},39:function(t,e,n){t.exports={title__phonebook:"style_title__phonebook__3aFT2",title__contacts:"style_title__contacts__2HUDu"}},53:function(t,e,n){t.exports={Container:"Container_Container__11SY1"}},8:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r}));var r={};n.r(r),n.d(r,"getIsLoggedIn",(function(){return a})),n.d(r,"getUserName",(function(){return o})),n.d(r,"getIsFetchingCurrent",(function(){return i}));n(28);var c=n(17),a=function(t){return t.auth.isLoggedIn},o=function(t){return t.auth.user.name},i=function(t){return t.auth.isFetchingCurrentUser}},89:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"fetchContacts",(function(){return at})),n.d(r,"addContact",(function(){return ot})),n.d(r,"deleteContact",(function(){return it}));var c,a=n(0),o=n.n(a),i=n(27),s=n.n(i),u=n(15),l=n(3),b=n(50),d=n(4),j=n(51),f=n.n(j),h=n(20),p=n(52),O=n.n(p),g=n(9),v=n(54),m=n(6),x=Object(d.b)("contact/fetchContactRequest"),C=Object(d.b)("contact/fetchContactSuccess"),_=Object(d.b)("contact/fetchContactError"),y=Object(d.b)("contact/addContactRequest"),k=Object(d.b)("contact/addContactSuccess"),L=Object(d.b)("contact/addContactError"),w=Object(d.b)("contact/deleteContactRequest"),I=Object(d.b)("contact/deleteContactSuccess"),F=Object(d.b)("contact/deleteContactError"),N=Object(d.b)("contact/changeFilter"),S=Object(d.d)([],(c={},Object(g.a)(c,C,(function(t,e){return e.payload})),Object(g.a)(c,k,(function(t,e){var n=e.payload;return[].concat(Object(v.a)(t),[n])})),Object(g.a)(c,I,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),U=Object(d.d)("",Object(g.a)({},N,(function(t,e){return e.payload}))),A=Object(m.b)({items:S,filter:U}),z=n(28),E={key:"auth",storage:O.a,whitelist:["token"]},W=Object(d.a)({reducer:{contacts:A,auth:Object(h.g)(E,z.a)},middleware:function(t){return t({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}}).concat(f.a)},devTools:!1}),B=Object(h.h)(W),R=n(2),T=n(8),V=n(53),q=n.n(V),D=n(1),H=function(t){var e=t.children;return Object(D.jsx)("div",{className:q.a.Container,children:e})},J={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"rgb(59, 11, 73)"},activeLink:{color:"#E84A5F"}};function Y(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(u.b,{to:"/register",exact:!0,style:J.link,activeStyle:J.activeLink,children:"Sign Up"}),Object(D.jsx)(u.b,{to:"/login",exact:!0,style:J.link,activeStyle:J.activeLink,children:"Log In"})]})}var Z={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}};function K(){var t=Object(l.c)(T.b.getIsLoggedIn);return Object(D.jsxs)("nav",{children:[Object(D.jsx)(u.b,{to:"/",exact:!0,style:Z.link,activeStyle:Z.activeLink,children:"Home"}),t&&Object(D.jsx)(u.b,{to:"/contacts",exact:!0,style:Z.link,activeStyle:Z.activeLink,children:"Phonebook"})]})}var M=n.p+"static/media/default-avatar.e44fc4e2.png",P={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}};function G(){var t=Object(l.b)(),e=Object(l.c)(T.b.getUserName),n=M;return Object(D.jsxs)("div",{style:P.container,children:[Object(D.jsx)("img",{src:n,alt:"",width:"32",style:P.avatar}),Object(D.jsxs)("span",{style:P.name,children:["Welcome, ",e]}),Object(D.jsx)("button",{type:"button",onClick:function(){return t(T.a.logOut())},children:"Logout"})]})}var X={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}};function $(){var t=Object(l.c)(T.b.getIsLoggedIn);return Object(D.jsxs)("nav",{style:X.header,children:[Object(D.jsx)(K,{}),t?Object(D.jsx)(G,{}):Object(D.jsx)(Y,{})]})}var Q=n(35),tt=n(7),et=n.n(tt),nt=n(19),rt=n(13),ct=n.n(rt),at=function(){return function(){var t=Object(nt.a)(et.a.mark((function t(e){var n,r;return et.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x()),t.prev=1,t.next=4,ct.a.get("/contacts");case 4:n=t.sent,r=n.data,e(C(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(_(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},ot=function(t,e){return function(){var n=Object(nt.a)(et.a.mark((function n(r){var c,a,o;return et.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={name:t,number:e},r(y()),n.prev=2,n.next=5,ct.a.post("/contacts",c);case 5:a=n.sent,o=a.data,r(k(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),r(L(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},it=function(t){return function(){var e=Object(nt.a)(et.a.mark((function e(n){return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(w()),e.prev=1,e.next=4,ct.a.delete("/contacts/".concat(t));case 4:n(I(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(F(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},st=n(29),ut=function(t){return t.contacts.items},lt=function(t){return t.contacts.filter},bt=Object(st.a)([ut,lt],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),dt={getContacts:ut,getFilter:lt,getFilteredContacts:bt},jt=n(21),ft=n.n(jt);var ht=function(){var t=Object(l.c)(dt.getContacts),e=Object(l.b)(),n=Object(a.useState)(""),c=Object(Q.a)(n,2),o=c[0],i=c[1],s=Object(a.useState)(""),u=Object(Q.a)(s,2),b=u[0],d=u[1];return Object(D.jsxs)("form",{className:ft.a.form,onSubmit:function(n){if(n.preventDefault(),t.find((function(t){return t.name.toLowerCase()===o.toLowerCase()})))return alert("".concat(o," is already in contacts"));e(r.addContact(o,b)),i(""),d("")},children:[Object(D.jsxs)("label",{className:ft.a.label,children:["Name",Object(D.jsx)("input",{type:"text",className:ft.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:o,onChange:function(t){i(t.target.value)},title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Enter your name",autoComplete:"off",required:!0})]}),Object(D.jsxs)("label",{className:ft.a.label,children:["Number",Object(D.jsx)("input",{type:"tel",className:ft.a.input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:b,onChange:function(t){d(t.target.value)},title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Enter your phone number",autoComplete:"on",required:!0})]}),Object(D.jsx)("button",{type:"submit",className:ft.a.btn,children:"Add contact"})]})},pt=n(38),Ot=n.n(pt),gt=function(){var t=Object(l.c)(dt.getFilter),e=Object(l.b)();return Object(D.jsxs)("label",{className:Ot.a.label,children:["Find contacts by name",Object(D.jsx)("input",{type:"text",className:Ot.a.input,value:t,onChange:function(t){return e(N(t.target.value))},placeholder:"Find your contact",autoComplete:"off"})]})},vt=n(32),mt=n.n(vt),xt=function(){var t=Object(l.c)(dt.getFilteredContacts),e=Object(l.b)();Object(a.useEffect)((function(){e(r.fetchContacts())}),[e]);return Object(D.jsx)("ul",{className:mt.a.list,children:t.map((function(t){var n=t.name,c=t.number,a=t.id;return Object(D.jsxs)("li",{className:mt.a.list__item,children:[n,": ",c,Object(D.jsx)("button",{type:"button",className:mt.a.btn,onClick:function(){return function(t){return e(r.deleteContact(t))}(a)},children:"Delete"})]},a)}))})},Ct=n(16),_t=n(31),yt=["children","redirectTo"];function kt(t){var e=t.children,n=t.redirectTo,r=void 0===n?"/":n,c=Object(_t.a)(t,yt);console.log(c);var a=Object(l.c)(T.b.getIsLoggedIn);return Object(D.jsx)(R.b,Object(Ct.a)(Object(Ct.a)({},c),{},{children:a?e:Object(D.jsx)(R.a,{to:r})}))}var Lt=["children","redirectTo","restricted"];function wt(t){var e=t.children,n=t.redirectTo,r=void 0===n?"/":n,c=t.restricted,a=void 0!==c&&c,o=Object(_t.a)(t,Lt),i=Object(l.c)(T.b.getIsLoggedIn)&&a;return console.log("shouldRedirect: ",i),Object(D.jsx)(R.b,Object(Ct.a)(Object(Ct.a)({},o),{},{children:i?Object(D.jsx)(R.a,{to:r}):e}))}var It=n(39),Ft=n.n(It),Nt=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,90))})),St=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,91))})),Ut=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,92))}));function At(){var t=Object(l.b)(),e=Object(l.c)(T.b.getIsFetchingCurrent);return Object(a.useEffect)((function(){t(T.a.fetchCurrentUser())}),[t]),!e&&Object(D.jsxs)(H,{children:[Object(D.jsx)($,{}),Object(D.jsx)(R.d,{children:Object(D.jsxs)(a.Suspense,{fallback:Object(D.jsx)("p",{children:"Loading..."}),children:[Object(D.jsx)(wt,{path:"/",exact:!0,children:Object(D.jsx)(Nt,{})}),Object(D.jsx)(wt,{path:"/register",restricted:!0,children:Object(D.jsx)(St,{})}),Object(D.jsx)(wt,{path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(D.jsx)(Ut,{})}),Object(D.jsxs)(kt,{path:"/contacts",redirectTo:"/login",children:[Object(D.jsx)("h1",{className:Ft.a.title__phonebook,children:"Phonebook"}),Object(D.jsx)(ht,{}),Object(D.jsx)("h2",{className:Ft.a.title__contacts,children:"Contacts"}),Object(D.jsx)(gt,{}),Object(D.jsx)(xt,{})]})]})})]})}s.a.render(Object(D.jsx)(u.a,{children:Object(D.jsx)(o.a.StrictMode,{children:Object(D.jsx)(l.a,{store:W,children:Object(D.jsx)(b.a,{loading:null,persistor:B,children:Object(D.jsx)(At,{})})})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.e87cc1db.chunk.js.map