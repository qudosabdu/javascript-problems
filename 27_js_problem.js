// Coding challenge //
// Problem No.27
// Write a function called repeatString that take two parameters:


const repeatString = (str, num)=>{
    if(num === 0){
        return ''
    }else{
        return str + repeatString(str, num-1)
    }
}

console.log(repeatString('dog', 0)) // ''
console.log(repeatString('dog', 1)) // 'dog'
console.log(repeatString('dog', 2)) // 'dogdog'
console.log(repeatString('dog', 3)) // 'dogdogdog'