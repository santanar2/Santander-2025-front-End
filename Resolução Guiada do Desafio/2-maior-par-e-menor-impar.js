// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima a soma dos números pares e a soma dos números ímpares.

// Exemplo:
// Entrada: 
// 5    
// 1
// 10
// 3    
// 4
// 8
// Saída: 
// Soma dos pares: 10
// Soma dos ímpares: 1



const {gets, print} = require('./funcoes-auxiliares-ex2.js');

const n = gets(); // Lê a quantidade de números a serem processados 
let somaPares = 0; // Inicializa a variável para armazenar a soma dos números pares
let somaImpares = 0; // Inicializa a variável para armazenar a soma dos números ímpares

for (let i = 0; i < n; i++) {
    const numeroAtual = gets(); // Lê o próximo número da entrada   
    
    if (numeroAtual % 2 === 0) { // Verifica se o número é par
        somaPares += numeroAtual; // Adiciona o número par à soma
    } else { // Se não é par, é ímpar
        somaImpares += numeroAtual; // Adiciona o número ímpar à soma
    }
}

print(`Soma dos pares: ${somaPares}`); // Imprime a soma dos números pares
print(`Soma dos ímpares: ${somaImpares}`); // Imprime a soma dos números ímpares


// Cole este comando completo no PowerShell:

//@"
//const entradas = [5, 1, 10, 3, 4, 8];
//let i = 0;

//function gets() {
//    const valor = entradas[i];
//    i++;
//    return valor;
//}

//function print(texto) {
//   console.log(texto);
//}

//module.exports = { gets, print };
//"@ | Out-File -FilePath "funcoes-auxiliares-ex2.js" -Encoding utf8

// node 2-maior-par-e-menor-impar.js
