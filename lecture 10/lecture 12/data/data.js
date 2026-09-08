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
