(this.webpackJsonpkidex_project=this.webpackJsonpkidex_project||[]).push([[0],{20:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var i,a,l,c,d=t(1),r=t.n(d),s=t(11),j=t.n(s),p=(t(20),t(3)),o=t(4),m=t(6),f=t(5),x=t(2),b={js:Object(x.jsx)(f.c,{}),css:Object(x.jsx)(f.a,{}),html:Object(x.jsx)(f.b,{}),jsx:Object(x.jsx)(f.d,{})},h=o.a.div(i||(i=Object(p.a)(["\n  padding-left: 20px;\n  \n  background-color: grey;\n  display: flex;\n  align-items: center;\n  span {\n    \n    margin-left: 5px;\n  }\n"]))),y=function(e){var n=e.name,t=n.split(".")[1];return Object(x.jsxs)(h,{children:[b[t]||Object(x.jsx)(m.a,{}),Object(x.jsx)("span",{children:n})]})},u=t(15),O=o.a.div(a||(a=Object(p.a)(["\n  padding-left: 20px;\nbackground-color: lightgrey;\n  .folder--label {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 5px;\n    }\n  }\n"]))),g=o.a.div(l||(l=Object(p.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.isOpen?"auto":"0"})),v=function(e){var n=e.name,t=e.children,i=Object(d.useState)(!1),a=Object(u.a)(i,2),l=a[0],c=a[1];return Object(x.jsxs)(O,{children:[Object(x.jsxs)("div",{className:"folder--label",onClick:function(e){e.preventDefault(),c(!l)},children:[Object(x.jsx)(m.b,{style:{color:"blue",fontSize:"xx-large"}}),Object(x.jsx)("span",{children:n})]}),Object(x.jsx)(g,{isOpen:l,children:t})]})},k=o.a.div(c||(c=Object(p.a)(["\n   line-height: 1.5;\n   \n"]))),E=function e(n){return n.data.map((function(n){return"file"===n.type?Object(x.jsx)(y,{name:n.name}):"folder"===n.type?Object(x.jsx)(v,{name:n.name,children:Object(x.jsx)(e,{data:n.childrens})}):void 0}))},M=function(e){var n=e.data,t=e.children,i=n&&!t;return Object(x.jsx)(k,{children:i?Object(x.jsx)(E,{data:n}):t})};M.File=y,M.Folder=v;var S=M,w=[{type:"folder",name:"browser",childrens:[{type:"file",name:"index.js"},{type:"file",name:"index.html"}]},{type:"folder",name:"core",childrens:[{type:"file",name:"index.js"},{type:"file",name:"index.html"}]},{type:"folder",name:"hub",childrens:[{type:"file",name:"index.js"},{type:"file",name:"index.html"}]},{type:"folder",name:"minimal",childrens:[{type:"file",name:"index.js"},{type:"file",name:"index.html"}]},{type:"folder",name:"type",childrens:[{type:"folder",name:"dist",childrens:[{type:"file",name:"Modal.js"},{type:"file",name:"Modal.css"}]},{type:"folder",name:"esm",childrens:[{type:"file",name:"LICENSE"},{type:"file",name:"package.json"},{type:"file",name:"README.md"}]}]},{type:"folder",name:"utils",childrens:[{type:"folder",name:"dist",childrens:[{type:"file",name:"Modal.js"},{type:"file",name:"Modal.css"}]},{type:"folder",name:"esm",childrens:[{type:"file",name:"LICENSE"},{type:"file",name:"package.json"},{type:"file",name:"README.md"}]}]}];t(26);function N(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(S,{data:w})})}j.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.58964894.chunk.js.map