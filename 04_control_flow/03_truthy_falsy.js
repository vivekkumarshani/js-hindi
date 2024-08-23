const userEmail = "vivek@google.com"

if (userEmail) {
    console.log("Got user Email")
} else {
    console.log("Don't have user email")
}


// falsy values

// false, 0 , -0, BigInt 0n, "", null, undefined, NaN


// Truthy value

//  "0", "false", " ", {}, [], function(){}


const userEMail = []
if(userEMail.length === 0){  // agar check krna ho ki array hmra empty h ki nhi to aise check krte hain...
    console.log("Array is empty")
}


const empytObject = {}
if (Object.keys(empytObject.length === 0)) {
    console.log("Object is empty")
}


// Nullish coalescing operators (??): Null undefined

let val;
// val= 5 ?? 10
// val = null ?? 10
// val = undefined ?? 15
val = null ?? undefined ?? 15
console.log(val)


// Terniary Operators

// condition  ? true : false


const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less then 100") : console.log("more than 100")