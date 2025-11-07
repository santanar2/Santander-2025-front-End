var var1;
if (true){
    var1 = 10;
}

console.log(var1);

/* node "3-var-let-const.js" , para executar no terminal */

/* A variável var1 é declarada com var, que tem escopo de função ou global. Portanto, mesmo dentro do bloco if, a variável é acessível fora do bloco. O valor 10 é atribuído a var1 dentro do bloco if, e quando console.log(var1) é chamado, ele imprime 10. */ 

if (true){
    let var2 = 20;
    console.log(var2); // acesso dentro do bloco onde var2 existe
}

{
    let x = 20;
    console.log(x); // acesso dentro do bloco onde x existe
}

/* A variável var2 é declarada com let, que tem escopo de bloco. Portanto, quando tentamos acessar var2 fora do bloco if onde foi declarada, ocorre um erro de referência (ReferenceError) porque var2 não está definida nesse escopo. O mesmo vale para a variável x dentro do bloco separado; ela não é acessível fora desse bloco. */



var x = 30;
x = 40; 
console.log(x); // saída: 40

/* const declara uma variável cujo valor não pode ser reatribuído. No entanto, se a variável for um objeto ou array, suas propriedades ou elementos podem ser modificados. */ 