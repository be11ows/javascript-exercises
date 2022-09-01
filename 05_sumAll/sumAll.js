const sumAll = function(n1, n2) {
  
  if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    return 'ERROR';
  } else if (n1 < 0 || n2 < 0) {
    return 'ERROR';
  }

  let larger = 0;
  let smaller = 0;
  let sum = 0;

  if (n1 > n2) {
    larger = n1;
    smaller = n2
  } else {
    smaller = n1;
    larger = n2;
  }

  for (let i = smaller; i <= larger; i++) {
    sum += i;
  }
  return sum;

};
sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
