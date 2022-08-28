import { Request, Response } from "express";
import taskExist from "../data/12.a-taskExist";
import updateStatusById from "../data/12.b-updateStatusById";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const id = req.params.id;
    const {status} = req.body;
    
    if(!status || !id ){
      res.statusCode = 400;
      throw new Error('Existe dados faltantes!');
    }

    const task = await taskExist(id);
    if(!task.length){
      res.status(200).send("Não foi encontrada tarefa com esse ID!");
    }

    await updateStatusById(id, status);
    res.status(200).send("Status atualizado com sucesso!");
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};