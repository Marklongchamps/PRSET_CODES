function descendingOrder(n){
    var string = n.toString()
  var array = Array.from(string)
    var numbs = array.map((i) => Number(i))
  var final =  numbs.sort((a,b) => b -a)
   var final2 = final.join("")
  var test = parseInt(final2, 10)
    console.log(final2)
   return(test)
}
   


//    Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321