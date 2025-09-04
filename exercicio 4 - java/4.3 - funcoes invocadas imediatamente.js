function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {

console.log('imc:', imc.toFixed(2))

if (imc < 18.5) {
    return('abaixo do peso');

}else if (imc >= 18.5 && imc < 25) {
    return('peso normal');

}else if (imc >= 25 && imc < 30) { 
    return('acima do peso');

}else if (imc >= 30 && imc < 40) {  
    return('obeso');

}else {
    return('obesidade grave');
} 

}


(function main() {

const peso = 75; // em kg
const altura = 1.70 // em metros

const imc = calcularIMC (peso, altura);
console.log(classificarIMC(imc));

})();

