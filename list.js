const fs = require('fs');

const dir = process.argv[2]
const type = process.argv[3]

const printList = (list) => {
  list.forEach((file) => {
    console.log(file);
  })
}

fs.readdir(dir, (err, data) => {
  if (err) throw err;
  let filtered = data.filter((file) => {
    let ext = file.split('.')[1];
    return ext === type;
  });
  printList(filtered);
})
