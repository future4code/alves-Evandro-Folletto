import { PostBusiness } from './../src/business/PostBusiness';
import { ICreatePostInputDTO } from './../src/models/Post';
import { IGetPostsInputDTO } from './../src/models/Post';
import { IDeletePostInputDTO } from './../src/models/Post';
import { IAddLikeInputDTO } from './../src/models/Post';
import { IRemoveLikeInputDTO } from './../src/models/Post';
import { IdGeneratorMock } from './mocks/IdGeneratorMock';
import { AuthenticatorMock } from './mocks/AuthenticatorMock';
import { PostDatabaseMock } from './mocks/PostDatabaseMock';
import { Post } from './../src/models/Post';
import { BaseError } from '../src/errors/BaseError';

describe("Testando PostBusiness", () => {
  const postBusiness = new PostBusiness(
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem e um post são gerados quando createPost é bem sucessido", async () => {
    const input: ICreatePostInputDTO = {
      token: "token-mock-normal",
      content: "Teste do mock"
    }
    const result = await postBusiness.createPost(input)
    expect(result.message).toBe("Post criado com sucesso")
    expect(result.post.getId()).toBe("id-mock")
  })

  test("Todos os posts devem ser retornados quando o getPosts é bem sucessido", async () => {
    const input: IGetPostsInputDTO = {
      token: "token-mock-normal"
    }
    const result = await postBusiness.getPosts(input)
    expect(result.posts.length).toBe(3)
    expect(result.posts[0]).toBeInstanceOf(Post)
  })

  test("Ao deletar um post, uma mensagem de sucesso deve ser exibida", async () => {
    const input: IDeletePostInputDTO = {
      token: "token-mock-admin",
      postId: "201"
    }
    const result = await postBusiness.deletePost(input)
    expect(result.message).toBe("Post deletado com sucesso")
  })

  test("Ao dar like em um post, uma mensagem de sucesso deve ser exibida", async () => {
    const input: IAddLikeInputDTO = {
      token: "token-mock-admin",
      postId: "202"
    }
    const result = await postBusiness.addLike(input)
    expect(result.message).toBe("Like realizado com sucesso")
  })

  test("Ao remover like em um post, uma mensagem de sucesso deve ser exibida", async () => {
    const input: IRemoveLikeInputDTO = {
      token: "token-mock-admin",
      postId: "201"
    }
    const result = await postBusiness.removeLike(input)
    expect(result.message).toBe("Like removido com sucesso")
  })

  test("Erro ao criar post quando payload retorna false", async () => {
    expect.assertions(2);

    try {
      const input: any = {
        token: "token-mock-adminn",
        content: "post teste"
      };

      await postBusiness.createPost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("Credenciais inválidas")
      }
    }
  })

  test("Erro em criar post quando 'content' não for do tipo string", async () => {
    expect.assertions(2);

    try {
      const input: any = {
        token: "token-mock-admin",
        content: 2
      };
      
      await postBusiness.createPost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'content' inválido")
      }
    }
  })

  test("Erro em criar post quando 'content' não tiver nenhum caracter", async () => {
    expect.assertions(2);

    try {
      const input: any = {
        token: "token-mock-admin",
        content: ""
      };
      
      await postBusiness.createPost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'content' inválido: mínimo de 1 caracteres")
      }
    }
  })
})