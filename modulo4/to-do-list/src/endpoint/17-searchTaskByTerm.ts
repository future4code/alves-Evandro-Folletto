import { Request, Response } from "express";
import selectTaskByTerm from "../data/17-selectTaskByTerm";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const query = req.query.termo as string;

    console.log('entrei no 17, query =', query)

    if (!query) {
      res.statusCode = 400;
      throw new Error('É necessário enviar o campo de busca!');
    }

    const tasks = await selectTaskByTerm(query);

    if(!tasks.length){
      res.send([]);
      res.status(200).send( {tasks: []} );
    } else {
      res.status(200).send( {tasks: tasks} );
    }
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};