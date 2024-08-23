// if statement

if (true) { //if statement agar true ho tb hi age ka code execute honga, agr condition false h to execution honga hi nhi.

    
}


// **************** comparision operators ***************************************

// < less than  	x < 8
// > greater than   x > 8
// >= greater than or equal to  	x >= 8
// <= less than or  equal to  x <= 8
// !==	not equal value or not equal type  x !== 5, x !== "5", x !== 8
// !=	not equal  x != 8
// ===	equal value and equal type x === 5, x === "5"
// ==	equal to x == 8, x == 5, x == "5"



// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
