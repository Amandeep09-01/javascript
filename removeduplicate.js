function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let numbers = [1, 2, 3, 2, 4, 1, 5, 6];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);