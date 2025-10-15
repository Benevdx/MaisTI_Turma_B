function adicionarParagrafo() {
    
    // Passo 1: CRIAR o novo elemento na memória
    // A função document.createElement() cria a tag que especificamos.
    const novoParagrafo = document.createElement('p');

    // Passo 2: CONFIGURAR o elemento
    // Adicionamos conteúdo, classes, ou qualquer outro atributo.
    novoParagrafo.textContent = 'Este parágrafo foi adicionado dinamicamente com JavaScript!';
    novoParagrafo.style.color = 'blue'; // Podemos até adicionar estilo!

    // Passo 3: ANEXAR o novo elemento à página
    // document.body é um atalho para selecionar a tag <body>.
    // O método .appendChild() insere o novo elemento como o último filho do elemento selecionado.
    document.body.appendChild(novoParagrafo);
}

adicionarParagrafo();