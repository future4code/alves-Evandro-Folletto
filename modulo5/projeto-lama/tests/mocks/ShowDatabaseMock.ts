import { IShowDB, Show } from "./../../src/models/Show";
import { BaseDatabase } from "./../../src/database/BaseDatabase";

export class ShowDatabaseMock extends BaseDatabase {
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

  public create = async (show: Show): Promise<void> => { }

  public findShowByDay = async (date: object): Promise<IShowDB | undefined> => {
    // const result: IShowDB[] = await BaseDatabase
    //   .connection(ShowDatabaseMock.TABLE_LAMA_SHOWS)
    //   .select()
    //   .where({startsAt: date})

    // return result[0]

    return undefined
  }

  public getShows = async (): Promise<IShowDB[]> => {
    const shows: IShowDB[] = [
      {
        id: "1000",
        band: "Pearl Jam",
        startsAt: new Date("2022/12/05")
      },
      {
        id: "1001",
        band: "The Strokes",
        startsAt: new Date("2022/12/06")
      },
      {
        id: "1002",
        band: "The National",
        startsAt: new Date("2022/12/07")
      },
      {
        id: "1003",
        band: "Arctic Monkeys",
        startsAt: new Date("2022/12/08")
      },
    ]

    return shows
  }

  public findShowById = async (id_show: string): Promise<IShowDB | undefined> => {
    const result: IShowDB[] = await BaseDatabase
      .connection(ShowDatabaseMock.TABLE_LAMA_SHOWS)
      .select()
      .where({ id: id_show })

    return result[0]
  }
}