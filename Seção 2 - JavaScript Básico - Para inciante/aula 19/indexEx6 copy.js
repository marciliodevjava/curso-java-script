/**
 *  Primitivos (imutavéis) - string, number, boolean, undefined, null ( bigint, symbol)
 *
 * Referência (mutável) - array, object, function - Passados por referência
 */

const a = {
  nome: "Luiz",
  sobrenome: "Otávio",
};

const b = { ...a };

a.nome = "João";
console.log(a);
console.log(b);
