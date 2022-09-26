export interface IUser {
  id: string,
  name: string,
  age: number
}

export const SearchAstrodev = ():IUser[] => {
  const users: IUser[] = [
    {
      id: "1",
      name: "Alice",
      age: 20
    },
    {
      id: "2",
      name: "Bob",
      age: 18
    },
    {
      id: "3",
      name: "Astrodev",
      age: 50
    }
  ]

  return users
}