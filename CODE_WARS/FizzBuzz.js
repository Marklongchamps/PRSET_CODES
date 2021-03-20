'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
o
let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    let array = Array.from({length: n}, (v, i) => i+1);
    array.forEach((number) => {
        if (number % 3 == 0 && number % 5 == 0){
            console.log("FizzBuzz")
        }else if (number % 3 == 0){
            console.log("Fizz")
        }else if (number % 5 == 0) {
            console.log("Buzz")
        }else (console.log(number))
        
    })
}
    


function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}
