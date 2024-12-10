//seleção de elementos HTML
const nomePokemon= document.querySelector('.nome_pokemon'); //nome do pokémon
const numeroPokemon= document.querySelector('.numero_pokemon'); //número do pokémon
const imagemPokemon= document.querySelector('.imagem_pokemon'); //imagem do pokémon

const formulario= document.querySelector('.formulario'); //Formulário de busca
const campoBusca= document.querySelector('.campo_busca'); //campo de busca
const botaoAnterior= document.querySelector('.botao_anterior'); //botão anterior
const botaoProximo= document.querySelector('.botao_proximo'); //botão próximo


let pokemonAtual = 1; //Número do pokemon inicial

//Função para buscar os dados do pokémon na API
async function  buscarPokemon(pokemon) {
    /*Para pegar os dados, precisamos encontrar o 'arquivo' onde os pokémons estão*/
    const respostaAPI= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    /*Se a resposta for bem sucedida (ou seja, staus 200)*/
    if(respostaAPI.status === 200){
        /* Aqui, se o pokémon foi encontrado,os dados dele são armazenados em um arquivo chamado JSON */

        /*
        const dadosPokemon= {
        "nome": "Pikachu",
        "numero": "25",
        "habilidade": "Choque de trovão",
        "tipos": ["eletrico"]
        };
    */
   const dados= await respostaAPI.json();
   return dados;
    }
}


/*Função para renderizar os dados do pokémons*/
async function exibirPokemon(pokemon) {
    //Mostra "Carregando..." enquanto os dados são buscados
    nomePokemon.innerHTML = 'Carregando...';
    numeroPokemon.innerHTML = '';

    //Buscando dados do pokémon
    const dados= await buscarPokemon(pokemon);

    //Verifica se os dados foram encontrados
    if(dados){
        imagemPokemon.style.display = 'block';
        nomePokemon.innerHTML = dados.name; //exibe o numero do pokémon
        numeroPokemon.innerHTML= dados.id; //exibe o número dos pokémon
        imagemPokemon.src = dados.sprites.versions['generation-v']['black-white'].animated.front_default;

        campoBusca.value = ''; //Limpa o campo de busca
        pokemonAtual = dados.id; //Atualiza o pokémon atual
    }else{
        //Exibe mensagem de erro se o pokémon não for encontrado
        imagemPokemon.style.display = 'none';
        nomePokemon.innerHTML = 'Não encontrado :c';
        numeroPokemon.innerHTML = '';
    }
}


//Evento de submissão do formulário para buscar o Pokémon
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    exibirPokemon(campoBusca.value.toLowerCase());
});

//Evento para mostrar o pokémon anterior
botaoAnterior.addEventListener('click', function(){
    if (pokemonAtual > 1) {
        pokemonAtual -= 1;
        exibirPokemon(pokemonAtual);
    }
});


//Evento para mostrar o próximo pokémon
botaoProximo.addEventListener('click', function(){
    pokemonAtual+= 1;
    exibirPokemon(pokemonAtual);
});

//Exibe o pokémon inicial ao carregar a página
exibirPokemon(pokemonAtual);