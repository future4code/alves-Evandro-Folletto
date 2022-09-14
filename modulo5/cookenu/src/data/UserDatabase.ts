import User from "../model/User";
import { IUserDB } from "./../types";
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

  // async editUserById(id:string, name:string, nickname:string) {
  //   await this.getConnetion().raw(`
  //     UPDATE template
  //     SET template.name = '${name}', template.nickname = '${nickname}'
  //     WHERE (template.id = '${id}')
  //   `)
  // }

  // async getUsers(): Promise<IUserDB[]> {
  //   const [users] = await this.getConnetion().raw(`
  //     SELECT *
  //     FROM template
  //   `)
  //   return users
  // }
}