(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(19),l=a.n(c),o=a(11),i=a(67),s=a(41),m=a(12),u=a(43),p=a(17),d=a(32),E=a.n(d),f=a(44),b=a(21),y=a(34),h=a(7),g=a(56),v=(a(91),a(93),Object(y.a)({},JSON.parse('{"firebaseConfig": {"apiKey": "AIzaSyBEJjOw7usP6HG0-SxG_H8_FN70Mbo69lI","authDomain": "portfolio-d8494.firebaseapp.com","databaseURL": "https://portfolio-d8494.firebaseio.com","projectId": "portfolio-d8494","storageBucket": "portfolio-d8494.appspot.com","messagingSenderId": "726949765901","appId": "1:726949765901:web:07230351c9595d6c678644"}}')));g.initializeApp(v.firebaseConfig);var k=g.firestore(),j=Object(u.b)({name:"app",initialState:{darkTheme:!1,aboutMe:null,experience:null,projects:null,skills:null},reducers:{switchTheme:function(e){e.darkTheme=!e.darkTheme},checkDarkTheme:function(e,t){e.darkTheme=t.payload},getAboutMe:function(e,t){e.aboutMe=t.payload},getExperience:function(e,t){e.experience=t.payload},getSkills:function(e,t){if(t.payload){var a=t.payload,n=a.key,r=a.data;e.skills=Object(y.a)(Object(y.a)({},e.skills),{},Object(b.a)({},n,r))}else e.skills=t.payload},getProjects:function(e,t){e.projects=t.payload}},extraReducers:Object(b.a)({},h.h,(function(e){return e}))}),x=j.actions,N=x.switchTheme,O=x.checkDarkTheme,w=x.getAboutMe,C=x.getExperience,S=x.getSkills,I=x.getProjects,z=j.reducer,T=function(e){return e.app.darkTheme},D=function(e){return e.app.aboutMe},F=function(e){return e.app.experience},P=function(e){return e.app.skills},M=function(e){return e.app.projects},B=Object(p.c)({app:z}),A=a(68),L=a.n(A),R=a(33),_={key:"root",storage:L.a},H=Object(R.g)(_,B),G=Object(u.a)({reducer:H,devTools:!1,middleware:Object(u.c)({serializableCheck:{ignoredActions:[R.a,R.f,R.b,R.c,R.d,R.e]}})}),J=Object(R.h)(G),U=G,V=(a(99),a(135)),K=function(e){var t=e.children,a=e.className,n=Object(V.a)().palette;return r.a.createElement("div",{className:"content-container ".concat(a),style:{backgroundColor:n.secondary.main}},t)},W=(a(100),a(140)),X=a(137),q=a(72),Q="mateusz.napieralski04@gmail.com",Y={config:{mass:5,tension:500,friction:80},opacity:1,from:{opacity:0,marginTop:1e3},marginTop:0},Z=function(){var e=Object(V.a)().palette;return r.a.createElement("div",{className:"email-wrapper-container",style:{backgroundColor:e.secondary.light}},r.a.createElement("div",{className:"email-inner-container"},r.a.createElement("p",{style:{color:e.text.primary},className:"email-value"},Q)),r.a.createElement(X.a,{onClick:function(){navigator.clipboard.writeText(Q)},variant:"contained",endIcon:r.a.createElement(q.a,{color:e.text.primary}),classes:{root:"copy-button",endIcon:"copy-label"},style:{backgroundColor:e.secondary.light}}))},$=a(15),ee=a(139),te=(a(101),function(){return r.a.createElement("div",{className:"loading-container"},r.a.createElement(ee.a,{color:"primary"}))}),ae=function(){var e=Object(o.b)(),t=Object(o.c)(D);Object(n.useLayoutEffect)((function(){e(function(){var e=Object(f.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.collection("user").doc("aboutMe").get();case 3:a=e.sent,n=a.data(),t(w(null===n||void 0===n?void 0:n.info)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(w(null));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var a=Object($.b)(Y);return Boolean(t)?r.a.createElement($.a.div,{style:a},r.a.createElement(K,null,r.a.createElement("h1",null,"About me"),r.a.createElement(K,null,r.a.createElement("div",{className:"about-me-text"},t),r.a.createElement(W.a,{variant:"middle",classes:{root:"content-divider public-divider"},component:"div"}))),r.a.createElement(K,null,r.a.createElement("h1",null,"Contact with me"),r.a.createElement(K,null,r.a.createElement("div",{className:"contact-info"},r.a.createElement("p",{className:"contact-text"},"Via mail"),r.a.createElement(Z,null))))):r.a.createElement(te,null)},ne="/portfolio",re="".concat(ne,"/skills"),ce="".concat(ne,"/experience"),le="".concat(ne,"/projects"),oe="https://firebasestorage.googleapis.com/v0/b/portfolio-d8494.appspot.com/o/ResumeMateuszNapieralski.pdf?alt=media&token=1b85bf90-3312-46f1-8734-6e6e19f3c4ae",ie=a(141),se=a(76),me=Object(se.a)({palette:{primary:{main:"#0089f2"},secondary:{light:"#f7f7f7",main:"#eee",dark:"#ededed"},text:{primary:"#2F2F2F",secondary:"#F2F2F2"}},typography:{fontFamily:"Rubik"}}),ue=Object(se.a)({palette:{primary:{main:"#0089f2"},secondary:{light:"#595959",main:"#3D3B3C",dark:"#323031"},text:{primary:"#F2F2F2",secondary:"#2F2F2F"}},typography:{fontFamily:"Rubik"}}),pe=function(e){var t=e.children,a=Object(o.c)(T)?ue:me,n=a.palette,c=n.text;return r.a.createElement(ie.a,{theme:a},r.a.createElement("div",{style:{color:c.primary,backgroundColor:n.secondary.main,minHeight:"100%"}},t))},de=a(57),Ee=(a(111),a(73)),fe=function(){var e=Object(V.a)().palette,t=Object(o.c)(F),a=Object(o.b)();Object(n.useLayoutEffect)((function(){a(function(){var e=Object(f.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.collection("experience").get();case 3:a=e.sent,n=a.docs.map((function(e){return e.data()})),t(C(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(C(null));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a]);var c={backgroundColor:e.secondary.dark,color:e.text.primary,WebkitBoxShadow:"0px 9px 41px -2px rgba(0,0,0,0.53)",MozBoxShadow:"0px 9px 41px -2px rgba(0,0,0,0.53)",boxShadow:"0px 9px 41px -2px rgba(0,0,0,0.53)"},l={backgroundColor:e.primary.main,color:"#fff",fontSize:"50px"};return t?r.a.createElement(K,null,r.a.createElement(de.VerticalTimeline,{style:{zIndex:0}},t.map((function(t){var a=t.subTitle,n=t.title,o=t.id,i=t.tools,s=t.tasks,m=t.date;return r.a.createElement(de.VerticalTimelineElement,{key:"timeline".concat(o),className:"vertical-timeline-element--work timeline-item-container",contentStyle:c,contentArrowStyle:{borderRight:"7px solid ".concat(e.primary.main)},date:m,iconStyle:l,icon:r.a.createElement(Ee.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},n),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},a),r.a.createElement("p",null,s),r.a.createElement("h3",null,"Tools: "),r.a.createElement("p",null,i))})))):r.a.createElement(te,null)},be=(a(112),function(e){var t=e.children,a=e.className,n=Object(V.a)().palette;return r.a.createElement("div",{style:{backgroundColor:n.secondary.dark},className:"card-container ".concat(a)},t)}),ye=function(e){var t=e.title,a=Object(V.a)().palette;return r.a.createElement("li",{className:"skills-point"},r.a.createElement("div",{className:"skills-bullet",style:{backgroundColor:a.primary.main}}),r.a.createElement("div",{className:"skills-point-content"},t))},he=function(e){e.children;var t=e.title,a=e.points;return r.a.createElement(be,{className:"skills-card"},r.a.createElement("h2",{className:"skills-header"},t),r.a.createElement("ul",{className:"skills-list"},a.map((function(e){return r.a.createElement(ye,{title:e,key:e})}))))},ge=(a(113),function(){var e=Object(o.c)(P),t=Object(o.b)();Object(n.useLayoutEffect)((function(){t(function(){var e=Object(f.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.collection("skills").get();case 3:e.sent.docs.forEach((function(e){var a,n=null===(a=e.data())||void 0===a?void 0:a.data;t(S({key:e.id,data:n}))})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),t(S(null));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[t]);var a=Object($.b)(Y);if(e&&e.technologies&&e.others&&e.databases&&e.ui){var c=e.technologies,l=e.others,i=e.databases,s=e.ui;return r.a.createElement($.a.div,{style:a},r.a.createElement(K,null,r.a.createElement("h1",null,"Skills"),r.a.createElement(K,{className:"skills-container"},r.a.createElement(he,{title:"Technologies:",points:c}),r.a.createElement(he,{title:"Databases:",points:i}),r.a.createElement(he,{title:"UI/UIX:",points:s}),r.a.createElement(he,{title:"Others:",points:l}))))}return r.a.createElement(te,null)}),ve=a(20),ke=a(23),je=a(31),xe=a(142),Ne=function(e){var t=e.images,a=e.currentImage,n=e.setCurrentImage,c=e.selected,l=Object(V.a)().palette,o=c?"gallery-status gallery-status-selected":"gallery-status";return r.a.createElement("div",{className:o},t.map((function(e,t){var c=t===a,o=c?l.primary.main:l.secondary.light,i=Object($.b)({scale:c?1:0}).scale.interpolate({range:[0,1],output:[1,1.35]}).interpolate((function(e){return"scale(".concat(e,")")}));return r.a.createElement($.a.div,{key:"sPtr".concat(t),onClick:function(){return n(t)},className:"gallery-status-point ".concat(c?"gallery-status-point-checked":""),style:{backgroundColor:o,transform:i}})})))},Oe=function(e){var t=e.images,a=e.selected,c=e.setSelectedProject,l=Object(n.useState)(0),o=Object(ke.a)(l,2),i=o[0],s=o[1],m=Object(V.a)().palette,u=a?"gallery-main-container gallery-main-container-selected":"gallery-main-container",p=a?"gallery-container gallery-container-selected":"gallery-container",d=a?"gallery-image-container gallery-image-container-selected":"gallery-image-container",E=a?"gallery-controller gallery-controller-selected":"gallery-controller";return r.a.createElement("div",{className:"gallery-selected"},r.a.createElement("div",{className:u},r.a.createElement("div",{className:p,style:{cursor:a?"":"pointer"},onClick:function(){c&&c()}},r.a.createElement("div",{className:"project-gallery"},t.map((function(e,t){var a=Object($.b)({x:i===t?1:0}).x.interpolate({range:[0,1],output:[0,1]});return r.a.createElement($.a.div,{key:e,className:d,style:{backgroundImage:"url(".concat(e,")"),opacity:a}})})))),r.a.createElement("div",{className:E},r.a.createElement(xe.a,{className:"gallery-button",style:{backgroundColor:m.secondary.light,justifyContent:"center",alignItems:"center"},onClick:function(){i>0&&s(i-1)},classes:{label:"switch-icon"}},r.a.createElement(je.a,{size:50,color:m.text.primary})),r.a.createElement(xe.a,{className:"gallery-button",style:{backgroundColor:m.secondary.light},onClick:function(){i+1<t.length&&s(i+1)}},r.a.createElement(je.b,{size:50,color:m.text.primary})))),r.a.createElement(Ne,{images:t,setCurrentImage:s,currentImage:i,selected:a}))},we=a(22),Ce=function(e){var t=e.renderIcon,a=e.link,n=Object(V.a)().palette;return r.a.createElement("div",{className:"project-link-container"},t({style:{color:n.text.primary},size:25}),r.a.createElement("a",{href:a,className:"project-link",style:{color:n.primary.main}},a))},Se=function(e){var t=e.project,a=e.setSelectedProject,n=t.title,c=t.description,l=t.github,o=t.store,i=t.emulator,s=t.images;return r.a.createElement(be,{className:"project-tile-card"},r.a.createElement(Oe,Object.assign({images:s},{setSelectedProject:function(){return a(t)}})),r.a.createElement("h2",{className:"project-title",onClick:function(){return a(t)}},n),r.a.createElement("div",{className:"project-description"},c),r.a.createElement("div",{className:"project-source-links"},r.a.createElement(Ce,{link:l,renderIcon:function(e){return r.a.createElement(we.e,e)}}),i&&r.a.createElement(Ce,{link:i,renderIcon:function(e){return r.a.createElement(je.c,e)}}),o&&r.a.createElement(Ce,{link:o,renderIcon:function(e){return r.a.createElement(we.f,e)}})))},Ie=(a(114),a(146)),ze=function(e){var t=e.selected,a=e.exit,n=Object($.b)({opacity:Boolean(t)?1:0,config:{duration:300}}).opacity.interpolate({range:[0,1],output:[0,1]});return r.a.createElement(Ie.a,{open:null!==t,className:"preview-modal"},r.a.createElement($.a.div,{className:"project-preview-container",style:{opacity:n}},t&&r.a.createElement(Oe,{images:t.images,selected:!0}),r.a.createElement(xe.a,{onClick:function(){return a()},classes:{root:"preview-exit"}},r.a.createElement(je.d,{color:"#fff",size:50}))))},Te=function(){var e=Object(n.useState)(null),t=Object(ke.a)(e,2),a=t[0],c=t[1],l=Object(o.b)();Object(n.useLayoutEffect)((function(){l(function(){var e=Object(f.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.collection("projects").get();case 3:a=e.sent,n=a.docs.map((function(e){return Object(y.a)({id:e.id},e.data())})),t(I(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(I(null));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[l]);var i=Object(o.c)(M);return i?r.a.createElement("div",{className:"projects-grid"},Object(ve.a)(i).map((function(e){return r.a.createElement(Se,Object.assign({key:"project".concat(e.id),project:e},{setSelectedProject:c}))})),r.a.createElement(ze,{selected:a,exit:function(){return c(null)}})):r.a.createElement(te,null)},De=function(){var e=Object($.b)(Y);return r.a.createElement($.a.div,{style:e},r.a.createElement(K,null,r.a.createElement("h1",null,"Projects"),r.a.createElement(K,null,r.a.createElement(Te,null))))},Fe=(a(115),function(){var e=Object(V.a)().palette,t=Object(m.f)();return r.a.createElement(K,null,r.a.createElement("div",{className:"nf-centered"},r.a.createElement("p",{className:"nf-title"},"404"),r.a.createElement("h1",{style:{color:e.primary.main},className:"nf-subtitle"},"Oops.. Page not found"),r.a.createElement("div",{className:"nf-nav"},r.a.createElement(X.a,{onClick:function(){t.push(ne)},className:"nf-button",startIcon:r.a.createElement(we.f,null),color:"primary",variant:"contained"},"Home"),r.a.createElement(X.a,{onClick:function(){t.goBack()},className:"nf-button",startIcon:r.a.createElement(we.c,null),color:"primary",variant:"contained"},"Previous page"))))}),Pe=function(e){var t=e.to,a=e.children,n=Object(V.a)().palette;return r.a.createElement(s.b,Object.assign({to:t},{style:{color:n.text.primary}}),a)},Me=function(){return r.a.createElement(Pe,{to:ne},r.a.createElement("div",{className:"logo-container"},r.a.createElement("div",{className:"logo-main"},"Mateusz Napieralski"),r.a.createElement("div",{className:"logo-title"},"Frontend Developer")))},Be=(a(117),a(75)),Ae=function(e){var t=e.children,a=Object(V.a)().palette;return r.a.createElement("li",{className:"menu-item",style:{color:a.text.primary}},t)},Le=a(143),Re=a(144),_e=a(147),He=function(e){var t=e.opened,a=e.anchorEl,n=Object(o.c)(T),c=Object(o.b)(),l=Object(V.a)().palette,i={color:l.text.primary};return r.a.createElement(Le.a,{open:t,placement:"bottom",anchorEl:a,disablePortal:!1,className:"theme-popper-shadow"},r.a.createElement(Re.a,{className:"theme-selector-container",style:{backgroundColor:l.secondary.dark}},r.a.createElement("div",{className:"checkbox-theme-container"},r.a.createElement(_e.a,{classes:{root:"checkbox-theme"},color:"primary",checked:n,onChange:function(){return c(O(!0))}}),r.a.createElement("p",{style:i},"Dark theme")),r.a.createElement("div",{className:"checkbox-theme-container"},r.a.createElement(_e.a,{color:"primary",classes:{root:"checkbox-theme"},checked:!n,onChange:function(){return c(O(!1))}}),r.a.createElement("p",{style:i},"Light theme"))))},Ge=function(e){var t=e.openDrawer,a=Object(V.a)().palette,c=Object(n.useState)(!1),l=Object(ke.a)(c,2),o=l[0],i=l[1],s=Object(n.useState)(null),m=Object(ke.a)(s,2),u=m[0],p=m[1];return r.a.createElement("header",{className:"menu-container",style:{backgroundColor:a.secondary.dark}},r.a.createElement("div",{className:"header-menu-icon"},r.a.createElement(xe.a,{onClick:t,className:"menu-button"},r.a.createElement(Be.a,{size:45,color:a.text.primary}))),r.a.createElement("div",{className:"header-logo-container"},r.a.createElement(Me,null)),r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu-list"},r.a.createElement(Ae,null,r.a.createElement(Pe,{to:re},"Skills")),r.a.createElement(Ae,null,r.a.createElement(Pe,{to:ce},"Experience")),r.a.createElement(Ae,null,r.a.createElement(Pe,{to:le},"Projects")),r.a.createElement(Ae,null,r.a.createElement("a",{href:oe,target:"_blank",style:{color:a.text.primary}},"My resume")),r.a.createElement(Ae,null,r.a.createElement("a",{href:"https://github.com/matiNap",style:{color:a.text.primary},target:"_blank"},"Github")),r.a.createElement(Ae,null,r.a.createElement("div",{onClick:function(e){p(e.currentTarget),i(!o)}},"Theme"),r.a.createElement(He,{opened:o,anchorEl:u})))))},Je=function(e){var t=e.children,a=e.hideDrawer,n=Object(V.a)().palette;return r.a.createElement("li",{className:"drawer-item",style:{color:n.text.primary},onClick:a},t)},Ue=(a(118),a(145)),Ve=function(e){var t=e.opened,a=e.hideDrawer,n=t?{}:{left:"-150vw"},c=Object(o.c)(T),l=Object(o.b)(),i=Object(V.a)().palette;return r.a.createElement("div",{className:"drawer-container",style:Object(y.a)({backgroundColor:i.secondary.main},n)},r.a.createElement("div",{className:"drawer-header"},r.a.createElement("div",{className:"drawer-hide-icon-container"},r.a.createElement(xe.a,{onClick:a},r.a.createElement(je.a,{size:50,color:i.text.primary})))),r.a.createElement("ul",{className:"drawer-list"},r.a.createElement(Je,{hideDrawer:a},r.a.createElement(we.b,{className:"drawer-icon",size:32,color:i.text.primary}),r.a.createElement(Pe,{to:re},"Skills")),r.a.createElement(Je,{hideDrawer:a},r.a.createElement(we.a,{className:"drawer-icon",size:32,color:i.text.primary}),r.a.createElement(Pe,{to:ce},"Experience")),r.a.createElement(Je,{hideDrawer:a},r.a.createElement(we.g,{className:"drawer-icon",size:32,color:i.text.primary}),r.a.createElement(Pe,{to:le},"Projects")),r.a.createElement(Je,{hideDrawer:a},r.a.createElement(we.d,{className:"drawer-icon",size:32,color:i.text.primary}),r.a.createElement("a",{href:oe,target:"_blank",style:{color:i.text.primary}},"My resume")),r.a.createElement(Je,{hideDrawer:a},r.a.createElement(we.e,{className:"drawer-icon",size:32,color:i.text.primary}),r.a.createElement("a",{href:"https://github.com/matiNap",style:{color:i.text.primary}},"Github")),r.a.createElement(Je,{hideDrawer:a},r.a.createElement(we.h,{className:"drawer-icon",size:32,color:i.text.primary}),"Dark theme",r.a.createElement(Ue.a,{value:c,name:"switchTheme",color:"primary",onChange:function(e,t){l(N())}}))))},Ke=function(){var e=Object(n.useState)(!1),t=Object(ke.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(Ge,{openDrawer:function(){return c(!0)}}),r.a.createElement(Ve,{hideDrawer:function(){return c(!1)},opened:a}))},We=function(e){return function(t){return r.a.createElement("div",{style:{height:"90vh"}},r.a.createElement(Ke,null),r.a.createElement(e,t))}},Xe=(a(119),function(){var e=ue.palette;return r.a.createElement("footer",{className:"footer-container",style:{backgroundColor:e.secondary.main}},r.a.createElement(we.e,{className:"drawer-icon",size:22,color:e.text.primary}),r.a.createElement("a",{href:"https://github.com/matiNap/portfolio",target:"_blank",className:"footer-link",style:{color:e.text.primary}},"Portfolio source"))}),qe=function(e){return function(t){return r.a.createElement("div",{style:{minHeight:"90vh",display:"flex",flexDirection:"column",marginTop:"10vh"}},r.a.createElement(e,t),r.a.createElement(Xe,null))}},Qe=function(){return r.a.createElement(o.a,{store:U},r.a.createElement(i.a,{loading:null,persistor:J},r.a.createElement(pe,null,r.a.createElement(s.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:ne,component:We(qe(ae))}),r.a.createElement(m.a,{exact:!0,path:re,component:We(qe(ge))}),r.a.createElement(m.a,{exact:!0,path:ce,component:We(qe(fe))}),r.a.createElement(m.a,{exact:!0,path:le,component:We(qe(De))}),r.a.createElement(m.a,{component:Fe}))))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Qe,null)),document.getElementById("root"))},81:function(e,t,a){e.exports=a(120)},99:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.ff47c838.chunk.js.map