const reverseString = function(string) {
    const spString = string.split("");
    let rvString = spString.reverse();
    let rvGreeting = rvString.join("");
    return rvGreeting;
};

// Do not edit below this line
module.exports = reverseString;
