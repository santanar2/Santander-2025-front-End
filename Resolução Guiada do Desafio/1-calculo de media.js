// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 o,´ro,a"Reprovado"
// Caso a média seja > = e < 7, imprima "Recuperação"
// Caso a média seja >= 7, imprima "Aprovado"

// Exemplo:
// Entrada: 5.5
// Saída: Recuperação

const prompt = require('prompt-sync')();

const media = parseFloat(prompt('Digite a média do aluno: '));

if (media < 5) {
    console.log("Reprovado");
} else if (media >= 5 && media < 7) {
    console.log("Recuperação");
} else {
    console.logt("Aprovado");
}

// Test cases
// Entrada: 4.0
// Saída esperada: Reprovado        
// Entrada: 6.0
// Saída esperada: Recuperação      
// Entrada: 8.5
// Saída esperada: Aprovado 


// digite no terminal:

// node 1-exercicio.js

// ( Digite a média do aluno: )  no terminal para testar o código.
