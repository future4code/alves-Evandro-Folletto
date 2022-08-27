import { Request, Response } from "express";
import selectAllTasksByUser from "../data/7-selectAllTasksByUser";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const id = req.query.creatorUserId as string;
    if (!id) {
      res.statusCode = 400;
      throw new Error('É nececssário enviar o ID!');
    }

    const task = await selectAllTasksByUser(id);
    if(!task.length){
      res.status(200).send(task);
    } else {
      res.statusCode = 400;
      throw new Error('Não foram encontradas tarefas para este ID!');
    }
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};