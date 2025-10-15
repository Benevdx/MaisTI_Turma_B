// Importa os módulos essenciais do Node.js
const http = require('http');
const url = require('url'); // Módulo 'url' para analisar a URL da requisição
const fs = require('fs');

// Credenciais fixas para validação
const USUARIO_VALIDO = 'aluno@maisti.ufs.br';
const SENHA_VALIDA = 'secreta';

const servidor = http.createServer((req, res) => {
    // Analisa a URL da requisição para facilitar o acesso aos seus componentes
    console.log(`Requisição recebida: método-> ${req.method}; URL -> ${req.url}`);

    console.log(`Cabeçalho: ${req.headers}`);

    const reqHeadersJSON = JSON.stringify(req.headers, null, 2);
    console.log(`Cabeçalho em JSON: ${reqHeadersJSON}`);
    

    const reqUrl = url.parse(req.url, true);



     // ROTA PRINCIPAL: Entrega o formulário de login
    if (req.method === 'GET' && reqUrl.pathname === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Erro ao carregar a página de login.");
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }

    // Roteamento: Verifica se a requisição é um GET para a rota /login
    else if (req.method === 'GET' && reqUrl.pathname === '/login') {
        
        // 1. Extrai os parâmetros da query string da URL
        const dados = reqUrl.query;

        

        // 2. Valida as credenciais
        if (dados.email === USUARIO_VALIDO && dados.senha === SENHA_VALIDA) {
            // SUCESSO: Redireciona para a página bemvindo.html
            console.log('Credenciais válidas. Redirecionando...');
            res.writeHead(302, { 'Location': '/bemvindo' });
            res.end();
        } else {
            // FALHA: Responde com uma mensagem de erro simples
            console.log('Credenciais inválidas.');
            res.writeHead(401, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<h1>E-mail ou senha inválidos.</h1>');
        }
    } 
    // Roteamento: Se o navegador pedir pela página de boas-vindas (continua igual)
    else if (req.method === 'GET' && req.url === '/bemvindo') {
        fs.readFile('bemvindo.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("Pagina não encontrada");
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    // Para qualquer outra requisição, não faz nada
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Pagina não encontrada.');
    }
});

// Define a porta e inicia o servidor
const PORTA = 3000;
servidor.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
    console.log('Abra o arquivo index.html em seu navegador para começar.');
});