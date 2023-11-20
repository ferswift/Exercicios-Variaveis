const capital = 1000;

const taxaFixa = 0.125;

const tempo = 5;

const montante = capital * (1 + taxaFixa) ** tempo;

console.log(montante.toFixed(0));
