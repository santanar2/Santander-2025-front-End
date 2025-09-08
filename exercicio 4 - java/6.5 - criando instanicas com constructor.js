class Pessoa {
    nome;
    idade;
    
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anodeNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
    
}

const Ricardo = new Pessoa('Ricardo', 48);

console.log(Ricardo); // Pessoa { nome: 'Ricardo', idade: 48, anodeNascimento: 1977 } 

