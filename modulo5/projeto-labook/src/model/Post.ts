export interface IPostDB {
  id: string,
  content: string,
  user_id: string
}

export interface ILikeDB {
  id: string,
  post_id: string,
  user_id: string
}

export interface IPostInputDBDTO {
  id: string,
  content: string,
  user_id: string,
}

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