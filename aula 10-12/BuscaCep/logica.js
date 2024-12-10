async function buscarCep(){
    //pega elemento como ID 'cep' e armazena denro da variavel cep
    const cep= document.getElementById('cep').value;

    //Verifica se o CEP tem 8 caracteres (qualquer CEP tem que ter exatamente 8 números)

    if(cep.length !== 8) {
        alert('CEP inválido. Certifique-se de digitar 8 números.');
        return; //O return serve para parar a função, pois a última coisa que qualquer função faz é dar o retorno
    }

    //Fazendo a requisição para a API ViaCEP, ou seja, busca na API ViaCEP as informações do CEP digitado
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET' //Especificamos que a requisição é do tipo GET, ou seja , para Buscar dados
    });

    const data = await response.json(); //Espera a resposta ser convertida para JSON e armazena dentro da variável data

    //Verificamos se a API retornou erro (por exemplo, se digitamos um CEP que não existe ou num formato que o campo não aceita - com pontoe/ou barra)
    if(data.erro){
        alert('CEP não encontrado!');
    }else{
        //Exibindo os dados do site
        document.getElementById('logradouro').textContent = data.logradouro || 'Não disponivel';
        document.getElementById('bairro').textContent = data.bairro || 'Não disponivel';
        document.getElementById('cidade').textContent = data.localidade || 'Não disponivel';
        document.getElementById('estado').textContent = data.uf || 'Não disponivel';

        document.getElementById('resultado').style.display= "block";
    }
}
