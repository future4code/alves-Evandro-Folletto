import User from "../model/User";
import { IUserDB } from "./../types";
import { IFeedDB } from "./../types";
import { BaseDataBase } from "./BaseDataBase";

export default class UserData extends BaseDataBase {
  async insertUser(user: User) {
    await this.getConnetion().raw(`
      INSERT
      INTO cookenu_users (id, name, email, password)
      VALUES ('${user.getId()}', '${user.getName()}', '${user.getEmail()}', '${user.getPassword()}')
    `)
  }

  async getUserByEmail(email: string): Promise<IUserDB[] | undefined> {
    const [user] = await this.getConnetion().raw(`
      SELECT *
      FROM cookenu_users
      WHERE (cookenu_users.email = "${email}")
    `)
    return user
  }

  async getUserById(id: string): Promise<IUserDB[] | undefined> {
    const [user] = await this.getConnetion().raw(`
      SELECT cookenu_users.id, cookenu_users.name, cookenu_users.email
      FROM cookenu_users
      WHERE (cookenu_users.id = '${id}')
    `)
    return user
  }

  async insertFollow(id:string, id_origin: string, userToFollowId: string) {
    await this.getConnetion().raw(`
      INSERT
      INTO cookenu_followers (id, id_origin, id_destination)
      VALUES ('${id}', '${id_origin}', '${userToFollowId}')
    `)
  }

  async deleteFollow(id_origin: string, userToFollowId: string) {
    await this.getConnetion().raw(`
      DELETE
      FROM cookenu_followers
      WHERE (cookenu_followers.id_origin = '${id_origin}' AND cookenu_followers.id_destination = '${userToFollowId}')
    `)
  }

  async recipiesFeed(id: string): Promise<IFeedDB[]> {
    const [feed] = await this.getConnetion().raw(`
      SELECT cookenu_recipies.id, cookenu_recipies.title, cookenu_recipies.description, cookenu_recipies.date, cookenu_recipies.user_id, cookenu_users.name
      FROM cookenu_followers
      JOIN cookenu_recipies
      ON cookenu_followers.id_destination = cookenu_recipies.user_id
      JOIN cookenu_users
      ON cookenu_users.id = cookenu_recipies.user_id
      WHERE (cookenu_followers.id_origin = '${id}');
    `)
    return feed
  }
}