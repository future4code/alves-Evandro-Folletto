import { USER_ROLES } from "../types";

export default class User {
  constructor(
    private id: string,
    private name: string,
    private nickname: string,
    private email: string,
    private password: string,
    private role: USER_ROLES = USER_ROLES.NORMAL
  ) {}

  public getId() {
    return this.id
  }

  public getName() {
    return this.name
  }

  public getNickname() {
    return this.nickname
  }

  public getEmail() {
    return this.email
  }

  public getPassword() {
    return this.password
  }

  public getRole = () => {
    return this.role
  }
}