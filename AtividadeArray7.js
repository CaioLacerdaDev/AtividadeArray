//indexOf() retorna o primeiro índice em que um elemento específico 
//pode ser encontrado no array, ou -1 se o elemento não estiver 
//presente.

let numeros = [10, 20, 30, 40, 50];
let indicetrinta = numeros.indexOf(30);
// indicetrinta é igual a 2
console.log (indicetrinta)

let frutas = ['maçã', 'banana', 'laranja'];
let indiceerrado = frutas.indexOf('pera');
// indiceerrado é igual a -1, pois 'pera' não está presente no array
console.log (indiceerrado)