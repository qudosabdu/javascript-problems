// Coding challenge //
// Problem No.31
// Write a function called simplePasswordValidation that takes single parameter:


const simplePasswordValidation = (password) => {
    // if (password.length < 8) {
    //     return false;
    // } else {
    //     return true;
    // }

    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;
    for(let char of password) {
        if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
            hasLowerCase = true;
        } else if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
            hasUpperCase = true;
        } else if (!isNaN(char)) {
            hasNumber = true;
        }

        if (hasLowerCase && hasUpperCase && hasNumber && password.length >= 8) {
            return true;
        }

    }
    return false;

}

console.log(simplePasswordValidation('12345678')); // Expected: false
console.log(simplePasswordValidation('afksfadsf1')); // Expected: false
console.log(simplePasswordValidation('1234567')); // Expected: false
console.log(simplePasswordValidation('afkdsfadsf1Aa')); // Expected: true