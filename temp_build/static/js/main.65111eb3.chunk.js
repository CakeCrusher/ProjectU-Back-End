(this.webpackJsonpprojectu=this.webpackJsonpprojectu||[]).push([[0],{17:function(e,t){},26:function(e,t,n){},39:function(e,t,n){e.exports=n(70)},48:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),l=n.n(r),i=n(17),o=n.n(i),s=n(2),u=n(8),f=n(12),C=(n(48),n(19)),p=n(18),d=(n(26),n(11)),m=n.n(d),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"white",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NAV":return t.data}return e},E=Object(s.b)((function(e){return{overlay:e.overlay,slices:e.slices,navTracker:e.navTracker}}),{setNav:function(e){return function(t){return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t({type:"SET_NAV",data:e});case 1:case"end":return n.stop()}}))}}})((function(e){var t=function(e,t,n,a){var c=(a-90)*Math.PI/180;return{x:e+n*Math.cos(c),y:t+n*Math.sin(c)}},n=function(e,n,a,c,r){var l=t(e,n,a,r),i=t(e,n,a,c),o=r-c<=180?"0":"1";return["M",e,n,"L",l.x,l.y,"A",a,a,0,o,0,i.x,i.y,"Z"].join(" ")}(500,500,480,0-e.sliceData.percent/2,e.sliceData.percent/2),a=e.sliceData.clock+e.sliceData.percent/2,r="rotate(".concat(a,", 500, 500)"),l="rotate(".concat(-a,", 500, 250)"),i=(500-e.sliceData.title.length/2*23).toString(),o="slice".concat(e.sliceData.id),s="expanded"===e.overlay?"block":"none";e.slices.find((function(t){return t.id===e.navTracker}))&&e.slices.find((function(t){return t.id===e.navTracker})).color;return c.a.createElement(u.b,{to:"/slice/".concat(e.sliceData.id),onClick:function(){return e.setNav(e.sliceData.id)},onMouseEnter:function(){return e.toSetPieHovered(e.sliceData.id)},onMouseLeave:function(){return e.toSetPieHovered(null)},transform:r,className:"pie-slice-container"},c.a.createElement("clipPath",{id:o},c.a.createElement("path",{d:n,fill:"green"})),c.a.createElement("g",{clipPath:"url(#".concat(o,")")},c.a.createElement("path",{d:n,stroke:"white",strokeWidth:"10",fill:e.sliceData.color,className:"pie-slice-bg"}),c.a.createElement("text",{display:s,x:i,y:"250",fontSize:"40",fill:"white",fontWeight:"bold",transform:l},e.sliceData.title)))})),h=Object(s.b)((function(e){return{overlay:e.overlay,slices:e.slices,navTracker:e.navTracker}}))((function(e){var t=Object(a.useState)("block"),n=Object(p.a)(t,2),r=n[0],l=n[1];Object(a.useEffect)((function(){"expanded"===e.overlay?l("none"):l("block")}));var i={display:r},o=e.slices.find((function(t){return t.id===e.navTracker}))?e.slices.find((function(t){return t.id===e.navTracker})).color:"white";return"toHome"===e.overlay?c.a.createElement(u.b,{style:i,to:"/",className:"pie-overlay"},c.a.createElement("circle",{cx:"500",cy:"500",r:"505",fill:"#282828",opacity:"0.6",className:"pie-overlay-bg"}),c.a.createElement("svg",{x:"325",y:"325",width:"350",height:"350",fill:"#f1f1f1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M 8.0175781 1.015625 C 7.2760351 0.95908141 6.5400486 1.0850468 5.8945312 1.4589844 C 5.0338413 1.9575677 4.4726627 2.8140224 4.1835938 3.7792969 C 3.8945251 4.7445712 3.843622 5.8448865 3.9667969 7.0429688 C 3.9809453 7.1805856 4.0045725 7.3246099 4.0234375 7.4648438 C 3.9530227 7.495364 3.8775978 7.523322 3.8085938 7.5546875 C 2.7260697 8.0467438 1.813209 8.6418477 1.1328125 9.3730469 C 0.45241597 10.104246 0 11.012402 0 12 C 0 12.987598 0.45241597 13.895754 1.1328125 14.626953 C 1.813209 15.358152 2.7260698 15.953256 3.8085938 16.445312 C 3.8775978 16.476678 3.9530227 16.504636 4.0234375 16.535156 C 4.0045652 16.675389 3.9809525 16.819415 3.9667969 16.957031 C 3.8435593 18.155107 3.894576 19.255414 4.1835938 20.220703 C 4.4726121 21.185993 5.0319143 22.042388 5.8925781 22.541016 C 6.7532418 23.039645 7.7746919 23.098544 8.7558594 22.869141 C 9.7370269 22.639738 10.717253 22.138379 11.695312 21.435547 C 11.796252 21.363012 11.897163 21.278065 11.998047 21.201172 C 12.099633 21.27864 12.201091 21.362498 12.302734 21.435547 C 13.280757 22.13843 14.261033 22.641639 15.242188 22.871094 C 16.223343 23.100548 17.244779 23.0396 18.105469 22.541016 C 18.966159 22.042433 19.527337 21.185977 19.816406 20.220703 C 20.105475 19.255429 20.156378 18.155113 20.033203 16.957031 C 20.019016 16.819041 19.993538 16.675778 19.974609 16.535156 C 20.045581 16.504406 20.121868 16.476921 20.191406 16.445312 C 21.27393 15.953257 22.186791 15.358152 22.867188 14.626953 C 23.547584 13.895754 24 12.987598 24 12 C 24 11.012402 23.547584 10.104246 22.867188 9.3730469 C 22.186791 8.6418477 21.27393 8.0467438 20.191406 7.5546875 C 20.122402 7.523322 20.046977 7.495364 19.976562 7.4648438 C 19.995435 7.3246109 20.019048 7.1805848 20.033203 7.0429688 C 20.156441 5.8448928 20.105424 4.7445862 19.816406 3.7792969 C 19.527388 2.8140075 18.968086 1.9576128 18.107422 1.4589844 C 17.246759 0.960356 16.225309 0.90145637 15.244141 1.1308594 C 14.262974 1.3602625 13.282747 1.8616209 12.304688 2.5644531 C 12.20334 2.6372811 12.101291 2.7216067 12 2.7988281 C 11.898952 2.7217938 11.79837 2.6371146 11.697266 2.5644531 C 10.719243 1.8615698 9.738968 1.3603139 8.7578125 1.1308594 C 8.5125236 1.0734957 8.2647591 1.0344729 8.0175781 1.015625 z M 7.4921875 3.0058594 C 7.7223831 2.9842669 7.9872408 3.0047998 8.3007812 3.078125 C 8.9106129 3.220741 9.6645617 3.5807085 10.462891 4.1445312 C 9.8349553 4.7654743 9.219274 5.4598005 8.6269531 6.2285156 C 7.6813357 6.3600757 6.7888745 6.5510748 5.953125 6.7871094 C 5.85696 5.8010795 5.9200413 4.9596606 6.1015625 4.3535156 C 6.2863132 3.7365846 6.5557543 3.3868324 6.8964844 3.1894531 C 7.0668494 3.0907635 7.2619919 3.0274519 7.4921875 3.0058594 z M 16.134766 3.0058594 C 16.53816 2.9704224 16.847976 3.0414057 17.103516 3.1894531 C 17.444236 3.3868502 17.715673 3.7365753 17.900391 4.3535156 C 18.08188 4.9596688 18.145043 5.8010878 18.048828 6.7871094 C 17.212566 6.5508334 16.319346 6.3601705 15.373047 6.2285156 C 14.780955 5.460029 14.166756 4.7653451 13.539062 4.1445312 C 14.336909 3.5813127 15.089729 3.2206275 15.699219 3.078125 C 15.855991 3.0414707 16.000301 3.0176717 16.134766 3.0058594 z M 12 5.453125 C 12.1786 5.6264724 12.356566 5.822065 12.535156 6.0117188 C 12.356457 6.0080175 12.180701 6 12 6 C 11.819299 6 11.643543 6.0080175 11.464844 6.0117188 C 11.643444 5.8220743 11.821391 5.626463 12 5.453125 z M 12 8 C 12.788007 8 13.548766 8.0481275 14.285156 8.1230469 C 14.700857 8.7054132 15.10401 9.3258087 15.484375 9.9824219 C 15.875375 10.657394 16.217136 11.33197 16.521484 12 C 16.217102 12.668014 15.875411 13.34458 15.484375 14.019531 C 15.103975 14.676124 14.700887 15.294609 14.285156 15.876953 C 13.548766 15.951873 12.788007 16 12 16 C 11.211993 16 10.451234 15.951873 9.7148438 15.876953 C 9.2991434 15.294587 8.8959901 14.676144 8.515625 14.019531 C 8.1246248 13.344559 7.7828635 12.66803 7.4785156 12 C 7.7828984 11.331986 8.1245894 10.655421 8.515625 9.9804688 C 8.8960244 9.3238755 9.299113 8.7053914 9.7148438 8.1230469 C 10.451234 8.0481275 11.211993 8 12 8 z M 7.0175781 8.5957031 C 6.9403709 8.7239401 6.8608676 8.8478332 6.7851562 8.9785156 C 6.6949605 9.1341991 6.6134705 9.2895259 6.5273438 9.4453125 C 6.4589365 9.2180213 6.3847285 8.9880962 6.328125 8.7675781 C 6.5459067 8.7038112 6.7874945 8.6524909 7.0175781 8.5957031 z M 16.982422 8.5976562 C 17.212346 8.6544112 17.454237 8.7038533 17.671875 8.7675781 C 17.61526 8.9880933 17.541075 9.2180249 17.472656 9.4453125 C 17.386656 9.2897454 17.304902 9.13398 17.214844 8.9785156 C 17.139251 8.8480215 17.059507 8.7257123 16.982422 8.5976562 z M 12 9 C 10.346 9 9 10.346 9 12 C 9 13.654 10.346 15 12 15 C 13.654 15 15 13.654 15 12 C 15 10.346 13.654 9 12 9 z M 4.4335938 9.4746094 C 4.6534868 10.294933 4.9367116 11.138435 5.2910156 11.998047 C 4.9361638 12.858395 4.6518611 13.702404 4.4316406 14.523438 C 3.6265076 14.13386 2.9942548 13.693935 2.5957031 13.265625 C 2.1628391 12.800441 2 12.393114 2 12 C 2 11.606886 2.1628391 11.199559 2.5957031 10.734375 C 2.9946507 10.30564 3.6272996 9.8644694 4.4335938 9.4746094 z M 19.568359 9.4765625 C 20.373493 9.86614 21.005745 10.306065 21.404297 10.734375 C 21.837161 11.199559 22 11.606886 22 12 C 22 12.393114 21.837161 12.800441 21.404297 13.265625 C 21.005481 13.694218 20.372314 14.133671 19.566406 14.523438 C 19.346408 13.70331 19.063302 12.859359 18.708984 12 C 19.063528 11.140213 19.348278 10.297076 19.568359 9.4765625 z M 6.5273438 14.554688 C 6.6134624 14.710479 6.6949687 14.865796 6.7851562 15.021484 C 6.8605788 15.151684 6.9406705 15.274571 7.0175781 15.402344 C 6.7876543 15.345589 6.5457628 15.296147 6.328125 15.232422 C 6.38474 15.011907 6.4589246 14.781975 6.5273438 14.554688 z M 17.472656 14.554688 C 17.541008 14.781756 17.615303 15.012111 17.671875 15.232422 C 17.454093 15.296189 17.212505 15.347509 16.982422 15.404297 C 17.059629 15.27606 17.139132 15.152167 17.214844 15.021484 C 17.305039 14.865801 17.386529 14.710474 17.472656 14.554688 z M 5.9511719 17.212891 C 6.7874339 17.449167 7.6806544 17.639829 8.6269531 17.771484 C 9.2189246 18.539829 9.8333748 19.234735 10.460938 19.855469 C 9.6630912 20.418687 8.9102701 20.779373 8.3007812 20.921875 C 7.6736927 21.068493 7.2372042 21.007944 6.8964844 20.810547 C 6.5557646 20.61315 6.2843278 20.263425 6.0996094 19.646484 C 5.9181204 19.040332 5.8549563 18.198912 5.9511719 17.212891 z M 18.048828 17.212891 C 18.144992 18.198917 18.081909 19.042294 17.900391 19.648438 C 17.71564 20.265369 17.444246 20.613168 17.103516 20.810547 C 16.762786 21.007926 16.3263 21.068525 15.699219 20.921875 C 15.089362 20.779253 14.335475 20.419332 13.537109 19.855469 C 14.165045 19.234526 14.780726 18.5402 15.373047 17.771484 C 16.319346 17.639829 17.212566 17.449167 18.048828 17.212891 z M 11.464844 17.988281 C 11.643543 17.991983 11.819299 18 12 18 C 12.180701 18 12.356457 17.991983 12.535156 17.988281 C 12.356556 18.177926 12.178609 18.373537 12 18.546875 C 11.8214 18.373528 11.643434 18.177935 11.464844 17.988281 z"}))):c.a.createElement("svg",{style:i,onClick:e.onClickExpand,className:"pie-overlay"},c.a.createElement("circle",{cx:"500",cy:"500",r:"505",fill:o,opacity:"0.6",className:"pie-overlay-bg"}),c.a.createElement("svg",{x:"350",y:"350",height:"300",width:"300",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fill:"#282828",d:"m26.586 34.586-14.586 14.586v-5.172c0-1.104-.896-2-2-2s-2 .896-2 2v10c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2s-.896-2-2-2h-5.172l14.586-14.586c.781-.781.781-2.047 0-2.828-.78-.781-2.048-.781-2.828 0z"}),c.a.createElement("path",{fill:"#282828",d:"m54 8h-10c-1.104 0-2 .896-2 2s.896 2 2 2h5.172l-14.586 14.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.023-.195 1.414-.586l14.586-14.586v5.172c0 1.104.896 2 2 2s2-.896 2-2v-10c0-1.104-.896-2-2-2z"})))})),b=function(){return function(e){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"TO_HOME",data:"toHome"});case 1:case"end":return t.stop()}}))}},y=function(){return function(e){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"TO_EXPAND",data:"toExpand"});case 1:case"end":return t.stop()}}))}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toHome",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TO_HOME":case"TO_EXPAND":case"EXPANDED":return t.data}return e},w=Object(s.b)((function(e){return{overlay:e.overlay}}),{setToExpand:y})((function(e){var t="expanded"===e.overlay?"block":"none";console.log(t);var n={display:t};return c.a.createElement("svg",{style:n,onClick:function(){return e.setToExpand()},className:"pie-overlay"},c.a.createElement("circle",{cx:"110",cy:"110",r:"110",fill:"white",opacity:"0.6",className:"pie-overlay-bg"}),c.a.createElement("svg",{x:"45",y:"45",height:"120",width:"120",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{transform:"rotate(180, 19, 45)",fill:"#282828",d:"m26.586 34.586-14.586 14.586v-5.172c0-1.104-.896-2-2-2s-2 .896-2 2v10c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2s-.896-2-2-2h-5.172l14.586-14.586c.781-.781.781-2.047 0-2.828-.78-.781-2.048-.781-2.828 0z"}),c.a.createElement("path",{transform:"rotate(180, 45, 19)",fill:"#282828",d:"m54 8h-10c-1.104 0-2 .896-2 2s.896 2 2 2h5.172l-14.586 14.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.023-.195 1.414-.586l14.586-14.586v5.172c0 1.104.896 2 2 2s2-.896 2-2v-10c0-1.104-.896-2-2-2z"})))})),g=Object(s.b)((function(e){return{slices:e.slices,overlay:e.overlay,navTracker:e.navTracker}}),{setExpanded:function(){return function(e){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"EXPANDED",data:"expanded"});case 1:case"end":return t.stop()}}))}}})((function(e){var t=Object(a.useState)(null),n=Object(p.a)(t,2),r=n[0],l=n[1],i=function(e){l(e)},o=e.slices;if(r){var s=e.slices.find((function(e){return e.id===r})).percent,u=100-s;s<25&&(o=e.slices.map((function(e){if(e.id===r)return Object(C.a)({},e,{percent:25});var t=e.percent/u*100/2*1.5;return Object(C.a)({},e,{percent:t})})))}o=function(e){var t=0;return e.map((function(e){var n=3.6*e.percent,a=t;return t+=n,Object(C.a)({},e,{percent:n,clock:a})}))}(o);var f="expanded"===e.overlay?{left:"0px",top:"0px",width:"500px",height:"500px",transition:"left 0.5s, top 0.5s, width 0.5s, height 0.5s"}:{left:"-50px",top:"-50px",width:"200px",height:"200px",transition:"left 0.5s, top 0.5s, width 0.5s, height 0.5s"};e.slices.find((function(t){return t.id===e.navTracker}))&&e.slices.find((function(t){return t.id===e.navTracker})).color;return c.a.createElement("svg",{style:f,viewBox:"-10 -10 1020 1020",className:"pie-container"},c.a.createElement(w,null),c.a.createElement("circle",{cx:"500",cy:"500",r:"500",fill:"white"}),o.map((function(e){return c.a.createElement(E,{key:e.id,clock:e.clock,toSetPieHovered:i,sliceData:e})})),c.a.createElement("circle",{cx:"500",cy:"500",r:"40",fill:"white"}),c.a.createElement(h,{onClickExpand:function(){e.setExpanded()}}))})),k=function(e){return c.a.createElement("div",{className:"nav-container"},c.a.createElement(g,null),c.a.createElement(u.b,{to:"/about",className:"nav-item"},"about"),c.a.createElement(u.b,{to:"/policies",className:"nav-item"},"policies"),c.a.createElement(u.b,{to:"/contact",className:"nav-item"},"contact"))},O=n(37),T=n.n(O),j=function(){return T.a.get("/api/slices").then((function(e){return e.data}))},N=Object(s.b)((function(e){return{posts:e.posts,slices:e.slices}}),{setToExpand:y})((function(e){Object(a.useEffect)((function(){e.setToExpand()}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{backgroundColor:"white",color:"#282828"},className:"banner"},c.a.createElement("h1",null,"Home")),c.a.createElement("div",null,c.a.createElement("h1",null,"Explore")),c.a.createElement("div",null,c.a.createElement("h1",null,"Posts"),function(){var e;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(j());case 2:return e=t.sent,t.abrupt("return",c.a.createElement("ul",null,e.map((function(e){return c.a.createElement("li",null,e.title)}))));case 4:case"end":return t.stop()}}))}()),c.a.createElement("div",null,c.a.createElement("h1",null,"Extra")))})),M=Object(s.b)((function(e){return{posts:e.posts}}),{setToExpand:y})((function(e){Object(a.useEffect)((function(){e.setToExpand()}),[]);var t={backgroundColor:e.slice.color};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:t,className:"banner"},c.a.createElement("h1",null,e.slice.title)))})),z=Object(s.b)(null,{setToHome:b})((function(e){return Object(a.useEffect)((function(){e.setToHome()}),[]),c.a.createElement("h1",null,"about")})),D=Object(s.b)(null,{setToHome:b})((function(e){return Object(a.useEffect)((function(){e.setToHome()}),[]),c.a.createElement("h1",null,"policies")})),H=Object(s.b)(null,{setToHome:b})((function(e){return Object(a.useEffect)((function(){e.setToHome()}),[]),c.a.createElement("h1",null,"contact")})),P=(n(69),Object(s.b)((function(e){return{slices:e.slices,overlay:e.overlay}}),{inititalizePosts:i.inititalizePosts})((function(e){console.log(e.overlay);return c.a.createElement("div",{className:"wrapper"},c.a.createElement(u.a,null,c.a.createElement(k,null),c.a.createElement(f.a,{exact:!0,path:"/",render:function(){return c.a.createElement(N,null)}}),c.a.createElement(f.a,{exact:!0,path:"/slice/:id",render:function(t){var n,a=t.match;return c.a.createElement(M,{slice:(n=a.params.id,e.slices.find((function(e){return e.id===n})))})}}),c.a.createElement(f.a,{path:"/about",render:function(){return c.a.createElement(z,null)}}),c.a.createElement(f.a,{path:"/policies",render:function(){return c.a.createElement(D,null)}}),c.a.createElement(f.a,{path:"/contact",render:function(){return c.a.createElement(H,null)}})))}))),S=n(13),A=n(38),B=[{percent:41,color:"#b2b201",title:"Front-end",id:"1"},{percent:32,color:"#579e43",title:"Backend-end",id:"2"},{percent:15,color:"#773b5d",title:"Full stack",id:"3"},{percent:7,color:"#0f08d8",title:"Wrodpress",id:"4"},{percent:5,color:"#f43e07",title:'"Build your own" sites',id:"5"}],_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B;arguments.length>1&&arguments[1];return e},F=Object(S.c)({posts:o.a,slices:_,overlay:x,navTracker:v}),X=Object(S.d)(F,Object(S.a)(A.a)),W=function(){return l.a.render(c.a.createElement(s.a,{store:X},c.a.createElement(P,null)),document.getElementById("root"))};W(),X.subscribe((function(){return W()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.65111eb3.chunk.js.map