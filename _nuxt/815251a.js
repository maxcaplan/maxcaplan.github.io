(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{243:function(t,e,o){var content=o(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("50cca031",content,!0,{sourceMap:!1})},247:function(t,e,o){"use strict";o.r(e);var r=o(245),n=o.n(r),l={name:"logo",mounted:function(){this.drawLogo()},methods:{drawLogo:function(){var t=this.$refs.logoPathFirst,e=this.$refs.logoPathLast,o=n.a.timeline({easing:"easeOutQuad",duration:1e3});return o.add({targets:this.$refs.wrapper,top:0,opacity:1,duration:500,delay:500}).add({targets:t,begin:function(){t.setAttribute("stroke","url(#linear)")},strokeDashoffset:[n.a.setDashoffset,0]}).add({targets:e,begin:function(){e.setAttribute("stroke","url(#linear)")},strokeDashoffset:[n.a.setDashoffset,0]},"-=500"),o},animateLogo:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];n()({targets:this.$refs.gradient,x1:t?0:-92.797607,y1:t?50.971962:101.9009,x2:t?185.63434:92.825981,y2:t?-50.92894:0,duration:500,easing:"easeOutCubic"})}}},f=(o(254),o(37)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"wrapper",attrs:{id:"logo-wrapper"}},[o("div",{staticClass:"is-clickable",attrs:{id:"logo"},on:{mouseenter:t.animateLogo,mouseleave:function(e){return t.animateLogo(!1)}}},[o("span",{staticClass:"icon is-large"},[o("svg",{staticClass:"logo-svg",attrs:{width:"92.837mm",height:"50.972mm",version:"1.1",viewBox:"0 0 92.836731 50.971962"}},[o("path",{ref:"logoPathFirst",attrs:{d:"M 8.4947642,42.476255 28.1139,8.4962459",fill:"none",stroke:"#00000000","stroke-linecap":"round","stroke-width":"16"}}),t._v(" "),o("path",{ref:"logoPathLast",attrs:{d:"m 67.354131,42.491548 c 9.391796,-4.5e-5 17.00535,-7.613554 17.00535,-17.00535 2.41e-4,-9.392061 -7.613554,-17.0058798 -17.00535,-17.0058798 -6.075022,0.00397 -11.686234,3.2482488 -14.720967,8.5110098 l 0.0068,-4.77e-4 -14.71885,25.485404",fill:"none",stroke:"#00000000","stroke-linecap":"round","stroke-width":"16"}}),t._v(" "),o("defs",[o("linearGradient",{ref:"gradient",attrs:{id:"linear",x1:"-92.797607",y1:"101.9009",x2:"92.825981",y2:"0",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{"stop-color":"#FEC601",offset:"0"}}),t._v(" "),o("stop",{attrs:{"stop-color":"#f45866",offset:"0.125"}}),t._v(" "),o("stop",{attrs:{"stop-color":"#3772ff",offset:"0.5"}}),t._v(" "),o("stop",{attrs:{"stop-color":"#3772ff",offset:"1"}})],1)],1)])]),t._v(" "),o("span",{staticClass:"ml-3 is-size-4 has-text-weight-bold is-hidden-mobile"},[t._v("\n      Max Caplan\n    ")])])])}),[],!1,null,"4a279cae",null);e.default=component.exports},254:function(t,e,o){"use strict";o(243)},255:function(t,e,o){var r=o(48)(!1);r.push([t.i,"#logo-wrapper[data-v-4a279cae]{position:absolute;top:-25px;left:0;z-index:100;display:flex;align-items:center;height:74px;opacity:0}@media only screen and (max-width:1023px){#logo-wrapper[data-v-4a279cae]{height:52px}}#logo[data-v-4a279cae]{display:flex;width:100%;margin-left:12px;color:#7a7a7a;transition:all .25s ease}#logo[data-v-4a279cae]:hover{color:#3772ff}#logo .icon[data-v-4a279cae]{height:auto}.logo-svg[data-v-4a279cae]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}",""]),t.exports=r}}]);