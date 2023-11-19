const StoreData = require("../Data")

const {productCollection}= require("../modal/model")
            const interData=async(req,res)=>{
                const first =await productCollection.create(StoreData)
                res.send(first)
            }
            const takeData =async(req,res)=>{
                const second =await productCollection.find({})
                res.send(second)
            }
            
            const searchData = async (req,res)=>{
                const {category,subcategory,name} = req.query;

                const queryObj = {} 

                if(category){
                    queryObj.category = {$regex : category , $options : "i"};   //i represents case sensitive
                }

                if(subcategory)
                {
                    queryObj.subcategory = {$regex : subcategory , $options : "i"};
                }

                if(name)
                {
                    queryObj.name = {$regex : name , $options : "i"};
                }

                if(!category && !name && !subcategory){
                    return res.send({msg:"Invalid entery"})
                }


                const searchedData = await productCollection.find(queryObj);
                res.send(searchedData)
            }


module.exports = {interData,takeData,searchData}