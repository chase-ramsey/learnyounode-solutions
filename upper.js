const http = require('http');
const port = process.argv[2]

const server = http.createServer((req, res) => {

  // ...

});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
