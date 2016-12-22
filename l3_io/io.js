var filePath = process.argv[2];

var fs = require("fs");

var content = fs.readFileSync(filePath, "utf8");

var rows = content.split("\n");

console.log(rows.length - 1);

// var fs = require('fs')
    
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)