(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{320:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("c0fca3a6",content,!0,{sourceMap:!1})},321:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("5958e345",content,!0,{sourceMap:!1})},377:function(t,e,n){"use strict";n(320)},378:function(t,e,n){var o=n(27)(!1);o.push([t.i,".solid-button{display:flex;justify-self:center;align-items:center;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:40px;padding:10px;background:var(--secondary);border-radius:4px}.solid-button .icon{width:24px}.solid-button.clickable{cursor:pointer}.solid-button.clickable:hover .icon{fill:#fff}",""]),t.exports=o},379:function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:o,data:data,children:c=[]}=e,{class:l,staticClass:r,style:style,staticStyle:d,attrs:f={},...x}=data;return n("svg",{class:[l,r],style:[style,d],attrs:Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f),...x},c.concat([n("path",{attrs:{d:"M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"}})]))}}},380:function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:o,data:data,children:c=[]}=e,{class:l,staticClass:r,style:style,staticStyle:d,attrs:f={},...x}=data;return n("svg",{class:[l,r],style:[style,d],attrs:Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},f),...x},c.concat([n("path",{attrs:{d:"M10 15.586l-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"}})]))}}},381:function(t,e,n){"use strict";n(321)},382:function(t,e,n){var o=n(27)(!1);o.push([t.i,".token-page-field{display:flex;justify-content:center;align-items:flex-start;flex-direction:column;grid-row-gap:10px;row-gap:10px;width:400px;padding:15px;background:#333;border-radius:4px}.token-page-field-container{display:flex;align-items:center;grid-column-gap:10px;-moz-column-gap:10px;column-gap:10px;width:100%}.token-page-field-container-value{width:100%;padding:10px;background:var(--backdrop);border:2px solid #fff;border-radius:4px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}",""]),t.exports=o},387:function(t,e,n){"use strict";n.r(e);var o={props:{disabled:{type:Boolean,required:!1,default:!1}}},c=(n(377),n(21)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"solid-button",class:{clickable:!t.disabled}},[t._t("default")],2)}),[],!1,null,null,null).exports,r=n(379),d=n.n(r),f=n(380),x=n.n(f),v={components:{SolidButton:l,CopyIcon:d.a,CheckIcon:x.a},props:{name:{type:String,required:!0},value:{type:String,required:!1,default:""}},data:function(){return{copied:!1}},computed:{tooltip:function(){return this.copied?"Скопировано":"Скопировать"}},methods:{copy:function(){var t=this;0===this.value.length||this.copied||(navigator.clipboard.writeText(this.value),this.copied=!0,setTimeout((function(){t.copied=!1}),4e3))}}},h=(n(381),Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"token-page-field"},[n("span",{staticClass:"token-page-field-name",domProps:{textContent:t._s(t.name)}}),t._v(" "),n("div",{staticClass:"token-page-field-container"},[n("span",{staticClass:"token-page-field-container-value",domProps:{textContent:t._s(t.value)}}),t._v(" "),n("SolidButton",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip,expression:"tooltip"}],attrs:{disabled:t.copied},nativeOn:{click:function(e){return t.copy(e)}}},[t.copied?n("CheckIcon",{staticClass:"icon"}):n("CopyIcon",{staticClass:"icon"})],1)],1)])}),[],!1,null,null,null));e.default=h.exports}}]);