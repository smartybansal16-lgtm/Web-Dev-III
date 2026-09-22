const products = require('../data/data.js')
const express = require('express')
const router = express.Router()
const productcontroller = require('../controllers/productcontroller.js')


router.get("/",productcontroller.getAllProducts)


router.get("/:id",productcontroller.getProductById)



router.post("/",productcontroller.createProduct)



router.put("/:id",productcontroller.updateProduct)



router.delete("/:id",productcontroller.deleteProduct)

        res.status(404).json({success:false,message:"product not found"})
    
    result.name=product.name;
    result.category=product.category;
    result.price=product.price;
    res.json({success:true,result});




router.delete("//:id",(req,res)=>{
    const id=req.params.id;
    
    
    const result=products.find((product)=>product.id==id);
    if (result==undefined){
        res.status(404).json({success:false,message:"product not found"})
    }
    const index=products.indexOf(result);
    products.splice(index,1);
    res.json({success:true,result});
})

module.exports=router