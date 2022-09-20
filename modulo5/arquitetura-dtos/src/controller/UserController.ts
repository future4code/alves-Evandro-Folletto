import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { ISignupInputDTO, ILoginInputDTO, IGetUsersInputDTO, IDeleteUsersInputDTO, IEditInputDTO } from './../model/User';

export default class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
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
      const input: ILoginInputDTO = {
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
      const input: IGetUsersInputDTO = {
        token: req.headers.authorization as string,
        search: req.query.search as string | '',
        page: Number(req.query.page) && Number(req.query.page) > 0 ? Number(req.query.page) : 1,
        size: Number(req.query.size) && Number(req.query.size) > 0 ? Number(req.query.size) : 5
      } 

      const userBusiness = new UserBusiness()
      const response = await userBusiness.getUsers(input)

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
      const input: IDeleteUsersInputDTO = {
        token: req.headers.authorization as string,
        id: req.params.id
      } 

      const userBusiness = new UserBusiness();
      const response = await userBusiness.delete(input);

      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message })
      }

      res.status(500).send({ message: "Erro inesperado" })
    }
  }

  public edit = async (req: Request, res: Response) => {
    try {
      const input: IEditInputDTO = {
        id_edit: req.params.id,
        token: req.headers.authorization as string,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }

      const userBusiness = new UserBusiness();
      const response = await userBusiness.edit(input);

      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message })
      }

      res.status(500).send({ message: "Erro inesperado" })
    }
  }
}