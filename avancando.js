// Avançando em JavaScript

// Manipulação de arrays

const frutas = ["Maçã", "Laranja"];

frutas.unshift("Acerola"); //Adiociona no começo

console.log(frutas);

frutas.shift(); //Remove

console.log(frutas); 

// map, filter, reduce -> arrow function
const numeros = [1, 2, 3, 4, 5, 6];

// find =>  retorna o primeiro elemento do critério
const numeroPar = numeros.find((num) => num % 2 === 0);

console.log(numeroPar);

 // filter => retorna  todos os elementos que batem o criterio
const numerosPares = numeros.filter((num) => num % 2 === 0);

console.log(numerosPares);

// Manipulaçao de Strings
const frase = " Olá, mundo!  ";

const palavras = frase.trim().split(" "); // remove os espaços dos lados

console.log(frase)
console.log(palavras);

const frase2 = "JavaScript é incrivel !"

console.log(frase2.startsWith("Java")); //true pois tem esses caracteres no inicio da  frase2
console.log(frase2.endsWith("!")); // true pois termina com exclamação

// Exceções e tratamentos de erros
/* const idade = 15;

 if(idade < 18){
    throw new Error("Você deve ter pelo menos 18 anos!");
  
}*/

try { //tratamento de erro
    const idade = 15;
if(idade < 12){
    throw new Error("Você deve ter pelo menos 18 anos!");
  
}

} catch(error){
console.log(error.message);
}

console.log("Continuando o programa...");

// Callback => função que vai ser executada em outra função

// function cumprimentar(nome, callback){
//     console.log("Olá, " + nome);
//     callback();
// }

// function mostrarSaudacao(){
//  console.log("Como você está");
// }

// cumprimentar("Guilherme", mostrarSaudacao);

// cumprimentar("Naria", function () {
//     console.log("Tá tudo bem")
// });

// // settimeout => depois de um tempo executa algo com delay , uma vez
// function mostrarMensagem() {
// console.log("Essa mensagem será exibida após 3 segundos");
// } 

// // 1000ms = 1s
// setTimeout(mostrarMensagem, 3000);

// setTimeout(function() {
//     console.log("Oi")
// }, 1000);


// Promises - promete que o codigo vai executar após alguma coisa
const promessa = new Promise((resolve, reject) => {
    
    const condicao = false;

    if(condicao) {
        resolve("A condição é verdadeira!");
    } else {
        reject("A condição é falsa!");
    }
});

promessa  
  .then((mensagem) => {
    console.log(mensagem);
})
 .catch((erro) => {
     
    console.log(erro)

});

// Usa promise em ibliotecas feitas que são "promise based"
// promisse em mais de uma resposta
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, "testando");
});

Promise.all([promise1, promise2]).then((valores) =>
console.log(valores));

// ==============================================

// Async Await
/*Não depende de ser executada para as proximas linhas 
serem executadas*/

async function obterValor() {
     
    const promessa = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Valor obtido"), 2000);
    });

    const valor = await promessa; /*await espera o codigo acima chegar
                                   para execurar o codigo abaixo */

    console.log(valor);
    
}

obterValor();

async function obterValorComErro() {
try {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => reject("Valor com erro"), 2000);
      });
  
      const valor = await promessa; /*await espera o codigo acima chegar
                                     para execurar o codigo abaixo */
  
      console.log(valor);
    
     } catch (error) {
        console.log(error);
    }
}

obterValorComErro();

// JSON (JavaScript Object Notation)
// js = {nome: "teste"} => json = {"nome": "teste"}
// Padroniza a comunicação
// front-end e back-end em uma linguagem só
//criando json
const objeto = {nome: "João", idade: 30}

const jsonString = JSON.stringify(objeto);

console.log(jsonString);
console.log(typeof jsonString);

const json = '{ "nome": "João", "idade": 30}';

/*Convertendo Json*/
const objeto2 = JSON.parse(json);

console.log(objeto2);


