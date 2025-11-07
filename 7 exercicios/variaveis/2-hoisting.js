var teste1 = function(){
    console.log('teste1');
}

function teste2(){
    console.log('teste2');

}

teste1();
teste2();

/* informação sobre hoisting */

/* O hoisting é um comportamento do JavaScript onde variáveis e funções são "elevadas" para o topo de seu escopo antes da execução do código. Isso significa que você pode chamar funções antes de declará-las, e as declarações de variáveis são içadas, mas não suas atribuições. */

/*  Dica sobre Hoisting
A função teste2 poderia ser chamada antes de sua declaração devido ao hoisting
A função teste1 não pode ser chamada antes de sua declaração, pois apenas a variável é "içada", não a atribuição da função */

/* node "2-hoisting.js" , para executar no terminal */