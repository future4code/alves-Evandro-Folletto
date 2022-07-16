# `Projeto`
Projeto LabeX

# `Link`
https://folletto-labex.surge.sh


# `Descrição`
O Projeto LabeX foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste em requisições para a API desenvolvida pela equipe da Labenu, via axios.
Trata-se de uma ferramenta onde tanto usuários quanto administradores podem navegar: </br>
Os usuários podem verificar as viagens disponíveis e candidatar-se para as mesmas; </br>
Os administradores podem visualizar as viagens disponíveis, criar novas e detetar as existentes. Além disso, é possível ver detalhes das viagens, onde são apresentados os usuários que estão pendentes de aprovação/reprovação e também aqueles já foram aprovados.

As requisições utilizadas para realizar este projeto foram:
- **Get Trips:** retorna todas as viagens presentes no banco de dados;
- **Get Trip Detail:** retorna os detalhes de uma viagem específica (incluindo candidatos aprovados e os dependentes de aprovação/reprovação);
- **Create Trip:** endpoint que cria uma nova viagem.
- **Apply to Trip:** recebe informações de um candidato e o relaciona a uma viagem.
- **Delete Trip:** endpoint que deleta uma determinada viagem;
- **Login:** endpoint para fazer login de um usuário.
- **Decide Candidate:** endpoint para decidir a aprovação ou reprovação de um candidato para uma viagem.
- **Populate***: endpoint para popular o banco de dados para testes;
- **Signup***: endpoint utilizado para criar usuário admin.

*endpoints utilizados apenas em desenvolvimento
</br>

Desenvolvido por: Evandro Paulo Folletto
[Acessar repostório no GitHub](https://github.com/future4code/alves-Evandro-Folletto/pull/35)
[Acessar documentação da API](https://documenter.getpostman.com/view/9133542/TzCTZkQr#9416bc30-1a6c-4afe-9c45-c414f3353efd)

# `Modo de usar`
Ao iniciar a ferramenta, o usuário pode escolher entre as opções "Sobre" e "Astromatch". Na opção "Sobre" é mostrada uma breve descrição do projeto. Já a opção "Astromatch" leva o usuário para a aplicação em si. </br>
Nela, são listados perfis (com as informações de nome, foto, idade e descrição) um de cada vez para o usuário e este tem a opção de dar "like" ou "disklike":
- Caso o usuário optar por "dislike", nada ocorre e um novo perfil é mostrado na tela.
- Caso o usuário optar por "like" e o perfil atual também deu "like" para o usuário (essa informação vem da API), uma mensagem de "match" é exibida na tela e este perfil é inserido em uma lista de matches (tarefa também feita pela API). </br>

No canto superior direito existe um ícone que leva o usuário para a tela de matches, e lá é exibida uma lista de matches. Caso a lista esteja vazia, uma mensagem indicando tal situação é mostrada. </br>
Ao finalizar a lista de perfis disponíveis, uma mensagem é exibida e o usuário deve resertar a lista e pode iniciar novamente o processo de "likes" e "dislikes", para isso, um botão "Resetar" é apresentado no lugar do botões de "like" e "dislike".

# `Instalando e rodando o projeto`
Para usar localmente o projeto, basta:
- npm install
- npm run start

# `Tecnologias utilizadas`
<div>
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
</div>

# `Autor`
Evandro Paulo Folletto

# `Imagens`
<img src="./src/assets/img/readme/site1.png"/>
<img src="./src/assets/img/readme/site2.png"/>
<img src="./src/assets/img/readme/site3.png"/>
<img src="./src/assets/img/readme/site4.png"/>


### `Paleta de cores`
.color0 { #77bccc };
.color1 { #5eb3c7 };
.color2 { #47a1b5 };
.color3 { #2f90a3 };
.color4 { #187e91 };
.color5 { #006c7f };