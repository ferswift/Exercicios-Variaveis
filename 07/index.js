const populacaoInicial = 1000;

const transmissaoPorPessoa = 4;

const tempo = 7;

const pessoasInfectadas = (populacaoInicial * transmissaoPorPessoa * tempo) / 7;

const resultado = pessoasInfectadas.toFixed(0);

console.log(resultado);
