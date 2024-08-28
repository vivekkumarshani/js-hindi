// const buttons = document.querySelectorAll(".button")
// console.log(buttons)
// const body = document.querySelector("body")

// buttons.forEach( (button) =>{
//  console.log(button)
//  button.addEventListener('click',(e) =>{
//     console.log(e)
//     console.log(e.target)
//     if (e.target.id === "grey") {
//         body.style.backgroundColor = e.target.id
        
//     }
//     if (e.target.id === "white") {
//         body.style.backgroundColor = e.target.id
        
//     }
//     if (e.target.id === "blue") {
//         body.style.backgroundColor = e.target.id
        
//     }
//     if (e.target.id === "yellow") {
//         body.style.backgroundColor = e.target.id
        
//     }
//  })

// })




function colorChanger(color){
    switch (color) {
        case "grey":
            document.querySelector("body").style.backgroundColor="grey"
            break;
        case "white":
            document.querySelector("body").style.backgroundColor="white"
            break
        case "blue":
            document.querySelector("body").style.backgroundColor="blue"
            break
        case "yellow":
            document.querySelector("body").style.backgroundColor="yellow"
            break
    
        default:
            break;
    }
}


