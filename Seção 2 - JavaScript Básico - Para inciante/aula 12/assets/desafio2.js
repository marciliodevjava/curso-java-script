let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

console.log(`Primeiro valor: (A: ${varA}) (B: ${varB}) (C: ${varC})`);

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(`Segundo valor: (A: ${varA}) (B: ${varB}) (C: ${varC})`);

[varA, varB, varC] = [varC, varA, varB];

console.log(`Terceiro valor: (A: ${varA}) (B: ${varB}) (C: ${varC})`);