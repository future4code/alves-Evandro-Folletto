import { IUserDB, User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users"

  public toUserDBModel = (user: User) => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole()
    }

    return userDB
  }

  public createUser = async (user: User) => {
    const userDB = this.toUserDBModel(user)

    await this.getConnection()
      .insert(userDB)
      .into(UserDatabase.TABLE_USERS)
  }

  public getUserByEmail = async (email: string) => {
    const user:IUserDB[] = await this.getConnection()
      .select('*')
      .from(UserDatabase.TABLE_USERS)
      .where({email: email})

    if (!user.length){
      return undefined
    }
    return user[0]
  }
}