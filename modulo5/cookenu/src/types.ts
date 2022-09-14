export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export interface IUserDB {
  id: string
  name: string,
  email: string
  password: string
}