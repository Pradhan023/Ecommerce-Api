const {interData,takeData,cartData,findcartData,deletecartitem} = require("../Controller/controller")
const route = require("express").Router()


route.post("/myData",interData)
route.get("/findData",takeData)

route.post("/addtocart",cartData)
route.get("/getcartItem",findcartData)

route.post("/deleteItem",deletecartitem)


module.exports = route