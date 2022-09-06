const fibonacci = function(arg) { 
    if(arg < 0) {
        return "OOPS";
    };
    if(typeof arg === 'string'){
        arg = +arg;
    };
    let n1 = 0, n2 = 1, next;
    let output;

    for(let i = 0; i < arg; i++) {
        if(arg <= 1) {
            return 1;
        } else {
            output = n2;
            next = n1 + n2;
            n1 = n2;
            n2 = next;
        }
    }
    return output;
};



fibonacci("8");

// Do not edit below this line
module.exports = fibonacci;
