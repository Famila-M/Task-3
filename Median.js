// Return median of two sorted arrays of same size 

// Anonymous Function

let evens = [2, 4, 6, 8, 10];
let odds = [1, 3, 5, 7, 9];

const median = function (arr1, arr2) {
    
    let merged = []
    let len = arr1.length

    for (let i = 0, j = 0, k = 0; k <= len; k++) {
        if (i === len) {
            merged.push(arr2[j]);
            j++;
            continue;
        }
        if (j === len) {
            merged.push(arr1[i]);
            i++;
            continue;
        }
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        }
        else {
            merged.push(arr2[j]);
            j++;
        }
    }

    return (merged[len] + merged[len - 1]) / 2;
}
console.log(median(evens, odds)); //5.5

// IIFE

let evens = [2, 4, 6, 8, 10];
let odds = [1, 3, 5, 7, 9];

const median = (function (arr1, arr2) {
   
    let merged = []
    let len = arr1.length

    for (let i = 0, j = 0, k = 0; k <= len; k++) {
        if (i === len) {
            merged.push(arr2[j]);
            j++;
            continue;
        }
        if (j === len) {
            merged.push(arr1[i]);
            i++;
            continue;
        }
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        }
        else {
            merged.push(arr2[j]);
            j++;
        }
    }

    return (merged[len] + merged[len - 1]) / 2;
})(evens, odds);
console.log(median); // 5.5





