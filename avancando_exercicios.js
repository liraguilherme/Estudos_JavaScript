//Exercicio de Manipulação de Array

//Crie uma lista de compra que é inicialmente vazia
// Adicione 5 itens a lista usando o push();
//Agora remove o primeiro item da lista usando o shift()
// Imprima a lista final no console

const compras = [];

compras.push("Pão", "Arroz", "Carne", "Queijo", "Chocolate");

compras.shift();

console.log(compras);

//Exercicio de Manipulação de Array

// Você tem um array de numeros: [3, 7, 14, 21, 29, 36, 42]
// Use a função find() para encontrar o primeiro número divisivel por 7
// e maior que 10

const numeros = [3, 7, 14, 21, 29, 36, 42];

const numero = numeros.find((num) => num > 10 && num % 7 === 0);

console.log(numero);

// Exercicio de Manipulação de String - split(), trim()

// Dada a string: "Bom dia, mundo!"
// Remova os espaços em branco no inicio e no final da string
// em seguida, divida a string em palavras

const frase = " Bom dia, mundo! "
const palavras = frase.trim().split(" ");

console.log(palavras);

console.log(frase);


// Exercicio de Manipulação de String - startsWith(), endsWith()

//Dada a String: " O rato roeu a roupa do rei de Roma"
/* Verifique se a string começa com a palavra "O" e termina
com a palavra Roma */

const frase2 = "O rato roeu a roupa do rei de Roma"
console.log(frase2.startsWith("O"));
console.log(frase2.endsWith("Roma"))