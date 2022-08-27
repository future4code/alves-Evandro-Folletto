import { Console } from "console";
import { Request, Response } from "express";
import responsibleTask from "../data/9-responsibleTask";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const {task_id, responsible_user_id} = req.body;
    if (!task_id || !responsible_user_id) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }
    responsibleTask(task_id, responsible_user_id);
    res.status(200).send("Responsabilidade atribuída com sucesso!");
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};