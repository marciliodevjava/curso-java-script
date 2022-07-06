//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia);

const data = new Date(2019, 3, 20, 15, 14, 27, 60);// Ano - Mês - Dia, Hora, Minuto, Segundos, Milisegundos.
console.log(data.toString());

const dataStri = new Date('2020-03-20T20:20:59.100');
console.log(dataStri.toDateString());

console.log('Dia', dataStri.getDate());
console.log('Mês', dataStri.getMonth());
console.log('Ano', dataStri.getFullYear());
console.log('Hora', dataStri.getHours());
console.log('Min', dataStri.getMinutes());
console.log('Seg', dataStri.getSeconds());
console.log('Ms', dataStri.getMilliseconds());
console.log('Dia semana', dataStri.getDay());
console.log(dataStri.toString());