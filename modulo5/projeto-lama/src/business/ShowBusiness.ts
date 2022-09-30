import { NotFoundError } from "../errors/NotFoundError";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { ICreateShowInputDTO, ITicketDB, Show } from "../models/Show";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { AuthenticationError } from "../errors/AuthenticationError";
import { ShowDatabase } from "../database/ShowDatabase";
import { USER_ROLES } from "../models/User";
import { AuthorizationError } from "../errors/AuthorizationError";

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) { }

  public create = async (input: ICreateShowInputDTO, token: string) => {
    const { band, startsAt } = input

    if (typeof band !== "string") {
      throw new ParamsError("Parâmetro 'band' inválido: deve ser uma string")
    }

    if (typeof startsAt !== "string") {
      throw new ParamsError("Parâmetro 'startsAt' inválido: deve ser uma data")
    }

    const startsAt_date = new Date( startsAt.split('/').reverse().join('/') );
    const dateReference = new Date("2022/12/05");

    if (startsAt_date.getTime() < dateReference.getTime()) {
      throw new ParamsError("A data do show não pode ser anterior a data de ínicio do festival")
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new AuthorizationError("Você não possui autorização para essa tarefa");
    }

    const existShow = await this.showDatabase.findShowByDay(startsAt_date);

    if(existShow){
      throw new ConflictError("Já existe show cadastrado nesta data");
    }

    const id = this.idGenerator.generate();

    const show = new Show(
      id,
      band,
      new Date( startsAt.split('/').reverse().join('/') )
    )

    await this.showDatabase.create(show)

    const response = {
      message: "Show cadastrado com sucesso",
    }

    return response
  }

  public getShows = async () => {

    const shows = await this.showDatabase.getShows();

    const response = {
      shows: shows
    }

    return response
  }

  public buyTicket = async (token: string, id_show: string) => {

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new AuthenticationError("Token inválido");
    }

    const existShow = await this.showDatabase.findShowById(id_show);
    if(!existShow){
      throw new NotFoundError("Não foram encontrados shows com este ID");
    }

    const existBuy = await this.showDatabase.findShowByIdShowIdUser(id_show, payload.id);
    if(existBuy){
      throw new ConflictError("Só é permitido comprar 1 ingresso por show");
    }

    const numberTickets = await this.showDatabase.counterTicketsByIdShow(id_show);
    if(numberTickets >= 5000){
      throw new ConflictError("Ingressos esgotados!");
    }

    const id = this.idGenerator.generate();

    const buy: ITicketDB = {
      id,
      show_id: id_show,
      user_id: payload.id
    }

    await this.showDatabase.buyTicket(buy);

    const response = {
      message: "Compra efetuada com sucesso!",
    }

    return response
  }
}