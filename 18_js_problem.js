// Coding challenge //
// Problem No.18
// Write a function to check if a character is uppercase or lowercase



const isUpperCase = (char)=>{
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <=90){
        return true
    }
    return false
}

// const isLowerCase = ()=>{
    
// }

console.log(isUpperCase("S")) //true
// console.log(isLowerCase("b"))