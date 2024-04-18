// Problem No.16
// Find the min val in array

const findMin = (arr) => {
  arr = arr.sort((a, b) => {
    if(a < b) return -1;
  });
  return arr[0]
}; 

// const findMin = (arr) => {
//   return Math.min(...arr);
// };

console.log(findMin([5, 10, 2, 8]));
console.log(findMin([5, -3, 0, 12, -7]));
