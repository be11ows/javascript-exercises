const palindromes = function (str) {
    
    let arr = str.split('').filter(letter => letter.match(/[a-zA-Z]/gm));
    let lcArr = arr.map(letter => letter.toLowerCase());
    console.log(lcArr);
    let loopLength = lcArr.length / 2;
    let isPal = false;

    for(let i = 0; i < loopLength; i++) {
        if(lcArr[i] === lcArr[lcArr.length - 1 - i]) {
            // console.log('i is ',i);
            // console.log(lcArr[i])
            // console.log(lcArr[lcArr.length - 1 - i])
            isPal = true;
        } else {
            return false;
        }
    }
    return isPal;
};

palindromes('ZZZZ car, a man, a maracaz.');

// Do not edit below this line
module.exports = palindromes;
