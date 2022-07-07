//    ... rest, ... spread
//    INDICE    0, 1, 2, 3, 4, 5, 6, 7, 8
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numero;

console.log(primeiroNumero, segundoNumero);
console.log(resto)

//                    0              1             2
//                0, 1, 2, 3    0, 1, 2, 3    0, 1, 2, 3
const numeros = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
const [,[,,,oito]] = numeros;

console.log(numeros[0][3]); // 4
console.log(oito)// 8
