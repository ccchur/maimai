<template>
	<view class="page-body">
		
		<view class="title_history">
			<text>历史订单</text>
		</view>
		
		<orderList :orderList="orderList"></orderList>
	</view>
</template>

<script>
	const api = require('../../../utils/api.js')
	export default {
		data() {
			return {
				index: "",
				// 订单列表
				orderList: "",
			}
		},
		methods: {

		},
		mounted() {
			api.order_riderOrder().then(res => {
				console.log(res.data.records );
				console.log("全部订单");
				this.$data.orderList = res.data.records

			})

		}
	}
</script>

<style lang="scss" scoped>
	.page-body {
		height: 100%;
		min-height: 100%;
		background-color: #ebebeb;
		overflow: hidden;
	}

	.title_history {
		position: relative;
		width: 700rpx;
		left: 54rpx;
		color: #101010;
		font-size: 28rpx;
		margin: 16rpx;

	}
</style>
