const {interData,takeData,cartData,findcartData,deletecartitem} = require("../Controller/controller")
const {register,login,auth} = require("../Controller/authentication")
const route = require("express").Router()


route.post("/myData",interData)
route.get("/findData",takeData)

route.post("/addtocart",cartData)
route.get("/getcartItem",findcartData)

route.post("/deleteItem",deletecartitem)

route.post("/register",register)

route.post("/login",login)

route.get("/",auth,(req,res)=>{
    res.send("Welcome To AP Store")
})


module.exports = route