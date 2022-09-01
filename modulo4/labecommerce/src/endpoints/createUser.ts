import { Request, Response } from "express";
import inserUser from "./../data/insertUser";

export async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }
    
    await inserUser(name, email, password);

    res.status(200).send('deu certo')
  } catch (error) {
    res.status(500).send("Internal server error")
  }
}