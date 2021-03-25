// Rotate an array by k times and return the rotated array.

// Anonymous Function

let k = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const rotateArr = function (data, shift) {
    
    let arr = data.map(value => value);
    
    for (let i = 0; i < shift; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotateArr(k, 4)); // [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8]

// IIFE

let k = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let rotateArray = (function (data, shift) {
   
    let arr = data.map(value => value);
    
    for (let i = 0; i < shift; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
})(k, 4);
console.log(rotateArray); // [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8]
