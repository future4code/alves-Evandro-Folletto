import { IUserDB, User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Arq_Users"

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

    await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .insert(userDB)
  }

  public getUserByEmail = async (email: string) => {
    const user = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .select('*')
      .from(UserDatabase.TABLE_USERS)
      .where({email: email})

    if (!user.length){
      return undefined
    }
    return user
  }

  public getUserById = async (id: string) => {
    const user = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .select('*')
      .from(UserDatabase.TABLE_USERS)
      .where({id})

    if (!user.length){
      return undefined
    }
    return user
  }

  public getUserBySearch = async (search: string, size: number, offset: number) => {
    const users = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .select('*')
      .from(UserDatabase.TABLE_USERS)
      .where('name', 'like', `%${search}%`)
      .limit(size)
      .offset(offset)

    if (!users.length){
      return undefined
    }
    return users
  }
}