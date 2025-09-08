/** class Pessoa {
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

**/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function comparaPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
    }
}

const Ricardo = new Pessoa('Ricardo', 48); 
const Elaine = new Pessoa('Elaine', 43);

comparaPessoas(Ricardo, Elaine);
