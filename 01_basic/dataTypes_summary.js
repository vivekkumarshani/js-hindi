// Primitive dataTypes

// There are 7 types of primitive dataTypes (NNSSBBU short form of primitive data types)

// Number => N
// Null  => N
// String => S
// Symbol => S
// Boolean => B
// BigInt => B
// Undefined => U

// which type of javascript is?
// => JavaScript is dynamic type

const score = 100
// console.log(typeof score)  // Number
const scoreValue = 100.3
// console.log(typeof scoreValue)  // Number
const isLoggedIn = false
// console.log(typeof isLoggedIn)  //Boolean
const outSideTemp = null
// console.log(typeof outSideTemp)  // objects
let userEmail
// console.log(typeof userEmail)  // undefined

const bigNumber = 3266514558865628466
// console.log(typeof (bigNumber));   // Number



const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);




// Reference (non_primitive)

// objects, Array, functions

const heros = ["ShaktiMan", "Naagraj", "Doga"]
let obj = {
    name: "vivek",
    age: 24
}
console.log(obj)

const myFunction = function(){
    console.log("Hello World")
}
