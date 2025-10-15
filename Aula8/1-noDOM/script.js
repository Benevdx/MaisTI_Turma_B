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