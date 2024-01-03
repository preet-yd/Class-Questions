const express = require('express')
const app = express()
const fs = require('fs')

app.get('/files/:fileName',(req,res) => {
    const fileName = req.params.fileName
    fs.readFile(fileName, 'utf-8', (err,data)=>{
        res.send("error showed is " + err)
        res.send(data);
    })
    // res.send(fileName);
})

app.listen(3000)