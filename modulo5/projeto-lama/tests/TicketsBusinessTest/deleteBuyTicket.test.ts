import { TicketBusiness } from "../../src/business/TicketBusiness";
import { ISignupInputDTO } from "../../src/models/User";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { HashManagerMock } from ".././mocks/HashManagerMock";
import { IdGeneratorMock } from ".././mocks/IdGeneratorMock";
import { TicketDatabaseMock } from ".././mocks/TicketDatabaseMock";

describe("Testando o método deleteBuyTicket da TicketBusiness", () => {
  const ticketBusiness = new TicketBusiness(
    new TicketDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem de sucesso é retornada quando a compra é deletada com sucesso", async () => {
    const token = "token-mock-admin";
    const id_buy = '10000';

    const response = await ticketBusiness.deleteBuyTicket(token, id_buy)
    expect(response.message).toBe("Compra deletada com sucesso!")
  })
})