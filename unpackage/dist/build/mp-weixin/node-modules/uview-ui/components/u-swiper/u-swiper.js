(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/uview-ui/components/u-swiper/u-swiper"],{"0135":function(e,t,n){"use strict";n.r(t);var i=n("ac63"),u=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=u.a},2638:function(e,t,n){"use strict";n.r(t);var i=n("a9bb"),u=n("0135");for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);n("e9ca");var r,a=n("f0c5"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"5678f2ce",null,!1,i["a"],r);t["default"]=c.exports},"363c":function(e,t,n){},a9bb:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uLoadingIcon:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(n.bind(null,"5e2f"))},uSwiperIndicator:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-swiper-indicator/u-swiper-indicator")]).then(n.bind(null,"cbd2"))}},u=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$u.addUnit(e.height)),i=e.$u.addUnit(e.radius),u=e.loading?null:e.$u.addUnit(e.height),o=e.loading?null:e.$u.addUnit(e.previousMargin),r=e.loading?null:e.$u.addUnit(e.nextMargin),a=e.loading?null:e.__map(e.list,(function(t,n){var i=e.__get_orig(t),u=e.__get_style([e.itemStyle(n)]),o=e.getItemType(t),r="image"===o?e.$u.addUnit(e.height):null,a="image"===o?e.$u.addUnit(e.radius):null,c="image"===o?e.getSource(t):null,d=e.getItemType(t),l="video"===d?e.$u.addUnit(e.height):null,s="video"===d?e.getSource(t):null,g="video"===d?e.getPoster(t):null,f="video"===d?e.showTitle&&e.$u.test.object(t)&&t.title:null,m=e.showTitle&&e.$u.test.object(t)&&t.title&&e.$u.test.image(e.getSource(t));return{$orig:i,s0:u,m0:o,g5:r,g6:a,m1:c,m2:d,g7:l,m3:s,m4:g,g8:f,g9:m}})),c=e.__get_style([e.$u.addStyle(e.indicatorStyle)]);e.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:u,g3:o,g4:r,l0:a,s1:c}})},o=[]},ac63:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n("b406"));function u(e){return e&&e.__esModule?e:{default:e}}var o={name:"u-swiper",mixins:[e.$u.mpMixin,e.$u.mixin,i.default],data:function(){return{currentIndex:0}},watch:{current:function(e,t){e!==t&&(this.currentIndex=e)}},computed:{itemStyle:function(){var t=this;return function(n){var i={};return t.nextMargin&&t.previousMargin&&(i.borderRadius=e.$u.addUnit(t.radius),n!==t.currentIndex&&(i.transform="scale(0.92)")),i}}},methods:{getItemType:function(t){return"string"===typeof t?e.$u.test.video(this.getSource(t))?"video":"image":"object"===typeof t&&this.keyName?t.type?"image"===t.type?"image":"video"===t.type?"video":"image":e.$u.test.video(this.getSource(t))?"video":"image":void 0},getSource:function(t){return"string"===typeof t?t:"object"===typeof t&&this.keyName?t[this.keyName]:(e.$u.error("请按格式传递列表参数"),"")},change:function(e){var t=e.detail.current;this.pauseVideo(this.currentIndex),this.currentIndex=t,this.$emit("change",e.detail)},pauseVideo:function(t){var n=this.getSource(this.list[t]);if(e.$u.test.video(n)){var i=e.createVideoContext("video-".concat(t),this);i.pause()}},getPoster:function(e){return"object"===typeof e&&e.poster?e.poster:""},clickHandler:function(e){this.$emit("click",e)}}};t.default=o}).call(this,n("543d")["default"])},e9ca:function(e,t,n){"use strict";var i=n("363c"),u=n.n(i);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/uview-ui/components/u-swiper/u-swiper-create-component',
    {
        'node-modules/uview-ui/components/u-swiper/u-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2638"))
        })
    },
    [['node-modules/uview-ui/components/u-swiper/u-swiper-create-component']]
]);
