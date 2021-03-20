function rot13(message){
    let array1 = "abcdefghijklmnopqrstuvwxyz"
    let array2 = "nopqrstuvwxyzabcdefghijklm"
    let result = ""
    
    for(let banana of message){
      let index = array1.indexOf(banana.toLowerCase())
        if (banana === banana.toLowerCase()){
          result += array2[index].toLowerCase()
          } else {
            result += array2[index].toUpperCase()
          }
        }
   return(result)
  }