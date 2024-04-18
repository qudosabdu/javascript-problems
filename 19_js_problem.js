// Coding challenge //
// Problem No.19
// Write a function to check if a given string starts with a spacific substring


const startWith = (str, substr)=>{
    // return str.toLowerCase().startsWith(substr)
    return str.toLowerCase().slice(0, substr.length) === substr
}

console.log(startWith("Hello world", "hello")) //true
console.log(startWith("Hello world", "Word")) //false

