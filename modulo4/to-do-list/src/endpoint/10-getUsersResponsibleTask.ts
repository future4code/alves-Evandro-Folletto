import { Request, Response } from "express";
import getUsersResponsibleTask from "../data/10-selectUsersResponsibleTask";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const id = req.params.id;
    const users = await getUsersResponsibleTask(id);
    if(!users.length){
      res.statusCode = 400;
      throw new Error('Não foram encontradas tarefas para este ID!');
    } else {
      res.status(200).send(users[0]);
    }
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};