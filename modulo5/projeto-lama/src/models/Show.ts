export interface IShowDB {
  id: string,
  band: string,
  startsAt: Date
}

export class Show {
  private tickets: number = 0
  
  constructor(
    private id: string,
    private band: string,
    private startsAt: Date,
  ) { }

  public getId = () => {
    return this.id
  }

  public getBand = () => {
    return this.band
  }

  public getStartsAt = () => {
    return this.startsAt
  }

  public getTickets = () => {
    return this.tickets
  }

  public setId = (newId: string) => {
    this.id = newId
  }

  public setBand = (newBand: string) => {
    this.band = newBand
  }

  public setStartsAt = (newStartsAt: Date) => {
    this.startsAt = newStartsAt
  }

  public setTickets = (newTicketsAt: number) => {
    this.tickets = newTicketsAt
  }
}

export interface ICreateShowInputDTO {
  band: string,
  startsAt: string
}

// export interface ISignupOutputDTO {
//   message: string,
//   token: string
// }

// export interface ILoginInputDTO {
//   email: string,
//   password: string
// }

// export interface ILoginOutputDTO {
//   message: string,
//   token: string
// }