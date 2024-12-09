//Seleciona os elementos
const descricoes= document.getElementsByClassName("descricao")//retorna um array que vai ter o elemento 0 e 1, tem que sempre colocar indice no getElementsByClassName
const botaoMudar= document.getElementById("botao-mudar")
const botaoAdicionar= document.getElementById("botao-adicionar")
const botaoRemover= document.getElementById("botao-remover")
const paragrafo = document.getElementsByClassName(".descricao")
const botaoRemoveClasse = document.getElementById("botao-remover-classe")


botaoMudar.addEventListener("click", function(){
    descricoes[0].textContent= "paragrafo modificado"   
});

//nao add o p com classe descricao
botaoAdicionar.addEventListener("click", function(){
  const novoParagrafo = document.createElement("p")
  novoParagrafo.className = "novoP"
  novoParagrafo.innerHTML = "Novo paragrafo criado"
  document.body.appendChild(novoParagrafo)//appendChild para criar um novo elemento no HTML
});

botaoRemover.addEventListener("click", function(){
   descricoes[0].remove()
})

botaoRemoveClasse.addEventListener("click", function(){
    const novoP = document.getElementsByClassName("novoP")
    novoP[0].classList.remove("novoP")
})


/*
setTimeout(function(){
    console.log('executado apos 2 segundos');
}, 2000);

setInterval(function(){
    console.log('executado apos 2 segundos');
}, 2000);


let eventoTempo= setTimeout(function(){
    console.log('executado apos 2 segundos');
}, 2000);
clearTimeout(eventoTempo)


let eventoIntervalo = setInterval(function(){
    console.log('executado apos 2 segundos');
}, 2000);
clearInterval(eventoIntervalo)
*/