const leapYears = function(year) {
  
  let output;

  if (year % 100 === 0) {
    if (year % 400 === 0) {
      output = true;
    } else {
      output = false;
    }
  } else if (year % 4 === 0) {
    output = true;
  } else {
    output = false;
  }

  return output;
};

leapYears(700)

// Do not edit below this line
module.exports = leapYears;
