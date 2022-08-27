import { Request, Response } from "express";
import selectTaskById from "../data/5-selectTaskById";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const id = req.params.id;
    const task = await selectTaskById(id);
    if(!task[0].length){
      res.status(200).send(task[0]);
    } else {
      res.statusCode = 400;
      throw new Error('Tarefa não encontrada!');
    }
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};