const http = require('http')
const server=http.createServer((req,res) => {
    console.log("server is created")
    res.setHeader('content-type','text/html')
    res.write('<h2>Hello user</h2>')
})
server.listen(7000, () => {
    console.log('server is listening to requsets')
})