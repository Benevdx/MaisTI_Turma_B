// Seleciona os elementos do HTML com os quais vamos interagir
const botaoEmbaralhar = document.getElementById('btnEmbaralhar');
const botaoComprar = document.getElementById('btnComprar');
const areaDaCarta = document.getElementById('areaDaCarta');

// Variável para armazenar o ID do baralho que a API nos dará
let deckId;

// --- Função para a primeira query: Embaralhar o baralho ---
const embaralharBaralho = () => {
    console.log("Fazendo uma requisição para embaralhar um novo baralho...");

    // A função fetch() inicia a requisição para a URL da API.
    // Ela retorna uma "Promessa" (Promise) de que uma resposta chegará.
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(resposta => {
            // O primeiro .then() recebe a resposta HTTP.
            // Precisamos convertê-la para o formato JSON para poder usar os dados.
            return resposta.json();
        })
        .then(dados => {
            // O segundo .then() recebe os dados já no formato JSON.
            console.log("Resposta da API recebida:", dados);

            // Guardamos o ID do baralho para usar na próxima requisição
            deckId = dados.deck_id;
            console.log("Baralho criado com o ID:", deckId);

            // Habilita o botão de comprar carta, pois agora temos um baralho
            botaoComprar.disabled = false;
            
            areaDaCarta.innerHTML = '<p>Baralho embaralhado! Pronto para comprar uma carta.</p>';
        })
        .catch(erro => {
            // O .catch() é executado se houver algum erro na requisição
            console.error("Falha na requisição:", erro);
        });
};

// --- Função para a segunda query: Comprar uma carta ---
const comprarCarta = async () => {
    console.log(`Fazendo requisição para comprar uma carta do baralho ${deckId}...`);

    // Usando async/await, uma sintaxe mais moderna para lidar com Promises.
    try {
        const resposta = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        const dados = await resposta.json();
        
        console.log("Carta comprada:", dados);

        // Pega a primeira carta do array de 'cards' retornado pela API
        const carta = dados.cards[0];

        // Manipula o DOM para exibir a imagem da carta na tela
        areaDaCarta.innerHTML = `<img src="${carta.image}" alt="${carta.value} of ${carta.suit}">`;

    } catch (erro) {
        console.error("Erro ao comprar a carta:", erro);
        areaDaCarta.innerHTML = '<p>Erro ao buscar a carta. Tente novamente.</p>';
    }
};

// Associa as funções aos eventos de clique dos botões
botaoEmbaralhar.addEventListener('click', embaralharBaralho);
botaoComprar.addEventListener('click', comprarCarta);