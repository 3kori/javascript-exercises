const convertToCelsius = function(tempInFahrenheit) {
  let fToCelsius = (tempInFahrenheit -32) * (5/9);

  if (fToCelsius === 0) {
    return 0;
  }
  else {
    return +fToCelsius.toFixed(1);
  }
};

const convertToFahrenheit = function(tempInCelsius) {
  let cToFahrenheit = (tempInCelsius * (9/5)) + 32;

  if (cToFahrenheit === 0) {
    return 0;
  }
  else {
    return +cToFahrenheit.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};