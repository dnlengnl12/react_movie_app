(this.webpackJsonpreact_movie_app=this.webpackJsonpreact_movie_app||[]).push([[0],{59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(30),i=n.n(c),r=n(8),o=n(2),l=n(1);var j=function(){return Object(l.jsx)("span",{children:"About this page: Ibuilt it because I love moives"})},m=n(19),u=n.n(m),d=n(31),v=n(13),b=n(14),p=n(16),h=n(15),O=n(32),x=n.n(O);n(59);var g=function(e){var t=e.id,n=e.year,a=e.title,s=e.summary,c=e.poster,i=e.genres;return Object(l.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:s,poster:c,genres:i}},children:Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:c,alt:a,title:a}),Object(l.jsx)("div",{className:"movies__movie",children:Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:a}),Object(l.jsx)("h5",{className:"movie_year",children:n}),Object(l.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(l.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[s.slice(0,140),"..."]})]})})]})})},f=(n(65),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,console.log(a),e.setState({movies:a,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return Object(l.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component)),y=f,_=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;console.log(t),void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component),N=_;var k=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(r.b,{to:"/",children:"Home"}),Object(l.jsx)(r.b,{to:"/about",children:"About"})]})};var w=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(k,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/movie/:id",component:N})]})};i.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.6e4fb69a.chunk.js.map