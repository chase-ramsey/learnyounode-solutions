const http = require('http');

let pArray = [];

for (var i = 2; i < process.argv.length; i++) {
  let p = new Promise((resolve, reject) => {
    http.get(process.argv[i], (res) => {

      body = '';

      res.on('data', (data) => {
        body += data.toString();
      });

      res.on('end', () => {
        return resolve(body);
      });

      res.on('error', () => {
        return reject(error);
      });

    });
  });

  pArray.push(p);

}

Promise.all(pArray)
  .then((values) => {
    values.forEach((value) => {
      console.log(value);
    });
  });


// LENO solution

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//  for (var i = 0; i < 3; i++) {
//    console.log(results[i])
//  }
// }

// function httpGet (index) {
//  http.get(process.argv[2 + index], function (response) {
//    response.pipe(bl(function (err, data) {
//      if (err) {
//        return console.error(err)
//      }

//      results[index] = data.toString()
//      count++

//      if (count === 3) {
//        printResults()
//      }
//    }))
//  })
// }

// for (var i = 0; i < 3; i++) {
//  httpGet(i)
// }
