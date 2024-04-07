// Problem No.11
// Write a function that tales a number as input and return the sum of its digits

// const sumOfDigits = (num)=>{
//     let arr = Array.from(String(num),Number)
//     return arr.reduce((accum, currElem)=> accum +=currElem,0)
// }

// Method Node.2

const sumOfDigits = (num)=>{
    let sum = 0
    while (num > 0){
        let temp = num % 10;
        sum += temp;
        num = Math.floor(num / 10)
    }
    return sum
}

console.log(sumOfDigits(1234))
console.log(sumOfDigits(4321))
console.log(sumOfDigits(123456))