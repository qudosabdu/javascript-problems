// Coding challenge //
// Problem No.26
// Write a function to find with Fibonacci number

const fibonacci = (num)=>{
    if(num === 0){
        return 0
    }else if(num === 1){
        return 1
    }else{
        return fibonacci(num-1) + fibonacci(num-2)
    }

    
}


console.log(fibonacci(0)) // 0
console.log(fibonacci(1)) // 1
console.log(fibonacci(2)) // 1
console.log(fibonacci(3)) // 2
console.log(fibonacci(4)) // 3
console.log(fibonacci(5)) // 5
console.log(fibonacci(6)) // 8