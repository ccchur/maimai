(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/riderOrder/riderOrder"],{"0952":function(e,n,t){"use strict";var o=t("2583"),r=t.n(o);r.a},2583:function(e,n,t){},4388:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"riderOrder",props:{order_list:{type:Array,default:""},flag:{type:Boolean,default:!0}},data:function(){return{}},methods:{accept:function(n){console.log("传入列表"),console.log(this.order_list),console.log(this.order_list[0].orderId),console.log("接单,单号"+n),console.log(n),e.navigateTo({url:"./main/orderInfo",success:function(e){e.eventChannel.emit("acceptDataFromOpenerPage",n)}})}}};n.default=t}).call(this,t("543d")["default"])},5357:function(e,n,t){"use strict";t.r(n);var o=t("4388"),r=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=r.a},"61cb":function(e,n,t){"use strict";t.r(n);var o=t("faaf"),r=t("5357");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("0952");var a,c=t("f0c5"),l=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"ea1c7ea4",null,!1,o["a"],a);n["default"]=l.exports},faaf:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o}));var o={"u-Text":function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u--text/u--text")]).then(t.bind(null,"c8dca"))}},r=function(){var e=this,n=e.$createElement;e._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/riderOrder/riderOrder-create-component',
    {
        'components/riderOrder/riderOrder-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("61cb"))
        })
    },
    [['components/riderOrder/riderOrder-create-component']]
]);
