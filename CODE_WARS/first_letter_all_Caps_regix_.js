String.prototype.toJadenCase = function () {
    var str = "How can mirrors be real if our eyes aren't real";
  var str2 = str.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
  return (str2)
  };
  
//   
//   Explanation:
  
//   (^\w{1}): match first char of string
//   |: or
//   (\s{1}\w{1}): match one char that came after one space
//   g: match all
//   match => match.toUpperCase(): replace with can take function, so; 
//   replace match with upper case match