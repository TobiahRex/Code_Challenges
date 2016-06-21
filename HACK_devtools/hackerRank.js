'use strict';

// // Jun 9th, 2016 - Is this word Capitalized? = SOLVED
// let isUpperCase = str => str === str.toUpperCase() ;

// // Jun 10th, 2016 - Reduce Numbers to 1 digit sum = SOLVED
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
//     reduced = sum(reduced);ve
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

// // Jun 11th, 2016 - Camel Caser  = SOLVED
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

// // Jun 13th, 2016 - HackerRank TEST
// // Problem 1: FizzBuzz
// var fizzBuzz = N => {
//     let result = [];
//     while(N > 0){
//         N%5 === 0 && N%3 === 0 ? result.unshift('FizzBuzz') :
//         N%5 === 0 ? result.unshift('Buzz') :
//         N%3 === 0 ? result.unshift('Fizz') :
//         result.unshift(N);
//         N--;
//     }; return result;
// };
//
// // Problem 2: Title Case
// var titleCase = str => {
//    return str.toLowerCase().replace(/(^\b(.))|(\s+(.))/g, function(match){
//         return match.toUpperCase();
//     });
// }
//
// // Problem 3: Wierd Number Splitter
// // FAILED ATTEMPT 1:
// function weirdNumSplitter(num) {
//   let numStr = num.toString().split('');
//   let result = numStr.forEach((n, i) => {
//     if(parseInt(n)%2 === 0 && parseInt(numStr[i+1])%2 === 0){ return numStr.splice(i+1, 0, '*')}
//     if (parseInt(n)%2 !== 0 && parseInt(numStr[i+1])%2 !== 0){ return numStr.splice(i+1, 0, '-') };
//   });
//   return numStr.join('');
// };
//
// // FAILED ATTEMPT 2:
// function wierdNumSplitter(num){
//   let numStr = num.toString().split('');
//   let newStr = '';
//   numStr.map((n, i) => {
//     if(parseInt(n)%2 === 0 && parseInt(numStr[i + 1])%2 === 0) return newStr + n + '-';
//     if(parseInt(n)%2 !== 0 && parseInt(numStr[i + 1])%2 !== 0) return newStr + n + '*';
//     return newStr + n;
//   });
//   return newStr;
// };
//
// // SOLUTION:
// function wierdNumSplitter(num){
//   let numStr = num.toString().split('');
//   let newStr = '';
//   numStr.map((n, i) => {
//     if(parseInt(n)%2 === 0 && parseInt(numStr[i + 1])%2 === 0) return newStr += `${n}-`;
//     if(parseInt(n)%2 !== 0 && parseInt(numStr[i + 1])%2 !== 0) return newStr += `${n}*`;
//     return newStr += n;
//   }); return newStr;
// };
// BEST SOLUTION:
// function wierdNumSplitter(num){
//   let numStr = num.toString().split('').map(Number);
//   let newStr = numStr.map((n, i) => {
//     if(n%2 === 0 && numStr[i + 1]%2 === 0) return `${n}-`;
//     if(n%2 !== 0 && numStr[i + 1]%2 !== 0) return `${n}*`;
//     return n;
//   }); return newStr.map(String).join('');
// }; // wierdNumSplitter(95887664)); // 9*58-876-6-4

// // Jun 15th, 2016 -
// function remove(str, obj) {
//   let letters = str.split(''),
//   numbers = [],
//   newStr = [];
//   for(var i in obj){
//     obj[i];    // numbers of times
//     // i; // letters
//
//     letters.forEach(letter => {
//       console.log(i === letter)
//     });
//   };
//
// }
// // FAILED ATTEMPT
// function remove(str, obj) {
//   let letters = str.split(''),
//   numbers = [];
//   for(var j in obj){
//
//     var newStr = letters.map((letter, i) => {
//
//       if(letter === j){
//         console.log('i: ', letter, 'j: ', j);
//         return letters.splice(letters[i], 1);
//       } else {
//         return letter;
//       };
//
//     }); // end o map
//
//     console.log('NEW STR: ', newStr.join(''));
//   }; // end of for...of
// };
// // CADES SOLUTION (when number is NOT too big.)
// function remove(str, obj){
//   for(let letter in obj){
//     for(let i = 0; i < obj[letter] ; i++){
//       str = str.replace(letter, '');
//     };
//   };
// };
// // CADES SOLUTION (for large numbers)
// function remove(str, obj){
//   for(let letter in obj){
//
//     for(let i = 0; i < obj[letter] ; i++){
//       str = str.replace(letter, '');
//     };
//
//     if(str.length === length){
//       break;
//     };
//   };
// };
// // CADES RECURSIVE ANSWER
// function remove(str, obj){
//   let keys = Object.keys(obj)[0] //[ 'a', 'n' ]
//
//   if(obj[key]){ // letter
//     str = str.replace(letter, '');
//     obj[letter]--;
//   }
// }
// console.log(remove('hello world', {e : 1, o : 2}));

// // Jun 16th, 2016 - Move zeros to the end of an array preserving non zeros order.
// let moveZeros = values => {
//   let zeros = [], numbers = [];
//   values.forEach(val => {
//     val === 0 ? zeros.push(val) : numbers.push(val);
//   }); return numbers.concat(zeros);
// };
// console.log(moveZeros([-1,4,3,0,2,6,0]))

// // Jun 17th, 2016 - Count numbers in a string
// function numberWordSum(str) {
//     let nums = [];
//     str.split(' ').map(word => {
//     word.match(/\bone\b/gi)       ? nums.push(1)    :
//     word.match(/\btwo\b/gi)       ? nums.push(2)    :
//     word.match(/\bthree\b/gi)     ? nums.push(3)    :
//     word.match(/\bfour\b/gi)      ? nums.push(4)    :
//     word.match(/\bfive\b/gi)      ? nums.push(5)    :
//     word.match(/\bsix\b/gi)       ? nums.push(6)    :
//     word.match(/\bseven\b/gi)     ? nums.push(7)    :
//     word.match(/\beight\b/gi)     ? nums.push(8)    :
//     word.match(/\bnine\b/gi)      ? nums.push(9)    :
//     word.match(/\bten\b/gi)       ? nums.push(10)   :
//     word.match(/\beleven\b/gi)    ? nums.push(11)   :
//     word.match(/\btwelve\b/gi)    ? nums.push(12)   :
//     word.match(/\bthirteen\b/gi)  ? nums.push(13)   :
//     word.match(/\bfourteen\b/gi)  ? nums.push(14)   :
//     word.match(/\bfifteen\b/gi)   ? nums.push(15)   :
//     word.match(/\bsixteen\b/gi)   ? nums.push(16)   :
//     word.match(/\bseventeen\b/gi) ? nums.push(17)   :
//     word.match(/\beighteen\b/gi)  ? nums.push(18)   :
//     word.match(/\bnineteen\b/gi)  ? nums.push(19)   :
//     word.match(/\btwenty\b/gi)    ? nums.push(20)   : null;
//     });
//     return nums.reduce((tot, n) => tot + n);
// }
// console.log(numberWordSum('This is one, and a two, and a three, and a four.'));

// // Jun 18th, 2016 - Order words by Number
// function orderWords(str) {
//    let results = [];
//   str.split(' ').forEach(word => {
//       let num = word.match(/[1-9]/);
//       results[num[0]] = word;
//   }); return results.join(' ');
// };
// console.log(orderWords('th3ree on1e fou4r tw2o'));

// // Jun 20th, 2016 - HackerRank TEST -
// let compressor = s => { // Compressor
//   let resultArr = [];
//   s.split('').forEach(char => {
//     let prevLetter = resultArr[resultArr.length - 2];
//
//     if(char === prevLetter){
//       resultArr[resultArr.length - 1]++;
//     } else {
//       resultArr.push(char, 1);
//     };
//   });
//   return resultArr.filter(item =>  item !== 1).join('');
// };
// console.log(compressor('aaaaaabbbbbbbbbbbbbbbbcccceeef'));
// regEx answer
// let compressor = s => {
//   return s.match(/(.)\1*/g).map(group => {
//     if(group.length === 1){
//       return group[0];
//     } else {
//       return group[0] + group.length;
//     }
//   }).join('');
// };
// console.log(compressor('aaaaaabbbbbbbbbbbbbbbbcccceeef'));

// // Jun 21st, 2016 - Return Highest Occurance (1st instance) - 15mins
// function firstRepeatingLetter(s){
//   for(var i = 0; i < s.length; i++) {
//     if(s.slice(i + 1).indexOf(s[i]) > -1){
//       return s[i]
//     };
//   };
// };
// console.log(firstRepeatingLetter('ababc'));
