const user = {
    userName : "vivek",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website`)  // "this" ya krta h "this" current context/value 
        // ke bare me batata hain
        console.log(this)
    }
}

// user.welcomeMessage()  // function ke under yaha tak context same tha mtlb value but 
// user.userName = "kumar" // yaha pr ishka context change r diye ish liye next line me "kumar" print ho rha h
// user.welcomeMessage()

// console.log(this) // node envorement me this empty object print krta hain.. aur browser me agar "this" print
//  kiya jaye to window object aata hain. browser me jo object h wo h window objects

// function chai(){
//     let userName = "vivek"
//     console.log(this.userName) // function ke under aa kr "this" use hm nhi kar pate. agr kr v liye to 
// ushka value undefined aayenga.
// }
// chai()

// const chai = function(){
//     let userName = "vivek"
//     //     console.log(this.userName) // function ke under aa kr "this" use hm nhi kar pate. agr kr v liye
//  to ushka value undefined aayenga.

// }
// chai()

// const chai = () =>{
//     let userName = "vivek"
//     console.log(this) // yah v same hi undefined object hi return krta hain. agr fat arrow function me hm this 
//     // "this" ko print krte h to fatarrow function kahte h i mujhe nhi pta yah "this" kya hain.. to ishka value
//     // v undefined aayenga. 
// }
// chai()


// const addtwo =(num1, num2) =>{ 
//     return num1 + num2
// }

// agr statement ek hi h to hm return na kr sidha ek line me hi defined kr skte hain. wo kaise.

const addtwo = (num1, num2) => (num1+num2) // yah one line statement hain agr ek se jyada statement nhi h to 
// one line statement declear kr skte hain bina return likhe.
// Aur ishe hi emplicit return 
console.log(addtwo(3,4))



