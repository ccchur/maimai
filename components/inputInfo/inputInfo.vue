<template>
	<view>
		<!-- 选择物品类型 -->
		<view class="goodsClass">
			<view class="tips">
				<text>请勿取送违禁品，尺寸大易损坏物品请告知跑腿员</text>
			</view>

			<view class="classBox">
				<ul>
					<li v-for="(item, index) in typeList" :key="index" :class="{on: item.isClick == true}"
						@click="selected(index)">{{item.name}}</li>
				</ul>
			</view>
		</view>

		<!-- 重量 -->
		<view class="goodsweight">
			<view class="text1">
				<text>重量/尺寸</text>
			</view>
			<view class="text2">
				<text>单次下单限制99KG以内</text>
			</view>
			<view class="weight_input">
				<view class="left">
					<u-icon name="volume-fill"></u-icon>
					<text>请实际填写重量</text>
				</view>
				<view class="right">
					<u--input class="inp" placeholder="输入重量" border="surround" type="number" color="#888888"
						v-model="weight"></u--input>
					<text>KG</text>
				</view>
			</view>
			<view class="weight_input">
				<view class="left">
					<u-icon name="volume-fill"></u-icon>
					<text>请实际填写尺寸</text>
				</view>
				<view class="right">
					<u--input class="inp" placeholder="输入尺寸" border="surround" type="number" color="#888888"
						v-model="size"></u--input>
					<text>寸</text>
				</view>
			</view>
		</view>

		<!-- 备注 -->
		<view class="note">
			<view class="text1">
				<text>备注信息</text>
			</view>
			<view class="note_inp">
				<u--input placeholder="请填写物品信息（如：钥匙）或备注说明" border="surround" v-model="desc" clearable></u--input>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "inputInfo",
		data() {
			return {
				isClick: "",
			};
		},
		computed: {
			typeList: {
				get(){
					return this.$store.state.basisAbout.typeList
				}
			},
			size: {
				get() {
					return this.$store.state.sendAbout.size
				},
				set(newSize) {
					this.$store.commit("setSize", newSize)
				}
			},
			weight: {
				get() {
					return this.$store.state.sendAbout.weight
				},
				set(newWeight) {
					this.$store.commit("setWeight", newWeight)
				}
			},
			desc: {
				get() {
					return this.$store.state.sendAbout.desc
				},
				set(newDesc) {
					this.$store.commit("setDesc", newDesc)
				}
			}
		},
		methods: {
			selected(e) {
				for (let i = 0; i < this.typeList.length; i++) {
					this.$store.state.basisAbout.typeList[i].isClick = false
				}
				this.$store.state.basisAbout.typeList[e].isClick = !this.$store.state.basisAbout.typeList[e].isClick
				this.$store.state.sendAbout.type = e
				console.log(this.$store.state.basisAbout.typeList[e].name);
				
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.goodsClass {
		border-radius: 16rpx;
		width: 700rpx;
		background-color: #fff;
		margin: 26rpx auto;
		overflow: hidden;

		.tips {
			font-size: 28rpx;
			padding: 42rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.classBox {

			ul {
				list-style: none;
				padding: 0 42rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				li {

					width: 134rpx;
					height: 60rpx;
					line-height: 60rpx;
					text-align: center;
					margin-bottom: 24rpx;
					border: 2rpx solid #bbb;
				}

			}


		}
	}

	.on {
		border: 2rpx solid #f39b1a !important;
		color: #f39b1a;
	}

	.goodsweight {
		border-radius: 16rpx;
		width: 700rpx;
		background-color: #fff;
		margin: 26rpx auto;
		overflow: hidden;

		.text1 {
			font-size: 26rpx;
			padding: 30rpx;
		}

		.text2 {
			padding: 0 30rpx;
			font-size: 24rpx;
			color: #787878;
		}

		.weight_input {
			display: flex;
			padding: 10rpx 30rpx;
			margin-top: 20rpx;
			justify-content: space-between;

			.left {
				display: flex;
				flex-direction: row;
				color: #787878;
				font-size: 24rpx;
				line-height: 82rpx;
			}

			.right {
				width: 200rpx;
				height: 82rpx;
				line-height: 82rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.inp {
					line-height: 82rpx;
				}

				text {
					line-height: 82rpx;
				}
			}

		}
	}

	.note {
		border-radius: 16rpx;
		width: 700rpx;
		background-color: #fff;
		margin: 26rpx auto;
		overflow: hidden;

		.text1 {
			font-size: 26rpx;
			padding: 30rpx;
		}

		.note_inp {
			margin: 0 auto;
			margin-bottom: 26rpx;
			width: 670rpx;
		}
	}

	.btn {
		position: relative;
		bottom: 20rpx;
		left: 50%;
		margin-left: -350rpx;
		margin-top: 300rpx;
		border-radius: 10rpx;
		overflow: hidden;
		width: 700rpx;
	}
</style>
