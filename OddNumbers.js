// Print odd numbers in an array.

const oddNums = function (arr) {
    let result = arr.filter(element => {
        return element % 2 !== 0
    });
    console.log(result);
}
oddNums([1, 2, 3, 4, 5]); //[1,3,5].

//IIFE

(function (arr) {
    let result = arr.filter(element => {
        return element % 2 !== 0
    });
    console.log(result);
})([1, 2, 3, 4, 5]); //[1,3,5].
