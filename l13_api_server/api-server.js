var http = require('http');

var port = process.argv[2];

var url = require('url');

function fullZero(d) {
  return Number((d >= 10 ? '' : '0') + d);
}

function getTime(date) {
  return {
    "hour"   : fullZero(date.getHours()),
    "minute" : fullZero(date.getMinutes()),
    "second" : fullZero(date.getSeconds())
  };
}

function getUNIXTime(date) {
  return {
    "unixtime" : date.valueOf()
  };
}

var server = http.createServer(function(req, res){
  var urlContent = url.parse(req.url, true),
      respond,
      code = 200;

  if (req.method === 'GET') {
    var date = new Date(urlContent.query.iso);

    switch(urlContent.pathname) {
      case '/api/parsetime':
        respond = getTime(date);
        break;
      case '/api/unixtime':
        respond = getUNIXTime(date);
        break;
      default:
        respond = 'worng api pathname';
        code = 400;
        break;
    }
  }
  else {
    respond = 'wrong request method';
    code = 400;
  }

  res.writeHead(code, { 'Content-Type': 'application/json' });

  res.end(JSON.stringify(respond));

}).on('error', console.error);

server.listen(port);

// SOLUTION
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))