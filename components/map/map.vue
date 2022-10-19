<template>
	<view>
		<map :covers='covers' :latitude="latitude" :longitude="longitude" style="width: 100vw; height: 60vh;"
			:show-location='true' :polyline="polyline"></map>
	</view>
</template>

<script>
	import {
		latitude,
		longitude,
	} from "@/utils/getLocation.js"
	var QQMapWX = require('@/common/qqmap/qqmap-wx-jssdk.js')
	var qqmapsdk = new QQMapWX({
		key: '4X7BZ-G7AKD-EQE4E-PTUPW-CDJBO-JEB7T'
	});
	export default {
		name: "Map",
		data() {
			return {
				polyline: [],
				latitude: "",
				longitude: ""
			};
		},
		mounted() {
			// this.getPolyline(this.address)
			this.$data.latitude = latitude
			this.$data.longitude = longitude
		},
		methods: {
			getPolyline1(){
				this.getPolyline(this.address)
			},

			getPolyline(address) {
				qqmapsdk.direction({
					mode: 'driving', //可选值：'driving'（驾车）、'walking'（步行）、'bicycling'（骑行），不填默认：'driving',可不填
					//from参数不填默认当前地址
					from: address.start,
					to: address.end,
					success: (res) => {
						console.log(res);
						var ret = res;
						var coors = ret.result.routes[0].polyline,
							pl = [];
						//坐标解压（返回的点串坐标，通过前向差分进行压缩）
						var kr = 1000000;
						for (var i = 2; i < coors.length; i++) {
							coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
						}
						//将解压后的坐标放入点串数组pl中
						for (var i = 0; i < coors.length; i += 2) {
							pl.push({
								latitude: coors[i],
								longitude: coors[i + 1]
							})
						}
						console.log(pl)
						//设置polyline属性，将路线显示出来,将解压坐标第一个数据作为起点
						console.log("打印this");
						console.log(this.$data);
						this.$data.latitude = pl[0].latitude,
							this.$data.longitude = pl[0].longitude,
							this.$data.polyline = [{
								points: pl,
								color: '#FF0000DD',
								width: 4
							}]

					},
					fail: function(error) {
						console.error(error);
					},
					complete: function(res) {
						console.log(res);
					}
				});
			}
		}


	}
</script>

<style>

</style>
