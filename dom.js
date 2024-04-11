// DOM - Document Object Model = acessar elementos, mudar css, aparecer pop-up

// Selecionar elementos ====================
const elementoPorId = document.getElementById("meuId");

console.log(elementoPorId);

/* Metodo mais atual */
const elementoPorId2 = document.querySelector("#meuId")
console.log(elementoPorId2);

const elementPorClasse2 = document.querySelector(".minhaClasse");
console.log(elementPorClasse2)

// Manipulano conteúdo de texto ====================
const element = document.querySelector("#meuId")

console.log(element.textContent);

setTimeout(() => {
    element.textContent = "Mudei de texto"
    
}, 1000); 

// trabalhando com atributos ====================
const link = document.querySelector("a");
console.log(link);
/* alterando o link do atributo */
link.setAttribute("href", "https://horadecodar.com.br/cursos");

/* mostrar valor do atributo */
console.log(link.getAttribute("href"));

/* verificar se o atributo existe */
console.log(link.hasAttribute("target"));

/*remover atribututo */
link.removeAttribute("target");

//Manipulação de classes do CSS ====================

const elemento = document.querySelector("#meuId");

//adicionando uma classe
element.classList.add("novaClasse");

//removendo uma classe
element.classList.remove("minhaClasse")

//Se a classe existe ele remove e se não existe ele remove
element.classList.toggle("outraClasse")

// Manipular o CSS ====================
const elemento3 = document.querySelector("#meuId");
elemento3.style.color = "blue"
elemento3.style.backgroundColor = "red"

// Navegação entre nós ====================
/* elementos estão organizados em pais e filhos e cada
um deles é um nó*/ 

const element4 = document.querySelector("#meuInput");

//como pega o elemento pai
const pai = element4.parentNode;
console.log(pai);

//Obter o primeiro filho
const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);

//Obter o ultimo filho
const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);

// Manipulação de estrutura do DOM ====================
const novoElemento = document.createElement("div");
console.log(novoElemento);
novoElemento.textContent = "Minha div de JavaScript";
console.log(novoElemento);

//adicionando no html
document.body.appendChild(novoElemento); //coloca como ultimo

document.body.insertBefore(novoElemento, pai);

//remover elemento
document.body.removeChild(elementoPorId)

// Eventos ====================

//click 
const botao = document.querySelector("button");
botao.addEventListener("click",function(){
    console.log("botão clicado!")
})

// mouse / passar por cima com o mouse
 
const elemento5 = document.querySelector("#meuFormulario")
elemento5.addEventListener("mouseover", function(){
    console.log("O mouse passou aqui!")
})

// teclado

const campoInput = document.querySelector("#meuInput");

campoInput.addEventListener("keydown", function(){
    console.log("Tecla pressionada")
});

// formulario
const form = document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault(); //event não deixa o comportamento padrão acontecer como nesse exemplo não deixa carregar a pagina
    console.log("Formulario enviado");
})

//propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", function(){
    console.log("Clique capturado por pai")
})

document.querySelector("#elementoFilho").addEventListener("click", function(event){
   /* event.stopPropagation(); */ /*Faz com que o elemento filho execute apenas o evento dele,
     outros elementos possam ta desencadeando novos eventos e isso vai ser um problema,
      e isso para a propagação e executa só um  */ 
    console.log("Elemento filho");
})

document.querySelector("#meuLink").addEventListener("click", function(event){
  event.preventDefault(); //para não executar a mudança de pagina

  console.log("clicou no link")
})

// delegação de eventos
document.querySelector("#elementoPai").addEventListener("click", function(){
    if(event.target.matches(".classeDosFilhos")){
        console.log("Evento delegado para o filho");
    }
})