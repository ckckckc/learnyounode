var http = require('http');
var bl   = require('bl');
var collect = [];
var count = 0;
var urls = [
  process.argv[2],
  process.argv[3],
  process.argv[4],
];

function printData() {
  for (var i = 0, len = urls.length ; i < len ; i++)  console.log(collect[i]);
}

function collectDataByIndex(index) {

  http.get(urls[index], function(response){

    response.on('error', console.error)

    response.pipe(bl(function(error, data) {
      collect[index] = data.toString();

      if (++count >= urls.length) printData();
    }));
  }).on('error', console.error);
}

for (var i = 0, len = urls.length ; i < len ; i ++) {
  collectDataByIndex(i);
}


// STANDARD SOLUTION
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }

