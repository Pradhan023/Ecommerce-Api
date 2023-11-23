const {interData,takeData,searchData,newOrder} = require("../Controller/controller")
const {register,login,auth} = require("../Controller/authentication")
const route = require("express").Router()
const stripe=require("stripe")("sk_test_51OFIngSEzJx90BYMvlwLR2NykMIoiQcq4igz8DQEBl8Da28O4dIe4uWEHLSmLR0boVDncoqMz0k0GRaKMavG8Tne00R5o4kr6D")

const port = 5173 || 3000 ;

route.post("/myData",interData)
route.get("/findData",takeData)

route.post("/register",register)

route.post("/login",login)

route.post("/addtocart",)

route.get("/",auth,(req,res)=>{
    res.send("Welcome To AP Store")
})

route.get("/search",searchData)

//Payment route
route.post("/out/create-checkout-session",async(req,res)=>{
    const{products} = req.body
    console.log(products);
    const PurchaseItem =products.map((item)=>({
        price_data:{
            currency:"inr",
            product_data:{
                
                name:item.heading,

            },
            unit_amount:item.price * 100
        },
        quantity:item.quantity
       }))
       const session =await stripe.checkout.sessions.create({
        payment_method_types:["card"],
         line_items:PurchaseItem,
        mode:"payment",
        success_url:"https://enchanting-mousse-1516bd.netlify.app/",
        cancel_url:`http://localhost:${port}/cancel`,


    })
    res.json({id:session.id})
})


module.exports = route