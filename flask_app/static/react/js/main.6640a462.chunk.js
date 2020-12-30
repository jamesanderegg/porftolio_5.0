(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{101:function(e,t,n){},111:function(e,t,n){},114:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),o=n.n(c),i=n(8),l=(n(101),n(22)),s=(n(111),function(e){return r.a.createElement("button",{className:"toggle-button",onClick:e.click},r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}))});function u(e){var t=e.pageData,n=e.sidePanelClickHandler;return r.a.createElement("nav",{className:"nav",id:"navbar"},r.a.createElement("div",{className:"nav-content"},r.a.createElement(s,{click:n}),r.a.createElement("h1",{className:"nav-name",onClick:function(){l.animateScroll.scrollToTop()}},"James Anderegg"),r.a.createElement("ul",{className:"nav-items"},t.map((function(e,t){return r.a.createElement("li",{className:"nav-item",key:"nav-".concat(e.name).concat(t)},r.a.createElement(l.Link,{activeClass:"active",to:e.id,spy:!0,smooth:!0,offset:-70,duration:500},e.name))})))))}function m(e){e.title,e.subtitle;var t=e.dark,n=e.id,a=e.component;return(r.a.createElement("div",{className:"section"+(t?" section-dark":"")},r.a.createElement("div",{className:"section-content",id:n},a)))}var p=n(1),f=n(2);function d(){var e=Object(p.a)(["\n  \n  margin: 30px;\n"]);return d=function(){return e},e}function h(){var e=Object(p.a)(["\n"]);return h=function(){return e},e}function g(){var e=Object(p.a)(["\n  color: #333;\ntext-align: center;\n"]);return g=function(){return e},e}var b=f.a.div(g()),v=f.a.h1(h()),y=f.a.div(d()),E=function(){return r.a.createElement(b,null,r.a.createElement(v,null,"Denver Officer Involved Shootings"),r.a.createElement(y,null,"The data comes from the,"," ",r.a.createElement("a",{href:"https://www.denvergov.org/opendata/dataset/city-and-county-of-denver-denver-police-officer-involved-shootings"},"City of Denver Open Data Catalog")," ","and has clearly indicated the terms of using this work at"," ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/"},"http://creativecommons.org/licenses/by/3.0/")),r.a.createElement(y,null,"I recreated the dashboard the city of Denver has provided and made it clickable and dynamic and also added a few extra visuals.  Microsoft Power Bi hosts the project and provides a sharable link.  The dashboards can also require authentication if needed."),r.a.createElement("h2",null,"Click the dashboard, it is dynamic."),r.a.createElement("iframe",{style:{cursor:"pointer"},width:"100%",height:"1060",src:"https://app.powerbi.com/view?r=eyJrIjoiZjRiMDA5ZmYtYzk2ZS00OTIzLTg5MjAtMjg4OTRlMTQ1ZGRkIiwidCI6Ijc5YTUxMDViLTcyMTUtNDg5My1hY2E2LTlhZTQxMTQ2M2ZkOSIsImMiOjZ9&pageName=ReportSection6f39f6667ec1bec9948e",frameBorder:"0",allowFullScreen:!0}))},j=n(12),w=n(13),x=n(14),k=n(15),O=n(6),S=n(21),C=n(18),D=n(7),N=n.n(D),T=n(78),M=(n(64),n(65),n(66),n(4));n(114);var R=function(e){Object(x.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=Object(O.a)(e);if(t()){var r=Object(O.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(k.a)(this,n)}}(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={isChecked:!1},a.handleChecked=a.handleChecked.bind(Object(C.a)(a)),a}return Object(w.a)(n,[{key:"handleChecked",value:function(){this.setState({isChecked:!this.state.isChecked})}},{key:"render",value:function(){return r.a.createElement("div",{className:"leaflet-top leaflet-left"},r.a.createElement("div",{className:"classname leaflet-control"},r.a.createElement("div",{className:"container-leaf"},r.a.createElement("input",{id:"toggle-leaf",type:"checkbox",onChange:this.handleChecked}),r.a.createElement("label",{id:"label-leaf",htmlFor:"toggle-leaf"},r.a.createElement("h4",null,"Search")),r.a.createElement("div",{id:"expand-leaf"},r.a.createElement("form",{noValidate:!0,onSubmit:this.props.onSubmit},r.a.createElement("input",{id:"search-box",type:"search",name:"searchbox",placeholder:"Search",onChange:this.props.onChange,value:this.props.searchbox}),r.a.createElement("button",{id:"search-btn",className:"form-control",type:"submit"},"Go!")),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("p",null,"It is not case sensitive.  Search words not phrases."),r.a.createElement("h4",null,"Interesting Searches"),r.a.createElement("li",null,"Bed Bugs"),r.a.createElement("li",null,"Turtles"),r.a.createElement("li",null,"Dogs"))))))}}]),n}(r.a.Component);function I(){var e=Object(p.a)(["\n    width: 85%;\n    height: ",";\n    min-width: 300px;\n    left: 50%;\n    transform: translateX(-50%);\n"]);return I=function(){return e},e}var P=f.a.div(I(),(function(e){return e.height}));delete N.a.Icon.Default.prototype._getIconUrl,N.a.Icon.Default.mergeOptions({iconRetinaUrl:n(115),iconUrl:n(116),shadowUrl:n(117)});var L=function(e){Object(x.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=Object(O.a)(e);if(t()){var r=Object(O.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(k.a)(this,n)}}(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={searchbox:"",data:[],originalData:[],loading:!1},a.onSubmit=a.onSubmit.bind(Object(C.a)(a)),a.onChange=a.onChange.bind(Object(C.a)(a)),a.drawMarkers=a.drawMarkers.bind(Object(C.a)(a)),a}return Object(w.a)(n,[{key:"onChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.markers.remove(),this.map.spin(!0),this.searchData()}},{key:"searchData",value:function(){for(var e=[],t=0;t<this.state.originalData.length;t++)if(null!=this.state.originalData[t].properties["Case Summary"]){var n=this.state.originalData[t].properties["Case Summary"],a=this.state.searchbox;n.toUpperCase().includes(a.toUpperCase())&&e.push(this.state.originalData[t])}this.drawMarkers(e),this.setState({data:e})}},{key:"drawMarkers",value:function(e){console.log(e[0].geometry),this.markers=new T.MarkerClusterGroup;for(var t=0;t<e.length;t++){var n=e[t].geometry,a=N.a.popup({className:"if-you-need-a-class"}).setContent('<div class="if-you-need-div"><h5>Case Summary</h5><p> Complaint: '+e[t].properties["Case Summary"]+"</p><p> Agency: "+e[t].properties.agency+"</p><p> Sourc: "+e[t].properties["Case Source"]+"</p><p> Date: "+e[t].properties["Case Date"]+"</p></div>");n.coordinates[1]&&n.coordinates[0]&&this.markers.addLayer(N.a.marker([n.coordinates[1],n.coordinates[0]]).bindPopup(a))}this.map.addLayer(this.markers);this.map.spin(!1)}},{key:"componentDidMount",value:function(){this.map=N.a.map("map").setView([39.7392,-104.9903],9),N.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v10",accessToken:"pk.eyJ1IjoianVpY3lqYW1lcyIsImEiOiJja2gyajIxb3IwYzZxMzBucGZkemt4Z3U5In0.3HY66jz4v0DTTGQygAYFJQ"}).addTo(this.map);N.a.geoJSON().addTo(this.map);this.map.spin(!0)}},{key:"componentWillReceiveProps",value:function(e){var t=[];if(e.props.length>0){for(var n=0;n<e.props[0].length;n++)t.push(e.props[0][n]);this.drawMarkers(t),this.setState({originalData:t,data:t})}}},{key:"render",value:function(){return r.a.createElement(P,{width:"80%",height:"720px",id:"map"},r.a.createElement(R,{onSubmit:this.onSubmit,onChange:this.onChange,searchbox:this.state.searchbox}))}}]),n}(r.a.Component),A=n(38),G=n.n(A);function z(){var e=Object(p.a)(["\n    margin: 20px;\n"]);return z=function(){return e},e}function B(){var e=Object(p.a)(["\n    text-align: center;\n"]);return B=function(){return e},e}var _=f.a.div(B()),J=f.a.p(z()),W=function(e){Object(x.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=Object(O.a)(e);if(t()){var r=Object(O.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(k.a)(this,n)}}(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(w.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=[];G.a.get("/denver311").then((function(n){t.push(n.data.features),e.setState({data:t})}))}},{key:"render",value:function(){return r.a.createElement(_,{className:"map"},r.a.createElement("h1",null,"Denver 311 Help Center 2016"),r.a.createElement(J,null,"Denver has an open data catalog that has a variety of data. This is the Denver 311 Help Center database from 2016, Complaints. Each data point is clickable and has a description of the incident."),this.state.data.length>0?r.a.createElement("br",null):r.a.createElement("h1",null,"DATA LOADING:"),r.a.createElement(L,{props:this.state.data}))}}]),n}(r.a.Component);function F(){var e=Object(p.a)(["\n    width: 85%;\n    height: ",";\n    z-index: 3\n    margin: 0 auto;\n    min-width: 300px;\n    left: 50%;\n    transform: translateX(-50%);\n"]);return F=function(){return e},e}var Y=f.a.div(F(),(function(e){return e.height})),Z=function(e){Object(x.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=Object(O.a)(e);if(t()){var r=Object(O.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(k.a)(this,n)}}(n);function n(e){return Object(j.a)(this,n),t.call(this,e)}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.map=D.map("map",{center:[39.7392,-104.9903],zoom:4,maxZoom:11,zoomControl:!1}),D.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v10",accessToken:"pk.eyJ1IjoianVpY3lqYW1lcyIsImEiOiJja2gyajIxb3IwYzZxMzBucGZkemt4Z3U5In0.3HY66jz4v0DTTGQygAYFJQ"}).addTo(this.map);D.geoJSON().addTo(this.map);this.map.spin(!0)}},{key:"componentWillReceiveProps",value:function(e){this.map.spin(!1);D.heatLayer(e.props,{radius:20,blur:50}).addTo(this.map)}},{key:"render",value:function(){return r.a.createElement(Y,{width:"80%",height:"720px",id:"map"})}}]),n}(r.a.Component);function Q(){var e=Object(p.a)(["\n    margin: 20px;\n"]);return Q=function(){return e},e}function V(){var e=Object(p.a)(["\n    text-align: center;\n"]);return V=function(){return e},e}var H=f.a.div(V()),U=f.a.p(Q()),q=function(e){Object(x.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=Object(O.a)(e);if(t()){var r=Object(O.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(k.a)(this,n)}}(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={location:[]},e}return Object(w.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=[];G.a.get("/google_data").then((function(n){for(var a=0;a<n.data.latitude.length;a++)t.push([n.data.latitude[a],n.data.longitude[a]]);e.setState({location:t})}))}},{key:"render",value:function(){return r.a.createElement(H,{className:"map"},r.a.createElement("h1",null,"Google GPS Data"),r.a.createElement(U,null,"Anyone can download their Google gps data in a number of different formats.  "),r.a.createElement(U,null,"I used Leaflet Javascript to build a map, a loading spinner and a heat map overlay."),0===this.state.location.length?r.a.createElement("h4",null,"Loading data from a MySQL database, please be patient...."):null,r.a.createElement(Z,{props:this.state.location}))}}]),n}(r.a.Component),X=[{name:"My GPS Data",id:"gpsGoogle",type:"Heatmap",description:"A Heatmap of my GPS data over the last few years.",component:r.a.createElement(q,null),website:null,github:"https://github.com/jamesanderegg/porftolio_5.0/tree/main/react_app/src/Components/Projects/Maps/GoogleGps",tags:"data, map",image:"https://www.jamesanderegg.com/uploads/images/heatMap.png",text:"A heatmap of my GPS data",tools:"axios, styled-components, react, class-components, leaflet, leaflet-spin, leaflet.heat, d3"},{name:"Denver 311: Phone Data",id:"denver_311",type:"Cluster Map",description:"A Cluster map of Denvers phone information hotline for the year 2016.  You can filter the data by searching and the map will update.",component:r.a.createElement(W,null),website:null,github:"https://github.com/jamesanderegg/flask-reactTreeMap/tree/master/react-flask-app/src/Components/Projects/Maps/Denver311",tags:"data, denver, map",image:"https://www.jamesanderegg.com/uploads/images/denver311.png",text:"Denver has an open data city catalog with lots of datasets.  This is the information hotline, sorted by complaints for the year 2016.",tools:"axios, styled-componets, react, class-components, leaflet, leaflet-control, leaflet.markercluster, d3"},{name:"School of the Natural Order",id:"snoc",type:"Client Website",description:"SNOC.ORG is a website I built using React and Gatsby.  The website is hosted on github-pages and also has google analytics set up so my client can collect information on site traffic.",component:null,website:"https://snoc.org/",github:"https://github.com/jamesanderegg/schoolofnaturalordercolorado",tags:"website, gatsby",image:"https://www.jamesanderegg.com/uploads/images/snoc.png",text:"A website for the School of the Natural Order of Colorado.",tools:"react, functional-components, gatsby, gatsby-image, github-pages"},{name:"Officer-Involved Shootings: Denver",id:"denver-dashboard",type:"Power Bi Dashboard",description:"I rebuilt a dashboard I found on Denver.org of Officer-involved shootings.  My dashboard is dynamic and built in power bi.",component:r.a.createElement(E,null),website:"https://www.denvergov.org/opendata/dataset/city-and-county-of-denver-denver-police-officer-involved-shootings",github:"https://github.com/jamesanderegg/porftolio_5.0/tree/main/react_app/src/Components/Projects/OfficerInvolvedShootings",tags:"power-bi, data, dashboard, denver",image:"https://www.jamesanderegg.com/uploads/images/treemap-police.png",text:"A dynamic dashboard built in Power bi of Denver, officer involved shootings.",tools:"python, pandas, beautifulsoup, requests, power-bi"},{name:"Master Gatsby: Slicks Slices",id:"master-gatsby",type:"Wes Bos Gatsby Tutorial",description:"A Master Gatsby tutorial by Wes Bos.  We built a mock up pizza shop using Sanity as a CMS on the backend and Gatsby on the frontend. Managers can update their pizza shop with a super easy UI thanks to Sanity.",component:null,website:"https://pizzabytheslice.netlify.app/?fbclid=IwAR15qWzcWihXnvIdtERClarZjD8_GLhz8ZeXgizCDtrgRF0nbDEQ-5h3-n4",url:"https://mastergatsby.com/",urlText:"Wes Bos Master Gatsby",github:"https://github.com/jamesanderegg/master-gatsby-tutorial",tags:"data, sanity, gatsby",image:"https://www.jamesanderegg.com/uploads/images/slices.PNG",text:"This website was built with Gatsby frontend and a content managment system called Sanity.",tools:"sanity, graphql, javascript, react, gatsby, GROQ"}],$=function(e){var t=e.targetValue,n=e.name,r=e.startValue,c=e.easing,o=Object(a.useState)(r||t),l=Object(i.a)(o,2),s=l[0],u=l[1];return Object(a.useEffect)((function(){return M.l().transition(n).duration(2e3).ease(c||M.c).tween(n,(function(){var e=M.d(s,t);return function(t){return u(e(t))}})),function(){u(null)}}),[t]),s},K=function(e){var t=e.data,n=e.y,a=e.width,c=e.thickness,o=$({targetValue:a,name:"width-".concat(t.name),easing:M.b}),i=$({targetValue:n,name:"y-".concat(t.name),startValue:0,easing:M.a}),l=$({targetValue:0,name:"x-".concat(t.name),startValue:0,easing:M.a});return r.a.createElement("g",{transform:"translate(".concat(l,", ").concat(i,")")},r.a.createElement("rect",{x:10,y:0,width:o,height:c,fill:"#bebfc2"}))},ee=function(e){var t=e.data,n=e.x,a=e.y,c=e.barThickness,o=e.width,i=M.i().domain(t.map((function(e){return e.name}))).paddingInner(.1).range([t.length*c,0]),l=M.j().domain([0,M.f(t,(function(e){return e.transistors}))]).range([0,o]);return r.a.createElement("g",{transform:"translate(".concat(n,", ").concat(a,")")},t.map((function(e){return r.a.createElement(K,{data:e,key:e.name,y:i(e.name),width:l(e.transistors),thickness:i.bandwidth()})})))};function te(){var e=Object(p.a)(["\n  width: 100%;\n  height: 130px;\n  border: 2px solid #bebfc2;\n"]);return te=function(){return e},e}var ne=f.a.svg(te()),ae=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=M.h(5).map((function(e){return"".concat(e," CPU")})),t=M.g(1e3,5e4),n=M.h(1970,2025).map((function(n){return M.h(5).map((function(a){return{year:n,name:e[a],transistors:Math.round(t())}}))}));r(n)}),[]),n};var re=function(){var e=ae(),t=Object(a.useState)(1),n=Object(i.a)(t,2),c=n[0],o=n[1],l=M.k().domain(M.h(1,2025)).range(M.h(0,55));return Object(a.useEffect)((function(){var e=M.e((function(){o((function(e){return e+1}))}),1500);return function(){return e.stop()}}),[]),r.a.createElement(ne,{style:{paddingTop:"10px"}},e?r.a.createElement(ee,{data:e[l(c)],x:0,y:0,barThickness:19,width:"98%"}):null)};function ce(){var e=Object(p.a)(["\n  text-align: center;\n  align-self: center;\n  display: flex;\n  grid-area: 3 / 1 / span 2 / span 3;\n  margin: 100px;\n  @media (max-width: 580px) {\n    grid-area: 4 / 1;\n    margin: 30px;\n  }\n"]);return ce=function(){return e},e}function oe(){var e=Object(p.a)(["\n  text-align: center;\n  margin: 0 auto;\n  align-self: center;\n  grid-area: 2;\n  width: 80%;\n  min-width: 250px;\n   \n  /* @media (max-width: 580px) {\n      grid-area: 3/1;\n      margin: 0 auto;\n  } */\n"]);return oe=function(){return e},e}function ie(){var e=Object(p.a)(["\n  text-align: center;\n  align-self: center;\n  display: flex;\n  margin: 30px;\n"]);return ie=function(){return e},e}function le(){var e=Object(p.a)(["\n  display: grid;\n\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.5fr 0.5fr 0.3fr;\n  @media (max-width: 580px) {\n    display: block;\n  }\n"]);return le=function(){return e},e}var se=f.a.div(le()),ue=f.a.div(ie()),me=f.a.div(oe()),pe=f.a.div(ce());function fe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"About:"),r.a.createElement(se,null,r.a.createElement(ue,null,"I am a software developer working as a freelance Data Scientist and Web Developer, doing business as, DataFluent. Born to think outside the box, attentive to detail and eager to learn. Always learning new talents and challenging myself. Team orientated and lover of all people. Born and raised in Golden, Colorado."),r.a.createElement(me,null,r.a.createElement("h3",null,"(DBA) DataFluent"),r.a.createElement(re,null)),r.a.createElement(pe,null,"This website was built with a Python, MySQL, Flask-backend and a Javascript, React front-end.")))}n(134);function de(){var e=Object(p.a)(['\n  \n  grid-area: "text";\n  align-self: center;\n  @media(max-width: 580px){\n  &.pythonText{\n      grid-area: 2/1;\n    }\n  &.javascriptText{\n    grid-area: 2/2;\n  }\n  }\n  \n']);return de=function(){return e},e}function he(){var e=Object(p.a)(["\n  align-self: center;\n  margin-bottom: 8px;\n  &.pythonLogo {\n    color: rgb(255, 232, 115);\n    \n  }\n  &.javascriptLogo {\n    color: rgb(50, 51, 48);\n  }\n  &.reactLogo {\n    color: rgb(87, 200, 228);\n  }\n  \n"]);return he=function(){return e},e}function ge(){var e=Object(p.a)(["\n  display: grid;\n  font-size: 27px;\n  margin: 20px 0;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 0.6fr 0.4fr;\n  text-align: center;\n  @media (max-width: 580px) {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n  }\n"]);return ge=function(){return e},e}var be=f.a.div(ge()),ve=f.a.div(he()),ye=f.a.div(de()),Ee=function(){return r.a.createElement(be,null,r.a.createElement(ve,{className:"pythonLogo"},r.a.createElement("i",{className:"fab fa-python fa-2x",alt:"Python"})),r.a.createElement(ve,{className:"javascript"},r.a.createElement("i",{className:"fab fa-js fa-2x",alt:"Javascript"})," "),r.a.createElement(ve,{className:"reactLogo"},r.a.createElement("i",{className:"fab fa-react fa-2x",alt:"React"})),r.a.createElement(ve,{className:"powerbiLogo"},r.a.createElement("img",{className:"logos-image",src:"https://www.jamesanderegg.com/uploads/images/power-bi.png",alt:"Microsoft Power Bi"})," "),r.a.createElement(ye,{className:"pythonText"},"Python"),r.a.createElement(ye,{className:"javascriptText"},"JavaScript"),r.a.createElement(ye,{className:"reactText"},"React"),r.a.createElement(ye,null,"PowerBi"))};function je(){var e=Object(p.a)([""]);return je=function(){return e},e}function we(){var e=Object(p.a)(["\n    font-size: 22px;\n    \n  "]);return we=function(){return e},e}function xe(){var e=Object(p.a)(["\n    font-size: 30px;\n    align-self:center;\n    color: #333;\n  "]);return xe=function(){return e},e}function ke(){var e=Object(p.a)(["\n    margin: 14px;\n    border: 3px solid #333;\n    display: grid;\n    text-align: center;\n    grid-template-rows: .6fr .1fr 1fr;\n  "]);return ke=function(){return e},e}function Oe(){var e=Object(p.a)(["\n    \n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    @media (max-width: 580px) {\n      grid-template-columns:1fr;\n      grid-template-rows: 1fr 1fr 1fr;\n      max-width: 300px;\n      margin: auto;\n    }\n  "]);return Oe=function(){return e},e}var Se=f.a.div(Oe()),Ce=f.a.div(ke()),De=f.a.div(xe()),Ne=f.a.div(we()),Te=f.a.ul(je()),Me=function(){return r.a.createElement(Se,null,r.a.createElement(Ce,null,r.a.createElement(De,null,r.a.createElement("i",{className:"fas fa-chart-line fa-2x",id:"dashboard"})),r.a.createElement(Ne,null,"Dashboards"),r.a.createElement(Te,null,r.a.createElement("li",{className:"what-li"},"Power Bi"),r.a.createElement("li",{className:"what-li"},"Tableau"),r.a.createElement("li",{className:"what-li"},"MatPlotLib"),r.a.createElement("li",{className:"what-li"},"D3"),r.a.createElement("li",{className:"what-li"},"Excel/VBA"))),r.a.createElement(Ce,null,r.a.createElement(De,null,r.a.createElement("i",{className:"fas fa-table fa-2x",id:"wrangle"})),r.a.createElement(Ne,null,"Data Wrangling"),r.a.createElement(Te,null,r.a.createElement("li",{className:"what-li"},"Pandas / Numpy"),r.a.createElement("li",{className:"what-li"},"BeautifulSoup"),r.a.createElement("li",{className:"what-li"},"Selenium"),r.a.createElement("li",{className:"what-li"},"SQL/noSQL"),r.a.createElement("li",{className:"what-li"},"API connections"))),r.a.createElement(Ce,null,r.a.createElement(De,null,r.a.createElement("i",{className:"fas fa-database fa-2x",id:"fullStack"})),r.a.createElement(Ne,null,"Full Stack Development"),r.a.createElement(Te,null,r.a.createElement("li",{className:"what-li"},"Python Flask / Node"),r.a.createElement("li",{className:"what-li"},"SQL / noSQL / AWS "),r.a.createElement("li",{className:"what-li"},"HTML / CSS / JS"),r.a.createElement("li",{className:"what-li"},"React / Sanity / Apollo"),r.a.createElement("li",{className:"what-li"},"Graphql / Gatsby / Netlify"))))};function Re(){var e=Object(p.a)(["\n    margin: 30px 0;\n"]);return Re=function(){return e},e}var Ie=f.a.div(Re());function Pe(){return r.a.createElement(Ie,null,r.a.createElement("h2",null,"Tools & Skills:"),r.a.createElement(Ee,null),r.a.createElement(Me,null))}function Le(){var e=Object(p.a)(["\n  padding: 5px;\n  color: #333;\n  background-color: whitesmoke;\n"]);return Le=function(){return e},e}function Ae(){var e=Object(p.a)(["\n  padding: 5px;\n  color: white;\n"]);return Ae=function(){return e},e}function Ge(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-gap: 0 .4rem;\n  align-items: center;\n  padding: 5px;\n  border-radius: 2px;\n  background-color: rgba(26, 91, 230, 0.8);\n  font: bold 14px/1 sans-serif;\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(12, 28, 61, 0.8);\n  }\n"]);return Ge=function(){return e},e}function ze(){var e=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-bottom: 1rem;\n  \n\n"]);return ze=function(){return e},e}var Be=f.a.div(ze()),_e=f.a.div(Ge()),Je=f.a.div(Ae()),We=f.a.div(Le()),Fe=function(e){var t=e.tags,n=e.tagsCount,a=e.registerTag,c=e.projectsList;return(r.a.createElement(r.a.Fragment,null,r.a.createElement(Be,null,r.a.createElement(_e,{onClick:a},r.a.createElement(Je,null,"all"),r.a.createElement(We,null,c.length)),t.sort().map((function(e){return r.a.createElement(_e,{key:e,onClick:a},r.a.createElement(Je,{id:e},e),r.a.createElement(We,null," ",n[e]))})))))},Ye=(n(135),n(19));function Ze(){var e=Object(p.a)(["\n  color: #333;\n  border: 1px solid aqua;\n"]);return Ze=function(){return e},e}function Qe(){var e=Object(p.a)(["\n  color: #333;\n  width: 99%;\n  padding: 15px;\n  border: 1px solid red;\n  margin: 10px auto;\n"]);return Qe=function(){return e},e}function Ve(){var e=Object(p.a)(["\n  border: 3px solid #fff;\n\n  box-shadow: inset 0 0 0 2000px rgba(36, 23, 0, 0.3);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n"]);return Ve=function(){return e},e}function He(){var e=Object(p.a)(["\n  margin: 1px;\n  font: bold 12px/1 sans-serif;\n  color: #333;\n"]);return He=function(){return e},e}function Ue(){var e=Object(p.a)(["\n  columns: 2;\n  -webkit-columns: 2;\n  -moz-columns: 2;\n"]);return Ue=function(){return e},e}function qe(){var e=Object(p.a)(["\n  background-color: rgba(16, 8, 116, 0.9);\n  padding: 3px;\n  margin: 1px;\n  font: bold 12px/1 sans-serif;\n  color: #fff;\n"]);return qe=function(){return e},e}function Xe(){var e=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.1rem;\n  margin-bottom: 1rem;\n  justify-content: center;\n  text-align: center;\n"]);return Xe=function(){return e},e}function $e(){var e=Object(p.a)(["\n  text-align: center;\n  color: #fff;\n"]);return $e=function(){return e},e}function Ke(){var e=Object(p.a)(["\n  margin-top: 40%;\n  text-decoration: underline;\n  text-align: center;\n  color: #fff;\n"]);return Ke=function(){return e},e}function et(){var e=Object(p.a)(["\n  text-align: center;\n  width: 220px;\n  height: 310px;\n  -webkit-perspective: 800px; /* ? */\n  perspective: 800px;\n  margin: 5px auto;\n"]);return et=function(){return e},e}function tt(){var e=Object(p.a)(["\n  --auto-grid-min-size: 14rem;\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fill,\n    minmax(var(--auto-grid-min-size), 1fr)\n  );\n"]);return tt=function(){return e},e}var nt=f.a.div(tt()),at=f.a.div(et()),rt=f.a.h4(Ke()),ct=f.a.h3($e()),ot=f.a.span(Xe()),it=f.a.span(qe()),lt=f.a.ul(Ue()),st=f.a.li(He()),ut=f.a.div(Ve()),mt=(f.a.div(Qe()),f.a.a(Ze())),pt=function(e){var t=e.projectList,n=e.setLoadedProject;return(r.a.createElement(nt,null,t.map((function(e){return r.a.createElement(at,{key:e.id},r.a.createElement("input",{type:"checkbox",id:e.id}),r.a.createElement("label",{className:"card",key:e.id,htmlFor:e.id},r.a.createElement(ut,{className:"front front-overlay",style:{backgroundImage:"url(".concat(e.image,") ")}},r.a.createElement(rt,null,e.name),r.a.createElement(ct,null,e.type),r.a.createElement(ot,null,e.tags.split(",").map((function(e){return r.a.createElement(it,{key:"tag-".concat(e)},e)})))),r.a.createElement("div",{className:"back"},r.a.createElement(lt,null,e.tools.split(",").map((function(e){return r.a.createElement(st,{key:"tool-".concat(e)},e)}))),r.a.createElement(mt,{href:e.github,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fab fa-github fa-2x"})," Source Code"),e.description,e.website?r.a.createElement("a",{href:e.website,rel:"noopener noreferrer",target:"_blank"},"Client Website"):null,e.component?r.a.createElement(Ye.b,{to:"/".concat(e.id),className:"load-SubDescription",onClick:n},"Load ",e.type):null,e.tools)))}))))};function ft(){var e=Object(p.a)(["\n  font-style: italic;\n"]);return ft=function(){return e},e}function dt(){var e=Object(p.a)([""]);return dt=function(){return e},e}function ht(){var e=Object(p.a)(["\n  min-height: 90vh;\n"]);return ht=function(){return e},e}var gt=f.a.div(ht()),bt=f.a.h2(dt()),vt=f.a.ul(ft());function yt(){var e=n(137),t=Object(a.useState)(""),c=Object(i.a)(t,2),o=c[0],l=c[1],s=Object(a.useState)(!1),u=Object(i.a)(s,2),m=(u[0],u[1]),p=[],f=[];e.each(X,(function(t){e.get(t,"tags")&&(p=p.concat(t.tags.split(", ")),t.tags.includes(o)&&(f=f.concat(t)))}));var d={};return p.forEach((function(e){d[e]=(d[e]||0)+1})),p=e.uniq(p),r.a.createElement(gt,null,r.a.createElement(bt,null,"Projects:"),r.a.createElement(vt,null,r.a.createElement("li",null,"Click the tags at the top to sort the projects."),r.a.createElement("li",null,"Click the card projects to flip them for more information.")),r.a.createElement(Fe,{tags:p,tagsCount:d,registerTag:function(e){"all"!==e.target.id?l(e.target.id):l("")},projectsList:f}),r.a.createElement(pt,{projectList:f,setLoadedProject:function(e){m((function(e){return!e}))}}))}var Et=n(52),jt=n.n(Et),wt=n(79),xt=n(53);function kt(){var e=Object(p.a)(["\n  grid-area: 6 / span 2;\n  margin: auto;\n  background: lightgray;\n  border: 0;\n  font-size: 20px;\n  cursor: pointer;\n  width: 95%;\n  &:hover {\n    background: #c46c00;\n    outline: 0;\n  }\n"]);return kt=function(){return e},e}function Ot(){var e=Object(p.a)(["\n  font-size: 14px;\n  grid-column: 2/3;\n  &.mapleSyrup{\n    display: none;\n  }\n"]);return Ot=function(){return e},e}function St(){var e=Object(p.a)(["\n  display: block;\n  align-self: center;\n"]);return St=function(){return e},e}function Ct(){var e=Object(p.a)(["\n  margin: 40px auto;\n\n  width: 80%;\n  display: grid;\n  grid-template-columns: 0.3fr 1fr;\n  grid-gap: 20px;\n  @media (max-width: 580px) {\n    width: 100%;\n  }\n"]);return Ct=function(){return e},e}function Dt(){var e=Object(p.a)(["\n  color: #333;\n"]);return Dt=function(){return e},e}function Nt(){var e=Object(a.useState)({name:"",email:"",subject:"",mapleSyrup:"",message:""}),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),s=l[0],u=l[1],m=Object(a.useState)([]),p=Object(i.a)(m,2),f=p[0],d=p[1];function h(e){var t=e.target.value;"number"===e.target.type&&(t=parseInt(e.target.value)),c(Object(xt.a)(Object(xt.a)({},n),{},Object(S.a)({},e.target.name,t)))}function g(e){e.preventDefault();var t=[];Object.keys(n).map((function(e){return"mapleSyrup"===e?(""!==n[e]&&(console.log("ROBOT"),t.push(e)),null):(""===n[e]&&t.push(e),null)})),0!==t.length?(d(t),console.log("Fail")):(d(f),function(e){b.apply(this,arguments)}(n))}function b(){return(b=Object(wt.a)(jt.a.mark((function e(t){var n;return jt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.name,email:t.email,message:t.message,subject:t.subject})},fetch("/contact_form",n).then((function(e){console.log(e),200===e.status?(d([]),c({name:"",email:"",subject:"",message:""}),u(!0)):c({name:"",email:"",subject:"",message:""})}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(r.a.createElement(Tt,null,r.a.createElement("h2",null,"Contact:"),r.a.createElement(Mt,{onSubmit:function(e){return g(e)}},r.a.createElement(Rt,null,"Name:"),r.a.createElement(It,{type:"text",name:"name",id:"name",value:n.name,placeholder:"Enter your name",onChange:h}),r.a.createElement(Rt,null,"Email:"),r.a.createElement(It,{type:"email",name:"email",id:"email",placeholder:"Enter your email",value:n.email,onChange:h}),r.a.createElement(Rt,null,"Subject:"),r.a.createElement(It,{type:"text",name:"subject",id:"subject",placeholder:"Enter the subject",value:n.subject,onChange:h}),r.a.createElement(It,{type:"mapleSyrup",name:"mapleSyrup",id:"mapleSyrup",value:n.mapleSyrup,onChange:h,className:"mapleSyrup"}),r.a.createElement(Rt,null,"Your message:"),r.a.createElement("textarea",{name:"message",id:"message",placeholder:"Type your Message here.",rows:"10",value:n.message,style:{width:"100%"},onChange:h}),r.a.createElement(Pt,{type:"submit"},"Send Form")),s?r.a.createElement("h4",null,"Thank you, your form has been sent!"):null,f.map((function(e){return r.a.createElement("h4",null,"Please fix the ",e," field in the form")}))))}var Tt=f.a.div(Dt()),Mt=f.a.form(Ct()),Rt=f.a.label(St()),It=f.a.input(Ot()),Pt=f.a.button(kt());function Lt(){var e=Object(p.a)(["\n  color: white;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  &:hover {\n    color: #c46c00;\n  }\n"]);return Lt=function(){return e},e}function At(){var e=Object(p.a)(["\n  margin: 20px;\n  cursor: default;\n  \n"]);return At=function(){return e},e}function Gt(){var e=Object(p.a)(["\n  border-top: 2px solid white;\n  display: grid;\n  \n  grid-template-columns: 1fr 1fr;\n  text-align: center;\n  grid-template-rows: 0.6fr 0.5fr;\n  cursor: default;\n"]);return Gt=function(){return e},e}function zt(){var e=Object(p.a)(["\n  color: white;\n  text-decoration: none;\n  text-align: center;\n  &:hover {\n    color: #c46c00;\n  }\n"]);return zt=function(){return e},e}function Bt(){var e=Object(p.a)(["\n  \n"]);return Bt=function(){return e},e}var _t=f.a.div(Bt()),Jt=f.a.a(zt()),Wt=f.a.div(Gt()),Ft=f.a.div(At()),Yt=f.a.span(Lt());function Zt(){return r.a.createElement(_t,null,r.a.createElement("h2",null,"Resume"),r.a.createElement(Wt,null,r.a.createElement(Ft,null,r.a.createElement(Jt,{href:"https://www.jamesanderegg.com/uploads/jamesAndereggResume.pdf",download:"James_Anderegg_Resume"},r.a.createElement("i",{className:"far fa-file fa-4x resume-button"}),r.a.createElement("h3",null,"Download PDF Resume"))),r.a.createElement(Ft,null,r.a.createElement(Jt,{href:"https://drive.google.com/file/d/1wWPpbAjWxnnl9G_siPrZ6SH0p1Gd1WH2/view?usp=sharing",target:"_blank"},r.a.createElement("i",{class:"fab fa-google fa-4x"}),r.a.createElement("h3",null,"Google Link Resume"))),r.a.createElement(Ft,{onClick:function(e){return window.open("https://github.com/jamesanderegg")}},r.a.createElement(Yt,null,r.a.createElement("i",{className:"github fab fa-github fa-4x"}),r.a.createElement("h3",null,"GitHub Code"))),r.a.createElement(Ft,{onClick:function(){return navigator.clipboard.writeText("jamesanderegg@jamesanderegg.com")}},r.a.createElement(Yt,null,r.a.createElement("i",{className:"email fas fa-at fa-4x"}),r.a.createElement("h3",null," Email: Copy to clickboard")))))}var Qt=[{name:"About",component:r.a.createElement(fe,null),id:"about"},{name:"Skills",component:r.a.createElement(Pe,null),id:"skills"},{name:"Projects",component:r.a.createElement(yt,null),id:"projects"},{name:"Contact me",component:r.a.createElement(Nt,null),id:"contact"},{name:"My Resume",component:r.a.createElement(Zt,null),id:"resume"}],Vt=(n(140),function(e){var t=e.show,n=(e.click,e.pageData),a="side-panel";return t&&(a="side-panel open"),r.a.createElement("nav",{className:a},r.a.createElement("ul",null,r.a.createElement("h2",{onClick:function(){l.animateScroll.scrollToTop()}},"Scroll to top"),n.map((function(e,t){return r.a.createElement("li",{className:"side-item",key:"side-".concat(e.name).concat(t)},r.a.createElement(l.Link,{activeClass:"active",to:e.id,spy:!0,smooth:!0,offset:-70,duration:500},e.name))}))))}),Ht=(n(141),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.click})}),Ut=n(3);function qt(){var e=Object(p.a)(["\n  margin: 20px;\n  a {\n    background-color: rgba(26, 91, 230, 0.8);\n    border-radius: 3px;\n\n    cursor: pointer;\n    color: #ffffff;\n    font-size: 18px;\n    padding: 9px 23px;\n    text-decoration: none;\n    text-shadow: 0px 1px 0px #263666;\n  }\n  a:hover {\n    background-color: #0688fa;\n  }\n"]);return qt=function(){return e},e}var Xt=f.a.div(qt()),$t=Object(Ut.f)((function(e){var t=e.registerProjectLoaded;return(r.a.createElement(Xt,null,r.a.createElement(Ye.b,{to:"/",onClick:t},"\u2190 Back")))}));function Kt(){var e=Object(p.a)(["\n    \n    justify-items:center;\n    align-items:center;\n"]);return Kt=function(){return e},e}function en(){var e=Object(p.a)(["\n\n  text-align: center;\n\n"]);return en=function(){return e},e}var tn=f.a.div(en()),nn=f.a.span(Kt());function an(){return r.a.createElement(tn,null,r.a.createElement(nn,null,r.a.createElement("h3",null,"\xa9 James Anderegg 2020")),r.a.createElement("span",null,r.a.createElement("h4",null,"(DBA) DataFluent")))}var rn=function(){var e,t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],o=n[1],l=function(){o(!1)},s=function(e){return!(e%2)};return c&&(e=r.a.createElement(Ht,{click:l})),r.a.createElement(Ye.a,null,r.a.createElement(Ut.c,null,X.map((function(e){return r.a.createElement(Ut.a,{path:"/".concat(e.id),key:"route-".concat(e.id)},r.a.createElement(r.a.Fragment,null,r.a.createElement($t,null),e.component))})),r.a.createElement(Ut.a,{path:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(u,{pageData:Qt,sidePanelClickHandler:function(){o((function(e){return console.log("previous SIDEPANEL:",e),!e}))}}),r.a.createElement(Vt,{pageData:Qt,show:c,click:l}),e,Qt.map((function(e,t){return r.a.createElement(m,{title:e.name,subtitle:"",dark:s(t),id:e.id,component:e.component,key:"section-".concat(e.name).concat(t)})}))))),r.a.createElement(an,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(rn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},96:function(e,t,n){e.exports=n(142)}},[[96,1,2]]]);
//# sourceMappingURL=main.6640a462.chunk.js.map