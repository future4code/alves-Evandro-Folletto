import { ShowBusiness } from "../../src/business/ShowBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { ICreateShowInputDTO } from "../../src/models/Show";
import { AuthenticatorMock } from "../mocks/AuthenticatorMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock";

describe("Testando o método getShows da ShowBusiness", () => {
  const showBusiness = new ShowBusiness(
    new ShowDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  )

  test("Todos os shows devem ser retornados quando o getShows é bem sucedido", async () => {
    const response = await showBusiness.getShows();
    expect(response.shows.length).toBe(4);
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