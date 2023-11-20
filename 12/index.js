/*
onde:
i: taxa de juros
M: montante
C: capital inicial (valor de dinheiro inicial)
n: número de meses
*/

const montante = 90000;
const capitalInicial = 60000;
const numeroDeMeses = 24;

const taxaDeJuros = Math.pow(montante / capitalInicial, 1 / numeroDeMeses) - 1;

const taxadeJuros2 = (montante / capitalInicial) ** (1 / numeroDeMeses) - 1;

const valorDoJuros = taxadeJuros2 * 100;

const valorDoJurosArredondado = valorDoJuros.toFixed(3);

console.log(valorDoJurosArredondado);
