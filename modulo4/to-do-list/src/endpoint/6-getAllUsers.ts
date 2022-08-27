import { Request, Response } from "express";
import selectAllUsers from "../data/6-selectAllUsers";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const users = await selectAllUsers();
    if(!users[0].length){
      res.status(200).send(users);
    } else {
      res.statusCode = 400;
      throw new Error('Não foram encontrados usuário cadastrados!');
    }
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};