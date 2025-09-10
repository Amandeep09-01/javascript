function countVowel(str) {
    let matches=str.match(/[aeiou]/gi);
    return matches ? matches.length :0;
}
console.log(countVowel("OpenAI"));
console.log(countVowel("Ram"));