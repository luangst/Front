//Altera texto clicando
const botao= document.getElementById('meuBotao')
const texto= document.getElementById('texto') 

function alteraTexto(){
    texto.innerText = "O texto foi alterado"
}
//o innerText ou textContent muda no texto
botao.addEventListener("click", alteraTexto)




//Altera texto passando o mouse por cima
   const botao2 = document.getElementById('btn2')
const meuParagrafo = document.getElementById('meuParagrafo')

// function alteraTexto2(){
//    if( meuParagrafo.textContent ===  "Passe o mouse aqui"){
//        meuParagrafo.textContent = "Você passou o mouse aqui"
//    }else{
//        meuParagrafo.textContent = "Passe o mouse aqui"
//    }
// }
// //Lembrar que este é o botao2
// botao2.addEventListener("mouseover", alteraTexto2)//Altera quando passa o mouse por cima do texto




//Altera ao passar e tirar o mouse por cima
function passeMouse(){
 meuParagrafo.textContent = "Você colocou o mouse aqui"
}

function tireMouse(){
    meuParagrafo.textContent = "Você tirou o mouse de cima"
}

botao2.addEventListener("mouseover", passeMouse)//Chama a funçao quando coloca o mouse por cima
botao2.addEventListener("mouseout", tireMouse)//Chama a funçao quando tira o mouse de cima




const botao3= document.getElementById("btn3")

function clickDuasVezes(){
    alert("Você clicou duas vezes")
}

botao3.addEventListener("dblclick", clickDuasVezes)//Comando dblclick para quando o usuario clicar 2 vezes




//Quando for clicada qualquer tecla na pagina sera mostrada no console
const paragrafo3= document.getElementById('paragrafo3')
/*function pressionaTecla(event){
    paragrafo3.innerText= 'Tecla precionada:' + event.key;
}
//Para 'somar' as teclas paragrafo3.innerText += event.key
document.addEventListener('keydown',pressionaTecla)*/

//Função anônima
document.addEventListener("keydown", function(event){
    paragrafo3.textContent= 'Tecla precionada:' + event.key;
})

