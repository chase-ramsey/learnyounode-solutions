const fs = require('fs');

let read;

fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;
  read = data.toString().split('\n');
  console.log(read.length - 1);
});
