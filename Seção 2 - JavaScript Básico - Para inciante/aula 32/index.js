//              0, 1, 2, 3, 4, 5, 6, 7, 8
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numero;

console.log(primeiroNumero, segundoNumero);
console.log(resto)