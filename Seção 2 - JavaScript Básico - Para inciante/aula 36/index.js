const frutas = ['Pera', 'Maçã', 'Uva'];

//For im -> Lê os índices ou chaves dos objetos
for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Marcilio',
    sobrenome: 'Silva',
    idade: 27,
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}