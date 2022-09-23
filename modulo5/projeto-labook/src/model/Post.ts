// export enum USER_ROLES {
//   NORMAL = "NORMAL",
//   ADMIN = "ADMIN"
// }

export interface IPostDB {
  id: string,
  content: string,
  user_id: string
}

// export interface ISignupInputDTO {
//   name: string,
//   email: string,
//   password: string,
//   role: USER_ROLES
// }

// export interface IEditInputDTO {
//   id_edit: string,
//   token: string,
//   name: string,
//   email: string,
//   password: string
// }

export interface IPostInputDBDTO {
  id: string,
  content: string,
  user_id: string,
}

// export interface ILoginInputDTO {
//   email: string,
//   password: string
// }

// export interface IGetUsersInputDTO {
//   token: string,
//   search: string,
//   page: number,
//   size: number
// }

// export interface IGetUsersOutputDTO {
//   id: string,
//   name: string,
//   email: string
// }

// export interface IGetUsersInputDBDTO {
//   search: string,
//   size: number,
//   offset: number
// }

// export interface IDeleteUsersInputDTO {
//   token: string,
//   id: string
// }

export class Post {
  constructor(
    private id: string,
    private content: string,
    private user_id: string,
    private likes: number = 0
  ) { }

  public getId = () => {
    return this.id
  }

  public getContent = () => {
    return this.content
  }

  public getUserId = () => {
    return this.user_id
  }

  public getLikes = () => {
    return this.likes
  }
}