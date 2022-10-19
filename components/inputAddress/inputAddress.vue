<template>
	<view>
		<view class="sender_info">

			<view class="content_box">

				<view class="title">
					<u--text text="地址"></u--text>
				</view>

				<view class="content">
					<u--input placeholder="输入地址" border="none" suffixIcon="arrow-right" v-model="Address">
					</u--input>
				</view>
			</view>

			<view class="content_box">
				<view class="title">
					<u--text text="联系人"></u--text>
				</view>
				<view class="content">
					<u--input placeholder="请填写联系人姓名" border="none" v-model="Name">
					</u--input>
				</view>
			</view>

			<view class="content_box">
				<view class="title">
					<u--text text="电话"></u--text>
				</view>
				<view class="content">
					<u--input placeholder="请填写联系人手机号" border="none" v-model="Phone"></u--input>
				</view>
			</view>

			<view class="radio_box">
				<text class="is_save">是否保存地址</text>
				<u-radio-group placement="row" v-model="radiovalue1">

					<u-radio activeColor="#f39b1a" label="是" labelSize="28rpx" labelColor="#787878"
						:customStyle="{marginLeft: '40rpx'}" v-for="(item, index) in radiolist1" :key="index"
						:label="item.name" :name="item.name" @change="radioChange"></u-radio>

				</u-radio-group>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "inputAddress",
		props: {
			index: {
				type: Number,
				default: "",
			},
			// getAddress: {
			// 	type: Function,
			// 	default: ""
			// }
		},
		data() {
			return {
				// 是否保存地址
				radiovalue1: "否",
				radiolist1: [{
					name: '是',
					disabled: false
				}, {
					name: '否',
					disabled: false
				}, ],

			};
		},
		computed: {
			Name: {
				get() {
					if (this.index == 2) {
						return this.$store.state.sendAbout.sendName
					} else {
						return this.$store.state.sendAbout.acceptName
					}
				},
				set(newName) {
					if (this.index == 2) {
						this.$store.commit('setsendName', newName)
					} else {
						this.$store.commit('setacceptName', newName)
					}
				}
			},
			Phone: {
				get() {
					if (this.index == 2) {
						return this.$store.state.sendAbout.sendPhone
					} else {
						return this.$store.state.sendAbout.acceptPhone
					}

				},
				set(newPhone) {
					if (this.index == 2) {
						this.$store.commit('setsendPhone', newPhone)
					} else {
						this.$store.commit('setacceptPhone', newPhone)
					}
				}
			},
			Address: {
				get() {
					if (this.index == 2) {
						return this.$store.state.sendAbout.sendAddress
					} else {
						return this.$store.state.sendAbout.acceptAddress
					}

				},
				set(newAddress) {
					if (this.index == 2) {
						this.$store.commit('setsendAddress', newAddress)
					} else {
						this.$store.commit('setacceptAddress', newAddress)
					}
				}
			}
		},

		methods: {
			radioChange(value){
				this.$emit('getAddress',value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sender_info {
		border-radius: 16rpx;
		width: 700rpx;
		background-color: #fff;
		margin: 26rpx auto;
		overflow: hidden;

		.title {
			width: 100rpx;
			flex-grow: 1;
			line-height: 50rpx;
			font-size: 24rpx
		}

		.content {
			flex-grow: 7.8;
		}

		.content_box {
			display: flex;
			justify-content: space-between;
			margin: 27rpx auto;
			padding: 0 42rpx;
		}

		.radio_box {
			display: flex;
			justify-content: space-around;
			padding: 0 42rpx;
			padding-bottom: 42rpx;

			.is_save {
				font-size: 28rpx;
				color: #787878;
				margin-right: 20rpx;
			}
		}

	}
</style>
