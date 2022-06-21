/**
 * Luiz Otávio Miranda tem 30 anos, pesa 84kg 
 * tem 1.8 de altura e seu imc é de 25.925925925925924
 */

const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 33;
const peso = 84;
const alturaEmMetro = 1.80;
let imc = peso / (alturaEmMetro * alturaEmMetro);
let anoAtual = 2022;
let anoNascimento = anoAtual - idade;

// Template Strings - Variável dentro de ${variável}

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmMetro} e seu imc é de ${imc}`);
console.log(`nasceu no ano ${anoNascimento}.`);