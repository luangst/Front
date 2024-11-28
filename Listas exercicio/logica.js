// Selecionar elementos do DOM
const inputFilme = document.getElementById('itemInputFilme');
const inputSerie = document.getElementById('itemInputSerie');
const inputAnime = document.getElementById('itemInputAnime');

const addFilmeButton = document.getElementById('addItemFilme');
const addSerieButton = document.getElementById('addItemSerie');
const addAnimeButton = document.getElementById('addItemAnime');

const itemFilmeList = document.getElementById('itemListFilme');
const itemSerieList = document.getElementById('itemListSerie');
const itemAnimeList = document.getElementById('itemListAnime');


// Função para adicionar um item
function addItem(input, lista) {
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
    lista.appendChild(li);

    // Limpar o campo de entrada
    input.value = '';
}

// Função para remover um item
function removeItem(event, list) {
    if (event.target.tagName === 'BUTTON') {
        const li = event.target.parentElement;

        list.removeChild(li);
    }
}

// Adicionar evento ao botão "Adicionar"
addFilmeButton.addEventListener('click', () => addItem(inputFilme, itemListFilme));//aq fica o 'onclick' que não tem la no HTML
addSerieButton.addEventListener('click', () => addItem(inputSerie, itemListSerie));
addAnimeButton.addEventListener('click', () => addItem(inputAnime, itemListAnime));

// Delegação de eventos para remover itens
itemFilmeList.addEventListener('click', (event) => removeItem(event, itemListFilme));
itemSerieList.addEventListener('click', (event) => removeItem(event, itemListSerie));
itemAnimeList.addEventListener('click', (event) => removeItem(event, itemListAnime));