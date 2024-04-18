// Coding challenge //
// Problem No.21
// Write a function calculationMean that takes an array of number as input and returns the mean(Avverage)

const calculationMean = (arr) => {
    if(arr.length === 0){
        return 0
    }

    let sum = arr.reduce((accu , currElem)=> accu + currElem, 0)
    return sum / arr.length
}

console.log(calculationMean([1, 2, 3, 4, 5])) //3
console.log(calculationMean([10, 20, 30])) //20
console.log(calculationMean([-1, 0, 1])) // 0