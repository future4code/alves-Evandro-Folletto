export interface IUserDB {
  id: string
  name: string,
  email: string
  password: string
}

export interface IRecipeDB {
  id: string
  title: string,
  description: string
  date: string
  user_id: string
}

export interface IFeedDB {
  id: string,
  title: string,
  description: string,
  date: string,
  user_id: string,
  name: string
}