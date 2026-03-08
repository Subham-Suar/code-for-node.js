 const express = require('express')
const app = express();
const path =require('path');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');


app.get('/', function(req,res){
    res.render("index")
})
app.get('/profile/:username/:age',(req,res)=>{
    res.send(`Welcome ${req.params.username} ,your age${req.params.age}`)
})

app.listen(3000,function(){
    console.log(`server running on port : 3000`)
})