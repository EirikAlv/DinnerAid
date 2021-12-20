(function(e){function t(t){for(var r,o,u=t[0],c=t[1],l=t[2],s=0,h=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},i=[];function o(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"80a5af2c"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=o(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}a[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("div",[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v("| "),e.$auth.isAuthenticated?n("router-link",{attrs:{to:"/profile"}},[e._v("Profile")]):e._e(),e.$auth.loading?e._e():n("div",[e.$auth.isAuthenticated?e._e():n("v-btn",{on:{click:e.login}},[e._v("Log in")]),e.$auth.isAuthenticated?n("v-btn",{on:{click:e.logout}},[e._v("Log out")]):e._e()],1)],1),n("router-view")],1)},i=[],o={name:"App",data:function(){return{}},methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin})}}},u=o,c=n("2877"),l=n("6544"),s=n.n(l),p=n("7496"),h=n("8336"),d=Object(c["a"])(u,a,i,!1,null,null,null),f=d.exports;s()(d,{VApp:p["a"],VBtn:h["a"]});n("d3b7"),n("3ca3"),n("ddb0");var v,g=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("img",{attrs:{src:e.$auth.user.picture}}),n("h2",[e._v(e._s(e.$auth.user.name))]),n("p",[e._v(e._s(e.$auth.user.email))])]),n("div",[n("pre",[e._v(e._s(JSON.stringify(e.$auth.user,null,2)))])])])},m=[],w={},k=Object(c["a"])(w,b,m,!1,null,null,null),y=k.exports,_=n("5530"),x=n("1da1"),C=n("15fd"),O=(n("caad"),n("2532"),n("ac1f"),n("841c"),n("96cf"),n("9767")),j=["onRedirectCallback","redirectUri"],A=function(){return window.history.replaceState({},document.title,window.location.pathname)},R=function(){return v},P=function(e){var t=e.onRedirectCallback,n=void 0===t?A:t,a=e.redirectUri,i=void 0===a?window.location.origin:a,o=Object(C["a"])(e,j);return v||(v=new r["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(e,t){var n=this;return Object(x["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.popupOpen=!0,r.prev=1,r.next=4,n.auth0Client.loginWithPopup(e,t);case 4:return r.next=6,n.auth0Client.getUser();case 6:return n.user=r.sent,r.next=9,n.auth0Client.isAuthenticated();case 9:n.isAuthenticated=r.sent,n.error=null,r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](1),n.error=r.t0,console.error(r.t0);case 17:return r.prev=17,n.popupOpen=!1,r.finish(17);case 20:return r.next=22,n.auth0Client.getUser();case 22:n.user=r.sent,n.isAuthenticated=!0;case 24:case"end":return r.stop()}}),r,null,[[1,13,17,20]])})))()},handleRedirectCallback:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.auth0Client.handleRedirectCallback();case 4:return t.next=6,e.auth0Client.getUser();case 6:e.user=t.sent,e.isAuthenticated=!0,e.error=null,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),e.error=t.t0;case 14:return t.prev=14,e.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})))()},loginWithRedirect:function(e){return this.auth0Client.loginWithRedirect(e)},getIdTokenClaims:function(e){return this.auth0Client.getIdTokenClaims(e)},getTokenSilently:function(e){return this.auth0Client.getTokenSilently(e)},getTokenWithPopup:function(e){return this.auth0Client.getTokenWithPopup(e)},logout:function(e){return this.auth0Client.logout(e)}},created:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(O["a"])(Object(_["a"])(Object(_["a"])({},o),{},{client_id:o.clientId,redirect_uri:i}));case 2:if(e.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=11;break}return t.next=7,e.auth0Client.handleRedirectCallback();case 7:r=t.sent,a=r.appState,e.error=null,n(a);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),e.error=t.t0;case 16:return t.prev=16,t.next=19,e.auth0Client.isAuthenticated();case 19:return e.isAuthenticated=t.sent,t.next=22,e.auth0Client.getUser();case 22:return e.user=t.sent,e.loading=!1,t.finish(16);case 25:case"end":return t.stop()}}),t,null,[[3,13,16,25]])})))()}}),v)},$={install:function(e,t){e.prototype.$auth=P(t)}},S=function(e,t,n){var r=R(),a=function(){if(r.isAuthenticated)return n();r.loginWithRedirect({appState:{targetUrl:e.fullPath}})};if(!r.loading)return a();r.$watch("loading",(function(e){if(!1===e)return a()}))};r["a"].use(g["a"]);var T=[{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/profile",name:"profile",component:y,beforeEnter:S}],U=new g["a"]({mode:"history",routes:T}),W=U,E=n("2f62");r["a"].use(E["a"]);var M=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),I=n("f309");r["a"].use(I["a"]);var L=new I["a"]({}),J="dev-neqxom2y.us.auth0.com",q="leiwFHEFQ1jCwjMnD1U6DOKhjaMKx3WX";r["a"].use($,{domain:J,clientId:q,onRedirectCallback:function(e){W.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),r["a"].config.productionTip=!1,new r["a"]({router:W,store:M,vuetify:L,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.820e0f6d.js.map