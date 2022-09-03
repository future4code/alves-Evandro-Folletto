import { Request, Response } from "express";
import insertUser from "../data/1-insertUser";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const {name, nickname, email} = req.body;
    if (!name || !nickname || !email) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }
    insertUser(name, nickname, email);
    res.status(200).send("Usuário cadastrado com sucesso!");
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};