<template>
	<!-- 表单 -->
	<view class="goodsform">
		<u-form labelPosition="left" ref="form1">
			<!-- 选择物品/类型 -->
			<u-form-item leftIcon="/static/img/user/order.png" prop="userInfo.name" borderBottom ref="item1"
				@click="select">
				<u--input v-model="typeName" disabled disabledColor="#ffffff" placeholder="请选择物品类型" border="none">
				</u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<!-- 输入发货地址 -->
			<u-form-item leftIcon="/static/img/user/point_blue.png" prop="userInfo.name" borderBottom ref="item1"
				@click="startingPoint">
				<u--text text="输入发货地址" size="12"></u--text>
				<u--input v-model="sendAddress" disabled disabledColor="#ffffff" placeholder="点击填写发件地址" border="none"
					placeholderStyle="font-size: 10px;"></u--input>
			</u-form-item>
			<!-- 输入终点地址 -->
			<u-form-item leftIcon="/static/img/user/point_red.png" prop="userInfo.name" borderBottom ref="item1"
				@click="destination">
				<u--text text="输入终点地址" size="12"></u--text>
				<u--input v-model="acceptAddress" disabled disabledColor="#ffffff" placeholder="点击填写收件地址" border="none"
					placeholderStyle="font-size: 10px;"></u--input>

			</u-form-item>
		</u-form>
	</view>

</template>

<script>
	export default {
		name: "goodsForm",
		data() {
			return {

			};
		},
		computed: {
			typeName: {
				get() {
					if (this.$store.state.sendAbout.type >= 0) {
						// 下标
						let type = this.$store.state.sendAbout.type
						var typeName = this.$store.getters.typeName(type)
						this.$store.commit('settypeName', typeName)
						return typeName
					} else {
						return;
					}
				},
			},
			sendAddress: {
				get() {
					if (this.$store.state.sendAbout.sendAddress) {
						return this.$store.state.sendAbout.sendAddress
					}
				}
			},
			acceptAddress: {
				get() {
					if (this.$store.state.sendAbout.acceptAddress) {
						return this.$store.state.sendAbout.acceptAddress
					}
				}
			}
		},

		methods: {
			select() {
				uni.navigateTo({
					url: './main/inputForm',
					success: function(index) {
						// 通过eventChannel向被打开页面传送数据
						index.eventChannel.emit('acceptDataFromOpenerPage',1 )
					}
				})
			},
			startingPoint() {
				uni.navigateTo({
					url: './main/inputForm',
					success: function(index) {
						// 通过eventChannel向被打开页面传送数据
						index.eventChannel.emit('acceptDataFromOpenerPage', 2)
					}
				})
			},
			destination() {
				uni.navigateTo({
					url: './main/inputForm',
					success: function(index) {
						// 通过eventChannel向被打开页面传送数据
						index.eventChannel.emit('acceptDataFromOpenerPage', 3)
					}
				})
			},
		}
	}
</script>

<style scoped>
	.goodsform {
		border-top-radius: 20rpx;
		padding: 20rpx;
	}
</style>
