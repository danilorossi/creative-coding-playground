(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{285:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=(a(83),a(13)),c=a(287),s=a(326),u=a(309),f=a(310),d=a(327),m=a(312),h=a(313),p=a(314);var g=Object(c.a)(function(e){return{drawer:{width:200,flexShrink:0},drawerPaper:{width:200},toolbar:e.mixins.toolbar}}),v=function(e){var t=e.open,a=e.headSections,n=e.examples,o=e.experiments,i=e.selected,l=e.onSelect,c=e.onOverlayClick,s=g(),v=function(e,t,a){return r.a.createElement(u.a,{selected:e===a,onClick:function(){return l(e)},button:!0,key:t},r.a.createElement(f.a,{primary:e}))};return r.a.createElement(d.a,{className:s.drawer,anchor:"left",open:t,classes:{paper:s.drawerPaper},onClose:c},r.a.createElement(m.a,null,a.map(function(e,t){var a=e.title;return v(a,t,i)})),r.a.createElement(h.a,null),r.a.createElement(p.a,{component:"div"},"Course examples"),r.a.createElement(h.a,null),r.a.createElement(m.a,null,n.map(function(e,t){var a=e.title;return e.filename,v(a,t,i)})),r.a.createElement(h.a,null),r.a.createElement(p.a,{component:"div"},"Experiments"),r.a.createElement(h.a,null),r.a.createElement(m.a,null,o.map(function(e,t){var a=e.title;return e.filename,v(a,t,i)})))},b=a(315),E=a(316),y=a(288),w=a(45),k=a(331),S=a(68),x=a.n(S);var j=Object(c.a)(function(e){return{appBar:{zIndex:e.zIndex.drawer+1}}}),C=function(e){var t=e.title,a=e.onMenuIconClick,n=j();return r.a.createElement(b.a,{position:"fixed",className:n.appBar},r.a.createElement(E.a,null,r.a.createElement(y.a,{onClick:a,edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(x.a,null)),r.a.createElement(w.a,{variant:"h6",noWrap:!0},t,"  ",r.a.createElement(k.a,{color:"secondary",size:"small",label:"alpha"}))))},O=a(69),R=a.n(O),N=a(318),M=a(319),G=a(286),P=a(328),B=a(317);var z=Object(c.a)(function(e){return{root:{display:"flex"},link:{margin:e.spacing(1)}}}),I=function(e){var t=e.sketchMeta,a=e.value,n=e.handleTabChange,o=t.component,i=t.renderer,l=t.settings,c=(t.fileName,t.showRefresh),s=t.payload,u=t.payloadSchema,f=z();return r.a.createElement("div",{key:Date.now()},r.a.createElement(G.a,{className:f.root},r.a.createElement(P.a,{value:a,onChange:n,indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(B.a,{icon:r.a.createElement(N.a,null),"aria-label":"View",label:"Sketch"}),r.a.createElement(B.a,{icon:r.a.createElement(M.a,null),"aria-label":"Code",label:"Code"}))),0===a&&r.a.createElement("div",{style:{padding:25,marginTop:10,background:"white"}},r.a.createElement(o,{renderer:i,settings:l,showRefreshButton:c,payload:s,payloadSchema:u})),1===a&&r.a.createElement("div",{style:{padding:25,marginTop:10,background:"white"}},r.a.createElement(R.a,{language:"javascript"},i.toString()),!1))},T=a(20),W=a(52),A=a(329),F=a(323),V=a(324),D=a(70),U=a.n(D),_=a(332),J=a(320),L=a(322),K=a(72),q=a.n(K),H=a(321),$=a(330);var Q=function(e){var t=e.onFieldValueChange,a=e.originalPayload,n=e.uiControlMeta,o=n.label,i=n.defaultValue,l=n.field,c=n.min,s=n.max,u=n.step,f=a[l]||i;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{id:"discrete-slider",gutterBottom:!0},o),r.a.createElement($.a,{valueLabelDisplay:"on",defaultValue:f,"aria-labelledby":"discrete-slider",step:u,onChangeCommitted:function(e,a){t(l,a)},marks:!0,min:c,max:s}))},X=Object(c.a)(function(e){return{root:{marginBottom:40,marginTop:0},tuneIcon:{marginRight:e.spacing(1)},uiControlsContainer:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}),Y=function(e,t,a){return e&&e.length>0?e.map(function(e,n){var o=null;switch(e.type){case"NUMERIC_RANGE":o=r.a.createElement("div",{key:n,style:{width:"100%"}},r.a.createElement(Q,{onFieldValueChange:a,uiControlMeta:e,originalPayload:t}));break;default:o=null}return o}):[]};var Z=function(e){var t=e.sketchPayload,a=e.sketchConfiPanelgMeta,n=e.onFieldValueChange,o=X(),i=Y(a,t,n);return r.a.createElement(_.a,{className:o.root},r.a.createElement(J.a,{expandIcon:r.a.createElement(q.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(H.a,{fontSize:"small",className:o.tuneIcon}),r.a.createElement(w.a,{className:o.heading},"Parameters")),r.a.createElement(L.a,null,r.a.createElement("div",{className:o.uiControlsContainer},i)))},ee={dimensions:[2048,2048]},te=Object(c.a)(function(e){return{fab:{position:"absolute",top:-15,left:-15},extendedIcon:{marginRight:e.spacing(1)},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}});var ae=function(e){var t=e.renderer,a=e.settings,o=void 0===a?ee:a,i=e.showRefreshButton,c=void 0!==i&&i,s=e.payload,u=void 0===s?null:s,f=e.payloadSchema,d=void 0===f?null:f,m=te(),h=Object(n.useRef)(null),p=Object(n.useState)(0),g=Object(l.a)(p,2),v=g[0],b=g[1],E=Object(n.useState)(u?Object(T.a)({},u):{}),y=Object(l.a)(E,2),w=y[0],k=y[1],S=Object(n.useState)(w),x=Object(l.a)(S,2),j=x[0],C=x[1];Object(n.useEffect)(function(){U()(function(){return t(w)},Object(T.a)({},o,{canvas:h.current}))},[t,o,v,w]);var O=d&&d.length>0;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"canvas-sketch-wrapper"},r.a.createElement("div",{style:{textAlign:"center",position:"relative"}},O&&r.a.createElement(Z,{sketchPayload:u,sketchConfiPanelgMeta:d,onFieldValueChange:function(e,t){C(Object(T.a)({},u,Object(W.a)({},e,t)))}}),c&&r.a.createElement(A.a,{title:"Redraw sketch","aria-label":"add"},r.a.createElement(F.a,{size:"small",onClick:function(){return function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&k(j),b(v+1)}(O)},"aria-label":"Reload",className:m.fab,color:"secondary"},r.a.createElement(V.a,{title:"Redraw"}))),r.a.createElement("canvas",{ref:h}))))},ne=a(325),re=Object(c.a)(function(e){return{root:{width:"100%",maxWidth:500},section:{paddingTop:e.spacing(2)},link:{marginRight:e.spacing(1)}}}),oe=function(e,t,a){return r.a.createElement(ne.a,{target:"_blank",rel:"noopener",href:e,className:t},a)};var ie=function(e){var t=re();return r.a.createElement("div",{key:e,className:t.root},r.a.createElement(w.a,{variant:"h5",gutterBottom:!0},r.a.createElement("b",null,"About")),r.a.createElement(w.a,{className:t.section,variant:"body1",gutterBottom:!0},'"Creative Coding Playground" is a page I am developing in my free time as a learning tool for the ',oe("https://frontendmasters.com/courses/canvas-webgl/",t.link,"Creative Coding with Canvas & WebGL"),"course by ",oe("https://github.com/mattdesl",t.link,"Matt DesLauriers")," on Frontend Masters"),r.a.createElement("br",null),r.a.createElement(w.a,{variant:"h6",gutterBottom:!0},r.a.createElement("b",null,"Spaghetti code warning!")),r.a.createElement(w.a,{className:t.section,variant:"body1",gutterBottom:!0},"This is a ",r.a.createElement("b",null,"work-in-progress proof of concept")," and it's not meant, for now, to be a reference on any topic in any way - JS, React, canvas, project structure, etc. If you are still curious, you can check the code on ",oe("https://github.com/danilorossi/creative-coding-playground",t.link,"GitHub")),r.a.createElement("br",null),r.a.createElement(w.a,{variant:"subtitle1",gutterBottom:!0},"Feel free to say hello anytime! ",oe("http://danilorossi.me",t.link,"http://danilorossi.me")))},le=a(29).lerp,ce={title:"Simple Grid",fileName:"simpleGrid.js",renderer:function(e){return function(e){var t=e.context,a=e.width,n=e.height,r=function(){for(var e=[],t=0;t<8;t++)for(var a=0;a<8;a++){var n=t/7,r=a/7;e.push([n,r])}return e}(),o=.175*a;t.fillStyle="white",t.fillRect(0,0,a,n),r.forEach(function(e){var r=Object(l.a)(e,2),i=r[0],c=r[1],s=le(o,a-o,i),u=le(o,n-o,c);t.beginPath(),t.arc(s,u,40,0,2*Math.PI),t.strokeStyle="black",t.lineWidth=20,t.stroke()})}},showRefresh:!1},se=a(29).lerp,ue={title:"Random Grid",fileName:"randomGrid.js",renderer:function(e){var t=e.gridSize;return function(e){var a=e.context,n=e.width,r=e.height,o=t,i=.15*n,c=(n-2*i)/o-20,s=function(){for(var e=[],t=0;t<o;t++)for(var a=0;a<o;a++){var n=t/(o-1),r=a/(o-1);e.push([n,r])}return e}().filter(function(){return Math.random()>.5});a.fillStyle="#cc8080",a.fillRect(0,0,n,r),s.forEach(function(e){var t=Object(l.a)(e,2),o=t[0],s=t[1],u=se(i,n-i,o),f=se(i,r-i,s);a.beginPath(),a.arc(u,f,.5*c,0,2*Math.PI),a.fillStyle="#fff",a.fill()})}},showRefresh:!0,payload:{gridSize:40},payloadSchema:[{field:"gridSize",label:"Grid size",defaultValue:40,type:"NUMERIC_RANGE",min:4,max:60,step:5}]},fe=a(29).lerp,de=a(48),me=a(44),he={title:"Random Color & Size Grid",fileName:"randomColorSizeGrid.js",renderer:function(e){return function(e){var t=e.context,a=e.width,n=e.height,r=me.pick(de),o=(r=(r=me.shuffle(r)).slice(0,me.rangeFloor(2,r.length+1))).shift(),i=function(){for(var e=[],t=0;t<30;t++)for(var a=0;a<30;a++){var n=[t/29,a/29];e.push({color:me.pick(r),radius:Math.abs(30+20*me.gaussian()),position:n})}return e}().filter(function(){return Math.random()>.75});i=me.shuffle(i);var l=.175*a;t.fillStyle=o,t.fillRect(0,0,a,n),i.forEach(function(e){var r=e.position,o=e.radius,i=e.color,c=fe(l,a-l,r[0]),s=fe(l,n-l,r[1]);t.beginPath(),t.arc(c,s,o,0,2*Math.PI),t.fillStyle=i,t.fill()})}},showRefresh:!0},pe=a(22),ge=a.n(pe),ve=a(37),be=a(29).lerp,Ee=a(44),ye={title:"Random Konami Grid",fileName:"randomKonamiGrid.js",renderer:function(e){return function(){var e=Object(ve.a)(ge.a.mark(function e(t){var a,n,r,o,i,l,c,s,u,f;return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.context,n=t.width,r=t.height,o="\u2190\u2191\u2192\u2193AB".split(""),i="hsl(0, 0%, 96%)",l=["hsl(0, 0%, 10%)"],c=function(){for(var e=[],t=0;t<20;t++)for(var a=0;a<20;a++){var n=[t/19,a/19],r=Ee.pick(o),i=/[AB]/i.test(r)?25:50,c=/[AB]/i.test(r)?10:20;e.push({color:Ee.pick(l),radius:Math.abs(i+c*Ee.gaussian()),position:n,character:r})}return e},s=c().filter(function(){return Ee.chance(.5)}),u=new window.FontFace("SpaceGrotesk-Medium",'url("'.concat("/assets/fonts/SpaceGrotesk-Medium.woff",'")')),e.next=11,u.load();case 11:document.fonts.add(u),f=.175*n,a.fillStyle=i,a.fillRect(0,0,n,r),s.forEach(function(e){var t=e.position,o=e.radius,i=e.color,l=e.character,c=be(f,n-f,t[0]),s=be(f,r-f,t[1]);a.fillStyle=i,a.font="".concat(o,'px "SpaceGrotesk-Medium"'),a.textAlign="center",a.textBaseline="middle",a.fillText(l,c,s)});case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},showRefresh:!0},we=a(29).lerp,ke=a(48),Se=a(44),xe={title:"Random Grid Painting",fileName:"randomGridPainting.js",renderer:function(e){return function(){var e=Object(ve.a)(ge.a.mark(function e(t){var a,n,r,o,i,c,s,u;return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.context,n=t.width,r=t.height,o=.15*n,i=Se.rangeFloor(2,6),c=Se.shuffle(Se.pick(ke)).slice(0,i),s="=.".split(""),u=function(){for(var e=[],t=Se.range(.75,1.25),a=0;a<60;a++)for(var r=0;r<60;r++){var o=a/59,i=r/59,u=Se.insideSphere(.05),f=Object(l.a)(u,2);o+=f[0],i+=f[1];var d=Se.noise2D(o*t,i*t),m=.5*d+.5,h=.05*n,p=.1*n;e.push({color:Se.pick(c),size:Math.abs(h*m+Se.gaussian()*p),rotation:d*Math.PI*.5,character:Se.pick(s),position:[o,i]})}return e}().filter(function(){return Se.chance(.5)}),a.fillStyle="hsl(0, 0%, 94%)",a.fillRect(0,0,n,r),u.forEach(function(e){var t=e.position,i=e.rotation,c=e.size,s=e.color,u=e.character,f=Object(l.a)(t,2),d=f[0],m=f[1],h=we(o,n-o,d),p=we(o,r-o,m);a.fillStyle=a.strokeStyle=s,a.textAlign="center",a.textBaseline="middle",a.font="".concat(c,"px ").concat('"Andale Mono"'),a.save(),a.translate(h,p),a.rotate(i),a.globalAlpha=.85,a.fillText(u,0,0),a.restore()});case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},showRefresh:!0},je=a(29).lerp,Ce=a(44),Oe=a(48),Re={title:"Sentence Grid",fileName:"sentenceGrid.js",renderer:function(e){return function(){var t=Object(ve.a)(ge.a.mark(function t(a){var n,r,o,i,c,s,u,f,d,m,h,p,g,v,b,E,y;return ge.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.context,r=a.width,o=a.height,i=e.sentence.toUpperCase(),c=Math.ceil(Math.sqrt(i.length)),s=i.split(""),u=Ce.pick(Oe),u=(u=Ce.shuffle(u)).slice(0,3),f=u,d=Object(l.a)(f,3),m=d[0],h=d[1],p=d[2],g=function(e){return e*Math.PI/180},v=function(){for(var e=[],t=0,a=0;a<c;a++)for(var n=0;n<c;n++){var r=n/(c-1),o=a/(c-1),i=s[t++]||"";e.push([r,o,i])}return e},b=v(),E=new window.FontFace("SpaceGrotesk-Bold","url(".concat("/assets/fonts/SpaceGrotesk-Bold.otf",")")),t.next=15,E.load();case 15:document.fonts.add(E),y=.175*r,n.fillStyle=m,n.fillRect(0,0,r,o),b.forEach(function(e){var t=Object(l.a)(e,3),a=t[0],i=t[1],c=t[2],s=je(y,r-y,a),u=je(y,o-y,i),f=Ce.pick([0,90,180,270]);n.beginPath(),n.arc(s,u,80,g(f),g(f+270)),n.strokeStyle=h,n.lineWidth=40,n.stroke(),n.beginPath(),n.arc(s,u,80,g(f+270),g(f)),n.strokeStyle=p,n.lineWidth=40,n.stroke(),n.fillStyle=p,n.font='80px "SpaceGrotesk-Bold"',n.textAlign="center",n.textBaseline="middle",n.fillText(c,s,u+5)});case 20:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},showRefresh:!0,payload:{sentence:"Well, have you heard the great news?"}},Ne=a(29).lerp,Me=a(44),Ge=a(48);Me.setSeed(Me.getRandomSeed());var Pe={title:"Generative Wall Drawing",fileName:"generativeWallDrawing.js",renderer:function(e){var t=e.gridSize;return function(e){var a=e.context,n=e.width,r=e.height,o=Me.pick(Ge),i=function(e){for(var t=[],a=Me.shuffle(e);a.length>2;){var n=a.splice(0,2),r=n[0][1]+n[1][1]/2;t.push({tuple:n,avg:r})}return t}(function(){for(var e=[],a=0;a<t;a++)for(var n=0;n<t;n++){var r=a/(t-1),o=n/(t-1);e.push([r,o])}return e}()).sort(function(e,t){return e.avg-t.avg});a.fillStyle="white",a.fillRect(0,0,n,r),a.strokeStyle="white",a.lineWidth=40,i.forEach(function(e){var t=e.tuple,i=Object(l.a)(t[0],2),c=i[0],s=i[1],u=Object(l.a)(t[1],2),f=u[0],d=u[1],m=Ne(0,n-0,c),h=Ne(0,r-0,s),p=Ne(0,n-0,f),g=Ne(0,r-0,d);a.beginPath(),a.moveTo(m,h),a.lineTo(p,g),a.lineTo(p,r),a.lineTo(m,r),a.lineTo(m,h),a.fillStyle=Me.pick(o),a.closePath(),a.stroke(),a.fill()})}},showRefresh:!0,payload:{gridSize:20},payloadSchema:[{field:"gridSize",label:"Grid size",defaultValue:10,type:"NUMERIC_RANGE",min:5,max:100,step:5}]},Be=[{title:"About",component:ie}],ze=[Object(T.a)({},ce,{component:ae}),Object(T.a)({},ue,{component:ae}),Object(T.a)({},he,{component:ae}),Object(T.a)({},ye,{component:ae}),Object(T.a)({},xe,{component:ae})],Ie=[Object(T.a)({},Re,{component:ae}),Object(T.a)({},Pe,{component:ae})];var Te=Object(c.a)(function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}}),We=function(){var e=Te(),t=Object(n.useState)(Be[0].title),a=Object(l.a)(t,2),o=a[0],i=a[1],c=r.a.useState(0),u=Object(l.a)(c,2),f=u[0],d=u[1],m=r.a.useState(!1),h=Object(l.a)(m,2),p=h[0],g=h[1];function b(e,t){d(t)}return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,null),r.a.createElement(C,{title:"Creative Coding playground",onMenuIconClick:function(){return g(!0)}}),r.a.createElement(v,{open:p,selected:o,headSections:Be,examples:ze,experiments:Ie,onOverlayClick:function(){return g(!1)},onSelect:function(e){d(0),i(e),g(!1)}}),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),Be.filter(function(e){return e.title===o}).map(function(e,t){var a=e.component;return r.a.createElement(a,{key:t})}),ze.filter(function(e){return e.title===o}).map(function(e,t){return r.a.createElement(I,{sketchMeta:e,value:f,handleTabChange:b,key:t})}),Ie.filter(function(e){return e.title===o}).map(function(e,t){return r.a.createElement(I,{sketchMeta:e,value:f,handleTabChange:b,key:t})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,a){e.exports=a(285)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.0a3e7081.chunk.js.map