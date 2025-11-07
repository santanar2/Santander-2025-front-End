/* Resumo rápido:

boolean: true/false, usado em condições.
null: ausência intencional de valor (typeof null === "object" — comportamento histórico).
undefined: variável declarada sem valor ou retorno ausente de função.
number: números inteiros e float; inclui NaN e Infinity.
string: sequência de caracteres.
symbol: valor primitivo único, útil como chave de propriedade privada. */

//object: coleções/estruturas (objetos, arrays, funções são objetos).

// ...existing code...

// boolean
const booleano = true;
console.log('boolean:', booleano, typeof booleano);

// null (intencionalmente vazio — typeof retorna "object" por compatibilidade histórica)
const nulo = null;
console.log('null:', nulo, typeof nulo);

// undefined (variável declarada sem valor)
let underfined;
console.log('undefined:', undefined, typeof undefined);

// number (inteiros, floats, NaN, Infinity)
const inteiro = 42;
const flutuante = 3.14;
console.log('number:', inteiro, flutuante, typeof inteiro);
console.log('NaN exemplo:', 0 / 0, typeof NaN);
console.log('Infinity exemplo:', 1 / 0, typeof Infinity);

// string
const texto = "olá, mundo";
console.log('string:', texto, typeof texto);

// symbol (identificadores únicos)
const sym = Symbol('id');
const sym2 = Symbol('id');
console.log('symbol:', sym, typeof sym, 'igual?', sym === sym2);

// object (objetos literais e arrays são do tipo "object")
const objeto = { nome: 'Ana', idade: 25 };
const array = [1, 2, 3];
console.log('object:', objeto, typeof objeto);
console.log('array (também object):', array, Array.isArray(array));

// ...existing code...

