import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const id = Number(req.params.id);
    const {name, nickname} = req.body;
    if (!name || !nickname) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }
    updateUser(id, name, nickname);
    res.status(200).send("Dados atualizados com sucesso!");
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};