(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{285:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=(a(83),a(11)),c=a(287),s=a(326),u=a(309),f=a(310),d=a(327),m=a(312),p=a(313),h=a(314);var g=Object(c.a)(function(e){return{drawer:{width:200,flexShrink:0},drawerPaper:{width:200},toolbar:e.mixins.toolbar}}),v=function(e){var t=e.open,a=e.headSections,n=e.examples,o=e.experiments,i=e.selected,l=e.onSelect,c=e.onOverlayClick,s=g(),v=function(e,t,a){return r.a.createElement(u.a,{selected:e===a,onClick:function(){return l(e)},button:!0,key:t},r.a.createElement(f.a,{primary:e}))};return r.a.createElement(d.a,{className:s.drawer,anchor:"left",open:t,classes:{paper:s.drawerPaper},onClose:c},r.a.createElement(m.a,null,a.map(function(e,t){var a=e.title;return v(a,t,i)})),r.a.createElement(p.a,null),r.a.createElement(h.a,{component:"div"},"Course examples"),r.a.createElement(p.a,null),r.a.createElement(m.a,null,n.map(function(e,t){var a=e.title;return e.filename,v(a,t,i)})),r.a.createElement(p.a,null),r.a.createElement(h.a,{component:"div"},"Experiments"),r.a.createElement(p.a,null),r.a.createElement(m.a,null,o.map(function(e,t){var a=e.title;return e.filename,v(a,t,i)})))},b=a(315),y=a(316),E=a(288),w=a(45),k=a(331),x=a(68),S=a.n(x);var j=Object(c.a)(function(e){return{appBar:{zIndex:e.zIndex.drawer+1}}}),O=function(e){var t=e.title,a=e.onMenuIconClick,n=j();return r.a.createElement(b.a,{position:"fixed",className:n.appBar},r.a.createElement(y.a,null,r.a.createElement(E.a,{onClick:a,edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(S.a,null)),r.a.createElement(w.a,{variant:"h6",noWrap:!0},t,"  ",r.a.createElement(k.a,{color:"secondary",size:"small",label:"alpha"}))))},C=a(20),R=a.n(C),N=a(26),M=a(69),G=a.n(M),P=a(318),B=a(319),z=a(286),I=a(328),T=a(317);var W=Object(c.a)(function(e){return{root:{display:"flex"},link:{margin:e.spacing(1)}}}),A=function(e){var t=e.sketchMeta,a=e.value,o=e.handleTabChange,i=t.component,c=t.renderer,s=t.settings,u=t.fileName,f=t.showRefresh,d=t.payload,m=t.payloadSchema,p=W(),h=Object(n.useState)([]),g=Object(l.a)(h,2),v=g[0],b=g[1];return Object(n.useEffect)(function(){function e(){return(e=Object(N.a)(R.a.mark(function e(){var t,a;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/danilorossi/creative-coding-playground/master/src/renderers/".concat(u));case 2:return t=e.sent,e.next=5,t.text();case 5:a=e.sent,b([a]);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[t]),r.a.createElement("div",{key:Date.now()},r.a.createElement(z.a,{className:p.root},r.a.createElement(I.a,{value:a,onChange:o,indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(T.a,{icon:r.a.createElement(P.a,null),"aria-label":"View",label:"Sketch"}),r.a.createElement(T.a,{icon:r.a.createElement(B.a,null),"aria-label":"Code",label:"Code"}))),0===a&&r.a.createElement("div",{style:{padding:25,marginTop:10,background:"white"}},r.a.createElement(i,{renderer:c,settings:s,showRefreshButton:f,payload:d,payloadSchema:m})),1===a&&r.a.createElement("div",{style:{padding:25,marginTop:10,background:"white"}},r.a.createElement(G.a,{language:"javascript"},v[0]),!1))},F=a(21),V=a(52),D=a(329),U=a(323),_=a(324),J=a(70),L=a.n(J),K=a(332),q=a(320),H=a(322),$=a(72),Q=a.n($),X=a(321),Y=a(330);var Z=function(e){var t=e.onFieldValueChange,a=e.originalPayload,n=e.uiControlMeta,o=n.label,i=n.defaultValue,l=n.field,c=n.min,s=n.max,u=n.step,f=a[l]||i;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{id:"discrete-slider",gutterBottom:!0},o),r.a.createElement(Y.a,{valueLabelDisplay:"on",defaultValue:f,"aria-labelledby":"discrete-slider",step:u,onChangeCommitted:function(e,a){t(l,a)},marks:!0,min:c,max:s}))},ee=Object(c.a)(function(e){return{root:{marginBottom:40,marginTop:0},tuneIcon:{marginRight:e.spacing(1)},uiControlsContainer:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}),te=function(e,t,a){return e&&e.length>0?e.map(function(e,n){var o=null;switch(e.type){case"NUMERIC_RANGE":o=r.a.createElement("div",{key:n,style:{width:"100%"}},r.a.createElement(Z,{onFieldValueChange:a,uiControlMeta:e,originalPayload:t}));break;default:o=null}return o}):[]};var ae=function(e){var t=e.sketchPayload,a=e.sketchConfiPanelgMeta,n=e.onFieldValueChange,o=ee(),i=te(a,t,n);return r.a.createElement(K.a,{className:o.root},r.a.createElement(q.a,{expandIcon:r.a.createElement(Q.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(X.a,{fontSize:"small",className:o.tuneIcon}),r.a.createElement(w.a,{className:o.heading},"Parameters")),r.a.createElement(H.a,null,r.a.createElement("div",{className:o.uiControlsContainer},i)))},ne={dimensions:[2048,2048]},re=Object(c.a)(function(e){return{fab:{position:"absolute",top:-15,left:-15},extendedIcon:{marginRight:e.spacing(1)},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}});var oe=function(e){var t=e.renderer,a=e.settings,o=void 0===a?ne:a,i=e.showRefreshButton,c=void 0!==i&&i,s=e.payload,u=void 0===s?null:s,f=e.payloadSchema,d=void 0===f?null:f,m=re(),p=Object(n.useRef)(null),h=Object(n.useState)(0),g=Object(l.a)(h,2),v=g[0],b=g[1],y=Object(n.useState)(u?Object(F.a)({},u):{}),E=Object(l.a)(y,2),w=E[0],k=E[1],x=Object(n.useState)(w),S=Object(l.a)(x,2),j=S[0],O=S[1];Object(n.useEffect)(function(){L()(function(){return t(w)},Object(F.a)({},o,{canvas:p.current}))},[t,o,v,w]);var C=d&&d.length>0;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"canvas-sketch-wrapper"},r.a.createElement("div",{style:{textAlign:"center",position:"relative"}},C&&r.a.createElement(ae,{sketchPayload:u,sketchConfiPanelgMeta:d,onFieldValueChange:function(e,t){O(Object(F.a)({},u,Object(V.a)({},e,t)))}}),c&&r.a.createElement(D.a,{title:"Redraw sketch","aria-label":"add"},r.a.createElement(U.a,{size:"small",onClick:function(){return function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&k(j),b(v+1)}(C)},"aria-label":"Reload",className:m.fab,color:"secondary"},r.a.createElement(_.a,{title:"Redraw"}))),r.a.createElement("canvas",{ref:p}))))},ie=a(325),le=Object(c.a)(function(e){return{root:{width:"100%",maxWidth:500},section:{paddingTop:e.spacing(2)},link:{marginRight:e.spacing(1)}}}),ce=function(e,t,a){return r.a.createElement(ie.a,{target:"_blank",rel:"noopener",href:e,className:t},a)};var se=function(e){var t=le();return r.a.createElement("div",{key:e,className:t.root},r.a.createElement(w.a,{variant:"h5",gutterBottom:!0},r.a.createElement("b",null,"About")),r.a.createElement(w.a,{className:t.section,variant:"body1",gutterBottom:!0},'"Creative Coding Playground" is a page I am developing in my free time as a learning tool for the ',ce("https://frontendmasters.com/courses/canvas-webgl/",t.link,"Creative Coding with Canvas & WebGL"),"course by ",ce("https://github.com/mattdesl",t.link,"Matt DesLauriers")," on Frontend Masters"),r.a.createElement("br",null),r.a.createElement(w.a,{variant:"h6",gutterBottom:!0},r.a.createElement("b",null,"Spaghetti code warning!")),r.a.createElement(w.a,{className:t.section,variant:"body1",gutterBottom:!0},"This is a ",r.a.createElement("b",null,"work-in-progress proof of concept")," and it's not meant, for now, to be a reference on any topic in any way - JS, React, canvas, project structure, etc. If you are still curious, you can check the code on ",ce("https://github.com/danilorossi/creative-coding-playground",t.link,"GitHub")),r.a.createElement("br",null),r.a.createElement(w.a,{variant:"subtitle1",gutterBottom:!0},"Feel free to say hello anytime! ",ce("http://danilorossi.me",t.link,"http://danilorossi.me")))},ue=a(30).lerp,fe={title:"Simple Grid",fileName:"examples/simpleGrid.js",renderer:function(e){return function(e){var t=e.context,a=e.width,n=e.height,r=function(){for(var e=[],t=0;t<8;t++)for(var a=0;a<8;a++){var n=t/7,r=a/7;e.push([n,r])}return e}(),o=.175*a;t.fillStyle="white",t.fillRect(0,0,a,n),r.forEach(function(e){var r=Object(l.a)(e,2),i=r[0],c=r[1],s=ue(o,a-o,i),u=ue(o,n-o,c);t.beginPath(),t.arc(s,u,40,0,2*Math.PI),t.strokeStyle="black",t.lineWidth=20,t.stroke()})}},showRefresh:!1},de=a(30).lerp,me={title:"Random Grid",fileName:"examples/randomGrid.js",renderer:function(e){var t=e.gridSize;return function(e){var a=e.context,n=e.width,r=e.height,o=t,i=.15*n,c=(n-2*i)/o-20,s=function(){for(var e=[],t=0;t<o;t++)for(var a=0;a<o;a++){var n=t/(o-1),r=a/(o-1);e.push([n,r])}return e}().filter(function(){return Math.random()>.5});a.fillStyle="#cc8080",a.fillRect(0,0,n,r),s.forEach(function(e){var t=Object(l.a)(e,2),o=t[0],s=t[1],u=de(i,n-i,o),f=de(i,r-i,s);a.beginPath(),a.arc(u,f,.5*c,0,2*Math.PI),a.fillStyle="#fff",a.fill()})}},showRefresh:!0,payload:{gridSize:40},payloadSchema:[{field:"gridSize",label:"Grid size",defaultValue:40,type:"NUMERIC_RANGE",min:4,max:60,step:5}]},pe=a(30).lerp,he=a(48),ge=a(44),ve={title:"Random Color & Size Grid",fileName:"examples/randomColorSizeGrid.js",renderer:function(e){return function(e){var t=e.context,a=e.width,n=e.height,r=ge.pick(he),o=(r=(r=ge.shuffle(r)).slice(0,ge.rangeFloor(2,r.length+1))).shift(),i=function(){for(var e=[],t=0;t<30;t++)for(var a=0;a<30;a++){var n=[t/29,a/29];e.push({color:ge.pick(r),radius:Math.abs(30+20*ge.gaussian()),position:n})}return e}().filter(function(){return Math.random()>.75});i=ge.shuffle(i);var l=.175*a;t.fillStyle=o,t.fillRect(0,0,a,n),i.forEach(function(e){var r=e.position,o=e.radius,i=e.color,c=pe(l,a-l,r[0]),s=pe(l,n-l,r[1]);t.beginPath(),t.arc(c,s,o,0,2*Math.PI),t.fillStyle=i,t.fill()})}},showRefresh:!0},be=a(30).lerp,ye=a(44),Ee={title:"Random Konami Grid",fileName:"examples/randomKonamiGrid.js",renderer:function(e){return function(){var e=Object(N.a)(R.a.mark(function e(t){var a,n,r,o,i,l,c,s,u,f;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.context,n=t.width,r=t.height,o="\u2190\u2191\u2192\u2193AB".split(""),i="hsl(0, 0%, 96%)",l=["hsl(0, 0%, 10%)"],c=function(){for(var e=[],t=0;t<20;t++)for(var a=0;a<20;a++){var n=[t/19,a/19],r=ye.pick(o),i=/[AB]/i.test(r)?25:50,c=/[AB]/i.test(r)?10:20;e.push({color:ye.pick(l),radius:Math.abs(i+c*ye.gaussian()),position:n,character:r})}return e},s=c().filter(function(){return ye.chance(.5)}),u=new window.FontFace("SpaceGrotesk-Medium",'url("'.concat("/creative-coding-playground/assets/fonts/SpaceGrotesk-Medium.woff",'")')),e.next=11,u.load();case 11:document.fonts.add(u),f=.175*n,a.fillStyle=i,a.fillRect(0,0,n,r),s.forEach(function(e){var t=e.position,o=e.radius,i=e.color,l=e.character,c=be(f,n-f,t[0]),s=be(f,r-f,t[1]);a.fillStyle=i,a.font="".concat(o,'px "SpaceGrotesk-Medium"'),a.textAlign="center",a.textBaseline="middle",a.fillText(l,c,s)});case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},showRefresh:!0},we=a(30).lerp,ke=a(48),xe=a(44),Se={title:"Random Grid Painting",fileName:"examples/randomGridPainting.js",renderer:function(e){return function(){var e=Object(N.a)(R.a.mark(function e(t){var a,n,r,o,i,c,s,u;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.context,n=t.width,r=t.height,o=.15*n,i=xe.rangeFloor(2,6),c=xe.shuffle(xe.pick(ke)).slice(0,i),s="=.".split(""),u=function(){for(var e=[],t=xe.range(.75,1.25),a=0;a<60;a++)for(var r=0;r<60;r++){var o=a/59,i=r/59,u=xe.insideSphere(.05),f=Object(l.a)(u,2);o+=f[0],i+=f[1];var d=xe.noise2D(o*t,i*t),m=.5*d+.5,p=.05*n,h=.1*n;e.push({color:xe.pick(c),size:Math.abs(p*m+xe.gaussian()*h),rotation:d*Math.PI*.5,character:xe.pick(s),position:[o,i]})}return e}().filter(function(){return xe.chance(.5)}),a.fillStyle="hsl(0, 0%, 94%)",a.fillRect(0,0,n,r),u.forEach(function(e){var t=e.position,i=e.rotation,c=e.size,s=e.color,u=e.character,f=Object(l.a)(t,2),d=f[0],m=f[1],p=we(o,n-o,d),h=we(o,r-o,m);a.fillStyle=a.strokeStyle=s,a.textAlign="center",a.textBaseline="middle",a.font="".concat(c,"px ").concat('"Andale Mono"'),a.save(),a.translate(p,h),a.rotate(i),a.globalAlpha=.85,a.fillText(u,0,0),a.restore()});case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},showRefresh:!0},je=a(30).lerp,Oe=a(44),Ce=a(48),Re={title:"Sentence Grid",fileName:"experiments/sentenceGrid.js",renderer:function(e){return function(){var t=Object(N.a)(R.a.mark(function t(a){var n,r,o,i,c,s,u,f,d,m,p,h,g,v,b,y,E;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.context,r=a.width,o=a.height,i=e.sentence.toUpperCase(),c=Math.ceil(Math.sqrt(i.length)),s=i.split(""),u=Oe.pick(Ce),u=(u=Oe.shuffle(u)).slice(0,3),f=u,d=Object(l.a)(f,3),m=d[0],p=d[1],h=d[2],g=function(e){return e*Math.PI/180},v=function(){for(var e=[],t=0,a=0;a<c;a++)for(var n=0;n<c;n++){var r=n/(c-1),o=a/(c-1),i=s[t++]||"";e.push([r,o,i])}return e},b=v(),y=new window.FontFace("SpaceGrotesk-Bold","url(".concat("/creative-coding-playground/assets/fonts/SpaceGrotesk-Bold.otf",")")),t.next=15,y.load();case 15:document.fonts.add(y),E=.175*r,n.fillStyle=m,n.fillRect(0,0,r,o),b.forEach(function(e){var t=Object(l.a)(e,3),a=t[0],i=t[1],c=t[2],s=je(E,r-E,a),u=je(E,o-E,i),f=Oe.pick([0,90,180,270]);n.beginPath(),n.arc(s,u,80,g(f),g(f+270)),n.strokeStyle=p,n.lineWidth=40,n.stroke(),n.beginPath(),n.arc(s,u,80,g(f+270),g(f)),n.strokeStyle=h,n.lineWidth=40,n.stroke(),n.fillStyle=h,n.font='80px "SpaceGrotesk-Bold"',n.textAlign="center",n.textBaseline="middle",n.fillText(c,s,u+5)});case 20:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},showRefresh:!0,payload:{sentence:"Well, have you heard the great news?"}},Ne=a(30).lerp,Me=a(44),Ge=a(48);Me.setSeed(Me.getRandomSeed());var Pe={title:"Generative Wall Drawing",fileName:"experiments/generativeWallDrawing.js",renderer:function(e){var t=e.gridSize;return function(e){var a=e.context,n=e.width,r=e.height,o=Me.pick(Ge),i=function(e){for(var t=[],a=Me.shuffle(e);a.length>2;){var n=a.splice(0,2),r=n[0][1]+n[1][1]/2;t.push({tuple:n,avg:r})}return t}(function(){for(var e=[],a=0;a<t;a++)for(var n=0;n<t;n++){var r=a/(t-1),o=n/(t-1);e.push([r,o])}return e}()).sort(function(e,t){return e.avg-t.avg});a.fillStyle="white",a.fillRect(0,0,n,r),a.strokeStyle="white",a.lineWidth=40,i.forEach(function(e){var t=e.tuple,i=Object(l.a)(t[0],2),c=i[0],s=i[1],u=Object(l.a)(t[1],2),f=u[0],d=u[1],m=Ne(0,n-0,c),p=Ne(0,r-0,s),h=Ne(0,n-0,f),g=Ne(0,r-0,d);a.beginPath(),a.moveTo(m,p),a.lineTo(h,g),a.lineTo(h,r),a.lineTo(m,r),a.lineTo(m,p),a.fillStyle=Me.pick(o),a.closePath(),a.stroke(),a.fill()})}},showRefresh:!0,payload:{gridSize:20},payloadSchema:[{field:"gridSize",label:"Grid size",defaultValue:10,type:"NUMERIC_RANGE",min:5,max:100,step:5}]},Be=[{title:"About",component:se}],ze=[Object(F.a)({},fe,{component:oe}),Object(F.a)({},me,{component:oe}),Object(F.a)({},ve,{component:oe}),Object(F.a)({},Ee,{component:oe}),Object(F.a)({},Se,{component:oe})],Ie=[Object(F.a)({},Re,{component:oe}),Object(F.a)({},Pe,{component:oe})];var Te=Object(c.a)(function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}}),We=function(){var e=Te(),t=Object(n.useState)(Be[0].title),a=Object(l.a)(t,2),o=a[0],i=a[1],c=r.a.useState(0),u=Object(l.a)(c,2),f=u[0],d=u[1],m=r.a.useState(!1),p=Object(l.a)(m,2),h=p[0],g=p[1];function b(e,t){d(t)}return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,null),r.a.createElement(O,{title:"Creative Coding playground",onMenuIconClick:function(){return g(!0)}}),r.a.createElement(v,{open:h,selected:o,headSections:Be,examples:ze,experiments:Ie,onOverlayClick:function(){return g(!1)},onSelect:function(e){d(0),i(e),g(!1)}}),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),Be.filter(function(e){return e.title===o}).map(function(e,t){var a=e.component;return r.a.createElement(a,{key:t})}),ze.filter(function(e){return e.title===o}).map(function(e,t){return r.a.createElement(A,{sketchMeta:e,value:f,handleTabChange:b,key:t})}),Ie.filter(function(e){return e.title===o}).map(function(e,t){return r.a.createElement(A,{sketchMeta:e,value:f,handleTabChange:b,key:t})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,a){e.exports=a(285)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.99b05ff3.chunk.js.map