(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/rider/center"],{"0b08":function(e,n,t){"use strict";t.r(n);var u=t("cee5"),o=t("a3a0");for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("10cd");var a,c=t("f0c5"),i=Object(c["a"])(o["default"],u["b"],u["c"],!1,null,"732c5543",null,!1,u["a"],a);n["default"]=i.exports},"10cd":function(e,n,t){"use strict";var u=t("a232"),o=t.n(u);o.a},"8b27":function(e,n,t){"use strict";(function(e){t("e115");u(t("66fd"));var n=u(t("0b08"));function u(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},a232:function(e,n,t){},a3a0:function(e,n,t){"use strict";t.r(n);var u=t("dbb7"),o=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,(function(){return u[e]}))}(r);n["default"]=o.a},cee5:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return u}));var u={uAvatar:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-avatar/u-avatar")]).then(t.bind(null,"993c"))},"u-Text":function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u--text/u--text")]).then(t.bind(null,"c8dca"))},uButton:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-button/u-button")]).then(t.bind(null,"d68d"))}},o=function(){var e=this,n=e.$createElement;e._self._c},r=[]},dbb7:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=t("fca2"),o={data:function(){return{avatar_src:"/static/img/user/94.png",riderName:"",money:"",num:""}},methods:{logout:function(){u.user_logout().then((function(n){e.removeStorageSync("cookie"),e.reLaunch({url:"./index"})}))}},mounted:function(){var e=this;u.rider_demand().then((function(n){console.log(n),console.log("骑手信息"),e.$data.riderName=n.data.riderName,e.$data.money=n.data.riderCash,e.$data.num=n.data.riderOrdersNum,console.log(n)}))}};n.default=o}).call(this,t("543d")["default"])}},[["8b27","common/runtime","common/vendor"]]]);