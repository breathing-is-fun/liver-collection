(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{123:function(e,t,n){(e.exports=n(55)(!1)).push([e.i,".white-space {\r\n    margin-top: 8px;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}",""])},124:function(e,t,n){var r=n(123);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(54)(r,a);r.locals&&(e.exports=r.locals)},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this;this.get=function(t){var n="store."+e.name+"."+t;if(null!==localStorage.getItem(n))try{return JSON.parse(localStorage.getItem(n))}catch(e){return null}},this.set=function(t,n){if(void 0===n)e.remove(t);else{if("function"==typeof n)n=null;else try{n=JSON.stringify(n)}catch(e){n=null}localStorage.setItem("store."+e.name+"."+t,n)}return e},this.remove=function(t){return localStorage.removeItem("store."+e.name+"."+t),e},this.removeAll=function(){for(var t="store."+e.name+".",n=localStorage.length-1;n>=0;n--)localStorage.key(n).substring(0,t.length)===t&&localStorage.removeItem(localStorage.key(n));return e},this.toObject=function(){for(var t={},n=void 0,r=void 0,a="store."+e.name+".",o=localStorage.length-1;o>=0;o--)localStorage.key(o).substring(0,a.length)===a&&(n=localStorage.key(o).substring(a.length),void 0!==(r=e.get(n))&&(t[n]=r));return t},this.fromObject=function(t,n){for(var r in!0!==n&&e.removeAll(),t)t.hasOwnProperty(r)&&e.set(r,t[r]);return e}};t.default=function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r.call(this),this.name=t,void 0!==n)for(var a in n)n.hasOwnProperty(a)&&void 0===this.get(a)&&this.set(a,n[a])}},195:function(e,t,n){(e.exports=n(55)(!1)).push([e.i,".Option{}",""])},196:function(e,t,n){var r=n(195);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(54)(r,a);r.locals&&(e.exports=r.locals)},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(126)),a=s(n(146)),o=s(n(69));n(87),n(145),n(68);var l=n(1),i=s(l),u=s(n(59)),c=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n(5)),s(n(13)));function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=(chrome.extension?chrome.extension.getBackgroundPage():{store:new c.default}).store,p=function(e){function t(){var e,n,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,s=Array(c),p=0;p<c;p++)s[p]=arguments[p];return n=l=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),l.handleApLimit=function(e){return d.set("entrySceneApLowerLimit",e)},l.handleHref=function(e){return d.set("sceneHref",e)},l.render=function(){return i.default.createElement("div",{className:"EntryScene",style:{marginLeft:"1%",marginTop:10}},i.default.createElement(o.default,{title:"当ap小于这个值时，会吃一个小红，默认为40"},i.default.createElement("span",null,"AP下限：   ")),i.default.createElement(a.default,{onChange:l.handleApLimit,defaultValue:d.get("entrySceneApLowerLimit")}),i.default.createElement(u.default,null),i.default.createElement(o.default,{title:"这里填一个完整地址，比如http://game.granbluefantasy.jp/#quest/supporter/730571/1，按d键时会跳到这个地址并自动吃药"},i.default.createElement("span",null,"跳转地址：")),i.default.createElement(r.default,{style:{width:400},onChange:l.handleHref,defaultValue:d.get("sceneHref")}))},f(l,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),t}();t.default=p},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(78)),a=f(n(69)),o=f(n(146)),l=f(n(120));n(77),n(68),n(145),n(105);var i=n(1),u=f(i),c=f(n(59)),s=f(n(13));function f(e){return e&&e.__esModule?e:{default:e}}(chrome.extension?chrome.extension.getBackgroundPage():{store:new s.default}).store;var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleHomework=function(){var e=n.state.groupId;n.setState({loading:!0}),chrome.tabs.query({active:!1},function(t){var n=void 0,r=!0,a=!1,o=void 0;try{for(var l,i=t[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var u=l.value,c=u.id;u.url;if(u.url.includes("game")){n=c;break}}}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}chrome.tabs.connect(n,{name:"popup_to_content"}).postMessage({message:"check_homework",groupId:e})});var t=void 0;t=setInterval(function(){window.memberDatas&&window.memberDatas.length>0&&(n.setState({dataSource:window.memberDatas,loading:!1}),clearInterval(t))},800)},n.handleGroupId=function(e){return n.setState({groupId:e})},n.render=function(){var e=n.state,t=e.dataSource,i=e.loading,s=u.default.createElement(l.default,{dataSource:t,columns:n.columns,rowKey:"id"});return u.default.createElement("div",{className:"CheckHomework",style:{marginLeft:"1%"}},u.default.createElement("div",{style:{marginRight:10,display:"inline"}},u.default.createElement(a.default,{title:"这里输入团id，不填默认看自己团的"},u.default.createElement(o.default,{onChange:n.handleGroupId}))),u.default.createElement(a.default,{title:"本战未开始时，数据会有误差。因为时间是从当天早上五点开始计算贡献的，预选期间因为当日贡献度清零不在五点，所以会产生误差，也就是当日贡献这列可以不看，但总贡献始终都是准的"},u.default.createElement(r.default,{loading:i,type:"primary",onClick:n.handleHomework},"检查当天本战作业")),u.default.createElement(c.default,null),t&&0!=t.length&&s)},n.columns=[{title:"名字",dataIndex:"name",key:"name"},{title:"id",dataIndex:"id",key:"id"},{title:"等级",dataIndex:"level",key:"level"},{title:"当日贡献",dataIndex:"singleDayPoint",key:"singleDayPoint"},{title:"累计贡献",dataIndex:"totalPoint",key:"totalPoint"},{title:"排名",dataIndex:"rank",key:"rank"},{title:"上次登录时间",dataIndex:"last_login",key:"last_login"},{title:"最后更新时间",dataIndex:"timeStamp",key:"timeStamp"}],n.state={dataSource:[],loading:!1,groupId:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}();t.default=d},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(93)),a=c(n(69));n(88),n(68);var o=n(1),l=c(o),i=c(n(59)),u=c(n(13));function c(e){return e&&e.__esModule?e:{default:e}}var s=(chrome.extension?chrome.extension.getBackgroundPage():{store:new u.default}).store,f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handleSwitchOnChange=function(e,t){s.set(e,t),"isMultil"==e&&chrome.browserAction.setPopup({popup:t?"":"index.html"}),n.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))},n.render=function(){var e=n.state,t=e.isMultil,o=e.isListenBoard;e.isListenBp,e.isRape;return l.default.createElement("div",{className:"MultiBattle",style:{marginLeft:"1%"}},l.default.createElement(a.default,{title:"开启该选项时，点击icon将不会点开面板，而会照着下方几个选项决定行为，默认为读取剪切板中内容请求battle信息，不报错则进房"},l.default.createElement("span",{style:{float:"left",color:"#666"}},"是否开启舔婊模式")),l.default.createElement(r.default,{onChange:function(e){return n.handleSwitchOnChange("isMultil",e)},checked:t,style:{float:"right",marginRight:"85%"}}),l.default.createElement(i.default,{clear:!0}),l.default.createElement(a.default,{title:"开启该选项时，当你的剪切板内容发生变化且内容像battle id时，会直接进房，而不用点icon。初次开启时，两个窗口都需要刷新下"},l.default.createElement("span",{style:{float:"left",color:"#666"}},"是否监视剪切板")),l.default.createElement(r.default,{onChange:function(e){return n.handleSwitchOnChange("isListenBoard",e)},checked:o,disabled:!t,style:{float:"right",marginRight:"85%"}}),l.default.createElement(i.default,{clear:!0}))},n.state={isMultil:s.get("isMultil"),isListenBoard:s.get("isListenBoard"),isListenBp:s.get("isListenBp"),isRape:s.get("isRape")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=f},203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(93)),a=c(n(69));n(88),n(68);var o=n(1),l=c(o),i=c(n(59)),u=c(n(13));function c(e){return e&&e.__esModule?e:{default:e}}var s=(chrome.extension?chrome.extension.getBackgroundPage():{store:new u.default}).store,f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handleSwitchOnChange=function(e){s.set("isScrollStyleShow",e),chrome.extension&&chrome.tabs.query({active:!0,currentWindow:!0},function(t){chrome.tabs.connect(t[0].id,{name:"popup_to_content"}).postMessage({message:"scroll_style_status",status:e})})},n.render=function(){var e=n.state.checked;return l.default.createElement("div",{className:"ScrollOptions"},l.default.createElement("div",{style:{marginLeft:"1%"}},l.default.createElement(a.default,{title:"开启该选项时，你鼠标移到滚动条附近，滚动条会变粗三秒"},l.default.createElement("span",{style:{float:"left",color:"#666"}},"滚动条样式变化")),l.default.createElement(r.default,{onChange:n.handleSwitchOnChange,defaultChecked:e,style:{float:"right",marginRight:"85%"}}),l.default.createElement(i.default,{clear:!0})),l.default.createElement(i.default,{clear:!0}))},n.state={checked:s.get("isScrollStyleShow")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=f},204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(93));n(88);var a=n(1),o=u(a),l=u(n(59)),i=u(n(13));function u(e){return e&&e.__esModule?e:{default:e}}var c=(chrome.extension?chrome.extension.getBackgroundPage():{store:new i.default}).store,s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handleCoopraidSwitch=function(e,t){c.set(t,e),chrome.extension&&chrome.tabs.query({active:!0,currentWindow:!0},function(n){chrome.tabs.connect(n[0].id,{name:"popup_to_content"}).postMessage({message:"sider_status",type:t,status:e})})},n.render=function(){var e=n.state,t=e.leftChecked,a=e.rightChecked;return o.default.createElement("div",{className:"SiderOptions"},o.default.createElement("div",{style:{marginLeft:"1%"}},o.default.createElement("span",{style:{float:"left",color:"#666"}},"左侧面板"),o.default.createElement(r.default,{onChange:function(e){return n.handleCoopraidSwitch(e,"isLeftSiderShow")},defaultChecked:t,style:{float:"right",marginRight:"85%"}}),o.default.createElement("div",{style:{clear:"both"}})),o.default.createElement(l.default,null),o.default.createElement("div",{style:{marginLeft:"1%"}},o.default.createElement("span",{style:{float:"left",color:"#666"}},"右侧面板"),o.default.createElement(r.default,{onChange:function(e){return n.handleCoopraidSwitch(e,"isRightSiderShow")},defaultChecked:a,style:{float:"right",marginRight:"85%"}}),o.default.createElement("div",{style:{clear:"both"}})),o.default.createElement(l.default,null))},n.state={leftChecked:c.get("isLeftSiderShow"),rightChecked:c.get("isRightSiderShow")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),t}();t.default=s},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(78)),a=d(n(126)),o=d(n(122)),l=d(n(111));n(77),n(87),n(106),n(148);var i=n(1),u=d(i),c=d(n(59)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5)),f=d(n(13));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var h=l.default.Option,m=(chrome.extension?chrome.extension.getBackgroundPage():{store:new f.default}).store,y="http://game.granbluefantasy.jp/item/article_list_by_filter_mode",g="http://game.granbluefantasy.jp/item/recovery_and_evolution_list_by_filter_mode",v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handleAddress=function(e){return n.setState({address:e.target.value})},n.handleHeadAddress=function(e){return n.setState({headAddress:e})},n.handleUpload=function(){var e=n.state,t=e.headAddress,r=e.address;m.set("address",r),m.set("headAddress",t),n.setState({btnLoading:!0});var a=m.get("userId");if(!a)return o.default.open({message:"非法操作",description:"没获得到userId",duration:3}),void n.setState({btnLoading:!1});s.getByCookie(y,{},function(e){s.getByCookie(g,{},function(l){l=n.steamRoller(l),e=[].concat(p(e),p(l));var i="user_id="+a+"&data="+JSON.stringify(e);s.uploadToServer(""+t+r+"/Memo/gbf/i_item.do",{body:i},function(e){"success"==e&&o.default.open({message:"上传成功",description:"",duration:3}),n.setState({btnLoading:!1})})})})},n.steamRoller=function(e){var t=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var u=l.value;Array.isArray(u)?t.push.apply(t,n.steamRoller(u)):t.push(u)}}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return t},n.render=function(){var e=n.state,t=e.address,o=e.headAddress,i=e.btnLoading,s=u.default.createElement(l.default,{defaultValue:o,style:{width:90},onChange:n.handleHeadAddress},u.default.createElement(h,{value:"http://"},"http://"),u.default.createElement(h,{value:"https://"},"https://"),u.default.createElement(h,{value:"ftp://"},"ftp://"));return u.default.createElement("div",{className:"UploadItems",style:{marginLeft:"1%"}},u.default.createElement("span",null,"上传地址："),u.default.createElement(a.default,{addonBefore:s,style:{width:"20%"},onChange:n.handleAddress,value:t}),u.default.createElement(r.default,{type:"primary",loading:i,onClick:n.handleUpload,style:{marginLeft:"2%",width:"15%"}},"上传素材"),u.default.createElement(c.default,null))},n.state={address:m.get("address"),headAddress:m.get("headAddress"),btnLoading:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}();t.default=v},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(n(63)),a=m(n(220)),o=m(n(149)),l=m(n(218));n(215),n(214),n(211),n(208);var i=n(1),u=m(i),c=m(n(205)),s=m(n(204)),f=m(n(203)),d=m(n(202)),p=m(n(201)),h=m(n(197));function m(e){return e&&e.__esModule?e:{default:e}}n(196);var y=l.default.Content,g=l.default.Footer,v=l.default.Sider,b=(o.default.SubMenu,function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handleMenuItem=function(e){e.item;var t=e.key;e.keyPath;n.setState({key:t})},n.render=function(){var e=n.state,t=(e.collapsed,e.key),i=u.default.createElement(y,{style:{margin:"0 16px"}},u.default.createElement(a.default,{style:{margin:"16px 0"}},u.default.createElement(a.default.Item,null,"通用设置")),u.default.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},u.default.createElement(s.default,null),u.default.createElement(f.default,null),u.default.createElement(p.default,null))),m=u.default.createElement(y,{style:{margin:"0 16px"}},u.default.createElement(a.default,{style:{margin:"16px 0"}},u.default.createElement(a.default.Item,null,"战斗相关")),u.default.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},u.default.createElement(d.default,null),u.default.createElement(h.default,null))),b=u.default.createElement(y,{style:{margin:"0 16px"}},u.default.createElement(a.default,{style:{margin:"16px 0"}},u.default.createElement(a.default.Item,null,"记录上传")),u.default.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},u.default.createElement(c.default,null)));return u.default.createElement(l.default,{style:{minHeight:"100vh"}},u.default.createElement(v,{collapsible:!0},u.default.createElement("div",{className:"logo"}),u.default.createElement(o.default,{theme:"dark",defaultSelectedKeys:[t],mode:"inline"},_.map(function(e){var t=e.key,a=e.type,l=e.text;return u.default.createElement(o.default.Item,{key:t,onClick:n.handleMenuItem},u.default.createElement(r.default,{type:a}),u.default.createElement("span",null,l))}))),u.default.createElement(l.default,null,0==t&&i,1==t&&m,2==t&&b,u.default.createElement(g,{style:{textAlign:"center"}},u.default.createElement("div",null,"贫穷使我们相遇，但后来，你却发出了母猪的声音。而我，只想为你豹跳一曲，如花净土..."),u.default.createElement("div",null,"Poverty makes us meet, but later, only you come out of the closet. But for me, I just want to marry to you..."))))},n.state={key:"0"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}());t.default=b;var _=[{key:0,type:"desktop",text:"通用设置"},{key:1,type:"team",text:"战斗相关"},{key:2,type:"upload",text:"记录上传"}]},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.uploadToServer=function(e,t,n){if(e){var r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};r=Object.assign(r,t),fetch(e,r).then(function(e){return e.text()}).then(function(e){return n(e)}).catch(function(e){console.log(e)})}},t.getByCookie=function(e,t,n){if(e){var r={credentials:"include"};r=Object.assign(r,t),fetch(e,r).then(function(e){return e.json()}).then(function(e){return n(e)}).catch(function(e){console.log(e)})}},t.postByCookie=function(e,t,n){if(e){var r={method:"POST",credentials:"include",headers:{"Content-Type":"application/json; charset=UTF-8"}};r=Object.assign(r,t),fetch(e,r).then(function(e){return console.log(e),e.text()}).then(function(e){console.log(e),n(JSON.parse(e))}).catch(function(e){console.log(e)})}},t.dispatchInjectToContentScript=function(e){return document.getElementById("init_window").dispatchEvent(new CustomEvent("inject_to_content_script",{detail:e}))},t.dispatchContentScriptToInject=function(e){return document.getElementById("init_window").dispatchEvent(new CustomEvent("content_script_to_inject",{detail:e}))}},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(r);n(124);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.render=function(){var e=n.props.clear;return a.default.createElement("div",{className:"white-space",style:{clear:e?"both":"none"}})},n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=o}}]);