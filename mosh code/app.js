
// const http = require('http');
// const server = http.createServer(function(req, res) {
//     if (req.url == '/'){
//         res.write('A Singh');
//         res.end();
//     }
//     else if (req.url == '/api/courses') {
//         res.write(JSON.stringify(
//             [1,2,3]
//         ));
//         res.end();
//     }
// });

// server.listen(3000);
// server.on('connection', (socket)=> {
//     console.log("New connection");
// });
// server.listen(3000);
// console.log("Listening on port 3000");


// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged', function(arg){
//     console.log("Listener receiving message"+ ' '+ arg["id"]+ ' '+ arg["url"]);
// });

// logger.log('message 42345');

// const fs = require('fs');
// const files = fs.readdirSync('./')
// console.log(files)

// fs.readdir('./', function(err, files) {
//     if (err) console.log(err);
//     else console.log(files);
// });


// const os = require('os');
// var totalMem = os.totalmem();
// var freeMemory = os.freemem()

// console.log(totalMem);
// console.log(freeMemory);
// console.log(`TOtoal Memory: ${totalMem}`);
// console.log(`Free Memory ${freeMemory}`);

// const path = require('path')
// var pathObj = path.parse(__filename)
// console.log(pathObj)

// const logger = require('./logger.js');
// console.log(logger);

// logger.log(
//     "This is my message"
// )

// function sayHello(name) {
//     console.log("Hello "+name)
// }

// log("Logger message");

// sayHello("Aryendra");

// globalThis.console.log("Test")
// global.console.log("Test 1")
// console.log(module)