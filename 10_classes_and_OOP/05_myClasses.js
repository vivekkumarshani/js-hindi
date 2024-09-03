// es6

// class user {
//     constructor(userName, email, password) {
//         this.userName = userName;
//         this.email = email;
//         this.password = password

//     }
//     encrytPassword(){
//         return `${this.password}abc`
//     }

//     chnageUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const newUser = new user("black Coffee", "coffe@g.com", "123")
// console.log(newUser.encrytPassword())
// console.log(newUser.chnageUserName())

// Behind the scene

function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

User.prototype.encrytPassword = function () {
  return `${this.password}abc`;
};

User.prototype.chnageUserName = function () {
  return `${this.userName.toUpperCase()}`;
};

const tea = new User("coffee", "coffe@e.com", "abcd1234");

console.log(tea.encrytPassword());
console.log(tea.chnageUserName());
