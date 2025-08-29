// Declara uma variável chamada "frut" e atribui o valor 2
let frut = 2

// Estrutura switch: compara o valor da variável "frut" com os casos abaixo
switch(frut){

    // Se "frut" for igual a 1, executa este bloco
    case 1:
        console.log("suco de laranja")       // imprime "suco de laranja"
        console.log("segunda mensagem")      // imprime "segunda mensagem"
        break                                // encerra o switch aqui

    // Se "frut" for igual a 2 ou 3, executa este bloco
    case 2:
    case 3:
        console.log("vitamina" + frut )      // imprime "vitamina2" ou "vitamina3"
        break                                // encerra o switch aqui
            
    // Se "frut" for igual a 4, executa este bloco
    case 4:
        console.log("suco de maçã" + frut)   // imprime "suco de maçã4"
        break                                // encerra o switch aqui

    // Se "frut" não for nenhum dos casos acima, executa este bloco
    default:
        console.log("suco genérico" + frut)  // imprime "suco genérico" + valor de frut
}
