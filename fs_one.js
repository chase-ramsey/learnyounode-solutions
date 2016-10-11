const fs = require('fs');

let read = fs
            .readFileSync(process.argv[2])
            .toString()
            .split('\n');

let countLines = read.length - 1;

console.log(countLines);
