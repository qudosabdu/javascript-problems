// Coding challenge //
// Problem No.24
// Write a function find Mode(arr) in array

const findMode = (arr) => {
    let count = {};
    let maxNumber = 0;
    let mode = [];

    for (let element of arr) {
        count[element] = (count[element] || 0) + 1;
        if (count[element] > maxNumber) {
            maxNumber = count[element];
            mode = element
        }
    }

    return mode;

}

//console.log(findMode([1,2,2,3,1,4,2]))// Output // [ '2' ]
console.log(findMode([1,2,2,3,1,4,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]))// Output // [ '4' ]