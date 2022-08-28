import { Request, Response } from "express";
import selectTaskAndYourResponsibles from "../data/11.a-selectTaskAndYourResponsibles";
import selectResponsiblesById from "../data/11.b-selectResponsiblesById";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const id = req.params.id;
    const task = await selectTaskAndYourResponsibles(id);
    const responsibles = await selectResponsiblesById(id);
    
    if(!task.length){
      res.statusCode = 400;
      throw new Error('Não foi encontrada tarefa com este ID!');
    }
    task[0].limitDate = `${task[0].limitDate.getDate()}/${task[0].limitDate.getMonth() + 1}/${task[0].limitDate.getFullYear()}`

    task[0].responsibleUsers = responsibles;
    res.status(200).send(task[0]);
    // ou
    // const taskAndYourResponsibles = {...task[0], responsibleUsers:responsibles}
    // res.status(200).send(taskAndYourResponsibles);
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};