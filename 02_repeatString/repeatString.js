const repeatString = function(string, num) {
  let output = '';
  if(num < 0){
    output = 'ERROR';
  } else {
    for (let i = 0; i < num; i++) {
      output += string;
    }
  }
  return output;
};
// const number = Math.floor(Math.random() * 1000)
repeatString('', 10)

// Do not edit below this line
module.exports = repeatString;
