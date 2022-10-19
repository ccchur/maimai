<template>
	<view>
		
		<view class="top">
			<view class="avatar">
				<u-avatar :src="avatar_src" size="77"></u-avatar>
			</view>
			<view class="runner_name">
				{{riderName}}
			</view>
		</view>
		
		<view class="big_bottom">
			<view class="middle">
				<view class="income box1">
					<view class="account box2">
						我的账户 >
					</view>
					<view class="money box3">
						<view class="max">
							{{money}}
						</view>
						<view class="unit">
							元
						</view>
					</view>
					<view class="tips box4">
						今日预计收入
					</view>
				</view>
				
				<view class="order box1">
					<view class="count box2">
						订单统计 >
					</view>
					<view class="num box3">
						<view class="max">
							{{num}}
						</view>
						<view class="unit">
							单
						</view>
					</view>
					<view class="tips box4">
						今日完成单量
					</view>
				</view>
			</view>
			
			<view class="bottom">
				<view class="appeal">
					<u--text prefixIcon="/static/img/rider/appeal.png" iconStyle="font-size: 19px" text="违规申诉"></u--text>
				</view>
				<view class="evaluate">
					<u--text prefixIcon="/static/img/rider/smile.png" iconStyle="font-size: 19px" text="我的评价"></u--text>
				</view>
			</view>
		</view>
		<view class="btn_login">
			<u-button text="注销" :color="btnColor" @click="logout"></u-button>
		
		</view>
	</view>
</template>

<script>
	const api = require('../../utils/api.js')
	export default {
		data() {
			return {
				avatar_src: "/static/img/user/94.png",
				riderName: "",
				money: "",
				num: "",
			}
		},
		methods: {
			logout(){
				api.user_logout().then(res => {
					uni.removeStorageSync("cookie")
					uni.reLaunch({
						url:"./index"
					})
				})
			},
		},
		mounted() {
			api.rider_demand().then(res => {
				console.log(res);
				console.log("骑手信息");
				this.$data.riderName = res.data.riderName
				this.$data.money = res.data.riderCash
				this.$data.num = res.data.riderOrdersNum
				
				console.log(res);
			})
		}
	}
</script >

<style scoped lang="scss">
	.top {
			display: flex;
			flex-direction: row;
			padding: 60rpx;
	
			.runner_name {
				font-size: 36rpx;
				line-height: 140rpx;
				margin-left: 20rpx;
			}
		}
		
	.big_bottom {
		border: 1rpx solid #bbbbbb;
		box-shadow: 5rpx 5rpx 5rpx #bbbbbb;
	}
		
	.middle {
		display: flex;
		flex-direction: row;
		.box1 {
			width: 45%;
			height: 200rpx;
			margin: 20rpx;
			padding-left: 10rpx;
			border: 1rpx solid #bbbbbb;
			box-shadow: 5rpx 5rpx 5rpx #bbbbbb;
			border-radius: 10%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
		.box2 {
			
		}
		.box3 {
			display: flex;
			flex-direction: row;
			.max {
				font-size: 56rpx;
			}
			.unit {
				line-height: 80rpx;
			}
		}
		.box4 {
			text-align: center;
		}
	}
	
	.bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 20rpx;
	}
	.btn_login {
				position: relative;
				left: 50%;
				margin-left: -286rpx;
				width: 572rpx;
				height: 92rpx;
				font-size: 32rpx;
				margin-top: 42rpx;
				border-radius: 20rpx;
			}
</style>
