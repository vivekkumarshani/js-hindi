function SetUsername (userName){
    // complex DB Call
    this.userName = userName
    console.log("called")
}

function createUser(userName, email, password){
    SetUsername.call(this, userName)
    this.email = email
    this.password= password
}


const code = new createUser("coder", "coderabcd.com", "123")
console.log(code)