import { Request, Response } from "express";
import getTasks from "../data/12_18.a-selectAllTasks";
import updateStatusTasks from "../data/12_18.b-updateStatusTasks";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const {task_ids, status} = req.body;
    
    if(!task_ids || !status ){
      res.statusCode = 400;
      throw new Error('Existe dados faltantes!');
    }

    const tasks = await getTasks();
    if(!tasks.length){
      res.statusCode = 400;
      throw new Error("Não foram encontradas tarefas cadastrados!");
    }

    for(let task of task_ids){
      let igual = false;
      for(let task_ref of tasks){
        if(Number(task) === Number(task_ref.TaskId)) igual = true
      }
      if(!igual){
        res.statusCode = 400;
        throw new Error(`A tarefa de ID ${task} não está cadastrada!`);
      }
    }

    for(let task of task_ids){
      await updateStatusTasks(task, status);
    }

    res.status(200).send("Status atualizado(s) com sucesso!");
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};