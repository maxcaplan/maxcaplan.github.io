(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{246:function(t,e,n){"use strict";var r=n(9),c=n(5),o=n(84),l=n(15),d=n(10),v=n(38),f=n(168),_=n(64),m=n(4),h=n(52),C=n(65).f,N=n(29).f,I=n(14).f,E=n(249).trim,k="Number",A=c.Number,w=A.prototype,x=v(h(w))==k,y=function(t){var e,n,r,c,o,l,d,code,v=_(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=E(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+v}for(l=(o=v.slice(2)).length,d=0;d<l;d++)if((code=o.charCodeAt(d))<48||code>c)return NaN;return parseInt(o,r)}return+v};if(o(k,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var S,$=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof $&&(x?m((function(){w.valueOf.call(n)})):v(n)!=k)?f(new A(y(e)),n,$):y(e)},F=r?C(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;F.length>M;M++)d(A,S=F[M])&&!d($,S)&&I($,S,N(A,S));$.prototype=w,w.constructor=$,l(c,k,$)}},249:function(t,e,n){var r=n(18),c="["+n(250)+"]",o=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},250:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},251:function(t,e,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("05e923f9",content,!0,{sourceMap:!1})},262:function(t,e,n){"use strict";n(251)},263:function(t,e,n){var r=n(48)(!1);r.push([t.i,"nav[data-v-0d42b7de]{background:transparent}.is-borderless[data-v-0d42b7de]{border:none}#nav-menu[data-v-0d42b7de]{border:1px solid #dbdbdb;border-radius:.375rem;padding:.5rem;background:#fff;opacity:.75;transition:opacity .5s ease;transform:translateX(calc(100% + 12px))}#nav-menu[data-v-0d42b7de]:hover,.current-section-home #nav-menu[data-v-0d42b7de]{opacity:1}.field.is-grouped>.control[data-v-0d42b7de]:not(:last-child){margin-right:.25rem}.is-warning.is-inverted[data-v-0d42b7de]{background:#fff}.is-warning.is-inverted[data-v-0d42b7de]:hover{background:#f2f2f2}a.button[data-v-0d42b7de]{transition:background .5s ease}",""]),t.exports=r},277:function(t,e,n){"use strict";n.r(e);n(246);var r=n(245),c=n.n(r),o={name:"navbar",props:{active:Number},mounted:function(){c()({targets:this.$refs.menu,duration:1e3,delay:500,easing:"easeInOutCubic",translateX:[260,0]})}},l=(n(262),n(37)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-menu"},[n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{ref:"menu",attrs:{id:"nav-menu"}},[n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control"},[n("a",{staticClass:"button is-link",class:0===t.active?"is-light":"is-inverted",attrs:{href:"#home"}},[t._m(0),t._v(" "),0===t.active?n("span",[t._v("Home")]):t._e()])]),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-primary",class:1===t.active?"is-light":"is-inverted",attrs:{href:"#about"}},[t._m(1),t._v(" "),1===t.active?n("span",[t._v("About")]):t._e()])]),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-danger",class:2===t.active?"is-light":"is-inverted",attrs:{href:"#work"}},[t._m(2),t._v(" "),2===t.active?n("span",[t._v("Work")]):t._e()])]),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-success",class:3===t.active?"is-light":"is-inverted",attrs:{href:"#contact"}},[t._m(3),t._v(" "),3===t.active?n("span",[t._v("Contact")]):t._e()])])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("span",{staticClass:"material-icons-round"},[t._v("\n                    home\n                  ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("span",{staticClass:"material-icons-round"},[t._v("\n                    person\n                  ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("span",{staticClass:"material-icons-round"},[t._v("\n                    description\n                  ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("span",{staticClass:"material-icons-round"},[t._v("\n                    mail\n                  ")])])}],!1,null,"0d42b7de",null);e.default=component.exports}}]);