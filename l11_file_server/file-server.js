var http = require('http'),
    fs   = require('fs');

var port      = process.argv[2],
    directory = process.argv[3];

var server = http.createServer((req, res) => {
  fs.createReadStream(directory).pipe(res);
});

server.listen(port);

// SOLUTION
// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))