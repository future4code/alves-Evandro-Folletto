import { Request, Response } from "express";
import selectTasksByStatus from "../data/13-selectTasksByStatus";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const status = req.query.status as string;
    if(!status){
      res.statusCode = 400;
      throw new Error('Existe dados faltantes!');
    }
    const tasks = await selectTasksByStatus(status);
    tasks.map( (task:any) => {
      return task.limitDate = `${task.limitDate.getDate()}/${task.limitDate.getMonth() + 1}/${task.limitDate.getFullYear()}`
    })
    res.status(200).send({tasks: tasks});
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};