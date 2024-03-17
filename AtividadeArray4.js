//join() une todos os elementos de um array em uma string, 
//separados por um separador especificado "-",",","!" ...

let frutas = ["maçã", "banana", "laranja"];
let esclamação = frutas.join("! ");
// esclamação é igual a "maçã! banana! laranja"
console.log (esclamação)

let numeros = [1, 2, 3, 4, 5];
let traço= numeros.join(" - ");
// traço é igual a "1 - 2 - 3 - 4 - 5"
console.log (traço)
