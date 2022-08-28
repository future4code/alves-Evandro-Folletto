import { Request, Response } from "express";
import taskExist from "../data/15.a-taskExist";
import userExist from "../data/15.b-userExist";
import userIsResponsible from "../data/15.c-userIsResponsible";
import deleteResponsibleTask from "../data/15.d-deleteResponsibleTask";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const taskId = req.params.taskId;
    const responsibleUserId = req.params.responsibleUserId;

    console.log(taskId)
    console.log(responsibleUserId)


    const task = await taskExist(taskId);
    if(!task.length){
      res.status(200).send("Não foi encontrada tarefa com esse ID!");
    }

    const user = await userExist(responsibleUserId);
    if(!user.length){
      res.status(200).send("Não foi encontrado usuário com esse ID!");
    }

    const userAndResponsible = await userIsResponsible(taskId, responsibleUserId);
    if(!userAndResponsible.length){
      res.status(200).send("Este usuário não é responsável por esta tarefa!");
    }

    await deleteResponsibleTask(taskId, responsibleUserId);
    res.status(200).send("Responsabilidade deletada com sucesso!");
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};