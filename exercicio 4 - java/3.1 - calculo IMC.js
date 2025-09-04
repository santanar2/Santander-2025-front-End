const peso = 74; // em kg
const altura = 1.62 // em metros

const imc = peso / (altura * altura);

console.log('imc:', imc.toFixed(2))

if (imc < 18.5) {
    console.log('abaixo do peso');

}else if (imc >= 18.5 && imc < 25) {
    console.log('peso normal'); 

}else if (imc >= 25 && imc < 30) { 
    console.log('acima do peso');

}else if (imc >= 30 && imc < 40) {  
        console.log('obeso'); 

}else {
    console.log('obesidade grave');
} 