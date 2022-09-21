import { IUserDB, User, IGetUsersInputDBDTO, IEditInputDBDTO } from "../model/User";
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
    const user:IUserDB[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .select('*')
      .from(UserDatabase.TABLE_USERS)
      .where({email: email})

    if (!user.length){
      return undefined
    }
    return user[0]
  }

  public getUserById = async (id: string) => {
    const user:IUserDB[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .select('*')
      .from(UserDatabase.TABLE_USERS)
      .where({id})

    if (!user.length){
      return undefined
    }
    return user[0]
  }

  public getUserBySearch = async (input:IGetUsersInputDBDTO) => {
    const search = input.search;
    const size = input.size;
    const offset = input.offset;

    const users:IUserDB[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
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

  public deleteUserById = async (id: string) => {
    await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .delete()
      .from(UserDatabase.TABLE_USERS)
      .where({id})
  }

  public editUserById = async (user: User) => {
    const userDB = this.toUserDBModel(user);

    await BaseDatabase
      .connection(UserDatabase.TABLE_USERS)
      .update(userDB)
      .where({id: userDB.id})
  }
}