const user = {
    userName: "vivek",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function(){
        console.log("Got usr details from database")
        // console.log(`UserName: ${this.userName}`)   
        // console.log(this) // function ke under (this) console kare to (this) hme batata h ki konsa context h 
        // mainly (this) represent the current context   
    }
}
// console.log(user.userName)
// console.log(user.getUserDetails())
// console.log(this) // agr (this) context ko hm globaly use kare to hme empty object milta hain 




// ****************** constructer *****************************************************

function User({userName, loggedIncount, loggedIn}){
    this.userName= userName,
    this.loggedIncount = loggedIncount,
    this.loggedIn= loggedIn

    return this
}

const userOne = new User({userName:"vivek", loggedIncount:12, loggedIn:true})

console.log(userOne)