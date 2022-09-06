const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
  let output = 0;
	for(let i = 0; i < arr.length; i++) {
    output += arr[i];
  }
  return output;
};

const multiply = function(arr) {
  let output = 1;
  if(!arr){
    return 1;
  }
	for(let i = 0; i < arr.length; i++) {
    output *= arr[i];
  }
  return output;
};

const power = function(num, pow) {
    let output = 1;
    for(let i = 0; i < pow; i++) {
      output *= num;
    }
    return output;
};

const factorial = function(num) {
    let output = 1;
    if(num === 0) {
      return 1;
    }
    for(let i = num; i > 0; i--) {
      output *= i;
    }
    return output;
};

factorial(10);


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
