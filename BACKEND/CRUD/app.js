 const express = require('express')
const app = express();
const path =require('path');
const userModel = require('./usermodel')

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static(path.join(__dirname,'public')));
 //app.set('view engine','ejs');


app.get('/', function(req,res){
    res.send("hey")
})
app.get('/create',  async function(req,res){
    let createduser = await userModel.create({
        name:"Subham kumar",
        username:"Subham Suar",
        email:"subham@gmail.com"
    })
    res.send(createduser)
})
app.get('/update',  async function(req,res){
    let updateduser = await userModel.findOneAndUpdate({username:"Subham Suar"},{name:"Subham with updation"},{new:true})
    res.send(updateduser)
})
app.get('/read',  async function(req,res){
    let users = await userModel.findOne({name:"Subham kumar"})
    res.send(users)
})
app.get('/delete',  async function(req,res){
    let deletedusers = await userModel.findOneAndDelete({name:"Subham kumar"})
    res.send(deletedusers)
})





app.listen(3000,function(){
    console.log(`server running on port : 3000`)
})