<template>
	<view class="top">
		<view class="avatar" >
			<u-avatar src="/static/img/user/people.png" shape="square" size="22" @click="center"></u-avatar>
		</view>



		<view class="switch" @click="change_role">
			切换身份
		</view>

		<view class="weather">
			{{city}}/{{weather}} {{temperature}}°
		</view>
		
	</view>
</template>

<script>
	
	export default {
		name: "topInfo",
		props: {
			city: {
				type: String,
				default: ""
			},
			weather: {
				type: String,
				default: ""
			},
			temperature: {
				type: Number,
				default: ""
			},
			role: {
				type: Number,
				default: ""
			}
		},
		data() {
			return {
				// 获取定位，天气
				
				// city: "" ,
				// weather: "" ,
				// temperature: "" ,
			};
		},
		methods: {
			center() {
				console.log(this.role);
				if (this.role == 1) {
					uni.navigateTo({
						url: './center'
					})
				} else {
					uni.navigateTo({
						url: './center'
					})
				}
			},
			change_role(){
				uni.redirectTo({
					url: '../login/index'
				})
			},
			
		},
	}
</script>

<style lang="scss" scoped>
	.top {
		display: flex;
		flex-direction: row;
		margin-top: 2rpx;
		height: 50rpx;

		.avatar {
			position: relative;
			left: 8rpx;
			top: 0rpx;
			width: 44rpx;
			height: 44rpx;
		}

		.weather {
			margin-left: 50rpx;
		}
		
			.role {
				margin-left: 40rpx;
		
			}
		
			.switch {
				position: relative;
				left: 26rpx;
				top: 4rpx;
				width: 274rpx;
				line-height: 44rpx;
				border-radius: 50rpx;
				text-align: center;
				background-color: #f39b1a;
				border: 1rpx solid #f39b1a;
			}
		
		
		}
</style>
