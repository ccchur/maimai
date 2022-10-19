<template>
	<view>
		<view class="top">
			<u--image class="topImg" :showLoading="true" :src="imgSrc" width="750rpx" height="350rpx"></u--image>
			<view class="logo">
				<u--image  src="/static/logo.png" shape="circle" width="200rpx"
					height="200rpx"></u--image>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		name: "bgLogo",
		data() {
			return {
				imgSrc: "https://cdn.uviewui.com/uview/album/1.jpg"
			};
		}
	}
</script>

<style scoped lang="scss">
	.top {
		position: absolute;

	}

	.logo {
		position: absolute;
		left: 50%;
		margin-left: -100rpx;
		top: 232rpx;
		z-index: 5;
	}
</style>
