<template>
	<view>
		<bgLogo></bgLogo>
		
		<view class="main_view">
			<view class="title">
				<u--text text="注册" color="#F39B1A" size="56rpx" align="center"></u--text>
			</view>

			<!-- 提示框 -->
			<view>
				<u-toast ref="uToast"></u-toast>
			</view>

			<view class="accountInput">
				<u--input placeholder="  请输入您的账户" border="none" v-model="userName" prefixIcon="account-fill"
					@change="change"></u--input>

				<u-divider lineColor="#BBBBBB"></u-divider>
				<u--input placeholder="  请输入您的手机号" border="none" v-model="phone"
					prefixIcon="/static/img/login/phoneiphone.png" @change="change"></u--input>

				<u-divider lineColor="#BBBBBB"></u-divider>

				<u--input placeholder="  请输入您的密码" border="none" v-model="password" type="password"
					prefixIcon="/static/img/login/key.png"></u--input>

				<u-divider lineColor="#BBBBBB"></u-divider>

				<u--input placeholder="  请再次输入您的密码" border="none" v-model="password_again" type="password"
					prefixIcon="/static/img/login/key.png" @change="inputAgain"></u--input>

			</view>

			<view class="checkbox-group">
				<u-checkbox-group @change="checkboxChange" placement="row">
					<u-checkbox name="agree" activeColor="#f39b1a" shape="circle" label="阅读并同意《用户协议》,《隐私协议》"
						labelSize="28rpx"></u-checkbox>
				</u-checkbox-group>
			</view>

			<view class="btn_login">
				<u-button text="注册" :color="btnColor" @click="login" :disabled="disabled"></u-button>
			</view>
		</view>

	</view>
</template>

<script>
	const api = require("../../utils/api.js")
	export default {
		data() {
			return {
				phone: "",
				password: "",
				userName: "",

				password_again: "",
				btnColor: "#efefef",
				agree: false,
				
				disabled:true,
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
			login() {

				if (!this.$data.agree) {
					this.$refs.uToast.show({
						type: 'error',
						message: '未阅读并同意条款',
					})
					return
				}
				if (!this.$data.phone || !this.$data.password) {
					this.$refs.uToast.show({
						type: 'error',
						message: '填写账号或密码',
					})
					return
				}
				// 密码不一致
				if (this.$data.password_again != this.$data.password) {
					this.$refs.uToast.show({
						type: 'warning',
						message: '两次输入密码不一致',
					})
					return
				}
				console.log("注册");

				api.user_register({
					userName: this.$data.userName,
					userPhone: this.$data.phone,
					userPassword: this.$data.password
				}).then(res => {
					this.$refs.uToast.show({
						type: 'success',
						message: '注册成功，返回登陆页面',
					})
					uni.navigateTo({
						url: './index'
					})
				}).catch(err => {
					this.$refs.uToast.show({
						type: 'error',
						message: err,
					})
				})

			},
			// 判断输入框中是否有内容变色
			change(e) {
				if (e != "") {
					this.$data.btnColor = "#F39B1A"
					this.$data.disabled = false
				} else {
					this.$data.btnColor = "#efefef"
					this.$data.disabled = false
				}
			},
			inputAgain(e) {

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

			.u-divider {}
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
