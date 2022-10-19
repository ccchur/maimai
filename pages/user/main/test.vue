<template>
	<view>
		<map :covers='covers' :latitude="latitude" :longitude="longitude" style="width: 100%; height: 60vh;"
			:show-location='true' :polyline="polyline"></map>
	</view>
</template>

<script>
	var QQMapWX = require('@/common/qqmap/qqmap-wx-jssdk.js')
	var qqmapsdk = new QQMapWX({
		key: '4X7BZ-G7AKD-EQE4E-PTUPW-CDJBO-JEB7T'
	});
	export default {
		data() {
			return {
				latitude: 23.16,
				longitude: 113.23,
				polyline: [{
					points: [{
						latitude: 23.159925,
						longitude: 113.230081
					}, {
						latitude: 23.160019000000002,
						longitude: 113.230189
					}, {
						latitude: 23.160044000000003,
						longitude: 113.23025299999999
					}, {
						latitude: 23.160055000000003,
						longitude: 113.230392
					}],
					color: '#FF0000DD',
					width: 4
				}],
			}
		},
		methods: {

		},
		onLoad() {
		// 	qqmapsdk.direction({
		// 		mode: 'driving', //可选值：'driving'（驾车）、'walking'（步行）、'bicycling'（骑行），不填默认：'driving',可不填
		// 		//from参数不填默认当前地址
		// 		from: {
		// 			latitude: 23.16,
		// 			longitude: 113.23
		// 		},
		// 		to: {
		// 			latitude: 23.125178,
		// 			longitude: 113.280637
		// 		},
		// 		success: (res) => {
		// 			console.log(res);
		// 			var ret = res;
		// 			var coors = ret.result.routes[0].polyline,
		// 				pl = [];
		// 			//坐标解压（返回的点串坐标，通过前向差分进行压缩）
		// 			var kr = 1000000;
		// 			for (var i = 2; i < coors.length; i++) {
		// 				coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
		// 			}
		// 			//将解压后的坐标放入点串数组pl中
		// 			for (var i = 0; i < coors.length; i += 2) {
		// 				pl.push({
		// 					latitude: coors[i],
		// 					longitude: coors[i + 1]
		// 				})
		// 			}
		// 			console.log(pl)
		// 			//设置polyline属性，将路线显示出来,将解压坐标第一个数据作为起点
		// 			console.log("打印this");
		// 			console.log(this.$data);
		// 			this.$data.latitude = pl[0].latitude,
		// 				this.$data.longitude = pl[0].longitude,
		// 				this.$data.polyline = [{
		// 					points: pl,
		// 					color: '#FF0000DD',
		// 					width: 4
		// 				}]

		// 		},
		// 		fail: function(error) {
		// 			console.error(error);
		// 		},
		// 		complete: function(res) {
		// 			console.log(res);
		// 		}
		// 	});
		 }
		
		
	}
</script>

<style>

</style>
