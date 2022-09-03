import { Request, Response } from "express";
import insertTask from "../data/4-insertTask";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const {title, description, limitDate, creatorUserId} = req.body;
    if (!title || !description || !limitDate || !creatorUserId) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }
    const [day, month, year] = limitDate.split('/')
    const limitDateFormatted = new Date(`${year}-${month}-${day}`)
    insertTask(title, description, limitDateFormatted, creatorUserId);
    res.status(200).send("Tarefa cadastrada com sucesso!");
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};