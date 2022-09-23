import PostDatabase from "../database/PostDatabase"
import { User, USER_ROLES } from "../model/User"
import { Post, ILikeDB, IPostInputDBDTO } from "../model/Post"
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
    if (!userDB.length) {
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

  public like = async (token: string, post_id: string) => {
    if (!token) {
      throw new Error("Não autorizado");
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new Error("Token inválido");
    }

    const postExist = await this.postDatabase.getPostById(post_id);
    console.log(postExist)
    if (!postExist.length) {
      throw new Error("O ID do post que você quer dar like não existe!");
    }

    const likeExist = await this.postDatabase.getLike(payload.id, post_id);
    if (likeExist.length > 0) {
      throw new Error("Você já deu like neste post");
    }

    const id = this.idGenerator.generate();

    const input:ILikeDB = {
      id,
      post_id,
      user_id: payload.id
    };

    await this.postDatabase.like(input);

    const response = {
      message: "Like efetuado com sucesso!"
    }

    return response
  }
}