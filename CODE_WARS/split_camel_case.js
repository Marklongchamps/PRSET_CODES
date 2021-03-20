// complete the function
function solution(string) {
    str = string.replace(/([A-Z])/g, ' $1')
return(str)
}


// A-Z selects the caps the space before the $1will put a space before the seclected cap letter
//  this is supposed to put a space between the capital letters

Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
