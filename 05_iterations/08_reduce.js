const myNum = [1,2,3]


// const myTotal = myNum.reduce(function(acc,curVal){
//     console.log(`acc ${acc} and curval ${curVal}`)
//     return acc+curVal
// },0)


const myTotal = myNum.reduce((acc,curVal)=>{ 
    // console.log(`acc ${acc} and curval ${curVal}`)
    return acc+curVal},0)

// console.log(myTotal)


const shoppingCart = [{
    itemName: "js course",
    price: 2999
},{
    itemName: "py course",
    price: 999
},{
    itemName: "Data scientist course",
    price: 5999
},{
    itemName: "React course",
    price: 3999
}
]

const priceToPay = shoppingCart.reduce( (acc, item) =>acc+item.price, 0)
console.log(priceToPay)