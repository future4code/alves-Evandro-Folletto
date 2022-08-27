import { Request, Response } from "express";
import selectUserById from "../data/2-selectUserById";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const id = req.params.id;
    const user = await selectUserById(id);
    if(!user[0].length){
      res.status(200).send(user[0]);
    } else {
      res.statusCode = 400;
      throw new Error('Usuário não encontrado');
    }
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};