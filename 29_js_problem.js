// Coding challenge //
// Problem No.29
// Write a function numberRange that generate an array containing 
// consective numbers from a to b (inclusive) where a and b are two


const numberRange = (a, b)=>{

    // while(a <= b){
    //     return Array.from({length: b - a + 1}, (_, i)=> a + i)
    // }
    let arr = []
    for(let i = a; i <= b; i++){
        arr.push(i)
    }
    return arr


}

console.log(numberRange(1, 5)) // [1, 2, 3, 4, 5]
console.log(numberRange(-1, 3)) // [-1, 0, 1, 2, 3]