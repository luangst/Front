/*const sayHello= () => console.log('Hello!');//aero function

function execute(fn){
    fn();
}
execute(sayHello); //NÃO ESTA FUNCIONANDO
*/



/*function olaMundo(){
    let ola = document.getElementById('ola');

    ola.innerHTML="Olá Mundo";

    let newDiv = document.createElement('div');
    newDiv.textContent= "Seja bem vindo";

    newDiv.style.backgroundcolor= "black";
    newDiv.style.border= "1px solid brown";
    newDiv.style.margin= "10px";

    ola.appendChild(newDiv);
}*/


function createList(){
let body= document.querySelector("body");
console.log(body);

let newDiv= document.createElement('div');
console.log(newDiv);

let newUl= document.createElement('ul');
for(let i=1 ; i<= 4; i++){

let newLi= document.createElement('li');
newLi.textContent= `item ${i}`;
newUl.appendChild(newLi);
}

newDiv.appendChild(newUl)
body.appendChild(newDiv);
}