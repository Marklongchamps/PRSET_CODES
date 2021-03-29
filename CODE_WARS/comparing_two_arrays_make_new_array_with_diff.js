function arrayDiff(a, b){
    let difference = a.filter(x => !b.includes(x))
      return(difference)
    }




// filter will compare two arrays.  the includes method determines whether an array includes 
// a certain value among its entries, returning true or false as appropriate.  difference
//will be an array kind of like a for each loop.  a.filter looks at every element in a
//(x is banana for a) and if if b does not include banana, banana goes into new array


    // Test.describe("Sample tests", function() {
    //     Test.it("Should pass Sample tests", function() {
    //       Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
    //       Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
    //       Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
    //       Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
    //     });
    //   }); 