(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{45:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var n=s(2),i=s.n(n),r=s(14),a=s.n(r),c=s(5),o=s.n(c),l=s(15),m=s(16),u=s(17),d=s(20),j=s(19),v=s(18),h=s.n(v),p=(s(45),s(0));var b=function(e){e.id;var t=e.year,s=e.title,n=e.summary,i=e.poster,r=e.genres;return Object(p.jsxs)("div",{className:"movie",children:[Object(p.jsx)("img",{src:i,alt:s,title:s}),Object(p.jsxs)("div",{className:"movie_data",children:[Object(p.jsx)("h3",{className:"movie_title",children:s}),Object(p.jsx)("h5",{className:"movie_year",children:t}),Object(p.jsx)("ul",{className:"movie_genres",children:r.map((function(e,t){return Object(p.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(p.jsxs)("p",{className:"movie_summary",children:[n.slice(0,140),"..."]})]})]})},f=(s(47),[]),O=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(m.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isLoding:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var s,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,(n=s.data.data.movies).forEach((function(e){f.push(e)})),e.setState({movies:n,isLoding:!1});case 6:case"end":return t.stop()}}),t)}))),e.applyFilter=function(t){if("ALL"===t)return e.setState({movies:f});var s=f.filter((function(e){return e.genres.indexOf(t)>=0}));e.setState({movies:s})},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this,t=this.state,s=t.isLoding,n=t.movies;return Object(p.jsx)("section",{className:"container",children:s?Object(p.jsx)("div",{className:"Loader",children:Object(p.jsx)("span",{className:"Loader_text",children:'"Loading. . ."'})}):Object(p.jsxs)("div",{className:"movies",children:[Object(p.jsx)("div",{className:"filters",children:["ALL","Documentary","Action","Drama","Adventure","Mystery","Comedy","Musical","Crime"].map((function(t){return Object(p.jsx)("button",{className:"filterButton",onClick:function(){return e.applyFilter(t)},children:t})}))}),n.map((function(e){return Object(p.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))]})})}}]),s}(i.a.Component);a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.146b693d.chunk.js.map