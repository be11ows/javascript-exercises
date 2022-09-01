const ftoc = function(f) {
  let c = (f - 32) * (5 / 9);
  if(c % 1 === 0){
    return c;
  } else {
    return parseFloat(c.toFixed(1));
  }
};

const ctof = function(c) {
  let f = c * (9 / 5) + 32;
  if(f % 1 === 0){
    return f;
  } else {
    return parseFloat(f.toFixed(1));
  }
};

// ftoc(32);
ctof(-10);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
