(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{246:function(t,e,n){"use strict";var r=n(9),o=n(5),c=n(84),l=n(15),d=n(10),v=n(38),m=n(168),f=n(64),h=n(4),_=n(52),C=n(65).f,w=n(29).f,N=n(14).f,x=n(249).trim,I="Number",E=o.Number,k=E.prototype,O=v(_(k))==I,A=function(t){var e,n,r,o,c,l,d,code,v=f(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=x(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+v}for(l=(c=v.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+v};if(c(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var y,T=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof T&&(O?h((function(){k.valueOf.call(n)})):v(n)!=I)?m(new E(A(e)),n,T):A(e)},S=r?C(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),$=0;S.length>$;$++)d(E,y=S[$])&&!d(T,y)&&N(T,y,w(E,y));T.prototype=k,k.constructor=T,l(o,I,T)}},249:function(t,e,n){var r=n(18),o="["+n(250)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},250:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},252:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("0fa028db",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n(252)},265:function(t,e,n){var r=n(48)(!1);r.push([t.i,".is-borderless[data-v-58b6bcc5]{border:none}.field.is-grouped>.control[data-v-58b6bcc5]:not(:last-child){margin-right:.25rem}.is-warning.is-inverted[data-v-58b6bcc5]{background:#fff}.is-warning.is-inverted[data-v-58b6bcc5]:hover{background:#f2f2f2}#nav-menu[data-v-58b6bcc5]{background-color:#fff;border:1px solid #dbdbdb;border-radius:.375rem;position:relative;height:42px;overflow:hidden;opacity:.75;transition:opacity .5s ease;transform:translateX(54px)}#nav-menu[data-v-58b6bcc5]:hover,.current-section-home #nav-menu[data-v-58b6bcc5],.menu-open #nav-menu[data-v-58b6bcc5]{opacity:1}#custom-menu .field[data-v-58b6bcc5]{margin-right:40px;overflow:hidden}#custom-menu.menu-open .field[data-v-58b6bcc5]{overflow-x:scroll}#hamburger-button[data-v-58b6bcc5]{position:absolute;right:0;top:0;border-radius:0}.menu-open #hamburger-button[data-v-58b6bcc5]{background:#f2f2f2}#custom-menu[data-v-58b6bcc5]{position:fixed;top:0;right:0;margin-top:8px;margin-left:12px;margin-right:12px;width:40px;z-index:1000!important;transition:all .5s ease}#custom-menu.menu-open[data-v-58b6bcc5]{width:calc(100% - 24px)!important}a.button[data-v-58b6bcc5]{transition:background .5s ease}",""]),t.exports=r},278:function(t,e,n){"use strict";n.r(e);n(246);var r=n(245),o=n.n(r),c={name:"navbar-small",props:{active:Number},data:function(){return{menuOpen:!1}},mounted:function(){o()({targets:this.$refs.menu,duration:1e3,delay:500,easing:"easeInOutCubic",translateX:[54,0]})},methods:{menuToggle:function(){this.menuOpen=!this.menuOpen,console.log("hello world")}}},l=(n(264),n(37)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"is-hidden-desktop",class:{"menu-open":t.menuOpen},attrs:{id:"custom-menu"}},[n("div",{ref:"menu",attrs:{id:"nav-menu"}},[n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control"},[n("a",{staticClass:"button is-link",class:0===t.active?"is-light":"is-inverted",attrs:{href:"#home"}},[t._m(0),t._v(" "),0===t.active?n("span",[t._v("Home")]):t._e()])]),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-primary",class:1===t.active?"is-light":"is-inverted",attrs:{href:"#about"}},[t._m(1),t._v(" "),1===t.active?n("span",[t._v("About")]):t._e()])]),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-danger",class:2===t.active?"is-light":"is-inverted",attrs:{href:"#work"}},[t._m(2),t._v(" "),2===t.active?n("span",[t._v("Work")]):t._e()])]),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-success",class:3===t.active?"is-light":"is-inverted",attrs:{href:"#contact"}},[t._m(3),t._v(" "),3===t.active?n("span",[t._v("Contact")]):t._e()])])]),t._v(" "),n("button",{staticClass:"button is-borderless",attrs:{id:"hamburger-button"},on:{click:t.menuToggle}},[n("div",{staticClass:"icon"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.menuOpen,expression:"!menuOpen"}],staticClass:"material-icons-round"},[t._v("\n          menu\n        ")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen,expression:"menuOpen"}],staticClass:"material-icons-round"},[t._v("\n          close\n        ")])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("span",{staticClass:"material-icons-round"},[t._v("\n              home\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("span",{staticClass:"material-icons-round"},[t._v("\n              person\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("span",{staticClass:"material-icons-round"},[t._v("\n              description\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("span",{staticClass:"material-icons-round"},[t._v("\n              mail\n            ")])])}],!1,null,"58b6bcc5",null);e.default=component.exports}}]);