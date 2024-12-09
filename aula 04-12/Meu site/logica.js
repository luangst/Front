//Seleciona o botao e o menu de dropdown
const button= document.getElementById("dropdown-button");//da para imprimir o HTML com console.log(document)
const menu= document.getElementById("dropdown-menu");

//Adiciona um evento de click ao botao
button.addEventListener("click", function(){
    //Verifica se o menu esta visivel
    if(menu.style.display === "none"){
        //mostra menu
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
    } else {
        //oculta menu
        menu.style.display = "none"
    }
});
