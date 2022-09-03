import { Request, Response } from "express";
import taskExist from "../data/0-taskExist";
import responsibleTask from "../data/9_16-responsibleTask";
import getUsers from "../data/6-selectAllUsers";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const {task_id, responsible_user_id} = req.body;

    if(!task_id || !responsible_user_id) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }

    const task = await taskExist(task_id);
    if(!task.length){
      res.statusCode = 400;
      throw new Error("Não foi encontrada tarefa com esse ID!");
    }

    const users = await getUsers();
    if(!users.length){
      res.statusCode = 400;
      throw new Error("Não foram encontrados usuários cadastrados!");
    }

    for(let user_id of responsible_user_id){
      let igual = false;
      for(let user_ref of users){
        if(Number(user_id) === Number(user_ref.id)) igual = true
      }
      if(!igual){
        res.statusCode = 400;
        throw new Error(`O ID ${user_id} não está cadastrado!`);
      }
    }

    for(let user of responsible_user_id){
      await responsibleTask(task_id, user);
    }

    res.status(200).send("Responsabilidade atribuída(as) com sucesso!");
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};