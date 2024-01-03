const { fuchsia } = require("color-name")
const express = require("express")
const app = express()

const port = 3001

function userMiddleware (req,res,next){
    const userName = "preet"
    const password = "pass"
    if(userName === "preet" && password === "pass" ){
        next();
    }
    else {
        res.status(403).json({msg : "invalid user credentials"})
    }
}

function kidneyMiddleware (req,res,next){
    const kidneyId = 1;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({msg : "invalid kidneyId credentials"})
    }
    else {
        next();
    }
}
let noOfReq = 0;
function calculateReq (req,res,next){
    noOfReq++
    console.log(noOfReq)
    next();
}

app.use(calculateReq);

app.get("/heart-health",userMiddleware,kidneyMiddleware,(req,res)=>{
    res.send("your heart is good")
})

app.listen(port,()=>{
    console.log(`running on port ${port}`)
})