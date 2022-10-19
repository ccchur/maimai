(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/orderList/orderList"],{"0188":function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return o}));var o={"u-Text":function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/uview-ui/components/u--text/u--text")]).then(e.bind(null,"c8dca"))}},r=function(){var n=this,t=n.$createElement;n._self._c},u=[]},3345:function(n,t,e){"use strict";e.r(t);var o=e("433f"),r=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=r.a},"3d31":function(n,t,e){},"42bf":function(n,t,e){"use strict";e.r(t);var o=e("0188"),r=e("3345");for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);e("d175");var a,c=e("f0c5"),i=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"bfee9dc6",null,!1,o["a"],a);t["default"]=i.exports},"433f":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"orderList",props:{orderList:{type:Array,default:""}},data:function(){return{index:""}},methods:{order_info:function(t){console.log("点击打开的订单号"),console.log(t),this.$data.index=t;var e=this;n.navigateTo({url:"./orderInfo",success:function(n){n.eventChannel.emit("acceptDataFromOpenerPage",e.$data.index)}})}}};t.default=e}).call(this,e("543d")["default"])},d175:function(n,t,e){"use strict";var o=e("3d31"),r=e.n(o);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/orderList/orderList-create-component',
    {
        'components/orderList/orderList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("42bf"))
        })
    },
    [['components/orderList/orderList-create-component']]
]);
