const path = require('path')
const express = require('express')
const rootDir = require('../../Pl-10-airbnb/utils/pathUtil')

const userRouter = express.Router();

userRouter.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','home.html',))
});

module.exports = userRouter;
