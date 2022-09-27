import { PostBusiness } from './../src/business/PostBusiness';
import { ICreatePostInputDTO } from './../src/models/Post';
import { IGetPostsInputDTO } from './../src/models/Post';
import { IDeletePostInputDTO } from './../src/models/Post';
import { IdGeneratorMock } from './mocks/IdGeneratorMock';
import { AuthenticatorMock } from './mocks/AuthenticatorMock';
import { PostDatabaseMock } from './mocks/PostDatabaseMock';
import { Post } from './../src/models/Post';

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
})