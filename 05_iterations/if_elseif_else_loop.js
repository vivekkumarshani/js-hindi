// for loop 

for (let i = 0; i <= 10; i++) {
    const element =i;
    if (element == 5) {
        // console.log("5 is best number ")
    }
    // console.log(element)
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop value ${i}`)
        // console.log(i + "*" + j + "=" + i*j )
        
    }
    
}


// let myArray = ["shaktiman", "Load Mahakal", "flash", "Load Vishnu"]
// // console.log(myArray)

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element)
    
// }


// ********************** Break and continue statement  *****************************************************


for (let i = 1; i <= 20; i++) {
    // ab main chahta hu ki agr koi v value detect ho to break statement lag jaye. chaliye dehte h kaise krte h
    if(i == 5){
        console.log(`detected 5`)
        break;
    }
    // console.log(`value of i is: ${i}`)
    
}


for (let i = 0; i <= 20; i++) {
if (i == 5) {
    console.log("detected 5")
    continue
}
console.log(`value of i is: ${i}`)
}