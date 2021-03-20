//takes in an array and throws out all non numbers


function filter_list(l) {
    let newArray = []
    l.forEach((item) =>{
      if (Number.isInteger(item) === true) {
      newArray.push(item)}
      })
 
    return(newArray)
  }


  Test.assertSimilar(filter_list([1,2,'a','b']),[1,2])
Test.assertSimilar(filter_list([1,'a','b',0,15]),[1,0,15])
Test.assertSimilar(filter_list([1,2,'aasf','1','123',123]),[1,2,123])