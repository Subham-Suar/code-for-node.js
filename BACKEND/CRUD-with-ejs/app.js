const express = require("express");
const path = require("path");
const fs= require('fs');
const app = express();
const mongoose = require('mongoose');
const userModel = require('./models/user');
const crypto = require('crypto')
//const multer = require('multer');
const multerconfig = require('./config/multerconfig')
 
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/image/uploads')
//   },
//   filename: function (req, file, cb) {
//     crypto.randomBytes(12,function(err,bytes){
//       const fn= bytes.toString('hex')+path.extname(file.originalname)
//        cb(null, fn)
//     })
   
//   }
// })

// const upload = multer({ storage: storage })

app.get('/',(req,res)=>{
   res.render('index')
})
// app.get('/test',(req,res)=>{
//    res.render('test')
// })
//  app.post('/upload',upload.single("image"),(req,res)=>{
//    res.redirect("/")
//  })

app.get('/read',(req,res)=>{
   let users = userModel.find();
   res.render('read',{users}) //{users:users}
})
app.post('/create',async (req,res)=>{
   const{user,email,image} = req.body;
   const createdUser = await userModel.create({
         user,
         email,
         image
   })
   res.redirect('/read')
})



app.listen(3001,()=>{
    console.log("Server listen on port : 3001");
    
})