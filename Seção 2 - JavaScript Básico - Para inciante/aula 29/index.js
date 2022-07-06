const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana == 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana == 1) {
    diaSemanaTexto = 'Segunda-feira';
} else if (diaSemana == 2) {
    diaSemanaTexto = 'Terça-feira';
} else if (diaSemana == 3) {
    diaSemanaTexto = 'Quarta-feira';
} else if (diaSemana == 4) {
    diaSemanaTexto = 'Quinta-feira';
} else if (diaSemana == 5) {
    diaSemanaTexto = 'Sexta-feira';
} else if (diaSemana == 6) {
    diaSemanaTexto = 'Sábado';
}


console.log(diaSemana);