# `Projeto`
Labook

# `Descrição`
[Projeto desenvolvido na semana 21 do curso Labenu]. </br>
O Projeto Labook-backend foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste na elaboração de uma API que retorna dados conforme as requisições enviadas. Trata-se de uma ferramenta de cadastro de usuários e posts.

A documentação da API pode ser acessada [aqui](https://documenter.getpostman.com/view/21552787/2s7ZT9Qjc8).

# `Modo de usar`
As requisições que podem ser feitas são:  

- **[POST] createUser:** cria um novo usuário, fornecendo (via body) nome, email, password e role.
- **[GET] login:** faz o login em uma conta, fornecendo (via body) email e password.
- **[POST] createPost:** criar um novo posto, fornecendo (via body) o conteúdo do post. Necessita de autenticação.
- **[GET] getAllPosts:** busca todos os posts. Necessita de autenticação.
- **[DEL] deletePost:** deleta um post, fornecendo (via path params) o id do post. Necessita de autenticação ou autorização.
- **[POST] postLike:** utilizado para dar "like" em um determinado post, fornecendo (via path params) o id do post. Necessita de autenticação.
- **[DEL] removeLike:** utilizado para dar "dislike" em um determinado post, fornecendo (via path params) o id do post. Necessita de autenticação.

# `Instalando e rodando o projeto`
Fazer o clone do projeto:
- git clone link-do-repositório

Instalar as dependências:
- npm install

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
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
</div>

# `Autor`
Evandro Paulo Folletto </br>
<a href="https://www.linkedin.com/in/evandrofolletto/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> <a href="https://github.com/epfolletto"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>

# `Imagens`
Abaixo são mostradas algumas imagens de requisições:

### Requisição createUser:
<img src="./src/images/img_1.png"/>

### Requisição getAllUsers:
<img src="./src/images/img_2.png"/>

### Requisição postLike:
<img src="./src/images/img_3.png"/>