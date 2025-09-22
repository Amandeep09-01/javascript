function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have at least two elements.";
  }
    arr.sort((a, b) => b - a);
    return arr[1];
}

let numbers = [15, 2, 8, 1, 9, 3];
let secondLargest = findSecondLargest(numbers);
console.log(secondLargest); 