const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance) // isha mtlb ain ki hame number hi chahiye string nahi. lekin hm string me convert kr skte hain


// console.log(balance.toString().length) 
// console.log(balance.toFixed(2)) // tofiexed ka use hm rte h ki kisi v partycular number ke bad .00 ho ushke liye use krte hain.



const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)) // toPrecision ka use krte h hm rounde figure nikalne ke liye jaise 
// hmre pass 123.8966 hain to ishka value kya honga (124) ho jayenga. 


const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"))



// *********************************** Math**********************************************************

// console.log(Math)
// console.log(Math.abs(-4)) // abs hm positive value retruen krta h negative value return nhi krta (abs)
// console.log(Math.round(4.6)) // naam se hi pta chal rha h ki hme roundoff krtna h number ko overall answer aayenga 5
// console.log(Math.ceil(4.2)) // ceil mtlb upper number aur hme 4.2 ka upper no. me convert karenge to hme milenga 5
// console.log(Math.floor(4.5)) // floor mtlb lower no. aur hme milenga rounder figure kar ke 4 hi chahe digit ke bad koi v no. kyu na ho
// console.log(Math.floor(4.9))  // I got 4 not 5

// console.log(Math.min(9,4,5,9,8))  // min hme deta h lower no. just like descenting order
// console.log(Math.max(9,4,5,9,8))  // max hme deta h lower no. just like ascenting order

// console.log(Math.random()) // random mtlb yah hmesha ek random no. hi print karenga wo v start 0.1231244 kuchh v ho skta hain 
// console.log(Math.random()*10) // ishme hum 10 se guna kr rhe h to hmesh zero se upper hi value milenga ishka mtlb yah nhi ki zero nhi ho skta. kuchh v ho skta h to zero se bachne ke liye hm +1 ka use karenge taki zero random print na ho
// console.log((Math.random()*10) +1)

const min=1
const max = 20

console.log(Math.floor(Math.random()* (max-min)) +min)
