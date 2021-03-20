function reverse(arrayOfChars) {
  array = ["abcdefg"]
  var newarray = array[0].split('')
  var reverse = newarray.reverse()
  join = reverse.join()
  console.log(reverse)
}

// or much more cleaver
function reverse(arrayOfChars) {

  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {

    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}