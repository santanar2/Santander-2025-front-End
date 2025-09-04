const numero = 10;


const numeroDivisivelPor5 = (numero % 5) === 0; 

if (numero === 0) {
    console.log(' O número é inválido');
} else if (numeroDivisivelPor5) {
    console.log('sim'); 
} else {
    console.log('não');
}

console.log(numeroDivisivelPor5);  
