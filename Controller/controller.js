const StoreData = require("../Data")

// const dataController = (req,res)=>{
//     return res.send(StoreData)
// }

const {storeSchema}= require("../modal/model")
            const interData=async(req,res)=>{
                const first =await storeSchema.create(StoreData)
                res.send(first)
            }
            const takeData =async(req,res)=>{
                const second =await storeSchema.find({})
                res.send(second)
            }


module.exports = {interData,takeData}