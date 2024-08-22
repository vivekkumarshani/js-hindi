// let a = 10; // ishe kahte h global scope mtlb agr hm scope ke bahar koi v scope ko define krnte h to wo 
// globaly sara ke liye available honga
// const b = 20; // ishe kahte h global scope mtlb agr hm scope ke bahar koi v scope ko define krnte h to wo
//  globaly sara ke liye available honga

// var c = 30;   // lekin var ka alag hi defination alag hota, jaise ki var hm globaly define kare yah scope 
// ke under define wo sare globaly and scope ke liye available honga aur agr scope ke ander ap var define
//  krte h to globaly ko overwrite kr denga aur scope ka value print honga...

var c = 300 // agar var global define krenge to kaise honga.


if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // var available for every global and scope function. 
}

// console.log(a);
// console.log(b);
console.log(c); 
