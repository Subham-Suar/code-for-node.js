const http = require('http')

const server =http.createServer((req,res)=>{
    console.log('hello')
})

const PORT=3005
server.listen(PORT,()=>{console.log(`server running at PORT: ${PORT}`)
})