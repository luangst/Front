//pega elemento com id formulario e o armazena em uam váriavel
const form = document.getElementById('formulario')
//pega elemento com id mensagem e o armazena em uma váriavel
const msg = document.getElementById("mensagem")//poderia colocar o nome da msg para campo texto


//adiciona um evento que acontece quando clicamos no botao 'submit', ou seja, quando enviamos o formulário
form.addEventListener('submit', function(event){
    event.preventDefault(); //Evita que seja recarregada a pagina
    alert('Formulário enviado')
})


//É no campo de TEXTO
const campoTexto= document.getElementById('mensagem')
//Evento de foco no campo de texto
campoTexto.addEventListener('focus', function(){
    //troque a cor do texto para amarelo
    campoTexto.style.backgroundColor = 'yellow'
})
//tava certo :)

//Evento de blur no campo de texto (Fica branco quando perde o foco)
campoTexto.addEventListener('blur', function(){
    campoTexto.style.backgroundColor = 'white'
})


//Evento de mudança no campo de texto
campoTexto.addEventListener('change',function(){
    console.log('Valor alterado para:' + campoTexto.value);
})
//Valor sera impresso quando for clicado em algum lugar


//Evento de rolagem da página
window.addEventListener('scroll',function(){
    console.log("A página foi rolada. Posição de scroll:" + this.window.scrollY)
})//Funciona, se tiver mais conteudo na pagina para ler