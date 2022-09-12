import { Request, Response } from "express";
import insertUser from "./../data/insertUser";

export default async (req: Request, res: Response): Promise<any> => {
  try {
    const {id, email, password} = req.body;
    const users = await insertUser(id, email, password);

    res.status(200).send(users)
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}; 