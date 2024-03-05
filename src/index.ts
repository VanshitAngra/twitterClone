import express from "express";
const PORT=4455;
const app=express();
app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render("home");
})
app.listen(PORT,()=>{
    console.log('http://localhost:${PORT}')
})