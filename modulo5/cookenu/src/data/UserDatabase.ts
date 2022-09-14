import User from "../model/User";
import { IUserDB } from "./../types";
import { BaseDataBase } from "./BaseDataBase";

export default class UserData extends BaseDataBase {
  async insertUser(user: User) {
    await this.getConnetion().raw(`
      INSERT
      INTO template (id, name, nickname, email, password, role)
      VALUES ('${user.getId()}', '${user.getName()}', '${user.getNickname()}', '${user.getEmail()}', '${user.getPassword()}', '${user.getRole()}')
    `)
  }

  async getUserByEmail(email: string): Promise<IUserDB[] | undefined> {
    const [user] = await this.getConnetion().raw(`
      SELECT *
      FROM template
      WHERE (template.email = "${email}")
    `)
    return user
  }

  async editUserById(id:string, name:string, nickname:string) {
    await this.getConnetion().raw(`
      UPDATE template
      SET template.name = '${name}', template.nickname = '${nickname}'
      WHERE (template.id = '${id}')
    `)
  }

  async getUsers(): Promise<IUserDB[]> {
    const [users] = await this.getConnetion().raw(`
      SELECT *
      FROM template
    `)
    return users
  }
}