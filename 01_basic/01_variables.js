const accountID = 123456789
let accountEmail = "vivek@gmail.com"
var accountPassword = "212546257"
accountCity = "Bihar"


// accountID = 2  this is not allowed.

accountEmail = "vkc@gmail.com"
accountPassword = "35523678109"
accountCity = "Rafiganj"

let accountStatement;


/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountID)
console.log(accountEmail, accountPassword, accountCity) // i can use this type of console but also use console.table
console.table([accountEmail, accountPassword, accountCity, accountStatement])