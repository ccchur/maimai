<template>
	<view>
		<!-- //步骤条 -->
		<view class="step">
			<u-steps :current="step">
				<u-steps-item title="身份认证">
				</u-steps-item>
				<u-steps-item title="填写资料"></u-steps-item>
				<u-steps-item title="等待审核"></u-steps-item>
			</u-steps>
		</view>
		<!-- 提示框 -->
				<view>
					<u-toast ref="uToast"></u-toast>
				</view>

		<!-- 步骤1 上传身份证 -->
		<view class="upload_ph" v-if="step === 0 ">
			<view class="front_ph ph">
				<view class="text">
					上传身份证正面照
				</view>
				<view class="up_img">
					<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
						:maxCount="1" width="281" height="143"></u-upload>
				</view>
			</view>

			<view class="back_ph ph">
				<view class="text">
					上传身份证背面照
				</view>
				<view class="up_img">
					<u-upload :fileList="fileList2" @afterRead="afterRead" @delete="deletePic" name="1" multiple
						:maxCount="1" width="281" height="143"></u-upload>
				</view>
			</view>
		</view>
		<!-- 步骤2 填写信息 -->
		<view class="uplaod_info" v-if="step === 1">
			<view class="name box_format">
				<view class="left">
					姓名/登陆账号：
				</view>
				<view class="right">
					<u--input placeholder="请输入您的真实姓名/登陆账号" v-model="userName" border="none" clearable></u--input>
				</view>
			</view>

			<view class="name box_format">
				<view class="left">
					身份证号码：
				</view>
				<view class="right">
					<u--input placeholder="请输入您的真实身份证号码" v-model="riderIdcardNumber" border="none" clearable></u--input>
				</view>
			</view>


			<view class="sex box_format">
				<view class="left">
					性别：
				</view>
				<view class="right">
					<u-radio-group placement="row" v-model="radiovalue1">

						<u-radio activeColor="#f39b1a" label="是" labelSize="28rpx" labelColor="#787878"
							:customStyle="{marginLeft: '40rpx'}" v-for="(item, index) in radiolist1" :label="item.name"
							:name="item.name" :key="key"></u-radio>
					</u-radio-group>
				</view>
			</view>

			<view class="name box_format">
				<view class="left">
					手机号：
				</view>
				<view class="right">
					<u--input placeholder="请输入您的手机号" v-model="userPhone" border="none" clearable></u--input>
				</view>
			</view>

			<view class="name box_format">
				<view class="left">
					密码：
				</view>
				<view class="right">
					<u--input placeholder="请输入您的身份证号码" v-model="userPassword" border="none" clearable></u--input>
				</view>
			</view>

			<view class="name box_format">
				<view class="left">
					邮箱：
				</view>
				<view class="right">
					<u--input placeholder="请输入您的邮箱号" border="none" v-model="userEmail" clearable></u--input>
				</view>
			</view>
		</view>
		<view class="next" v-if="step === 1">
			<u-button text="提交信息" color="#f39b1a" @click="nextStep"></u-button>
		</view>
		<!-- 步骤3 等待审核 -->
		<view class="audit" v-if="step === 2">
			<view class="logo">
				<image src="/static/img/login/time.png" width="20px" height="20px"></image>
			</view>
			<view class="audit_text">
				审核中......
			</view>
			<view class="tip_text">
				<view>
					<u--text text="您的申请提交成功"></u--text>
				</view>
				<view>
					<u--text text="我们会在2个工作日内处理"></u--text>
				</view>
				<view class="">
					<u--text text="请您耐心等待邮件通知"></u--text>
				</view>
			</view>
		</view>
		<view class="next" v-if="step === 2">
			<u-button text="完成注册" color="#f39b1a" @click="nextStep"></u-button>
		</view>
		<!-- 下一步 -->
		<view class="next" v-else>
			<u-button text="下一步" color="#f39b1a" @click="nextStep"></u-button>
		</view>

		
		

	</view>
</template>

<script>
	const api = require("../../utils/api.js")
	export default {
		data() {
			return {
				step: 0,
				fileList1: [],
				fileList2: [],

				radiovalue1: "否",
				radiolist1: [{
					name: '男',
					disabled: false
				}, {
					name: '女',
					disabled: false
				}, ],
				userName: "",
				userPassword: "",
				userPhone: "",
				userEmail: "",
				riderIdcardNumber: ""

			}
		},
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://localhost:8080/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},

			// 下一步
			nextStep() {
				this.$data.step = this.$data.step + 1
				if (this.$data.step == 3) {
					this.$data.step = 0
					uni.navigateTo({
						url: './index'
					})

				}
				if (this.$data.step == 2) {
					api.rider_register({
						tUser: {
							userName: this.$data.userName,
							userPassword: this.$data.userPassword,
							userPhone: this.$data.userPhone,
							userEmail: this.$data.userEmail
						},
						tRider: {
							riderIdcardNumber: this.$data.riderIdcardNumber
						}
					}).then(res => {
						this.$data.step == 1
						console.log(res);
						this.$refs.uToast.show({
							type: 'error',
							message: res.data,
						})

					}).
					catch(err => {

						this.$refs.uToast.show({
							type: 'error',
							message: err,
						})

					})
				}
			},

		}
	}
</script>

<style scoped lang="scss">
	.step {
		margin-bottom: 100rpx;
	}

	.text {
		margin-bottom: 20rpx;
	}

	.ph {
		padding: 40rpx;
	}

	.up_img {
		position: relative;
		left: 50%;
		margin-left: -140.5px;
		width: 281px;
		height: 143px;
	}

	.next {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 104rpx;
	}

	.box_format {
		display: flex;
		flex-direction: row;
		margin: 20rpx;
		padding: 20rpx;
		border-bottom: 1rpx solid #787878;

		.left {
			width: 280rpx;
			left: 20rpx;
			font-size: 32rpx;
		}
	}

	.audit {
		display: flex;
		flex-direction: column;
		text-align: center;

		.audit_text {
			display: flex;
			flex-direction: column;
			text-align: center;
			font-size: 40rpx;
			font-weight: 700;
		}

		.tip_text {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 60rpx;

			view {
				margin: 10rpx;
			}
		}
	}
</style>
