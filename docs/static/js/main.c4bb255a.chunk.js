(this["webpackJsonpreact-assg"]=this["webpackJsonpreact-assg"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c);a(14),a(15);var i=function(){return r.a.createElement("div",{className:"back"})},s=a(4),o=a(5),u=a.n(o),m=a(8);function f(e){return d.apply(this,arguments)}function d(){return(d=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.json());case 2:if(400!==t.status){e.next=7;break}return e.next=5,t.text();case 5:throw a=e.sent,new Error(a);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){throw console.error("API call failed. "+e),e}a(17),a(18);var h=function(e){return console.log(e),r.a.createElement("div",{className:"j"},r.a.createElement("div",{className:"column1"},void 0!==e._rxList.articles?e._rxList.articles.map((function(e,t){return r.a.createElement("div",{className:"row1",key:t},r.a.createElement("div",{className:"img_box"},r.a.createElement("img",{src:e.urlToImage})),r.a.createElement("div",{className:"list_img"},r.a.createElement("p",{className:"_Right"},r.a.createElement("b",null,e.author),r.a.createElement("span",{className:"_left"},new Date(e.publishedAt).toLocaleDateString("en-GB",{timeZone:"UTC"}))),r.a.createElement("div",{className:"txt"},e.description),r.a.createElement("div",{className:"txt"},r.a.createElement("i",null,e.content))))})):r.a.createElement("h3",null,"Loading data....")))};a(19);var p=function(e){return r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"row"},void 0!==e._rxList.articles?e._rxList.articles.map((function(e,t){return r.a.createElement("div",{className:"column",key:t},r.a.createElement("img",{src:e.urlToImage}),r.a.createElement("p",null,r.a.createElement("b",null,e.author)),r.a.createElement("p",null,new Date(e.publishedAt).toLocaleDateString("en-GB",{timeZone:"UTC"})),r.a.createElement("p",{className:"cnt"},r.a.createElement("i",null,e.content)))})):r.a.createElement("h3",null,"Loading data....")))},v=a(2);a(20);var g=function(e){var t=new Array;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"searchbox"},r.a.createElement("span",{className:"srcBtn"},r.a.createElement("i",{className:"fa fa-search fa-2x"})),r.a.createElement("input",{type:"search",className:"t",id:"e",onKeyPress:function(a){if("Enter"===a.key){if(""===a.target.value)return void e.onSearch(e._rxList.articles);e._rxList.articles.map((function(e){null!=e.author&&-1!==e.author.search(a.target.value)&&(t=[].concat(Object(v.a)(t),[e])),null!=e.title&&-1!==e.title.search(a.target.value)&&(t=[].concat(Object(v.a)(t),[e])),null!=e.description&&-1!==e.description.search(a.target.value)&&(t=[].concat(Object(v.a)(t),[e])),null!=e.content&&-1!==e.content.search(a.target.value)&&(t=[].concat(Object(v.a)(t),[e]))})),e.onSearch(t)}}})))};var w=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),i=Object(s.a)(l,2),o=i[0],u=i[1],m=Object(n.useState)({_ListView:!0,_gridView:!1}),d=Object(s.a)(m,2),v=d[0],w=d[1];return Object(n.useEffect)((function(){fetch("https://newsapi.org/v2/everything?q=reactjs&apiKey=363d26dd3d664d199ca63adc371e22aa&pageSize=10&page=1&sortBy=publishedA").then(f).catch(E).then((function(e){u(e),c(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{onSearch:function(e){console.log("Hi",e),c({articles:e})},_rxList:o}),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"srtBtn"},r.a.createElement("i",{className:"fas fa-list",onClick:function(){w({_ListView:!0,_gridView:!1})}}),r.a.createElement("i",{className:"fas fa-th",onClick:function(){w({_ListView:!1,_gridView:!0})}}),r.a.createElement("i",{className:"fas fa-sort-amount-down",onClick:function(){var e=o.articles.sort((function(e,t){return new Date(e.publishedAt)-new Date(t.publishedAt)}));u({articles:e})}}),r.a.createElement("i",{className:"fas fa-sort-amount-up",onClick:function(){var e=o.articles.sort((function(e,t){var a=new Date(e.publishedAt);return new Date(t.publishedAt)-a}));u({articles:e})}})),v._gridView&&r.a.createElement(p,{_rxList:a}),v._ListView&&r.a.createElement(h,{_rxList:a})))};a(21),a(22);var b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c4bb255a.chunk.js.map