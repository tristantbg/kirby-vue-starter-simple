(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)a=s[p],i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={1:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/assets/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([5,0]),n()})({"3gN9":function(t,e,n){},5:function(t,e,n){t.exports=n("Vtdi")},"5pot":function(t,e,n){"use strict";var r=n("sivX"),i=n.n(r);i.a},OJUJ:function(t,e,n){"use strict";var r=n("3gN9"),i=n.n(r);i.a},Vtdi:function(t,e,n){"use strict";n.r(e);var r={};n.r(r);var i={};n.r(i);var o={};n.r(o);n("VRzm");var a=n("Kw5r"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{key:t.$route.path})],1)},u=[],c=new a["a"],l=c,p="RECEIVE_PAGES",f="RECEIVE_SITE",d="UPDATE_APP",v={name:"app",components:{},data:function(){return{}},beforeCreate:function(){this.$store.commit(p,{pages:window.Kirby.pages}),this.$store.commit(f,{site:window.Kirby.site})},created:function(){window.addEventListener("resize",this.onResize,!0),window.addEventListener("scroll",this.onScroll),window.addEventListener("orientationchange",this.onOrientationChange),this.onResize()},destroyed:function(){window.removeEventListener("resize",this.onResize,!0),window.removeEventListener("scroll",this.onScroll),window.removeEventListener("orientationchange",this.onOrientationChange)},methods:{onResize:function(t){var e=window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth;this.$store.commit(d,{field:"tablet",value:e<=960}),this.$store.commit(d,{field:"phone",value:e<=480}),l.$emit("app.resize",t)},onScroll:function(t){l.$emit("app.scroll",t)},onOrientationChange:function(t){l.$emit("app.orientationchange",t)}}},h=v,m=(n("nNx0"),n("KHd+")),g=Object(m["a"])(h,s,u,!1,null,null,null),b=g.exports,y=n("jE9Z"),w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"content-container"},[t._v("\n    Hi 2.0\n  ")])])}],j={name:"home",components:{},data:function(){return{}}},E=j,O=(n("5pot"),Object(m["a"])(E,w,_,!1,null,null,null)),$=O.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"content-container"})])}],x={name:"about",components:{},data:function(){return{}}},T=x,B=(n("sHcT"),Object(m["a"])(T,P,C,!1,null,null,null)),S=B.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project"},[n("div",{staticClass:"content-container",domProps:{innerHTML:t._s(t.page.text)}})])},J=[],L={name:"project",props:["uid"],components:{},computed:{page:function(){return this.$store.getters.getPageByUID(this.uid)}},data:function(){return{}}},R=L,z=(n("OJUJ"),Object(m["a"])(R,U,J,!1,null,null,null)),I=z.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects"},[n("div",{staticClass:"content-container"},[n("ul",t._l(t.subpages,function(e){return n("li",{key:e.uid},[n("router-link",{attrs:{to:{name:e.type,params:{uid:e.uid}}}},[t._v(t._s(e.title))])],1)}))])])},A=[],F={name:"projects",components:{},computed:{subpages:function(){return this.$store.getters.getPagesByType("project")}},data:function(){return{}}},H=F,M=(n("jsUO"),Object(m["a"])(H,k,A,!1,null,null,null)),N=M.exports;a["a"].use(y["a"]);var V=new y["a"]({mode:"history",routes:[{path:"/",name:"home",component:$},{path:"/projects",name:"projects",component:N},{path:"/project/:uid",name:"project",component:I,props:!0},{path:"/about",name:"about",component:S},{path:"*",redirect:"/"}]}),D=n("L2JU"),K=(n("sFTC"),[]),W=n("oyJW"),Q={pages:[]},X={getFileByURL:function(t,e){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.pages,i=r.length;while(i--){var o=r[i].files.length;while(o--)if(r[i].files[o].url===n)return r[i].files[o];var a=e.getFileByURL(n,r[i].children);if(a)return a}}},getPagesByType:function(t,e){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.pages,i=[];if(!r||!r.length)return i;for(var o=0;o<r.length;o++){r[o].type===n&&i.push(r[o]);var a=e.getPagesByType(n,r[o].children);i=i.concat(a)}return i}},getPageByUID:function(t,e){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.pages,i=r.length;while(i--){if(r[i].uid===n)return r[i];var o=e.getPageByUID(n,r[i].children);if(o)return o}}}},G={},Z=Object(W["a"])({},p,function(t,e){var n=e.pages;t.pages=n}),q={state:Q,getters:X,actions:G,mutations:Z},Y={site:{}},tt={},et={},nt=Object(W["a"])({},f,function(t,e){var n=e.site;t.site=n}),rt={state:Y,getters:tt,actions:et,mutations:nt},it={tablet:!1,phone:!1},ot={},at={},st=Object(W["a"])({},d,function(t,e){var n=e.field,r=e.value;a["a"].set(t,n,r)}),ut={state:it,getters:ot,actions:at,mutations:st},ct=!1;a["a"].use(D["a"]);var lt=new D["a"].Store({mutations:r,actions:i,getters:o,modules:{app:ut,pages:q,site:rt},strict:ct,plugins:K});a["a"].config.productionTip=!1,new a["a"]({router:V,store:lt,render:function(t){return t(b)}}).$mount("#app")},boi5:function(t,e,n){},jsUO:function(t,e,n){"use strict";var r=n("n9BF"),i=n.n(r);i.a},n9BF:function(t,e,n){},nNx0:function(t,e,n){"use strict";var r=n("boi5"),i=n.n(r);i.a},sHcT:function(t,e,n){"use strict";var r=n("vJAQ"),i=n.n(r);i.a},sivX:function(t,e,n){},vJAQ:function(t,e,n){}});
//# sourceMappingURL=app.c5fd58a6.js.map