const nome = "Luiz"; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String
const num = 10; // Number
const num1 = 10.52; // Number
let nomeAluno; // Undefined - Não aponta para local nenhum na mémoria
const sobrenomeAluno = null; // Nulo -> Não aponta para local nenhum na mémoria
const booleano = true; // True - False, Verdadeiro - Falso (Valor lógico)
const a = [1, 2];
const b = a; // Referência

// Null é diferente de Undefineds

console.log("Tipo:", typeof nome, "Valor:", nome);
console.log("Tipo:", typeof nome1, "Valor:", nome1);
console.log("Tipo:", typeof nome2, "Valor:", nome2);
console.log("Tipo:", typeof num, "Valor:", num);
console.log("Tipo:", typeof num1, "Valor:", num1);
console.log("Tipo:", typeof nomeAluno, "Valor:", nomeAluno);
console.log("Tipo:", typeof sobrenomeAluno, "Valor:", sobrenomeAluno);
console.log("Tipo:", typeof booleano, "Valor:", booleano);

console.log(a, b);
b.push(3); // Adiciona no proximo local
console.log(a, b);
