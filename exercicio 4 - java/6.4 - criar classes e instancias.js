class Pessoa {
    nome;
    idade; 

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
    
}

const Ricardo = new Pessoa();
Ricardo.nome = 'Ricardo';
Ricardo.idade = 48;

Ricardo.descrever(); 

