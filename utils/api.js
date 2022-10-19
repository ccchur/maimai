const request = require("./request")
const url = "https://maimai.ddindexs.com"
//请求路径
// 地址
const address = {
	add: "/address/add",
	update: "/address/update",
	search: "/address/search",
	delete: "/address/delete",
	demand: "/address/demand"
}

// 订单
const order = {
	send: "/order/send",
	demand: "/order/demand",
	searchMyOrder: "/order/searchMyOrder",
	cancel: "/order/cancel",
	searchOrder: "/order/searchOrder",
	orderParameters: "/order/orderParameters",
	riderOrder: "/order/riderOrder"
}

// 查询指定ID的订单状态信息
const order_status = {
	demand: "/orderstatus/demand",
}

// 骑手
const rider = {
	register: "/rider/register",
	login: "/rider/login", 
	demand: "/rider/demand",
	accept: "/rider/accept"
}

// 普通用户
const user = {
	login: "/user/login",  
	register: "/user/register",
	demand: "/user/demand", 
	logout: "/user/logout"
}
	
	
module.exports = {
	// 用户
	user_login(data){
		return request.login_request(url+user.login, data)
	},
	user_demand(data){
		return request.get(url+user.demand, data)
	},
	user_logout(data){
		return request.post(url+user.logout, data)
	},
	user_register(data){
		return request.post(url+user.register, data)
	},
	
	//骑手
	rider_login(data){
		return request.login_request(url+rider.login, data)
	},
	rider_register(data){
		return request.post(url+rider.register, data)
	},
	rider_demand(data){
		return request.get(url+rider.demand, data)
	},
	rider_accept(data){
		return request.post(url+rider.accept, data)
	},
	
	
	//订单
	order_searchOrder(data){
		return request.get(url+order.searchOrder, data)
	},
	order_searchMyOrder(data){
		return request.get(url+order.searchMyOrder, data)
	},
	order_send(data){
		return request.post(url+order.send, data)
	},
	order_demand(data){
		return request.get(url+order.demand, data)
	},
	order_orderParameters(data){
		return request.post(url+order.orderParameters, data)
	},
	order_riderOrder(data){
		return request.get(url+order.riderOrder, data)
	},
	
	
	//地址
	address_demand(data){
		return request.get(url+address.demand, data)
	},
	address_add(data){
		return request.post(url+address.add, data)
	},
	address_search(data){
		return request.get(url+address.search, data)
	},
	address_delete(data){
		return request.put(url+address.delete, data)
	},
	
	//订单状态
	order_status(data){
		return request.get(url+order_status.demand, data)
	}
}