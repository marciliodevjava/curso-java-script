const nome = ['Luiz Otávio', 'Marcilio', 'Alessandra'];

for(let i = 0 ; i < nome.length; i++){
    console.log(nome[i])
}

console.log();

for(let i in nome){
    console.log(nome[i]);
}

console.log();

for(let valor of nome){
    console.log(valor);
}

console.log();

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});

const pessoa = {
 nome: 'Luiz',
 sobrenome: 'Otávio'
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

// For classico
// For in - Retorna o índice ou chaves (string, array ou objetos)
// For of - Retorna o valor em sí (Interaveis, arrays ou strings)