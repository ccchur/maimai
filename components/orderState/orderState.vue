<template>
	<!-- 信息 -->
	<view class="order_info">
		
		<view class="moreInfo" @click="to_order_info">
			<u-icon name="arrow-up"></u-icon>
		</view>
		
		<view class="info">
			
			<view class="runner">
				<u-avatar :src="avatar_src" size="50"></u-avatar>
				{{userName}}
			</view>
	
			<view class="order_box">
				<view class="start">
	
					<view class="left">
						<u--text prefixIcon="/static/home/point_green.png" iconStyle="font-size: 19px" block="true"
							text="起点："></u--text>
					</view>
					<view class="right">
						<u--text :lines="2" :text="sendAddress"></u--text>
					</view>
				</view>
	
				<view class="destination">
					<view class="left">
						<u--text prefixIcon="/static/home/point_orange.png" iconStyle="font-size: 19px" block="true"
							text="终点："></u--text>
					</view>
					<view class="right">
						<u--text :lines="2" :text="acceptAddress"></u--text>
					</view>
				</view>
	
	
			</view>
		</view>
	
		<view class="order_state">
			<u-button :text="order_state" color="#F39B1A" @click="change_order_state"></u-button>
		</view>
	</view>
		
</template>

<script>
	export default {
		name:"orderState",
		data() {
			return {
				latitude: "22.72174",
				longitude: "114.06031",
				avatar_src: "/static/home/94.png",
				markers: [{
						id: 0,
						iconPath: "/static/home/run-fill.png",
						longitude: 114.06031,
						latitude: 21.72174,
						width: 30,
						height: 30
					}]
				
				
				
			};
		},
		computed: {
			ID: {
				get() {
					return this.$store.state.orderAbout.orderList[0].ID
				}
			},
			sendAddress: {
				get() {
					return this.$store.state.orderAbout.orderList[0].sendAddress
				}
			},
			acceptAddress: {
				get() {
					return this.$store.state.orderAbout.orderList[0].acceptAddress
				}
			},
			userName: {
				get() {
					return this.$store.state.orderAbout.orderList[0].riderName
				}
			},
			order_state: {
				get() {
					if (this.$store.state.orderAbout.orderList[0].state == "已接单") {
						return "取消接单"
					}
					if (this.$store.state.orderAbout.orderList[0].state == "正在跑腿") {
						return "跑者正在送货"
					}
				}
			}
		},
		methods: {
			to_order_info() {
				uni.navigateTo({
					url: '../../pages/home/delivery/delivery'
				})
			},
			change_order_state(){
				this.$store.commit('state_change', {ID: ID, state: "已取消"})
				let _this = this
				uni.navigateTo({
					url: '../../pages/home/delivery/order_info',
					success: function(index) {
					    // 通过eventChannel向被打开页面传送数据
						// 传送数据是订单号码
					    index.eventChannel.emit('acceptDataFromOpenerPage', ID)
					  }
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.order_info {
		.moreInfo {
			display: flex;
			justify-content: center;
			padding-bottom: 20rpx;
		}

		.info {
			display: flex;
			flex-direction: row;

			.order_box {
				padding: 20rpx;

				.start,
				.destination {
					display: flex;
					flex-direction: row;
					margin-bottom: 20rpx;

					.left {
						width: 180rpx;
					}

				}


			}

			.runner {
				width: 140rpx;
				padding: 20rpx;
			}
		}

		.order_state {}
	}
</style>
