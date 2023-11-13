const StoreData = require("../Data")

// const dataController = (req,res)=>{
//     return res.send(StoreData)
// }

const {storeSchema, cartSchema}= require("../modal/model")
            const interData=async(req,res)=>{
                const first =await storeSchema.create(StoreData)
                res.send(first)
            }
            const takeData =async(req,res)=>{
                const second =await storeSchema.find({})
                res.send(second)
            }

            
            const cartData = async(req,res)=>{
                const cartanish = req.body;
                const first = await cartSchema.create(cartanish)
                res.send(first)
            }

            const findcartData = async(req,res)=>{
                const find = await cartSchema.find({})
                // console.log(find);
                res.send(find)
            }

            // const deletecartitem = (req,res)=>{
            //     // const itemToRemove = req.body; // Assuming the request body contains the item data
            //     // const newitem = JSON.stringify(itemToRemove)
            //     // const index = cartSchema.deleteOne({"id":newitem.id});
            //     // console.log(index);

            //     // res.send(index)
                
            //     // if (itemToRemove !== -1) {
            //     //     cartSchema.splice(index, 1);
            //     //     res.json({ message: 'Item removed from the cart', item: itemToRemove });
            //     // } else {
            //     //     res.status(404).json({ message: 'Item not found in the cart' });
            //     //   }
            // }

            const deletecartitem = async (req, res) => {
                const itemToRemove = req.body; // Assuming the request body contains the item data

            
                try {
                    const result = await cartSchema.deleteOne({ "id": itemToRemove });
                    console.log(result);
            
                    if (result.deletedCount === 1) {
                        res.json({ message: 'Item removed from the cart', item: itemToRemove });
                    } else {
                        res.status(404).json({ message: 'Item not found in the cart' });
                    }
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ message: 'Internal server error' });
                }
            }


module.exports = {interData,takeData,cartData,findcartData,deletecartitem}