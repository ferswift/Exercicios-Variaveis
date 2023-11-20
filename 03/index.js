const dinheiroDisponivel = 80;
const precoDoTenis = 129.99;

const valorDoDesconto = precoDoTenis - dinheiroDisponivel;

const porcentagem = (valorDoDesconto * 100) / precoDoTenis;

console.log(porcentagem.toFixed(2));

// 129.99 = 100%
// 129.99 - 80 = R$49.99
// quantos % equivalem 49.99
// porcentagem = (valorDoDesconto * 100) / 129.99;
