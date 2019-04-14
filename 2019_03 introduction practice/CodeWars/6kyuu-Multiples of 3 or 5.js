function solution(number) {
  const digits = getMultipleDigit(number);
  return getSumOfDigits(digits);
}

function getMultipleDigit(digit) {
  let multipleDigits = [];
  for (let index = 1; index < digit; index++) {
    if (isMultipleOf3or5(index)) {
      multipleDigits.push(index);
    }
  }
  return multipleDigits;
}

function isMultipleOf3or5(num) {
  return num % 3 == 0 || num % 5 == 0;
}

function getSumOfDigits(digits) {
  let sumResult = 0;
  for (const digit of digits) {
    sumResult += digit;
  }
  return sumResult;
}
