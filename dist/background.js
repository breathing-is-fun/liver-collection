!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports;}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o});},n.r=function(t){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(t,'__esModule',{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&'object'==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,'default',{enumerable:!0,value:t}),2&e&&'string'!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e];}.bind(null,r));return o;},n.n=function(t){var e=t&&t.__esModule?function(){return t.default;}:function(){return t;};return n.d(e,'a',e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p='',n(n.s=42);}({13:function(t,e,n){'use strict';Object.defineProperty(e,'__esModule',{value:!0});var o=function(){var t=this;this.get=function(e){if(name='store.'+t.name+'.'+e,null!==localStorage.getItem(name))try{return JSON.parse(localStorage.getItem(name));}catch(t){return null;}},this.set=function(e,n){if(void 0===n)t.remove(e);else{if('function'==typeof n)n=null;else try{n=JSON.stringify(n);}catch(t){n=null;}localStorage.setItem('store.'+t.name+'.'+e,n);}return t;},this.remove=function(e){return localStorage.removeItem('store.'+t.name+'.'+e),t;},this.removeAll=function(){for(var e='store.'+t.name+'.',n=localStorage.length-1;n>=0;n--)localStorage.key(n).substring(0,e.length)===e&&localStorage.removeItem(localStorage.key(n));return t;},this.toObject=function(){for(var e={},n=void 0,o=void 0,r='store.'+t.name+'.',i=localStorage.length-1;i>=0;i--)localStorage.key(i).substring(0,r.length)===r&&(n=localStorage.key(i).substring(r.length),void 0!==(o=t.get(n))&&(e[n]=o));return e;},this.fromObject=function(e,n){for(var o in!0!==n&&t.removeAll(),e)e.hasOwnProperty(o)&&t.set(o,e[o]);return t;};};e.default=function t(e,n){if(function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function');}(this,t),o.call(this),this.name=e,void 0!==n)for(var r in n)n.hasOwnProperty(r)&&void 0===this.get(r)&&this.set(r,n[r]);};},36:function(t,e,n){'use strict';function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n;}return Array.from(t);}var r=function t(e,n,r){var i=e[n],a=i.id;fetch('https://granbluefantasy.trim21.cn/api/v0.1/teamraid039/individual?user_id='+a,{method:'GET',headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}}).then(function(t){return t.json();}).then(function(a){for(var s=a.data,c=void 0===s?[]:s,l=void 0,u=void 0,d=Object.keys(c),f=0,_=d.length;f<_;f++)d[f]=parseInt(d[f]);l=Math.max.apply(Math,o(d)),u=Math.min.apply(Math,o(d)),d.length>0?(l=c[l],u=c[u],i.singleDayPoint=l.point-u.point,i.rank=l.rank,i.totalPoint=l.point):(i.singleDayPoint='此人未进排名查无可查',i.rank='-',i.totalPoint='-'),n<e.length-1?t(e,n+1,r):r(e);});};t.exports={send_to_option:function(t){r(t,0,function(t){window.memberDatas=t;});}};},37:function(t,e,n){'use strict';t.exports={init_gacha:function(t,e){chrome.tabs.query({active:!0,currentWindow:!0},function(t){chrome.tabs.connect(t[0].id,{name:'popup_to_content'}).postMessage({message:'init_eunuch',status:e});});}};},38:function(t,e,n){'use strict';var o=function(t){chrome.tabs.query({active:!0},function(e){var n=void 0,o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var c=a.value,l=c.id;c.url;if(c.url.includes('game')){n=l;break;}}}catch(t){r=!0,i=t;}finally{try{!o&&s.return&&s.return();}finally{if(r)throw i;}}var u=chrome.tabs.connect(n,{name:'popup_to_content'}),d=document.getElementById('battle_input');d.focus(),d.value='',document.execCommand('paste');var f=d.value.trim();/^[A-Za-z0-9]+$/gi.test(f)&&8==f.length?u.postMessage({message:'battle_key_check',battleId:f,userId:t}):console.log('check failed');});};t.exports={init_input_for_battle:function(){var t=document.getElementById('battle_input');t||((t=document.createElement('input')).id='battle_input',t.style.width='0px',t.style.height='0px',document.body.appendChild(t));},get_battle_room_href:function(t,e){e?o(t):chrome.browserAction.onClicked.addListener(function(){o(t);});},handle_board_post:o};},39:function(t,e,n){'use strict';var o=n(5);t.exports={init_user_id:function(t){!t.get('userId')&&(0,o.get_by_cookie)('http://game.granbluefantasy.jp/user/user_id',{},function(e){var n=e.user_id;t.set('userId',n);});}};},40:function(t,e,n){'use strict';t.exports={zoom:1.5,is_left_sider_show:!0,is_right_sider_show:!1,head_address:'http://',address:'localhost:8023',black_list:[],is_scroll_style_show:!1,is_multil:!1,is_listen_board:!1,is_listen_bp:!1,is_rape:!1,is_eunuch:!1};},41:function(t,e,n){'use strict';var o=r(n(40));function r(t){return t&&t.__esModule?t:{default:t};}var i=new(r(n(13)).default)('options');fetch('./assets/black_list.json',{}).then(function(t){return t.json();}).then(function(t){var e=i.get('black_list'),n=[],o=!0,r=!1,a=void 0;try{for(var s,c=t[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var l=s.value,u=l.id;if(e&&e.length>0){var d=!0,f=!1,_=void 0;try{for(var h,g=e[Symbol.iterator]();!(d=(h=g.next()).done);d=!0){var p=h.value;p.id==u&&n.push(Object.assign({},p,l));}}catch(t){f=!0,_=t;}finally{try{!d&&g.return&&g.return();}finally{if(f)throw _;}}}else n=t;}}catch(t){r=!0,a=t;}finally{try{!o&&c.return&&c.return();}finally{if(r)throw a;}}i.set('black_list',n);});var a=i.toObject();i.fromObject(Object.assign({},o.default,a));t.exports={local:i};},42:function(t,e,n){'use strict';var o=n(41),r=n(39),i=n(38),a=n(37),s=n(36);window.store=o.local,(0,r.init_user_id)(o.local),chrome.browserAction.setPopup({popup:o.local.get('is_multil')?'':'index.html'}),chrome.tabs.onUpdated.addListener(function(t,e,n){var r=n.url;r.includes('gacha')?(0,a.init_gacha)(n.url,o.local.get('is_eunuch')):r.includes('raidfinder');}),(0,i.init_input_for_battle)(),(0,i.get_battle_room_href)(o.local.get('userId'),o.local.get('is_listen_board')),chrome.runtime.onMessage.addListener(function(t,e,n){var r=t.message,a=(t.zoom,t.search,t.url),c=t.data,l={error:'',tasks:''};switch(r){case'get_zoom':l=Object.assign(l,{zoom:o.local.get('zoom')});break;case'get_search':l=Object.assign(l,{search:o.local.get('search')});break;case'get_sider_options':l=Object.assign(l,{left:o.local.get('is_left_sider_show'),right:o.local.get('is_right_sider_show')});break;case'get_scroll_options':l=Object.assign(l,{status:o.local.get('is_scroll_style_show')});break;case'battle_room_href':chrome.tabs.update(e.tab.id,{url:'http://game.granbluefantasy.jp'+a});break;case'get_user_id':l=Object.assign(l,{user_id:o.local.get('userId')});break;case'redo_battle_room_href_check':(0,i.handle_board_post)(o.local.get('userId'));break;case'notify_error':chrome.notifications.create({type:'basic',iconUrl:'./assets/img/54878633_p0.png',title:'进房异常',message:c});break;case'is_eunuch':l=Object.assign(l,{status:o.local.get('is_eunuch')});break;case'listen_clip_board_battle_check':(0,i.get_battle_room_href)(o.local.get('userId'),o.local.get('is_listen_board'));break;case'do_get_member_id':(0,s.send_to_option)(c);}n(l);});},5:function(t,e,n){'use strict';Object.defineProperty(e,'__esModule',{value:!0});e.upload_to_server=function(t,e,n){if(t){var o={method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}};o=Object.assign(o,e),fetch(t,o).then(function(t){return t.text();}).then(function(t){return n(t);}).catch(function(t){console.log(t);});}},e.get_by_cookie=function(t,e,n){if(t){var o={credentials:'include'};o=Object.assign(o,e),fetch(t,o).then(function(t){return t.json();}).then(function(t){return n(t);}).catch(function(t){console.log(t);});}},e.post_by_cookie=function(t,e,n){if(t){var o={method:'POST',credentials:'include',headers:{'Content-Type':'application/json; charset=UTF-8'}};o=Object.assign(o,e),fetch(t,o).then(function(t){return console.log(t),t.text();}).then(function(t){console.log(t),n(JSON.parse(t));}).catch(function(t){console.log(t);});}},e.dispatch_inject_to_content_script=function(t){return document.getElementById('init_window').dispatchEvent(new CustomEvent('inject_to_content_script',{detail:t}));},e.dispatch_content_script_to_inject=function(t){return document.getElementById('init_window').dispatchEvent(new CustomEvent('content_script_to_inject',{detail:t}));};}});