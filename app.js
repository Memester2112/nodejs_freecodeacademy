const http = require('http');

const server = http.createServer();

server.on ('request', (req, res) => {
    res.end('Welcome');
    console.log("Request made");
});

server.listen(5000);

