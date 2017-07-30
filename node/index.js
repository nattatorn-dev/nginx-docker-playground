const http = require('http')
const port = process.env.PORT || 8080

const requestHandler = function handler(req, res) {
    res.end("Hello! This is a simple node server!")
}

const server = http.createServer(requestHandler)

server.listen(port, () => console.log(`Node simple server is now listening on *:${port}`))