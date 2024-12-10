//seleciona o canvas pelo id e armazena na variável canvas
const canvas= document.getElementById("gameCanvas");

//Obtém o contexto 2D do canvas, que permite desenhar nele
const ctx= canvas.getContext("2D");

//Define o tamanho de cada quadrado(para a cobra e a comida)
const box=20;

//Inicializa a cobra como um array com um segmento na posicao (100,100)
let snake= [{ x: box*5, y: box*5}];

//Define a direçao inicial da cobra como right
let direction= "RIGHT";

//Gera a posicao inicial da comida aleatoriamente dentro do canvas
let food= {
    x: Math.floor(Math.random()*20) *box, //Coordenada x da comida, .floor arredonda o numero(numero inteiro)
    y: Math.floor(Math.random()*20) *box, //Coordenada y da comida
};

let pontos = 0;

let texto = document.getElementById("pontos");

let dificuldade = 200;

//Adiciona um ouvinte para eventos de tecla que chama a funcao changeDirection
document.addEventListener('keydown', changeDirection);

//Funcao que muda a direcao da cobra com base na tecla pressionada
function changeDirection(event){
//Verifica se a tecla pressionada é a seta esquerda e se a direcao nao é 'right'
if(event.keyCode === 37 && direction !== 'RIGHT') {direction = 'LEFT'};
//Verifica se a tecla pressionada é a seta para cima e se a direcao nao é 'down'
if(event.keyCode === 38 && direction !== 'DOWN') {direction = 'UP'};
//Verifica se a tecla pressionada é a seta direita e se a direcao nao é 'left'
if(event.keyCode === 39 && direction !== 'LEFT') {direction = 'RIGHT'};
//Verifica se a tecla pressionada é a seta para baixo e se a direcao nao é 'up'
if(event.keyCode === 40 && direction !== 'UP') {direction = 'DOWN'};
}


//Função que desenha todos os elementos do jogo
function draw(){
    //Define a cor de fundo do canvas
    ctx.fillStyle = '#000'; //fundo
    //desenha um retângulo preenchido com a cor que pedimos

   /* param1 = a coordenada x do canto superior esquerdo do retângulo.

    param2 = a coordenada y do canto superior esquerdo do retângulo.

    param3 = a largura do retângulo

    param4= a altura do retângulo
   */

    ctx.fillRect(0,0, canvas.width, canvas.height);

    //loop para desenhar cada segmento da cobra
    for(let i = 0; i< snake.length; i++) {
        //define cor do segmento
        if (i === 0){
            ctx.fillStyle = 'green';//cabeça
        } else {
            ctx.fillStyle = 'lightgreen';//resto do corpo
        }
   
   //desenha o segmento da cobra na posiçao (x,y)
   ctx.fillRect(snake[i].x, snake[i].y, box,box);

   //define a cor da borda do segmento
   ctx.strokeStyle = 'darkgreen'; //strokeStyle = estilo de borda

   //desenha a borda do segmento
   ctx.strokeRect(snake[i].x, snake[i].y, box,box);
    }

    //define a cor da comida como vermelha
    ctx.fillStyle = 'red';
    //desenha a comida na posicao gerada aleatoriamente
    ctx.fillRect(food.x, food.y, box,box);
    //define a cor da borda do segmento
    ctx.strokeStyle = 'white';//estilo de borda
    //desenha a borda do segmento
    ctx.strokeRect(food.x, food.y, box,box);


//captura a posicao atual da cabeca da cobra
let snakeX= snake[0].x; //pega a posicao horizontal da cabeca da cobra
let snakeY= snake[0].y; //pega a posicao vertical da cabeca da cobra

//atualiza a posiçao da cabeca da cobra com base na direçao
if(direction === 'LEFT'){
    snakeX -= box; //move para a esquerda
} else if (direction === 'UP'){
    snakeY -= box; //move para cima
} else if (direction === 'RIGHT'){
    snakeX += box; //move para a direita
}else if (direction === 'DOWN'){
    snakeY +=box; //move para baixo
}


//verifica se a cabeça da cobra esta na mesma posicao que a comida
if(snakeX === food.x && snakeY === food.y){
    pontos ++;

    texto.textContent = 'Pontuação:' + pontos;
    
    dificuldade -= 10;

    clearInterval(game);

    game = setInterval(draw, dificuldade);

    //gera uma nova posição aleatória para a comida
    food={
        x: Math.floor(Math.random() *20) * box,
        y: Math.floor(Math.random() *20) * box
    };
}else{
    //se a cobra nao comeu, remove o ultimo segmento (cauda)
    snake.pop()
}

//cria um novo objeto para a cabeça da cobra
const newHead= {x: snakeX, y: snakeY};
//adiciona a nova cabeça da cobra ao inicio do array
snake.unshift(newHead);


//verifica colisoes: com as bordas do canvas ou com ela mesma
if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)){
    //Para ojogo se houver uam colisao e exibe um alerta de Game Over
    clearInterval(game);
    alert('Game Over!');
}

}


function collision(head, array) {
    //loop para verificar se a nova cabeça coincide com qualquer segmento da cobra
    for(let i = 1; i < array.length; i++){
        //se colidir, retorna true
    if(head.x === array[i].x && head.y === array[i].y){
        return true;
    }
}

//se nao colidir, retorna false
return false;
}

//inicia o jogo chamando a funçao draw a cada 200 milissegundos
let game = setInterval(draw, dificuldade);
