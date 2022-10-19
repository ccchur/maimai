<template>
	<view>
		<view class="map">
			<!-- 中间地图 -->
			<view>
				<view class="page-body">
					<view class="page-section page-section-gap">
						<Map :latitude="latitude" :longitude="longitude"></Map>
					</view>
				</view>
			</view>

		</view>

		<view class="main">
			<!-- 打开查看详细信息 -->
			<view class="icon" @click="order_info">
				<u-icon name="arrow-up"></u-icon>
			</view>

			<view class="info">
				<riderOrder :order_list="order_list" :flag="false"></riderOrder>
			</view>

			<!-- 按钮 -->
			<!-- 确认接单 -->
			<view class="btn" v-if="state == 1">
				<u-button text="确认接单" color="#f39b1a" @click="accept"></u-button>
			</view>
			<!-- 送达 -->
			<view class="btn" v-if="state ==  2">
				<u-button text="确认已送达" color='#0bbd61' @click="success"></u-button>
			</view>
			<!-- 继续接单，返回首页 -->
			<view class="btn" v-if="state ==  3">
				<u-button text="继续接单" color="#25aff3" @click="goOn"></u-button>
			</view>
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
	const api = require("../../../utils/api.js")
	import riderOrder from "@/components/riderOrder/riderOrder.vue"
	import Map from "@/components/map/map.vue"
	export default {
		components: {
			riderOrder,
			Map
		},

		data() {
			return {
				latitude: "", //纬度
				longitude: "", //经度
				scale: 13, //缩放级别
				bottomData: false,
				//单号
				index: "",
				
				// 订单状态
				state: 1,

				order_list: [{
					orderBasicFee: "",
					orderNote: "",
					orderTime: "",
					orderType: "",
					orderWeight: "",
					orderSenderAddress: "",
					orderRecipientAddress: "",
				}],
				//中间量
				orderRecipientId: "",
				orderSenderId: "",
			}
		},
		methods: {
			order_info() {
				let _this = this
				uni.navigateTo({
					url: "./moreInfo",
					success: function(index) {
						// 通过eventChannel向被打开页面传送数据
						index.eventChannel.emit('acceptDataFromOpenerPage', _this.$data.index)
					}
				})
			},

			accept() {
				console.log("接受订单");
				let _this = this

				api.rider_accept({
					orderId: this.$data.index
				}).then(res => {
					console.log("骑手已接单");
					this.$refs.uToast.show({
						type: 'success',
						message: "接单成功，尽快取送",
					})
					this.$data.state++
				}).catch(err => {
					this.$refs.uToast.show({
						type: 'error',
						message: "接单失败,请重试！",
					})
					
				})
			},
			success(){
				console.log("订单已经送达");
				this.$refs.uToast.show({
					type: 'success',
					message: "完成订单！",
				})
					this.$data.state++
			},
			goOn(){
				console.log("继续接单");
				
				uni.navigateTo({
					url: '../index'
				})
				this.$data.state = 1
			}
		},

		mounted() {
			this.$data.latitude= latitude
			this.$data.longitude= longitude
			let _this = this
			const eventChannel = this.getOpenerEventChannel();
			// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
			eventChannel.on('acceptDataFromOpenerPage', function(data) {
				console.log(JSON.stringify(data) + "单号id");
				_this.$data.index = data
			})

			console.log(this.$data.index);
			console.log("单号id");

			api.order_demand({
				id: this.$data.index
			}).then(res => {
				console.log(res.data.tOrder);
				this.$data.order_list[0].orderBasicFee = res.data.tOrder.orderBasicFee
				this.$data.order_list[0].orderSenderAddress = res.data.tOrder.orderSenderAddress
				this.$data.order_list[0].orderRecipientAddress = res.data.tOrder.orderRecipientAddress
				this.$data.order_list[0].orderTime = res.data.tOrder.orderTime
				this.$data.order_list[0].orderType = res.data.tOrder.orderType
				this.$data.order_list[0].orderWeight = res.data.tOrder.orderWeight
				this.$data.order_list[0].orderNote = res.data.tOrder.orderNote
			})



		}

	}
</script>

<style scoped lang="scss">
	.icon {
		background-color: #fff;
		width: 20vw;
		height: 4vh;
		margin: 0 auto;
		margin-bottom: -20rpx;
		border-radius: 15% 15% 0 0;
		z-index: 5;
		display: flex;
		justify-content: center;
	}

	.main {
		position: absolute;
		top: 56vh;
		width: 100%;
		height: 30vh;
		text-align: center;
	}

	.info {
		height: 30vh;
		margin-top: -20rpx 0;

	}

	.btn {
		width: 700rpx;
		margin: 80rpx auto;
		border-radius: 10rpx;
	}
</style>
