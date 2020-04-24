const http = require('http');

// req: http.ClientRequest
const req = http.request(
  { hostname: 'www.google.com' },
  // res: http.IncomingMessage
  res => {
    console.log(res.statusCode);
    console.log(res.headers);
    
    res.on('data', data => console.log(data.toString()));
  }
);

req.on('error', e => console.error);

req.end();