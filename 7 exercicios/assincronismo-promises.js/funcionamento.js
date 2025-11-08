/* new Promise((resolve, reject) => {
  // Simulando uma operação assíncrona
    setTimeout(() => {
    const sucesso = true; // Mude para false para testar o rejeição
    if (sucesso) {
    resolve("Operação bem-sucedida!");
    } else {
    reject("Erro na operação.");
    }
}, 2000);
}); */

const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() *100);
        resolve(numero);
    }, 1000);
})

console.log('vai filhão!');

promessaDeUmNumeroQualquer
    .then((value) => {
        console.log("Número gerado:", value);
    })
    .catch((error) => {
        console.error("Erro:", error);
    })
    .finally(() => {
        console.log('finalizou!');
    })

    /* Descrição curta da função do script (funcionamento.js):

Cria uma Promise que, após 1 segundo (setTimeout), resolve com um número aleatório inteiro entre 0 e 99 (usa parseInt(Math.random() * 100)).
Imprime imediatamente no console: "vai filhão!".
Quando a Promise resolve, o .then imprime: "Número gerado: X" (X = valor aleatório).
Se a Promise rejeitar, o .catch imprime o erro (aqui não ocorre rejeição).
O .finally sempre executa e imprime: "finalizou!".
Como executar (PowerShell, a partir da pasta raiz do projeto):  */