/**
 *  Primitivos (imutavéis) - string, number, boolean, undefined, null ( bigint, symbol)
 */

let nome = "Luiz";
nome[0] = "R";
nome = "Otávio";

console.log(nome[0], nome);

let a = "A";
let b = a;

a = "Outra coisa";
console.log(a, b);
