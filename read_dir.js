#!/usr/bin/env node

const lister = require('./read_mod');

const printList = (err, data) => {
  if (err) throw err;
  data.forEach((item) => {
    console.log(item);
  });
}

lister(process.argv[2], process.argv[3], printList);
