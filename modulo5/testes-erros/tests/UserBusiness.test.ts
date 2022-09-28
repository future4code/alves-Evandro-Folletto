import { UserBusiness } from './../src/business/UserBusiness';
import { ISignupInputDTO } from './../src/models/User';
import { ILoginInputDTO } from './../src/models/User';
import { IdGeneratorMock } from './mocks/IdGeneratorMock';
import { HashManagerMock } from './mocks/HashManagerMock';
import { AuthenticatorMock } from './mocks/AuthenticatorMock';
import { UserDatabaseMock } from './mocks/UserDatabaseMock';
import { BaseError } from '../src/errors/BaseError';

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

  test("Erro quando 'name' não for do tipo string", async () => {
    expect.assertions(2);

    try {
      const input: any = {
        name: 2111,
        email: "fulano@gmail.com",
        password: "123123"
      };
      
      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'name' inválido")
      }
    }
  })

  test("Erro quando 'email' não for do tipo string", async () => {
    expect.assertions(2);

    try {
      const input: any = {
        name: 'fulano',
        email: 2,
        password: "123123"
      };
      
      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'email' inválido")
      }
    }
  })
  
  test("Erro quando 'password' não for do tipo string", async () => {
    expect.assertions(2);

    try {
      const input: any = {
        name: 'fulano',
        email: "fulano@gmail.com",
        password: 123123
      };
      
      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'password' inválido")
      }
    }
  })

  test("Erro quando 'name' não tiver mais que 3 caracters", async () => {
    expect.assertions(2);

    try {
      const input: any = {
        name: 'fu',
        email: "fulano@gmail.com",
        password: "123123"
      };
      
      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'name' inválido: mínimo de 3 caracteres")
      }
    }
  })

  test("Erro quando 'password' não tiver mais que 6 caracters", async () => {
    expect.assertions(2);

    try {
      const input: any = {
        name: 'fulano',
        email: "fulano@gmail.com",
        password: "12345"
      };
      
      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
      }
    }
  })

  test("Erro quando 'email' não tiver formato válido", async () => {
    expect.assertions(2);

    try {
      const input: any = {
        name: 'fulano',
        email: "fulanogmail.com",
        password: "123456"
      };
      
      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'email' inválido")
      }
    }
  })

  test("Erro quando 'email' já cadastrado", async () => {
    expect.assertions(2);

    try {
      const input: any = {
        name: "User Mock",
        email: "usermock@gmail.com",
        password: "hash-mock",
      };
      
      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(409)
        expect(error.message).toBe("Email já cadastrado")
      }
    }
  })
})