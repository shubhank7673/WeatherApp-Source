(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{1:function(t,e,a){t.exports={bgvideo:"weather_bgvideo__2sRG7",mainContent:"weather_mainContent__360Nm",mainContainer:"weather_mainContainer__1tgg6",todayData:"weather_todayData__3UR8f",inputDiv:"weather_inputDiv__1pBTn",inputBox:"weather_inputBox__1r53u",button:"weather_button__2taen",loading:"weather_loading__1ifZc",forecastTab:"weather_forecastTab__36ai3",innerForecastTab:"weather_innerForecastTab__jTEOi",date:"weather_date__zre9q"}},23:function(t,e,a){},24:function(t,e,a){},44:function(t,e,a){"use strict";a.r(e);var i=a(3),s=a.n(i),n=a(14),c=a.n(n),d=(a(23),a.p,a(24),a(4)),o=a.n(d),r=a(15),l=a(16),h=a(18),p=a(17),m=a.p+"static/media/d10.443d4fc3.mp4",u=a.p+"static/media/d20.293b27f1.mp4",j=a.p+"static/media/d30.3d6df54f.mp4",f=a.p+"static/media/d40.ea963d2c.mp4",b=a.p+"static/media/d90.a74f75c1.mp4",g=a.p+"static/media/d01.e620cf40.mp4",x=a.p+"static/media/d11.1ac22f4b.mp4",v=a.p+"static/media/d31.9543c939.mp4",O=a.p+"static/media/d05.3f10e5ff.mp4",_=a.p+"static/media/default.e6955a57.mp4",C=a.p+"static/media/n40.c61803fe.mp4",w=a(0),y={n40:C,d01:g,d10:m,d20:u,d30:j,d40:f,d90:b,d11:x,d31:v,d05:O,def:_};var N=function(t){return Object(w.jsx)("video",{className:"videoTag",styles:{overflow:"hidden"},autoPlay:!0,loop:!0,muted:!0,children:Object(w.jsx)("source",{src:y[t.name],type:"video/mp4"})},y[t.name])},F=a(1),A=a.n(F),T=a.p+"static/media/loading.a73d053d.gif",S=function(t){return console.log("props",t),Object(w.jsxs)("div",{className:A.a.innerForecastTab,children:[Object(w.jsx)("div",{children:t.time}),Object(w.jsx)("div",{children:"K"==t.unit?t.temp+"K":t.temp+"C"}),Object(w.jsx)("div",{children:t.data.weather[0].main}),Object(w.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(t.data.weather[0].icon,".png")})]})},D=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).handleCityChange=function(e){t.setState({city:e.target.value,data:"",error:""},(function(){console.log(t.state.city)}))},t.handleClick=function(){t.setState({loading:1}),o.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t.state.city,"&appid=1559cd6fa80fdc2f7acd52f4eba147ce")).then((function(e){console.log(e),t.setState({data:e.data,loading:0})})).catch((function(e){t.setState({error:"Not found",loading:0})})),o.a.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t.state.city,"&appid=1559cd6fa80fdc2f7acd52f4eba147ce")).then((function(e){console.log("here");var a=[];e=e.data;for(var i=0;i<e.list.length;i++){for(var s=[];i+1<e.list.length&&e.list[i].dt_txt.split(" ")[0]===e.list[i+1].dt_txt.split(" ")[0];)s.push(e.list[i]),i++;s.push(e.list[i]),console.log(s),a.push(s)}console.log(a);for(var n=[],c=[],d=[],o=0;o<a.length;o++)d.push(a[o][0].dt_txt.split(" ")[0]);c=a[0].map((function(e){return Object(w.jsx)(S,{temp:"C"==t.state.unit?(e.main.temp-273.15).toFixed(1):e.main.temp.toFixed(1),time:e.dt_txt.split(" ")[1],unit:t.state.unit,data:e})})),n.push(c),c=a[1].map((function(e){return Object(w.jsx)(S,{temp:"C"==t.state.unit?(e.main.temp-273.15).toFixed(1):e.main.temp.toFixed(1),time:e.dt_txt.split(" ")[1],unit:t.state.unit,data:e})})),n.push(c),c=a[2].map((function(e){return Object(w.jsx)(S,{temp:"C"==t.state.unit?(e.main.temp-273.15).toFixed(1):e.main.temp.toFixed(1),time:e.dt_txt.split(" ")[1],unit:t.state.unit,data:e})})),n.push(c),c=a[3].map((function(e){return Object(w.jsx)(S,{temp:"C"==t.state.unit?(e.main.temp-273.15).toFixed(1):e.main.temp.toFixed(1),time:e.dt_txt.split(" ")[1],unit:t.state.unit,data:e})})),n.push(c),t.setState({forecastArr:n,dateArr:d})}))},t.getDataByLocation=function(){navigator.geolocation.getCurrentPosition((function(e){console.log("Latitude is :",e.coords.latitude),console.log("Longitude is :",e.coords.longitude),o.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.coords.latitude,"&lon=").concat(e.coords.longitude,"&appid=1559cd6fa80fdc2f7acd52f4eba147ce")).then((function(e){console.log(e),t.setState({data:e.data})}))}))},t.changeUnit=function(){t.setState({unit:"C"===t.state.unit?"K":"C"})},t.state={city:"",data:"",unit:"C",error:"",loading:0,forecastArr:[],dateArr:[]},console.log(S),t}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(w.jsxs)("div",{className:A.a.mainContainer,children:[Object(w.jsx)("div",{className:A.a.bgvideo,children:Object(w.jsx)(N,{name:""==this.state.data?"def":this.state.data.weather[0].icon.split("").reverse().join("")})}),Object(w.jsxs)("div",{className:A.a.mainContent,children:[Object(w.jsxs)("div",{className:A.a.inputDiv,children:[Object(w.jsx)("input",{className:A.a.inputBox,value:this.state.city,onChange:function(e){t.handleCityChange(e)},placeholder:"City"}),Object(w.jsx)("h1",{children:Object(w.jsx)("button",{className:A.a.button,onClick:this.handleClick,children:0==this.state.loading?"Search":Object(w.jsx)("img",{src:T,className:A.a.loading})})})]}),""!=this.state.data?Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:A.a.todayData,children:[Object(w.jsxs)("h1",{style:{fontSize:"50px"},children:[""==this.state.data?"":"C"===this.state.unit?(this.state.data.main.temp-273.15).toFixed(1):this.state.data.main.temp.toFixed(1),"\xb0",this.state.unit]}),Object(w.jsxs)("h2",{children:[""==this.state.data?"":this.state.data.weather[0].main," ","| ",this.state.data.main.humidity,"% humid |"," ",this.state.data.wind.speed,"km/hr"]})]}),Object(w.jsxs)("div",{className:A.a.forecastDiv,children:[Object(w.jsxs)("div",{className:A.a.forecastTab,children:[Object(w.jsx)("div",{className:A.a.date,children:this.state.dateArr[1]?this.state.dateArr[1].split("-").reverse().join("-"):""}),this.state.forecastArr[1]]}),Object(w.jsxs)("div",{className:A.a.forecastTab,children:[Object(w.jsx)("div",{className:A.a.date,children:this.state.dateArr[2]?this.state.dateArr[2].split("-").reverse().join("-"):""}),this.state.forecastArr[2]]}),Object(w.jsxs)("div",{className:A.a.forecastTab,children:[Object(w.jsx)("div",{className:A.a.date,children:this.state.dateArr[3]?this.state.dateArr[3].split("-").reverse().join("-"):""}),this.state.forecastArr[3]]})]})]}):this.state.error]})]})}}]),a}(i.Component),k=a.p+"static/media/bg.10c90012.jpg";var B=function(){return Object(w.jsx)("div",{className:"App",style:{backgroundImage:"url(".concat(k,")")},children:Object(w.jsx)(D,{})})},L=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(e){var a=e.getCLS,i=e.getFID,s=e.getFCP,n=e.getLCP,c=e.getTTFB;a(t),i(t),s(t),n(t),c(t)}))};c.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(B,{})}),document.getElementById("root")),L()}},[[44,1,2]]]);
//# sourceMappingURL=main.b277078c.chunk.js.map