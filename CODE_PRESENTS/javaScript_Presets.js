import React from "react"

const QuestForm = (props) => {

  return(
    <h1>hello</h1>
  )
}

export default QuestForm

//need dummy text in line six or it will not work.





array = ["This website is for losers LOL!"]

function disemvowel(str) {
  var string = array.map(x => x.replace(/[aeiouAEIOU]/g, ''));

  return string[0];
}

disemvowel(array)