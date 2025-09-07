function escrevaMeuNome(nome) {
    return 'Meu nome é '  + nome;

}

function verificarIdade(idade) {
    if (idade >=18) {
        console.log(escrevaMeuNome('Ricardo') + ' é Maior de idade');
        }else {
            console.log('Ricardo');
        }
}

verificarIdade(20);
