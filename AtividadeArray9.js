//map() cria um novo array com os resultados da chamada de uma função
//para cada elemento do array.

const numeros = [1, 2, 3];
const duplicados = numeros.map(numero => numero * 2);
// duplicados é igual a [2, 4, 6]
console.log(duplicados)

const frutas = ["maçã", "banana", "laranja"];
const frutasexclamaçao = frutas.map(fruta => fruta + '!');
// frutasexclamaçao é igual a ['maçã!', 'banana!', 'laranja!']
console.log(frutasexclamaçao)
