const removeFromArray = function () {

  let args = [...arguments];
  let arr = args.shift();

  for (let i = 0; i < args.length; i++) {
    if (arr.includes(args[i])){
      arr.splice(arr.indexOf(args[i]), 1);
    }
  }
  return arr;
};

removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
