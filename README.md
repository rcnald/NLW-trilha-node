# NLX Expert - trilha Node.js

Uma aplicação backend que permite que o usuário registre e vote enquetes. Como parte da trilha Node.js da NLW Expert da Rocketseat, com ênfase no aprendizado de novas tecnologias e metodologias.

## Funcionalidades

[Api reference](./API_RERFENCE.md)

## Tecnologias

- TypeScript
- Node.js
- Prisma
- Zod
- Docker
- PostgreSQL
- Redis
- WebSockets

## Objetivos

Esse projeto teve como objetivo reforçar alguns conhecimentos em backend e principalmente  ter o primeiro contato com muitos tecnologias até então novas para mim, como o Prisma principal razão que me motivou a iniciar esse desafio. Claro também adquiri noções de Zod, WebSockets e Docker que até então não compreendia totalmente suas funções na aplicação

## Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema.

## Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/rcnald/NLW-trilha-node.git
   # or
   gh repo clone rcnald/movie-notes-api
   ```
2. Instalar suas dependências
   
    ```
    npm install
    ```
3. Iniciar o banco de dados
    ```
    npm run docker
    npm run migrate
    ```
4. Crie um arquivo .env na raiz do projeto como mostra no arquivo .env.example. 
	```
	DATABASE_URL="postgresql://docker:docker@localhost:5432/mydb?schema=public"
	```
5. Iniciar a API
    ```
    npm run dev
    ```
    Logo após isso o projeto será iniciado na porta que fora designado no .env.local ( como no exemplo acima : 3333).