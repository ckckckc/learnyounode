var filterFile = require('./filter-file');

var fs = require('fs');

var directory = process.argv[2];

var requiredExtension = process.argv[3];

filterFile(directory, requiredExtension, function(err, data) {
  if (err) return console.log(err);

  for (var i = 0, len = data.length ; i < len ; i++) {
    console.log(data[i]);
  }
});

// Solution
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })