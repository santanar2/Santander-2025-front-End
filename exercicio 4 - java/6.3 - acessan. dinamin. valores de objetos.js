const pessoa = {
    nome: 'Ricardo H de Santana',
    idade: 48,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
    
};

const atributo = 'idade';

console.log(pessoa[atributo]);




