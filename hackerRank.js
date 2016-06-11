'use strict';

// // Jun 9th, 2016 - Is this word Capitalized? = SOLVED
// let isUpperCase = str => str === str.toUpperCase() ;

// Jun 10th, 2016 - Reduce Numbers to 1 digit sum = SOLVED
// var digitSum = numStr => {
//
//   function sum(string){
//     let numbers = [];
//     string.split('').map(num => numbers.push(parseInt(num)));
//     return numbers.reduce((tot, n) => tot + n).toString();    // returns string;
//   };
//
//   let reduced = numStr;       //starting value of counter - in this case numStr.
//   while(reduced.length > 1){
//     reduced = sum(reduced);
//   };
//   return reduced;
// }
// console.log('ANSWER 1: \n',digitSum('12345'));  // 6
// console.log('ANSWER 2: \n',digitSum('199'));    // 1
//
//
// // Cades WHILE loop answer;
// var digitSum = numStr => {
//   while(numStr.length > 1){
//     var digits = numStr.split('');
//     var sum = digits.reduce((sum, digit) => sum + parseInt(digit), 0);
//     numStr = sum.toString();
//   };
//   return numStr;
// };
//
// // Cades RECURSIVE looop answer;
// var digitSum = numStr => {
//     var digits = numStr.split('');
//     var sum = digits.reduce((sum, digit) => sum + parseInt(digit), 0);
//     numStr = sum.toString();
//
//   return numStr.length > 1 ? digitSum(numStr) : numStr;
// };

// Jun 11th, 2016 - Camel Caser  = SOLVED
// My solution
// function camelCaser(str) {
//   var camelCased = [];
//   str.split(' ').map((word, i) => {
//     if(i === 0) return camelCased.push(word.toLowerCase());  // if it's the 1st word...LowerCase
//     var camelWord = []
//     word.split('').map((letter, i) => {     // gives us letter ['d','i','d']
//     if(i === 0) return camelWord.push(letter.toUpperCase());
//
//     return camelWord.push(letter.toLowerCase());
//   }).join(''); // put the word back together; word = ['Did']
//
//   camelCased.push(camelWord.join(''));
// });
// return camelCased.join('');
// };
// // Cades - Best solution
// function cameCaser(str) {
//   let words = str.toLowerCase().split('');
//   return words.split('').map((word, i) => {
//     if(i === 0) return word;
//     return word[0].toUpperCase() + word.slice(1);
//   });
// };
// // Awesome Online Solution
// var camelCase = str => {
//   return str.replace(/\W+(.)/g, function(match, chr)
//   {
//     return chr.toUpperCase();
//   });
// };
