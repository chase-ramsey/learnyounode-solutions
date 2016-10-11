const http = require('http');

http.get(process.argv[2], (res) => {

  body = '';

  res.on('data', (data) => {
    body += data.toString();
  })

  res.on('end', () => {
    console.log(body.length);
    console.log(body);
  })

})
