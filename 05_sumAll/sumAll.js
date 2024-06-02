const sumAll = function(num1, num2) {
    let sum = 0;
    let sumInBtwn  = 0;
    if (num1 > num2) {
        let i = num2;
        while(i < num1) {
            i++;
            sumInBtwn += i;
        }
    }
    else if ((num1 < 0 || num2 < 0) || (typeof num1 !== "number" || typeof num2 !== "number")) {
        return `ERROR`;
    }
    else {
        let i = num1;
        while(i < num2) {
          i++;
          sumInBtwn += i;
        }
    }

    if (num1 > num2) {
        sum = sumInBtwn + num2;
    }
    else {
        sum = sumInBtwn + num1;
    }
    
    return sum ;
};
// Do not edit below this line
module.exports = sumAll;
