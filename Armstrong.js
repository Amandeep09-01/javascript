function isArmstrong(num) {
    let temp = num;
    let sum=0;
    let digits = num.toString().length;
    while(temp>0) {
        let digit = temp % 10;
        sum += Math.pow(digit,digits);
        temp= Math.floor(temp/10);
    }
    return sum === num;
}
console.log(isArmstrong(153));
console.log(isArmstrong(9474));
console.log(isArmstrong(123));