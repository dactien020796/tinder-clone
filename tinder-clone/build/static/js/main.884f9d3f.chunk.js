(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,a,n){e.exports=n(87)},54:function(e,a,n){},55:function(e,a,n){},56:function(e,a,n){},64:function(e,a,n){},85:function(e,a,n){},87:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(14),l=n.n(c),s=(n(54),n(55),n(56),n(35)),o=n.n(s),i=n(36),u=n.n(i),m=n(101);var d=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(m.a,null,r.a.createElement(o.a,{fontSize:"large",className:"header__icon"})),r.a.createElement("img",{className:"header__logo",src:"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png",alt:"logo"}),r.a.createElement(m.a,null,r.a.createElement(u.a,{fontSize:"large",className:"header__icon"})))},f=n(24),p=n.n(f),E=n(37),g=n(45),w=(n(64),n(38)),v=n.n(w),h=n(39),_=n.n(h).a.create({baseURL:"https://tinder-backend-tienle0207.herokuapp.com"});var N=function(){var e=Object(t.useState)([]),a=Object(g.a)(e,2),n=a[0],c=a[1];return Object(t.useEffect)(function(){function e(){return(e=Object(E.a)(p.a.mark(function e(){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.get("tinder/cards");case 2:a=e.sent,c(a.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),r.a.createElement("div",{className:"tinderCards"},r.a.createElement("div",{className:"tinderCards__cardContainer"},n.map(function(e){return r.a.createElement(v.a,{className:"swipe",key:"",preventSwipe:["up","down"],onSwipe:function(a){return n=e.name,void console.log("removing: "+n);var n},onCardLeftScreen:function(){return a=e.name,void console.log(a+" left the screen!");var a}},r.a.createElement("div",{className:"card",style:{backgroundImage:"url(".concat(e.imgUrl,")")}},r.a.createElement("h3",null,e.name)))})))},S=(n(85),n(40)),b=n.n(S),B=n(41),k=n.n(B),z=n(42),C=n.n(z),x=n(43),y=n.n(x),j=n(44),F=n.n(j);var L=function(){return r.a.createElement("div",{className:"swipeButtons"},r.a.createElement(m.a,{className:"swipeButtons__repeat"},r.a.createElement(b.a,{fontSize:"large"})),r.a.createElement(m.a,{className:"swipeButtons__left"},r.a.createElement(k.a,{fontSize:"large"})),r.a.createElement(m.a,{className:"swipeButtons__star"},r.a.createElement(C.a,{fontSize:"large"})),r.a.createElement(m.a,{className:"swipeButtons__right"},r.a.createElement(y.a,{fontSize:"large"})),r.a.createElement(m.a,{className:"swipeButtons__lightning"},r.a.createElement(F.a,{fontSize:"large"})))};var O=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(d,null),r.a.createElement(N,null),r.a.createElement(L,null))},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then(function(a){var n=a.getCLS,t=a.getFID,r=a.getFCP,c=a.getLCP,l=a.getTTFB;n(e),t(e),r(e),c(e),l(e)})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),I()}},[[49,1,2]]]);
//# sourceMappingURL=main.884f9d3f.chunk.js.map