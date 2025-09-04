function sayMyName(name) {
    console.log('your name is: ' + name);

}

sayMyName('Ricardo');
sayMyName('Elaine');

//******************************************************************* */

function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log (quadradoDeDez);

//*********************************************************************/

function incrementarJuros(valor, percentualJuros) {
    const valordeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valordeAcrecimo;

}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15)); 