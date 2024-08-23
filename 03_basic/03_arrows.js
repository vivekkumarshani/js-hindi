const user = {
    userName : "vivek",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website`)
    }
}

user.welcomeMessage()