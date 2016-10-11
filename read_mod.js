#!/usr/bin/env node

const fs = require('fs');

const listFiles = (dirname, type, callbackFn) => {
  fs.readdir(dirname, (err, data) => {
    if (err) {
      return callbackFn(err);
    }
    let filtered = data.filter((file) => {
      let ext = file.split('.')[1];
      return ext === type;
    });
    callbackFn(null, filtered);
  })
};

module.exports = listFiles;

// LENO uses the path module to grab the extension, rather than trimming it off:
  // * Needs require('path') *

  // list = list.filter(function (file) {
  //    return path.extname(file) === '.' + filterStr;
  //  })
