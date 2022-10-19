var QQMapWX = require('../common/qqmap/qqmap-wx-jssdk.js');
var qqmapsdk;

qqmapsdk = new QQMapWX({
	key: '4X7BZ-G7AKD-EQE4E-PTUPW-CDJBO-JEB7T'
});


// 当前需要获取的数据
let latitude = ""
let longitude = ""
let city = ""
let weather = ""
let temperature = ""
// 获取当前位置

wx.getLocation({
	type: 'gcj02',
	success: res => {

		console.log(res); //获取到经纬度值

		qqmapsdk.reverseGeocoder({ // 根据经纬度转化为地址
			location: {
				latitude: res.latitude,
				longitude: res.longitude
			},
			success: res => {
				console.log(res);
				latitude = res.result.location.lat
				longitude = res.result.location.lng
				city = res.result.ad_info.city

				// 查询天气
				wx.request({
					url: 'https://restapi.amap.com/v3/weather/weatherInfo',
					method: 'GET',
					data: {
						key: 'f82451bbf9a178c3e73162d7530372f4',
						city: res.result.ad_info.adcode,
					},
					success: (res) => {
						console.log(res.data.lives[0].weather);
						weather = res.data.lives[0].weather
						temperature = res.data.lives[0]
							.temperature
					},

				})



			}
		})

	}
});



export {
	latitude,
	longitude,
	city,
	weather,
	temperature,

}
