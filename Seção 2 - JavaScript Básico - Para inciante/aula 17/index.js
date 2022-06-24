// 0 1 2 3 4 5 6

const alunos = ["Luiz","Maria","João","Pedro","Marcilio","Alessandra","Isabela"];

// add uma string no final do elemento
alunos[alunos.length] = 'Lucilia';
alunos[alunos.length] = 'Raimundo';
alunos[alunos.length] = 'Macauly';

// add uma string no final do array .push('')
alunos.push('Matheus');
alunos.push('Marcelo');

// add uma string no inicio do array .unshift('')
alunos.unshift('Chloe');
alunos.unshift('Amora');

// remove uma string no final do seu array .pop()
const removido = alunos.pop();

console.log(removido);

// remove uma string no inicio do seu array .shift()
const removido1 = alunos.shift();

// Imprime o Array
console.log(removido1);

console.log("Array alunos:",alunos);

for(let i = 0; i < alunos.length; i++){
    console.log("Nome:",alunos[i]);
};

// apagar um elemento do seu arry
const apagar = delete alunos[1];

// Imprime um Array
console.log(alunos);

// PEga um posição ate a outra -1
console.log(alunos.slice(0, -1));

// Retorna o typo do array
console.log(typeof alunos);

// Pergunta se é uma instancia de Array?
console.log(alunos instanceof Array);