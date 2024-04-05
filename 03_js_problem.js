// Problem No.3
// Count Occurance of character

//write a function called countChar that takes two parameters: a string and a character to count.
// The function should return the number of times the spacified character appears in the string

//function should case sensitive and handle both uppper and lower case

const countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();
  totalCount = word.split("").reduce((accum, curChar) => {
    if (curChar == char) {
      accum++;
    }
    return accum;
  }, 0);

  return totalCount;
};

console.log(countChar("MissIssippi", "p"));
//output 2
