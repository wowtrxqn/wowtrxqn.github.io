(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{79:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return l})),o.d(e,"metadata",(function(){return c})),o.d(e,"rightToc",(function(){return i})),o.d(e,"Weather",(function(){return s})),o.d(e,"default",(function(){return d}));var a=o(3),n=o(7),r=o(0),u=o(100),l={slug:"hola",title:"Hola",author:"Gao Wei",author_title:"Docusaurus Core Team",author_url:"https://github.com/wgao19",author_image_url:"https://avatars1.githubusercontent.com/u/2055384?v=4",tags:["hola","docusaurus"]},c={permalink:"/blog/hola",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2019-05-28-hola.md",source:"@site/blog/2019-05-28-hola.md",description:"export const Weather = () => {",date:"2019-05-28T00:00:00.000Z",tags:[{label:"hola",permalink:"/blog/tags/hola"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],title:"Hola",readingTime:.275,truncated:!1,prevItem:{title:"Hello",permalink:"/blog/hello-world"}},i=[],s=function(){var t=Object(r.useState)(null),e=t[0],o=t[1];return Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(t){return t.json()})).then((function(t){var e=t.userId,a=t.title;setTimeout((function(){o(e+" - "+a+" - fetch Data")}),2e3)}))})),null!=e?e:"loading weather"},h={rightToc:i,Weather:s};function d(t){var e=t.components,o=Object(n.a)(t,["components"]);return Object(u.b)("wrapper",Object(a.a)({},h,o,{components:e,mdxType:"MDXLayout"}),Object(u.b)("p",null,"123"),Object(u.b)(s,{mdxType:"Weather"}))}d.isMDXComponent=!0}}]);