// ES6+ => versão do javascript

// let e const
/* let pode mudar e const vai ser mais usada pois queremos que o codigo não mude*/ 

let n = 10;
n = 20;

const x = 15;

function testeVar() {
    var x = 1;
    if(true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}



function testeLet() {
    let x = 1;
    if(true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

testeVar();
testeLet();

// arrow function ======================================
const soma = (a, b) => a + b;

console.log(soma(3, 5)); 

// outro exemplo 

const quadrado = (numero) => numero * numero;

console.log(quadrado(4));

// outro exemplo

const cumprimento = (nome) => {
    const mensagem = `Olá, ${nome}!`;
    return mensagem
}

console.log(cumprimento("Guilherme"));

// Template literals ======================================
/* Usamos para colocar variaveis dentro de uma string,
usado no exemplo acima */

const nome = "Maria";
const idade = 22;

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);


// Destructuring -> desestruturação ======================================

/* desmenbra as variaveis*/

const pessoa = {nome: "João", idade: 40, profissao: "Programador" };

const {nome:nome2, idade:idade2, profissao } = pessoa;

console.log(nome2, profissao);

// exemplos com numeros

const numeros = [1, 2, 3, 4]

const [primeiro, segundo, terceiro] = numeros

console.log(primeiro, segundo, terceiro)

// spread operator => espalhamento ======================================
/* Função com argumentos inderteminados */ 

const array1 = [1, 2, 3]
const array2 = [...array1, 4, 5, 6]

console.log(array2);

// outro exemplo

const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0)

console.log(soma2(1, 2, 3, 4, 5, 6, 7))

// default parameters ======================================

function saudacao(nome = "visitante") { //o visitante é caso não passe nenhum valor vai ser a resposta padrão
      console.log(`Olá, ${nome}`);
}

saudacao();
saudacao("Guilherme");

// object literals enhancements ======================================
// {nome: "Guilherme"}
// formando um objeto (diferente de desestruturar) exemplo:

const nomeNovo = "Felipe"
const idadeNova = 24;

const pessoaNova = {nome:nomeNovo, idade:idadeNova};

console.log(pessoaNova);

// Metodos aos objetos, objeto com funções, exemplo
const saudacaoObject = {
    dizerOi(){
        console.log("Oi");
    }
}

saudacaoObject.dizerOi();

// Classes e Heranças ======================================

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }

    falar(){
        console.log(`Olá pessoal, meu nome é ${this.nome}`);
    }
}

const joao = new Pessoa("João", 34)
console.log(joao);
joao.falar();

// outro metodo melhor que o object literal
const pedro = new Pessoa("Pedro", 21);

// Heranças - classe que herda propriedades de outra classe

class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade) // Super para mandar pro objeto Pai
        this.salario = salario;
    }

    falarFuncionario() {
        super.falar() //invocando metodo da classe pai
        console.log(`Eu ganho ${this.salario}`);
    }
}

const mario = new Funcionario("Mario", 44, 3200);
console.log(mario);
mario.falar();
mario.falarFuncionario();



