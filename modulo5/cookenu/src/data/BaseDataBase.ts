import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

export abstract class BaseDataBase {
  // Se tiver conexao , ele é knex , senao ele é null
  private static connetion: Knex | null = null;

  protected getConnetion() {
    // senao tiver conexao com o banco de dados , cria uma !
    if (!BaseDataBase.connetion) {
      BaseDataBase.connetion = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_SCHEMA,
          port: 3306,
          multipleStatements: true
        }
      })
    }

    return BaseDataBase.connetion
  }
}