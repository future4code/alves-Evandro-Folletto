import { PostBusiness } from './../src/business/PostBusiness';
import { ICreatePostInputDTO } from './../src/models/Post';
import { IdGeneratorMock } from './mocks/IdGeneratorMock';
import { AuthenticatorMock } from './mocks/AuthenticatorMock';
import { PostDatabaseMock } from './mocks/PostDatabaseMock';

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

  // test("Uma mensagem e um token são gerados quando o login é bem sucessido", async () => {
  //   const input: ILoginInputDTO = {
  //     email: "astrodev@gmail.com",
  //     password: "bananinha"
  //   }
  //   const result = await userBusiness.login(input)
  //   expect(result.message).toBe("Login realizado com sucesso")
  //   expect(result.token).toBe("token-mock-admin")
  // })
})