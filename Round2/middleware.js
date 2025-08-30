const express=require("express")
const app=express();
const path=require("path");

app.get("/profile",Token,(req,res,next)=>{
    res.send("<h1>Success</h1>")
    console.log("User logged")
    next()
},(req,res)=>{
    console.log("last middleware created")
})

function Token(req,res,next){
    console.log("token created..");
    next();
}

app.get("*",(req,res)=>{
    app.send("<h1>404 not found</h1>");
})

const PORT=process.env.PORT || 3005
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})