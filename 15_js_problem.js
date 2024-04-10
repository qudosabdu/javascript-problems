// Problem No.15
// Write a function to calculate the sum of squares of all elements in an array


// const sumOfSquares = (arr)=>{
//     return arr.reduce((accum, currElem)=> accum = accum + (currElem * currElem), 0)
// }


const sumOfSquares = (arr)=>{
    let sum = 0
    for(let elem of arr){
        sum = sum + elem * elem
    }
    return sum
}


console.log(sumOfSquares([1,2,3]))