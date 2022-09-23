import PostDatabase from "../database/PostDatabase"
import { User, USER_ROLES } from "../model/User"
import { Post, IPostInputDBDTO } from "../model/Post"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    // private hashManager: HashManager,
    private authenticator: Authenticator
  ){}

  public create = async (token: string, content: string) => {
    if (!token) {
      throw new Error("É necessário enviar o token");
    }

    if (content.length < 1 || typeof content !== "string") {
      throw new Error("Parâmetro 'content' inválido")
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new Error("Token inválido");
    }

    const userDB = await this.postDatabase.getUserById(payload.id);
    if (!userDB) {
      throw new Error("ID não encontrado no banco de dados");
    }

    const user = new User(
      userDB[0].id,
      userDB[0].name,
      userDB[0].email,
      userDB[0].password,
      userDB[0].role,
    );

    const id = this.idGenerator.generate();

    const post = new Post(
      id,
      content,
      user.getId(),
      0
    );
    
    const input: IPostInputDBDTO = {
      id: post.getId(),
      content: post.getContent(),
      user_id: post.getUserId()
    };

    await this.postDatabase.createPost(input);

    const response = {
      message: 'Post realizado com sucesso!'
    }

    return response
  }

  public getAllPosts = async (token: string) => {
    if (!token) {
      throw new Error("Não autorizado");
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new Error("Token inválido");
    }
    
    const posts = await this.postDatabase.getAllPosts();
    if (!posts.length) {
      throw new Error("Não existem posts cadastrados");
    }
    
    const response = {
      posts
    }

    return response
  }

  public delete = async (token: string, id: string) => {
    if (!token) {
      throw new Error("Não autorizado");
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new Error("Token inválido");
    }

    const postDB = await this.postDatabase.getPostById(id);
    if (!postDB) {
      throw new Error("O ID que você deseja deletar não foi encontrado");
    }

    if (payload.role === USER_ROLES.NORMAL && payload.id !== postDB[0].user_id) {
      throw new Error("Você não tem autorização para essa ação");
    }

    await this.postDatabase.deleteLikeByIdPost(id);

    await this.postDatabase.deletePostById(id);

    const response = {
      message: "Post deletado com sucesso!"
    }

    return response
  }

  // public edit = async (input: IEditInputDTO) => {
  //   const id_edit = input.id_edit;
  //   const token = input.token;
  //   const name = input.name;
  //   const email = input.email;
  //   const password = input.password;

  //   if (!id_edit || !token || !name || !email || !password) {
  //     throw new Error("Estão faltando parâmetros");
  //   }

  //   if (name.length < 3 || typeof name !== "string") {
  //     throw new Error("Parâmetro 'name' inválido")
  //   }

  //   if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
  //     throw new Error("Parâmetro 'email' inválido")
  //   }

  //   if (password.length < 6 || typeof password !== "string") {
  //     throw new Error("Parâmetro 'password' inválido")
  //   }


  //   const userDB = await this.userDatabase.getUserById(id_edit);
  //   if (!userDB) {
  //     throw new Error("O ID que você deseja editar não foi encontrado");
  //   }

  //   const payload = this.authenticator.getTokenPayload(token);
  //   if (!payload) {
  //     throw new Error("Token inválido");
  //   }
  //   if(payload.role === USER_ROLES.NORMAL && payload.id !== id_edit) {
  //     throw new Error("Você só tem autorização para editar seus próprios dados!");
  //   }

  //   const user = new User(
  //     userDB.id,
  //     userDB.name,
  //     userDB.email,
  //     userDB.password,
  //     userDB.role
  //   )

  //   user.setId(id_edit);
  //   user.setName(name);
  //   user.setPassword(password);

  //   await this.userDatabase.editUserById(user);

  //   const response = {
  //     message: "Usuário editado com sucesso!"
  //   }

  //   return response
  // }
}