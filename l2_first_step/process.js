var argv = process.argv;

var args = argv.slice(2, argv.length);

for (var sum = i = 0, len = args.length ; i < len ; i++) {
  sum += Number(args[i]);
}

console.log(sum);
