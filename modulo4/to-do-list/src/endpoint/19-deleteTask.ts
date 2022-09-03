import { Request, Response } from "express";
import taskExist from "../data/0-taskExist";
import deleteTask from "../data/19-deleteTask";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const taskId = req.params.id;

    const task = await taskExist(taskId);
    if(!task.length){
      res.status(200).send("Não foi encontrada tarefa com esse ID!");
    }

    await deleteTask(taskId);
    res.status(200).send("Responsabilidade deletada com sucesso!");
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};