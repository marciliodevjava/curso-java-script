// Para criar uma função se utiliza a fala reservdo function
function saudacao(nome) {
  return `Olá ${nome}, Bem vindo ao curso Básico de JavaScript!`;
}

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}
const variavel = saudacao("Marcilio");
console.log(variavel);
console.log(`Soma: `, soma("Pedro", 2));

// Função anonima

const raiz = function (n) {
  return n ** 0.5;
};
console.log("Raiz Quadrada: ", raiz(9));

// Função mais moderna se chama Arrow Function
const multiplicar = (n) => {
  for (let i = 1; i <= 10; i++) {
    const resultado = n * i;
    console.log(`${n} x ${i} = ${resultado}`);
  }
  return "";
};
console.log("Tabuada de Multiplicação 2");
console.log(multiplicar(2));

const subtrair = (n) => n - 1;

console.log(subtrair(10));