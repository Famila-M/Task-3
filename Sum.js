//Sum of all numbers in an array 

//Anonymous Function

const Sum = function (Array) {
    return Array.reduce((accum, val) => {
        return accum + val;
    })
}
console.log(Sum([1, 2, 3, 4, 5])); //15

//IIFE

let Sum = (function (Array) {
    return Array.reduce((accum, val) => {
        return accum + val;
    })
})([1, 2, 3, 4, 5]);
console.log(Sum); //15

