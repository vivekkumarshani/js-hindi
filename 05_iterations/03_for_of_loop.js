// for of loop

const arr = [1,2,3,4,5,6,7,8,9]
for (const i of arr) {
    // console.log(i)
    
}


const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each char is  ${greet}`)
}



// ********************** Maps *****************************************************

const map = new Map()

map.set("IN", "India")
map.set("USA", "United State Of America")
map.set("FR", "France")

// console.log(map)


// in map use of for of loop

for (const [key, value] of map) {
    // console.log(key, ":-", value)  // agr hm key yah koi v value ko direc print karenge to hm object print array milenga
    // pr main nhi chahta ki mujhe pura array print ho to hm key ko array me define kr dete hain []
    
}


const myObject = {
    "game1": "NFS",
    "game2": "spiderman"
}

for (const [key, value] of myObject) {

    console.log(key, ":-", value) // getting error, myobject is not iterable
    // ish error ko handle krne ke liye hm forIn loop use krte h taki variable pr v lopping ho sake.
    
}
