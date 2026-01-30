const convertToCelsius = function (degrees) {
  return Math.round((5 / 9) * (degrees - 32) * 10) / 10;
};

const convertToFahrenheit = function (degrees) {
  return Math.round(((9 / 5) * degrees + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
