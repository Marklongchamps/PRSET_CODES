function persistence(num) {
    var times = 0
    num = num.toString()
  while (num.length > 1 ){
    times++
    num = num.split("").map(Number).reduce((a,b) => a * b).toString()
  }
  return times;
}      


//jeff way
// function persistence(num) {
//     var times = 0
//     numstring = num.toString()
//   while (num.length > 1 ){
//     times++
//     digits = numstring.split("")
//     product = 1
//     digits.foreach {|digitcharacter|
//      product * digitcharacter.to_i
//     }
//     num = product.toString()
//   }
//   return times;
// }                     

describe('Initial Tests', function () {
    Test.assertEquals(persistence(39),3);
    Test.assertEquals(persistence(4),0);
    Test.assertEquals(persistence(25),2);
    Test.assertEquals(persistence(999),4);
  });


//   Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
                 
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
                  
//  persistence(4) === 0 // because 4 is already a one-digit number
//Number makes a string into a interger
// Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.
// The Number constructor contains constants and methods for working with numbers. 
//Values of other types can be converted to numbers using the Number() function.

// The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, 
//like double in Java or C#. This means it can represent fractional values,
// but there are some limits to what it can store. A Number only keeps about 17 
//decimal places of precision; arithmetic is subject to rounding. The 
//largest value a Number can hold is about 1.8×10308. Numbers beyond that are replaced with 
//the special Number constant Infinity.

// A number literal like 37 in JavaScript code is a floating-point value, not an integer. 
//There is no separate integer type in common everyday use. /
//(JavaScript now has a BigInt type, but it was not designed to replace Number for everyday uses. 
//37 is still a Number, not a BigInt.)

// Number may also be expressed in literal forms like 0b101, 0o13, 0x0A. 
//Learn more on numeric lexical grammar here.