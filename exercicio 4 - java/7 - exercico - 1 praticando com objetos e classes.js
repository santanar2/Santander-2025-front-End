class Carros {
    marca;
    cor;
    gastoMedioPorKm;
    
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

}


const fiesta = new Carros('Ford', 'Azul', 1/12); 

console.log(fiesta.gastoMedioPorKm.toFixed(2));   
console.log(fiesta.calcularGastoDePercurso(70, 5.79).toFixed(2)); 


const uno = new Carros('Fiat', 'Branco', 1/10);

console.log(uno.gastoMedioPorKm.toFixed(2));
console.log(uno.calcularGastoDePercurso(70, 5.79).toFixed(2));