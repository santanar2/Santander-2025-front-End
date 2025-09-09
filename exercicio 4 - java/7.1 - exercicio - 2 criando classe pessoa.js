class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

calcularImc() {
    return this.peso / (this.altura * this.altura);

}

classificarImc() {
    const imc = this.calcularImc();
    if (imc < 18.5) {
        return 'abaixo do peso';

            }else if (imc >= 18.5 && imc < 25) {
                return 'peso normal';

            }else if (imc >= 25 && imc < 30) {
                return 'acima do peso';

            }else if (imc >= 30 && imc < 40) {
                return 'obeso';

            }else {
                return 'obesidade grave';
            } 


}

}


const jose = new Pessoa('jose',85, 1.75);    

console.log(jose.calcularImc().toFixed(2)); 
console.log(jose.classificarImc());