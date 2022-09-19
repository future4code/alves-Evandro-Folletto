# `Projeto`
Cookenu

# `Descrição`
O Projeto Cookenu-backend foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste na elaboração de uma API que retorna dados conforme as requisições enviadas. Trata-se de uma ferramenta de cadastro de usuários e receitas.

A documentação da API pode ser acessada [aqui](https://documenter.getpostman.com/view/21552787/2s7YfLgvEB).

# `Modo de usar`
As requisições que podem ser feitas são:  
- **[POST] createUser:** cria um novo usuário, fornecendo (via body) nome, email, password e role.
- **[POST] loginUser:** faz o login em uma conta, fornecendo (via body) email e password.
- **[GET] getProfile:** busca os dados do perfil logado que está logado. Necessita de autenticação.
- **[GET] getProfileById:** busca os dados de um perfil, fornecendo (via path params) o ID deste. Necessita de autenticação.
- **[POST] createRecipe:** cria uma nova receita, fornecendo (via body) título e descrição. Necessita de autenticação.
- **[GET] getRecipeById:** busca uma receita, fornecendo (via path params) o ID desta. Necessita de autenticação.
- **[POST] followUser:** segue um usuário, fornecendo (via body) o ID deste. Necessita de autenticação.
- **[POST] UnfollowUser:** deixa de um usuário, fornecendo (via body) o ID deste. Necessita de autenticação.
- **[GET] userFeed:** busca todas as receitas dos usuários que o usuário logado segue. Necessita de autenticação.
- **[PUT] editRecipe:** edita uma receita, fornecendo (via body) o id da receita, título e descrição. Necessita de autenticação. Usuários "normais" só podem editar suas próprias receitas. Usuários "admin" podem alterar qualquer receita.
- **[DEL] deleteRecipe:** deleta uma receita, fornecendo (via path params) o ID desta. Usuários "normais" só podem deletar suas próprias receitas. Usuários "admin" podem deletar qualquer receita.
- **[DEL] deleteUser:** deleta um usuário, fornecendo (via path params) o ID deste.Necessita de autenticação e autorização. Somente usuários "admin" pode executar essa tarefa.

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
<img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
</div>

# `Autor`
Evandro Paulo Folletto </br>
<a href="https://www.linkedin.com/in/evandrofolletto/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> <a href="https://github.com/epfolletto"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>

# `Imagens`
Abaixo são mostradas algumas imagens de requisições:

### Requisição createUser:
<img src="./src/images/img_1.png"/>

### Requisição getProfileById:
<img src="./src/images/img_2.png"/>

### Requisição deleteUser:
<img src="./src/images/img_3.png"/>