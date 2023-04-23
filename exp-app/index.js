const express = require("express")

const app= express()

app.get("/",(req,res)=>{
    res.json({main:"hai how are oyur"})
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("App is listeneing at port 3000")
})