let numArgs = process.argv.slice(2);

if (numArgs.length !== 0) {

  sum = numArgs.reduce((prev, next) => {
    return Number(prev) + Number(next);
  });

  console.log(sum);
}

