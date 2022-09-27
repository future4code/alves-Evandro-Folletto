import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";

export default class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const input: any = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }

      const userBusiness = new UserBusiness()
      const response = await userBusiness.signup(input)

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
      const input: any = {
        email: req.body.email,
        password: req.body.password
      }

      const userBusiness = new UserBusiness()
      const response = await userBusiness.login(input)

      res.status(201).send(response)
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message })
      }

      res.status(500).send({ message: "Erro inesperado" })
    }
  }

  public getUsers = async (req: Request, res: Response) => {
    try {
      const token: string = req.headers.authorization as string;
      const search: string = req.query.search as string | '';
      const page: number = Number(req.query.page) && Number(req.query.page) > 0 ? Number(req.query.page) : 1;
      const size: number = Number(req.query.size) && Number(req.query.size) > 0 ? Number(req.query.size) : 5;

      const userBusiness = new UserBusiness()
      const response = await userBusiness.getUsers(token, search, page, size)

      res.status(201).send(response)
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message })
      }

      res.status(500).send({ message: "Erro inesperado" })
    }
  }

  public delete = async (req: Request, res: Response) => {
    try {
      const token: string = req.headers.authorization as string;
      const id: string = req.params.id;

      const userBusiness = new UserBusiness();
      await userBusiness.delete(token, id);

      res.status(201).send("Usuário deletado com sucesso!")
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message })
      }

      res.status(500).send({ message: "Erro inesperado" })
    }
  }
}