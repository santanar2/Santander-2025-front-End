// Estrutura de decisão usando switch/case/break/default
// O switch compara o valor da variável "fruta" com os casos definidos

// Declara a variável "fruta" com o valor "banana"
let fruta = "banana"

// Início da estrutura switch que vai analisar o valor da variável "fruta"
switch(fruta){

    // Caso "fruta" seja igual a "laranja"
    case "laranja":
        console.log("suco de laranja")  // imprime "suco de laranja"
        break                           // encerra o switch

    // Caso "fruta" seja igual a "banana" ou "morango"
    case "banana":
    case "morango":
        console.log("vitamina")         // imprime "vitamina"
        break                           // encerra o switch
    
    // Caso "fruta" seja igual a "maça"
    case "maça":
        console.log("suco de maçã")     // imprime "suco de maçã"
        break                           // encerra o switch
                
    // Caso "fruta" não seja nenhum dos anteriores
    default:
        console.log("suco genérico")    // imprime "suco genérico"
}

