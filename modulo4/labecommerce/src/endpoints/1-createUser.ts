import { Request, Response } from "express";
import insertUser from "./../data/1-insertUser";

export async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }
    
    await insertUser(name, email, password);

    res.status(200).send('Usuário(a) criado com sucesso!')
  } catch (error) {
    res.status(500).send("Internal server error")
  }
}