// Não podemos criar constante com palavras reservadas
// Constantes precisam ter nomes significativos
// não podemos começar o nome de uma constante com um número
// Não podemos conter espaços ou traços
// utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de um constante
// Não utilizer VAR, utilizer CONST

// soma - "+" subtração - "-" multiplicação - "*" divisão - "/""

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;

console.log("Resultado =", resultado);
console.log("Resultado duplicado =", resultadoDuplicado)
console.log("Resultado triplicado =", resultadoTriplicado);

resultadoTriplicado = resultadoTriplicado + 5;

console.log("Resultado triplicado + 5 =", resultadoTriplicado);
