// IEEE 754-2008
let num1 = 10; //Number
let num2 = 2.5; //Number

console.log(num1.toString() + num2);
//num1 = num1.toString();
console.log(num1.toString(2)); // Método Binário

console.log(num1.toFixed(2)); // Monstra as casas decimais
console.log("É um número inteiro:", Number.isInteger(num1));

let temp = num1 * "Ola";
console.log("Isso não é válidade:", Number.isNaN(temp));

let num3 = 0.7;
let num4 = 0.1;

num3 = (num3 * 100 + num3 * 100) / 100; // 0.8
num3 = (num3 * 100 + num3 * 100) / 100; // 0.9
num3 = (num3 * 100 + num3 * 100) / 100; // 1.0

console.log(num3);
console.log(Number.isInteger(num1));
