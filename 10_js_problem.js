// Problem No.10
// Write a function arraysAreEqual that takes two array equal as input and return true if the arrays are equal




const arraysAreEqual = (arr1, arr2)=>{
    if(arr1.length !== arr2.length){
        return false
    }
    return arr1.every((currVal, index)=> currVal === arr2[index])
}

console.log(arraysAreEqual([1,2,3], [1,2,3]))
console.log(arraysAreEqual([1,2,3], [1,2,4]))