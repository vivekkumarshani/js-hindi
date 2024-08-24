const myObject = {
    js: "Javascript",
    cpp: "c++",
    rb: "rubby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut ${myObject[key]}`)
 
}

const programming = ["js", "cpp", "py", "rb", "java", ]

for (const key in programming) {
//   console.log(key) // aise under key aata h like 0, 1,2,3 ... etc, aur agr value nikalna h to 
  console.log(programming[key])  // aise nikalte h value
}