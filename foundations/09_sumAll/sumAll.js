const sumAll = function (a, b) {
  if ((a < 0) | (b < 0)) return "ERROR";
  if (!Number.isInteger(a) | !Number.isInteger(b)) return "ERROR";

  let sum = 0;
  let firstNum = 0;
  let lastNum = 0;

  if (a > b) {
    firstNum = b;
    lastNum = a;
  } else {
    firstNum = a;
    lastNum = b;
  }

  for (let i = firstNum; i <= lastNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
