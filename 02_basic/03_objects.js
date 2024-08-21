// singleTon
// Object.create

// object literals

// agr symbol ko object me print krna ho to kaise karenge

const mySym = Symbol("key1")

const JsUser = {
    name: "vivek",
    "full Name": "Vivek kumar choudhary",
    [mySym]: "mykey1",
    age: 20,
    location: "Bihar",
    email: "vivek@google.com",
    isLoggedIn: false,
    lastLoggedInDate: ["Monday", "saturday"]
}

// console.log(JsUser.email) // hm ish tarha se v console kr skte h lekin agr dono side string hoto kaise karenge tb hm square bracket [] ka use karte h taki koi error na aaye
// console.log(JsUser["full Name"])
// console.log(JsUser[mySym])


JsUser.email= "chhotu@hp.com"
// Object.freeze(JsUser)  // freeze mtlb ab hm yaha se koi v chnage nhi kr skte agr hmne freeze laga doya to...
JsUser.email="ck@dell.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user")
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello js user ${this["full Name"]}`)
}
console.log(JsUser.greetingTwo())