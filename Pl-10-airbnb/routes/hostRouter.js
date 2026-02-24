const path = require('path')
const express = require('express')
const rootDir = require('../utils/pathUtil')
const hostRouter = express.Router();

hostRouter.get('/add-home',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','addHome.html'))
})
 const houseList =[]
hostRouter.post("/add-home",(req,res,next)=>{
    console.log(req.body.houseName)
    houseList.push({Housename:req.body.houseName})
    res.render('home' , {houseList})
})

module.exports = hostRouter