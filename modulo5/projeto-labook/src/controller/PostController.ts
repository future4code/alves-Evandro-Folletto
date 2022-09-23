import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { ISignupInputDTO, ILoginInputDTO, IGetUsersInputDTO, IDeleteUsersInputDTO, IEditInputDTO } from './../model/User';

export default class PostController {
  constructor(
    private postBusiness: PostBusiness
  ) { }

  public create = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const content = req.body.content;

      const response = await this.postBusiness.create(token, content);

      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message })
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  }

  public getAllPosts = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const response = await this.postBusiness.getAllPosts(token);

      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message })
      }

      res.status(500).send({ message: "Erro inesperado" })
    }
  }

  public delete = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id = req.params.id;

      const response = await this.postBusiness.delete(token, id);

      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message })
      }

      res.status(500).send({ message: "Erro inesperado" })
    }
  }

  // public edit = async (req: Request, res: Response) => {
  //   try {
  //     const input: IEditInputDTO = {
  //       id_edit: req.params.id,
  //       token: req.headers.authorization as string,
  //       name: req.body.name,
  //       email: req.body.email,
  //       password: req.body.password
  //     }

  //     const response = await this.userBusiness.edit(input);

  //     res.status(201).send(response);
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       return res.status(400).send({ message: error.message })
  //     }

  //     res.status(500).send({ message: "Erro inesperado" })
  //   }
  // }
}