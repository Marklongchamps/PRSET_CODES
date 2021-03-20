
  function countpal(character) {
      var str = character
      var number = str.length
      count = 0
        for (let word_length = 1; word_length <= number; word_length++) {
            
         for (let index = 0; index < number; index++) {
            word_subset = str.slice(index, index+word_length)
            reverse_word_subset = word_subset.split("").reverse().join("")
            // console.log(index, index+word_length)
            if(word_subset === reverse_word_subset && index+word_length <= number  ){
                count ++
            }
        }     
    }
    return (count)
}
  
  
  
  console.log(countpal("aaa"))
  