// 'use strict';

$(document).ready(init);

function init(){
  $('p.lead').text(  recur1('toby ', 3)  );

  // $('p.lead').text(  wierdNumSplitter(95887664)  );

  // mutliplyAll([1,4,4,4,0,4,3,3,1])

  // $('.hack-btn').on('click', HACK);

  // nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5);
  // function nextItem(xs, item) {
  //   let result;
  //   if(typeof xs === "string"){
  //     xs.match(item) ? result = xs[(xs.indexOf(item))+1] : result;
  //     // return result;
  //     return $('p.lead').text(result);
  //   }
  //
  // xs.join('').match(item) ? result = xs[(xs.indexOf(item))+1] : result;
  // };

  //   function nextItem(xs, item) {
  //   var found = false;
  //   for (var i of xs) {
  //     if (found) return i;
  //     if (i === item) found = true;
  //   }
  //   return undefined;
  // }
  //   // Test.assertEquals(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6);
  //   // Test.assertEquals(nextItem(['a', 'b', 'c'], 'd'), undefined);
  //   // Test.assertEquals(nextItem(['a', 'b', 'c'], 'c'), undefined);
  //   // Test.assertEquals(nextItem("testing", "t"), "e");
  //   function* countFrom(n) { for (let i = n; ; ++i) yield i; }
  // Test.assertEquals(nextItem(countFrom(1), 12), 13);
  //
  //
  // function* countFrom(n) {
  //   for (let i = n; ; ++i) yield i;
  // }
};

// // RECURSION Practice
// function factorial(num)
// {
//   // If the number is less than 0, reject it.
//   if (num < 0) {
//     return -1;
//   }
//   // If the number is 0, its factorial is 1.
//   else if (num == 0) {
//     return 1;
//   }
//   // Otherwise, call this recursive procedure again.
//   else {
//     return (num * factorial(num - 1));
//   }
// }

// var result = factorial(8);
// document.write(result);
// Output: 40320
//
// function wierdNumSplitter(num){
//   let numStr = num.toString().split('').map(Number);
//   let newStr = numStr.map((n, i) => {
//     if(n%2 === 0 && numStr[i + 1]%2 === 0) return `${n}-`;
//     if(n%2 !== 0 && numStr[i + 1]%2 !== 0) return `${n}*`;
//     return n;
//   }); return newStr.join('');
// };
// // wierdNumSplitter(95887664)); // 9*58-876-6-4
// ${numStr[i+1]
// ${numStr[i+1]
// function sumConsecutives(numbers) {
//     let newNums = [];
//     numbers.map((n, i) => {
//         if(n === numbers[i+1]) newNums.push(n + numbers[i+1]);
//         newNums.push(n);
//     });
// };
// var multiplyAll = ...nums => {
//   return nums.reduce((tot, num)=> tot * num);
// };

// var recur1 = (string, length) => {
//   if(length > 0) {
//     string += recur1(string, length-=1);
//   } else if(length === 0 ){
//     return string = '';
//   }
// };
//
// function doStuff(...x){
//   return x;
// }

// var recur1 = (string, length) => {
//   if(length > 0) return  string += recur1(string,length);
//
//   return string = ''
// };