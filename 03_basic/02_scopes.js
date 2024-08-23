// let a = 10; // ishe kahte h global scope mtlb agr hm scope ke bahar koi v scope ko define krnte h to wo 
// globaly sara ke liye available honga
// const b = 20; // ishe kahte h global scope mtlb agr hm scope ke bahar koi v scope ko define krnte h to wo
//  globaly sara ke liye available honga

// var c = 30;   // lekin var ka alag hi defination alag hota, jaise ki var hm globaly define kare yah scope 
// ke under define wo sare globaly and scope ke liye available honga aur agr scope ke ander ap var define
//  krte h to globaly ko overwrite kr denga aur scope ka value print honga...

var c = 300 // agar var global define krenge to kaise honga.
let a = 100;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // var available for every global and scope function. 
  console.log("INNER :", a)
}

// console.log(a);
// // console.log(b);
// console.log(c); 



// ********************** Nested Scope *********************************************************


// function one(){
//     const userName = "vivek"

//     function two (){
//         const surName = "Choudhary"
//         console.log(userName)
//     }
//     // console.log(surName)  // error aa rhe h kyuki scope ke bahar hm varibale ko defien kiye h ish liye yah code bol rha h i ap scope ke bahar variables ko define nhi kar skte.

//     two() // yah apne parent ko access kr skta q kyu parent e under hi child function bana hua h to wo apne parent ko access kr skta hain.
// }
// one() // yah print honga hi nhi q ki yah scope ke bahar function ko define kr rhe h to yah wala line run honga hi nhi


if (true) {
    const userName = "vivek"
    if (userName === "vivek") {
        const website = "youtube"
        console.log(userName  +"",  website)
        
    }
    // console.log(website) // i got error website is not defined why, because I am defining outside of scope that's why i got an error.
}
// console.log(userName) // same erroe i got.



// ************************************ Interesting *******************************************************

console.log(addNum(5)) // yaha error kyu nhi aa rha kyu ki hm yaha sirf function declear kr rhe h ish liye hm 
// variable ko fphle v declear kr de to v hm access kr ste hain
function addNum (num){
    return num + 1

}
// addNum(5)

addTwo(5) // cannot access "addtwo " before initialization. kyu hm nhi kar  skte kyu ki yaha hm variable 
// declear kr rhe h ish liye yaha error aa rha h... "addtwo" yah variable hain. aur ishe hi hm hoisting kahte hain
const addTwo = function(num1){
    return num1 +2
}

// addTwo(5)