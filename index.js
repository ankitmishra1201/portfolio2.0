const express = require('express');
const cors = require('cors');
const path = require('path');
const port=8000

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))

app.get("*",(req,res)=>{
    
})

app.listen(port,()=>{
    console.log("Server running in "+ port);
})
