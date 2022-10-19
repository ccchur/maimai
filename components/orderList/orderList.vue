<template>
	<view>
		<view class="" v-if="orderList.length">
			<view class="order_box" v-for="(item, index) in orderList" :key="item.orderId"
				@click="order_info(item.orderId)">
				<view class="top_box">
					<view class="model">
						取送
					</view>
					<view class="goods_info">
						{{item.orderType}}/{{item.orderWeight}}KG
					</view>
				</view>

				<view class="bottom_box">
					<view class="start">

						<view class="left">
							<u--text prefixIcon="/static/img/user/point_green.png" iconStyle="font-size: 19px"
								block="true" text="起点："></u--text>
						</view>
						<view class="right">
							<u--text :lines="2" :text="item.orderSenderAddress"></u--text>
						</view>
					</view>

					<view class="destination">
						<view class="left">
							<u--text prefixIcon="/static/img/user/point_orange.png" iconStyle="font-size: 19px"
								block="true" text="终点："></u--text>
						</view>
						<view class="right">
							<u--text :lines="2" :text="item.orderRecipientAddress"></u--text>
						</view>
					</view>

					<view class="time_data">
						<view class="">
							<view class="time">
								{{item.orderTime}}
							</view>
							<view class="state">
								{{item.orderStatus}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "orderList",
		props: {
			orderList: {
				type: Array,
				default: ""
			}
		},
		data() {
			return {
				//订单号
				index: "",
			};
		},
		methods: {
			order_info(index){
				console.log("点击打开的订单号");
				console.log(index);
				this.$data.index = index
				let _this = this
				uni.navigateTo({
					url: "./orderInfo",
					success: function(index) {
					    // 通过eventChannel向被打开页面传送数据
					    index.eventChannel.emit('acceptDataFromOpenerPage', _this.$data.index)
					  }
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.order_box {
		border-radius: 16rpx;
		width: 700rpx;
		background-color: #fff;
		margin: 26rpx auto;
		overflow: hidden;

		.top_box {
			display: flex;
			flex-direction: row;
			padding: 20rpx;
			border-bottom: 2rpx solid #bbbbbb;

			.model {
				width: 84rpx;
				height: 42rpx;
				line-height: 42rpx;
				font-size: 24rpx;
				color: #0D60F2;
				background-color: #b6cffb;
				text-align: center;
				margin-right: 20rpx;
			}

			.goods_class {
				font-size: 28rpx;
				color: #787878;
			}
		}

		.bottom_box {
			padding: 20rpx;

			.start,
			.destination {
				display: flex;
				flex-direction: row;
				margin-bottom: 20rpx;

				.left {
					width: 25%;
				}

			}

			.time_data {
				display: flex;
				justify-content: flex-end;
				margin-top: 45rpx;

				.time {
					font-size: 26rpx;
					color: #787878;
					margin-bottom: 10rpx;
				}

				.state {
					text-align: right;
					font-size: 28rpx
				}
			}

		}

	}
</style>
