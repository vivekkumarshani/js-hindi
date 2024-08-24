// for Each loop

const coding = ["js", "react", "java", "html", "css", "bootstrap"];

coding.forEach(function (item) {
  // console.log(item)
});

// foreach me arrow function kaise use kare

coding.forEach((val) => {
  // console.log(val)
});

// coding.forEach((item, index, arr)=>{
// console.log(item, index, arr)
// })

const myCoding = [
  {
    languageName: "Javascipt",
    languageFileName: "js",
  },
  {
    languageName: "Html",
    languageFileName: "HTML",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
];

myCoding.forEach((item) =>{
console.log(item.languageName, item.languageFileName)
})