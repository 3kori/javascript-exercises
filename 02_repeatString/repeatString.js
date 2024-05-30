const repeatString = function(greeting, numOfRepeats) {
    let string ='';
    for(let i = 0; i < numOfRepeats; i++) {
        string += greeting;
    }
    if (numOfRepeats < 0) {
        return "ERROR";
    };
    return string;

};


// Do not edit below this line
module.exports = repeatString;
