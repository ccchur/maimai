<template>
	<view>
		<view class="user">
			<view class="avatar">
				<u-avatar :src="avatar_src" size="77"></u-avatar>

			</view>
			<view class="user_name">
				{{userName}}
			</view>
		</view>

		<view class="discounts box">
			<view class="left">
				<view class="icon">
					<u-icon name="/static/img/user/packet.png" size="24"></u-icon>
				</view>
				<view class="title">
					<u--text text="我的红包" size="16" lineHeight="24"></u--text>
				</view>
			</view>

			<view class="right">
				<u-icon name="arrow-right" size="24"></u-icon>
			</view>
		</view>

		<view class="setting box">
			<view class="left">
				<view class="icon">
					<u-icon name="/static/img/user/setting-filling.png" size="24"></u-icon>
				</view>
				<view class="title">
					<u--text text="设置" size="16" lineHeight="24"></u--text>
				</view>
			</view>

			<view class="right">
				<u-icon name="arrow-right" size="24"></u-icon>
			</view>
		</view>

		<view class="telephone box">
			<view class="left">
				<view class="icon">
					<u-icon name="/static/img/user/telephone.png" size="24"></u-icon>
				</view>
				<view class="title">
					<u--text text="联系客服" size="16" lineHeight="24"></u--text>
				</view>
			</view>

			<view class="right">
				<u-icon name="arrow-right" size="24"></u-icon>
			</view>
		</view>

		<view class="opinions box">
			<view class="left">
				<view class="icon">
					<u-icon name="/static/img/user/fankui.png" size="24"></u-icon>
				</view>
				<view class="title">
					<u--text text="意见反馈" size="16" lineHeight="24"></u--text>
				</view>
			</view>

			<view class="right">
				<u-icon name="arrow-right" size="24"></u-icon>
			</view>
		</view>

		<view class="register box" @click="show = true">
			<view class="left">
				<view class="icon">
					<u-icon name="/static/img/user/qishou.png" size="24"></u-icon>
				</view>
				<view class="title">
					<u--text text="注册骑手" size="16" lineHeight="24"></u--text>
				</view>
			</view>

			<view class="right">
				<u-icon name="arrow-right" size="24"></u-icon>
			</view>
		</view>


		<view class="btn_login">
			<u-button text="注销" :color="btnColor" @click="logout"></u-button>

		</view>

		<!-- 注册弹出层 -->
		<view>
			<u-popup :show="show" @close="close" @open="open">
				<view class="top">
					<text>只需2步, 即可开始跑单</text>
				</view>
				<view class="bottom">
					<view class="auth">
						<view class="left">
							<view class="icon">
								<u-icon name="/static/img/user/芝麻-身份证.png" size="40"></u-icon>
							</view>
							<view class="description">
								<view class="des_top">
									1 实名认证
								</view>
								<view class="des_bottom">
									平台会保护你的个人信息安全
								</view>
							</view>
						</view>
						<view class="right btn">
							<u-button text="立即认证" color="#fcdb78" @click="register"></u-button>
						</view>
					</view>
				</view>
			</u-popup>
		</view>

		<!-- 提示框 -->
		<view>
			<u-toast ref="uToast"></u-toast>
		</view>
	</view>
</template>

<script>
	const api = require("../../utils/api.js")
	export default {
		data() {
			return {
				show: false,
				avatar_src: "/static/img/user/94.png",
				userName: "",
				show: false,
			}
		},
		methods: {
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			logout() {
				api.user_logout().then(res => {
					uni.removeStorageSync("cookie")
					uni.reLaunch({
						url: "../login/index"
					})
				})
			},
			register() {
				uni.navigateTo({
					url: '../login/riderRegister'
				})
			}
		},
		mounted() {
			
			api.user_demand().then(res => {
				this.$data.userName = res.data.userName
				console.log("个人信息");
				console.log(res);

			}).catch(err => {
				console.log(err);
				this.$refs.uToast.show({
					type: 'default',
					message: err,
				})
			})
		}
	}
</script>

<style scoped lang="scss">
	.user {
		display: flex;
		flex-direction: row;
		padding: 60rpx;

		.user_name {
			font-size: 36rpx;
			line-height: 140rpx;
			margin-left: 20rpx;
		}
	}

	.box {
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		margin-bottom: 20rpx;

		.left {
			display: flex;
			flex-direction: row;

			.icon {
				margin-right: 25rpx;
			}
		}
	}

	.telephone {
		border-top: 1rpx solid #787878;
		border-bottom: 1rpx solid #787878;
	}

	.register {
		margin-top: 40rpx;
	}

	.top {
		display: flex;
		justify-content: center;
		font-size: 40rpx;
	}

	.bottom {
		display: flex;

		.auth {
			width: 700rpx;
			display: flex;
			justify-content: space-between;
			padding: 20rpx;

			.left {
				display: flex;
				flex-direction: row;

				.description {
					display: flex;
					flex-direction: column;
					margin-left: 20rpx;

					.des_top {
						font-size: 30rpx;
					}

					.des_bottom {
						font-size: 24rpx;
						color: #787878;
					}
				}
			}

			.right {
				width: 150rpx;
				height: 50rpx;
			}
		}

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
