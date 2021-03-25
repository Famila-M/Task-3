// Remove duplicates from an array 

// Anonymous Function

let sum = [1, 2, 3, 4, 2, 3, 2, 3, 1, 5, 6, 1, 7, 11, 24, 22, 5, 11];

const unique = function (Array) {
    let result = Array.filter((value, index, values) => {
        return index === values.indexOf(value);
    })
    return result;
}
console.log(unique(sum)); // [1, 2, 3, 4, 5, 6, 7, 11, 24, 22]

// IIFE

let sum = [1, 2, 3, 4, 2, 3, 2, 3, 1, 5, 6, 1, 7, 11, 24, 22, 5, 11];
let uniques = (function (Array) {
    let result = Array.filter((value, index, values) => {
        return index === values.indexOf(value);
    })
    return result;
})(sum);
console.log(uniques); // [1, 2, 3, 4, 5, 6, 7, 11, 24, 22]
