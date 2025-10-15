// Importa os módulos essenciais do Node.js
const http = require('http');
const querystring = require('querystring');
const fs = require('fs');

// Credenciais fixas para validação
const USUARIO_VALIDO = 'aluno@maisti.ufs.br';
const SENHA_VALIDA = 'secreta';

const servidor = http.createServer((req, res) => {
    // Roteamento: Verifica se a requisição é um POST para a URL /login
    if (req.method === 'POST' && req.url === '/login') {
        let corpoRequisicao = '';

        // 1. Recebe os dados do formulário em pedaços (chunks)
        req.on('data', (chunk) => {
            corpoRequisicao += chunk.toString();
        });

        // 2. Quando todos os dados chegarem
        req.on('end', () => {
            // 3. Analisa (parse) os dados do formulário
            const dados = querystring.parse(corpoRequisicao);

            // 4. Valida as credenciais
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
        });
    } 
    // Roteamento: Se o navegador pedir pela página de boas-vindas
    else if (req.method === 'GET' && req.url === '/bemvindo') {
        fs.readFile('bemvindo.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("Página não encontrada");
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    // Para qualquer outra requisição, não faz nada (ou mostra um erro 404)
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada.');
    }
});

// Define a porta e inicia o servidor
const PORTA = 3000;
servidor.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
    console.log('Abra o arquivo index.html em seu navegador para começar.');
});