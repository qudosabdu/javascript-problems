// Problem No.6
// Write a fnction to determine whether a given string is a palindrom or not


const isPalindrome = (str)=>{
    str = str.toLowerCase().replace(/\W/g,"");
    let reverse_str = str.split('').reverse().join("")
    return reverse_str === str?true:false
}


console.log(isPalindrome("A man, a plan, a canal, Panama"))  //false
console.log(isPalindrome("racecar")) //true
console.log(isPalindrome("hello")) //false
console.log(isPalindrome("Saas")) //false