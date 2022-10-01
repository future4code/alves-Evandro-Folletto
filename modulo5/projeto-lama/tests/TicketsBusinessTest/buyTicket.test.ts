import { TicketBusiness } from "../../src/business/TicketBusiness";
import { ISignupInputDTO } from "../../src/models/User";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { HashManagerMock } from ".././mocks/HashManagerMock";
import { IdGeneratorMock } from ".././mocks/IdGeneratorMock";
import { TicketDatabaseMock } from ".././mocks/TicketDatabaseMock";

describe("Testando o método buyTicket da TicketBusiness", () => {
  const ticketBusiness = new TicketBusiness(
    new TicketDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem de sucesso é retornada quando a compra é bem-sucedida", async () => {
    const token = "token-mock-admin";
    const id_show = '1000';

    const response = await ticketBusiness.buyTicket(token, id_show)
    expect(response.message).toBe("Compra efetuada com sucesso!")
  })
})