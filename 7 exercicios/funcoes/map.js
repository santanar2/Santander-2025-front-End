class  Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
const nomes = [new Pessoa('Ana'), new Pessoa('Bia'), new Pessoa('Carlos')];

const listNomes = [];

for (let i = 0; i < listNomes.length; i++) {
    const element = list[i];
    listNomes.push(element.nome);
}

const nomesMap = nomes.map(pessoa => pessoa.nome);

console.log(nomesMap);