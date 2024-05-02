// Coding challenge //
// Problem No.30
// Write a recursive function called numberRangeRecursive that generate an array containing consective numbers from a to b (inclusive)


const numberRangeRecursive = (a, b, arr = [])=>{
    if(a > b) return arr
    return numberRangeRecursive(a, b - 1, [...arr, b])
}


console.log(numberRangeRecursive(1, 5)) // [1, 2, 3, 4, 5]
console.log(numberRangeRecursive(-1, 3)) // [-1, 0, 1, 2, 3]