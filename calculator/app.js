const http = require('http')
const reqTaker = require('./content')
const server =http.createServer(reqTaker)

PORT=3003
server.listen('PORT',()=>{console.log(`server running at PORT: ${PORT}`);
})