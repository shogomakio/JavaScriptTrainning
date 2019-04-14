function persistence(num) {
  const multiplicative = num => {
    let counter = 0;
    let remain = num;
    while (remain >= 10) {
      let digits = remain
        .toString()
        .split("")
        .map(Number);
      multiplyDigits = () => {
        let multiplicationResult = 1;
        for (const digit of digits) {
          multiplicationResult *= digit;
        }
        return multiplicationResult;
      };
      remain = multiplyDigits();
      counter++;
    }
    return counter;
  };
  return multiplicative(num);
}
