//core module
const http = require('http');
//external module
const express = require('express');
const app = express();
const bodyParser = require("body-parse")

app.use((req ,res ,next)=>{
    console.log("Came in first middleware",req.url);
    next()
})
app.get("/login-page",(req ,res ,next)=>{
    console.log("Cames in 2nd middleware",req.method);
   `<form action="/submit-details" method="POST">
        <input type="text" name="username" placeholder="Enter your name"><br>
        <label for="male">Male</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label for="female">Female</label>
        <input type="radio" id="female" name="gender" value="female" />
        <br><input type="submit" value="Submit">
        </form>`
        next();
    })

app.use(bodyParser.urlencoded())

app.post("/submit-details",(req,res,next)=>{
    console.log(req.url,req.body);
    
})
const server = http.createServer(app);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})