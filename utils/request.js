
// 请求头
// const header = {
// 	'content-type': 'application/json',
// 	"cookie": uni.getStorageSync('cookie')
// }

// 请求
const request = (url, method, data ) => {
	return new Promise((resolve, reject) => {
		wx.request({
			url: url,
			method: method,
			data: method == "GET"?data:JSON.stringify(data),
			header: {
				'content-type': 'application/json',
				"cookie": uni.getStorageSync('cookie')
			},
			success: (res) => {
				if (res.data.code == 0) {
					reject(res.data.msg) 
				}else {
					resolve(res.data)
				}
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

// 登录请求
const login_request = (url, data) => {
	return new Promise((resolve, reject) => {
		wx.request({
			url: url,
			method: "POST",
			data: JSON.stringify(data),
			header: {
				'content-type': 'application/json',
			},
			success: (res) => {
				if (res.data.code == 0) {
					reject(res.data.msg) 
				}else {
					resolve(res)
				}
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}


module.exports = {
	get(url, data ){
		return request(url, "GET", data)
	},
	
	post(url, data ){
		return request(url, "POST", data)
	},
	
	put(url, data){
		return request(url, "PUT", data)
	},
	
	login_request(url, data){
		return login_request(url, data)
	}
	
}