import { Request, Response } from "express";
import selectUserBySearch from "../data/8-selectUserBySearch";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const query = req.query.query as string;

    if (!query) {
      res.statusCode = 400;
      throw new Error('É necessário enviar o campo de busca!');
    }

    const users = await selectUserBySearch(query);
    console.log(!users.length)

    if(!users.length){
      res.statusCode = 400;
      throw new Error('Não foram encontrados usuários com este campo de busca!');
    } else {
      res.status(200).send(users);
    }
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};