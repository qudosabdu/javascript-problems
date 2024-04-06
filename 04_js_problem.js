// Problem No.4
// Write a function called checkTriangleType that takes three parameter representing the length
// of the sides of a triangle. The function should return a string indicating the type of triangle
// "ewuilateral", "isoceles", "scalene"


//if all three sides are of equal length, return "equilateral"
//if only two sides are of equal length, return "isoceles"
//if all three sides are of different length, return "scalene"



const checkTriangleType = (a, b, c)=>{
    if(a===a && b === c) return "equilateral"
    if(a===a || b === c|| c === a ) return "isoceles"
    return "scalene"

}

console.log(checkTriangleType(3, 3, 3)); //output equilateral
console.log(checkTriangleType(3, 4, 3)); //output isoceles
console.log(checkTriangleType(5, 8, 6)); //output scalene