(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/uview-ui/components/u-link/u-link"],{4716:function(t,n,e){"use strict";e.r(n);var i=e("f3567"),u=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=u.a},"65b5":function(t,n,e){"use strict";var i=e("e9b6"),u=e.n(i);u.a},bba0:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__get_style([t.linkStyle,t.$u.addStyle(t.customStyle)]));t.$mp.data=Object.assign({},{$root:{s0:e}})},a=[]},e9b6:function(t,n,e){},ecaa:function(t,n,e){"use strict";e.r(n);var i=e("bba0"),u=e("4716");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("65b5");var o,c=e("f0c5"),r=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,"050d9a99",null,!1,i["a"],o);n["default"]=r.exports},f3567:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e("d41d"));function u(t){return t&&t.__esModule?t:{default:t}}var a={name:"u-link",mixins:[t.$u.mpMixin,t.$u.mixin,i.default],computed:{linkStyle:function(){var n={color:this.color,fontSize:t.$u.addUnit(this.fontSize),lineHeight:t.$u.addUnit(t.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"};return n}},methods:{openLink:function(){var n=this;t.setClipboardData({data:this.href,success:function(){t.hideToast(),n.$nextTick((function(){t.$u.toast(n.mpTips)}))}}),this.$emit("click")}}};n.default=a}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/uview-ui/components/u-link/u-link-create-component',
    {
        'node-modules/uview-ui/components/u-link/u-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ecaa"))
        })
    },
    [['node-modules/uview-ui/components/u-link/u-link-create-component']]
]);
