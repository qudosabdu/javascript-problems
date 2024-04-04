//Question No.1 Longest Word in a String

// write a function findLongestWord that takes a string as input and return the longest word in the string.
// If there are multiole longest words , return the first one encountered.

// constraints:
// The input string may contain alphabetic characters, digits, punctuation and spaces.
// The input string is non-empty.


// Method 1

// const findLongestWord = (str) => {
//     if(str.trim().length === 0) return "Empty String";
//     let words = str.split(" ");
//     console.log(words);
//     let longestWord = "";
//     for(let word of words){
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }


// Method 2

const findLongestWord = (str) => {
    if(str.trim().length === 0) return "Empty String";
    let words = str.split(" ");
    // let longestWord = words.reduce((acc, cur)=> acc.length > cur.length ? acc : cur);
    // let longestWord = words.sort((acc, cur)=> cur.length - acc.length)[0];
    let longestWord = words.sort((a, b) => a.length - b.length).at(-1);
    return longestWord;
}

console.log(findLongestWord("I am Abdul Qudoos and i am a developer in 360xpert")); // developer