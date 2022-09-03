import { Request, Response } from "express";
import selectTasksDelayed from "../data/14-selectTasksDelayed";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const tasks = await selectTasksDelayed();
    const dataAtual = new Date().getTime();

    const tasksDelayed = tasks.filter( (task:any) => {
      const currentTask = task.limitDate.getTime();
      return currentTask < dataAtual
    });

    tasksDelayed.map( (task:any) => {
      return task.limitDate = `${task.limitDate.getDate()}/${task.limitDate.getMonth() + 1}/${task.limitDate.getFullYear()}`
    })

    res.status(200).send({tasks:tasksDelayed});
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};