const express=require('express');
const app=express();
const port=3000;
app.use(express.json());  //middleware to parse JSON request body

const products=[
    {id:1,
    name:"Iphone",
    price:100000},

    {id:2,
    name:"Ipad",
    price:20000}
    ,]

app.get('/api/products',(req,res)=>{                //Read
    res.json({success:true,products});
})
app.get('/api/products/:id',(req,res)=>{     
    const id=req.params.id;           //Read
    const result=products.find((product)=>product.id==id);
    if(result==undefined){
        res.status(404).json({success:false,message:"Product not found"});
    }else{
        res.json({success:true,result});
    }
})
app.post('/api/products',(req,res)=>{                //Create
    const product=req.body;
    products.push(product);
    res.json({success:true,product});
})
app.post('/api/products/:id',(req,res)=>{                //Update
    const id=req.params.id;
    const product=req.body;
    const index=products.findIndex((product)=>product.id==id);
    if(index==-1){
        res.status(404).json({success:false,message:"Product not found"});
    }else{
        products[index]=product;
        res.json({success:true,product});
    }
})
app.put('/api/products/:id',(req,res)=>{                //Update
    const id=req.params.id;
    const product=req.body;
    const result=products.findIndex((product)=>product.id==id);
    if(result==undefined){
    res.status(404).json({success:false,message:"Product not found"});
} 
    result.name=product.name;
    result.price=product.price;
    res.json({success:true,result});
})
app.delete('/api/products/:id',(req,res)=>{                //Delete
    const id=req.params.id;
    const result=products.findIndex((product)=>product.id==id);  
    if(result==undefined){
        res.status(404).json({success:false,message:"Product not found"});}
    const index=products.indexOf(result);
    products.splice(index,1);
    res.json({success:true,result});
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});