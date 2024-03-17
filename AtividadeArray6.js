//some() verifica se pelo menos um elemento de um array satisfaz 
//a condição especificada por uma função de teste. 
//retorna true se pelo menos um elemento passar no teste ou 
//false caso contrário.

let numeros = [2, 4, 6, 9, 10];
let impar = numeros.some(numero => numero % 2 !== 0);
// impar é igual a true, pois tem 1 impar
console.log(impar)

let idades = [15, 20, 17, 25];
let maiorIdade = idades.some(idade => idade >= 18);
// maiorIdade é igual a true, pois tem 1 maior de idade
console.log(maiorIdade)