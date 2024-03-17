//slice() retorna uma cópia superficial de uma porção de um array
//em um novo array. Não altera o array original.

let numeros = [1, 2, 3, 4, 5];
let subArray = numeros.slice(1, 3); // cria uma cópia de [2, 3]
// subArray é igual a [2, 3]
console.log(subArray)

let letras = ["a", "b", "c", "d", "e"];
let subArrayLetras = letras.slice(2); // cria uma cópia de ['c', 'd', 'e']
// subArrayLetras é igual a ['c', 'd', 'e']
console.log(subArrayLetras)