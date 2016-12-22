var path = require('path');
var fs   = require('fs');

module.exports = function(directory, reqExtension, callback) {
  try{
    if (directory == null || reqExtension == null || 
        callback == null) {
      throw new Error("arguments are required");
    }

    var fileList = [],
        currentExtension,
        reqExtension = '.' + reqExtension;

    fs.readdir(directory, function(err, data){
      if (err) throw err;
      for (var i = 0, len = data.length ; i < len ; i++) {
        currentExtension = path.extname(data[i]);
        if (currentExtension === reqExtension) fileList.push(data[i]);
      }

      return callback(null, fileList);
    });
  }
  catch(e) {
    return callback(e);
  }
};

// Solution
// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
