const username = encodeURIComponent("Anishpradhan23")
const password = encodeURIComponent("anish5523")
const url =`mongodb+srv://${username}:${password}@cluster0.tu94oyn.mongodb.net/ecommerce?retryWrites=true&w=majority`;

// const url ="mongodb+srv://Anishpradhan23:anish5523@cluster0.tu94oyn.mongodb.net/ecommerce?retryWrites=true&w=majority";
            const mongoose= require("mongoose")
            const connection =async()=>{
                try{
                    await mongoose.connect(url)
                }
                catch(err){
                    console.log("This is wrong",err)
                }
            }
            module.exports =connection