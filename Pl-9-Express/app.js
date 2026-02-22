//core module
const http = require('http');
//external module
const express = require('express');
const app = express();

app.use((req ,res ,next)=>{
    console.log("Came in first middleware",req.url);
    next()
})
app.use((req ,res ,next)=>{
    console.log("Cames in 2nd middleware",req.method);
    res.send('<p>Welcome to 2nd middleware</p>')
    })


const server = http.createServer(app);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})