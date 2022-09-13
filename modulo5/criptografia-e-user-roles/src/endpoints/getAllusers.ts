import { Request, Response } from "express";
import GenerateId from "../services/GenerateId";
import generateToken from "./../services/Authenticator";
import getData from "./../services/GetData";
import selectAllUsers from "./../data/selectAllUsers";

export default async (req: Request, res: Response): Promise<any> => {
  try {
    const users = await selectAllUsers();

    const id = GenerateId();
    const token = generateToken({id});
    const dados = getData(token);

    if (!users.length) {
      res.statusCode = 400;
      throw new Error('Não foram encontrados usuários!');
    }

    res.status(200).send(users)
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}; 