// const tinderUser = new Object()  // yah  singletom object hain

// const tinderUser = {}  // yah non-singleton object hain

// console.log(tinderUsera)
// console.log(tinderUser)


const tinderUser = {}

// tinderUser.id="123abc"
// tinderUser.name="vivek"
// tinderUser.isLogged=false
// console.log(tinderUser)



const regularUser ={
    email:"ck@12.com",
    fullName:{
        userFullName:{
            firtName:"vivek",
            lastName: "choudhary"
        }
    }
}

// console.log( regularUser.fullName.userFullName.firtName)


const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

// const obj3 = Object.assign(obj1, obj2)
const obj3 ={...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "Js in hindi",
    price: 999,
    courseInstructor: "vivek"

}

const {courseInstructor: instructor} = course  // yah hm d-structuring kar rhe hain 

console.log(instructor)
