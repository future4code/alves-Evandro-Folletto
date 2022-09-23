import { IUserDB, User, IGetUsersInputDBDTO, IEditInputDBDTO } from "../model/User";
import { IPostInputDBDTO } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export default class PostDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users"
  public static TABLE_POST = "Labook_Posts"

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

  public createPost = async (post: IPostInputDBDTO) => {
    await this.getConnection()
      .insert(post)
      .into(PostDatabase.TABLE_POST)
  }

  async getUserById(id: string) {
    const [user] = await this.getConnection()
      .select('*')
      .from(PostDatabase.TABLE_USERS)
      .where({id})
    return user
  }

  public async getAllPosts() {
    const [posts] = await this.getConnection().raw(`
      SELECT Labook_Posts.id as idPostagem, Labook_Users.name as user_name, Labook_Posts.content, COUNT(Labook_Likes.id) as curtidasTotais
      FROM Labook_Posts
      LEFT JOIN Labook_Likes
      ON Labook_Posts.id = Labook_Likes.post_id
      LEFT JOIN Labook_Users
      ON Labook_Users.id = Labook_Posts.user_id
      GROUP BY Labook_Posts.id;
    `)
    return posts
  }

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