import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { ISignupInputDTO, ILoginInputDTO } from './../model/User';

export default class UserController {
  constructor(
    private userBusiness: UserBusiness
  ) { }

  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      }

      const response = await this.userBusiness.signup(input)

      res.status(201).send(response)
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message })
      }

      res.status(500).send({ message: "Erro inesperado" })
    }
  }

  public login = async (req: Request, res: Response) => {
    try {
      const input: ILoginInputDTO = {
        email: req.body.email,
        password: req.body.password
      }

      const response = await this.userBusiness.login(input)

      res.status(201).send(response)
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message })
      }

      res.status(500).send({ message: "Erro inesperado" })
    }
  }
}