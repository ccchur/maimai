<template>
	<view class="page">
		<!-- 顶部 -->
		<topInfo :weather="weather" :city="city" :temperature="temperature" :role="role"></topInfo>
		<!-- 轮播图 -->
		<view class="swiper1">
			<u-swiper :list="list1"></u-swiper>
		</view>


		<view class="my_order" @click="myOrder">
			我的任务
		</view>

		<!-- 订单列表 -->
		<view class="order_list">

			<view class="img" v-if="!order_list.length">
				<image src="/static/img/rider/haveNoOrder.png"></image>
			</view>

			<riderOrder v-else :order_list="order_list"></riderOrder>
		</view>

		<!-- 按钮 -->
		<view class="btn">
			<u-button text="刷新列表" color="#f39b1a" @click="refresh"></u-button>
		</view>

		<!-- 提示框 -->
		<view>
			<u-toast ref="uToast"></u-toast>
		</view>
	</view>
</template>

<script>
	import {
		latitude,
		longitude,
		city,
		weather,
		temperature,
	} from "@/utils/getLocation.js"
	import topInfo from "@/components/topInfo/topInfo.vue"
	import riderOrder from "@/components/riderOrder/riderOrder.vue"
	const api = require('../../utils/api.js')
	export default {
		components: {
			topInfo,
			riderOrder
		},
		data() {
			return {
				role: 2,
				// 轮播图
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				order_list: [],
				// 天气
				weather: "",
				// 温度
				temperature: "",
				city: "",
				//发件地址ID
				order_sender_id: "",
				//收件地址ID
				order_recipient_id: ""
			}
		},
		methods: {
			refresh() {
				console.log("刷新");
				api.order_searchOrder().then(res => {
					console.log(res.data.records);
					this.$data.order_list = res.data.records
					this.$refs.uToast.show({
						type: 'success',
						message: '刷新成功',
					})
				}).catch(err => {
					this.$refs.uToast.show({
						type: 'err',
						message: err,
					})
				})
				
			},
			myOrder(){
				uni.navigateTo({
					url: './main/myOrder'
				})
			}
		},

		onShow() {
			// 获取定位，天气
			this.$data.latitude = latitude
			this.$data.longitude = longitude
			this.$data.city = city
			this.$data.weather = weather
			this.$data.temperature = temperature
			// 否判断是否登录
			let isAuth = uni.getStorageSync('cookie')

			console.log(isAuth);
			if (!isAuth) {
				uni.reLaunch({
					url: '../login/login'
				});
			}

			// 判断有没有发布订单
			api.order_searchOrder().then(res => {
				console.log(res.data.records);
				this.$data.order_list = res.data.records
			}).catch(err => {
				this.$refs.uToast.show({
					type: 'err',
					message: err,
				})
			})
		}
	}
</script>

<style lang="scss" scoped>
	.page {}

	.swiper1 {
		padding: 20rpx;
	}

	.my_order {
		width: 206rpx;
		height: 52rpx;
		color: #fff;
		line-height: 52rpx;
		background-color: #f39b1a;
		text-align: center;
		border-radius: 10%;
		margin-left: 20rpx;
	}

	.order_list {
		display: flex;
		flex-direction: column;

		padding: 50rpx 20rpx 100rpx 20rpx;

		.img {
			display: flex;
			justify-content: center;

			image {
				margin-top: 50rpx;
				width: 50%;

			}
		}
	}



	.btn {
		position: fixed;
		bottom: 0rpx;
		left: 50%;
		margin-left: -350rpx;
		margin-top: 300rpx;
		border-radius: 10rpx;
		overflow: hidden;
		width: 700rpx;
	}
</style>
