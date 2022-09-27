import { UserBusiness } from './../src/business/UserBusiness';
import { ISignupInputDTO } from './../src/models/User';
import { ILoginInputDTO } from './../src/models/User';
import { IdGeneratorMock } from './mocks/IdGeneratorMock';
import { HashManagerMock } from './mocks/HashManagerMock';
import { AuthenticatorMock } from './mocks/AuthenticatorMock';
import { UserDatabaseMock } from './mocks/UserDatabaseMock';

describe("Testando UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem e um token são gerados quando o signup é bem sucessido", async () => {
    const input: ISignupInputDTO = {
      email: "fulano@gmail.com",  
      name: "Fulano",
      password: "fulano123"
    }
    const result = await userBusiness.signup(input)
    expect(result.message).toBe("Cadastro realizado com sucesso")
    expect(result.token).toBe("token-mock-normal")
  })

  test("Uma mensagem e um token são gerados quando o login é bem sucessido", async () => {
    const input: ILoginInputDTO = {
      email: "astrodev@gmail.com",
      password: "bananinha"
    }
    const result = await userBusiness.login(input)
    expect(result.message).toBe("Login realizado com sucesso")
    expect(result.token).toBe("token-mock-admin")
  })
})