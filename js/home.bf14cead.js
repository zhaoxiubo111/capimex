"use strict";(self["webpackChunkvue_admin"]=self["webpackChunkvue_admin"]||[]).push([[962],{9026:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("svg-icon",{staticClass:"footerLogo",attrs:{"icon-class":"footerLogo"}}),e("div",{staticClass:"footerText"},[e("p",[t._v("Impulsa tus sueños financieros hoy.")]),e("p",[e("svg-icon",{staticClass:"email",attrs:{"icon-class":"email"}}),e("span",[t._v(" easypeso@ph.com ")])],1),e("p",[e("svg-icon",{staticClass:"telephone",attrs:{"icon-class":"telephone"}}),e("span",[t._v(" 8273 2838 5118 ")])],1),e("p",[e("svg-icon",{staticClass:"note",attrs:{"icon-class":"note"}}),e("span",[t._v(" 09171398778 ")])],1)]),e("div",{staticClass:"records"},[t._v("© 2023 Crédito Pro . All Rights Reserved. ")])],1)},a=[],n={name:"agreement",created(){console.log("agreement created")}},o=n,l=s(845),r=(0,l.A)(o,i,a,!1,null,"3bfa679c",null),d=r.exports},2802:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{ref:"scrollContainer",staticClass:"home",on:{wheel:t.handleWheel}},[e("Nav",{attrs:{slideDown:t.slideDown,slideOutUp:t.slideOutUp}}),e("div",{staticClass:"content"},[e("div",{staticClass:"descargar"},[t._m(0),e("div",[t._m(1),e("div",[e("p",[e("svg-icon",{staticClass:"down",attrs:{"icon-class":"down"}})],1),t._m(2),t._m(3)])])]),e("div",{staticClass:"nuestra"},[e("div",[e("div",{staticClass:"headline"},[e("p",t._l(t.displayedLetters,(function(s,i){return e("span",{key:i,class:"letter",style:{animationDelay:s.animationDelay}},[t._v(" "+t._s(s?.letter)+" ")])})),0),e("p",t._l(t.items,(function(s,i){return e("span",{key:i,class:"letter",style:{animationDelay:s.animationDelay}},[t._v(" "+t._s(s?.letter)+" ")])})),0)]),e("img",{staticClass:"wallet animate__animated",class:{animate__fadeIn:t.animate__slideInUp,hidden:!t.animate__slideInUp},style:{"animation-duration":"5000ms"},attrs:{src:s(555),alt:""}})]),e("div",{staticClass:"desc animate__animated",class:{animate__slideInUp:t.animate__slideInUp,hidden:!t.animate__slideInUp}},t._l(t.lists,(function(s,i){return e("p",{key:i},[e("span",{staticClass:"title animate__animated animate__slideInUp",style:{"animation-duration":"2000ms"}},[t._v(" "+t._s(s.title)+" ")]),e("span",{staticClass:"text"},[t._v(" "+t._s(s.text)+" ")])])})),0)]),e("div",{staticClass:"solicita"},[e("div",[e("p",t._l(t.titles,(function(s,i){return e("span",{key:i,class:"letter",style:{animationDelay:s.animationDelay}},[t._v(" "+t._s(s?.letter)+" ")])})),0)]),e("div",[e("div",{staticClass:"container"},t._l(t.elements,(function(s,i){return e("div",{key:i,staticClass:"left",style:{width:t.activeIndex===i?"819px":"30%"},on:{click:function(e){return t.zoomElement(i)}}},[e("p",[t._v(t._s(s.name))]),e("div",{staticClass:"img"},[e("img",{attrs:{src:s.img,alt:""}})]),e("div",{staticClass:"title"},[t._v(t._s(s.title))]),e("div",{staticClass:"text"},[t._v(t._s(s.text))])])})),0)])])]),e("Footer")],1)},a=[function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v("Mayor mont,menor interes")]),e("p",[t._v("NUESTRAS VENTAJAS")]),e("p",[t._v("Solicita")]),e("p",[t._v("Tu EasyPeso")]),e("p",[t._v("En5 minutos")]),e("p",[t._v("Descargar")])])},function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{src:s(5938),alt:""}})])},function(){var t=this,e=t._self._c;return e("p",[e("span",[t._v("MÁS")]),e("span",[t._v("INTRODUCCIÓN")])])},function(){var t=this,e=t._self._c;return e("p",[e("span",[t._v("MÁS")]),e("span",[t._v("INTRODUCCIÓN")])])}],n=s(7870),o=(s(9026),{mixins:[n.v],data(){return{letters:"NUESTRA".split(""),competitividad:"COMPETITIVIDAD".split(""),"Préstamo":"Guía_de_Préstamo".split(""),displayDelay:0,displayedLetters:[],items:[],titles:[],animate__slideInUp:!1,lists:[{title:"Mayor monto, menor interés",text:"Puedes confiar en que nuestros productos ofrecen bajos intereses y que cumplimos con todas las normativas para proporcionarte la mejor opción disponible."},{title:"Préstamo Fácil en Minutos",text:"Obtén tu préstamo de manera rápida y sencilla. Con un proceso simplificado, puedes acceder al financiamiento que necesitas en solo minutos, sin complicaciones ni demoras."},{title:"Variedad de Opciones",text:"Ofrecemos flexibilidad para que ajustes tu ritmo de pago. Tienes la libertad de seleccionar el monto del préstamo, el plazo y la cantidad de pagos según tus necesidades."}],elements:[{name:1,img:s(6365),title:"Completa el Formulario:",text:"Ingresa tus datos personales y financieros en nuestro formulario en línea."},{name:2,img:s(6365),title:"Revisión de Documentos:",text:"Sube los documentos necesarios para verificar tu identidad y situación financiera."},{name:3,img:s(6365),title:"Recepción del Préstamo:",text:"Una vez aprobados, recibe los fondos directamente en tu cuenta bancaria."}],activeIndex:0,timerId:null}},components:{Nav:()=>s.e(724).then(s.bind(s,7724)),Footer:()=>Promise.resolve().then(s.bind(s,9026))},computed:{},mounted(){this.startInterval(),window.addEventListener("beforeunload",this.handleBeforeUnload)},beforeDestroy(){this.stopInterval(),window.removeEventListener("beforeunload",this.handleBeforeUnload)},methods:{handleBeforeUnload(t){console.log("页面即将刷新或关闭"),window.scrollTo(0,0)},startInterval(){this.timerId&&clearInterval(this.timerId),this.timerId=setInterval((()=>{this.activeIndex>=2?this.activeIndex=0:this.activeIndex++}),5e3)},restartInterval(){this.activeIndex=0,this.startInterval()},stopInterval(){this.timerId&&(clearInterval(this.timerId),this.timerId=null)},zoomElement(t){this.activeIndex=t},fnClearText(){this.displayedLetters=[],this.items=[],this.animate__slideInUp=!1},fnGetTextList(){this.displayedLetters=this.showText(this.letters),this.items=this.showText(this.competitividad),this.animate__slideInUp=!0},fnshow(){this.titles=this.showText(this.Préstamo)},fnClearShow(){this.titles=[]},showText(t){return t.map(((e,s)=>({letter:e,display:s<t.length,animationDelay:.05*s+"s"})))}}}),l=o,r=s(845),d=(0,r.A)(l,i,a,!1,null,"16ea5991",null),c=d.exports},7870:function(t,e,s){s.d(e,{v:function(){return i}});const i={data(){return{slideDown:!1,slideOutUp:!1}},methods:{handleWheel(t){const e=t.deltaY,s=this.$refs.scrollContainer;s.scrollTop;console.log("event",s.scrollTop+e);const i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(console.log("1111",i),e>0)this.slideOutUp=!0,this.slideDown=!1,console.log("向下滚动"),i>=100?(this.fnGetTextList(),i>=859?this.fnshow():this.fnClearShow()):this.fnClearText();else if(e<0){if(0===i)return;this.slideDown=!0,this.slideOutUp=!1}}}}},6365:function(t,e,s){t.exports=s.p+"img/completa.3d0a2e3d.png"},5938:function(t,e,s){t.exports=s.p+"img/money.679a0a1b.png"},555:function(t,e,s){t.exports=s.p+"img/wallet.255371ca.png"}}]);
//# sourceMappingURL=home.bf14cead.js.map