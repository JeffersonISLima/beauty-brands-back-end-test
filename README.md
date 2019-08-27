# Teste prático - Backend Beauty Brands
> Projeto de uma API REST para um CRUD

Projeto em Node + Express que visa realizar as operações de CRUD em um banco de dados não relacional (MongoDB).

## Instruções
> Configuração para Desenvolvimento

1. Clone o repositório: https://github.com/JeffersonISLima/beauty-brands-back-end-test
2. Faça uso do gerenciador de pacotes [npm](https://www.npmjs.com/).
3. Dentro da pasta "beauty-brands-back-end-test", execute npm install no terminal para baixar todas as dependências.  

```sh
npm install
```

## Uso 
Servidor: Para iniciar em modo de desenvolvimento, digite npm run dev no terminal.
O server é executado na porta 3000.
 ```sh
npm run dev
```
 
## Endpoints da API

Exemplo para acesso do endpoint que lista todos os usuários:
 ```sh
http://localhost:3000/api/users
```

### Demais endpoints:

![](/public/images/API.png) 


### JSON Viewer:

![](/public/images/json.png) 


### Banco de dados:

Há um aquivo de seed para popular o banco, na pasta raiz do projeto, execute no terminal:

  ```sh
cd bin
node seeds.js
```
Serão cadastrados dez usuários.


## Tecnologias utilizadas

1. Node.js
2. Express
3. MongoDB
4. Mongoose
5. Postman (Teste da API)


