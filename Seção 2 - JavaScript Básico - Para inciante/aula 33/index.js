const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desistrituração

const { nome, sobrenome} = pessoa;
const {idade, ... resto} = pessoa;

console.log(nome, sobrenome, idade);
console.log(idade, resto);