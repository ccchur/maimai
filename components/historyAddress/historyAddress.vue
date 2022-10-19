<template>
	<view>
		<view class="title_history">
			<text>历史地址</text>
		</view>
		
		<!-- 提示框 -->
		<view>
			<u-toast ref="uToast"></u-toast>
		</view>
		
		<view class="history" v-for="(item, index) in historyList" :key="item.addressId" >
			<view class="history_box" v-if="item.addressAddress">
				<view class="history_address" @click="choose_address(item.addressId)">
					<u--text :text="item.addressAddress"></u--text>
				</view>
		
				<view class="history_userinfo">
					<view class="left_info" @click="choose_address(item.addressId)">
						<u--text :text="item.addressConnectName" size="12" color="#787878"></u--text>
						<u--text :text="item.addressConnectName" size="12" color="#787878"></u--text>
					</view>
		
					<view class="operation">
						<u-icon name="edit-pen" size="20" ></u-icon>
						<u-icon name="trash-fill" size="20" @click.stop.prevent="del(item.addressId)"></u-icon>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"historyAddress",
		props: {
			historyList: {
				type: Array,
				default: ""
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			// 选择历史地址
			choose_address(index){
				this.$emit('choose_address', index)
			},
			//删除地址
			del(index){
				this.$emit('del_address', index)
			}
		}
	}
</script>

<style scoped lang="scss">
	.title_history {
		position: relative;
		width: 700rpx;
		left: 54rpx;
		color: #787878;
		font-size: 28rpx
	}
.history {
		border-radius: 16rpx;
		width: 700rpx;
		background-color: #fff;
		margin: 26rpx auto;
		overflow: hidden;

		.history_address {
			padding: 35rpx;
			width: 600rpx;
			overflow: hidden;
		}

		.history_userinfo {
			display: flex;
			justify-content: space-between;
			margin-bottom: 20rpx;
			padding: 0 35rpx;

			.left_info {
				width: 240rpx;
				display: flex;
				justify-content: space-between;
			}

			.operation {
				width: 100rpx;
				display: flex;
				justify-content: space-between;

			}
		}
	}
</style>