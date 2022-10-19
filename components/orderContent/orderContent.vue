<template>
	<view>
		<view class="page-body">
			<view class="title">
				<text>{{orderList.tOrder.orderStatus}}</text>
			</view>

			<view class="telephone box">
				<view class="start">
					<u--text prefixIcon="/static/img/user/telephone.png" iconStyle="font-size: 19px" text="  致电起点"
						lineHeight="68rpx" @click="senderCall"></u--text>
				</view>
				<view class="end">
					<u--text prefixIcon="/static/img/user/telephone.png" iconStyle="font-size: 19px" text="  致电终点"
						lineHeight="68rpx" mode="phone" @click="recipientCall"></u--text>
				</view>
			</view>

			<view class="distribution_info box">
				<view class="top_box">
					<view class="title">
						配送信息
					</view>
				</view>

				<view class="bottom_box">
					<view class="time box_format">
						<view class="left">
							期望时间
						</view>
						<view class="right">
							立即配送
						</view>
					</view>

					<view class="startAdrres box_format address">
						<view class="left">
							配送起点
						</view>
						<view class="right ">
							<u--text :lines="1" :text="orderList.tOrder.orderSenderAddress"></u--text>

							<view class="user_info">
								<view class="userName">
									{{orderList.tOrder.orderSenderName}}
								</view>
								<view class="userPhone">
									{{orderList.tOrder.orderSenderPhone}}
								</view>
							</view>
						</view>
					</view>

					<view class="endAdrres box_format address">
						<view class="left">
							配送终点
						</view>
						<view class="right ">
							<u--text :lines="1" :text="orderList.tOrder.orderRecipientAddress"></u--text>

							<view class="user_info">
								<view class="userName">
									{{orderList.tOrder.orderRecipientName}}
								</view>
								<view class="userPhone">
									{{orderList.tOrder.orderRecipientPhone}}
								</view>
							</view>
						</view>
					</view>

					<view class="goods box_format">
						<view class="left">
							配送物品
						</view>
						<view class="right">
							{{orderList.tOrder.orderType}}/{{orderList.tOrder.orderWeight}}KG
						</view>
					</view>

					<view class="runner box_format" v-if="orderList.tOrder.orderStatus == '骑手已接单'">
						<view class="left">
							配送跑者
						</view>
						<view class="right">
							{{orderList.tRider.riderName}}
						</view>
					</view>

				</view>
			</view>

			<view class="telephone_runner box" v-if="orderList.tOrder.orderStatus == '骑手已接单'">
				<view class="runnerPhone">

				</view>
				<view class="runnerPhone">
					<u--text prefixIcon="/static/img/user/telephone.png" iconStyle="font-size: 19px" text="  致电跑者"
						lineHeight="68rpx" @click="riderCall"></u--text>
				</view>
			</view>

			<view class="order_infos box">
				<view class="top_box">
					<view class="title">
						订单信息
					</view>
				</view>

				<view class="bottom_box">
					<view class="order_num box_format">
						<view class="left">
							订单号码
						</view>
						<view class="right">
							{{orderList.tOrder.orderId}}
						</view>
					</view>

					<view class="order_time box_format">
						<view class="left">
							下单时间
						</view>
						<view class="right">
							{{orderList.tOrder.orderTime}}
						</view>
					</view>

					<view class="order_pay box_format">
						<view class="left">
							支付方式
						</view>
						<view class="right">
							在线支付
						</view>
					</view>
				</view>
			</view>

			<view class="runner_cost box">
				<view class="top_box">
					<view class="title">
						跑腿费
					</view>
				</view>

				<view class="bottom_box">
					<view class="order_cost box_format">
						<view class="left init_cost">
							起步跑腿费（{{orderList.tOrder.orderDistance}}米）
						</view>
						<view class="right">
							{{orderList.tOrder.orderBasicFee}}元
						</view>
					</view>

					<view class="order_discount box_format">
						<view class="left">
							优惠折扣
						</view>
						<view class="right">
							0元
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "orderContent",
		props: {
			orderList: {
				type: Object,
				default: "",
			}
		},
		data() {
			return {

			};
		},
		computed: {
			
		},
		methods: {
			senderCall(){
				uni.makePhoneCall({
					phoneNumber: this.orderList.orderSenderPhone //仅为示例
				});
			},
			recipientCall(){
				uni.makePhoneCall({
					phoneNumber: this.orderList.orderRecipientPhone //仅为示例
				});
			},
			riderCall() {
				
				uni.makePhoneCall({
					phoneNumber: this.orderList.tRider.riderPhone //仅为示例
				});
			},
			
		}
	}
</script>

<style scoped lang="scss">
	.page-body {
		height: 100%;
		min-height: 100%;
		background-color: #ebebeb;
		overflow: hidden;
	}

	.title {
		position: relative;
		width: 700rpx;
		left: 54rpx;
		color: #101010;
		font-size: 28rpx;
		margin: 16rpx;
	}

	.box {
		border-radius: 16rpx;
		width: 700rpx;
		background-color: #fff;
		margin: 26rpx auto;
		overflow: hidden;
	}

	.telephone {
		display: flex;
		justify-content: space-around;
		height: 68rpx;
	}

	.distribution_info,
	.order_infos,
	.runner_cost {
		.top_box {
			display: flex;
			flex-direction: row;
			padding: 10rpx;
			border-bottom: 2rpx solid #bbbbbb;
		}

		.bottom_box {
			.box_format {
				display: flex;
				justify-content: space-between;
				padding: 20rpx;

				.left {
					width: 200rpx;
					color: #787878;
				}

				.init_cost {
					width: 400rpx;
				}

				.right {
					float: left;

					.user_info {
						display: flex;
						flex-direction: row;
						font-size: 26rpx;
						color: #787878;

						.userName {
							margin-right: 30rpx;
						}
					}
				}

			}

			.address {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;

				.right {
					width: 450rpx;
				}
			}

		}
	}

	.telephone_runner {
		display: flex;
		justify-content: space-around;
		height: 68rpx;
	}
</style>
