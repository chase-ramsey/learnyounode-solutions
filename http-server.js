const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((req, res) => {

  date = new Date();
  console.log(`Heard request - ${date}`);

  let stream = fs.createReadStream(file);

  res.writeHead(200, {'content-type': 'text/plain'});
  stream.pipe(res);

});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


// LENO solution

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//  res.writeHead(200, { 'content-type': 'text/plain' })

//  fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
