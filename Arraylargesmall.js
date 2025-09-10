const numbers = [22, 5, 8, 99, 36, 0, 125, 98];
let smallest = numbers[0];
let largest = numbers[0];
for(let i=1; i< numbers.length;i++){
    if(numbers[i]<smallest)
        smallest = numbers[i];
    if(numbers[i]>largest)
        largest = numbers[i];
}
console.log("smallest:", smallest);
console.log("largest:", largest);