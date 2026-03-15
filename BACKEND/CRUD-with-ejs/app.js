const express = require("express");
const path = require("path");
const fs= require('fs');
const app = express();
const mongoose = require('mongoose');
const userModel = require('./models/user');
 
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
   res.render('index')
})
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