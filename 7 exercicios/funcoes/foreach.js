const lista = [1,2,3,4,5,6,7,8,9,10];

lista.forEach((value, i, lisRef) => {
    console.log('valor:', value, 'índice:', i);
    // opcional: mostrar array formatado
    // console.log('array:', lisRef.join(', '));
});