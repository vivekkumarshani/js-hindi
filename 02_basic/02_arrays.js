const marvel_heros = ["Thor", "IronMan", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros) // concat array me hm ek yah ek se jyada array ko concat kr skte h
// console.log(allHeros);

// spread method

const all_new_Heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_Heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); 
// flat ka use hm tb karte h jb array ke under array ho to aur hme sare array o ek array me lana ho tb flat array ka use krte hain
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
