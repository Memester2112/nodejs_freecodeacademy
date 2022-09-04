const http = require('http');

const server = http.createServer(
    (req, res) => {
        if (req.url === '/') {
            res.end("Welcome to home page");
        }
        else if (req.url === '/about') {
            res.end("Welcome to the About page");
        }
        else {
            res.end(`
            <h1>Oops!</h1>
            <p>Page does not exist</p>
            <a href="/">Go back Home</a>
            `)
        }
        
    }
)

server.listen(5000);