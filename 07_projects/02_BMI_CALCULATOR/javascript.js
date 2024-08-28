const form = document.querySelector("form")

// this case will give you empty value

// const height = parseInt(document.querySelector("#height").value)

form.addEventListener('submit', (e) =>{
e.preventDefault()

const height = parseInt(document.querySelector("#height").value)
const weight = parseInt(document.querySelector("#weight").value)
const result = document.querySelector("#result")
if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height: ${height}`
    
} else if (weight === "" || weight<0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight: ${weight}`
}else{
   const bmi= (weight / ((height*height)/10000)).toFixed(2)
   let message;
   if (bmi < 18.6) {
    message = "You are underWeight"
   } else if(bmi >= 18.6 && bmi <= 24.9) {
    message = "You are in the normal range"
    
   }else{
    message = "You are overWeight"
   }
   result.innerHTML=`<span>${bmi}</span><br><span>${message}</span>`
}
})