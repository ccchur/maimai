<template>
	<view>
		<!-- 顶部 -->
		<topInfo :weather="weather" :city="city" :temperature="temperature" :role="role"></topInfo>

		<!-- 标签 -->
		<view class="tabs">
			<u-sticky bgColor="#fff">
				<u-tabs :list="list1"></u-tabs>
			</u-sticky>
		</view>

		<!-- 条形通知 -->
		<view class="noticeBar">
			<wyb-noticeBar :text="text_activity" width="355" bgColor="#fff" color="#101010">
			</wyb-noticeBar>

			<view class="" @click="acceptedOrder">
				<wyb-noticeBar :text="text_release" width="355" bgColor="#fff" color="#0d60f2" v-if="isPush">
				</wyb-noticeBar>
			</view>

		</view>


		<!-- 中间地图 -->

		<view class="map">
			<map :covers='covers' :latitude="latitude" :longitude="longitude" style="width: 100vw; height: 60vh;"
				:show-location='true' :polyline="polyline"></map>
		</view>



		<!-- 我的订单 -->
		<view class="order">
			<u-button text="我的订单 >" icon="/static/img/user/order.png" @click="myOrder"></u-button>
		</view>

		<!-- 填写订单 -->
		<goodsForm></goodsForm>



		<!-- 按钮 -->
		<view class="btn">
			<u-button text="确认订单" color="#f39b1a" @click="submit"></u-button>
		</view>

	</view>

</template>

<script>
	import {
		city,
		weather,
		temperature,
		latitude,
		longitude,
	} from "@/utils/getLocation.js"

	//地图

	import goodsForm from '@/components/goodsForm/goodsForm.vue'
	import orderState from '@/components/orderState/orderState.vue'
	import topInfo from "@/components/topInfo/topInfo"
	import Map from "@/components/map/map.vue"

	const api = require('../../utils/api.js')


	export default {
		components: {
			goodsForm,
			// ordertake,
			topInfo,
			//地图
			Map
		},
		data() {
			return {
				list1: [{
					name: "帮我送"
				}, {
					name: "帮我取"
				}],
				// 地图
				latitude: '',
				longitude: '',

				weather: "",
				temperature: "",
				city: "",
				title: 'map',
				address: {
					start: {
						latitude: '',
						longitude: '',
					},
					end: {
						latitude: '',
						longitude: '',
					},
				},


				role: 1,
				// 通知条
				text_activity: ['活动信息日常更新中.......'],
				isPush: false,
				text_release: ['您有已发布的跑腿单'],
				text_accept: ['您有已被接单的跑腿单'],


			}
		},
		computed: {

		},

		methods: {

			//我的订单
			myOrder() {
				uni.navigateTo({
					url: './main/myOrder'
				})
			},
			//已接受订单
			acceptedOrder() {
				console.log("查看已接单");
				// uni.navigateTo({
				// 	url: './main/acceptedOrder'
				// })
			},
			//确认订单
			submit() {


				console.log("确认订单");
				// 计算价格,距离
				api.order_orderParameters({
					"startAddress": this.$store.state.sendAbout.sendAddress,
					"endAddress": this.$store.state.sendAbout.acceptAddress
				}).then(res => {

					console.log("确认订单返回结果");
					console.log(res.data);
					// 获取经纬度
					this.$store.state.sendAbout.sendlatitude = res.data.startLatitudeLongitude.split(
						",")[0]
					this.$store.state.sendAbout.sendlongitude = res.data.startLatitudeLongitude.split(
						",")[1]
					this.$store.state.sendAbout.acceptlatitude = res.data.endLatitudeLongitude.split(
						",")[0]
					this.$store.state.sendAbout.acceptlongitude = res.data.endLatitudeLongitude.split(
						",")[1]

					// 标记位置
					//价格
					this.$store.state.sendAbout.price = res.data.orderBasicFee
					this.$store.state.sendAbout.distance = res.data.orderDistance
				}).catch(err => {
					console.log(err);
				})

				uni.navigateTo({
					url: './main/confirmOrder'
				})
			}
		},
		mounted() {
			console.log(this.$data);
			let isAuth = uni.getStorageSync('cookie')
			console.log(isAuth);
			// 判断是否登录
			if (!isAuth) {
				uni.reLaunch({
					url: '../login/login'
				});
			}


			this.$data.weather = weather
			this.$data.temperature = temperature
			this.$data.city = city
			this.$data.latitude = latitude
			this.$data.longitude = longitude
			// this.$data.address = {
			// 	start: {
			// 		latitude: this.$store.state.sendAbout.sendlatitude,
			// 		longitude: this.$store.state.sendAbout.sendlongitude,
			// 	},
			// 	end: {
			// 		latitude: this.$store.state.sendAbout.acceptlatitude,
			// 		longitude: this.$store.state.sendAbout.acceptlongitude,
			// 	},
			// }

			// 判断有没有发布订单

			// api.order_searchMyOrder().then(res => {
			// 	console.log(res.data.records);
			// 	console.log("全部订单");
			// 	if (res.data.records.length) {
			// 		this.isPush = true
			// 	}

			// })
		}

	}
</script>

<style scoped lang="scss">
	.map {
		height: 60vh;
	}

	.noticeBar {
		position: absolute;
		z-index: 5;
		border-radius: 50rpx;
		margin-top: 10rpx;
		width: 100%;

	}

	.order {
		position: absolute;
		top: 800rpx;
		left: 32rpx;
		z-index: 5;
		display: flex;
		width: 200rpx;
	}

	.btn {
		position: relative;
		left: 50%;
		margin-left: -350rpx;
		margin-top: 30rpx;
		margin-bottom: 50rpx;
		border-radius: 10rpx;
		overflow: hidden;
		width: 700rpx;
	}
</style>
