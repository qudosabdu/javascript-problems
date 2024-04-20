// Coding challenge //
// Problem No.23
// Write a function findMode(arr)

let numbers = [1,2,2,3,1,4,2]
const count = {};

for (let element of numbers) {
    count[element] = (count[element] || 0) + 1;
    
}

console.log(count)

