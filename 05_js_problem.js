// Problem No.5
//Sort an array

//Write a function to sort an array of numbers in an ascending order

const sortAscending = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(sortAscending([5, 3, 1, 8])); //output: [1, 3, 5, 8]
console.log(sortAscending([5, 3, 10, 8])); //output: [3, 5, 8, 10]
// console.log(typeof sortAscending()); //output:
