var http = require('http');

var url = process.argv[2];

function callback(response) {
  response.setEncoding("utf8");
  response.on("data", function(data) {
    console.log(data);
  });

  response.on("error", function(error){
    console.log(error);
  });
}

http.get(url, callback);

// solution
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)

