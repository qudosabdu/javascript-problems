// Problem No.9
// Calculate the Average

//Write a function called calculateAverage that takes an array of number as input
// and return the average of those numbers


const calculateAverage = (arr)=>{
    let total = arr.reduce((accum, curElem)=> accum + curElem, 0)
    return total/arr.length
}

console.log(calculateAverage([2,4,6,7]))