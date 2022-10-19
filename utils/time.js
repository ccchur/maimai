let now = new Date()

let yy = now.getFullYear()
let mm = now.getMonth()+1
let dd = now.getDate()
let hh = now.getHours()
let mi = now.getMinutes()



const data1 = yy+"-"+mm+"-"+dd

const data2 = hh+":"+mi


 const time = yy+"-"+mm+""+dd + "-" + hh+":"+mi


export {data1, data2, time }

