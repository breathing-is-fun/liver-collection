!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=43)}({13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this;this.get=function(t){var n="store."+e.name+"."+t;if(null!==localStorage.getItem(n))try{return JSON.parse(localStorage.getItem(n))}catch(e){return null}},this.set=function(t,n){if(void 0===n)e.remove(t);else{if("function"==typeof n)n=null;else try{n=JSON.stringify(n)}catch(e){n=null}localStorage.setItem("store."+e.name+"."+t,n)}return e},this.remove=function(t){return localStorage.removeItem("store."+e.name+"."+t),e},this.removeAll=function(){for(var t="store."+e.name+".",n=localStorage.length-1;n>=0;n--)localStorage.key(n).substring(0,t.length)===t&&localStorage.removeItem(localStorage.key(n));return e},this.toObject=function(){for(var t={},n=void 0,r=void 0,o="store."+e.name+".",a=localStorage.length-1;a>=0;a--)localStorage.key(a).substring(0,o.length)===o&&(n=localStorage.key(a).substring(o.length),void 0!==(r=e.get(n))&&(t[n]=r));return t},this.fromObject=function(t,n){for(var r in!0!==n&&e.removeAll(),t)t.hasOwnProperty(r)&&e.set(r,t[r]);return e}};t.default=function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r.call(this),this.name=t,void 0!==n)for(var o in n)n.hasOwnProperty(o)&&void 0===this.get(o)&&this.set(o,n[o])}},37:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}e.exports={sendToOption:function(e){var t=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var c=i.value.id;t.push(c)}}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}var l=new Date,u=l.getFullYear(),d=l.getMonth()+1,f=l.getDate(),h=parseInt(new Date(u+"-"+d+"-"+f+" 05:00:00").getTime()/1e3),g=parseInt((new Date).getTime()/1e3);fetch("https://granbluefantasy.trim21.cn/api/v0.1/teamraid039/group/individual",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:JSON.stringify({user_ids:t,start:h,end:g})}).then(function(e){return e.json()}).then(function(t){var n=t.data,o=void 0===n?[]:n,a=[];for(var i in o){var s=o[i],c=s.user_id,l=s.history;if(l){for(var u,d,f=Object.keys(l),h=0,g=f.length;h<g;h++)f[h]=parseInt(f[h]);var p=Math.max.apply(Math,r(f));u=l[p],d=l[Math.min.apply(Math,r(f))];var m=new Date(1e3*p);m=m.getFullYear()+"-"+(m.getMonth()+1)+"-"+m.getDate()+" "+m.getHours()+":"+m.getMinutes()+":"+m.getSeconds(),a.push({id:c,singleDayPoint:u.point-d.point,rank:u.rank,totalPoint:u.point,timeStamp:m})}else a.push({id:c,singleDayPoint:void 0,rank:void 0,totalPoint:void 0,timeStamp:void 0})}var v=[],y=!0,b=!1,_=void 0;try{for(var S,w=e[Symbol.iterator]();!(y=(S=w.next()).done);y=!0){var j=S.value,O=!0,k=!1,I=void 0;try{for(var x,B=a[Symbol.iterator]();!(O=(x=B.next()).done);O=!0){var M=x.value;j.id==M.id&&v.push(Object.assign({},j,M))}}catch(e){k=!0,I=e}finally{try{!O&&B.return&&B.return()}finally{if(k)throw I}}}}catch(e){b=!0,_=e}finally{try{!y&&w.return&&w.return()}finally{if(b)throw _}}window.memberDatas=v})}}},38:function(e,t,n){"use strict";e.exports={initGacha:function(e,t){chrome.tabs.query({active:!0,currentWindow:!0},function(e){chrome.tabs.connect(e[0].id,{name:"popup_to_content"}).postMessage({message:"init_eunuch",status:t})})}}},39:function(e,t,n){"use strict";var r=function(e){chrome.tabs.query({active:!0},function(t){var n=void 0,r=!0,o=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var c=i.value,l=c.id;c.url;if(c.url.includes("game")){n=l;break}}}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}var u=chrome.tabs.connect(n,{name:"popup_to_content"}),d=document.getElementById("battle_input");d.focus(),d.value="",document.execCommand("paste");var f=d.value.trim();/^[A-Za-z0-9]+$/gi.test(f)&&8==f.length?u.postMessage({message:"battle_key_check",battleId:f,userId:e}):console.log("check failed")})};e.exports={initInputForBattle:function(){var e=document.getElementById("battle_input");e||((e=document.createElement("input")).id="battle_input",e.style.width="0px",e.style.height="0px",document.body.appendChild(e))},getBattleRoomHref:function(e,t){t?r(e):chrome.browserAction.onClicked.addListener(function(){r(e)})},handleBoardPost:r}},40:function(e,t,n){"use strict";var r=n(5);e.exports={initUserId:function(e){!e.get("userId")&&(0,r.getByCookie)("http://game.granbluefantasy.jp/user/user_id",{},function(t){var n=t.user_id;e.set("userId",n)})}}},41:function(e,t,n){"use strict";e.exports={zoom:1.5,isLeftSiderShow:!0,isRightSiderShow:!1,headAddress:"http://",address:"localhost:8023",blackList:[],isScrollStyleShow:!1,isMultil:!1,isListenBoard:!1,isListenBp:!1,isRape:!1,isEunuch:!1,entrySceneApLowerLimit:40,sceneHref:"http://game.granbluefantasy.jp/#quest/supporter/730571/1"}},42:function(e,t,n){"use strict";var r=o(n(41));function o(e){return e&&e.__esModule?e:{default:e}}var a=new(o(n(13)).default)("options");fetch("./assets/blackList.json",{}).then(function(e){return e.json()}).then(function(e){var t=a.get("blackList"),n=[],r=!0,o=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var l=s.value,u=l.id;if(t&&t.length>0){var d=!0,f=!1,h=void 0;try{for(var g,p=t[Symbol.iterator]();!(d=(g=p.next()).done);d=!0){var m=g.value;m.id==u&&n.push(Object.assign({},m,l))}}catch(e){f=!0,h=e}finally{try{!d&&p.return&&p.return()}finally{if(f)throw h}}}else n=e}}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}a.set("blackList",n)});var i=a.toObject();a.fromObject(Object.assign({},r.default,i));e.exports={local:a}},43:function(e,t,n){"use strict";var r=n(42),o=n(40),a=n(39),i=n(38),s=n(37);window.store=r.local,(0,o.initUserId)(r.local),chrome.browserAction.setPopup({popup:r.local.get("isMultil")?"":"index.html"}),chrome.tabs.onUpdated.addListener(function(e,t,n){n.url.includes("gacha")&&(0,i.initGacha)(n.url,r.local.get("isEunuch"))}),(0,a.initInputForBattle)(),(0,a.getBattleRoomHref)(r.local.get("userId"),r.local.get("isListenBoard")),chrome.runtime.onMessage.addListener(function(e,t,n){var o=e.message,i=(e.zoom,e.search,e.url),c=e.data,l={error:"",tasks:""};switch(o){case"get_zoom":l=Object.assign(l,{zoom:r.local.get("zoom")});break;case"get_search":l=Object.assign(l,{search:r.local.get("search")});break;case"get_sider_options":l=Object.assign(l,{left:r.local.get("isLeftSiderShow"),right:r.local.get("isRightSiderShow")});break;case"get_scroll_options":l=Object.assign(l,{status:r.local.get("isScrollStyleShow")});break;case"battle_room_href":chrome.tabs.update(t.tab.id,{url:"http://game.granbluefantasy.jp"+i});break;case"get_userId":l=Object.assign(l,{userId:r.local.get("userId")});break;case"redo_battle_room_href_check":(0,a.handleBoardPost)(r.local.get("userId"));break;case"notify_error":chrome.notifications.create({type:"basic",iconUrl:"./assets/img/54878633_p0.png",title:"进房异常",message:c});break;case"isEunuch":l=Object.assign(l,{status:r.local.get("isEunuch")});break;case"listenClipBoardBattleCheck":(0,a.getBattleRoomHref)(r.local.get("userId"),r.local.get("isListenBoard"));break;case"do_getMemberId":(0,s.sendToOption)(c);break;case"get_ap_limit":l=Object.assign(l,{limit:r.local.get("entrySceneApLowerLimit"),href:r.local.get("sceneHref")});break;case"get_scene_href":l=Object.assign(l,{href:r.local.get("sceneHref")})}n(l)})},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.uploadToServer=function(e,t,n){if(e){var r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};r=Object.assign(r,t),fetch(e,r).then(function(e){return e.text()}).then(function(e){return n(e)}).catch(function(e){console.log(e)})}},t.getByCookie=function(e,t,n){if(e){var r={credentials:"include"};r=Object.assign(r,t),fetch(e,r).then(function(e){return e.json()}).then(function(e){return n(e)}).catch(function(e){console.log(e)})}},t.postByCookie=function(e,t,n){if(e){var r={method:"POST",credentials:"include",headers:{"Content-Type":"application/json; charset=UTF-8"}};r=Object.assign(r,t),fetch(e,r).then(function(e){return console.log(e),e.text()}).then(function(e){console.log(e),n(JSON.parse(e))}).catch(function(e){console.log(e)})}},t.dispatchInjectToContentScript=function(e){return document.getElementById("init_window").dispatchEvent(new CustomEvent("inject_to_content_script",{detail:e}))},t.dispatchContentScriptToInject=function(e){return document.getElementById("init_window").dispatchEvent(new CustomEvent("content_script_to_inject",{detail:e}))}}});