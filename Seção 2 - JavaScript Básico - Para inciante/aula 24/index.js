/**
 * Entre 0 - 11 - Bom dia
 * Entre 12 - 17 - Boa Tarde
 * Entre 18 - 23 - Boa noite
 */
const hora = 24;

function bomDia() {
  return console.log("Bom dia!!");
}
function boaTarde() {
  return console.log("Boa Tarde!!");
}
function boaNoite() {
  return console.log("Boa Noite!!");
}

if (hora >= 0 && hora <= 11) {
  bomDia();
} else if (hora >= 12 && hora <= 17) {
  boaTarde();
} else if (hora >= 18 && hora <= 23) {
  boaNoite();
} else {
  console.log("Olá!");
}
