const fibonacci = function(n) { 
    let n1 = 0, n2 = 1, next;
    let output;

        for(let i = 0; i < n; i++) {
        if(n <= 1) {
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



fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
