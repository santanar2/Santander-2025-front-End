const notas = []

notas.push(4);
notas.push(2);
notas.push(9);
notas.push(7);
notas.push(10);
notas.push(8);

let somaDasNotas = 0;

for(let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media.toFixed(2)}`);