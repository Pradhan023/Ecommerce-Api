const {interData,takeData,searchData} = require("../Controller/controller")
const {register,login,auth} = require("../Controller/authentication")
const route = require("express").Router()


route.post("/myData",interData)
route.get("/findData",takeData)

route.post("/register",register)

route.post("/login",login)

route.get("/",auth,(req,res)=>{
    res.send("Welcome To AP Store")
})

route.get("/search",searchData)


module.exports = route