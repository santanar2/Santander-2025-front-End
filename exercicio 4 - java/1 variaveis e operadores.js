const precoCombustivel = 5.79;
    const kmPorLitros = 11;
    const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const custoViagem = litrosConsumidos * precoCombustivel;

console.log(custoViagem.toFixed(2));