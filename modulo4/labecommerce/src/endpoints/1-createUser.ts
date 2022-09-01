import { Request, Response } from "express";
import insertUser from "./../data/1-insertUser";

export async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }
    if (typeof(name) !== 'string') {
      res.statusCode = 400;
      throw new Error('O formato da variável nome deve ser string!');
    }
    if (typeof(email) !== 'string') {
      res.statusCode = 400;
      throw new Error('O formato da variável email deve ser string!');
    }

    await insertUser(name, email, password);

    res.status(200).send('Usuário(a) criado com sucesso!')
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}