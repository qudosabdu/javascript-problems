//Problem No.2
// Mash Tag Generator
// You are required to implement a function generateHash that generates a hash tag from a given input string.
// The hash tag should be coverted to a hash tag format, where each word is capitalized and concateneted togater without spaces

// If the length of the input string is greater then 280 charactors or if the input string is empty or contain only witespacem the function should return false
// Otherwise, the function should return the generated hash tag prefixed with #

//* Write  the function generateHash this task

const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  str = str.split(" ");
  str = str.map((curElem) => {
    // return curElem.replace(curElem[0], curElem[0].toUpperCase());
    return curElem.charAt(0).toUpperCase() + curElem.slice(1);
  });
  return `#${str.join("")}`;
};

console.log(generateHash("my name is abdul qudoos"));
// output "#MyNameIsAbdulQudoos"
