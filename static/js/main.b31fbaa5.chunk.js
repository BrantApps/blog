(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{108:function(e,t,a){e.exports=a(156)},138:function(e,t){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(25),i=a.n(r),s=a(192),l=a(193),c=a(183),d=a(194),u=a(182),m=a(157),p=a(181);function h(){return o.a.createElement(m.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(p.a,{color:"inherit",href:"https://brant.app"},"brant.apps")," ",(new Date).getFullYear(),".")}var g=Object(u.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6,0)}}}));function f(e){var t=g(),a=e.description,n=e.title;return o.a.createElement("footer",{className:t.footer},o.a.createElement(c.a,{maxWidth:"lg"},o.a.createElement(m.a,{variant:"h6",align:"center",gutterBottom:!0},n),o.a.createElement(m.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},a),o.a.createElement(h,null)))}var y=a(24);function b(e){return o.a.createElement(y.c,null,e.routes.map((function(e){return o.a.createElement(y.a,{path:e.path,exact:!0,component:e.component,key:e.path})})))}var v=a(61),w=a(26),E=a(184),k=a(159),A=a(195),I=a(185);var D=Object(u.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarLink:{padding:e.spacing(1),flexShrink:0}}}));function T(e){var t=D(),a=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),o=Object(w.a)(a,2),r=o[0],i=o[1];return[r,function(t){try{var a=t instanceof Function?t(r):t;i(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("selectedTab",0),r=Object(w.a)(a,2),i=r[0],s=r[1],l=e.sections,c=e.title;return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{className:t.toolbar},o.a.createElement(m.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:t.toolbarTitle},c)),o.a.createElement(k.a,{style:{marginBottom:16},elevation:0},o.a.createElement(A.a,{value:i,onChange:function(e,t){return s(t)},indicatorColor:"primary",textColor:"primary",centered:!0},l.map((function(e,t){return o.a.createElement(I.a,{autoCapitalize:"off",label:e.title,href:"".concat("/blog").concat(e.path),key:e.title,value:t})})))))}var O=a(186),S=a(91),B=a.n(S),x=a(92),U=a.n(x),j=a(93),C=a.n(j),P=a(31),N=Object(u.a)((function(e){return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(P.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})}}));function _(e){var t=N(),a=e.post;return o.a.createElement(k.a,{className:t.mainFeaturedPost,style:{backgroundImage:"url(".concat(a.image,")")}},o.a.createElement("img",{style:{display:"none"},src:a.image,alt:a.imageText}),o.a.createElement("div",{className:t.overlay}),o.a.createElement(O.a,{container:!0},o.a.createElement(O.a,{item:!0,md:6},o.a.createElement("div",{className:t.mainFeaturedPostContent},o.a.createElement(m.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},a.title),o.a.createElement(m.a,{variant:"h5",color:"inherit",paragraph:!0},a.description),o.a.createElement(p.a,{variant:"subtitle1",href:"#"},'"Continue reading\u2026"')))))}var M=a(188),L=a(187),K=a(189),Q=a(190),z=a(196),G=Object(u.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function R(e){var t=G(),a=e.post;return o.a.createElement(O.a,{item:!0,xs:12,md:6},o.a.createElement(L.a,{component:"a",href:"#"},o.a.createElement(M.a,{className:t.card},o.a.createElement("div",{className:t.cardDetails},o.a.createElement(K.a,null,o.a.createElement(m.a,{component:"h2",variant:"h5"},a.title),o.a.createElement(m.a,{variant:"subtitle1",color:"textSecondary"},a.date),o.a.createElement(m.a,{variant:"subtitle1",paragraph:!0},a.description),o.a.createElement(m.a,{variant:"subtitle1",color:"primary"},"Continue reading..."))),o.a.createElement(z.a,{xsDown:!0},o.a.createElement(Q.a,{className:t.cardMedia,image:a.image,title:a.imageText})))))}var W=a(27),Y=a(191),F=a(89),J=a(6),q={overrides:{h1:{component:m.a,props:{gutterBottom:!0,variant:"h5"}},h2:{component:m.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:m.a,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:m.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0}},p:{component:m.a,props:{paragraph:!0}},a:{component:p.a},li:{component:Object(J.a)((function(e){return{}}))((function(e){var t=Object.assign({},e);return o.a.createElement("li",null,o.a.createElement(m.a,Object.assign({component:"span"},t)))}))}}};function V(e){return o.a.createElement(F.a,Object.assign({options:q},e))}var H=Object(u.a)((function(e){return{markdown:Object(W.a)({},e.typography.body2,{padding:e.spacing(3,0)})}}));function X(e){var t=H(),a=e.posts,n=e.title;return o.a.createElement(O.a,{item:!0,xs:12,md:8},o.a.createElement(m.a,{variant:"h6",gutterBottom:!0},n),o.a.createElement(Y.a,null),a.map((function(e){return o.a.createElement(V,{className:t.markdown,key:e.substring(0,40)},e)})))}var Z=Object(u.a)((function(e){return{sidebarAboutBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:e.spacing(3)}}}));function $(e){var t=Z(),a=e.archives,n=e.description,r=e.social,i=e.title;return o.a.createElement(O.a,{item:!0,xs:12,md:4},o.a.createElement(k.a,{elevation:0,className:t.sidebarAboutBox},o.a.createElement(m.a,{variant:"h6",gutterBottom:!0},i),o.a.createElement(m.a,null,n)),o.a.createElement(m.a,{variant:"h6",gutterBottom:!0,className:t.sidebarSection},"Social"),r.map((function(e){return o.a.createElement(p.a,{display:"block",variant:"body1",href:e.url,key:e.url},o.a.createElement(O.a,{container:!0,direction:"row",spacing:1,alignItems:"center"},o.a.createElement(O.a,{item:!0},o.a.createElement(e.icon,null)),o.a.createElement(O.a,{item:!0},e.name)))})),o.a.createElement(m.a,{variant:"h6",gutterBottom:!0,className:t.sidebarSection},"Archives"),a.map((function(e){return o.a.createElement(p.a,{display:"block",variant:"body1",href:e.url,key:e.year},e.year)})))}var ee=Object(u.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}})),te={title:"OceanLife, a love letter \ud83d\udc9a",date:"October 2011",description:"Read this multi-part entry on how one of my side projects ended up reaching 10 years old & changing my life...",image:"https://source.unsplash.com/random",imageText:"OceanLife"},ae=[{title:"Getting your users to upgrade",date:"December 2019",description:"Learn how we went about asking, then forcing users to upgrade their apps at Candide...",image:"https://source.unsplash.com/random",imageText:"'Encarter Encyclopedia' CD-ROMs"},{title:"Visualising your Slack workspace",date:"June, 2019",description:"Struggling to find information in Slack & want to change 'things'. If so, then click right this way...",image:"https://source.unsplash.com/random",imageText:"Bubble chart"}],ne=["# Passed QA\n\n#### April 4, 2018, Just Eat, Technology Manager\n\nI just left a retrospective where I wanted to gather the team\u2019s thoughts on what we meant when we said an enhancement \u201cPassed QA\u201d or we pushed the _Ready for Release_ button in a well-known issue tracking system. It\u2019s a little rough and ready (I literally just wrote it on the train home) and Android-centric but perhaps a fun read for other engineers/assurance professionals working with mobile. Enjoy\u2026\n\nWithin any process where _things_ are made there is Quality Assurance (QA). This section aims to call out the responsibilities of the engineer/assurance-interested-party in ensuring that their changes undergo the right amount of rigour before being let loose on the wider population.\n\n## What \u2018QA\u2019 does not mean\n\nAs if it needs calling out, QA does not mean the \u2018manual testing person\u2019 who sometimes appears at your desk, looking smug and saying \u201cI broke it\u201d. Manual testing is a facet to quality assurance but it need not require a dedicated employee called a Manual Tester. The person sitting next to you, your partner, your product owner are all great people to give a script to and say, \u201cdo something like this\u201d, or in our case \u201corder a pizza\u201d etc.\n\n## Do something like what?\n\nTo be in a position to pass the assurance step of any process you need to know what acceptable looks like. In software, this is usually distilled into the \u201cAcceptance Criteria\u201d of a task. If your ticket doesn\u2019t have one of these and it\u2019s causing a functional change to the system under test\u200a\u2014\u200astop. Do not pass go. Do not collect \xa3200.\n\nI\u2019m willing to bet money your enhancement is not \u201cReady\u201d to be worked on. Liaise with your team using techniques such as the 3 amigos method to define acceptance for your work. If your ticket is technical and would result in a contrived acceptance, then define the scenarios that your unit tests need to be exercised under. The 3 amigos technique can still be useful here since the (hopefully) varied background of your fellow team members will allow you to perform impact assessments more objectively.\n\n> The lesson here is don\u2019t start work that isn\u2019t defined because you can\u2019t know whether you can finish it.\n\n## Android\n\nOh, Android, _how we love thee_. When exercising code on the Android OS and it\u2019s myriad of form factors there are a series of techniques/tricks/tips you can deploy to ensure that your enhancement isn\u2019t a one-hit-wonder of _Happy Path_ + _Ultra-fast Broadband_ + _Flagship Phone_. The proportion of people on these kind of devices is pretty high in some cohorts which gives us all that warm fuzzy feeling. However, if you\u2019re an Aussie, rocking your Vodafone own-brand entry-level phone stuck on Kit Kat why should our app not work perfectly? Many Android engineers feel a deep sense responsibility to facilitate backward compatibility and (more specifically) not force users into dropping a grand on a phone to order a takeaway. After all, our app is very basic from a hardware demand standpoint and there is very little reason why our app could not support \u2018The Next Billion\u2019 via Android Go. (different point, I digress)\n\n## The Checklist\n\n1. Turn on \u201cDon\u2019t Keep Activities\u201d, background the app, navigate around the app and have a bit of an explore around your change. This developer setting forces the app state to be serialized and the activity state to be lost respectively. If your activity state is restored to an unusable level (having to re-enter data/crashes) then you did it wrong. You did not pass QA.\n2. Run it on our lowest of supported API levels\u200a\u2014\u200aAPI 16 is the lowest at the time of writing. Run the app on lower level APIs especially if you\u2019ve been fiddling with vectors or using the snazzy `drawableLeft`-type namespaces. _Spoiler: it will crash_. If the views don't render right, provide a good 'ol PNG fallback and move on with your lives. Don't waste time reengineering another SVG standard, instead, gracefully degrade. If your enhancement does not _gracefully degrade_, sorry, you did not pass QA.\n3. Use the \u201cGPU Profiler\u201d. MainThread4life! Seriously, in the words of the now-departed Daniel Pidcock (he left, he\u2019s not dead), UX is non-negotiable. Your MVP (Minimum Viable Product) status won\u2019t save you from me failing your enhancement for janky scroll. If your UI isn\u2019t acceptably buttery on a mid-range device then, you guess it\u2026. You did not pass QA.\n4. Run it on a Samsung. Sorry. If it doesn\u2019t work well enough then\u2026 You did not pass QA.\n5. Did you change a value/clear a value from a persisted store? And I don\u2019t just mean databases, I mean our buddy `SharedPreferences` too. Perform an Upgrade Test and save many, many baby lambs from being slaughtered. Sometimes our use of SharedPreferences is almost as complicated as time itself so tread carefully here and test, test, test. So, if you did edit a persistent store and _didn't_ do an upgrade test then you did it wrong. You did not pass QA.\n6. Multi-window. Ok, so not the most used feature of our beloved Android but if your enhancement doesn\u2019t work nicely with it then there is a fair chance you\u2019ve got your lifecycle methods messed up. You did not pass QA.\n7. Design QA. Has the designer even seen what you\u2019ve built? If there is a visual change, make it easy for your design colleagues to see their masterpieces on various form factors. My favourite approach to this is installing the app on various form factors and _physically walking over to their desk_. Over time, the illusive UI/UX designer will learn the Hockey/CI-foo for themselves and then, well, then you\u2019re in trouble! If you\u2019ve realised a design and the designer/owner hasn\u2019t even seen it then\u2026 You did not pass QA.\n8. Acceptance Criteria. I have no idea why this is number 8. This should be position -1. Anyways, this one is easy but most-bad if eloped. The enhancements need to do what we think they\u2019re going to do. Sometimes, it\u2019s OK to adjust criteria, in fact, lots of time it\u2019s OK to adjust the criteria which is normally far from correct itself. But do it with the responsible party via the aforementioned 3 amigos technique. Change the acceptance without telling anyone? You did not pass QA. Your enhancement does not pass the documented acceptance? You obviously did not pass QA.\n9. Tablet and small screen. We\u2019re not iOS and we love our fragmentation. Don\u2019t make UIs that are unusable on small or large screen devices. If a design conflicts with this requirement, raise it with the designer. You did not pass QA.\n10. Be honest. Approach the assurance side of any process with your guard down. This is when you can learn or teach. Approaching it all cagey and defensive is going to cause friction and ultimately damage the user experience for the consumer. Not telling your colleague/partner/test engineer as much as you can about your enhancement/change? (Including the bits you are unsure of) You did not pass QA. ;)\n"],oe={title:"What's this?",description:"\ud83d\udc4b It's my personal blog discussing software, hiring & teams.",archives:[{year:2020,url:"#"},{year:2019,url:"#"},{year:2018,url:"#"},{year:2017,url:"#"},{year:2016,url:"#"},{year:2015,url:"#"}],social:[{name:"GitHub",icon:B.a,url:"https://github.com/BrantApps"},{name:"Twitter",icon:U.a,url:"https://twitter.com/BrantApps"},{name:"Stack Overflow",icon:C.a,url:"https://stackoverflow.com/users/story/1348379"}]};function re(){var e=ee();return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null),o.a.createElement(c.a,{maxWidth:"lg"},o.a.createElement("main",null,o.a.createElement(_,{post:te}),o.a.createElement(O.a,{container:!0,spacing:4},ae.map((function(e){return o.a.createElement(R,{key:e.title,post:e})}))),o.a.createElement(O.a,{container:!0,spacing:5,className:e.mainGrid},o.a.createElement(X,{title:"Latest Posts...",posts:ne}),o.a.createElement($,{title:oe.title,description:oe.description,archives:oe.archives,social:oe.social})))))}var ie=a(94),se=a.n(ie),le=a(64),ce=a(99),de=a.n(ce),ue=a(66),me=(a(155),[{title:"Modular Architecture",location:{latitude:0,longitude:0,description:"Bristol, UK"},date:new Date("2017-01-15"),slidesUrl:"https://docs.google.com/presentation/d/18ud0ywzSn93-p-FJsRGuR3TvtbtaRd6w-vjrfFZ6OCw",shortDescription:"An introduction to modularisation on Android followed by a live coding demo, modularising a portion of OceanLife"},{title:"Building Android with Docker",location:{latitude:0,longitude:0,description:"Bristol, UK"},date:new Date("2017-03-15"),slidesUrl:"https://docs.google.com/presentation/d/14KQEKGL58PKGYXrBGBObD8_P680rXyPxLANRL7eArWk",shortDescription:"A lightning talk on the first part of my journey to modernise the Just Eat build system"},{title:"Work Hard, Play Hard?",location:{latitude:0,longitude:0,description:"Bristol, UK"},date:new Date("2018-02-15"),slidesUrl:"https://docs.google.com/presentation/d/1UbUDdDs2-1Qo1jf2_1z5oNsgrss9B0p-Tafz8Unsx3g",video:{url:"https://www.youtube.com/watch?v=I1gxoOG8cF4"},shortDescription:"Supporting only Google's fork of Android does not mean your app can run on Android"},{title:"Firebase Performance",location:{latitude:0,longitude:0,description:"Bristol, UK"},date:new Date("2018-03-15"),slidesUrl:"https://docs.google.com/presentation/d/1q1EyUJZJ5kqpImI79d6rb6diJEWHCr-q640XlzggIi8",shortDescription:"Lightning talk on Firebase Performance, how to get up and running and what you get"},{title:"TeamCity Kotlin DSL",location:{latitude:0,longitude:0,description:"Bristol, UK"},date:new Date("2018-05-15"),slidesUrl:"https://docs.google.com/presentation/d/1Au2trswukU3kkRtUbGt6iWZdFq1eB-oVrCaLZsRvXsQ",shortDescription:"Using TeamCity's Kotlin DSL to create a productive build pipelines"},{title:"Wellbeing - Notes from Google I/O",location:{latitude:0,longitude:0,description:"Bristol, UK"},date:new Date("2018-06-15"),slidesUrl:"https://docs.google.com/presentation/d/1JrmMKz0mXpZAK2b0nqEOJLT6CeprrltTGTmLMuLpNuo",shortDescription:"Digital Wellbeing - My notes and insights into the psychology of the features announced at Google I/O 2018"},{title:"Chaos Mode: A foray into fuzz",location:{latitude:0,longitude:0,description:"Bristol, UK"},date:new Date("2018-11-15"),slidesUrl:"https://docs.google.com/presentation/d/1kWDQEjj_ewoAbhhEMWijZkdEbHgahofMK87SXsQAIh8",shortDescription:"Come on a journey of test case evolution with Android, Kotlin, Java and fuzzing! Learn how you can leverage the power of Kotlin's DSL properties to build readable & minimal test-case fixtures. Use frameworks such as Elmyr to improve test reliability and learn how to introduce fixtures into your apps to unleash the chaos!"},{title:"Instant Apps - Ytho?",location:{latitude:0,longitude:0,description:"Bristol, UK"},date:new Date("2019-03-15"),slidesUrl:"https://docs.google.com/presentation/d/1MZbmuCzlLBQLJ_epEouFRpRctLAUC-8fl__jGO05NLM",shortDescription:"App distribution is changing..."},{title:"Android... without Google",location:{latitude:0,longitude:0,description:"Bristol, UK"},date:new Date("2019-07-15"),slidesUrl:"https://docs.google.com/presentation/d/1Rs8fPRC7yyDbfzWwLifsUo8nuFO8dfGMjwz6wE_uRFc",shortDescription:"With the Google-Huwaei dispute in full swing I talked to Droidcon Berlin attendees about how to build for Android, without Google",video:{url:"https://player.vimeo.com/video/352689003",useVimeoWidget:!0}}]),pe=Object(u.a)((function(e){return{toolbarTitle:{flex:1},responsiveIframe:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0},responsiveContainer:{position:"relative",overflow:"hidden",paddingTop:"56.25%"}}}));var he=[{title:"Posts",component:re,path:"/"},{title:"Talks",component:function(){var e=pe(),t=me.sort((function(e,t){return e.date>t.date?-1:e.date<t.date?1:0}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null),o.a.createElement(c.a,{maxWidth:"lg"},o.a.createElement("main",null,o.a.createElement(ue.VerticalTimeline,null,t.map((function(t,a){var n;return o.a.createElement(ue.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{color:"black"},contentArrowStyle:{borderRight:"7px solid black"},date:se()(t.date).format("MMMM, YYYY"),iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:o.a.createElement(de.a,null),key:t.date.toISOString()+a},o.a.createElement("h3",{className:"vertical-timeline-element-title"},t.title),o.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},t.location.description),o.a.createElement("p",null),t.video&&t.video.useVimeoWidget?o.a.createElement("div",{className:e.responsiveContainer},o.a.createElement("iframe",{title:"vimeo-player",src:t.video.url,className:e.responsiveIframe})):null,t.video&&!t.video.useVimeoWidget?o.a.createElement(le.a,{url:t.video.url,size:"large",style:{marginBottom:16}}):null,o.a.createElement(le.a,{url:t.slidesUrl,size:(null===(n=t.video)||void 0===n?void 0:n.url)?null:"large"}),o.a.createElement("p",null,t.shortDescription))}))))))},path:"/talks"},{title:"Portfolio",component:re,path:"/portfolio"}];function ge(){return o.a.createElement(c.a,null,o.a.createElement(d.a,{my:4},o.a.createElement(T,{title:"Branton's Yak",sections:he}),o.a.createElement(v.a,{basename:"/blog"},o.a.createElement(b,{routes:he.map((function(e){return{path:e.path,component:e.component}}))})),o.a.createElement(f,{title:"Tech, Teams & Tea",description:""})))}var fe=a(100),ye=a.n(fe),be=a(101),ve=Object(be.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:ye.a.A400},background:{default:"#fff"}}});i.a.render(o.a.createElement(l.a,{theme:ve},o.a.createElement(s.a,null),o.a.createElement(ge,null)),document.querySelector("#root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.b31fbaa5.chunk.js.map