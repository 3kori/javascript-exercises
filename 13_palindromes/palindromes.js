const palindromes = function (string) {
    const lettersNumbers = '1234567890abcdefghijklmnopqrstuvwxyz';

    const spacelessString = string.toLowerCase().split('').filter(filterArray).join('');

    function filterArray(characters) {
        return lettersNumbers.includes(characters);
    }

    const reversedString = spacelessString.split('').reverse().join('');

    if (spacelessString === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
