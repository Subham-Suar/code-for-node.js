const express = require("express");
const path = require("path");
const fs= require('fs')
const app = express();


app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
   fs.readdir(`./files`,function(err,files){
     res.render('index',{files:files})
   })
})
app.post('/create',(req,res)=>{
   fs.writeFile(`./files/${req.body.tittle.split(' ').join('').txt}`,req.body.details,function(err){
    res.redirect("/")
   })
})

app.listen(3000,()=>{
    console.log("Server listen on port : 3000");
    
})