
let frutas = ["maçã", "banana", "laranja"];
// Adiciona "uva" e "pera" após a "banana"
frutas.splice(2, 0, "uva", "pera");
// Agora, frutas contém ['maçã', 'banana', 'uva', 'pera', 'laranja']
console.log(frutas)

let frutasremove = ["maçã", "banana", "laranja"];
// Remove "banana" e "laranja"
frutasremove.splice(1, 2);
// Agora, frutas contém ['maçã']
console.log(frutasremove)

const numeros = [1, 2, 3, 4, 5];
// Substitui o número na posição 2 pelo número 6
numeros.splice(2, 1, 6);
// Agora, numeros contém [1, 2, 6, 4, 5]
console.log(numeros)


