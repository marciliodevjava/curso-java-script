let num1 = 9.54578;
let num2 = Math.floor(num1); // Arredonda para baixo
let num3 = Math.ceil(num1); // Arredonda para cima
let num4 = Math.round(num1); // Arredonda para número inteiro mais proximo

console.log(num2);
console.log(num3);
console.log(num4);

console.log(
  "Maior número passado:",
  Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)
); // Pegar o maior número da sequencia
console.log(
  "Menor número passado:",
  Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)
); // Pegar o maior número da sequencia

const aleaorio = Math.round(Math.random() * (10 - 5) + 5);

console.log("Número aletatório:", aleaorio);
console.log(Math.pow(2,2)); // Eleva o número

let num5 = 9;

console.log(num5 ** (1/2)); // Monstra a raz quadrada.