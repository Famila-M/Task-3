//Return all the prime numbers in an array 

//Anonymous Function

const PrimeNum = function (Array) {
    let result = Array.filter((value) => {
        if (value < 2) {
            return false;
        }
        if (value % 2 === 0 && value !== 2) {
            return false;
        }
        let sqrt = Math.sqrt(value);
        for (let j = 3; j <= sqrt; j = j + 2) {
            if (value % j === 0) {
                return false;
            }
        }
        return true;
    })
    return result;
}
console.log(PrimeNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])); //[2, 3, 5, 7, 11, 13]

//IIFE

let PrimeNum = (function (Array) {
    let result = Array.filter((value) => {
        if (value < 2) {
            return false;
        }
        if (value % 2 === 0 && value !== 2) {
            return false;
        }
        let sqrt = Math.sqrt(value);
        for (let j = 3; j <= sqrt; j = j + 2) {
            if (value % j === 0) {
                return false;
            }
        }
        return true;
    })
    return result;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
console.log(PrimeNum); //[2, 3, 5, 7, 11, 13]



