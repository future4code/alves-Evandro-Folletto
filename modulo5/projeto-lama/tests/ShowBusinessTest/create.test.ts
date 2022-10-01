import { ShowBusiness } from "../../src/business/ShowBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { ICreateShowInputDTO } from "../../src/models/Show";
import { AuthenticatorMock } from "../mocks/AuthenticatorMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock";

describe("Testando o método createShow da ShowBusiness", () => {
  const showBusiness = new ShowBusiness(
    new ShowDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem de sucesso é retornada quando a criação de show é bem-sucedida", async () => {
    const input: ICreateShowInputDTO = {
      band: "Radiohead",
      startsAt: "08/12/2022"
    }
    const token = "token-mock-admin";

    const response = await showBusiness.create(input, token);
    expect(response.message).toBe("Show cadastrado com sucesso");
  })

  // test("Erro quando 'password' possuir menos de 6 caracteres", async () => {
  //   expect.assertions(2)

  //   try {
  //     const input: ISignupInputDTO = {
  //       email: "fulano@gmail.com",
  //       name: "Fulano",
  //       password: "123"
  //     }

  //     await userBusiness.signup(input)

  //   } catch (error) {
  //     if (error instanceof BaseError) {
  //       expect(error.statusCode).toBe(400)
  //       expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
  //     }
  //   }
  // })

  // test("Erro quando 'password' for incorreto", async () => {
  //   expect.assertions(2)

  //   try {
  //     const input: ILoginInputDTO = {
  //       email: "astrodev@gmail.com",
  //       password: "bananinha123"
  //     }

  //     await userBusiness.login(input)

  //   } catch (error) {
  //     if (error instanceof BaseError) {
  //       expect(error.statusCode).toBe(401)
  //       expect(error.message).toBe("Password incorreto")
  //     }
  //   }
  // })
})