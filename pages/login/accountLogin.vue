<template>
	<view>
		<bgLogo></bgLogo>
		<view class="main_view">
			<view class="title">
				<u--text text="登录" color="#F39B1A" size="56rpx" align="center"></u--text>
			</view>

			<!-- 提示框 -->
			<view>
				<u-toast ref="uToast"></u-toast>
			</view>

			<view class="accountInput">
				<u--input placeholder="  请输入您的用户名" border="none" v-model="userName"
					prefixIcon="/static/img/login/phoneiphone.png" @change="change"></u--input>
				<u-divider lineColor="#BBBBBB"></u-divider>
				<u--input placeholder="  请输入您的密码" border="none" v-model="password" type="password"
					prefixIcon="/static/img/login/key.png"></u--input>
			</view>

			<view class="checkbox-group">
				<u-checkbox-group @change="checkboxChange" placement="row">
					<u-checkbox name="agree" activeColor="#f39b1a" shape="circle" label="阅读并同意《用户协议》,《隐私协议》"
						labelSize="28rpx"></u-checkbox>
				</u-checkbox-group>
			</view>

			<view class="btn_login">
				<u-button text="普通用户登录" :color="btnColor" @click="login(1)" :disabled="disabled"></u-button>

			</view>

			<view class="btn_login">
				<u-button text="骑手登录" :color="btnColor" @click="login(2)" :disabled="disabled"></u-button>
			</view>

		</view>

	</view>
</template>


<script>
	const api = require("../../utils/api.js")
	export default {
		data() {
			return {
				userName: "",
				password: "",

				btnColor: "#efefef",
				agree: false,
				
				disabled: true,

			}
		},

		methods: {
			checkboxChange(n) {
				if (!n.length) {
					this.$data.agree = false
				} else {
					this.$data.agree = true
				}

				console.log(this.$data.agree);

			},

			login(role) {
				if (!this.$data.userName || !this.$data.password) {
					this.$refs.uToast.show({
						type: 'default',
						message: '填写账号或密码',
					})
					return
				}
				if (!this.$data.agree) {
					this.$refs.uToast.show({
						type: 'default',
						message: '未阅读并同意条款',
					})
					return
				}

				console.log("登录");


				// 1是普通用户
				// 2是骑手
				if (role == 1) {
					api.user_login({
						"userName": this.$data.userName,
						"userPassword": this.$data.password
					}).then(res => {
						console.log(res);
						uni.setStorageSync(
							"cookie",
							res.cookies[0],
						)
						// //跳转用户主页面
						uni.navigateTo({
							url: '../user/index'
						})

					}).catch(err => {
						this.$refs.uToast.show({
							type: 'error',
							message: err,
						})
					})

				} else {
					api.rider_login({
						"userName": this.$data.userName,
						"userPassword": this.$data.password
					}).then(res => {

						uni.setStorageSync(
							"cookie",
							res.cookies[0],
						)
						// //跳转骑手主页面
						uni.navigateTo({
							url: '../rider/index'
						})
					}).catch(err => {
						this.$refs.uToast.show({
							type: 'error',
							message: err,
						})
					})
				}



			},
			// 判断输入框中是否有内容变色
			change(e) {
				if (e != "") {
					this.$data.btnColor = "#F39B1A"
					this.$data.disabled = false
				} else {
					this.$data.btnColor = "#efefef"
					this.$data.disabled = true
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.main_view {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		top: 650rpx;
		height: 204rpx;
		width: 100%;

		.accountInput {
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 40rpx;


		}

		.checkbox-group {
			display: flex;
			justify-content: center;
			margin-top: 20rpx;
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
	}
</style>
