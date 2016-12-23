var fs = require("fs");

var path = require("path");

var directory = process.argv[2];

var requiredExtension = "." + process.argv[3];

var init = function() {
  fs.readdir(directory, listFiles);
};

function getExtensionByFile(file) {
  return file.substring(file.lastIndexOf("\.") + 1, file.length);
}

function listFiles(err, list) {
  if (err) return console.log(err);

  var file, currentExtension;

  for (var i = 0, len = list.length ; i < len ; i++) {
    file = list[i];

    // currentExtension = getExtensionByFile(file);

    currentExtension = path.extname(file);

    if (currentExtension === requiredExtension) {
      console.log(file);
    }
  }
}

init();





// solution
// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
