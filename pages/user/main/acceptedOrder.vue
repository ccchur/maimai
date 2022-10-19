<template>
	<view>
		<!-- 中间地图 -->
		<view>
			<view class="page-body">
				<view class="page-section page-section-gap">
					<map style="width: 100%; height: 900rpx;" :latitude="latitude" :longitude="longitude"
						show-location="true" :markers="markers">

					</map>
				</view>
			</view>
		</view>

		<!-- 信息 -->
		<view class="order_info">
			<view class="moreInfo">
				<u-icon name="arrow-up"></u-icon>
			</view>
			<view class="info">
				<view class="runner">
					<u-avatar :src="avatar_src" size="50"></u-avatar>
					{{avatar_text}}
				</view>

				<view class="order_box">
					<view class="start">

						<view class="left">
							<u--text prefixIcon="/static/home/point_green.png" iconStyle="font-size: 19px" block="true"
								text="起点："></u--text>
						</view>
						<view class="right">
							<u--text :lines="2" :text="startAdrres"></u--text>
						</view>
					</view>

					<view class="destination">
						<view class="left">
							<u--text prefixIcon="/static/home/point_orange.png" iconStyle="font-size: 19px" block="true"
								text="终点："></u--text>
						</view>
						<view class="right">
							<u--text :lines="2" :text="destination"></u--text>
						</view>
					</view>


				</view>
			</view>

			<view class="order_state">
				<u-button text="取消订单" color="#F39B1A"></u-button>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		latitude,
		longitude,
		city,
		weather,
		temperature,
	} from "@/utils/getLocation.js"
	
	export default {
		data() {
			return {
				latitude: "22.72174",
				longitude: "114.06031",
				startAdrres: "广东省中山市石岐区电子科技大学中山学院北门",
				destination: "广东省中山市南区幸福小区",
				avatar_src: "/static/home/94.png",
				avatar_text: "余师傅",
				markers: [{
					id: 0,
					iconPath: "/static/home/run-fill.png",
					longitude: 114.06031,
					latitude: 21.72174,
					width: 30,
					height: 30
				}],
				latitude: "",
				longitude: "",


			}
		},
		mounted() {
			this.$data.latitude= latitude
			this.$data.longitude= longitude
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.order_info {
		.moreInfo {
			display: flex;
			justify-content: center;
			padding-bottom: 20rpx;
		}

		.info {
			display: flex;
			flex-direction: row;

			.order_box {
				padding: 20rpx;

				.start,
				.destination {
					display: flex;
					flex-direction: row;
					margin-bottom: 20rpx;

					.left {
						width: 180rpx;
					}

				}


			}

			.runner {
				width: 140rpx;
				padding: 20rpx;
			}
		}

		.order_state {}
	}
</style>
