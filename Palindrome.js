// Return all the palindromes in an array 

// Anonymous Function

var Palindrome = function(Array){
    let palindromes = [];
    Array.forEach(element => {
       let  str = element.toString();
    let charArray = [...str];
    let reversedStr = charArray.reverse().join('');
    console.log(reversedStr)
    if(str === reversedStr){
        palindromes.push(str);
    }
    });
    console.log(palindromes);
}
Palindrome([20,152,5,17,7]);

// IIFE

(function(Array){
    let palindromes = [];
    Array.forEach(element => {
       let  str = element.toString();
    let charArray = [...str];
    let reversedStr = charArray.reverse().join('');
    console.log(reversedStr)
    if(str === reversedStr){
        palindromes.push(str);
    }
    });
    console.log(palindromes);
})([20,152,5,17,7]);

