(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(58)},34:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(24),r=a.n(o),c=(a(34),a(6)),i=a(7),u=a(10),s=a(8),d=a(9),m=a(61),h=a(59),b=a(62),p=a(60),v=a(17),E=a(11),O=a(63),j=a(12),f=a.n(j);f.a.defaults.headers.post["Content-Type"]="application/json";var y="https://ethanwang-backend.herokuapp.com/posts",g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={id:e.value._id,title:e.value.title,body:e.value.body,date:e.value.date,lastUpdate:e.value.lastUpdate,numComments:e.value.numComments},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,{to:"/blog/posts/"+this.state.id},l.a.createElement("h1",null,this.state.title)),l.a.createElement("p",null,this.state.body),l.a.createElement("p",null,"Posted on: ",this.state.date),l.a.createElement("p",null,"Comments: ",this.state.numComments))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={id:e.match.params.id,error:null,isLoaded:!1,data:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get(y+"/"+this.state.id).then(function(t){e.setState({isLoaded:!0,data:t.data})}).catch(function(t){e.setState({isLoaded:!0,error:t.response.data})})}},{key:"render",value:function(){var e=this.state,t=e.id,a=e.error,n=e.isLoaded,o=e.data;return a?l.a.createElement("div",null,"Error: ",a.message):n?l.a.createElement("div",null,l.a.createElement("h1",null,o.title),l.a.createElement("p",null,o.body),l.a.createElement("p",null,"Posted on: ",o.date),l.a.createElement("hr",null),l.a.createElement(S,{value:t}),l.a.createElement("hr",null),l.a.createElement(w,{value:t})):l.a.createElement("div",null,"Loading...")}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={title:"",body:""},a.handleChangeField=a.handleChangeField.bind(Object(E.a)(Object(E.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChangeField",value:function(e,t){this.setState(Object(v.a)({},e,t.target.value))}},{key:"handleSubmit",value:function(){var e=this,t=this.state,a=t.title,n=t.body;f.a.post(y+"/new",{title:a,body:n}).then(function(t){e.props.history.push("/blog/posts/"+t.data.id)}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.body;return l.a.createElement("div",null,l.a.createElement("input",{value:a,onChange:function(t){return e.handleChangeField("title",t)},placeholder:"Post Title"}),l.a.createElement("textarea",{value:n,onChange:function(t){return e.handleChangeField("body",t)},placeholder:"Post Body"}),l.a.createElement("button",{onClick:this.handleSubmit},"Submit"))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={postId:e.value,error:null,isLoaded:!1,comments:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get(y+"/"+this.state.postId+"/comments").then(function(t){e.setState({isLoaded:!0,comments:t.data.comments})}).catch(function(t){e.setState({isLoaded:!0,error:t.response.data})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.comments;return t?l.a.createElement("div",null,"Error: ",t.message):a?n.map(function(e){return l.a.createElement("div",{key:e._id},l.a.createElement("p",null,e.body),l.a.createElement("p",null,"Posted on: ",e.date))}):l.a.createElement("div",null,"Loading...")}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={postId:e.value,body:""},a.handleChangeField=a.handleChangeField.bind(Object(E.a)(Object(E.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChangeField",value:function(e,t){this.setState(Object(v.a)({},e,t.target.value))}},{key:"handleSubmit",value:function(){var e=this,t=this.state,a=t.postId,n=t.body;f.a.post(y+"/"+a+"/comments/new",{body:n}).then(function(t){e.setState({body:""})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.body;return l.a.createElement("div",null,l.a.createElement("textarea",{value:t,onChange:function(t){return e.handleChangeField("body",t)},placeholder:"Comment Body"}),l.a.createElement("button",{onClick:this.handleSubmit},"Submit"))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={error:null,isLoaded:!1,posts:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get(y).then(function(t){e.setState({isLoaded:!0,posts:t.data.posts})}).catch(function(t){e.setState({isLoaded:!0,error:t.response.data})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.posts;return t?l.a.createElement("div",null,"Error: ",t.message):a?n.map(function(e){return l.a.createElement(g,{key:e._id,value:e})}):l.a.createElement("div",null,"Loading...")}}]),t}(n.Component),F=Object(O.a)(C),x=Object(O.a)(k),P=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"About"),l.a.createElement("p",null,"My name is Ethan Wang."),l.a.createElement("p",null,"Website TODO list:"),l.a.createElement("ul",null,l.a.createElement("li",null,"new posts"),l.a.createElement("li",null,"new comments"),l.a.createElement("li",null,"sidebar menu"),l.a.createElement("li",null,"comment chains"),l.a.createElement("li",null,"q&a section?")))}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome!"))}}]),t}(n.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(h.a,{to:"/"},"Home"),l.a.createElement(h.a,{to:"/blog/"},"Blog"),l.a.createElement(h.a,{to:"/blog/new"},"New Post"),l.a.createElement(h.a,{to:"/about/"},"About"),l.a.createElement(b.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:B}),l.a.createElement(p.a,{exact:!0,path:"/blog/",component:L}),l.a.createElement(p.a,{exact:!0,path:"/about/",component:P}),l.a.createElement(p.a,{exact:!0,path:"/blog/posts/:id",component:F}),l.a.createElement(p.a,{exact:!0,path:"/blog/new",component:x}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.7514d608.chunk.js.map