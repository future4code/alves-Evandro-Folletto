# `Projeto`
Lama

# `Descrição`
[Projeto desenvolvido na semana 22 do curso Labenu]. </br>
O Projeto Lama-backend foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste na elaboração de uma API que retorna dados conforme as requisições enviadas. Trata-se de uma ferramenta de cadastro de usuários, shows e reserva de compras de ingressos. Neste projeto foram utilizados conceitos de testes unitários utilizando Jest.

A documentação da API pode ser acessada [aqui](https://documenter.getpostman.com/view/21552787/2s83tDpsrR).

# `Modo de usar`
As requisições que podem ser feitas são:  

- **[POST] signUp:** cria um novo usuário, fornecendo (via body) nome, email e password.
- **[POST] login:** faz o login em uma conta, fornecendo (via body) email e password.
- **[POST] createShow:** criar um novo show, fornecendo (via body) a banda e a data de apresentração. Necessita de autenticação e autorização de ADMIN.
- **[GET] getShows:** busca todos os shows cadastrados.
- **[POST] buyTicket:** faz a reserva de compra de ingresso, fornecendo (via path params) o id do show. Necessita de autenticação.
- **[DEL] deleteBuy:** deleta uma reserva de compra de ingresso, fornecendo (via path params) o id da reserva. Necessita de autenticação.

# `Instalando e rodando o projeto`
Fazer o clone do projeto:
- git clone link-do-repositório

Instalar as dependências:
- npm install

Criar o arquivo .env na raiz do projeto, com os dados:
  PORT = 3003
  DB_HOST = adicionar o endereço do localhost
  DB_USER = adicionar o user
  DB_PASSWORD = adicionar a senha
  DB_DATABASE = adicionar o schema
  JWT_KEY = chave usada para gerar o token
  JWT_EXPIRES_IN = tempo de expiração do token
  BCRYPT_SALT_ROUNDS = parâmetro salt utilizado pelo Bcrypt

Rodar o projeto:
- npm run dev

# `Tecnologias utilizadas`
<div>
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
</div>

# `Autor`
Evandro Paulo Folletto </br>
<a href="https://www.linkedin.com/in/evandrofolletto/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> <a href="https://github.com/epfolletto"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>

# `Imagens`
Abaixo são mostradas algumas imagens de requisições:

### Requisição signUp:
<img src="./src/images/img_1.png"/>

### Requisição getShows:
<img src="./src/images/img_2.png"/>

### Requisição buyTicket:
<img src="./src/images/img_3.png"/>