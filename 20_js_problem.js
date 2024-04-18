// Coding challenge //
// Problem No.20
// Write a function to reverse a string without using any built in method

const reverseString = (str) => {
  let r_str = "";
  for (let i = str.length; i >= 0; i--) {
    r_str = r_str + str[i];
  }
  return r_str;
};

console.log(reverseString("Hello"));
