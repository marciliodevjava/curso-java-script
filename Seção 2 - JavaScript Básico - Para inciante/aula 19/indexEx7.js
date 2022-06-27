/**
 *  Primitivos (imutavéis) - string, number, boolean, undefined, null ( bigint, symbol)
 *
 * Referência (mutável) - array, object, function - Passados por referência
 */

let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push("Luiz");
console.log(a, c);
