/* Operadores Aritméticos 
* + - Soma
* - - Subtração
* * - Multiplicação
* / - Divisão
* ** - Potenciação
* % - Resto da visisão, utilizado para fazer se o número é impar ou par num % 2 = 0 ou 1. 1 - Impar, 0 = Par
*/

/**
 * Ordem de presedência
 *  () - Parênteses
 *  ** - Potênciação
 * * - Multiplicação
 * / - Divisão
 * % - Modulo
 * + - Soma
 * - - Subtração
 */
const num1 = 10;
const num2 = 5;

console.log(num1 + num2); // Soma
console.log(num1 - num2); // Subtração
console.log(num1 * num2); // Multiplicação
console.log(num1 / num2); // Divisão
console.log(num1 ** num2); // Potenciação
console.log(num1 % num2); // Resto da divisão
console.log(num1 % 2, "Par");
console.log(num2 % 2, "Impar");

let contador = 1;
for(contador; contador <= 10; contador++){
    console.log(contador);
}

/**
 * Operadores de incremento
 * ++var - Incrementa e monstra o valor
 * var++ - Mostra o valor e depois incrementa
 */

let incr = 1;

console.log(`Saída ${incr} = 1.`); // Saída - 1
console.log(`Saída ${incr++} = 1.`); // Saída - 1
console.log(`Saída ${incr} = 2.`); // Saída - 2
console.log(`Saída ${++incr} = 3.`); // Saída - 3

/**
 * Operadores de Decremento
 * --var - Incrementa e monstra o valor
 * var-- - Mostra o valor e depois incrementa
 */

 let decr = 1;

 console.log(`Saída ${decr} = 1.`); // Saída - 1
 console.log(`Saída ${decr--} = 1.`); // Saída - 1
 console.log(`Saída ${decr} = 0.`); // Saída - 2
 console.log(`Saída ${--decr} = -1.`); // Saída - 3