// Convert all the strings to title caps in a string array 

//Anonymous Function

const stringToCaps = function (stringArray) {
    let result = stringArray.map(value => {
        return value.toUpperCase();
    })
    return result;
}
console.log( stringToCaps(["kiwi", "MuskMelon", "Apple"])); //["KIWI", "MUSKMELON", "APPLE"]

//IIFE

console.log((function (stringArray) {
    let result = stringArray.map(value => {
        return value.toUpperCase();
    })
    return result;
})(["kiwi", "MuskMelon", "Apple"])); //["KIWI", "MUSKMELON", "APPLE"]
