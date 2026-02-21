const http = require('http')
const fs = require('fs')
const PORT =3001

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html'); //response.setHeader(name, value)
    if(req.url ==="/"){
       res.write('<html>');
    res.write('<head><tittle>complete coding </tittle></head>')
    res.write('<body><h1>welcome to home page</h1></body>')
    res.write('</html>')
    return res.end() 
    }
    else if(req.url==="/submit-details"){
        res.write('<html>');
    res.write('<head><tittle>complete coding </tittle></head>')
    res.write('<body><h1>Welcome to product section </h1></body>')
    res.write('</html>')
    return res.end()
    }
    else if(req.url.toLowerCase() === "/submit-details"&& req.method =="POST"){
     fs.writeFileSync('user.txt',"Prasant Jain")
     res.statusCode = 302;
     res.setHeader('Location','/')
    }
    res.write('<html>');
    res.write('<head><tittle>complete coding </tittle></head>')
    res.write('<body>vibe coder</body>')
    res.write('</html>')
    res.end()
})

server.listen('PORT',()=>{console.log(`Server listen at PORT:${PORT}`);
})