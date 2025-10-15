-- Compilador SQL Online
-- https://www.programiz.com/sql/online-compiler

-- 1ª QUESTÃO
-- Primeiro, precisamos de um lugar para guardar nossos contatos.
-- Complete o comando abaixo para CRIAR uma tabela chamada "Contatos".
-- A tabela deve ter as seguintes colunas:
-- id: um número inteiro que será a chave primária.
-- nome: um texto que não pode ser nulo.
-- telefone: um texto.
-- email: um texto.

______ TABLE Contatos (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    telefone TEXT,
    email TEXT
);


-- 2ª QUESTÃO ----------------------------------------------------------------------
-- Agora que a tabela existe, vamos adicionar alguns amigos.
-- Complete os comandos abaixo para INSERIR os três contatos na tabela "Contatos".

-- Contato 1 
______ ____ Contatos (nome, telefone, email)
VALUES ('João Santos', '(71) 98877-1234', 'joao.santos@email.com');

-- Contato 2 
______ ____ Contatos (nome, telefone, email)
VALUE ('Maria Oliveira', '(79) 99654-9876', 'maria.oliveira@email.com');

-- Contato 3 
______ ____ Contatos (nome, telefone, email)
VALUES ('José Pereira', '(85) 98123-4567', 'jose.pereira@email.com');


-- 3ª QUESTÃO ----------------------------------------------------------------------
-- Vamos visualizar as informações que guardamos.
-- Complete o comando para SELECIONAR todas as colunas de todos os contatos.
______ * FROM Contatos;

-- Agora, complete o comando para seleiconar apenas o contato ONDE o nome é 'José Pereira'.
SELECT * FROM Contatos ______ nome = 'José Pereira';


-- 4ª QUESTÃO ----------------------------------------------------------------------
-- Complete o comando para ATUALIZAR a tabela "Contatos".
-- Mude o "telefone" para '(31) 99999-9999' ONDE o id do contato for 3.
______ Contatos
SET telefone = '(79) 99999-9999'
WHERE id = 3;

-- Vamos verificar se a alteração funcionou. Execute este comando para ver a tabela atualizada.
SELECT * FROM Contatos;


-- 5ª QUESTÃO ----------------------------------------------------------------------
-- Complete o comando para DELETAR o registro da tabela "Contatos" ONDE o nome do 
-- contato é 'João Santos'.
______ FROM Contatos
WHERE nome = 'João Santos';

-- Vamos verificar se a exclusão funcionou. Execute este comando para ver a tabela atualizada.
SELECT * FROM Contatos;
