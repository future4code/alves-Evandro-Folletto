import { BaseDatabase } from "../BaseDatabase";
import { UserDatabase } from "../UserDatabase";
import { users } from "./data";

class Migrations extends BaseDatabase {
  execute = async () => {
    try {
      console.log("Creating tables...")
      await this.createTables()
      console.log("Tables created successfully.")

      console.log("Populating tables...")
      await this.insertData()
      console.log("Tables populated successfully.")

      console.log("Migrations completed.")
    } catch (error) {
      console.log("FAILED! Error in migrations...")
      if (error instanceof Error) {
        console.log(error.message)
      }
    } finally {
      console.log("Ending connection...")
      BaseDatabase.connection.destroy()
      console.log("Connection closed graciously.")
    }
  }

  createTables = async () => {
    await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_LAMA_USERS};
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_LAMA_SHOWS};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_LAMA_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_LAMA_SHOWS}(
            id VARCHAR(255) PRIMARY KEY,
            band VARCHAR(255) NOT NULL,
            stats_at DATE NOT NULL
        );
    `)
  }

  insertData = async () => {
    await BaseDatabase
      .connection(UserDatabase.TABLE_LAMA_USERS)
      .insert(users)
  }
}

const migrations = new Migrations()
migrations.execute()