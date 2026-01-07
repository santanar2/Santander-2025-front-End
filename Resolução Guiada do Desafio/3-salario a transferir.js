//3 )  Faça um programa que calcule  e imprima o salário a ser transferido para um funcionário.
//Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios
// o salário salário a ser transferidoé calculado da seguinte maneira:
// Valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

// de R$ 0,00 a R$ 1.100,00 = 5,00%
// de R$ 1.100,01 a R$ 2.500,00 = 10,00%
// maior que R$ 2.500,00 = 15,00%

const readline = require('readline-sync');

const valorBruto = parseFloat(readline.question('Digite o valor bruto do salário: '));
const adicionalBeneficios = parseFloat(readline.question('Digite o valor dos benefícios: '));

let percentualImposto = 0;

if (valorBruto <= 1100) {
    percentualImposto = 0.05;
} else if (valorBruto <= 2500) {
    percentualImposto = 0.10;
} else {
    percentualImposto = 0.15;
}

const valorImposto = valorBruto * percentualImposto;
const salarioTransferido = valorBruto - valorImposto + adicionalBeneficios;

console.log(`Salário a ser transferido: R$ ${salarioTransferido.toFixed(2)}`);

//  node "3-salario a transferir.js"



