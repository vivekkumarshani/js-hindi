const promiseOne = new Promise(function (resolve, reject){
    // Do an async task
    // DB Call, crytography, network
    setTimeout(() => {
        console.log('Async task is complete')
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function (resolve, reject){
    setTimeout(() => {
        console.log("async task 2")
        resolve()
    }, 1000);
}).then(function(){
    console.log("async 2 resolve")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('promiseThree is resolve')
        resolve({userName: 'chai', email: 'vivek@1234abcd.com'})
    },1000)
}).then(function(user){
console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({userName:'vivek', email:"kumarvivek@abc.com"})
            
        } else {
           reject("ERROR: something went wrong")
            
        }
    },100)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.userName
}).then((userName)=>{
    console.log(userName)

}).catch((error)=>{
console.log(error)
}).finally(()=> console.log("The promise either resolved or rejected"))

// async wait mrthod kaise use krte hain.....

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({userName: "javascript",password: '123' })
            
        } else {
            reject("ERROR: Javascript went wrong")
            
        }
    },1000)
});

async function consumePromiseFive(){
    const response =await promiseFive
    console.log(response)
}

consumePromiseFive()


// try catch method

async function consumePromiseFive(){
    try {
        const response =await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
        
    }
}

consumePromiseFive()


// async function consumePromiseSix() {
//     const url = "https://jsonplaceholder.typicode.com/users"
//     const response = await fetch(url)
//     const data= await response.json()
//     console.log(data)
// }

// consumePromiseSix()

// async function consumePromiseSix() {
//       try {
//         const url = "https://jsonplaceholder.typicode.com/users"
//         const response = await fetch(url)
//         const data= await response.json()
//         console.log(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
    
//     consumePromiseSix()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
     return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=> console.log(error))
      
     