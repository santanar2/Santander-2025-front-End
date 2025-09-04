let valorPago;

const precoEtiqueta = 100; // exemplo de preço do produto
const condicaoPagamento = 3; // exemplo de condição de pagamento


if (condicaoPagamento === 1) {
    valorPago = precoEtiqueta * 0.90; // 10% de desconto
    console.log('valor pago: R$', valorPago.toFixed(2));

}else if (condicaoPagamento === 2) {
    valorPago = precoEtiqueta * 0.85; // 15% de desconto
    console.log('valor pago: R$', valorPago.toFixed(2));

}else if (condicaoPagamento === 3) {
    valorPago = precoEtiqueta; // preço normal
    console.log('valor pago: R$', valorPago.toFixed(2));

}else if (condicaoPagamento == 4) {
    valorPago = precoEtiqueta * 1.10; // 10% de juros
    console.log('valor pago: R$', valorPago.toFixed(2));

}else {
    console.log('condição de pagamento inválida');
    valorPago = null;
}
