const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type' ,'text/html')
    res.write(`
       
<html >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li><a href="Home">Home</a></li>
        <li><a href="men">Men</a></li>
        <li><a href="women">Women</a></li>
        <li><a href="cart">Cart</a></li>
    </ul>
</body>
</html>
        `)
        res.end()
    if(req.url ==="/home"){
        res.write(`<html> <tittle></tittle>
            <body>
    <ul>
        <li><a href="home">Home</a></li>
        <li><a href="men">Men</a></li>
        <li><a href="women">Women</a></li>
        <li><a href="cart">Cart</a></li>
    </ul>
</body>
</html>`)
     res.writeFileSync('practice.txt',"hello")
    }
    // else if(req.url==="/product"){
       
    // }
   
})

const PORT = 3002;
server.listen(PORT,()=>{
    console.log(`server running at PORT:${PORT}`);

})

