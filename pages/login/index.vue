<template>
	<view>
		<bgLogo></bgLogo>
		
		<!-- 提示框 -->
		<view>
			<u-toast ref="uToast"></u-toast>
		</view>

		<view class="main_view">
			<view class="title">
				<u--text text="麦麦快送" color="#F39B1A" size="56rpx" align="center"></u--text>
			</view>


			<view class="btn_login">
				<u-button text="微信用户一键登录" color="#F39B1A" @click="login()"></u-button>
			</view>

			<view class="login_text">
				<u--text text="账号密码登录" align="center" size="28rpx" @click="numberLogin"></u--text>
				<u--text text="注册" align="center" size="28rpx" @click="register"></u--text>
			</view>


			<view class="checkbox-group">


				<u-checkbox-group @change="checkboxChange" placement="row">
					<u-checkbox name="agree" activeColor="#f39b1a" shape="circle" label="登录代表您已同意《用户协议》,《隐私协议》">
					</u-checkbox>
				</u-checkbox-group>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				gree: false,
			}
		},
		methods: {
			login() {

				if (!this.$data.agree) {
					this.$refs.uToast.show({
						type: 'error',
						message: '未阅读并同意条款',
					})
					return
				}
				console.log("登录");

				wx.getUserProfile({
					desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，
					success: (res) => {
						console.log(res);
						const accountInfo = wx.getAccountInfoSync();
						console.log(accountInfo.miniProgram.appId) // 小程序 appId
						// 成功则登录跳转
						uni.navigateTo({
							url: './accountLogin'
						})
					}
				})



			},


			checkboxChange(n) {
				if (!n.length) {
					this.$data.agree = false
				} else {
					this.$data.agree = true
				}
				console.log(this.$data.agree);
			},
			numberLogin() {
				console.log("账号密码登录");
				uni.navigateTo({
					url: './accountLogin'
				})
			},
			register() {
				console.log("注册");
				uni.navigateTo({
					url: './register'
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.main_view {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		top: 500rpx;
		height: 204rpx;
		width: 100%;

		.btn_login {
			position: relative;
			left: 50%;
			margin-left: -286rpx;
			font-size: 32rpx;
			border-radius: 20rpx;
			width: 572rpx;
			height: 92rpx;
			margin-top: 42rpx;
		}

		.login_text {
			display: flex;
			justify-content: space-between;
			margin-top: 24rpx;
		}

		.checkbox-group {
			display: flex;
			justify-content: center;
			margin-top: 40rpx;
		}
	}
</style>
