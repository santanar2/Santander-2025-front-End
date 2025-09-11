//** Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
// Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.
// dados de entras:
// 5
// 50
// 10
// 98
// 23
// saida:
// 98

const entradas = [5, 50, 10, 98, 23, 48, 15, 25, 67, 99];
let i = 0;

function gets() {
    return entradas[i++];
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };

