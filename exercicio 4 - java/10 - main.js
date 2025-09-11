const { gets, print} = require('./10 - exerc. - 1 maior numero sorteado.js')

const numerosSorteados = [];

for (let i = 0; i < 10; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado); 
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados [i];
    
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
        
    }
}

print(maiorValor); 