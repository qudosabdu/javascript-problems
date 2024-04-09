// Problem No.14
// Write a function called isPowerOfTwo that takes an integer num as input

const isPowerOfTwo = (num)=>{
    let op = false
    for(let i =1; i<num;i++){
        if(2**i==num){
            op =true
        }
    }
    return op
}


console.log(isPowerOfTwo(8)) //true
console.log(isPowerOfTwo(7)) //false
console.log(isPowerOfTwo(9)) //false
console.log(isPowerOfTwo(16)) //true