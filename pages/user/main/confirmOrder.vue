<template>
	<view class="page-body">

		<!-- 提示框 -->
		<view>
			<u-toast ref="uToast"></u-toast>
		</view>

		<view class="order_info">
			<!-- 发货地址 -->
			<view class="start info">
				<view class="left">
					<view class="take">
						取
					</view>
				</view>
				<view class="center">
					<view class="history_address">
						<u--text :text="sendAddress"></u--text>
					</view>
					<view class="history_userinfo">
						<view class="left_info">
							<u--text :text="sendName" size="12" color="#787878"></u--text>
							<u--text :text="sendPhone" size="12" color="#787878"></u--text>
						</view>
					</view>
				</view>
				<view class="right">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>

			<view class="divider">

			</view>
			<!-- 收货地址 -->
			<view class="end info">
				<view class="left">
					<view class="collect">
						收
					</view>
				</view>
				<view class="center">
					<view class="history_address">
						<u--text :text="acceptAddress"></u--text>
					</view>
					<view class="history_userinfo">
						<view class="left_info">
							<u--text :text="acceptName" size="12" color="#787878"></u--text>
							<u--text :text="acceptPhone" size="12" color="#787878"></u--text>
						</view>
					</view>
				</view>

				<view class="right">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>

		<!-- 物品类型 -->
		<view class="goods_class">
			<view class="goodsClass">
				<view class="text">
					物品类型
				</view>
				<view class="right">
					{{typeName}}/{{weight}}KG
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>

			<view class="goodsNote">
				<view class="text">
					备注
				</view>
				<view class="right_note">
					{{desc}}
				</view>
			</view>
		</view>

		<!-- 费用 -->
		<view class="cost">
			<view class="cost_title">
				跑腿费
			</view>
			<view class="cost_right">
				<view class="distance" style="margin-left: 20rpx;">
					{{distance}}米 ￥
				</view>
				<view class="note_inp">
					<u--input placeholder="最低15元" border="surround" clearable v-model="tips"></u--input>
				</view>
			</view>
		</view>

		<!-- 条款条约 -->
		<view class="checkbox-group">
			<u-checkbox-group @change="checkboxChange" placement="row">
				<u-checkbox name="agree" activeColor="#f39b1a" shape="circle" label="我已阅读并同意《麦麦跑腿服务协议》">
				</u-checkbox>
			</u-checkbox-group>
		</view>

		<!-- 提交按钮 -->
		<view class="submit">
			<view class="price">
				<view class="sum">
					{{price}}
				</view>
				<view class="yuan">
					元
				</view>
			</view>
			<view class="btn_submit">
				<u-button text="提交订单" color="#f39b1a" @click="confirm"></u-button>
			</view>
		</view>
		<!-- 支付弹窗 -->
		<view class="popup">
			<u-popup :show="show" @close="close" @open="open">
				<view class="title">
					<text>跑腿费用支付</text>
				</view>
				<view class="sum_cost">
					<view class="sum cost_box">
						<view class="left">
							合计费用
						</view>
						<view class="right">
							{{price}}元
						</view>
					</view>

					<view class="discount cost_box">
						<view class="left">
							优惠折扣
						</view>
						<view class="right">
							{{discount}}元
						</view>
					</view>


				</view>

				<view class="price_sum">
					<text class="main">{{price-discount}}</text>
					<text class="unit">元</text>
				</view>

				<view class="pay">
					<view class="icon">
						<u-icon name="/static/img/user/微信支付.png" :customStyle="{marginBottom: '25rpx'}"></u-icon>
					</view>

					<u-radio-group iconPlacement="right" shape="circle" v-model="radiovalue1">
						<view class="radio_group">
							<u-radio activeColor="#f39b1a" v-for="(item, index) in radiolist1" :label="item.name"
								:name="item.name" :customStyle="{marginBottom: '20rpx'}" :key="key"></u-radio>
						</view>
					</u-radio-group>

				</view>

				<view class="go_pay">
					<view class="btn_pay">
						<u-button text="确认支付" color="#f39b1a" @click="pay()"></u-button>
					</view>
				</view>
			</u-popup>
		</view>


	</view>
</template>

<script>
	const api = require('../../../utils/api.js')
	import {
		time,
		data1,
		data2
	} from "@/utils/time.js"
	export default {
		data() {
			return {
				show: false,
				discount: 0,
				radiovalue1: "微信支付",
				radiolist1: [{
					name: '微信支付',
					disabled: false
				}, ]
			}
		},
		computed: {
			sendName() {
				return this.$store.state.sendAbout.sendName
			},
			sendPhone() {
				return this.$store.state.sendAbout.sendPhone
			},
			sendAddress() {
				return this.$store.state.sendAbout.sendAddress
			},
			acceptName() {
				return this.$store.state.sendAbout.acceptName
			},
			acceptPhone() {
				return this.$store.state.sendAbout.acceptPhone
			},
			acceptAddress() {
				return this.$store.state.sendAbout.acceptAddress
			},
			typeName() {
				return this.$store.state.sendAbout.typeName
			},
			weight() {
				return this.$store.state.sendAbout.weight
			},
			desc() {
				return this.$store.state.sendAbout.desc
			},
			distance() {
				return this.$store.state.sendAbout.distance
			},
			tips() {
				return this.$store.state.sendAbout.tips
			},
			price() {
				return this.$store.state.sendAbout.price
			},
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
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			// 提交订单
			confirm() {
				api.order_send({

					"orderType": this.$store.state.sendAbout.typeName,
					"orderWeight": this.$store.state.sendAbout.weight,
					"orderSize": this.$store.state.sendAbout.size,
					"orderNote": this.$store.state.sendAbout.desc,

					"orderSenderName": this.$store.state.sendAbout.sendName,
					"orderSenderPhone": this.$store.state.sendAbout.sendPhone,
					"orderSenderAddress": this.$store.state.sendAbout.sendAddress,

					"orderRecipientName": this.$store.state.sendAbout.acceptName,
					"orderRecipientPhone": this.$store.state.sendAbout.acceptPhone,
					"orderRecipientAddress": this.$store.state.sendAbout.acceptAddress,

				}).then(res => {
					//距离
					console.log(res.data);
					// this.$store.commit('setdistance', res.data.orderDistance)
					//费用
					// this.$store.commit("setprice", res.data.orderBasicFee)
					//时间
					// this.$store.commit("settime", time)
					//

					//跳转页面
					this.$data.show = true
				}).catch(err => {
					this.$refs.uToast.show({
						type: 'error',
						message: "输入信息有误，请仔细核对！",
					})
				})

			},
			pay() {
				// 微信支付
				// 成功后跳转
				this.$store.commit('setsendName','')
				this.$store.commit('setsendPhone','')
				this.$store.commit('setsendAddress','')
				this.$store.commit('setacceptName','')
				this.$store.commit('setacceptPhone','')
				this.$store.commit('setacceptAddress','')
				this.$store.commit('settypeName','')
				this.$store.commit('setWeight','')
				this.$store.commit('setDesc','')
				this.$store.commit('setdistance','')
				this.$store.commit('setprice','')
				this.$store.commit('settime','')
				this.$store.commit('setSize','')
				this.$store.state.basisAbout.typeList[this.$store.state.sendAbout.type].isClick = false
				this.$store.commit('setType',-1)
				this.$store.commit('setSendlatitude','')
				this.$store.commit('setSendlongitude','')
				this.$store.commit('setAcceptlatitude','')
				this.$store.commit('setAcceptlongitude','')
				
				
				console.log(this.$store.state.sendAbout);
				uni.reLaunch({
					url: '../index'
				})
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.page-body {
		height: 100%;
		background-color: #ebebeb;
		overflow: hidden;
	}

	.order_info {
		border-radius: 16rpx;
		width: 700rpx;
		background-color: #fff;
		margin: 26rpx auto;
		overflow: hidden;

		.info {
			display: flex;
			flex-direction: row;
			margin-bottom: 10rpx;

			.left {
				flex-grow: 1;
				color: #fff;

				text-align: center;

				.take {
					position: relative;
					top: 40%;
					left: 40%;
					width: 36rpx;
					height: 36rpx;
					border-radius: 50%;
					background-color: #0d60f8;

				}

			}

			.center {
				flex-grow: 7;


				.history_address {
					padding: 35rpx;
					overflow: hidden;
				}

				.history_userinfo {
					display: flex;
					justify-content: space-between;
					margin-bottom: 20rpx;
					padding: 0 35rpx;

					.left_info {
						width: 90%;
						display: flex;
						justify-content: space-between;

					}


				}
			}

			.right {
				flex-grow: 1;
				position: relative;
				top: 80rpx;
				right: 20rpx;
			}
		}

		.divider {
			border: 0.5rpx solid #bbbbbb;
			width: 550rpx;
			margin: 10rpx auto;
		}

		.end {
			.collect {
				position: relative;
				top: 40%;
				left: 40%;
				width: 36rpx;
				height: 36rpx;
				border-radius: 50%;
				background-color: #d90c0c;
			}
		}
	}

	.goods_class {
		border-radius: 16rpx;
		width: 700rpx;
		background-color: #fff;
		margin: 26rpx auto;
		overflow: hidden;

		.goodsClass {
			display: flex;
			justify-content: space-between;
			padding: 21rpx 42rpx 21rpx 42rpx;

			.right {
				display: flex;
				justify-content: space-between;
			}
		}

		.goodsNote {
			display: flex;
			justify-content: space-between;
			padding: 21rpx 42rpx 21rpx 42rpx;
		}
	}

	.cost {
		border-radius: 16rpx;
		width: 700rpx;
		background-color: #fff;
		margin: 26rpx auto;
		overflow: hidden;
		display: flex;
		justify-content: space-between;

		.cost_title {
			padding: 21rpx;
			line-height: 75rpx;
		}

		.cost_right {
			display: flex;
			justify-content: space-around;
			line-height: 75rpx;
			padding: 21rpx;

			.note_inp {
				margin: 0 auto;
				margin-bottom: 26rpx;
				width: 200rpx;
				height: 60rpx;
			}
		}
	}

	.checkbox-group {
		border-radius: 16rpx;
		width: 700rpx;
		margin: 26rpx auto;
		overflow: hidden;
	}

	.submit {
		position: fixed;
		bottom: 0rpx;
		display: flex;
		justify-content: space-between;
		padding: 30rpx;
		width: 700rpx;
		height: 50rpx;
		background-color: #fff;
		overflow: hidden;

		.price {
			display: flex;
			justify-content: space-between;
			color: #d90c49;
			font-size: 40rpx;
			line-height: 64rpx;
		}

		.btn_submit {
			width: 174rpx;
			height: 64rpx;
			border-radius: 8rpx;
			overflow: hidden;
		}
	}

	.popup {
		display: flex;
		flex-direction: column;
		padding: 40rpx;

		.title {
			font-size: 30rpx;
			background-color: #f5f6fb;
			text-align: center;
			padding: 20rpx 70rpx;
		}

		.cost_box {
			display: flex;
			justify-content: space-between;
			padding: 30rpx 50rpx;
		}

		.discount {
			font-size: 26rpx;
		}

		.price_sum {
			display: flex;
			justify-content: center;
			margin: 40rpx 0;

			.main {
				font-size: 60rpx;
				margin-right: 10rpx;
			}

			.unit {
				line-height: 93rpx;
			}
		}

		.pay {
			padding: 30rpx 50rpx;
			display: flex;

			// justify-content: space-between;
			.icon {
				margin-bottom: 20rpx;
				margin-right: 10rpx;
			}

			.radio_group {
				width: 100%;
				margin-bottom: 20rpx;
				display: flex;
				flex-direction: column;
			}
		}

		.go_pay {
			display: flex;
			padding: 20rpx;

			.btn_pay {
				width: 712rpx;
				height: 96rpx;
			}
		}
	}
</style>
