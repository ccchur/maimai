<template>
	<view>
		<orderContent :orderList="orderList"></orderContent>
		
		<!-- 提示框 -->
		<view>
			<u-toast ref="uToast"></u-toast>
		</view>
		
	</view>
</template>

<script>
	const api = require('../../../utils/api.js')
	export default {
		data() {
			return {
				// 单号
				index: "",
				// 订单详情
				orderList:"",
			}
		},
		methods: {
			
		},
		mounted() {
			// 接收单号
			let _this = this
			const eventChannel = this.getOpenerEventChannel();
			// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
			eventChannel.on('acceptDataFromOpenerPage', function(data) {
				console.log(data + "单号id");
				_this.$data.index = data
			})
			
			api.order_demand({id: this.$data.index}).then(res => {
				console.log('搜索的订单');
				console.log(res.data);
				this.$data.orderList = res.data
			}).catch(err => {
				this.$refs.uToast.show({
					type: 'error',
					message: err,
				})
			})
			
		}
	}
</script>

<style>

</style>
