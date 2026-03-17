const express = require('express');
const cookieParser = require("cookie-parser")
const app = express()
const path = require('path')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('./models/user')

app.use(cookieParser());
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/create',(req,res)=>{
    const {username,email,password,age} = req.body  
      bcrypt.genSalt(8,(err,salt)=>{
        bcrypt.hash(password,salt,(err,hash)=>{
            let createdUser = userModel.create({
                username,
                email,
                password:hash,
                age
            })
            let token = jwt.sign({email:email},"shhh")
            res.cookie("token",token)
            res.send(createdUser)
        })
      })  
    })
app.get("/login",(req,res)=>{
   res.render('login')
 })  
 
app.post("/login",async (req,res)=>{
    let user = await userModel.findOne({email:req.body.email})
    if(!user) return res.send("Something went wrong")
    bcrypt.compare(req.body.password, user.password , function(err, result) {
        
    if(result){
       
        let token = jwt.sign({email:user.email},"shhhh")
        res.cookie('token',token)
        res.send("you logged-in")}
     else res.send("something went wrong")
});

    
})
 app.get("/logout",(req,res)=>{
    res.cookie("token","")

 })  



app.listen("3000",()=>{
    console.log(`server listen at PORT:3000`);
    
})