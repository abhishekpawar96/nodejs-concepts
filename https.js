const fs = require('fs');

// TO GENERATE CERT AND KEY
// openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes

// server: http.Server
const server = require('https')
    .createServer({
      key: fs.readFileSync('./key.pem'),
      cert: fs.readFileSync('./cert.pem')
    });
 
// res: http.serverResponse
// req: http.IncomingMessage
server.on('request', (req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello world\n');
});

server.listen(443);
