// const catMe = require('cat-me')
// console.log(catMe());

const { log } = require('console')
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')
    }

    if (req.url === '/about') {
        res.end('About Page')
    }

    if (req.url === '/profile') {
        res.end("The Profile Page")
    }

})

server.listen(3000)