const net = require('net');
const port = process.argv[2];

function addZero (datePartial) {
  if (datePartial.length < 2) {
    datePartial = '0' + datePartial;
  }
  return datePartial;
}

function getDate () {
  let date = new Date();

  let year = date.getFullYear();
  let month = addZero(date.getMonth() + 1);
  let day = addZero(date.getDate());
  let hours = addZero(date.getHours());
  let minutes = addZero(date.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const server = net.createServer((socket) => {

    let now = getDate() + '\n';
    socket.end(now)

})

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
