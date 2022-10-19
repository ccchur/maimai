<template>
	<view class="page-body">
		<!-- 选择物品 -->
		<inputInfo v-if="index == 1"></inputInfo>
		<!-- 输入地址 -->
		<inputAddress v-if="index != 1" :index="index" @getAddress="getAddress" ></inputAddress>

		<!-- 按钮 -->
		<view class="btn">
			<u-button text="确认" color="#f39b1a" @click="submit"></u-button>
		</view>
		
		<!-- 历史地址 -->
		<historyAddress v-if="index != 1" :historyList="historyList" @choose_address="choose_address" @del_address="del_address"></historyAddress >
		<!-- 提示框 -->
		<view>
			<u-toast ref="uToast"></u-toast>
		</view>
	</view>
</template>

<script>
	const api = require("../../../utils/api.js")
	export default {
		data() {
			return {
				// 选择组件编号 1收件地址，2发件地址
				index: "",
				//是否保存地址
				isSave: "",
				// 历史地址
				historyList: "",
				
			};
		},
		methods: {
			getAddress(val) {
				this.$data.isSave = val
				console.log("回传参数");
				console.log(this.$data.isSave);
				console.log(this.$data);
			},
			
			del_address(index){
				console.log("要删除的地址id");
				api.address_delete({addressId: index}).then(res => {
					// 获取历史地址
					api.address_search().then(res => {
						console.log("获取历史地址");
						console.log(res.data.records);
						this.$data.historyList = res.data.records
					})
					this.$refs.uToast.show({
						type: 'succee',
						message: "删除成功！",
					})
				}).catch(err => {
					this.$refs.uToast.show({
						type: 'err',
						message: "删除失败！",
					})
				})
			},

			submit() {
				console.log(this.$data);
				console.log(this.$data.index);
				
				uni.navigateTo({
					url: '../index'
				})
				if (this.$data.isSave == "是") {
					if (this.$data.index == 2) {
						api.address_add({
							"addressConnectName": this.$store.state.sendAbout.sendName,
							"addressConnectPhone": this.$store.state.sendAbout.sendPhone,
							"addressAddress": this.$store.state.sendAbout.sendAddress
						}).then(res => {
							console.log(res);
							//获取该地址经纬度
							this.$store.state.sendAbout.sendlatitude = res.data.addressLatitudeLongitude.split(
								",")[0]
							this.$store.state.sendAbout.sendlongitude = res.data.addressLatitudeLongitude.split(
								",")[1]
						}).catch(err => {
							this.$refs.uToast.show({
								type: 'error',
								message: err,
							})
						})

					} else {
						api.address_add({
							"addressConnectName": this.$store.state.sendAbout.acceptName,
							"addressConnectPhone": this.$store.state.sendAbout.acceptPhone,
							"addressAddress": this.$store.state.sendAbout.acceptAddress
						}).then(res => {

							this.$store.state.sendAbout.acceptlatitude = res.data.addressLatitudeLongitude.split(
								",")[
								0]
							this.$store.state.sendAbout.acceptlongitude = res.data.addressLatitudeLongitude.split(
								",")[
								1]

						}).catch(err => {
							this.$refs.uToast.show({
								type: 'error',
								message: err,
							})
						})
					}

				}
				
			},

			//选择地址
			choose_address(index) {
				console.log(index)
				api.address_demand({
					"id": index
				}).then(res => {
					console.log(res.data);
					if (this.$data.index == 2) {
						this.$store.commit('setsendName', res.data.addressConnectName)
						this.$store.commit('setsendPhone', res.data.addressConnectPhone)
						this.$store.commit('setsendAddress', res.data.addressAddress)
					}
					if (this.$data.index == 3) {
						this.$store.commit('setacceptName', res.data.addressConnectName)
						this.$store.commit('setacceptPhone', res.data.addressConnectPhone)
						this.$store.commit('setacceptAddress', res.data.addressAddress)
					}
				}).catch(err => {
					this.$refs.uToast.show({
						type: 'error',
						message: err,
					})
				})
			},
		},
		mounted(data) {
			let _this = this
			const eventChannel = this.getOpenerEventChannel();
			// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
			eventChannel.on('acceptDataFromOpenerPage', function(data) {
				_this.$data.index = data
			})

			// 获取历史地址
			api.address_search().then(res => {
				console.log("获取历史地址");
				console.log(res.data.records);
				this.$data.historyList = res.data.records
			})
		}
	}
</script>

<style scoped lang="scss">
	.page-body {
		height: 100%;
		background-color: #ebebeb;
		overflow: hidden;
	}

	.btn {
		position: relative;
		bottom: 20rpx;
		left: 50%;
		margin-left: -350rpx;
		margin-top: 150rpx;
		border-radius: 10rpx;
		overflow: hidden;
		width: 700rpx;
	}
</style>
