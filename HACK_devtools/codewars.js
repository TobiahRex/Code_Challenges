
////////////////// 18 September 2016 //////////////////
/*
Description
In English we often use "neutral vowel sounds" such as
"umm", "err", "ahh" as fillers in conversations to help them run smoothly.

Bob always finds himself saying "err".
Infact he adds an "err" to every single word he says that ends in a consonant!
Because Bob is odd, he likes to stick to this habit even when emailing.

Problem:
Bob is begging you to write a function that
adds "err" to the end of every word
whose last letter is a consonant (not a vowel, y counts as a consonant).

The input is a string
that can contain upper and lowercase characters,
some punctuation but no numbers.
The solution should be returned as a string.

NOTE: If the word ends with an uppercase consonant,
the following "err" will be uppercase --> "ERR".
*/


const errBob = string => newString = string
  .split(/(?=[\s.?!;:,'"-])/gi)
  .map((word) => {
    if(word[word.length - 1].match(/[bcdfghjklmnpqrstvwxyz]/)) return `${word}err`
    if(word[word.length - 1].match(/[BCDFGHJKLMNPQRSTVWXYZ]/)) return `${word}ERR`
    return word
  })
  .join('')
}
console.log(errBob("Hello, I AM Mr Bob"))
/*
  Given test Cases:
Test.assertEquals(errBob("Hello, I am Mr Bob"),"Hello, I amerr Mrerr Boberr")
Test.assertEquals(errBob("THIS, is crazy!"), "THISERR, iserr crazyerr!")
Test.assertEquals(errBob("r r r r r r r r"), "rerr rerr rerr rerr rerr rerr rerr rerr")
Test.assertEquals(errBob("hI, hi. hI hi skY! sky? skY sky"),"hI, hi. hI hi skYERR! skyerr? skYERR skyerr")
Test.assertEquals(errBob("This, is. another! test? case to check your beautiful code."),"Thiserr, iserr. anothererr! testerr? case to checkerr yourerr beautifulerr code.")
*/

//////////////////
