function deleteNth(arr,n){
    let new_arr = [];
    var counts = {};
    arr.forEach(function(x) {
      counts[x] = (counts[x] || 0)+1;
    
      if (counts[x] <= n) {
          new_arr.push(x);
        console.log(counts)
      }
    });
    return new_arr;
  }
  

console.log(deleteNth([20,37,20,21], 1))
// Test.assertSimilar(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])

// the counts[x] is making an object so you end up with {20:1} meaning 20 appears once
//  so if counts{20} appears twice you would get {20:2}  if the value is more than n
// it does not get pushed into the array.  itteratess through the array looking for dupes