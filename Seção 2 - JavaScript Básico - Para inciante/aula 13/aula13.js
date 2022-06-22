// 0123457

let umaString = "Um texto";

console.log(umaString.charAt(8));
console.log(umaString.concat(" em um lindo dia."));
console.log(umaString + " em um lindo dia.");
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf("Um"));
console.log(umaString.lastIndexOf("t"));
console.log(umaString.replace("texto", "TEXTO"));
console.log(umaString.length); // Retorna exatamente o tamanho.
console.log(umaString.slice(2, 9));

let stringNew = "O rato roeu a roupa do rei de roma";

console.log(stringNew.toUpperCase());
console.log(stringNew.toLowerCase());
