function countCharacter(str, char) {
  return str.split(char).length - 1;
}

let myString = "programming is fun";
let characterToCount = "f";
let result = countCharacter(myString, characterToCount);

console.log(`The character "${characterToCount}" appears ${result} times.`);
