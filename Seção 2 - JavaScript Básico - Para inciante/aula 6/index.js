// Variáveis não começa com números
// Não podemos criar com palavras reservadas
// Não pode conter espaços
// Utilizamos camelCase
// Não podemos redeclarar 
// Não utilizar VAR, utilize LET

let nome = "João"; // String

console.log(nome, "nasceu em 1984");
console.log("Em 2000", nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com", nome, "em 2015.");
console.log("O filho de", nome, "se chama Eduardo.");

// Variavel inicalizada com valor vazio - undefind

let nome1;
nome1 = "Pedro"; // Aqui ela deixa de ser undefind pois foi declarada
console.log(nome1);

nome1 = "Otávio";
console.log(nome1);

let nomeCliente = "Luiz";
let nomecliente = "Otávio";
console.log(nomeCliente, nomecliente);
