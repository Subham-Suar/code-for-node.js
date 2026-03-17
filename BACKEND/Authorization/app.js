const express = require('express');
const cookieParser = require("cookie-parser")
const app = express()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(cookieParser())
// app.get('/',(req,res)=>{
//     res.cookie("name","Harsh")
//     res.send("Done")
// })
// app.get('/read',(req,res)=>{
//    console.log(req.cookie);
   
//     res.send("Get read")
// })

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });

// app.get('/',(req,res)=>{
//    bcrypt.genSalt(10, function(err, salt) {
//     console.log(salt);
//      bcrypt.hash("loliopolio", salt, function(err, hash) {
//         console.log(hash);
        
//         // Store hash in your password DB.
//     });
// });
// })
app.get('/',(req,res)=>{
   let token = jwt.sign({email:"harsh@gmail.com"},"shhhh");
   res.cookie("token",token);
   res.send("Done")
});
app.get("/read",(req,res)=>{
    let data=jwt.verify(req.cookies.token ,'shhhh');
    console.log(data);
    
})

app.listen("3000",()=>{
    console.log(`server listen at PORT:3000`);
    
})