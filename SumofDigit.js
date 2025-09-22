function sumDigits(number) {
  let numStr = String(number);
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += Number(numStr[i]);
  }
  return sum;
}
console.log(sumDigits(12385));
console.log(sumDigits(987));  