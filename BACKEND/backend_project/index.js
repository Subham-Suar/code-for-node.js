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
     res.render('index',{files:files}) // first files:The varriable name you used in your ejs and the second files what value you want to pass
   })
})
app.get('/file/:filename',(req,res)=>{
   fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
      res.render('show',{filename:req.params.filename,filedata:filedata})
   })
})
app.get('/edit/:filename',(req,res)=>{
   fs.readFile(`./files/${req.params.filename}`,"utf-8",function(filedata){
       res.render('edit',{previousFilename:req.params.filename})
   })
  
})
app.post('/create',(req,res)=>{
   fs.writeFile(`./files/${req.body.tittle.split(' ').join('')}`,req.body.details,function(err){
    res.redirect("/")
   })
})

app.post('/edit',(req,res)=>{
  fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,function(error){
   res.redirect('/')
  })  
})


app.listen(3001,()=>{
    console.log("Server listen on port : 3001");
    
})