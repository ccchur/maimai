(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/rider/index"],{1544:function(e,t,n){"use strict";n.r(t);var r=n("f356"),o=n("bc8a");for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("e579");var i,c=n("f0c5"),a=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"1269d0d2",null,!1,r["a"],i);t["default"]=a.exports},"8ad0":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("7c25"),o=function(){n.e("components/topInfo/topInfo").then(function(){return resolve(n("6fcf"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/riderOrder/riderOrder").then(function(){return resolve(n("61cb"))}.bind(null,n)).catch(n.oe)},i=n("fca2"),c={components:{topInfo:o,riderOrder:u},data:function(){return{role:2,list1:["https://cdn.uviewui.com/uview/swiper/swiper1.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper3.png"],order_list:[],weather:"",temperature:"",city:"",order_sender_id:"",order_recipient_id:""}},methods:{refresh:function(){var e=this;console.log("刷新"),i.order_searchOrder().then((function(t){console.log(t.data.records),e.$data.order_list=t.data.records,e.$refs.uToast.show({type:"success",message:"刷新成功"})})).catch((function(t){e.$refs.uToast.show({type:"err",message:t})}))},myOrder:function(){e.navigateTo({url:"./main/myOrder"})}},onShow:function(){var t=this;this.$data.latitude=r.latitude,this.$data.longitude=r.longitude,this.$data.city=r.city,this.$data.weather=r.weather,this.$data.temperature=r.temperature;var n=e.getStorageSync("cookie");console.log(n),n||e.reLaunch({url:"../login/login"}),i.order_searchOrder().then((function(e){console.log(e.data.records),t.$data.order_list=e.data.records})).catch((function(e){t.$refs.uToast.show({type:"err",message:e})}))}};t.default=c}).call(this,n("543d")["default"])},"9ef7":function(e,t,n){"use strict";(function(e){n("e115");r(n("66fd"));var t=r(n("1544"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},a2c8:function(e,t,n){},bc8a:function(e,t,n){"use strict";n.r(t);var r=n("8ad0"),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=o.a},e579:function(e,t,n){"use strict";var r=n("a2c8"),o=n.n(r);o.a},f356:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var r={topInfo:function(){return n.e("components/topInfo/topInfo").then(n.bind(null,"6fcf"))},uSwiper:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-swiper/u-swiper")]).then(n.bind(null,"2638"))},riderOrder:function(){return n.e("components/riderOrder/riderOrder").then(n.bind(null,"61cb"))},uButton:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-button/u-button")]).then(n.bind(null,"d68d"))},uToast:function(){return n.e("node-modules/uview-ui/components/u-toast/u-toast").then(n.bind(null,"4cdf"))}},o=function(){var e=this,t=e.$createElement;e._self._c},u=[]}},[["9ef7","common/runtime","common/vendor"]]]);