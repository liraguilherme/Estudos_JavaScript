
//Fundamentos

/* Forma antiga de criar variaveis 
Exemplo: var nome = "valor" */

var minhaVariavel = "Olá, mundo!";

console.log(minhaVariavel);

//===============================================================================================

//Variaveis e tipos de dados
var meuNumero = 10;

console.log(meuNumero + 5);

console.log("10" + 5);

console.log(typeof meuNumero); //typeof emite um texto com o tipo de dado 

var booleano = true; 

console.log(typeof booleano);

var meuObjeto = {};
var meuArray = [];
var meuNull = null; //Tirar valor
var meuUndefined = undefined; //Variavel não tem valor

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);

//===============================================================================================

// novas formas de declarar variaveis
// let e const

let x = 10;  //Substitui o var
const y = 5; //valor não muda ao longo do codigo, //tentar usar o maximo

console.log(typeof x);

console.log(x, y);

// Operadores aritiméticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Operadores de comparação
console.log(x == y);
console.log(x != y);
console.log("5" == 5);
console.log("5" === 5); //Compara o tipo, usar mais
console.log("5" !== 5); //Verificar se o tipo e o valor são diferentes

//Operadores lógicos
// AND &&
// OR ||
console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);

console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 < 5);

// Conversão de tipos
const meuNumero2 = "123";

const meuNumeroConvertido = Number(meuNumero2);

console.log(meuNumeroConvertido);

// Estrutura de conndição - if, else, else if

const idade = 16;

if(idade < 13) {
console.log("Criança");
} else if (idade < 20) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}

if(true){
    console.log("Isso executa");
} else {
    console.log("Isso agora é executado!");
}

// Switch
const fruta = "Banana";

switch(fruta){
    case "Mamão":
        console.log("Banana é a fruta");
        break; //Não executa as outras
    case "Maça":
        console.log("Maça é a fruta");
        break;
    default:
        console.log("Fruta não encontrada!"); //Como se fosse o else
}

// Estruturas de repetição
// 1, 2, 3, 4, 5, 6... => dependendo de uma condição

// contador, condição de limite, incremento
for(let i = 0; i < 5; i = i + 1){
    console.log("O valor de i é: " + i);
}

// While
let k = 0;

while (k < 5) {
    console.log("O valor de k: " + k);
    k++;
}

// do while
let j = 0;

do {

    console.log("O valor de j é: " + j);
    j++;

} while(j < 5);

// Funções

//Salvar trecho de codigos para usar varias vezes
// exemplo: function nome (arg1, arg2) { corpo }
function cumprimentar(nome) {
    console.log("Olá! " + nome);
}
//Chamando a função exemplo = NomeDaFunção);
cumprimentar("Guilherme");

// escopo de variaveis

let cor = "azul";

function mostrarCor(){
    let cor = "verde";

    console.log(cor);
}

console.log(cor); //Variavel global

mostrarCor(); //Variavel local

//hoisting = içamento = usar a função antes da sua declaração
testeHoisting();

function testeHoisting(){
    console.log("Deu certo!");
}

// arrow function 
const testeArrow = () => console.log("Isso também é uma função.")

testeArrow();

// truthy e falsy
const minhaVariavel1 = ""; // falsy
const minhaVariavel2 = "Algum texto";

if(minhaVariavel1) {
    console.log(" É Verdadeiro!");
} else {
    console.log("É falso!");
}

if(minhaVariavel2) {
    console.log("É Verdadeiro! 2");
} else {
    console.log("É falso! 2");
}

// array, listas
const numeros = [1, 2, 3, 4, 5]

console.log(numeros);

console.log(numeros[0]);

console.log(numeros[2]);

// prototype => OBJETO -> objeto2
// Array => nossos arrays

numeros.push(6); // adiciona um elemento no array
console.log(numeros);

numeros.pop(); // remove um numero do array
console.log(numeros); 

// STRINGS

const minhaStringNova = "Olá, mundo!"

// concatenação = +
const minhaString3 = minhaStringNova + " Como você está? "
console.log(minhaString3);

//interpolação
const minhaString4 = `${minhaStringNova} Como você está?`;
console.log(minhaString4);

console.log(minhaString4.length) //Quantidade de caracteres
console.log(minhaString4[5]);
console.log(minhaString4.toUpperCase());

// Data e hora
const agora = Date();
console.log(agora);

const natal = new Date(2024, 11, 25);
console.log(natal)

//MATH
console.log(Math.PI);

console.log(Math.round(3.6));

console.log(Math.sqrt(16));

console.log(Math.pow(2,3)); 