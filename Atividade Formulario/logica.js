/*Javascript, mostrar os dado do formulário na tela*/

// Seleciona o formulário e a div para mostrar os dados
const formulario = document.getElementById('meuFormulario');
const divDados = document.getElementById('resultado');

// Função para capturar os dados do formulário
formulario.addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio do formulário (para não recarregar a página)

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const telefone= document.getElementById('telefone').value;
    const senha= document.getElementById('senha').value;

    // Imprime os dados no console (ou pode fazer outras ações)
    console.log(`Nome: ${nome}`);
    console.log(`Sobrenome: ${sobrenome}`);
    console.log(`Email: ${email}`);
    console.log(`Telefone: ${telefone}`);
    console.log(`Senha: ${senha}`)

    // Exibe os dados na página
    divDados.innerHTML = `<p>Nome: ${nome}</p><p>Sobrenome: ${sobrenome}</p><p>Email: ${email}</p><p>Telefone: ${telefone}</p><p>Senha: ${senha}</p>`;
});



//Delegacao de eventos
