(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(8),j=n.n(a),s=(n(14),n(9)),r=n(5),o=(n(15),n(4)),l=n(7),b=n(0),d={name:"",location:"",image:""},O=function(e){var t=Object(c.useState)(d),n=Object(r.a)(t,2),i=n[0],a=n[1],j=function(e){e.preventDefault();var t=e.target,n=t.name,c=t.value;a(Object(l.a)(Object(l.a)({},i),{},Object(o.a)({},n,c)))};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{onSubmit:function(t){var n=i.name,c=i.location,j=i.image;t.preventDefault(),n&&c&&j&&(console.log(i),e.addProfile(i),a(d))},children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Name:"}),Object(b.jsx)("input",{type:"text",name:"name",value:i.name,onChange:j})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"location:"}),Object(b.jsx)("input",{type:"text",name:"location",value:i.location,onChange:j})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Image:"}),Object(b.jsx)("input",{type:"text",name:"image",value:i.image,onChange:j})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"Enviar info"})})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Image:"}),""!==i.image?Object(b.jsx)("img",{src:i.image}):""]})]})},u=function(e){var t=e.profiles;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:e.name}),Object(b.jsx)("p",{children:e.location}),Object(b.jsx)("img",{src:e.image,width:"200"})]},JSON.stringify(e))}))})};var m=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Listado de perfiles"}),Object(b.jsx)(O,{addProfile:function(e){var t=[].concat(Object(s.a)(n),[e]);i(t),console.log(n)}}),Object(b.jsx)(u,{profiles:n})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,j=t.getTTFB;n(e),c(e),i(e),a(e),j(e)}))};j.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.8530267f.chunk.js.map