(self.webpackJsonp=self.webpackJsonp||[]).push([[9,7],{1211:function(e,t,n){"use strict";n.r(t);n(90),n(56);var o=n(1),r=n(0),i=n(54),a=n(96),c=n(69),s=n(785),l=n(879),d=n(878),u=n(792),p=(n(72),n(27),n(301)),f=n(795),m=n(730),h=n(693);class g extends r.PureComponent{render(){const e=this.props,t=e.platform,n=e.previewShown,i=e.annotations,a=e.onChangePlatform,c=e.onTogglePreview,s=e.platformOptions,l=i.filter(e=>e.severity<0),d=l.length>=1,u=d?"".concat(l[0].message).concat(l.length>1?" (+".concat(l.length-1," more)"):""):"";return r.createElement(p.a,{type:d?"loading":void 0},r.createElement("div",null,d?r.createElement(f.a,null,u):null),r.createElement("div",{className:Object(o.css)(b.right)},r.createElement(h.a,{className:Object(o.css)(b.preview),checked:n,onChange:c,label:"Preview"}),s.length>1&&r.createElement(m.a,{disabled:!n,options:s,value:t,onValueChange:a})))}}const b=o.StyleSheet.create({loadingText:{textOverflow:"ellipsis",whiteSpace:"nowrap",padding:".5em"},right:{display:"flex",flex:1,justifyContent:"flex-end"},preview:{margin:"0 8px"}});n(180),n(19),n(129),n(130),n(25);var v=n(235),k=n(796);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function O({name:e,description:t,onOpenFullEditor:n}){const i=x(Object(v.a)(),1)[0].theme;return r.createElement("div",{className:Object(o.css)(j.header)},r.createElement("h1",{className:Object(o.css)(j.title)},e),r.createElement("div",{className:Object(o.css)(j.iconContainer)},r.createElement(k.a,{content:r.createElement("p",{className:Object(o.css)(j.description)},t)},r.createElement("button",{className:Object(o.css)(j.icon,"light"===i?j.infoLight:j.infoDark)})),r.createElement("button",{className:Object(o.css)(j.icon,"light"===i?j.externalLight:j.externalDark),onClick:n})))}const j=o.StyleSheet.create({header:{display:"flex",flexDirection:"row",alignItems:"center",minWidth:0,margin:".25em .75em",backgroundColor:"inherit"},title:{lineHeight:1,fontSize:"1.2em",fontWeight:500,margin:0},iconContainer:{display:"flex",flexDirection:"row",margin:"0 .25em",backgroundColor:"inherit"},icon:{height:16,width:16,margin:8,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundColor:"transparent",border:0,outline:0,opacity:.3,transition:".2s",":hover":{opacity:.8}},description:{margin:16},infoLight:{backgroundImage:"url(".concat(n(731),")")},infoDark:{backgroundImage:"url(".concat(n(797),")")},externalLight:{backgroundImage:"url(".concat(n(732),")")},externalDark:{backgroundImage:"url(".concat(n(733),")")}});var w=n(798),E=n(244),C=n(227),S=n(302),D=n(2),F=n(236),N=n(295);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class P extends r.PureComponent{constructor(e){var t;super(e),I(this,"_handleClickRunOnPhone",()=>{this.props.onDeviceConnectionAttempt(),this.setState({currentModal:"device-instructions"})}),I(this,"_handleHideModal",()=>{this.setState({currentModal:null})}),I(this,"_handleChangeConnectionMethod",e=>{this.setState({deviceConnectionMethod:e})}),I(this,"handleOpenFullEditor",()=>{Object(s.a)({files:this.props.files,dependencies:this.props.dependencies,platform:this.props.platform})});let n=null!==(t=this.props.testConnectionMethod)&&void 0!==t?t:"device-id";"account"===n&&(n="qr-code"),this.state={deviceConnectionMethod:n,currentModal:null}}render(){const e=this.props,t=e.annotations,i=e.name,s=e.description,l=e.connectedDevices,p=e.deviceId,f=e.experienceURL,m=e.experienceName,h=e.selectedFile,b=e.files,v=e.dependencies,k=e.params,x=e.updateFiles,y=e.platform,j=e.platformOptions,E=e.previewRef,C=e.previewShown,D=e.onChangePlatform,I=e.onDeviceConnectionAttempt,P=e.onReloadSnack,M=e.onSendCode,_=e.onTogglePreview,z=e.onToggleSendCode,A=e.sdkVersion,L=e.sendCodeOnChangeEnabled,W=e.setDeviceId,T=e.theme,U=e.userAgent,H=e.verbose;return r.createElement("main",{className:Object(o.css)(R.container)},r.createElement(w.a,{name:i,description:s,params:k}),r.createElement(S.a,null,r.createElement(O,{name:i,description:s,onOpenFullEditor:this.handleOpenFullEditor}),r.createElement("a",{href:"https://expo.io",target:"_blank",rel:"noopener noreferrer",className:Object(o.css)(R.logo)},r.createElement("img",{className:Object(o.css)(R.wordmark),src:n("light"===T?885:886)}))),r.createElement("div",{className:Object(o.css)(R.editorArea)},r.createElement(u.default,{selectedFile:h,files:b,updateFiles:x,dependencies:v,lineNumbers:"off"}),C?r.createElement(F.a,{load:()=>Promise.all([n.e(1),n.e(5)]).then(n.bind(null,1143))},({loaded:e,data:t})=>e&&t?r.createElement(t,{className:Object(o.css)(R.preview),width:285,connectedDevices:l,deviceId:p,experienceURL:f,experienceName:m,name:i,onAppLaunch:I,onChangePlatform:D,onClickRunOnPhone:this._handleClickRunOnPhone,onReloadSnack:P,onSendCode:M,onToggleSendCode:z,payerCode:this.props.payerCode,platform:y,platformOptions:j,previewRef:E,previewQueue:"secondary",sdkVersion:A,isEmbedded:!0,sendCodeOnChangeEnabled:L,setDeviceId:W,verbose:H}):null):null),r.createElement(d.a,{large:!0,isEmbedded:!0,visible:"device-instructions"===this.state.currentModal,onDismiss:this._handleHideModal,experienceURL:f,onChangeMethod:this._handleChangeConnectionMethod,method:this.state.deviceConnectionMethod,setDeviceId:this.props.setDeviceId,deviceId:p}),r.createElement("div",{className:Object(o.css)(R.footer)},r.createElement(g,{annotations:t,previewShown:C,platform:y,sdkVersion:A,platformOptions:j,onTogglePreview:_,onChangePlatform:D})),Object(c.c)(U)?r.createElement("div",{className:Object(o.css)(R.open)},r.createElement(N.a,{experienceURL:f,onDeviceConnectionAttempt:I}),r.createElement("a",{className:Object(o.css)(R.download),target:"_blank",rel:"noopener noreferrer",href:Object(c.a)(U)?a.a.links.playstore:a.a.links.itunes},"Download Expo client")):null)}}t.default=Object(C.a)(Object(E.a)(Object(i.b)(e=>({testConnectionMethod:e.splitTestSettings.defaultConnectionMethod}))(Object(l.a)(P,!0))));const R=o.StyleSheet.create({container:{display:"flex",flexDirection:"column",height:"100%",width:"100%",backgroundColor:Object(D.a)("background"),color:Object(D.a)("text"),minHeight:0},editorArea:{display:"flex",flex:1,flexDirection:"row",minHeight:0},editorPlaceholder:{display:"flex",flex:1},preview:{backgroundColor:Object(D.a)("background")},logo:{display:"flex",flexDirection:"row",alignItems:"center",color:Object(D.a)("text"),textDecoration:"none",whiteSpace:"nowrap","@media (max-width: 480px)":{display:"none"}},wordmark:{height:18,margin:"0 .75em"},footer:{"@media (max-width: 480px)":{display:"none"}},open:{backgroundColor:Object(D.a)("background"),borderTop:"1px solid ".concat(Object(D.a)("border")),padding:".5em","@media (min-width: 480px)":{display:"none"}},download:{color:Object(D.a)("text"),display:"block",paddingBottom:".5em",textAlign:"center"}})},642:function(e,t,n){"use strict";n.r(t),n.d(t,"syntax",(function(){return r})),n.d(t,"ui",(function(){return i}));var o=n(2);const r={text:"#d9d7ce",variable:"#d9d7ce",invalid:"#ff3333",constant:"#ff9d45",comment:"#5c6773",regexp:"#95e6cb",annotation:"#5ccfe6",tag:"#80d4ff",number:"#ff9d45",string:"#bae67e",property:"#5ccfe6",value:"#bae67e",keyword:"#ffae57",operator:"#778899",predefined:"#ff00ff"},i={background:Object(o.a)("background","dark"),text:"#d9d7ce",selection:"#aaaaaa",indent:{active:"#393b41",inactive:"#494b51"}}},643:function(e,t,n){"use strict";n.r(t),n.d(t,"syntax",(function(){return r})),n.d(t,"ui",(function(){return i}));var o=n(2);const r={text:"#5c6773",variable:"#5c6773",invalid:"#ff3333",constant:"#f08c36",comment:"#abb0b6",regexp:"#4dbf99",annotation:"#41a6d9",tag:"#e7c547",number:"#f08c36",string:"#86b300",property:"#41a6d9",value:"#0451a5",keyword:"#f2590c",operator:"#778899",predefined:"#FF00FF"},i={background:Object(o.a)("background","light"),text:"#5c6773",selection:"#cccccc",indent:{active:"#e0e0e0",inactive:"#ecebec"}}},674:function(e,t,n){"use strict";var o=n(7),r=n(4),i=n(74),a=n(20),c=n(675),s=n(182),l=n(95),d=n(9),u=n(6),p=n(136),f=n(46),m=n(309);e.exports=function(e,t,n){var h=-1!==e.indexOf("Map"),g=-1!==e.indexOf("Weak"),b=h?"set":"add",v=r[e],k=v&&v.prototype,x=v,y={},O=function(e){var t=k[e];a(k,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(g&&!d(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!d(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!d(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(i(e,"function"!=typeof v||!(g||k.forEach&&!u((function(){(new v).entries().next()})))))x=n.getConstructor(t,e,h,b),c.REQUIRED=!0;else if(i(e,!0)){var j=new x,w=j[b](g?{}:-0,1)!=j,E=u((function(){j.has(1)})),C=p((function(e){new v(e)})),S=!g&&u((function(){for(var e=new v,t=5;t--;)e[b](t,t);return!e.has(-0)}));C||((x=t((function(t,n){l(t,x,e);var o=m(new v,t,x);return null!=n&&s(n,o[b],o,h),o}))).prototype=k,k.constructor=x),(E||S)&&(O("delete"),O("has"),h&&O("get")),(S||w)&&O(b),g&&k.clear&&delete k.clear}return y[e]=x,o({global:!0,forced:x!=v},y),f(x,e),g||n.setStrong(x,e,h),x}},675:function(e,t,n){var o=n(58),r=n(9),i=n(10),a=n(15).f,c=n(97),s=n(720),l=c("meta"),d=0,u=Object.isExtensible||function(){return!0},p=function(e){a(e,l,{value:{objectID:"O"+ ++d,weakData:{}}})},f=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,l)){if(!u(e))return"F";if(!t)return"E";p(e)}return e[l].objectID},getWeakData:function(e,t){if(!i(e,l)){if(!u(e))return!0;if(!t)return!1;p(e)}return e[l].weakData},onFreeze:function(e){return s&&f.REQUIRED&&u(e)&&!i(e,l)&&p(e),e}};o[l]=!0},676:function(e,t,n){"use strict";var o=n(15).f,r=n(76),i=n(134),a=n(44),c=n(95),s=n(182),l=n(133),d=n(135),u=n(13),p=n(675).fastKey,f=n(32),m=f.set,h=f.getterFor;e.exports={getConstructor:function(e,t,n,l){var d=e((function(e,o){c(e,d,t),m(e,{type:t,index:r(null),first:void 0,last:void 0,size:0}),u||(e.size=0),null!=o&&s(o,e[l],e,n)})),f=h(t),g=function(e,t,n){var o,r,i=f(e),a=b(e,t);return a?a.value=n:(i.last=a={index:r=p(t,!0),key:t,value:n,previous:o=i.last,next:void 0,removed:!1},i.first||(i.first=a),o&&(o.next=a),u?i.size++:e.size++,"F"!==r&&(i.index[r]=a)),e},b=function(e,t){var n,o=f(e),r=p(t);if("F"!==r)return o.index[r];for(n=o.first;n;n=n.next)if(n.key==t)return n};return i(d.prototype,{clear:function(){for(var e=f(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,u?e.size=0:this.size=0},delete:function(e){var t=f(this),n=b(this,e);if(n){var o=n.next,r=n.previous;delete t.index[n.index],n.removed=!0,r&&(r.next=o),o&&(o.previous=r),t.first==n&&(t.first=o),t.last==n&&(t.last=r),u?t.size--:this.size--}return!!n},forEach:function(e){for(var t,n=f(this),o=a(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:n.first;)for(o(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!b(this,e)}}),i(d.prototype,n?{get:function(e){var t=b(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),u&&o(d.prototype,"size",{get:function(){return f(this).size}}),d},setStrong:function(e,t,n){var o=t+" Iterator",r=h(t),i=h(o);l(e,t,(function(e,t){m(this,{type:o,target:e,state:r(e),kind:t,last:void 0})}),(function(){for(var e=i(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),d(t)}}},677:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));n(129);var o=n(642),r=n(643);function i(){const e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  .prism-code {\n    background-color: ",";\n    color: ",";\n  }\n\n  .prism-code ::selection {\n    background: ",";\n  }\n\n  .prism-code ::-moz-selection {\n    background: ",";\n  }\n\n  .prism-code textarea {\n    outline: 0;\n  }\n\n  .prism-code .token.tag,\n  .prism-code .token.property {\n    color: ",";\n  }\n\n  .prism-code .token.function {\n    color: ",";\n  }\n\n  .prism-code .token.entity {\n    color: ",";\n  }\n\n  .prism-code .token.string,\n  .prism-code .token.selector,\n  .prism-code .token.char,\n  .prism-code .token.builtin,\n  .prism-code .token.inserted {\n    color: ",";\n  }\n\n  .prism-code .token.regexp,\n  .prism-code .token.variable {\n    color: ",";\n  }\n\n  .prism-code .token.keyword,\n  .prism-code .token.atrule,\n  .prism-code .token.tag > .token.punctuation,\n  .prism-code .token.important {\n    color: ",";\n  }\n\n  .prism-code .token.attr-name {\n    color: ",";\n  }\n\n  .prism-code .token.attr-value {\n    color: ",";\n  }\n\n  .prism-code .token.markup,\n  .prism-code .token.special {\n    color: ",";\n  }\n\n  .prism-code .token.comment,\n  .prism-code .token.prolog,\n  .prism-code .token.doctype,\n  .prism-code .token.cdata {\n    color: ",";\n  }\n\n  .prism-code .token.number {\n    color: ",";\n  }\n\n  .prism-code .token.constant,\n  .prism-code .token.boolean,\n  .prism-code .token.constant,\n  .prism-code .token.symbol,\n  .prism-code .token.deleted {\n    color: ",";\n  }\n\n  .prism-code .token.operator,\n  .prism-code .token.entity,\n  .prism-code .token.url,\n  .prism-code .language-css .token.string,\n  .prism-code .style .token.string {\n    color: ",";\n  }\n\n  .prism-code .token.punctuation {\n    color: ",";\n  }\n"]);return i=function(){return e},e}const a=String.raw,c=({ui:e,syntax:t})=>a(i(),e.background,e.text,e.selection,e.selection,t.property,t.constant,t.property,t.string,t.regexp,t.keyword,t.number,t.string,t.predefined,t.comment,t.number,t.constant,t.operator,t.comment),s=c(r),l=c(o)},719:function(e,t,n){"use strict";var o=n(674),r=n(676);e.exports=o("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r)},720:function(e,t,n){var o=n(6);e.exports=!o((function(){return Object.isExtensible(Object.preventExtensions({}))}))},786:function(e,t){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,o=0,r=[];++t<n;){var i=e[t];i&&(r[o++]=i)}return r}},792:function(e,t,n){"use strict";n.r(t);n(72),n(19),n(179),n(692),n(305),n(89),n(25);var o=n(1),r=n(36),i=n.n(r),a=n(722),c=n.n(a),s=n(723),l=n(0),d=n.n(l),u=n(793),p=n.n(u),f=(n(724),n(725),n(726),n(727),n(728),n(729),n(794),n(227)),m=n(677);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const g=new Map;class b extends d.a.Component{constructor(...e){super(...e),h(this,"_highlight",(e,t)=>e.endsWith(".ts")||e.endsWith(".tsx")?Object(s.highlight)(t,s.languages.ts,"typescript"):e.endsWith(".js")?Object(s.highlight)(t,s.languages.jsx,"jsx"):e.endsWith(".json")?Object(s.highlight)(t,s.languages.json,"json"):e.endsWith(".md")?Object(s.highlight)(t,s.languages.markdown,"markdown"):c()(t)),h(this,"_handleValueChange",e=>{this.props.updateFiles(()=>({[this.props.selectedFile]:{type:"CODE",contents:e}}))}),h(this,"_editor",d.a.createRef())}static removePath(e){g.delete(e)}static renamePath(e,t){const n=g.get(e);g.delete(e),g.set(t,n)}componentDidUpdate(e){const t=this._editor.current;if(this.props.selectedFile!==e.selectedFile&&t){g.set(e.selectedFile,t.session);const n=g.get(this.props.selectedFile);t.session=n||{history:{stack:[],offset:-1}}}}render(){const e=this.props,t=e.selectedFile,n=e.lineNumbers,r=e.theme,a=e.files[t];return d.a.createElement("div",{className:Object(o.css)(v.container,"on"===n&&v.containerWithLineNumbers)},d.a.createElement(p.a,{ref:this._editor,value:"CODE"===(null==a?void 0:a.type)?a.contents:"",onValueChange:this._handleValueChange,highlight:e=>"on"===n?this._highlight(t,e).split("\n").map(e=>'<span class="'.concat(Object(o.css)(v.line),'">').concat(e,"</span>")).join("\n"):this._highlight(t,e),padding:"on"===n?0:8,className:i()(Object(o.css)(v.editor),"prism-code")}),d.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"dark"===r?m.a:m.b}}))}}h(b,"defaultProps",{lineNumbers:"on"}),t.default=Object(f.a)(b);const v=o.StyleSheet.create({container:{flex:1,overflow:"auto"},containerWithLineNumbers:{paddingLeft:64},editor:{fontFamily:"var(--font-monospace)",fontSize:12,minHeight:"100%",counterReset:"line",overflow:"visible !important"},line:{":before":{position:"absolute",right:"100%",marginRight:26,textAlign:"right",opacity:.5,userSelect:"none",counterIncrement:"line",content:"counter(line)"}}})},885:function(e,t,n){e.exports=n.p+"assets/52001a8b742a278688f6b516f931d81b.png"},886:function(e,t,n){e.exports=n.p+"assets/e392635154a17bd759d3bbb77e72eada.png"}}]);