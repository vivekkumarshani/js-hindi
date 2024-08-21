const name = "vivek"
const repocount = 50


// console.log(name + "", repocount + "","value") yah hm normaly use karte hain...

// agr hume ek se jyada use krna ho to kaise karenge 
// back tick ka use hm karte hain jb hame ek se jyada value ko dekhne ho to hm back tick ka use krte hain.

// console.log(`My name is ${name} and my repo is: ${repocount} `)


const gameName = "Vivek-kumar-choudhary"


// console.log(gameName[0]) // [] hm use krte hain tb jb hame kisika v lenght check krne ho ki kis length pr kon sa character hain tb hm [] ka use karte hain

// console.log(gameName.__proto__) // proto hme batata h ki kis tb ka methods hain. {} ise hm obkect kahte hain...

// console.log(gameName.length) // length ka use hm tb karte h jb hame kisi v string yah object ka lenth pata krne ho.

// console.log(gameName.toLowerCase()) // tolowercase yah ape sara value ko lowercase me convert kar denga
// console.log(gameName.toUpperCase()) // toUppercase yah ape sara value ko uppercase me convert kar denga
// console.log(gameName.charAt(0)) // charAt check krta h ki kis index par kon sa value hain
// console.log(gameName.indexOf("e")) // indexOf check krta h ki jo v apne value dala h ushka length kya hain...



const newString = gameName.substring(0, 4) 

// console.log(newString) //substring do argument lete hain first kis index se start krna hain, dushra kaha tak check krna hain,
// aur jo v index number ap dalonge ushme wo 1 negative value rhta hain jaise hmne dala 4 to 3 tk hi print honga. 
// substring me ap negative value nahi de skte agr apne negative value de v diya to wo zero se hi start honga.


const anotherString = gameName.slice(1, 3)
// console.log(anotherString)


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(-1, 3);
// console.log(citrus)

const url = "htpps://vivek.com/vivek%20choudhary"
// console.log(url.replace("%20", "-"))
// console.log(url.includes("kumar"))

const newStringOne = "   vivek    "
// console.log(newStringOne);
// console.log(newStringOne.trim());


// console.log(gameName.split("-"))




