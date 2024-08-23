// Immediately Invoked function Expressions (IIFE)

// Named IIFE
(function chai(){
    console.log(`DB Connected`)
})();

// agr interview me puchhe ki DO IIFE kaise likhe to kaise likhenge, code execute hone me bad ";" lagna na bhule

// normal IIFE 

( (name)=>{
    console.log(`DB CONNECT TWO ${name}`)
})("vivek")


// jaise hm function ke bad name defiend krte the variable me waise hi hmlog bina function define kiye hua v hm variable ko efine kr kte hain
