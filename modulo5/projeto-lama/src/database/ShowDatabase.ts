import { IShowDB, Show } from "../models/Show";
import { ITicketDB } from "../models/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
  public static TABLE_LAMA_SHOWS = "TABELA_LAMA_SHOWS"
  public static TABLE_LAMA_TICKET = "TABELA_LAMA_TICKET"

  public toShowDBModel = (show: Show): IShowDB => {
    const showDB: IShowDB = {
      id: show.getId(),
      band: show.getBand(),
      startsAt: show.getStartsAt()
    }

    return showDB
  }

  public create = async (show: Show): Promise<void> => {
    const showDB = this.toShowDBModel(show)

    await BaseDatabase
      .connection(ShowDatabase.TABLE_LAMA_SHOWS)
      .insert(showDB)
  }

  public findShowByDay = async (date: object): Promise<IShowDB | undefined> => {
    const result: IShowDB[] = await BaseDatabase
      .connection(ShowDatabase.TABLE_LAMA_SHOWS)
      .select()
      .where({startsAt: date})

    return result[0]
  }

  public getShows = async (): Promise<IShowDB[] | undefined> => {
    const result: IShowDB[] = await BaseDatabase
      .connection(ShowDatabase.TABLE_LAMA_SHOWS)
      .select('*')

    return result
  }

  public findShowById = async (id_show: string): Promise<IShowDB | undefined> => {
    const result: IShowDB[] = await BaseDatabase
      .connection(ShowDatabase.TABLE_LAMA_SHOWS)
      .select()
      .where({id: id_show})

    return result[0]
  }

  public findShowByIdShowIdUser = async (id_show: string, id_user: string): Promise<IShowDB | undefined> => {
    const result: IShowDB[] = await BaseDatabase
      .connection(ShowDatabase.TABLE_LAMA_TICKET)
      .select()
      .where({show_id: id_show})
      .andWhere({user_id: id_user})

    return result[0]
  }

  public buyTicket = async (input: ITicketDB): Promise<void> => {
    // const showDB = this.toShowDBModel(show)

    await BaseDatabase
      .connection(ShowDatabase.TABLE_LAMA_TICKET)
      .insert(input)
  }

  public counterTicketsByIdShow = async (id_show: string): Promise<number> => {
    const [number] = await BaseDatabase
      .connection.raw(`
        SELECT COUNT(*) as totalTickets
        FROM ${ShowDatabase.TABLE_LAMA_TICKET} 
        WHERE ${ShowDatabase.TABLE_LAMA_TICKET}.show_id = ${id_show}
      `)
      return number[0].totalTickets
  }
}