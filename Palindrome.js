function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    let reversed= str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("hello"));