(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55701f76"],{"0fd9b":function(t,e,i){"use strict";i("99af"),i("4160"),i("caad"),i("13d5"),i("4ec9"),i("b64b"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("159b"),i("ddb0");var a=i("ade3"),o=i("5530"),r=(i("4b85"),i("2b0e")),n=i("d9f7"),s=i("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function u(t,e){return l.reduce((function(i,a){return i[t+Object(s["G"])(a)]=e(),i}),{})}var d=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},f=u("justify",(function(){return{type:String,default:null,validator:p}})),v=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:v}})),m={align:Object.keys(h),justify:Object.keys(f),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,i){var a=b[t];if(null!=i){if(e){var o=e.replace(t,"");a+="-".concat(o)}return a+="-".concat(i),a.toLowerCase()}}var y=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(o["a"])(Object(o["a"])(Object(o["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:p}},f),{},{alignContent:{type:String,default:null,validator:v}},g),render:function(t,e){var i=e.props,o=e.data,r=e.children,s="";for(var l in i)s+=String(i[l]);var c=y.get(s);return c||function(){var t,e;for(e in c=[],m)m[e].forEach((function(t){var a=i[t],o=S(e,t,a);o&&c.push(o)}));c.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(a["a"])(t,"align-".concat(i.align),i.align),Object(a["a"])(t,"justify-".concat(i.justify),i.justify),Object(a["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),y.set(s,c)}(),t(i.tag,Object(n["a"])(o,{staticClass:"row",class:c}),r)}})},"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var a=i("71d9"),o=i("80d2"),r=Object(o["i"])("v-toolbar__title"),n=Object(o["i"])("v-toolbar__items");a["a"]},"2c64":function(t,e,i){},"2fa4":function(t,e,i){"use strict";i("20f6");var a=i("80d2");e["a"]=Object(a["i"])("spacer","div","v-spacer")},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var a=i("fe6c"),o=i("58df");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(o["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"3d86":function(t,e,i){},"40dc":function(t,e,i){"use strict";i("a9e3"),i("b680"),i("c7cd");var a=i("5530"),o=(i("8b0d"),i("71d9")),r=i("53ca");function n(t,e){var i=e.modifiers||{},a=i.self,o=void 0!==a&&a,n=e.value,s="object"===Object(r["a"])(n)&&n.options||{passive:!0},l="function"===typeof n||"handleEvent"in n?n:n.handler,c=o?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",l,s),t._onScroll={handler:l,options:s,target:o?void 0:c})}function s(t){if(t._onScroll){var e=t._onScroll,i=e.handler,a=e.options,o=e.target,r=void 0===o?t:o;r.removeEventListener("scroll",i,a),delete t._onScroll}}var l={inserted:n,unbind:s},c=l,u=i("3a66"),d=i("d9bd"),h=i("2b0e"),p=h["a"].extend({name:"scrollable",directives:{Scroll:l},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(d["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),f=i("d10f"),v=i("f2e7"),g=i("80d2"),m=i("58df"),b=Object(m["a"])(o["a"],p,f["a"],v["a"],Object(u["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=b.extend({name:"v-app-bar",directives:{Scroll:c},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return p.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return o["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,i=t,a=i-e,r=a/this.computedScrollThreshold,n=this.currentScroll*r;return Math.max(e,i-n)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=o["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:o["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return o["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(a["a"])(Object(a["a"])({},o["a"].options.computed.styles.call(this)),{},{fontSize:Object(g["g"])(this.computedFontSize,"rem"),marginTop:Object(g["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(g["g"])(this.computedTransform),")"),left:Object(g["g"])(this.computedLeft),right:Object(g["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=o["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=o["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"43a6":function(t,e,i){"use strict";i("a9e3");var a=i("5530"),o=(i("ec29"),i("3d86"),i("c37a")),r=i("604c"),n=i("8547"),s=i("58df"),l=Object(s["a"])(n["a"],r["a"],o["a"]);e["a"]=l.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},o["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=o["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=o["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:r["a"].options.methods.onClick}})},"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var a=i("5530"),o=i("58df"),r=i("7e2b"),n=i("3206");e["a"]=Object(o["a"])(r["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(o){o&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5311:function(t,e,i){"use strict";var a=i("5607"),o=i("2b0e");e["a"]=o["a"].extend({name:"rippleable",directives:{ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"5e23":function(t,e,i){},"67b6":function(t,e,i){"use strict";i("b0c0");var a=i("5530"),o=(i("2c64"),i("ba87")),r=i("9d26"),n=i("c37a"),s=i("7e2b"),l=i("a9ad"),c=i("4e82"),u=i("5311"),d=i("7560"),h=i("fe09"),p=i("80d2"),f=i("58df"),v=i("d9f7"),g=Object(f["a"])(s["a"],l["a"],u["a"],Object(c["a"])("radioGroup"),d["a"]);e["a"]=g.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return h["a"].options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return n["a"].options.computed.computedId.call(this)},hasLabel:n["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return h["a"].options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return h["a"].options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(o["a"],{on:{click:h["b"]},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(p["s"])(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(r["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(a["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:Object(v["c"])({click:this.onChange},this.listeners$)};return t("div",e,[this.genRadio(),this.genLabel()])}})},"71d9":function(t,e,i){"use strict";i("0481"),i("4160"),i("4069"),i("a9e3");var a=i("3835"),o=i("5530"),r=(i("5e23"),i("8dd9")),n=i("adda"),s=i("80d2"),l=i("d9bd");e["a"]=r["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(o["a"])(Object(o["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(o["a"])(Object(o["a"])({},this.measurableStyles),{},{height:Object(s["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(a["a"])(e,2),o=i[0],r=i[1];t.$attrs.hasOwnProperty(o)&&Object(l["a"])(o,r,t)}))},methods:{genBackground:function(){var t={height:Object(s["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(s["g"])(this.computedContentHeight)}},Object(s["s"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(s["g"])(this.extensionHeight)}},Object(s["s"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},8547:function(t,e,i){"use strict";var a=i("2b0e"),o=i("80d2");e["a"]=a["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:o["j"]}}})},"8b0d":function(t,e,i){},d504:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return 0==t.$global.flag1&&0==t.flag2?i("v-app",[[i("v-app-bar",{attrs:{app:"",color:"white",height:"70"}},[i("v-avatar",{staticClass:"mr-3",attrs:{color:"grey lighten-5",size:"70"}},[i("v-img",{attrs:{contain:"","max-height":"70%",src:"https://tva1.sinaimg.cn/large/0081Kckwly1gk1wb2jnilj308c08cwf0.jpg"}})],1),i("v-toolbar-title",{staticClass:"font-weight-black headline"},[t._v(" GAODI ")])],1),i("v-img",{attrs:{"max-height":"729px",src:"https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"}},[i("v-container",{staticClass:"fill-height",attrs:{id:"sign",fluid:""}},[i("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",md:"7",tag:"h1"}},[i("div",{staticClass:"font-weight-light",staticStyle:{"font-size":"64px"}},[t._v(" WELCOME TO ")]),i("div",{staticClass:"font-weight-black",staticStyle:{"font-size":"82px"}},[t._v(" GAODI ")])]),i("v-col",{attrs:{cols:"12",md:"5"}},[i("v-card",{staticClass:"elevation-12",staticStyle:{"margin-right":"70px"},attrs:{width:"450px"}},[i("v-toolbar",{attrs:{color:"#5D4037",dark:"",flat:""}},[i("v-toolbar-title",[t._v("登录")]),i("v-spacer")],1),i("v-card-text",[i("v-form",[i("v-text-field",{attrs:{label:"账号",name:"account1","prepend-icon":"mdi-account",type:"text",color:"#5D4037"},model:{value:t.login.account,callback:function(e){t.$set(t.login,"account",e)},expression:"login.account"}}),i("v-text-field",{attrs:{label:"密码",name:"password1","prepend-icon":"mdi-lock",type:"password",color:"#5D4037"},model:{value:t.login.password,callback:function(e){t.$set(t.login,"password",e)},expression:"login.password"}})],1),i("v-radio-group",{attrs:{mandatory:"",row:""},model:{value:t.login.radio,callback:function(e){t.$set(t.login,"radio",e)},expression:"login.radio"}},[i("v-radio",{attrs:{label:"学生",value:"0",color:"#5D4037"}}),i("v-radio",{attrs:{label:"教师",value:"1",color:"#5D4037"}}),i("v-radio",{attrs:{label:"管理员",value:"2",color:"#5D4037"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"#5D4037"},on:{click:t.click2}},[t._v("注册")]),i("v-btn",{attrs:{color:"#5D4037"},on:{click:t.click1}},[t._v("登录")])],1)],1)],1)],1)],1)],1)]],2):1==t.$global.flag1&&0==t.flag2?i("v-app",[i("dashboard-core-app-bar"),i("dashboard-core-drawer"),i("dashboard-core-view"),i("dashboard-core-settings")],1):1==t.flag2?i("v-app",[[i("v-app-bar",{attrs:{app:"",color:"white",height:"70"}},[i("v-avatar",{staticClass:"mr-3",attrs:{color:"grey lighten-5",size:"70"}},[i("v-img",{attrs:{contain:"","max-height":"70%",src:"https://tva1.sinaimg.cn/large/0081Kckwly1gk1wb2jnilj308c08cwf0.jpg"}})],1),i("v-toolbar-title",{staticClass:"font-weight-black headline"},[t._v(" GAODI ")])],1),i("v-img",{attrs:{"max-height":"729px",src:"https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"}},[i("v-container",{staticClass:"fill-height",attrs:{id:"sign",fluid:""}},[i("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",md:"7",tag:"h1"}},[i("div",{staticClass:"font-weight-light",staticStyle:{"font-size":"64px"}},[t._v(" WELCOME TO ")]),i("div",{staticClass:"font-weight-black",staticStyle:{"font-size":"82px"}},[t._v(" GAODI ")])]),i("v-col",{attrs:{cols:"12",md:"5"}},[i("v-card",{staticClass:"elevation-12",staticStyle:{"margin-right":"70px"},attrs:{width:"450px"}},[i("v-toolbar",{attrs:{color:"#5D4037",dark:"",flat:""}},[i("v-toolbar-title",[t._v("注册")]),i("v-spacer")],1),i("v-card-text",[i("v-form",[i("v-text-field",{attrs:{label:"账号","prepend-icon":"mdi-account",type:"text",color:"#5D4037"},model:{value:t.register.account,callback:function(e){t.$set(t.register,"account",e)},expression:"register.account"}}),i("v-text-field",{attrs:{label:"密码","prepend-icon":"mdi-lock",type:"password",color:"#5D4037"},on:{blur:t.check_pwd},model:{value:t.register.password,callback:function(e){t.$set(t.register,"password",e)},expression:"register.password"}}),i("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.rules,expression:"rules"}],attrs:{type:"error",dismissible:""}},[t._v(" 密码最少为6位 ")]),i("v-text-field",{attrs:{label:"确认密码","prepend-icon":"mdi-lock",type:"password",color:"#5D4037"},on:{blur:t.check_cpwd},model:{value:t.register.password2,callback:function(e){t.$set(t.register,"password2",e)},expression:"register.password2"}}),i("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.rules2,expression:"rules2"}],attrs:{type:"error",dismissible:""}},[t._v(" 两次输入的密码不一致 ")]),i("v-text-field",{attrs:{label:"姓名","prepend-icon":"mdi-account",type:"text",color:"#5D4037"},model:{value:t.register.name,callback:function(e){t.$set(t.register,"name",e)},expression:"register.name"}}),i("v-text-field",{attrs:{label:"学校","prepend-icon":"mdi-account",type:"text",color:"#5D4037"},model:{value:t.register.school_name,callback:function(e){t.$set(t.register,"school_name",e)},expression:"register.school_name"}}),i("v-text-field",{attrs:{label:"学/工号","prepend-icon":"mdi-account",type:"text",color:"#5D4037"},model:{value:t.register.number,callback:function(e){t.$set(t.register,"number",e)},expression:"register.number"}})],1),i("v-radio-group",{attrs:{mandatory:"",row:""},model:{value:t.register.radio,callback:function(e){t.$set(t.register,"radio",e)},expression:"register.radio"}},[i("v-radio",{attrs:{label:"学生",value:"0",color:"#5D4037"}}),i("v-radio",{attrs:{label:"教师",value:"1",color:"#5D4037"}}),i("v-radio",{attrs:{label:"管理员",value:"2",color:"#5D4037"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"#5D4037"},on:{click:t.click3}},[t._v("返回")]),i("v-btn",{attrs:{color:"#5D4037"},on:{click:t.click4}},[t._v("注册")])],1)],1)],1)],1)],1)],1)]],2):t._e()},o=[],r=(i("b0c0"),i("d3b7"),{name:"DashboardIndex",components:{DashboardCoreAppBar:function(){return i.e("chunk-2d0ccba7").then(i.bind(null,"4ebb"))},DashboardCoreDrawer:function(){return i.e("chunk-622ffe34").then(i.bind(null,"d369"))},DashboardCoreSettings:function(){return i.e("chunk-291ddd10").then(i.bind(null,"3119"))},DashboardCoreView:function(){return i.e("chunk-14c55d78").then(i.bind(null,"a96e"))}},data:function(){return{expandOnHover:!1,flag2:0,rules:!1,rules2:!1,userMsg:"",login:{account:"",password:"",radio:0},register:{account:"",password:"",password2:"",name:"",school_name:"",number:"",radio:0}}},methods:{click1:function(){var t=this;""===this.login.account||""===this.login.password?alert("账号或密码不能为空！"):this.$axios({method:"get",url:"/api/log_in/",params:{account:t.login.account,password:t.login.password,identity:t.login.radio}}).then((function(e){console.log("登录：",e.data),"登录成功"==e.data.msg?(t.$global.userMsg.id=e.data.id,t.$global.userMsg.name=e.data.name,t.$global.userMsg.number=e.data.number,t.$global.userMsg.school_name=e.data.school_name,t.$global.userMsg.school_id=e.data.school_id,t.$global.userMsg.classes=e.data.classes,t.$global.userMsg.account=e.data.account,t.$global.userMsg.identity=t.login.radio,t.$global.userMsg.avatar=e.data.avatar,t.$global.flag1=1,t.$forceUpdate()):"密码不正确"==e.data.msg?alert("密码不正确！"):"账号不存在"==e.data.msg&&alert("账号不存在！")}))},click2:function(){this.$global.flag1=2,this.flag2=1,this.$forceUpdate()},click3:function(){this.$global.flag1=0,this.flag2=0,this.$forceUpdate()},check_pwd:function(){this.register.password.length<6&&(this.rules=!0)},check_cpwd:function(){this.register.password!=this.register.password2&&(this.rules2=!0)},click4:function(){var t=this;""===this.register.account||""===this.register.password?alert("账号或密码不能为空！"):this.register.password.length<6?alert("密码最少为6位！"):this.register.password2!=this.register.password?alert("两次输入的密码不一致！"):this.$axios({method:"get",url:"/api/register/",params:{account:t.register.account,password:t.register.password,name:t.register.name,school_name:t.register.school_name,number:t.register.number,identity:t.register.radio}}).then((function(e){"注册成功"==e.data.msg?(t.$global.flag1=0,t.flag2=0,t.$forceUpdate(),alert("注册成功！")):alert("账号已存在或学校名称有误！")}))}}}),n=r,s=i("2877"),l=i("6544"),c=i.n(l),u=i("0798"),d=i("5530"),h=(i("df86"),i("7560")),p=i("58df"),f=Object(p["a"])(h["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(d["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}}),v=i("40dc"),g=i("8212"),m=i("8336"),b=i("b0af"),S=i("99d9"),y=i("62ad"),w=i("a523"),O=i("4bd4"),x=i("adda"),C=i("67b6"),j=i("43a6"),k=i("0fd9b"),$=i("2fa4"),_=i("8654"),B=i("71d9"),V=i("2a7f"),D=Object(s["a"])(n,a,o,!1,null,null,null);e["default"]=D.exports;c()(D,{VAlert:u["a"],VApp:f,VAppBar:v["a"],VAvatar:g["a"],VBtn:m["a"],VCard:b["a"],VCardActions:S["a"],VCardText:S["c"],VCol:y["a"],VContainer:w["a"],VForm:O["a"],VImg:x["a"],VRadio:C["a"],VRadioGroup:j["a"],VRow:k["a"],VSpacer:$["a"],VTextField:_["a"],VToolbar:B["a"],VToolbarTitle:V["a"]})},df86:function(t,e,i){},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i.d(e,"b",(function(){return s}));i("4de4"),i("45fc"),i("d3b7"),i("25f0");var a=i("c37a"),o=i("5311"),r=i("8547"),n=i("58df");function s(t){t.preventDefault()}e["a"]=Object(n["a"])(a["a"],o["a"],r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=a["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:s},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:s},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-55701f76.b0fea033.js.map