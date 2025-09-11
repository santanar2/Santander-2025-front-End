const { gets, print } = require('./10 - exerc. - 1 maior numero sorteado.js');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);

//** nesse momento não resolvi o problema do escopo da variável maiorValorEncontrado */
