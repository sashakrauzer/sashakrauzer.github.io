/*! For license information please see main.af003b28.chunk.js.LICENSE.txt */
(this["webpackJsonpelements-frontend"]=this["webpackJsonpelements-frontend"]||[]).push([[0],{133:function(e,t,n){e.exports=n.p+"static/media/elements.b15f934a.svg"},153:function(e,t,n){e.exports=n(239)},162:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),i=n(38),s=(n(162),n(26)),l=n(27),u=n(29),d=n(28),f=n(76),v=n(247),h=n(54),E=n(150),b=n(248),p=n(49),m=n.n(p),O=n(85),C=n.n(O),g=n(97),j={name:"Data Transfer Service",uuid:"5cf052d0-2403-4719-a558-b7e72c48112f",description:"Provide data receive and transmitting of a data",characteristics:[{name:"Data Receive",uuid:"5cf052d1-2403-4719-a558-b7e72c48112f",description:"Receive data channel",properties:["write"]},{name:"Data Transmit",uuid:"5cf052d2-2403-4719-a558-b7e72c48112f",description:"Transmit data channel",properties:["read","notify"]},{name:"Control Receive",uuid:"5cf052d3-2403-4719-a558-b7e72c48112f",description:"Control data receive channel",properties:["write"]},{name:"Control Transmit",uuid:"5cf052d4-2403-4719-a558-b7e72c48112f",description:"Control data transmit channel",properties:["read","notify"]},{name:"Status",uuid:"5cf052d5-2403-4719-a558-b7e72c48112f",description:"Expose status of transfer data",properties:["write","read","notify"]}]};m.a.defaults.baseURL="https://portal.pipe.today/api";var y=Object(b.a)("SHOW_APP_PRELOADER"),_=Object(b.a)("FETCH_TOKEN_REQUEST"),S=Object(b.a)("FETCH_TOKEN_SUCCESS"),T=Object(b.a)("FETCH_TOKEN_FAILURE"),D=function(e,t,n){return function(e){e(_()),m.a.post("oauth/convert-token/",{grant_type:"convert_token",client_id:"h19R0p6UGmYKzuc4fg1uaPlHwXPOc8GktswMZEdu",backend:"facebook",token:"EAAFQIbIFnh0BAI0Kdu4INsdd5uZCrEdcfvOZBAPTlbkoYZCc43nJbUKMZC7NfbWfMlZCihZBvyusAQOVhWfFNotwwQbJRnNEzncKxKPzUFWXAYDSkoudMFT7MiUHUk8DRdWUZA5m35nLcgxN6Hd50UWZAJFdIpXidJKIFY4ZBPoKZCE5Jdn6OsYB8fDjAuIpIE6g1MulyaITd3iwZDZD"}).then((function(t){!function(e,t,n){var a=new g.a,c=new Date;c.setSeconds(c.getSeconds()+n),a.set(t,JSON.stringify(e),{path:"/",expires:c})}(t.data,"auth_cookie",t.data.expires_in),e(S(t.data))})).catch((function(){e(T())}))}},k=Object(b.a)("LOGOUT_REQUEST"),w=Object(b.a)("LOGOUT_SUCCESS"),R=Object(b.a)("LOGOUT_FAILURE"),I=Object(b.a)("FETCH_RECIPES_REQUEST"),A=Object(b.a)("FETCH_RECIPES_SUCCESS"),U=Object(b.a)("FETCH_RECIPES_FAILURE"),F=function(){return function(e,t){e(I()),e(y(!0));var n=t().auth.cookie.access_token;m.a.get("recipe/",{headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){e(A(t.data)),e(y(!1))})).catch((function(){e(U()),e(y(!1))}))}},N=(Object(b.a)("FETCH_USER_REQUEST"),Object(b.a)("FETCH_USER_SUCCESS")),V=Object(b.a)("FETCH_USER_FAILURE"),B=function(){return function(e,t){e(I()),e(y(!0));var n=t().auth.cookie.access_token;m.a.get("user/",{headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){e(N(t.data)),e(y(!1))})).catch((function(t){switch(e(V()),e(y(!1)),t.response.status){case 403:Object(f.d)("/")}}))}},L=(Object(b.a)("FETCH_USER_DEVICES_REQUEST"),Object(b.a)("FETCH_USER_DEVICES_SUCCESS")),G=Object(b.a)("FETCH_USER_DEVICES_FAILURE"),P=Object(b.a)("SAVE_DEVICE_REQUEST"),x=Object(b.a)("SAVE_DEVICE_SUCCESS"),H=Object(b.a)("SAVE_DEVICE_FAILURE"),M=(Object(b.a)("REMOVE_DEVICE_REQUEST"),Object(b.a)("REMOVE_DEVICE_SUCCESS")),z=Object(b.a)("REMOVE_DEVICE_FAILURE"),Q=Object(b.a)("GET_BINARY_RECIPE_REQUEST"),Y=Object(b.a)("GET_BINARY_RECIPE_SUCCESS"),q=Object(b.a)("GET_BINARY_RECIPE_FAILURE"),Z=(n(183),n(184),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"loader__container"},c.a.createElement("div",{className:"loader"},c.a.createElement("div",{className:"lds-ripple"},c.a.createElement("div",null),c.a.createElement("div",null))))}}]),n}(a.Component)),K=n(131),W=n.n(K),J={convertToken:D},X=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).responseGoogleRequest=function(){},e.responseGoogleSuccess=function(t){(0,e.props.convertToken)(t.accessToken,"google-oauth2","h19R0p6UGmYKzuc4fg1uaPlHwXPOc8GktswMZEdu")},e.responseGoogleFailure=function(){},e}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement(W.a,{clientId:"205221816405-0lvlolma2t1lvif67t749qee7h9te473.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogleSuccess,onFailure:this.responseGoogleFailure,onRequest:this.responseGoogleRequest,cookiePolicy:"single_host_origin",className:"google-oauth-btn"})}}]),n}(a.Component),$=Object(i.b)((function(e){return{token:e.auth.token}}),J)(X),ee=n(132),te=n.n(ee),ne={convertToken:D},ae=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={response:null,failure:null},e.responseFacebook=function(t){var n=e.props.convertToken;e.setState({response:t}),n(t.accessToken,"facebook","h19R0p6UGmYKzuc4fg1uaPlHwXPOc8GktswMZEdu")},e.onFailure=function(t){e.setState({failure:t})},e.onResponseFacebook=function(e){console.log("response Facebook",e)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.convertToken)()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(te.a,{appId:"369580627566109",autoLoad:!1,fields:"name,email,picture",callback:this.responseFacebook,onFailure:this.onFailure,textButton:"Login",redirectUri:"https://sashakrauzer.github.io/"}),c.a.createElement("div",null,JSON.stringify(this.state.response)))}}]),n}(a.Component),ce=Object(i.b)((function(e){return{token:e.auth.token}}),ne)(ae),re=n(133),oe=n.n(re),ie=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.isLogged,e.location.search);return t&&alert("search",t),c.a.createElement("div",{className:"App",path:"/"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:oe.a,className:"App-logo",alt:"logo"}),c.a.createElement("div",{className:"login-btn-wrap"},navigator.userAgent.includes("cider")?null:c.a.createElement($,null),c.a.createElement(ce,null))))}}]),n}(a.Component),se=n(242),le=n(109),ue=n(246),de=n(253),fe=n(254),ve=(n(185),n(78)),he=n(240),Ee=n(93),be=n(250),pe=n(74),me=n.n(pe),Oe=n(86);m.a.defaults.baseURL="https://portal.pipe.today/api";var Ce,ge,je,ye=Object(b.a)("CONNECT_TO_DEVICE_REQUEST"),_e=Object(b.a)("CONNECT_TO_DEVICE_SUCCESS"),Se=Object(b.a)("CONNECT_TO_DEVICE_FAILURE"),Te=function(e){return function(t,n){var a=n().bluetooth.devices;t(ye());var c=e||[{namePrefix:"Blue"}];navigator.bluetooth.requestDevice({acceptAllDevices:!c||void 0,filters:c,optionalServices:["5cf052d0-2403-4719-a558-b7e72c48112f","battery_service",10793,6154]}).then((function(e){if(C.a.find(a,(function(t){return t.name===e.name})))throw new Error("device has already been added");console.info("%cconnected device:","color:green; font-size:2em; border-top:10px solid red"),console.table(e),e.addEventListener("gattserverdisconnected",(function(e){return t(ke(e))})),t(_e(e)),t(function(e){return function(t,n){var a=n(),c=a.auth.cookie.access_token,r=a.data.userDevices.devices,o=C.a.uniqBy([].concat(Object(E.a)(r),[{name:e.name,uid:e.id}]),"name");if(o.length===r.length)return!1;t(P()),t(y(!0)),m.a.put("user/devices/",{devices:o},{headers:{Authorization:"Bearer ".concat(c)}}).then((function(e){t(x(e.data)),t(y(!1))})).catch((function(){t(H()),t(y(!1))}))}}(e)),t(Ae(e))})).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{message:"connectToDeviceFailure"};console.error(e.message),t(Se())}))}},De=Object(b.a)("DEVICE_DISCONNECTED"),ke=(Object(b.a)("FAILED_TO_RECONNECT"),Object(b.a)("DEVICE_CONNECTING"),Object(b.a)("DEVICE_RECONNECTED"),function(e){return function(t){t(De());var n=e.target;console.log("Device ".concat(n.name," is disconnected.")),t(Ae(n))}}),we=Object(b.a)("CONNECT_GATT_REQUEST"),Re=Object(b.a)("CONNECT_GATT_SUCCESS"),Ie=Object(b.a)("CONNECT_GATT_FAILURE"),Ae=function(e){return function(t){function n(e){console.log("["+(new Date).toJSON().substr(11,8)+"] "+e)}!function e(t,a,c,r,o){c().then((function(e){return r(e)})).catch((function(){if(0===t)return o();n("Retrying in "+a+"s... ("+t+" tries left)"),setTimeout((function(){e(--t,2*a,c,r,o)}),1e3*a)}))}(3,2,(function(){return t(we({device:e})),n("Connecting to Bluetooth Device... "),e.gatt.connect()}),(function(n){console.info("%cGATT server:","color:green; font-size:2em; border-top:10px solid red"),console.table(n),t(Re({server:n,device:e}))}),(function(){t(Ie({device:e})),n("Failed to connect.")}))}},Ue=Object(b.a)("FETCH_BATTERY_SERVICE_REQUEST"),Fe=Object(b.a)("FETCH_BATTERY_SERVICE_SUCCESS"),Ne=Object(b.a)("FETCH_BATTERY_SERVICE_FAILURE"),Ve=(Object(b.a)("FETCH_BATTERY_CHARACTERISTIC_SUCCESS"),Object(b.a)("FETCH_DEVICE_INFO_REQUEST")),Be=Object(b.a)("FETCH_DEVICE_INFO_SUCCESS"),Le=Object(b.a)("FETCH_DEVICE_INFO_FAILURE"),Ge=Object(b.a)("FETCH_DEVICE_INFO_CHARACTERISTIC_SUCCESS"),Pe=(Object(b.a)("WRITE_RECIPE_TO_DEVICE_REQUEST"),Object(b.a)("WRITE_RECIPE_TO_DEVICE_SUCCESS"),Object(b.a)("WRITE_RECIPE_TO_DEVICE_FAILURE"),Object(b.a)("RECIPE_BYTE_TRANSFERED")),xe=0,He=null,Me=function(){return function(e,t){var n=t(),a=n.bluetooth.server,c=n.data.recipeBinary,r=null;function o(e){var t=e.target.value.getUint8(0);console.log("handleResponseControlMsg",10===t,t),10===t?r.getCharacteristic("5cf052d5-2403-4719-a558-b7e72c48112f").then((function(e){return e.startNotifications(),e.addEventListener("characteristicvaluechanged",i),r.getCharacteristic("5cf052d1-2403-4719-a558-b7e72c48112f")})).then((function(e){He=e,s()})):15===t?console.log("Recipe did saved"):console.log("")}function i(e){var t=e.target.value;console.log("handleStatusChanged",t,t.getUint8(0)),s()}function s(){return l.apply(this,arguments)}function l(){return(l=Object(Oe.a)(me.a.mark((function t(){var n;return me.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("sendingData..."),n=0;case 2:if(!(xe<c.buffer.byteLength&&n<400)){t.next=10;break}return t.next=5,He.writeValue(c.buffer.slice(xe,xe+20));case 5:e(Pe(c.buffer.slice(xe,xe+20).byteLength)),console.log("DataBuffer",c.buffer.slice(xe,xe+20));case 7:xe+=20,n+=20,t.next=2;break;case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}a.getPrimaryService(j.uuid).then((function(e){return(r=e).getCharacteristic("5cf052d4-2403-4719-a558-b7e72c48112f")})).then((function(e){return e.startNotifications()})).then((function(e){return e.addEventListener("characteristicvaluechanged",o),console.log("\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 Control Transmit"),r.getCharacteristic("5cf052d3-2403-4719-a558-b7e72c48112f")})).then((function(e){console.log("characteristic Control Receive");var t=new ArrayBuffer(20);new DataView(t).setInt8(0,10,!0),new DataView(t).setInt8(1,255,!0),new DataView(t).setInt32(2,9012,!0),new DataView(t).setInt16(6,6,!0),console.log("Control Receive",new DataView(t).getInt8(0)),e.writeValue(new Int8Array(t))})).catch((function(e){alert(e)}))}},ze={connectToDevice:Te,batteryServiceAction:function(){return function(e,t){function n(t){e(Fe({level:t.target.value.getUint8(0)}))}e(Ue()),t().bluetooth.server.getPrimaryService("battery_service").then((function(t){return e(Fe()),t.getCharacteristic("battery_level")})).catch((function(){e(Ne())})).then((function(e){if(e)return e.startNotifications(),e.addEventListener("characteristicvaluechanged",n),e.readValue();throw new Error("characteristic baterry level not found")})).then((function(t){e(Fe({level:t.getUint8(0)}))})).catch((function(){}))}},deviceInfoServiceAction:function(){return function(e,t){e(Ve()),t().bluetooth.server.getPrimaryService(6154).then((function(t){return e(Be()),t.getCharacteristic(10793)})).catch((function(){e(Le())})).then((function(e){if(e)return e.readValue();throw new Error("characteristic manufacturerName not found")})).then((function(t){e(Ge({manufacturerName:t.getUint8(0)}))})).catch((function(){}))}},writeRecipeToDevice:Me},Qe=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={bluetoothDevice:null,batteryLevelCharacteristic:null,gattServer:null,transferService:null,characteristic:null},e.connectToDevice=function(){navigator.bluetooth.requestDevice({filters:[{name:"BlueNRG"},{services:["5cf052d0-2403-4719-a558-b7e72c48112f"]}],optionalServices:["5cf052d0-2403-4719-a558-b7e72c48112f"]}).then((function(t){console.log("device",t),e.setState({bluetoothDevice:t}),e.state.bluetoothDevice.addEventListener("gattserverdisconnected",e.onDisconnected)})).catch((function(e){console.log("error",e)}))},e.serviceConnect=function(t){var n=e.props.server;console.log("serviceConnect",n),n.getPrimaryService(t).then((function(t){console.log("service",t),e.setState({transferService:t})})).catch((function(e){alert(e)}))},e.CtrlRxCharacteristicUuid=function(){var t=new ArrayBuffer(20);new DataView(t).setInt8(0,10),new DataView(t).setInt8(1,255),new DataView(t).setInt32(2,800),new DataView(t).setInt16(6,6),console.log("BUFFER",t,new DataView(t)),e.state.transferService.getCharacteristic("5cf052d3-2403-4719-a558-b7e72c48112f").then((function(e){return console.log("characteristic Control Receive"),e.writeValue(t)})).then((function(e){console.log("Control Receive value: ",e)})).catch((function(e){alert(e)}))},e.sendDataToDevice=function(){var t=new ArrayBuffer(20);new DataView(t).setInt32(0,6e3),e.state.transferService.getCharacteristic("5cf052d1-2403-4719-a558-b7e72c48112f").then((function(e){console.log("characteristic Data Receive",t);var n=null;function a(){return(a=Object(Oe.a)(me.a.mark((function a(){var c;return me.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=0;case 1:if(!(c<800)){a.next=9;break}return a.next=4,e.writeValue(t);case 4:n=a.sent,console.log("sendingData",n);case 6:c+=20,a.next=1;break;case 9:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()})).catch((function(e){alert(e)}))},e.CtrlTxCharacteristicUuid=function(){e.state.transferService.getCharacteristic("5cf052d4-2403-4719-a558-b7e72c48112f").then((function(e){return e.startNotifications()})).then((function(t){t.addEventListener("characteristicvaluechanged",e.handleResponseControlMsg),console.log("\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 Control Transmit")})).catch((function(e){alert(e)}))},e.StatusCharacteristicUuid=function(){e.state.transferService.getCharacteristic("5cf052d5-2403-4719-a558-b7e72c48112f").then((function(t){return console.log("characteristic \u0421\u0442\u0430\u0442\u0443\u0441",t),t.startNotifications(),t.addEventListener("characteristicvaluechanged",e.handleLevelChanged),t.readValue()})).then((function(e){console.log("\u0421\u0442\u0430\u0442\u0443\u0441 value: ",e)}))},e.batteryLevel=function(){e.state.transferService.getCharacteristic("battery_level").then((function(t){return console.log("characteristic \u0421\u0442\u0430\u0442\u0443\u0441",t),t.startNotifications(),t.addEventListener("characteristicvaluechanged",e.handleLevelChanged),t.readValue()})).then((function(e){console.log("\u0417\u0430\u0440\u044f\u0434 \u0431\u0430\u0442\u0430\u0440\u0435\u0438",e.buffer)}))},e}return Object(l.a)(n,[{key:"connect",value:function(){var e=this;return this.state.bluetoothDevice.gatt.connect().then((function(t){console.log("server",t),e.setState({gattServer:t})})).catch((function(e){alert(e)}))}},{key:"handleResponseControlMsg",value:function(e){var t=e.target.value.getUint8(0);console.log("handleResponseControlMsg",10===t)}},{key:"handleLevelChanged",value:function(e){var t=e.target.value;console.log("handleStatusChanged",t,t.buffer)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.bluetooth,a=n.device,c=n.server,r=n.batteryService,o=t.batteryServiceAction;a&&c&&!r&&(console.info("%cNeed request battery service...","border: 1px dashed gray; font-size: 1.5em; padding: 5px"),o());var i=this.props,s=i.recipeBinary,l=i.writeRecipeToDevice;s!==e.recipeBinary&&(console.log("Recipe binary not same"),s.binary_recipe&&l())}},{key:"render",value:function(){return c.a.createElement("div",null)}}]),n}(a.Component),Ye=Object(i.b)((function(e){var t=e.auth.token,n=e.data.recipeBinary,a=e.data,c=e.bluetooth,r=e.bluetooth;return{token:t,device:r.device,bluetooth:c,server:r.server,recipeBinary:n,data:a}}),ze)(Qe),qe=n(245),Ze=n(241),Ke=n(244),We=n(249),Je=n(251),Xe=n(252),$e=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).componentDidUpdate=function(t){var n=e.props.connectedDevice;n&&n.GATTDisconnected&&t.connectedDevice&&t.connectedDevice.GATTDisconnected&&(console.log("componentDidUpdate"),qe.a.error({title:"Failed to reconnect",content:"Please try again later"}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.device,n=e.connected,a=e.connectToDevice,r=e.removeDevice,o=e.batteryService,i=e.showDrawer,s=e.byteTransfered,l=e.server,u=e.GATTConnected,d=e.disconnectGattServer,f=e.connectedDevice,v=e.connectionRequest,E="";return E=u?"online":v?"connecting...":"offline",n?c.a.createElement(Ze.a,{title:c.a.createElement(c.a.Fragment,null,u&&c.a.createElement(Je.a,{twoToneColor:"#52c41a"}),v&&c.a.createElement(Xe.a,{twoToneColor:"#52c41a"}),c.a.createElement(he.a,{type:"vertical"}),c.a.createElement("span",null,t.name)),extra:c.a.createElement("div",null,c.a.createElement(h.a,{style:{color:"red"},shape:"circle",icon:c.a.createElement(We.a,null),onClick:function(){return r(t.uid)}})),style:{width:300}},c.a.createElement("p",null,c.a.createElement("strong",null,"Device: "),E),c.a.createElement("p",null,u&&c.a.createElement("button",{onClick:function(){return d(f)}},"\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f")),c.a.createElement("p",null,c.a.createElement("strong",null,"UID:")," ",t.uid),o&&Number.isInteger(o.level)&&c.a.createElement("p",null,c.a.createElement("strong",null,"Battery level: "),o.level),l&&c.a.createElement(h.a,{onClick:i},"Add recipe to device"),s?c.a.createElement(Ke.a,{type:"circle",percent:Math.floor(100*s/9012),width:40}):""):c.a.createElement(Ze.a,{title:c.a.createElement(c.a.Fragment,null,c.a.createElement(he.a,{type:"vertical"}),c.a.createElement("span",null,t.name)),extra:c.a.createElement("div",null,c.a.createElement(h.a,{style:{color:"red"},shape:"circle",icon:c.a.createElement(We.a,{twoToneColor:"#52c41a"}),onClick:function(){return r(t.uid)}})),style:{width:300}},c.a.createElement("p",null,c.a.createElement("strong",null,"Device: "),E),c.a.createElement("p",null,c.a.createElement("strong",null,"UID:")," ",t.uid),c.a.createElement(h.a,{shape:"circle",icon:c.a.createElement(be.a,null),onClick:function(){return a([{name:t.name}])}}))}}]),n}(a.Component),et={recipe:F,user:B,connectToDevice:Te,removeDevice:function(e){return function(t,n){var a=n(),c=a.auth.cookie.access_token,r=a.data.userDevices.devices.filter((function(t){return t.uid!==e}));t(P()),t(y(!0)),m.a.put("user/devices/",{devices:r},{headers:{Authorization:"Bearer ".concat(c)}}).then((function(e){t(M(e.data)),t(y(!1))})).catch((function(){t(z()),t(y(!1))}))}},disconnectGattServer:function(e){return function(){e.device.gatt.disconnect()}}},tt=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.connectToDevice,n=e.removeDevice,a=e.connectedDevices,r=e.showDrawer,o=e.server,i=e.batteryService,s=e.byteTransfered,l=e.disconnectGattServer,u=this.props.devices&&this.props.devices.map((function(e){return c.a.createElement($e,{key:e.uid,connected:!!a.find((function(t){return t.name===e.name})),GATTConnected:!!a.find((function(t){return t.name===e.name&&t.server&&t.server.connected})),device:e,connectedDevice:a.find((function(t){return t.name===e.name})),connectToDevice:t,removeDevice:n,batteryService:i,showDrawer:r,byteTransfered:s,server:o,disconnectGattServer:l,connectionRequest:!!a.find((function(t){return t.name===e.name&&t.connectionRequest}))})}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(ve.a,{gutter:16},u||""),c.a.createElement(he.a,null),c.a.createElement(Ee.a,{title:"Add device"},c.a.createElement(h.a,{shape:"circle",icon:c.a.createElement(be.a,null),onClick:function(){return t()}})),c.a.createElement(Ye,null))}}]),n}(a.Component),nt=Object(i.b)((function(e){var t=e.auth.token,n=e.data,a=e.data.byteTransfered,c=e.bluetooth,r=c.device,o=c.server,i=c.batteryService;return{token:t,data:n,device:r,connectedDevices:c.devices,server:o,batteryService:i,byteTransfered:a}}),et)(tt),at={writeRecipeToDevice:Me,getBinaryRecipe:function(e){return function(t,n){var a=n().auth.cookie.access_token;console.log("services",j),t(Q()),t(y(!0)),m.a.get("recipe_binary/"+e+"/",{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){t(Y(e.data)),t(y(!1))})).catch((function(){t(q()),t(y(!1))}))}}},ct=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.onClose,a=t.getBinaryRecipe,r=this.props.recipes.map((function(t){return c.a.createElement(Ze.a,{key:t.id,title:t.name+" - id"+t.id,style:{width:250},cover:c.a.createElement("img",{alt:"example",src:t.image}),className:"recipe__card"},c.a.createElement("p",null,t.description_text),e.props.buttonVisible&&c.a.createElement(h.a,{onClick:function(){n(),a(t.id)}},"Add"))}));return c.a.createElement(ve.a,{gutter:16},r)}}]),n}(a.Component),rt=Object(i.b)((function(e){return{token:e.auth.token}}),at)(ct),ot={recipe:F,user:B,userDevices:function(){return function(e,t){e(I()),e(y(!0));var n=t().auth.cookie.access_token;m.a.get("user/devices/",{headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){e(L(t.data)),e(y(!1))})).catch((function(){e(G()),e(y(!1))}))}},logout:function(){return function(e){e(k());try{t="auth_cookie",(new g.a).remove(t),e(w())}catch(n){e(R()),console.error("logout",n.message)}var t}}},it=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={current:"devices",showDrawer:!1},e.showDrawer=function(){e.setState({showDrawer:!0})},e.onClose=function(){e.setState({showDrawer:!1})},e.handleClick=function(t){e.setState({current:t.key})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.recipe,n=e.user,a=e.userDevices;t(),n(),a()}},{key:"render",value:function(){var e=this.state.current,t=this.props,n=t.data,a=n.user,r=n.recipe,o=n.userDevices,i=t.logout;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"elements__account"},c.a.createElement(se.a,{title:c.a.createElement("div",{className:"account-header"},a&&a.first_name+" "+a.last_name,c.a.createElement("button",{onClick:i},"Logout"))},c.a.createElement(le.a,{onClick:this.handleClick,selectedKeys:[e],mode:"horizontal"},c.a.createElement(le.a.Item,{key:"devices",icon:c.a.createElement(de.a,null)},"My devices"),c.a.createElement(le.a.Item,{key:"recipes",icon:c.a.createElement(fe.a,null)},"Recipes"))),"devices"===this.state.current?c.a.createElement(nt,{devices:o&&o.devices,showDrawer:this.showDrawer}):c.a.createElement(rt,{recipes:r,buttonVisible:!0,onClose:this.onClose}),c.a.createElement(ue.a,{title:"Recipes",width:640,placement:"right",closable:!1,onClose:this.onClose,visible:this.state.showDrawer},c.a.createElement(rt,{recipes:r,buttonVisible:!0,onClose:this.onClose}))))}}]),n}(a.Component),st=Object(i.b)((function(e){return{token:e.auth.token,data:e.data}}),ot)(it),lt=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement(v.a,{title:c.a.createElement("h1",null,"Your browser is not supported Web Bluetooth"),extra:c.a.createElement(h.a,{type:"primary",key:"console",href:"https://www.google.com/chrome/"},"Download Google Chrome")})}}]),n}(a.Component),ut={fetchTokenSuccess:S},dt=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentWillMount",value:function(){var e,t=this.props.fetchTokenSuccess,n=(e="auth_cookie",(new g.a).get(e));n&&(console.info("%ccookie:","color:green; font-size:2em; border-top:10px solid red"),console.table(n),t(n))}},{key:"render",value:function(){var e=this.props,t=e.cookie,n=e.showPreloader;return c.a.createElement(c.a.Fragment,null,n&&c.a.createElement(Z,null),c.a.createElement(f.c,null,t.access_token&&c.a.createElement(f.b,{from:"/",to:"account",noThrow:!0}),c.a.createElement(ie,{path:"/"}),c.a.createElement(st,{path:"account"}),c.a.createElement(lt,{path:"bluetooth-not-available"}),c.a.createElement(v.a,{default:!0,status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:c.a.createElement(h.a,{type:"primary"},c.a.createElement(f.a,{to:"/"},"Back Home"))})))}}]),n}(a.Component),ft=Object(i.b)((function(e){return{cookie:e.auth.cookie,showPreloader:e.settings.showPreloader}}),ut)(dt),vt=n(10),ht=n(31),Et=n(243),bt={auth:Object(Et.a)((Ce={},Object(ht.a)(Ce,S,(function(e,t){var n=t.payload;return Object(vt.a)(Object(vt.a)({},e),{},{cookie:n})})),Object(ht.a)(Ce,w,(function(e){return Object(vt.a)(Object(vt.a)({},e),{},{cookie:{}})})),Ce),{cookie:{}}),data:Object(Et.a)((ge={},Object(ht.a)(ge,A,(function(e,t){var n=t.payload;return Object(vt.a)(Object(vt.a)({},e),{},{recipe:n})})),Object(ht.a)(ge,N,(function(e,t){var n=t.payload;return Object(vt.a)(Object(vt.a)({},e),{},{user:n})})),Object(ht.a)(ge,L,(function(e,t){var n=t.payload;return Object(vt.a)(Object(vt.a)({},e),{},{userDevices:n})})),Object(ht.a)(ge,Y,(function(e,t){var n=t.payload,a=function(e){for(var t=window.atob(e),n=t.length,a=new Uint8Array(n),c=0;c<n;c++)a[c]=t.charCodeAt(c);return a.buffer}(n.binary_recipe);return Object(vt.a)(Object(vt.a)({},e),{},{recipeBinary:Object(vt.a)(Object(vt.a)({},n),{},{buffer:a})})})),Object(ht.a)(ge,Pe,(function(e,t){var n=t.payload;return Object(vt.a)(Object(vt.a)({},e),{},{byteTransfered:e.byteTransfered+n})})),Object(ht.a)(ge,x,(function(e,t){var n=t.payload;return Object(vt.a)(Object(vt.a)({},e),{},{userDevices:n})})),Object(ht.a)(ge,M,(function(e,t){var n=t.payload;return Object(vt.a)(Object(vt.a)({},e),{},{userDevices:n})})),ge),{recipe:[],user:null,userDevices:null,recipeBinary:null,byteTransfered:0}),bluetooth:Object(Et.a)((je={},Object(ht.a)(je,_e,(function(e,t){var n=t.payload,a=e.devices.slice();return a.push({id:n.id,name:n.name,device:n}),Object(vt.a)(Object(vt.a)({},e),{},{device:n,devices:a})})),Object(ht.a)(je,we,(function(e,t){var n=t.payload;console.log("connectGattRequest",n);var a=e.devices.map((function(e){return e.name===n.device.name&&(e.connectionRequest=!0),e}));return Object(vt.a)(Object(vt.a)({},e),{},{server:n.server,devices:a})})),Object(ht.a)(je,Re,(function(e,t){var n=t.payload,a=e.devices.map((function(e){return e.name===n.device.name&&(e.connectionRequest=!1,e.server=n.server,e.GATTDisconnected=!1),e}));return Object(vt.a)(Object(vt.a)({},e),{},{server:n.server,devices:a})})),Object(ht.a)(je,Ie,(function(e,t){var n=t.payload,a=e.devices.map((function(e){return e.name===n.device.name&&(e.GATTDisconnected=!0,e.connectionRequest=!1),e}));return Object(vt.a)(Object(vt.a)({},e),{},{devices:a})})),Object(ht.a)(je,Fe,(function(e,t){var n=t.payload,a=e.batteryService;return Object(vt.a)(Object(vt.a)({},e),{},{batteryService:Object(vt.a)(Object(vt.a)({},a),n)})})),Object(ht.a)(je,Ge,(function(e,t){var n=t.payload,a=e.deviceInfoService;return Object(vt.a)(Object(vt.a)({},e),{},{deviceInfoService:Object(vt.a)(Object(vt.a)({},a),n)})})),je),{device:null,devices:[],server:null,batteryService:null,deviceInfoService:null}),settings:Object(Et.a)(Object(ht.a)({},y,(function(e,t){var n=t.payload,a=e.preloaderStack.slice();return n?a.push(0):a.shift(),Object(vt.a)(Object(vt.a)({},e),{},{showPreloader:!!a.length,preloaderStack:a})})),{showPreloader:!1,preloaderStack:[]})},pt=n(111),mt=Object(pt.b)({immutableCheck:!1,serializableCheck:!1,thunk:!0}),Ot=Object(pt.a)({reducer:Object(vt.a)({},bt),middleware:mt,devTools:!1});o.a.render(c.a.createElement(i.a,{store:Ot},c.a.createElement(ft,null)),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.af003b28.chunk.js.map