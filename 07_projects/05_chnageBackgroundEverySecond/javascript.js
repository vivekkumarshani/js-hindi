const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
      
        
        // console.log(color)
    }

    return color
    
}
let intervalId;

function startChnagingColor (){
    intervalId = setInterval(chnageBackgroundColor, 1000)
    function chnageBackgroundColor (){
        document.body.style.backgroundColor = randomColor()
    } 
}

function stopChnagingColor(){
    clearInterval(intervalId)
}

document.querySelector("#start").addEventListener('click', startChnagingColor)
document.querySelector("#stop").addEventListener('click', stopChnagingColor)