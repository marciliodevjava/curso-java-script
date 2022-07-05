// Operadores ternários
// condição ? Valor True : Valor False;

const pontuacaoUsuario = 999;

const nivelUsuário = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuário);
console.log(corPadrao);

//if(pontuacao >= 1000){
//    console.log('Usuário V.I.P!');
//} else {
//    console.log('Usuário normal.');
//}