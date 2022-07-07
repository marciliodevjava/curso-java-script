const verdadeira = true;

/**
 *  Let - tem escopo de bloco
 *  Var - tem escopo de função
 */
let nome = 'Luiz';
var nome2 = 'Luiz';

if(verdadeira){
    let nome = 'Otavio';
    console.log(nome, nome2);
}