// Solution 1
var http = require('http');

var url = process.argv[2];

function collectResponse(response) {
  var data = '';
  var characterLen = 0;

  response.setEncoding("utf8");

  response.on('end', function() {
    console.log(characterLen);
    console.log(data);
  });

  response.on('data', function(chunk){
    characterLen += chunk.length;
    data += chunk;
  });

  response.on('error', function(error) {
    console.log(error);
  });
}

function init() {
  http.get(url, collectResponse);
}


init();

// Solution2
// var http = require('http');
// var bl   = require('bl');
// var url = process.argv[2];

// function collectResponse(response) {
//   var data = '';
//   var characterLen = 0;

//   response.pipe(bl(function(err, data){
//     data = data.toString();
//     console.log(data.length);
//     console.log(data);
//   }));
// }

// function init() {
//   http.get(url, collectResponse);
// }

// init();

// Solution 3
// var http = require('http');
// var concatStream   = require('concat-stream');
// var url = process.argv[2];

// function collectResponse(response) {
//   var data = '';
//   var characterLen = 0;

//   response.pipe(concatStream(function(data){
//     data = data.toString();
//     console.log(data.length);
//     console.log(data);
//   }));
// }

// function init() {
//   http.get(url, collectResponse);
// }

// init();


// STANDARD SOLUTION
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })