// Problem No.13
//Write a function that takes a string as a input and return the count of vowels
//in that string

const countVowels = (str)=>{
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let arr = str.split('')
    let count = 0
    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++
        }
    }
    return count
}

console.log(countVowels("Hello World")) //3
console.log(countVowels("TheE quIck brOwn fOr")) //6
console.log(countVowels("8rrrp")) //0