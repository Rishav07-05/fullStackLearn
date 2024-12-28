// const catMe = require('cat-me')
// console.log(catMe());

const http = require('http')

const server = http.createServer((req , res) => {
    res.end('Server created successfully')
})

server.listen(3000)