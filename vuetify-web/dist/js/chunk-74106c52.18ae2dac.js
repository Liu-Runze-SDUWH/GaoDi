(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74106c52"],{"0bc6":function(t,e,a){},"0fd9b":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var s=a("ade3"),i=a("5530"),o=(a("4b85"),a("2b0e")),n=a("d9f7"),r=a("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function d(t,e){return l.reduce((function(a,s){return a[t+Object(r["G"])(s)]=e(),a}),{})}var u=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},h=d("align",(function(){return{type:String,default:null,validator:u}})),v=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},m=d("justify",(function(){return{type:String,default:null,validator:v}})),p=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},g=d("alignContent",(function(){return{type:String,default:null,validator:p}})),f={align:Object.keys(h),justify:Object.keys(m),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,a){var s=y[t];if(null!=a){if(e){var i=e.replace(t,"");s+="-".concat(i)}return s+="-".concat(a),s.toLowerCase()}}var C=new Map;e["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},h),{},{justify:{type:String,default:null,validator:v}},m),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var a=e.props,i=e.data,o=e.children,r="";for(var l in a)r+=String(a[l]);var c=C.get(r);return c||function(){var t,e;for(e in c=[],f)f[e].forEach((function(t){var s=a[t],i=b(e,t,s);i&&c.push(i)}));c.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(s["a"])(t,"align-".concat(a.align),a.align),Object(s["a"])(t,"justify-".concat(a.justify),a.justify),Object(s["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),C.set(r,c)}(),t(a.tag,Object(n["a"])(i,{staticClass:"row",class:c}),o)}})},"432c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"notes",fluid:"",tag:"section"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-card",{attrs:{"min-height":"640"}},[a("v-toolbar",{attrs:{color:"primary"}},[a("v-text-field",{staticStyle:{"margin-top":"8px"},attrs:{label:"搜索",color:"white","hide-details":""},scopedSlots:t._u([t.$vuetify.breakpoint.mdAndUp?{key:"append-outer",fn:function(){return[a("v-btn",{staticClass:"mt-n2",attrs:{elevation:"1",fab:"",small:""}},[a("v-icon",[t._v("mdi-magnify")])],1)]},proxy:!0}:null],null,!0)}),[a("v-btn",{attrs:{elevation:"1",fab:"",small:""}},[a("v-icon",[t._v("mdi-plus")])],1)]],2),a("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-7","max-height":"600"}},[a("v-container",{staticStyle:{height:"auto"}},[a("v-list",{attrs:{subheader:"","two-line":"",height:"550"}},[a("v-subheader",{attrs:{inset:""}},[t._v("Folders")]),t._l(t.folders,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-avatar",[a("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(e.subtitle)}})],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-information")])],1)],1)],1)})),a("v-divider",{attrs:{inset:""}}),a("v-subheader",{attrs:{inset:""}},[t._v("Files")]),t._l(t.files,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-avatar",[a("v-icon",{class:e.color,attrs:{dark:""},domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(e.subtitle)}})],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-information")])],1)],1)],1)}))],2)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"8"}},[a("base-material-card",{attrs:{color:"primary"}},[a("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-7","max-height":"475"}},[a("v-container",{staticStyle:{height:"auto"}},[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"10"}},[a("v-card",{staticClass:"mx-auto",attrs:{color:"#26c6da",dark:"","max-width":"600"}},[a("v-row",[a("v-col",{staticStyle:{"justify-content":"right","align-items":"right"},attrs:{cols:"12",sm:"2"}},[a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1)],1)],1)],1),a("v-col",{staticStyle:{"justify-content":"right","align-items":"right"},attrs:{cols:"12",sm:"10"}},[a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(' "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ')])],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"2"}})],1),a("v-row",[a("v-col",{staticStyle:{"justify-content":"left","align-items":"left"},attrs:{cols:"12",sm:"10"}},[a("v-card",{staticClass:"mx-auto",attrs:{color:"#26c6da",dark:"","max-width":"600"}},[a("v-row",[a("v-col",{staticStyle:{"justify-content":"right","align-items":"right"},attrs:{cols:"12",sm:"2"}},[a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1)],1)],1)],1),a("v-col",{staticStyle:{"justify-content":"right","align-items":"right"},attrs:{cols:"12",sm:"10"}},[a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(' "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ')])],1)],1)],1)],1),a("v-col",{staticStyle:{"justify-content":"left","align-items":"left"},attrs:{cols:"12",sm:"2"}})],1),a("v-row",[a("v-col",{staticStyle:{"justify-content":"left","align-items":"left"},attrs:{cols:"12",sm:"10"}},[a("v-card",{staticClass:"mx-auto",attrs:{color:"#26c6da",dark:"","max-width":"600"}},[a("v-row",[a("v-col",{staticStyle:{"justify-content":"right","align-items":"right"},attrs:{cols:"12",sm:"2"}},[a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1)],1)],1)],1),a("v-col",{staticStyle:{"justify-content":"right","align-items":"right"},attrs:{cols:"12",sm:"10"}},[a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(' "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ')])],1)],1)],1)],1),a("v-col",{staticStyle:{"justify-content":"left","align-items":"left"},attrs:{cols:"12",sm:"2"}})],1),a("v-row",[a("v-col",{staticStyle:{"justify-content":"left","align-items":"left"},attrs:{cols:"12",sm:"10"}},[a("v-card",{staticClass:"mx-auto",attrs:{color:"#26c6da",dark:"","max-width":"600"}},[a("v-row",[a("v-col",{staticStyle:{"justify-content":"right","align-items":"right"},attrs:{cols:"12",sm:"2"}},[a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1)],1)],1)],1),a("v-col",{staticStyle:{"justify-content":"right","align-items":"right"},attrs:{cols:"12",sm:"10"}},[a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(' "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ')])],1)],1)],1)],1),a("v-col",{staticStyle:{"justify-content":"left","align-items":"left"},attrs:{cols:"12",sm:"2"}})],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"2"}}),a("v-col",{attrs:{cols:"12",sm:"10"}},[a("v-card",{staticClass:"mx-auto",attrs:{color:"#000000",dark:"","max-width":"600"}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"2"}},[a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"10"}},[a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(' "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ')])],1)],1)],1)],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"append-icon":(t.marker,"mdi-image"),"append-outer-icon":t.message?"mdi-send":"mdi-microphone","prepend-icon":t.icon,filled:"","clear-icon":"mdi-close-circle",clearable:"",label:"Message",type:"text"},on:{"click:append":t.toggleMarker,"click:append-outer":t.sendMessage,"click:prepend":t.changeIcon,"click:clear":t.clearMessage},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1)],1)],1)],1)},i=[],o={name:"notes",data:function(){return{password:"Password",show:!1,message:"",marker:!0,iconIndex:0,icons:["mdi-emoticon","mdi-emoticon-cool","mdi-emoticon-dead","mdi-emoticon-excited","mdi-emoticon-happy","mdi-emoticon-neutral","mdi-emoticon-sad","mdi-emoticon-tongue"]}},computed:{icon:function(){return this.icons[this.iconIndex]}},methods:{toggleMarker:function(){this.marker=!this.marker},sendMessage:function(){this.resetIcon(),this.clearMessage()},clearMessage:function(){this.message=""},resetIcon:function(){this.iconIndex=0},changeIcon:function(){this.iconIndex===this.icons.length-1?this.iconIndex=0:this.iconIndex++}}},n=o,r=a("2877"),l=a("6544"),c=a.n(l),d=a("8336"),u=a("b0af"),h=a("99d9"),v=a("62ad"),m=a("a523"),p=a("ce7e"),g=a("132d"),f=a("adda"),y=a("8860"),b=a("da13"),C=a("1800"),w=a("8270"),x=a("5d23"),S=a("0fd9b"),T=a("8dd9"),k=a("e0c7"),j=a("8654"),O=a("71d9"),_=Object(r["a"])(n,s,i,!1,null,null,null);e["default"]=_.exports;c()(_,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["c"],VCol:v["a"],VContainer:m["a"],VDivider:p["a"],VIcon:g["a"],VImg:f["a"],VList:y["a"],VListItem:b["a"],VListItemAction:C["a"],VListItemAvatar:w["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VRow:S["a"],VSheet:T["a"],VSubheader:k["a"],VTextField:j["a"],VToolbar:O["a"]})},"5e23":function(t,e,a){},"71d9":function(t,e,a){"use strict";a("0481"),a("4160"),a("4069"),a("a9e3");var s=a("3835"),i=a("5530"),o=(a("5e23"),a("8dd9")),n=a("adda"),r=a("80d2"),l=a("d9bd");e["a"]=o["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(i["a"])(Object(i["a"])({},this.measurableStyles),{},{height:Object(r["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var a=Object(s["a"])(e,2),i=a[0],o=a[1];t.$attrs.hasOwnProperty(i)&&Object(l["a"])(i,o,t)}))},methods:{genBackground:function(){var t={height:Object(r["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(r["g"])(this.computedContentHeight)}},Object(r["s"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(r["g"])(this.extensionHeight)}},Object(r["s"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],a=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,a,e)}})},e0c7:function(t,e,a){"use strict";var s=a("5530"),i=(a("0bc6"),a("7560")),o=a("58df");e["a"]=Object(o["a"])(i["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(s["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-74106c52.18ae2dac.js.map