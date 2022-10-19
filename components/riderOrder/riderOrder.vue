<template>
	<view class="page">
		<view class="list" v-for="(item, index) in order_list" :key="item.orderId">
			
			<view class="price">
				￥{{item.orderBasicFee}}
			</view>
	
			<view class="order_box">
				<view class="start">
	
					<view class="left">
						<u--text prefixIcon="/static/img/user/point_green.png" iconStyle="font-size: 19px" block="true"
							text="起点："></u--text>
					</view>
					<view class="right">
						<u--text :lines="2" :text="item.orderSenderAddress"></u--text>
					</view>
				</view>
	
				<view class="destination">
					<view class="left">
						<u--text prefixIcon="/static/img/user/point_orange.png" iconStyle="font-size: 19px" block="true"
							text="终点："></u--text>
					</view>
					<view class="right">
						<u--text :lines="2" :text="item.orderRecipientAddress"></u--text>
					</view>
				</view>
	
			</view>
	
			<view class="time_type">
				<view class="time">
					<view class="left">
						<u--text prefixIcon="clock-fill" iconStyle="font-size: 19px" block="true"
							text="时间："></u--text>
					</view>
					<view class="right">
						{{item.orderTime}}
					</view>
				</view>
				
				<view class="type" v-show="">
					{{item.orderType}}/{{item.orderWeight}}KG
				</view>
			</view>
	
			<view class="note">
				<view class="note_left">
				<view class="left">
					<u--text prefixIcon="edit-pen-fill" iconStyle="font-size: 19px" block="true"
						text="备注："></u--text>
				</view>
				<view class="right">
					{{item.orderNote}}
				</view>
				</view>
				<view class="btn" @click="accept(item.orderId)" v-show="flag">
					接单
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"riderOrder",
		props: {
			order_list: {
				type: Array,
				default: ""
			},
			flag: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
		
			};
		},
		methods: {
			accept(indexId){
				
				console.log("传入列表");
				console.log(this.order_list);
				console.log(this.order_list[0].orderId);
				console.log("接单,单号"+indexId);
				console.log(indexId);
				uni.navigateTo({
					url: './main/orderInfo',
					success: function(index) {
					    // 通过eventChannel向被打开页面传送数据
					    index.eventChannel.emit('acceptDataFromOpenerPage', indexId)
					  }
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		margin: 20rpx 0;
		padding: 10rpx;
		border: 1rpx solid #bbbbbb;
		box-shadow: 5rpx 5rpx 5rpx #bbbbbb;
		border-radius: 5%;
		.price {
			font-size: 36rpx;
			color: #de3232;
			padding: 20rpx;
		}

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
		.time_type, .note{
			display: flex;
			justify-content: space-between;
			.time, .note_left {
				display: flex;
				flex-direction: row;
				margin-bottom: 20rpx;
				margin-left: 20rpx;
			
				.left {
					width: 180rpx;
				}
			
			}
			
			.type, .btn {
				margin-right: 20rpx;
			}
			
			
		}
		.btn {
			width: 94rpx;
			height: 52rpx;
			background-color: #f39b1a;
			border-radius: 10%;
			color: #fff;
			text-align: center;
			line-height: 52rpx;
		}
		
	}
</style>