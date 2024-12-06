//Primeiro, criamos uma váriavel e armazenamos o elemento que queremos dentro dela.
 const botao = document.getElementById("btn")
const botao2 = document.getElementById("btn2")

//Depois, criamos a função que faz o que queremos que o botão execute.
function imprimeFrase(){
    alert("click")
}

function trocaCor(){
    if(botao.style.backgroundColor === "violet"){
       botao.style.backgroundColor = "yellow"
    }else{
       botao.style.backgroundColor = "violet"
    }
}

//Por último, adicionamos um evento que vai executar a função quando alguma ação ocorrer.O primeiro parâmetro é a ação, o segundo parâmetro é a propria função que queremos executar.

 botao.addEventListener("click", imprimeFrase);
botao2.addEventListener("click", trocaCor)
