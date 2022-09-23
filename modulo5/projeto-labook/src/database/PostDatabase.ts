import { IUserDB, User, IGetUsersInputDBDTO, IEditInputDBDTO } from "../model/User";
import { IPostDB, ILikeDB, IPostInputDBDTO } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export default class PostDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users";
  public static TABLE_POST = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

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

  async getUserById(id: string): Promise<IUserDB[]> {
    const user:IUserDB[] = await this.getConnection()
      .select('*')
      .from(PostDatabase.TABLE_USERS)
      .where({id})
    return user
  }

  async getPostById(id: string): Promise<IPostDB[]> {
    const post:IPostDB[] = await this.getConnection()
      .select('*')
      .from(PostDatabase.TABLE_POST)
      .where({id})
    return post
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

  public deleteLikeByIdPost = async (id: string) => {
    await this.getConnection()
      .delete()
      .from(PostDatabase.TABLE_LIKES)
      .where('post_id', id)
  }

  public deletePostById = async (id: string) => {
    await this.getConnection()
      .delete()
      .from(PostDatabase.TABLE_POST)
      .where({id})
  }

  async getLike(id: string, post_id: string): Promise<ILikeDB[]> {
    const like:ILikeDB[] = await this.getConnection()
      .select('*')
      .from(PostDatabase.TABLE_LIKES)
      .where("post_id", post_id)
      .andWhere("user_id", id)
    return like
  }

  public like = async (like: ILikeDB) => {
    await this.getConnection()
      .insert(like)
      .into(PostDatabase.TABLE_LIKES)
  }
  
  public dislike = async (id: string, post_id: string) => {
    await this.getConnection()
      .delete()
      .from(PostDatabase.TABLE_LIKES)
      .where("post_id", post_id)
      .andWhere("user_id", id)
  }
}