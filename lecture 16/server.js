const express = require('express');
const app = express();
const PORT=3000;
const logMiddleware=(req,res,next)=>{
    console.log("Request Method:",req.method);
    console.log("Request URL:",req.url);
    next();
}
const apicheckMiddleware=(req,res,next)=>{
    if (req.query.API_KEY=="1234"){
        next();
    } else {
        res.status(401).json("Invalid API key");
    }
};
app.use(logMiddleware);
app.use(apicheckMiddleware);

app.get("/",(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
});

app.get("/students",(req,res)=>{
    console.log("Hello Students");
    res.send("Hello Teachers");
});

app.listen(PORT,()=>{
    console.log(`Server is running`);
});