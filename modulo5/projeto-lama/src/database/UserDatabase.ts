import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_LAMA_USERS = "TABELA_LAMA_USERS"

  public toUserDBModel = (user: User): IUserDB => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole()
    }

    return userDB
  }

  public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
    const result: IUserDB[] = await BaseDatabase
      .connection(UserDatabase.TABLE_LAMA_USERS)
      .select()
      .where({ email })

    return result[0]
  }

  public createUser = async (user: User): Promise<void> => {
    const userDB = this.toUserDBModel(user)

    await BaseDatabase
      .connection(UserDatabase.TABLE_LAMA_USERS)
      .insert(userDB)
  }

  // FUNCÇÕES QUE FAZEM O MESMO DO QUE ESTÁ ACIMA, PORÉM, UTILIZANDO .RAW

  // public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
  //   const result: IUserDB[] = await BaseDatabase
  //     .connection.raw(`
  //       SELECT *
  //       FROM Template_Users
  //       WHERE( Template_Users.email = '${email}' )
  //     `)
  //   return result[0]
  // }

  // public createUser = async (user: User): Promise<void> => {
  //   const userDB = this.toUserDBModel(user)

  //   await BaseDatabase
  //     .connection.raw(`
  //       INSERT ${UserDatabase.TABLE_USERS} (id, name, email, password, role)
  //       VALUES ('${userDB.id}', '${userDB.name}', '${userDB.email}', '${userDB.password}', '${userDB.role}')
  //     `)
  // }
}