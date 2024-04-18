// Coding challenge //
// Problem No.21
// Write a function findMedian(arr)


const findMedian = (arr) => {
    arr.sort((a,b)=> a - b)
    let length = arr.length
    let mid = Math.floor(length /2)
    if(length % 2 == 0){
        return (arr[mid] + arr[mid + 1]) / 2
    } else{
        return arr[mid]
    }
}

console.log(findMedian([5, 3, 9, 1, 7]))
console.log(findMedian([2, 4, 6, 8]))
console.log(findMedian([1, 11, 3, 5, 7, 9]))


