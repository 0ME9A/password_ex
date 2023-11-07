"use strict";(self.webpackChunkpassword=self.webpackChunkpassword||[]).push([[736],{8593:function(e,t,n){n.r(t);var r=n(4668),s=n(3400),o=n(184);t.default=function(){var e="https://twitter.com/intent/tweet?url=".concat(encodeURIComponent("https://password.ome9a.com"),"&text=").concat(encodeURIComponent("Check out this awesome password generator website!"));return(0,o.jsx)(s.Z,{title:"Share on twitter",onClick:function(){return window.open(e,"_blank")},children:(0,o.jsx)(r.Z,{})})}},6736:function(e,t,n){n.r(t),n.d(t,{default:function(){return me}});var r=n(3967),s=n(9164),o=n(5527),i=n(3400),a=n(8236),l=n(9434),c="history",d="settings",u=n(2791),x=n(4165),p=n(5861),h=n(1413),m=n(885),f=n(6934),g=n(9768),b=n(5193),j=n(6314),Z=n(4294),v=n(5523),w=n(4454),y=n(320),k=n(8096),S=n(7133),C=n(765),I=n(1419),P=n(6215),R=n(5594),W=n(1972),z=function(e){var t="#FF0000",n=0;[/[A-Z]/,/[a-z]/,/[0-9]/,/[^A-Za-z0-9]/].forEach((function(t){t.test(e)&&n++}));var r={message:"",color:"",level:n},s=e.length;return s<3&&(r.message="Very Weak",r.color=t),1===n&&s<=4?(r.message="Very Weak",r.color=t):1===n&&s<=8||2===n&&s<=4?(r.message="Weak",r.color="#F94C10"):1===n&&s<=12||2===n&&s<=6||3===n&&s<=4?(r.message="Moderate",r.color="#FED049"):1===n&&s<=16||2===n&&s<=10||3===n&&s<=8||4===n&&s<=6?(r.message="Strong",r.color="#82CD47"):(1===n&&s>16||2===n&&s>10||3===n&&s>8||4===n&&s>6)&&(r.message="Very Strong",r.color="#379237"),r},A=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ",n="abcdefghijklmnopqrstuvwxyz",r="!@#$%^&*()_+-=[]{}|;:,.<>?",s="0123456789",o="",i="";if(!e.upper&&!e.lower&&!e.symbol&&!e.number&&e.salt.length>0)return{password:e.salt,strength:z(e.salt)};if(!e.upper&&!e.lower&&!e.symbol&&!e.number&&0===e.salt.length)return{password:"",strength:{message:"No character types selected and no salt provided.",color:"",level:0}};e.upper&&(i+=t),e.lower&&(i+=n),e.symbol&&(i+=r),e.number&&(i+=s);for(var a=Array.isArray(e.length)?e.length[0]:e.length,l=0;l<a;l++)o+=i[Math.floor(Math.random()*i.length)];switch(e.saltAt){case"s":o=e.salt+o;break;case"e":o+=e.salt;break;case"b":var c=Math.floor(o.length/2);o=o.substring(0,c)+e.salt+o.substring(c)}return{password:o,strength:z(o)}};function D(){return(D=(0,p.Z)((0,x.Z)().mark((function e(t){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t);case 3:return console.info("Copying to clipboard was successful!"),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Could not copy text: ",e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var F=function(e){return D.apply(this,arguments)},M=n(807),L=n(890),T=n(5584),N=n(4554),E=n(184),B=(0,f.ZP)(g.ZP)({height:8,"& .MuiSlider-track":{border:"none"},"& .MuiSlider-thumb":{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor","&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":{boxShadow:"inherit"},"&:before":{display:"none"}},"& .MuiSlider-valueLabel":{lineHeight:1.2,fontSize:12,background:"unset",padding:0,width:32,height:32,borderRadius:"50% 50% 50% 0",transformOrigin:"bottom left",transform:"translate(50%, -100%) rotate(-45deg) scale(0)","&:before":{display:"none"},"&.MuiSlider-valueLabelOpen":{transform:"translate(50%, -100%) rotate(-45deg) scale(1)"},"& > *":{transform:"rotate(45deg)"}}});var H=function(){var e,t,n,s,a=(0,r.Z)(),c=(0,l.I0)(),d=(0,l.v9)((function(e){return e})),f=d.history,g=d.activeWindow,z=d.settingProps.salt,D=(0,u.useState)({upper:!0,lower:!0,symbol:!0,number:!0,length:8,salt:"",saltAt:"e"}),H=(0,m.Z)(D,2),V=H[0],U=H[1],G=(0,u.useState)(!1),O=(0,m.Z)(G,2),Y=O[0],_=O[1],$=(0,b.Z)(a.breakpoints.down("sm")),q=a.palette.mode,J=a.palette,K="0px 3px 15px ".concat("dark"===q?"rgb(150, 150, 150, .1)":"rgb(150, 150, 150, .2)"),Q=function(){var e=(0,p.Z)((0,x.Z)().mark((function e(){var t;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=_,e.next=3,F(null===(t=f[0])||void 0===t?void 0:t.password);case 3:e.t1=e.sent,(0,e.t0)(e.t1),setTimeout((function(){_(!1)}),5e3);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(o.Z,{elevation:0,sx:{borderRadius:4,backgroundColor:J.background.paper,height:"100%",width:"100%",position:"relative",transition:".3s",zIndex:g.tab?0:5,animationDuration:g.timer||0},className:"".concat(!g.tab&&"windowSlideStartLeft"," ").concat(g.timer&&"windowSlideEndLeft"," "),children:(0,E.jsxs)(j.Z,{spacing:1,sx:{p:1},children:[(0,E.jsxs)(N.Z,{sx:{p:1,borderRadius:2,background:"transparent",border:2,display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:K},children:[(0,E.jsx)(L.Z,{variant:"body1",sx:{fontSize:"1rem",fontWeight:"bold"},children:null===(e=f[0])||void 0===e?void 0:e.password}),(0,E.jsx)(i.Z,{onClick:Q,title:"".concat(Y?"Copied":"Copy"),sx:{p:".5",m:0,minWidth:"0",borderRadius:2,color:"".concat(Y?"green":""),display:"flex",alignItems:"center"},children:(0,E.jsx)(R.Z,{})})]}),(0,E.jsxs)(L.Z,{variant:"body2",px:1,color:null===(t=f[0])||void 0===t?void 0:t.strength.color,sx:{display:"flex",alignItems:"center",gap:1},children:[(null===(n=f[0])||void 0===n?void 0:n.strength.message)&&(0,E.jsx)(T.Z,{}),null===(s=f[0])||void 0===s?void 0:s.strength.message]}),(0,E.jsxs)(N.Z,{sx:{p:2,borderRadius:2,boxShadow:K},children:[(0,E.jsxs)(N.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,E.jsxs)(L.Z,{variant:"h3",sx:{display:"flex",alignItems:"center",gap:1,fontSize:"1rem"},children:["Password length",(0,E.jsx)("span",{style:{display:"inline-block",height:"1.5rem",border:"1px solid rgb(150, 150, 150, .2)"}}),V.length]}),(0,E.jsxs)(Z.Z,{variant:"contained",onClick:function(){U((function(e){return(0,h.Z)((0,h.Z)({},e),{},{upper:!0,lower:!0,symbol:!0,number:!0,length:8,salt:"",saltAt:"e"})})),_(!1)},title:"Reset",sx:{gap:1,borderRadius:2,minWidth:0,p:$?.5:"auto",fontWeight:"bold"},children:[!$&&"Reset",(0,E.jsx)(W.Z,{})]})]}),(0,E.jsx)(B,{valueLabelDisplay:"auto","aria-label":"password length",value:V.length,min:1,max:32,sx:{pt:3,".MuiSlider-valueLabel":{backgroundColor:J.primary.main}},onChange:function(e,t){return U((function(e){return(0,h.Z)((0,h.Z)({},e),{},{length:t})}))}})]}),(0,E.jsx)(v.Z,{control:(0,E.jsx)(w.Z,{}),label:"Uppercase (A-Z)",labelPlacement:"start",checked:V.upper,onChange:function(){return U((function(e){return(0,h.Z)((0,h.Z)({},e),{},{upper:!e.upper})}))},sx:{display:"flex",justifyContent:"space-between",pl:1,borderRadius:2,boxShadow:K}}),(0,E.jsx)(v.Z,{control:(0,E.jsx)(w.Z,{}),label:"Lowercase (a-z)",labelPlacement:"start",checked:V.lower,onChange:function(){return U((function(e){return(0,h.Z)((0,h.Z)({},e),{},{lower:!e.lower})}))},sx:{display:"flex",justifyContent:"space-between",pl:1,borderRadius:2,boxShadow:K}}),(0,E.jsx)(v.Z,{control:(0,E.jsx)(w.Z,{}),label:"Symbols (!@#$)",labelPlacement:"start",checked:V.symbol,onChange:function(){return U((function(e){return(0,h.Z)((0,h.Z)({},e),{},{symbol:!e.symbol})}))},sx:{display:"flex",justifyContent:"space-between",pl:1,borderRadius:2,boxShadow:K}}),(0,E.jsx)(v.Z,{control:(0,E.jsx)(w.Z,{}),label:"Numbers (0-9)",labelPlacement:"start",checked:V.number,onChange:function(){return U((function(e){return(0,h.Z)((0,h.Z)({},e),{},{number:!e.number})}))},sx:{display:"flex",justifyContent:"space-between",pl:1,borderRadius:2,boxShadow:K}}),z&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(N.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:1},children:(0,E.jsx)(L.Z,{variant:"body1",fontWeight:"bold",children:"Advance Settings"})}),(0,E.jsxs)(N.Z,{sx:{borderRadius:2,p:1},children:[(0,E.jsx)(y.Z,{id:"outlined-basic",label:"Add Salt",variant:"outlined",value:V.salt,fullWidth:!0,onChange:function(e){return U((function(t){return(0,h.Z)((0,h.Z)({},t),{},{salt:e.target.value})}))},sx:{fieldset:{borderRadius:2}}}),(0,E.jsxs)(k.Z,{sx:{p:1,pt:2},children:[(0,E.jsx)(S.Z,{id:"demo-row-radio-buttons-group-label",children:"Position"}),(0,E.jsxs)(C.Z,{row:!0,value:V.saltAt,onChange:function(e){return U((function(t){return(0,h.Z)((0,h.Z)({},t),{},{saltAt:e.target.value})}))},"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,E.jsx)(v.Z,{value:"s",control:(0,E.jsx)(I.Z,{}),label:"Start"}),(0,E.jsx)(v.Z,{value:"b",control:(0,E.jsx)(I.Z,{}),label:"Between"}),(0,E.jsx)(v.Z,{value:"e",control:(0,E.jsx)(I.Z,{}),label:"End"})]})]})]})]}),(0,E.jsx)("hr",{style:{opacity:".1"}}),(0,E.jsx)(Z.Z,{variant:"contained",endIcon:(0,E.jsx)(M.Z,{}),onClick:function(){var e=new Date,t=A(V);c((0,P.Ve)((0,h.Z)((0,h.Z)({},t),{},{time:e.toISOString()}))),_(!1)},sx:{borderRadius:2,fontWeight:"bold",py:1},children:"Generate Password"})]})})})},V=n(7122),U=n(1981),G=n(493),O=n(4852),Y=n(6259),_=n(7111),$=n(5967),q=n(1507),J=n(6e3);var K=function(){var e=(0,l.I0)(),t=(0,r.Z)(),n=(0,l.v9)((function(e){return e})).themeMode.mode;return(0,E.jsx)(i.Z,{sx:{ml:1},title:"".concat("dark"===t.palette.mode?"Dark mode":"Light mode"),onClick:function(){e((0,$.q)(n))},color:"inherit",children:"dark"===t.palette.mode?(0,E.jsx)(J.Z,{}):(0,E.jsx)(q.Z,{})})},Q=n(2156),X=function(e){var t=e.dispatch,n=e.timer,r=void 0===n?300:n;t((0,a.P)({timer:r})),setTimeout((function(){t((0,a.P)({tab:"",timer:0}))}),r)};var ee=function(e){e.page;var t=(0,l.I0)();return(0,E.jsx)(i.Z,{title:"Back",onClick:function(){X({dispatch:t})},children:(0,E.jsx)(Q.Z,{})})},te=n(9877),ne=n(719),re=[{name:"Twitter",url:"https://twitter.com/@baliramStrikes",icon:(0,E.jsx)(ne.dLF,{})},{name:"GitHub",url:"https://github.com/0ME9A",icon:(0,E.jsx)(ne.ZR,{})},{name:"LinkedIn",url:"https://linkedin.com/in/baliram-singh",icon:(0,E.jsx)(ne.YZm,{})},{name:"Figma",url:"https://figma.com/@ome9a",icon:(0,E.jsx)(ne.wV9,{})},{name:"Portfolio",url:"https://ome9a.com",icon:(0,E.jsx)(ne.ZKx,{})}];var se=function(){var e=(0,r.Z)().palette;return(0,E.jsxs)(N.Z,{children:[(0,E.jsx)(L.Z,{variant:"h3",sx:{fontSize:"1rem",fontWeight:"bold",p:2,pt:1},children:"Follow us"}),(0,E.jsx)(G.Z,{sx:{display:"flex",gap:1,px:2},children:re.map((function(t,n){return(0,E.jsx)(O.ZP,{sx:{width:"fit-content",p:0},children:(0,E.jsx)(te.Z,{size:"small",title:t.name,sx:{bgcolor:e.background.paper,":hover":{backgroundColor:e.background.default},boxShadow:0},children:(0,E.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.url,style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.6rem",color:e.text.primary},children:t.icon})})},n)}))})]})},oe=n(2093),ie=function(){return(0,E.jsx)(i.Z,{title:"Share on facebook",onClick:function(){var e="https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent("https://password.ome9a.com"));window.open(e,"_blank")},children:(0,E.jsx)(oe.Z,{})})},ae=n(8593),le=function(){var e=(0,u.useState)(!1),t=(0,m.Z)(e,2),n=t[0],r=t[1],s=function(){var e=(0,p.Z)((0,x.Z)().mark((function e(){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("https://password.ome9a.com");case 2:r(!0),setTimeout((function(){r(!1)}),5e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,E.jsx)(i.Z,{title:"Copy Url",onClick:s,children:(0,E.jsx)(ne.Wlb,{style:{color:n?"green":""}})})},ce=[(0,E.jsx)(ae.default,{}),(0,E.jsx)(ie,{}),(0,E.jsx)(le,{})];var de=function(){return(0,E.jsxs)(N.Z,{children:[(0,E.jsx)(L.Z,{variant:"h3",sx:{fontSize:"1rem",fontWeight:"bold",p:1,px:2},children:"Share"}),(0,E.jsx)(G.Z,{sx:{display:"flex",px:2},children:ce.map((function(e,t){return(0,E.jsx)(O.ZP,{sx:{width:"fit-content",p:0},children:e},t)}))})]})};var ue=function(){var e=(0,r.Z)(),t=(0,l.I0)(),n=(0,l.v9)((function(e){return e})),s=n.historyProps.bookmark,i=n.activeWindow,a=n.settingProps.salt,c=e.palette;return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(o.Z,{elevation:0,sx:{borderRadius:4,backgroundColor:c.background.paper,position:"relative",top:0,width:"100%",display:"flex",flexDirection:"column",transition:".3s",zIndex:i.tab===d?5:0,animationDuration:i.timer||0},className:"".concat(i.tab===d&&"windowSlideStartRight"," ").concat(i.timer&&"windowSlideEndRight"," "),children:[(0,E.jsx)(N.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:1},children:(0,E.jsxs)(N.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,E.jsx)(ee,{}),(0,E.jsx)(L.Z,{variant:"h2",sx:{fontSize:"1rem",fontWeight:"bold",pl:1},children:"Settings"})]})}),(0,E.jsx)("hr",{style:{opacity:.1}}),(0,E.jsx)(N.Z,{sx:{overflowY:"auto",height:"100%"},children:(0,E.jsxs)(N.Z,{children:[(0,E.jsxs)(G.Z,{sx:{width:"100%"},children:[(0,E.jsxs)(O.ZP,{alignItems:"flex-start",children:[(0,E.jsx)(Y.Z,{primary:"Theme",secondary:(0,E.jsxs)(u.Fragment,{children:[(0,E.jsx)(L.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:"Dark Mode"})," \u2014 Toggle to activate dark and light mode\u2026"]})}),(0,E.jsx)(K,{})]}),(0,E.jsxs)(O.ZP,{alignItems:"flex-start",sx:{borderBottom:1,borderColor:"rgb(150, 150, 150, .3)"},children:[(0,E.jsx)(Y.Z,{primary:"History",secondary:(0,E.jsxs)(u.Fragment,{children:[(0,E.jsx)(L.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:"Password history"})," \u2014 Bookmark history button on the header..."]})}),(0,E.jsx)(w.Z,{checked:s,onChange:function(){return t((0,P.$S)(!s))},inputProps:{"aria-label":"controlled"}})]}),(0,E.jsx)(O.ZP,{children:(0,E.jsx)(L.Z,{variant:"h3",sx:{fontWeight:"bold",mt:1,fontSize:"1rem"},children:"Advance Settings"})}),(0,E.jsxs)(O.ZP,{alignItems:"flex-start",children:[(0,E.jsx)(Y.Z,{primary:"Salt",secondary:(0,E.jsxs)(u.Fragment,{children:[(0,E.jsx)(L.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:"Salt string"})," \u2014 A custom string added to the password before hashing for enhanced security..."]})}),(0,E.jsx)(w.Z,{checked:a,onChange:function(){return t((0,_.do)(!a))},inputProps:{"aria-label":"controlled"}})]})]}),(0,E.jsx)(de,{}),(0,E.jsx)(se,{})]})})]})})},xe=n(2982),pe=n(7247);var he=function(e){var t=e.page,n=void 0!==t&&t,s=(0,r.Z)(),a=(0,l.I0)(),d=(0,b.Z)(s.breakpoints.down("sm")),h=(0,u.useState)([]),f=(0,m.Z)(h,2),g=f[0],j=f[1],v=(0,l.v9)((function(e){return e})),y=v.history,k=v.activeWindow,S=(0,u.useState)({id:"",password:""}),C=(0,m.Z)(S,2),I=C[0],W=C[1],z=s.palette,A=function(){var e=(0,p.Z)((0,x.Z)().mark((function e(t){var n,r;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.password,e.next=3,F(r);case 3:W({id:n,password:r}),setTimeout((function(){W({id:"",password:""})}),5e3);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(o.Z,{elevation:0,sx:{borderRadius:4,backgroundColor:z.background.paper,position:"relative",top:0,width:"100%",transition:".3s",height:n?"auto":"500px",zIndex:k.tab===c?5:0,display:"flex",flexDirection:"column",overflow:"hidden",animationDuration:k.timer||0},className:"".concat(k.tab===c&&!n&&"windowSlideStartRight"," ").concat(k.timer&&!n&&"windowSlideEndRight"," "),children:[(0,E.jsxs)(N.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:1},children:[(0,E.jsxs)(N.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,E.jsx)(ee,{page:n}),(0,E.jsxs)(L.Z,{variant:"h2",sx:{display:"flex",alignItems:"center",gap:1,fontSize:"1rem",fontWeight:"bold"},children:["History",(0,E.jsx)("span",{className:"verticalDivider"}),g.length," / ",y.length]})]}),(0,E.jsx)(N.Z,{sx:{},children:(0,E.jsxs)(Z.Z,{variant:"contained",onClick:function(){return a((0,P.Jo)(g))},title:"Delete history",sx:{gap:1,borderRadius:2,minWidth:0,bgcolor:"red",p:d?.5:"auto",fontWeight:"bold",":hover":{bgcolor:"rgb(140, 0, 0)"}},children:[!d&&"Delete",(0,E.jsx)(pe.Z,{})]})})]}),(0,E.jsx)("hr",{}),y.length>0&&(0,E.jsxs)(N.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:1,px:2},children:[(0,E.jsx)("div",{}),(0,E.jsxs)(N.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,E.jsx)(L.Z,{variant:"h3",sx:{display:"flex",alignItems:"center",gap:1,fontSize:".9rem",px:1},children:"Select All"}),(0,E.jsx)(w.Z,{checked:g.length===y.length,onChange:function(){var e=y.map((function(e){return e.time}));y.length!==g.length?j(e):j([])},inputProps:{"aria-label":"controlled"}})]})]}),(0,E.jsx)("hr",{}),0===(null===y||void 0===y?void 0:y.length)?(0,E.jsx)(L.Z,{sx:{p:2,textAlign:"center"},children:"No record found."}):(0,E.jsx)(G.Z,{dense:!0,sx:{width:"100%",overflowY:"auto"},children:y.map((function(e,t){var n=new Date(e.time);return e.password.length>0&&(0,E.jsxs)(O.ZP,{alignItems:"center",sx:{borderBottom:.5,borderColor:"rgb(150, 150, 150, .1)"},children:[(0,E.jsx)(Y.Z,{primary:(0,E.jsx)("span",{style:{fontWeight:"bold",paddingBottom:".5rem",fontSize:"1rem"},children:e.password}),sx:{fontSize:"1rem",fontWeight:"bold"},secondary:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(L.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",fontSize:"0.8rem",children:"Password strength \u2014  "}),(0,E.jsx)("span",{style:{display:"inline",color:e.strength.color},children:e.strength.message}),(0,E.jsxs)("span",{style:{opacity:.7,display:"block"},children:["Time:- ",n.toLocaleTimeString()]})]})}),(0,E.jsxs)(N.Z,{sx:{display:"flex",gap:2,alignItems:"center"},children:[(0,E.jsx)(i.Z,{onClick:function(){return A({id:e.time,password:e.password})},title:"".concat(I.id===e.time?"Copied":"Copy"),sx:{p:".5",m:0,minWidth:"0",borderRadius:2,color:"".concat(I.id===e.time?"green":""),display:"flex",alignItems:"center"},children:(0,E.jsx)(R.Z,{})}),(0,E.jsx)("span",{className:"verticalDivider"}),(0,E.jsx)(w.Z,{checked:g.includes(e.time),onChange:function(){return function(e){if(g.includes(e)){var t=g.filter((function(t){return t!==e}));j(t)}else j((function(t){return[].concat((0,xe.Z)(t),[e])}))}(e.time)},inputProps:{"aria-label":"controlled"}})]})]},t)}))})]})})};var me=function(){var e=(0,r.Z)(),t=(0,l.I0)(),n=(0,l.v9)((function(e){return e})),x=n.historyProps.bookmark,p=n.activeWindow,h=e.palette;return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(s.Z,{maxWidth:"sm",sx:{p:1},children:(0,E.jsxs)(o.Z,{elevation:0,sx:{background:h.background.default,opacity:1},children:[(0,E.jsxs)(N.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:1},children:[(0,E.jsxs)(N.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1},children:[(0,E.jsx)("img",{src:"/logo32.png",alt:"brand logo",width:24}),(0,E.jsx)(L.Z,{variant:"h1",sx:{fontSize:"1rem",fontWeight:"bold",textAlign:"center"},children:"Password Generator"})]}),(0,E.jsx)(u.Suspense,{children:(0,E.jsxs)(N.Z,{children:[x&&(0,E.jsx)(i.Z,{title:"History",onClick:function(){return t((0,a.P)({tab:c}))},children:(0,E.jsx)(U.Z,{})}),(0,E.jsx)(i.Z,{title:"Settings",onClick:function(){return t((0,a.P)({tab:d}))},children:(0,E.jsx)(V.Z,{})})]})})]}),(0,E.jsxs)(N.Z,{sx:{minHeight:"400px",overflow:"hidden",position:"relative"},children:[!p.tab&&(0,E.jsx)(H,{}),p.tab===c&&(0,E.jsx)(he,{}),p.tab===d&&(0,E.jsx)(ue,{})]})]})})})}}}]);
//# sourceMappingURL=736.5fd5ca0a.chunk.js.map