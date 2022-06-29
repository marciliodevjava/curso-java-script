/**
 *  && -> Todas as Expressões precisam ser verdadeiras para ser verdeiro
 *  || -> Alguma Expressão tem que ser verdadeira
 *
 * Valores Falsos
 * Falso
 * falso
 * 0
 * " "
 * undefined / null
 * NaN
 */

function falaOi() {
  return "Oi";
}

const vaiExecutar = 1;

console.log(vaiExecutar && falaOi());

/**
 *
 */

console.log(0 || false || null || "Luiz Otávio" || "true");
