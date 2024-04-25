// Coding challenge //
// Problem No.28
// Write a function called truncateString that take two parameters:


const truncateString = (str, num)=>{
    if(num <= 3){
        return str.slice(0, num) + '...'
    }else if(str.length > num){
        return str.slice(0, num-3) + '...'
    }else{
        return str
    }
    

}

console.log(truncateString('A-tasket a-tasket A green and yellow basket', 8)) // 'A-tasket'
console.log(truncateString('A-tasket a-tasket A green and yellow basket', 20)) // 'A-tasket a-tasket A'
