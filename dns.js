 const dns = require('dns');

dns.lookup('wikipedia.org', (err, address) => {
     let ip = '103.102.166.224';
     console.log(address);
});

dns.resolve4('wikipedia.org', (err, address) => {
    console.log(address);
});

dns.resolve('wikipedia.org', 'MX', (err, address) => {
    console.log(address);
});

dns.resolveMx('wikipedia.org', (err, address) => {
    console.log(address);
});

dns.lookup('wikipedia.org', (err, address) => {
    dns.reverse(address, (err, hostnames) => {
        console.log(hostnames);
    });
});
