(window.webpackJsonpclicky=window.webpackJsonpclicky||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(9),i=a.n(n),s=a(1),o=a(2),l=a(4),d=a(3),p=a(5),m=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light fixed-top"},r.a.createElement("h1",{className:"title"},"Clicky game"),r.a.createElement("h1",{className:"score"},"Score: ",this.props.score," | Top Score: ",this.props.topscore))}}]),t}(c.Component);var u=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid "},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Clicky Game!"),r.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!")))};var f=function(){return r.a.createElement("footer",{className:"footer mt-auto py-3"},r.a.createElement("div",{className:"container"},r.a.createElement("span",null,"AL productions")))},b=a(7),h=[{id:1,url:"https://i.pinimg.com/564x/f0/2e/02/f02e020e25005f7f10263fadc922b687.jpg"},{id:2,url:"https://i.pinimg.com/564x/fd/98/db/fd98db858df6ddd6e70182d17a8ae448.jpg"},{id:3,url:"https://i.pinimg.com/564x/47/89/71/4789719e6ff5f9084cb3c005376af5f3.jpg"},{id:4,url:"https://i.pinimg.com/564x/f6/1a/bc/f61abc14604758ae30df9d6fa0423462.jpg"},{id:5,url:"https://i.pinimg.com/564x/04/bf/f7/04bff7eb9fa04fb5a3060c33821cfd95.jpg"},{id:6,url:"https://i.pinimg.com/564x/f5/be/55/f5be5505add1140d935952cd374a9cb6.jpg"},{id:7,url:"https://i.pinimg.com/564x/71/a2/72/71a272127bba9e0710326187ee723e01.jpg"},{id:8,url:"https://i.pinimg.com/564x/0e/dd/b3/0eddb3091558dd215a38ec90897ca5db.jpg"},{id:9,url:"https://i.pinimg.com/564x/8b/06/de/8b06dec0bc33798d405ae5fab83acb92.jpg"},{id:10,url:"https://i.pinimg.com/564x/65/8a/76/658a76250c2ac64961729e28e4ae1efa.jpg"},{id:11,url:"https://i.pinimg.com/564x/3c/fe/c1/3cfec1ae0ae3f0ab5f2e63c9b17dc51f.jpg"},{id:12,url:"https://i.pinimg.com/564x/b1/5b/a0/b15ba01336ef539c546b5dec43ad93ae.jpg"}],g=a(6),y=a.n(g),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={dataArray:[],displayArray:[],clicked:[],score:0,topscore:0},a.displayimages=function(){var e=a.state.dataArray;return y.a.shuffle(e).map((function(e){var t=e.id,c=e.url;return r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:c,key:t,id:t,alt:" card n# ".concat(t),className:"img-thumbnail",onClick:function(e){a.handleClick(e),a.props.getScore(a.state.score,a.state.topscore)}}))}))},a.handleClick=function(e){var t=e.target.id;a.setState((function(e){if(y.a.isEmpty(e.clicked)){return[].push(t),{score:1,clicked:[].concat(Object(b.a)(a.state.clicked),[t]),displayArray:a.displayimages()}}if(e.clicked.includes(t))return e.topscore<e.score&&(e.topscore=e.score),{topscore:e.topscore,score:0,clicked:[],displayArray:a.displayimages()};var c=e.score+1;return{clicked:[].concat(Object(b.a)(a.state.clicked),[t]),score:c,displayArray:a.displayimages()}}))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({dataArray:h})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container maincontainer"},r.a.createElement("div",{className:"row"},0===this.state.displayArray.length?this.displayimages():this.state.displayArray))}}]),t}(c.Component),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={score:0,topscore:0},a.getScore=function(e,t){a.setState({score:e,topscore:t})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,{score:this.state.score,topscore:this.state.topscore}),r.a.createElement(u,null),r.a.createElement(j,{getScore:this.getScore}),r.a.createElement(f,null))}}]),t}(c.Component);i.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.5a934929.chunk.js.map