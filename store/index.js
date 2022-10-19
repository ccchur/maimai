import Vue from 'vue'
import Vuex from "vuex"



Vue.use(Vuex)


const  sendAbout = {
	namespace: true,
	state: {
		sendName: "",
		sendPhone: "",
		sendAddress: "",
		sendlatitude: "",
		sendlongitude: "",
		
		acceptName: "",
		acceptPhone: "",
		acceptAddress: "",
		acceptlatitude: "",
		acceptlongitude: "",
		
		// boolean 是否时时配送
		delivery: "",
		
		// 物品类型
		type: "-1",
		typeName: "",
		weight:	"",
		//备注
		desc: "",
		// 日期
		// 时间 
		time: "",
		// 距离
		distance: "",
		// 小费
		tips: "",
		// 总价
		price: "",
		// 状态
		
		//尺寸
		size: ""
	},
	mutations: {
		setState(state, newState){
			state = newState
		},
		setsendName(state, newName){
			state.sendName = newName
		},
		setsendPhone(state, newPhone){
			state.sendPhone = newPhone
		},
		setsendAddress(state, newAddress){
			state.sendAddress = newAddress
		},
		setacceptName(state, newName){
			state.acceptName = newName
		},
		setacceptPhone(state, newPhone){
			state.acceptPhone = newPhone
		},
		setacceptAddress(state, newAddress){
			state.acceptAddress = newAddress
		},
		settypeName(state, newtypeName){
			state.typeName = newtypeName
		},
		setWeight(state, newWeight){
			state.weight = newWeight
		},
		setDesc(state, newDesc){
			state.desc = newDesc
		},
		setdistance(state, newdistance){
			state.distance = newdistance
		},
		settips(state, newtips){
			state.tips = newtips
		},
		setprice(state, newprice){
			state.price = newprice
		},
		setstate(state, newstate){
			state.state = newstate
		},
		settime(state, newdata1){
			state.time = newdata1
		},
		setSize(state, newSize){
			state.size = newSize
		},
		setType(state, newType){
			state.type = newType
		},
		
		setSendlatitude(state, newSendlatitude){
			state.sendlatitude = newSendlatitude
		},
		setSendlongitude(state, newSendlongitude){
			state.sendlongitude = newSendlongitude
		},
		setAcceptlatitude(state, newAcceptlatitude){
			state.acceptlatitude = newAcceptlatitude
		},
		setAcceptlongitude(state, newAcceptlongitude){
			state.acceptlongitude = newAcceptlongitude
		},
	},
}



// 物品基础信息
const basisAbout = {
	namesapce: true,
	state: {
		typeList: [
			{name: "文件证件",isClick: false},
			{name: "钥匙",isClick: false},
			{name: "手机数码",isClick: false},
			{name: "鲜花",isClick: false},
			{name: "蛋糕",isClick: false},
			{name: "服饰衣帽",isClick: false},
			{name: "日用品",isClick: false},
			{name: "药品",isClick: false},
			{name: "广告印刷",isClick: false},
			{name: "汽配",isClick: false},
			{name: "食品饮料",isClick: false},
			{name: "生鲜",isClick: false},
			{name: "其它",isClick: false},
		],
		
	},
	// 本次寄东西的名字
	getters: {
		typeName: state => type => {
			return state.typeList[type].name
		}
	}
}




export default new Vuex.Store({
	modules: {
		
		sendAbout,
		basisAbout,
		
		
	}
	
	
})
