(function(e){function t(t){for(var n,c,o=t[0],s=t[1],u=t[2],d=0,p=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("div",[r("v-toolbar",{attrs:{dark:"",flat:""}},[r("v-toolbar-title",[e._v("Dinner aid")]),r("v-spacer"),e.$auth.loading?e._e():r("div",[e.$auth.isAuthenticated?e._e():r("v-btn",{on:{click:e.login}},[e._v("Log in")]),e.$auth.isAuthenticated?r("v-btn",{on:{click:e.logout}},[e._v("Log out")]):e._e()],1)],1),r("v-tabs",{attrs:{centered:""}},[r("v-tab",{attrs:{to:"/"}},[e._v("Groceries")]),r("v-tab",{attrs:{to:"/recipes"}},[e._v("Recipes")])],1)],1),r("div",{staticClass:"app-margin"},[e.$auth.isAuthenticated?r("div",[r("router-view")],1):e._e()])])},i=[],c=r("1da1"),o=(r("96cf"),{name:"App",watch:{isAuthenticated:function(e){e&&this.authLoaded&&this.load_data()},authLoading:function(e){e||this.$auth.isAuthenticated||this.login()}},computed:{authLoaded:function(){return this.$auth.auth0Client},isAuthenticated:function(){return this.$auth.isAuthenticated&&!this.$auth.loading},authLoading:function(){return this.$auth.loading}},methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin})},load_data:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$auth.getTokenSilently();case 2:t=e.sent,this.$store.dispatch("a_load_groceries",t),this.$store.dispatch("a_load_recipes",t),this.$store.dispatch("a_load_UOM",t);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),s=o,u=(r("e2b4"),r("2877")),l=r("6544"),d=r.n(l),p=r("7496"),h=r("8336"),f=r("2fa4"),m=r("71a3"),v=r("fe57"),g=r("71d9"),_=r("2a7f"),b=Object(u["a"])(s,a,i,!1,null,"3a01a7db",null),y=b.exports;d()(b,{VApp:p["a"],VBtn:h["a"],VSpacer:f["a"],VTab:m["a"],VTabs:v["a"],VToolbar:g["a"],VToolbarTitle:_["a"]});var w=r("8c4f"),x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$store.state.groceries?r("div",[r("GroceryMaker",{attrs:{selected_grocery:e.selected_grocery},on:{done:e.stop_editing}}),e.table?r("div",[r("DynamicTable",{attrs:{tableData:e.table},on:{clickEvent:function(t){return e.start_editing(t)}}})],1):e._e()],1):e._e()},k=[],O=(r("7db0"),r("d3b7"),r("5530")),R=r("3835");r("4de4"),r("d81d"),r("159b"),r("07ac"),r("0481"),r("4069"),r("b64b");function j(e){var t=e.map((function(e){return e.section})).filter((function(e,t,r){return r.indexOf(e)===t})),r=$(t,e),n=Object(R["a"])(r,2),a=n[0],i=n[1],c=C(a,i);return c}function $(e,t){var r={},n={};return e.forEach((function(e){r[e]="",n[e]=[]})),t.forEach((function(e){n[e.section].push(e.norwegian)})),[r,n]}function C(e,t){var r=[],n=[];Object.values(t).forEach((function(e){r.push(e)}));var a=r.flat();return a.forEach((function(){var r=Object(O["a"])({},e);Object.keys(e).forEach((function(e){t[e].length&&(r[e]=t[e].pop())}));var a=Object.values(r).every((function(e){return""===e}));a||n.push(r)})),n}var T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.tableData,"items-per-page":5},scopedSlots:e._u([e._l(e.headers,(function(t,n){return{key:"item."+t.value,fn:function(a){var i=a.item;return[r("span",{key:n,staticClass:"hover-pointer",on:{click:function(r){return e.on_click(i[""+t.value])}}},[e._v(e._s(i[""+t.value]))])]}}}))],null,!0)})],1)},A=[],V={props:{tableData:{type:Array,default:function(){return[]},required:!0}},data:function(){return{}},computed:{headers:function(){if(this.tableData[0])return Object.keys(this.tableData[0]).map((function(e){return{text:e,align:"start",sortable:!1,value:e}}))}},methods:{on_click:function(e){this.$emit("clickEvent",e)}}},S=V,D=(r("f225"),r("8fea")),E=Object(u["a"])(S,T,A,!1,null,"2f2652ac",null),N=E.exports;d()(E,{VDataTable:D["a"]});var M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"primary"}},"v-btn",a,!1),n),[e._v(" Create grocery ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"text-h5"},[e._v(e._s("Create grocery"))])]),r("v-card-text",[r("v-container",[r("v-form",[r("v-select",{attrs:{items:e.$store.getters.grocery_sections,label:"Sections"},model:{value:e.grocery.section,callback:function(t){e.$set(e.grocery,"section",t)},expression:"grocery.section"}}),r("v-text-field",{attrs:{label:"Norwegian"},model:{value:e.grocery.norwegian,callback:function(t){e.$set(e.grocery,"norwegian",t)},expression:"grocery.norwegian"}}),r("v-text-field",{attrs:{label:"English"},model:{value:e.grocery.english,callback:function(t){e.$set(e.grocery,"english",t)},expression:"grocery.english"}}),r("v-text-field",{attrs:{label:"Standard quantity"},model:{value:e.grocery.standard_quantity,callback:function(t){e.$set(e.grocery,"standard_quantity",t)},expression:"grocery.standard_quantity"}}),r("v-select",{attrs:{items:e.$store.state.uom.map((function(e){return e.name})),label:"Unit of mesure"},model:{value:e.grocery.uom,callback:function(t){e.$set(e.grocery,"uom",t)},expression:"grocery.uom"}}),r("v-btn",{attrs:{disabled:!e.can_save},on:{click:e.save_grocery}},[e._v(" Save ")]),r("v-btn",{on:{click:e.cancel}},[e._v(" Cancel ")])],1)],1)],1)],1)],1)},B=[],L=(r("99af"),r("bc3a")),U=r.n(L),G="http://localhost:5000/api/";function q(e){return I.apply(this,arguments)}function I(){return I=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ie("groceries",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function P(e){return F.apply(this,arguments)}function F(){return F=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ie("recipes",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function W(e){return J.apply(this,arguments)}function J(){return J=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ie("uom",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}function z(e,t){return K.apply(this,arguments)}function K(){return K=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",oe("saveGrocery",t,r));case 1:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function H(e,t){return Q.apply(this,arguments)}function Q(){return Q=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",oe("editGrocery",t,r));case 1:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function X(e,t){return Y.apply(this,arguments)}function Y(){return Y=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",oe("saveRecipe",t,r));case 1:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}function Z(e,t){return ee.apply(this,arguments)}function ee(){return ee=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",oe("editRecipe",t,r));case 1:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}function te(e,t){return re.apply(this,arguments)}function re(){return re=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",oe("orderRecipe",t,r));case 1:case"end":return e.stop()}}),e)}))),re.apply(this,arguments)}function ne(e,t){return ae.apply(this,arguments)}function ae(){return ae=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ue("deleteRecipe",t,r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function ie(e,t){return ce.apply(this,arguments)}function ce(){return ce=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={},e.next=3,U.a.get("".concat(G).concat(t),{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){return n=e}));case 3:return e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),ce.apply(this,arguments)}function oe(e,t,r){return se.apply(this,arguments)}function se(){return se=Object(c["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U.a.post("".concat(G).concat(t),r,{headers:{Authorization:"Bearer ".concat(n)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),se.apply(this,arguments)}function ue(e,t,r){return le.apply(this,arguments)}function le(){return le=Object(c["a"])(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={},e.next=3,U.a.delete("".concat(G).concat(t),{headers:{Authorization:"Bearer ".concat(n)},data:r}).then((function(e){return a=e}));case 3:return e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)}))),le.apply(this,arguments)}var de={props:{selected_grocery:{type:Object,default:function(){},required:!1}},data:function(){return{groceryTemplate:{norwegian:"",english:"",section:"",uom:"",standard_quantity:""},grocery:{},original_grocery:{},is_editing:!1,dialog:!1}},mounted:function(){var e;null!==(e=this.selected_grocery)&&void 0!==e&&e.norwegian?(this.is_editing=!0,this.original_grocery=Object(O["a"])({},this.selected_grocery),this.grocery=Object(O["a"])({},this.selected_grocery)):(this.is_editing=!1,this.original_grocery={},this.grocery=Object(O["a"])({},this.groceryTemplate))},watch:{selected_grocery:function(e){null!==e&&void 0!==e&&e.norwegian?(this.is_editing=!0,this.original_grocery=Object(O["a"])({},e),this.grocery=Object(O["a"])({},e),this.dialog=!0):(this.original_grocery={},this.is_editing=!1)}},computed:{can_save:function(){return""!==this.grocery.English&&""!==this.grocery.Norwegian&&""!==this.grocery.Section&&""!==this.grocery.uom&&""!==this.grocery.standard_quantity}},methods:{save_grocery:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$auth.getTokenSilently();case 2:if(t=e.sent,!this.is_editing){e.next=8;break}return e.next=6,H({original:this.original_grocery,edited:this.grocery},t);case 6:e.next=10;break;case 8:return e.next=10,z(this.grocery,t);case 10:this.$store.dispatch("a_refresh_store",t),this.grocery=Object(O["a"])({},this.groceryTemplate),this.dialog=!1,this.$emit("done");case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){this.is_editing=!1,this.dialog=!1,this.grocery={},this.$emit("done")}}},pe=de,he=r("b0af"),fe=r("99d9"),me=r("a523"),ve=r("169a"),ge=r("4bd4"),_e=r("b974"),be=r("8654"),ye=Object(u["a"])(pe,M,B,!1,null,null,null),we=ye.exports;d()(ye,{VBtn:h["a"],VCard:he["a"],VCardText:fe["a"],VCardTitle:fe["b"],VContainer:me["a"],VDialog:ve["a"],VForm:ge["a"],VSelect:_e["a"],VTextField:be["a"]});var xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.mobile?e._e():r("BasicTable",{attrs:{tableData:e.tableData},on:{clickEvent:function(t){return e.$emit("clickEvent",t)}}}),e.mobile?r("v-select",{attrs:{items:e.headers,label:"Sections",clearable:!0},model:{value:e.selected_section,callback:function(t){e.selected_section=t},expression:"selected_section"}}):e._e(),e.mobile&&e.selected_section&&e.selected_section.length>0?r("BasicList",{attrs:{listData:e.list_data},on:{clickEvent:function(t){return e.$emit("clickEvent",t)}}}):e._e()],1)},ke=[],Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{flat:""}},e._l(e.list,(function(t,n){return r("v-list-item",{key:n,on:{click:function(r){return e.$emit("clickEvent",t)}}},[r("span",[e._v(" "+e._s(t)+" ")])])})),1)},Re=[],je={props:{listData:{type:Array,default:function(){return[]}}},computed:{list:function(){return this.listData.filter((function(e){return e.length>0}))}}},$e=je,Ce=r("da13"),Te=Object(u["a"])($e,Oe,Re,!1,null,null,null),Ae=Te.exports;d()(Te,{VCard:he["a"],VListItem:Ce["a"]});var Ve={components:{BasicTable:N,BasicList:Ae},props:{tableData:{type:Array,default:function(){return[]}}},data:function(){return{selected_section:""}},computed:{mobile:function(){return this.$vuetify.breakpoint.xs},headers:function(){if(this.tableData[0])return Object.keys(this.tableData[0])},list_data:function(){var e=this;return this.tableData.map((function(t){return t[e.selected_section]}))}}},Se=Ve,De=Object(u["a"])(Se,xe,ke,!1,null,null,null),Ee=De.exports;d()(De,{VSelect:_e["a"]});var Ne={components:{BasicTable:N,GroceryMaker:we,DynamicTable:Ee},data:function(){return{is_creating:!1,is_editing:!1,selected_grocery:{}}},computed:{table:function(){return j(this.$store.state.groceries)}},methods:{stop_editing:function(){this.is_creating=!1,this.is_editing=!1,this.selected_grocery={}},start_editing:function(e){this.is_editing=!0,this.selected_grocery=this.$store.state.groceries.find((function(t){return t.norwegian===e}))}}},Me=Ne,Be=Object(u["a"])(Me,x,k,!1,null,null,null),Le=Be.exports,Ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.is_creating?e._e():r("v-btn",{on:{click:function(t){e.is_creating=!0}}},[e._v(" Create recipe ")]),e.dropdown_selected&&!e.is_creating?r("RecipeEditor",{attrs:{title:e.dropdown_selected},on:{cancel:function(t){e.is_editing=!1}}}):e._e(),e.dropdown_selected&&!e.is_creating?r("v-btn",{on:{click:e.delete_recipe}},[e._v(" Delete ")]):e._e(),e.is_creating?e._e():r("v-select",{attrs:{items:e.recipe_dropdown_list,label:"Select recipe",clearable:!0},on:{input:e.dropdown_click}}),!e.dropdown_selected||e.is_creating||e.is_editing?e._e():r("DisplayRecipe",{attrs:{title:e.dropdown_selected}}),e.is_creating?r("RecipeMaker",{on:{doneMaking:function(t){e.is_creating=!1}}}):e._e()],1)},Ge=[],qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("AccessWrapper",{attrs:{AccessRoles:["Admin"]}},[r("v-btn",{on:{click:e.order}},[e._v(" Order ")])],1),r("v-list",{staticClass:"mt-3p"},e._l(e.current_recipe_groceries,(function(t,n){return r("v-list-item",{key:n},[r("div",{staticClass:"flex-row justify-end w-100p",class:e.mobile?"":"mlr-10p"},[r("span",{staticClass:"flex-grow-1 text-align-l mr-3p"},[e._v(" "+e._s(t.Name)+" ")]),r("span",{staticClass:"text-align-r mr-3p"},[e._v(" "+e._s(t.Amount)+" ")]),r("span",{staticClass:"w-5p"},[e._v(" "+e._s(t.UOM)+" ")])])])})),1)],1)},Ie=[],Pe=r("2909"),Fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.hasAccess?e._t("default"):e._e()],2)},We=[],Je=(r("caad"),r("2532"),{props:{AccessRoles:{type:Array,default:function(){return[]}}},computed:{hasAccess:function(){var e=this;return this.AccessRoles.every((function(t){var r;return null===(r=e.roles)||void 0===r?void 0:r.includes(t)}))},user:function(){return this.$auth.user},roles:function(){return this.user["".concat("https://dinneraid-api.herokuapp.com","/roles")]}}}),ze=Je,Ke=Object(u["a"])(ze,Fe,We,!1,null,null,null),He=Ke.exports,Qe={components:{BasicTable:N,AccessWrapper:He},props:{title:{type:String,default:""}},computed:{current_recipe_groceries:function(){var e,t=this;return null===(e=this.$store.state.recipes.find((function(e){return e.Name===t.title})))||void 0===e?void 0:e.Table.map((function(e){return{Name:e.norwegian,Amount:e.amount,UOM:e.uom}}))},localGroceries:function(){var e=this;return Object(Pe["a"])(this.$store.state.recipes.find((function(t){return t.Name===e.title})).Table)},mobile:function(){return this.$vuetify.breakpoint.xs}},methods:{order:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$auth.getTokenSilently();case 2:return t=e.sent,e.next=5,te(this.localGroceries,t);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},Xe=Qe,Ye=r("8860"),Ze=Object(u["a"])(Xe,qe,Ie,!1,null,null,null),et=Ze.exports;d()(Ze,{VBtn:h["a"],VList:Ye["a"],VListItem:Ce["a"]});var tt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",[r("v-text-field",{attrs:{label:"Recipe name"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),r("v-btn",{attrs:{disabled:!e.can_save||!e.correctAmount},on:{click:e.save_recipe}},[e._v(" Save ")]),r("v-btn",{on:{click:function(t){return e.$emit("doneMaking")}}},[e._v(" Cancel ")])],1),r("BasicTable",{attrs:{tableData:e.mapped_groceries},on:{clickEvent:e.add_to_order}}),r("ShoppingListEditor",{on:{update:e.check_amount},model:{value:e.orders,callback:function(t){e.orders=t},expression:"orders"}})],1)},rt=[],nt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",e._l(e.fooTable,(function(t,n){return r("v-row",{key:n+1,attrs:{justify:"start"}},e._l(t,(function(t,a){return r("v-col",{key:n+1*a,attrs:{md:"4"}},[r("v-card",{staticClass:"pa-2"},[r("div",{staticClass:"flex-row flex-align-base justify-center"},[r("span",{staticClass:"w-7em text-align-r mr-5p"},[e._v(" "+e._s(t.norwegian)+" ")]),r("span",{staticClass:"w-3em mr-3p"},[r("v-text-field",{staticClass:"input-text-align-r",attrs:{dense:"",rules:[e.rules.number]},on:{input:function(t){return e.$emit("update",e.value)}},model:{value:t.amount,callback:function(r){e.$set(t,"amount",r)},expression:"k.amount"}})],1),r("span",{staticClass:"text-align-l w-2em"},[e._v(" "+e._s(t.uom)+" ")]),r("div",[r("v-icon",{attrs:{dense:"",color:"red"},on:{click:function(r){return e.remove_from_table(t)}}},[e._v(" mdi-trash-can ")])],1)])])],1)})),1)})),1)],1)},at=[],it=(r("25eb"),r("a9e3"),r("fb6a"),{props:{value:{type:Array,default:function(){return[]}}},data:function(){return{tableData:this.value,numberOfColumns:3,rules:{number:function(e){return!isNaN(parseInt(e))||""}}}},watch:{value:function(e){this.tableData=e}},computed:{rowCount:function(){var e=Number.parseInt(this.tableData.length/this.numberOfColumns),t=this.tableData.length%this.numberOfColumns;return t>0?e+1:e},fooTable:function(){for(var e=[],t=0;t<this.tableData.length;t+=this.numberOfColumns)e.push(this.tableData.slice(t,t+this.numberOfColumns));return e}},methods:{remove_from_table:function(e){this.tableData=Object(Pe["a"])(this.tableData.filter((function(t){return t.norwegian!==e.norwegian}))),this.$emit("input",this.tableData)}}}),ct=it,ot=r("62ad"),st=r("132d"),ut=r("0fd9"),lt=Object(u["a"])(ct,nt,at,!1,null,"2d8f4258",null),dt=lt.exports;d()(lt,{VCard:he["a"],VCol:ot["a"],VContainer:me["a"],VIcon:st["a"],VRow:ut["a"],VTextField:be["a"]});var pt={components:{BasicTable:N,ShoppingListEditor:dt},data:function(){return{title:"",orders:[],correctAmount:!0}},watch:{orders:function(e){this.check_amount(e)}},computed:{mapped_groceries:function(){return j(this.$store.state.groceries)},can_save:function(){return""!==this.title&&this.orders.length>0&&!this.name_exists},name_exists:function(){var e=this;return!!this.recipeNames&&this.recipe_names.some((function(t){return e.title.toLowerCase()===t.toLowerCase()}))},recipe_names:function(){return this.$store.state.recipes.map((function(e){return e.Name}))}},methods:{add_to_order:function(e){var t=this.orders.find((function(t){return t.norwegian===e}));if(!t){var r=this.$store.state.groceries.find((function(t){return t.norwegian===e}));r.amount=r.standard_quantity,this.orders.push(r)}},save_recipe:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={Name:this.title,GroceryTable:this.orders},e.next=3,this.$auth.getTokenSilently();case 3:return r=e.sent,e.next=6,X(t,r);case 6:this.title="",this.orders=[],this.$store.dispatch("a_refresh_store",r),this.$emit("doneMaking");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),check_amount:function(e){var t=e.map((function(e){return parseInt(e.amount)}));this.correctAmount=t.every((function(e){return!isNaN(e)}))}}},ht=pt,ft=Object(u["a"])(ht,tt,rt,!1,null,null,null),mt=ft.exports;d()(ft,{VBtn:h["a"],VRow:ut["a"],VTextField:be["a"]});var vt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"primary"}},"v-btn",a,!1),n),[e._v(" Edit recipe ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"text-h5"},[e._v(e._s("Edit recipe "+e.title))])]),r("v-card-text",[r("v-container",[r("span",[e._v("Add groceries:")]),r("DynamicTable",{attrs:{tableData:e.mapped_groceries},on:{clickEvent:function(t){return e.add_to_order(t)}}}),r("ShoppingListEditor",{model:{value:e.orders,callback:function(t){e.orders=t},expression:"orders"}}),r("v-btn",{attrs:{disabled:!e.hasChanged||!e.correctAmount},on:{click:e.save_recipe}},[e._v(" Save ")])],1)],1)],1)],1)},gt=[],_t=(r("4e827"),r("5db7"),r("73d9"),r("e9c4"),{components:{BasicTable:N,ShoppingListEditor:dt,DynamicTable:Ee},props:{title:{type:String,default:""}},data:function(){return{dialog:!1,orders:[],originalRecipeGroceries:[]}},mounted:function(){this.loadForm(this.title)},watch:{title:function(e){this.loadForm(e)}},computed:{mapped_groceries:function(){return j(this.$store.state.groceries)},hasChanged:function(){var e=this.orders.flatMap((function(e){return Object.values(e)})).sort(),t=this.originalRecipeGroceries.flatMap((function(e){return Object.values(e)})).sort();return e.some((function(e,r){return"".concat(e)!=="".concat(t[r])}))},correctAmount:function(){var e=this.orders.map((function(e){return parseInt(e.amount)}));return e.every((function(e){return!isNaN(e)}))}},methods:{add_to_order:function(e){var t=this.orders.find((function(t){return t.norwegian===e}));if(!t){var r=this.$store.state.groceries.find((function(t){return t.norwegian===e}));r.amount=r.standard_quantity,this.orders.push(r)}},save_recipe:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$auth.getTokenSilently();case 2:return t=e.sent,r={Name:this.title,GroceryTable:this.orders},e.next=6,Z(r,t);case 6:return e.next=8,this.$store.dispatch("a_refresh_store",t);case 8:this.dialog=!1,this.loadForm(this.title);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadForm:function(e){this.orders=this.$store.state.recipes.find((function(t){return t.Name===e})).Table,this.originalRecipeGroceries=JSON.parse(JSON.stringify(this.orders))}}}),bt=_t,yt=Object(u["a"])(bt,vt,gt,!1,null,null,null),wt=yt.exports;d()(yt,{VBtn:h["a"],VCard:he["a"],VCardText:fe["a"],VCardTitle:fe["b"],VContainer:me["a"],VDialog:ve["a"]});var xt={components:{DisplayRecipe:et,RecipeMaker:mt,RecipeEditor:wt},data:function(){return{dropdown_selected:null,is_creating:!1,is_editing:!1}},computed:{recipe_dropdown_list:function(){var e;return null===(e=this.$store.state.recipes)||void 0===e?void 0:e.map((function(e){return e.Name}))}},methods:{dropdown_click:function(e){this.dropdown_selected=e},delete_recipe:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$auth.getTokenSilently();case 2:return t=e.sent,e.next=5,ne({Name:this.dropdown_selected},t);case 5:this.dropdown_selected=null,this.$store.dispatch("a_refresh_store",t);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},kt=xt,Ot=Object(u["a"])(kt,Ue,Ge,!1,null,null,null),Rt=Ot.exports;d()(Ot,{VBtn:h["a"],VSelect:_e["a"]});var jt,$t=r("15fd"),Ct=(r("ac1f"),r("841c"),r("9767")),Tt=["onRedirectCallback","redirectUri"],At=function(){return window.history.replaceState({},document.title,window.location.pathname)},Vt=function(e){var t=e.onRedirectCallback,r=void 0===t?At:t,a=e.redirectUri,i=void 0===a?window.location.origin:a,o=Object($t["a"])(e,Tt);return jt||(jt=new n["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(e,t){var r=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r.popupOpen=!0,n.prev=1,n.next=4,r.auth0Client.loginWithPopup(e,t);case 4:return n.next=6,r.auth0Client.getUser();case 6:return r.user=n.sent,n.next=9,r.auth0Client.isAuthenticated();case 9:r.isAuthenticated=n.sent,r.error=null,n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](1),r.error=n.t0,console.error(n.t0);case 17:return n.prev=17,r.popupOpen=!1,n.finish(17);case 20:return n.next=22,r.auth0Client.getUser();case 22:r.user=n.sent,r.isAuthenticated=!0;case 24:case"end":return n.stop()}}),n,null,[[1,13,17,20]])})))()},handleRedirectCallback:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.auth0Client.handleRedirectCallback();case 4:return t.next=6,e.auth0Client.getUser();case 6:e.user=t.sent,e.isAuthenticated=!0,e.error=null,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),e.error=t.t0;case 14:return t.prev=14,e.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})))()},loginWithRedirect:function(e){return this.auth0Client.loginWithRedirect(e)},getIdTokenClaims:function(e){return this.auth0Client.getIdTokenClaims(e)},getTokenSilently:function(e){return this.auth0Client.getTokenSilently(e)},getTokenWithPopup:function(e){return this.auth0Client.getTokenWithPopup(e)},logout:function(e){return this.auth0Client.logout(e)}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(Ct["a"])(Object(O["a"])(Object(O["a"])({},o),{},{client_id:o.clientId,redirect_uri:i}));case 2:if(e.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=11;break}return t.next=7,e.auth0Client.handleRedirectCallback();case 7:n=t.sent,a=n.appState,e.error=null,r(a);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),e.error=t.t0;case 16:return t.prev=16,t.next=19,e.auth0Client.isAuthenticated();case 19:return e.isAuthenticated=t.sent,t.next=22,e.auth0Client.getUser();case 22:return e.user=t.sent,e.loading=!1,t.finish(16);case 25:case"end":return t.stop()}}),t,null,[[3,13,16,25]])})))()}}),jt)},St={install:function(e,t){e.prototype.$auth=Vt(t)}};n["a"].use(w["a"]);var Dt=[{path:"/",name:"Groceries",component:Le},{path:"/recipes",name:"Recipes",component:Rt}],Et=new w["a"]({mode:"history",routes:Dt}),Nt=Et,Mt=r("2f62");n["a"].use(Mt["a"]);var Bt=new Mt["a"].Store({state:{groceries:[],recipes:[],uom:[]},mutations:{m_set_groceries:function(e,t){e.groceries=t.data,e.groceries.slice()},m_set_recipes:function(e,t){e.recipes=t.data,e.recipes.slice()},m_set_uom:function(e,t){e.uom=t.data,e.uom.slice()}},actions:{a_load_groceries:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q(r);case 2:n=e.sent,this.commit("m_set_groceries",{data:n});case 4:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),a_load_recipes:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P(r);case 2:n=e.sent,this.commit("m_set_recipes",{data:n});case 4:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),a_load_UOM:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,W(r);case 2:n=e.sent,this.commit("m_set_uom",{data:n});case 4:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),a_refresh_store:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q(r);case 2:return n=e.sent,e.next=5,P(r);case 5:return a=e.sent,e.next=8,W(r);case 8:i=e.sent,this.commit("m_set_groceries",{data:n}),this.commit("m_set_recipes",{data:a}),this.commit("m_set_uom",{data:i});case 12:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},getters:{grocery_sections:function(e){return e.groceries.map((function(e){return e.section})).filter((function(e,t,r){return r.indexOf(e)===t}))}},modules:{}}),Lt=r("f309");n["a"].use(Lt["a"]);var Ut=new Lt["a"]({}),Gt=(r("90c2"),"dev-neqxom2y.us.auth0.com"),qt="leiwFHEFQ1jCwjMnD1U6DOKhjaMKx3WX",It="https://dev-neqxom2y.us.auth0.com/api/v2/";n["a"].use(St,{domain:Gt,clientId:qt,audience:It,onRedirectCallback:function(e){Nt.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),n["a"].config.productionTip=!1,new n["a"]({router:Nt,store:Bt,vuetify:Ut,render:function(e){return e(y)}}).$mount("#app")},"90c2":function(e,t,r){},a6cd:function(e,t,r){},e2b4:function(e,t,r){"use strict";r("f4f5")},f225:function(e,t,r){"use strict";r("a6cd")},f4f5:function(e,t,r){}});
//# sourceMappingURL=app.d26f1556.js.map