import { IUserDB, User, IGetUsersInputDBDTO, IEditInputDBDTO } from "../model/User";
import { IPostInputDBDTO } from "../model/Post";
import { BaseDataBase } from "./BaseDatabase";

export default class PostDatabase extends BaseDataBase {
  // public static TABLE_USERS = "Labook_Users"
  // public static TABLE_POST = "Labook_Posts"

  // public toUserDBModel = (user: User) => {
  //   const userDB: IUserDB = {
  //     id: user.getId(),
  //     name: user.getName(),
  //     email: user.getEmail(),
  //     password: user.getPassword(),
  //     role: user.getRole()
  //   }

  //   return userDB
  // }

  // public createPost = async (post: IPostInputDBDTO) => {
  //   console.log(post)
  //   await BaseDatabase.connection(UserDatabase.TABLE_POST)
  //     .insert(post)
  // }
  // public createPost = async (post: IPostInputDBDTO) => {
  //   await this.getConnection()
  //     .insert(post)
  //     .into("TABLE_POST")
  // }

  // public getUserById = async (id: string) => {
  //   const user = await BaseDatabase.getConnection(UserDatabase.TABLE_USERS)
  //     .select('*')
  //     .from(UserDatabase.TABLE_USERS)

  //   if (!user.length){
  //     return undefined
  //   }
  //   return user[0]
  // }
  // public getUserById = async (id: string) => {
  //   console.log('cheguei aqui')
  //   const user = await this.getConnection().raw(`
  //     SELECT *
  //     FROM Labook_Users
  //     WHERE (Labook_Users.id = '${id}')
  //   `)
  //     // .select('*')
  //     // .from("Labook_Users")
  //     // .where({id})
    
  //   if (!user.length){
  //     return undefined
  //   }
  //   return user[0]
  // }
  public async getUserById(): Promise<IUserDB[]> {
    console.log("cheguei aqui 1");
    const [users] = await this.getConnetion().raw(`
      SELECT *
      FROM Labook_Users
    `)
    console.log("cheguei aqui 2");
    return users
  }

  // public getAllPosts = async () => {
  //   const user:IUserDB[] = await BaseDatabase.connection().raw(
  //     `

  //     `)
  //     .select('*')
  //     .from(UserDatabase.TABLE_USERS)
  //     .where({email: email})

  //   if (!user.length){
  //     return undefined
  //   }
  //   return user[0]
  // }

  // public async getAllPosts(id: string) {
  //   const [recipe] = await BaseDatabase.connection().raw(`
  //     SELECT *
  //     FROM cookenu_recipies
  //     WHERE (cookenu_recipies.id = '${id}')
  //   `)
  //   return recipe
  // }

  // public getUserBySearch = async (input:IGetUsersInputDBDTO) => {
  //   const search = input.search;
  //   const size = input.size;
  //   const offset = input.offset;

  //   const users:IUserDB[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
  //     .select('*')
  //     .from(UserDatabase.TABLE_USERS)
  //     .where('name', 'like', `%${search}%`)
  //     .limit(size)
  //     .offset(offset)

  //   if (!users.length){
  //     return undefined
  //   }
  //   return users
  // }

  // public deleteUserById = async (id: string) => {
  //   await BaseDatabase.connection(UserDatabase.TABLE_USERS)
  //     .delete()
  //     .from(UserDatabase.TABLE_USERS)
  //     .where({id})
  // }

  // public editUserById = async (user: User) => {
  //   const userDB = this.toUserDBModel(user);

  //   await BaseDatabase
  //     .connection(UserDatabase.TABLE_USERS)
  //     .update(userDB)
  //     .where({id: userDB.id})
  // }
}