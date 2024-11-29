/* 1
function idP(){
 let divImpressao = document.getElementById('impressao');
 let h1 = divImpressao.querySelector('#titulo');
 let p= divImpressao.querySelector('p');

 console.log(divImpressao)
 console.log(h1)
 console.log(p)
}*/

/* 2
function botao(){
     document.getElementById("botao").innerHTML = "Bem Vindo ao meu site";
    let alterarCor= document.querySelector('p');
    
    alterarCor.style.backgroundColor="yellow";
    alterarCor.style.color="blue";
    return
}*/

/* 3
// Selecionar elementos do DOM
const input = document.getElementById('itemInput');
const addButton = document.getElementById('addItem');
const itemList = document.getElementById('itemList');

// Função para adicionar um item
function addItem() {
  const itemText = input.value.trim();
  if (itemText === '') {
    alert('Por favor, digite algo!');
    return;
  }

  // Criar o elemento <li> e botão
  const li = document.createElement('li');
  li.textContent = itemText;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';
  removeButton.classList.add('remove-button');

  // Adicionar o botão ao <li>
  li.appendChild(removeButton);

  // Adicionar o <li> à lista
  itemList.appendChild(li);

  // Limpar o campo de entrada
  input.value = '';
}

// Função para remover um item
function removeItem(event) {
  if (event.target.tagName === 'BUTTON') {
    const li = event.target.parentElement;
    itemList.removeChild(li);
  }
}

// Adicionar evento ao botão "Adicionar"
addButton.addEventListener('click', addItem);//aq fica o 'onclick' que não tem la na frente

// Delegação de eventos para remover itens
itemList.addEventListener('click', removeItem);*/

/* 4
let contadorDeListas = 0; // Variável para contar quantas listas já foram criadas
// Função para criar uma nova lista
function criarLista() {
    contadorDeListas++; // Incrementa o contador de listas
    const container = document.getElementById('listas-container');
    
    // Criar o elemento <ul>
    const ul = document.createElement('ul');
    ul.id = contadorDeListas;  // Definir o ID da <ul> de acordo com o contador
    
    // Adicionar a quantidade de <li> correspondente ao ID
    for (let j = 1; j <= contadorDeListas; j++) {
        const li = document.createElement('li');
        li.textContent = `Item ${j} da lista ${contadorDeListas}`;
        ul.appendChild(li); // Adicionar o <li> à <ul>
    }
    
    // Adicionar o <ul> ao contêiner principal
    container.appendChild(ul);
}

// Adicionar um ouvinte de evento para o botão "Adicionar Lista"
document.getElementById('adicionar-lista').addEventListener('click', criarLista);*/

/* 5
function exibirAlerta(){
alert("Parabéns, você clicou!")
}

function alterarTextoParagrafo() {
  const paragrafo = document.getElementById('paragrafo');
  paragrafo.textContent = "Texto alterado!";
}

document.getElementById('alerta').addEventListener('click', exibirAlerta);
document.getElementById('altera').addEventListener('click', alterarTextoParagrafo);*/

/* 6
// Função para alternar o tema
function alternarTema() {
  const body = document.body;  // Acessa o <body> da página
  body.classList.toggle('claro');  // Alterna entre as classes 'claro' e 'escuro'
  body.classList.toggle('escuro'); // Alterna entre as classes 'claro' e 'escuro'
}

// Adicionando evento de clique ao botão
document.getElementById('alternar-tema').addEventListener('click', alternarTema);*/

/* 7
// Selecionar elementos do DOM
const input = document.getElementById('itemInput');
const addButton = document.getElementById('addItem');
const itemList = document.getElementById('itemList');

// Função para adicionar um item
function addItem() {
  const itemText = input.value.trim();
  if (itemText === '') {
    alert('Por favor, digite algo!');
    return;
  }

  // Criar o elemento <li> e botão
  const li = document.createElement('li');
  li.textContent = itemText;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';
  removeButton.classList.add('remove-button');

  // Adicionar o botão ao <li>
  li.appendChild(removeButton);

  // Adicionar o <li> à lista
  itemList.appendChild(li);

  // Limpar o campo de entrada
  input.value = '';
}

// Função para remover um item
function removeItem(event) {
  if (event.target.tagName === 'BUTTON') {
    const li = event.target.parentElement;
    itemList.removeChild(li);
  }
}

// Adicionar evento ao botão "Adicionar"
addButton.addEventListener('click', addItem);//aq fica o 'onclick' que não tem la na frente

// Delegação de eventos para remover itens
itemList.addEventListener('click', removeItem);*/

/* 8
// Função para mudar a cor de todos os parágrafos para vermelho
function mudarCorParagrafos() {
  const paragrafos = document.querySelectorAll("p");
  paragrafos.forEach(paragrafo => {
      paragrafo.style.color = "red";
  });
}

// Função para alternar a visibilidade das divs
function alternarDivs() {
  const divs = document.querySelectorAll(".div-container");
  divs.forEach(div => {
      div.classList.toggle("hidden");
  });
}*/

/* 9
// Seleção dos elementos do carrossel
const images = document.querySelectorAll(".carrossel-img");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

let currentIndex = 0;

// Função para mostrar a imagem no índice atual
function showImage(index) {
    // Esconde todas as imagens
    images.forEach((img, i) => {
        img.style.display = "none";
    });

    // Exibe a imagem atual
    images[index].style.display = "block";
}

// Função para navegar para a imagem anterior
function showPreviousImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

// Função para navegar para a próxima imagem
function showNextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

// Inicializa o carrossel mostrando a primeira imagem
showImage(currentIndex);

// Adiciona os eventos aos botões de navegação
prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);*/