(function(e){function t(t){for(var a,i,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)i=s[p],r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/projects"}},[e._v("Projects")])],1),n("router-view")],1)},o=[],i={beforeCreate:function(){this.$store.dispatch("site/loadSite")}},s=i,c=(n("7faf"),n("2877")),u=Object(c["a"])(s,r,o,!1,null,null,null),l=u.exports,p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("page-loader",{attrs:{id:e.id}})],1)},g=[],f=(n("a481"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-loader"},[e._t("loading",[e.page?e._e():n("p",[e._v("Loading...")])],{page:e.page}),e._t("default",[e.page?n("div",{domProps:{innerHTML:e._s(e.content.text)}}):e._e()],{page:e.page})],2)}),h=[],m=(n("96cf"),n("3b8d")),v=n("cebc"),b=n("2f62"),y={name:"page-loader",props:{id:{type:String,required:!0}},computed:Object(v["a"])({},Object(b["b"])("pages",["getPage"]),{page:function(){return this.getPage(this.id)},content:function(){return this.page.content||{}}}),created:function(){this.loadPage()},updated:function(){this.loadPage()},methods:{loadPage:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.page){e.next=2;break}return e.abrupt("return");case 2:this.$store.dispatch("pages/loadPage",{id:this.id}),this.$store.dispatch("pages/loadPageChildren",{id:this.id});case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},x=y,_=Object(c["a"])(x,f,h,!1,null,null,null),P=_.exports,w={name:"page",components:{PageLoader:P},computed:{id:function(){return this.$route.params.pathMatch.replace(/^\/+/,"").toLowerCase()}}},j=w,O=Object(c["a"])(j,d,g,!1,null,null,null),k=O.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("page-loader",{attrs:{id:e.id}})],1)},$=[],C={name:"home",components:{PageLoader:P},computed:{id:function(){return"home"}}},R=C,N=Object(c["a"])(R,S,$,!1,null,null,null),E=N.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"projects"},[n("p",[n("router-link",{attrs:{to:"/projects/new"}},[e._v("New Project")])],1),n("page-loader",{attrs:{id:e.id},scopedSlots:e._u([{key:"loading",fn:function(t){var a=t.page;return[a?e._e():n("div",[e._v("Loading projects...")])]}},{key:"default",fn:function(t){var a=t.page;return[a?[n("h1",[e._v(e._s(a.title))]),n("ul",e._l(a.children,function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:"/"+t.id}},[e._v(e._s(t.title))])],1)}),0)]:e._e()]}}])})],1)},J=[],M={name:"home",components:{PageLoader:P},computed:{id:function(){return"projects"}}},T=M,I=Object(c["a"])(T,L,J,!1,null,null,null),H=I.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project-new"},[n("form",{ref:"form",attrs:{method:"post",actions:"/rest/pages/projects/children"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("p",[n("label",[n("div",[e._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.payload.content.title,expression:"payload.content.title"}],attrs:{type:"text",name:"title"},domProps:{value:e.payload.content.title},on:{input:function(t){t.target.composing||e.$set(e.payload.content,"title",t.target.value)}}})])]),n("p",[n("label",[n("div",[e._v("Slug")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.payload.slug,expression:"payload.slug"}],attrs:{type:"text",name:"slug"},domProps:{value:e.payload.slug},on:{input:function(t){t.target.composing||e.$set(e.payload,"slug",t.target.value)}}})])]),n("p",[n("label",[n("div",[e._v("Headline")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.payload.content.headline,expression:"payload.content.headline"}],attrs:{name:"intro"},domProps:{value:e.payload.content.headline},on:{input:function(t){t.target.composing||e.$set(e.payload.content,"headline",t.target.value)}}})])]),n("p",[n("label",[n("div",[e._v("Intro")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.payload.content.intro,expression:"payload.content.intro"}],attrs:{name:"intro"},domProps:{value:e.payload.content.intro},on:{input:function(t){t.target.composing||e.$set(e.payload.content,"intro",t.target.value)}}})])]),n("p",[n("label",[n("div",[e._v("Text")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.payload.content.text,expression:"payload.content.text"}],attrs:{name:"text"},domProps:{value:e.payload.content.text},on:{input:function(t){t.target.composing||e.$set(e.payload.content,"text",t.target.value)}}})])]),n("input",{attrs:{type:"submit",value:"save",disabled:e.loading}}),e.loading?n("p",[e._v("Working...")]):e._e(),e.error?n("p",{staticStyle:{color:"red"}},[e._v(e._s(e.error))]):e._e(),e.success?n("p",{staticStyle:{color:"green"}},[e._v(e._s(e.success))]):e._e()])])},z=[],A=n("d225"),D=n("b0b4"),K=n("bc3a"),U=n.n(K),W=function(){function e(){Object(A["a"])(this,e);var t="api@email.mhgbrown.is",n="se44lifE";if(!t||!n)throw new Error("KirbyClient authorization values are missing! email: ".concat(t," password: ").concat(n));this.http=U.a.create({baseURL:"/rest",auth:{username:t,password:n},transformResponse:function(e){var t=JSON.parse(e);if("error"===t.status)throw new Error(t.message);return t.data}})}return Object(D["a"])(e,[{key:"getPath",value:function(e){return this.http.get(e)}},{key:"getSite",value:function(){return this.getPath("/site")}},{key:"createChildPage",value:function(e,t){return this.http.post("/pages/".concat(e,"/children"),t)}},{key:"publishPage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({status:"listed"},t);return this.http.patch("/pages/".concat(e,"/status"),n)}}]),e}(),B=new W,F={name:"new-project",data:function(){return{error:"",success:"",loading:!1,payload:{template:"project",slug:"",content:{title:"",intro:"",text:"",headline:""}}}},methods:{onSubmit:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,this.success="",this.error="",e.prev=3,t="projects",e.next=7,B.createChildPage(t,this.payload);case 7:return n=e.sent,e.next=10,B.publishPage("".concat(t,"+").concat(n.data.slug));case 10:if(a=this.$store.getters["pages/getPage"](t),a){e.next=14;break}return e.next=14,this.$store.dispatch("pages/loadPage",{id:t});case 14:return e.next=16,this.$store.dispatch("pages/loadPageChildren",{id:t});case 16:this.$refs.form.reset(),this.success="Page created successfully!",e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](3),console.error(e.t0),this.error=e.t0.message;case 24:this.loading=!1;case 25:case"end":return e.stop()}},e,this,[[3,20]])}));function t(){return e.apply(this,arguments)}return t}()}},G=F,Q=Object(c["a"])(G,q,z,!1,null,null,null),V=Q.exports;a["a"].use(p["a"]);var X=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:E},{path:"/projects",name:"projects",component:H},{path:"/projects/new",name:"new-project",component:V},{path:"*",name:"page",component:k}]}),Y=(n("ac6a"),n("5df3"),{}),Z={},ee={loadSite:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Promise.all([B.getSite(),B.getPath("/site/children")]);case 3:a=e.sent,r=a[0].data,r.children=a[1].data,n("setSite",{site:r});case 7:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},te={setSite:function(e,t){var n=t.site;Object.assign(e,n)}},ne={namespaced:!0,state:Y,getters:Z,actions:ee,mutations:te},ae=(n("20d6"),n("7514"),function(e){return e.replace(/^\/+/,"").replace(/\/([^\/]*)$/,"+$1")}),re={all:[]},oe={getPage:function(e){return function(t){return e.all.find(function(e){return e.id===t})}},getPageIndex:function(e){return function(t){return e.all.findIndex(function(e){return e.id===t})}}},ie={loadPage:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,o,i,s,c,u,l,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.state,r=t.commit,o=t.getters,i=n.id,s=ae(i),e.next=5,B.getPath("/pages/".concat(s));case 5:c=e.sent,u=c.data,l=o.getPageIndex(s),-1===l?r("addPage",{page:u}):(p=JSON.parse(JSON.stringify(a.all[l])),u.children=p.children,r("replacePage",{page:u,index:l}));case 9:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),loadPageChildren:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,o,i,s,c,u,l,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.state,r=t.commit,o=t.getters,i=n.id,s=ae(i),e.next=5,B.getPath("/pages/".concat(s,"/children"));case 5:c=e.sent,u=c.data,l=o.getPageIndex(s),-1===l?r("addPage",{page:{id:s,children:u}}):(p=JSON.parse(JSON.stringify(a.all[l])),p.children=u,r("replacePage",{page:p,index:l}));case 9:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},se={addPage:function(e,t){var n=t.page;e.all.push(n)},replacePage:function(e,t){var n=t.page,a=t.index;e.all.splice(a,1,n)}},ce={namespaced:!0,state:re,getters:oe,actions:ie,mutations:se},ue=n("b054"),le=n.n(ue);a["a"].use(b["a"]);var pe=!1,de=new b["a"].Store({modules:{site:ne,pages:ce},strict:pe,plugins:pe?[le()()]:[]});a["a"].config.productionTip=!1,new a["a"]({router:X,store:de,render:function(e){return e(l)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";var a=n("8fba"),r=n.n(a);r.a},"8fba":function(e,t,n){}});
//# sourceMappingURL=app.9cdddaf5.js.map