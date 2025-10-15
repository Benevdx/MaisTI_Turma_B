document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o primeiro botão e o título
    const meuBotao1 = document.getElementById('botao1');
    const titulo = document.getElementById('tituloPrincipal');

    // 1. DECLARAÇÃO DE FUNÇÃO
    function mudarTexto() {
        // Modifica o conteúdo de texto do H1
        titulo.textContent = 'Texto alterado com sucesso!';
    }

    // Associa a função ao evento de clique do botão
    meuBotao1.addEventListener('click', mudarTexto);

    // Seleciona o segundo botão
    const meuBotao2 = document.getElementById('botao2');
    // 2. EXPRESSÃO DE FUNÇÃO
    const mudarCor = function() {
        // Modifica o estilo CSS do H1
        titulo.style.color = 'blue';
    };

    // Associa a função ao evento de clique
    meuBotao2.addEventListener('click', mudarCor);

    // Seleciona o terceiro botão
    const meuBotao3 = document.getElementById('botao3');
    // 3. ARROW FUNCTION
    const esconderTitulo = () => {
        // Modifica o estilo para esconder o elemento
        titulo.style.display = 'none';
    };

    // Associa a função ao evento de clique
    meuBotao3.addEventListener('click', esconderTitulo);

    const meuBotao4 = document.getElementById('botao4');
    const mostrarTitulo = () => {
        titulo.style.display = '';
    }
    meuBotao4.addEventListener('click', mostrarTitulo);

    const meuBotao5 = document.getElementById('botao5');
    const alternar = () => {
        titulo.classList.toggle('destaque');
    }
    meuBotao5.addEventListener('click', alternar);

    const meuBotao6 = document.getElementById('botao6');
    const adicionarParagrafo = () => {
        const novoParagrafo = document.createElement('p');
        const minhaDiv = document.getElementById('conteiner');
        novoParagrafo.textContent = 'Novo Parágrafo!';
        minhaDiv.appendChild(novoParagrafo);
    }
    meuBotao6.addEventListener('click', adicionarParagrafo);

    const meuBotao7 = document.getElementById('botao7');
    const mostrarTexto = () => {
        const valorTexto = document.getElementById('campoTexto').value;
        const paragrafoDiv2 = document.getElementById('exibirTexto');
        paragrafoDiv2.textContent = valorTexto;
    }

    meuBotao7.addEventListener('click', mostrarTexto);
});
