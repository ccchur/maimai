(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/orderContent/orderContent"],{"051d":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var r={"u-Text":function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u--text/u--text")]).then(t.bind(null,"c8dca"))}},o=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"1ea3":function(e,n,t){"use strict";t.r(n);var r=t("051d"),o=t("540f");for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t("3709");var i,a=t("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"f921b938",null,!1,r["a"],i);n["default"]=c.exports},3709:function(e,n,t){"use strict";var r=t("4292"),o=t.n(r);o.a},4292:function(e,n,t){},"540f":function(e,n,t){"use strict";t.r(n);var r=t("5da8"),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},"5da8":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"orderContent",props:{orderList:{type:Object,default:""}},data:function(){return{}},computed:{},methods:{senderCall:function(){e.makePhoneCall({phoneNumber:this.orderList.orderSenderPhone})},recipientCall:function(){e.makePhoneCall({phoneNumber:this.orderList.orderRecipientPhone})},riderCall:function(){e.makePhoneCall({phoneNumber:this.orderList.tRider.riderPhone})}}};n.default=t}).call(this,t("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/orderContent/orderContent-create-component',
    {
        'components/orderContent/orderContent-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1ea3"))
        })
    },
    [['components/orderContent/orderContent-create-component']]
]);
