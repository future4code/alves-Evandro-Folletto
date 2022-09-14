export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export interface IUserDB {
  id: string
  name: string,
  nickname: string,
  email: string
  password: string
  role: USER_ROLES
}