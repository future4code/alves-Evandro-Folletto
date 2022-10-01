import { UserBusiness } from "../../src/business/UserBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { ISignupInputDTO } from "../../src/models/User";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { HashManagerMock } from ".././mocks/HashManagerMock";
import { IdGeneratorMock } from ".././mocks/IdGeneratorMock";
import { UserDatabaseMock } from ".././mocks/UserDatabaseMock";

describe("Testando o método signup da UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  )

  test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
    const input: ISignupInputDTO = {
      name: "Teste",
      email: "teste@gmail.com",
      password: "teste123"
    }

    const response = await userBusiness.signup(input)
    expect(response.message).toBe("Cadastro realizado com sucesso")
    expect(response.token).toBe("token-mock-normal")
  })

  test("Erro quando o parâmetro 'name' não é do tipo string", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: 2,
        email: "fulano@gmail.com",
        password: "123"
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'name' inválido: deve ser uma string")
      }
    }
  })

  test("Erro quando o parâmetro 'email' não é do tipo string", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "fulano",
        email: 2,
        password: "123"
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'email' inválido: deve ser uma string")
      }
    }
  })

  test("Erro quando o parâmetro 'password' não é do tipo string", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "fulano",
        email: "fulano@gmail.com",
        password: 2
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'password' inválido: deve ser uma string")
      }
    }
  })

  test("Erro quando 'name' possuir menos de 3 caracteres", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Fu",
        email: "fulano@gmail.com",
        password: "123"
      }

      await userBusiness.signup(input)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'name' inválido: mínimo de 3 caracteres")
      }
    }
  })

  test("Erro quando 'password' possuir menos de 6 caracteres", async () => {
    expect.assertions(2)

    try {
      const input: any = {
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "12345"
      }

      await userBusiness.signup(input)

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