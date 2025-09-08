const Ricardo = {
    nome: 'Ricardo H de Santana',
    idade: 48,
    profissao: 'fullstack developer',
    possuiFaculdade: true,
    tecnologias: [
        { nome: 'JavaScript', especialidade: 'Web/Mobile' },
        { nome: 'Java', especialidade: 'Web/Mobile' },]
}

console.log(Ricardo.nome);
console.log(Ricardo.tecnologias[0].nome);
console.log(Ricardo.tecnologias[1].especialidade);
console.log(Ricardo.idade);
console.log(Ricardo.possuiFaculdade);
console.log(Ricardo.profissao);
