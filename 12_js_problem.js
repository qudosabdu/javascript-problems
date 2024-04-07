// Problem No.12
// Write a function that takes an array of integer as input and removes any duplicate elements


const removeDuplicates = (arr)=>{
    let newArr = [...new Set(arr)]
    return newArr
}


console.log(removeDuplicates([1,2,3,3,1]))
console.log(removeDuplicates([5,6,7,7,8,8,9]))