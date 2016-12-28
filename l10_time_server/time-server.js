var net = require('net');

var port = process.argv[2];

function fullZero(d) {
  return (d >= 10 ? '' : '0') + d;
}

function printTime(socket) {
  var date = new Date(),
      data = date.getFullYear()             + '-' +
             fullZero(date.getMonth() + 1)  + '-' + 
             fullZero(date.getDate())       + ' ' + 
             fullZero(date.getHours())      + ':' + 
             fullZero(date.getMinutes());

  socket.end(data + '\n');
}

var server = net.createServer(printTime);

server.listen(port);

//SOLUTION
// var net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))