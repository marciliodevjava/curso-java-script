// Objeto literal
function criaPessoa(nome, sobrenome, idade){
    return{ nome, sobrenome, idade };
};

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Mirando', 32);
const pessoa3 = criaPessoa('João', 'Oliveira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
console.log(pessoa5.nome);