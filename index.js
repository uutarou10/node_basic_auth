const http = require('http')
const auth = require('basic-auth')

const name = 'username'
const password = 'pass'

const server = http.createServer(function (req,res) {
    const credential = auth(req)

    if (!credential || credential.name !== name || credential.pass !== password) {
        res.writeHead(401,{'WWW-Authenticate':'Basic realm="secret zone"'})
        res.end('Access denied')
    } else {
        res.end('Access granted')
    }
}).listen(8080)
console.log('Server listening...')