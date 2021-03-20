function encode(string) {
    let array1 = string.split("")
    array1.forEach((letter, i) => {
      if(letter == 'a') array1[i] = 1 
      if(letter == 'e') array1[i] = 2
      if(letter == 'i') array1[i] = 3
      if(letter == 'o') array1[i] = 4
      if(letter == 'u') array1[i] = 5
      
    })
   return(array1.join(""))
  }
    
  
  function decode(string) {
    let array1 = string.split("")
    array1.forEach((letter, i) => {
      if(letter == 1) array1[i] = 'a' 
      if(letter == 2) array1[i] = 'e'
      if(letter == 3) array1[i] = 'i'
      if(letter == 4) array1[i] = 'o'
      if(letter == 5) array1[i] = 'u'
      
    })
  return(array1.join(""))
  }

//   describe("Sample tests", function() {
//     it("Tests", function() {
//       assert.equal(encode('hello'), 'h2ll4');
//       assert.equal(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
//       assert.equal(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
//       assert.equal(decode('h2ll4'), 'hello');
//     });
//   });

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

