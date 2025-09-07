function calcularPreco(precoEtiqueta, formaDePagamento) {
    let precoFinal; 

    if (formaDePagamento === 1) {
        precoFinal = precoEtiqueta - (precoEtiqueta * 0.1);
    } else if (formaDePagamento === 2) {
        precoFinal = precoEtiqueta - (precoEtiqueta * 0.15);
    } else if (formaDePagamento === 3) {
        precoFinal = precoEtiqueta;
    } else {
        precoFinal = precoEtiqueta + (precoEtiqueta * 0.1);
    }

    return precoFinal;
}

const precoEtiqueta = 100;
const formaDePagamento = 2;

console.log(calcularPreco(precoEtiqueta, formaDePagamento));
