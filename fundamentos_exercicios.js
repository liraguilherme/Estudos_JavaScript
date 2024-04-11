//Exercicios de fundamentos
//Exercicio 1: Olá, Mundo!
//Crie um script que imprima "Olá, Mundo!" no console

console.log("Olá mundo");   

//Exercicio 2: Conversão de tipos
// Dado o valor de uma String "1234", convertao em um numero e exiba o tipo da variavel no console

const numero = "1234";
const numero_convertido = Number(numero);
console.log(numero_convertido);
console.log(typeof numero_convertido)

//Exercicio 3: Manipulação de String
//Dado uma string "JavaScript é incrivel", escreva um codigo que conte quantos caracteres a string tem e quantas palavras existem na frase

const frase = "JavaScript é incrivel";
const numeroDeCaracteres = frase.length;
const numeroDePalavras = frase.split(" ").length;


console.log(`O numero de caracteres é: ${numeroDeCaracteres}`);
console.log(`O numero de palavras é: ${numeroDePalavras}`);


// Exercicio 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console

const nomes = ["Guilherme", "Tupac", "Biggie", "Kodesh", "Shakira"];
for(let i = 0; i < nomes.length; i++){

    console.log(nomes[i]);
}

//Exercicio 5: Funções, Strings e Math
//Crie uma função que aceita uma String representando um horario no formato 24 horas("14:30")
//A função deve retornar uma string que converta o horario para o formato de 12horas("2:30PM")
//Use o objeto Math para auxiliar nesta conversão
// Certifique de que sua função lida corretamente com horario na meia-noite e no meio-dia

function converterHorario(horario24){
    // 14:20 => hoa = 14, minuto = 20 => split(":")
    //const hora = horario24.split(":")[0]
    //const minuto = horario24.split(":")[1]

    const [hora, minuto] = horario24.split(":");

    // 15 / 12 = 3, 23 % 12 = 11

    //Flasy 12 |% 12 = 0
    const hora12 = hora % 12;

    let periodo = "AM"

    if(hora > 12){
        periodo = "PM"
    }

    console.log(`${hora12}:${minuto} ${periodo}`);
}

converterHorario("15:16");

converterHorario("09:46");

converterHorario("21:12");

