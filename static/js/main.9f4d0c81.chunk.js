(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),c=t.n(o),i=t(8),l=t(6),s=(t(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function u(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=t(15),d=t(16),f=t(2),p=t(3),m=t(5),v=t(4),b=(t(27),function(e){var n=e.id,t=e.name,r=e.email;return console.log("Card"),a.a.createElement("div",{id:"fa"},a.a.createElement("div",{id:"ch"},a.a.createElement("img",{className:"card",src:"https://robohash.org/".concat(n,"?size=200x200"),alt:"Robots"}),a.a.createElement("p",null,t),a.a.createElement("p",null,r)))}),g=function(e){var n=e.Info;return a.a.createElement("div",null,n.map((function(e,n){return a.a.createElement(b,{key:Math.random(),id:e.id,name:e.name,email:e.email})})))},E=(t(28),function(e){return a.a.createElement("div",{className:"Chil"},e.children)}),O=(t(29),function(e){var n=e.result;return a.a.createElement("div",null,a.a.createElement("input",{"aria-label":"Search ROBOTS",className:"search",type:"text",name:"serchbox",onChange:n,placeholder:"SERCH ROBOTS"}))}),w=function(e){Object(m.a)(t,e);var n=Object(v.a)(t);function t(e){var r;return Object(f.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(p.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Sorr Something Went wrong"):this.props.children}}]),t}(a.a.Component),j=(t(30),t(31),"SEARCH_FILED_CHANGE"),y="FETCH_ROBOTS_PENDING",R="FETCH_ROBOTS_FULLFILLED",k="FETCH_ROBOTS_ERROR",S=function(e){Object(m.a)(t,e);var n=Object(v.a)(t);function t(){return Object(f.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,n){return!1}},{key:"render",value:function(){return console.log("Header"),a.a.createElement("h1",{className:"head"},"ROBOFRIENDS")}}]),t}(a.a.Component),C=function(e){Object(m.a)(t,e);var n=Object(v.a)(t);function t(){return Object(f.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onRobots()}},{key:"render",value:function(){var e=this.props,n=e.onSerchChange,t=e.search,r=e.robots,o=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.length?a.a.createElement("div",{className:"tc "},a.a.createElement(S,null),a.a.createElement(O,{className:" pa6",result:n}),a.a.createElement(E,null,a.a.createElement(w,null,a.a.createElement(g,{Info:o})))):a.a.createElement("h1",null,"LOADING")}}]),t}(r.Component),N=Object(i.b)((function(e){return{search:e.handleSearch.search,robots:e.robotReducer.robots,pending:e.robotReducer.pending}}),(function(e){return{onSerchChange:function(n){return e((t=n.target.value,{type:j,payload:t}));var t},onRobots:function(){return e((function(e){e({type:y}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:R,payload:n})})).catch((function(n){return e({type:k,payload:n})}))}))}}}))(C),L=t(1),T={search:""},W={robots:[],pending:!0},B=Object(l.c)({handleSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case j:return Object(L.a)(Object(L.a)({},e),{},{search:n.payload});default:return e}},robotReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case y:return e;case R:return Object(L.a)(Object(L.a)({},e),{},{robots:n.payload,pending:!1});case k:return Object(L.a)(Object(L.a)({},e),{},{pending:!1});default:return e}}}),I=Object(l.d)(B,Object(l.a)(d.a,Object(h.createLogger)()));c.a.render(a.a.createElement(i.a,{store:I},a.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Robots",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Robots","/service-worker.js");s?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):u(n,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.9f4d0c81.chunk.js.map