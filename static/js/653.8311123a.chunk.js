"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{653:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var r,a,c,u=n(861),s=n(439),i=n(757),o=n.n(i),p=n(791),f=n(689),l=n(87),h=n(168),v=n(444),m=(v.ZP.h1(r||(r=(0,h.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),v.ZP.ul(a||(a=(0,h.Z)(["\n  list-style-type: none;\n      margin-bottom: 10px;\n    font-size: 20px;\n    margin-left: 100px;\n"])))),d=v.ZP.li(c||(c=(0,h.Z)(["\nposition:relative;\ndisplay: flex;\npadding:5px 10px"]))),x=n(390),w={movieItem:"home_movieItem__UKc62"},g=n(184),k=function(){var t=(0,p.useState)(null),e=(0,s.Z)(t,2),n=e[0],r=e[1],a=(0,p.useState)(!0),c=(0,s.Z)(a,2),i=c[0],h=c[1],v=(0,f.TH)();return(0,p.useEffect)((function(){var t=function(){var t=(0,u.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(!0),t.next=4,(0,x.Df)();case 4:e=t.sent,r(e),h(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(m,{children:[(0,g.jsx)("h2",{className:w.title,children:"Trending movies:"}),i?"Loading...":n.map((function(t){var e=t.title,n=t.id;return(0,g.jsx)(d,{children:(0,g.jsx)(l.rU,{to:"/movies/".concat(n),state:{from:v},className:w.movieItem,children:e})},n)}))]})})}},390:function(t,e,n){n.d(e,{Df:function(){return s},M1:function(){return f},TP:function(){return o},qF:function(){return m},tx:function(){return h}});var r=n(861),a=n(757),c=n.n(a),u=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9760321e535cf92cb2afc4cf5f8389d8",language:"en-US"}});function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/week",t.prev=1,t.next=4,u.get("/trending/movie/week");case 4:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e),t.prev=1,t.next=4,u.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,u.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,u.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/search/movie?query=".concat(e),t.prev=1,t.next=4,u.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=653.8311123a.chunk.js.map