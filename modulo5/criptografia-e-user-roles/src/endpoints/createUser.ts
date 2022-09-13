import { Request, Response } from "express";
import { GenerateId } from "../services/GenerateId";
import { generateHash } from "../services/HashManager";
import { generateToken } from "./../services/Authenticator";
import insertUser from "./../data/insertUser";

export default async (req: Request, res: Response): Promise<any> => {
  try {
    const {email, password, role} = req.body;
    if(!email || !role){
      throw new Error('Existem dados faltantes!');
    }
    if(!email.includes('@')){
      throw new Error('É necessário ter um @ no seu endereço de email!');
    }
    if(password.length < 6){
      throw new Error('A senha deve possuir pelo menos 6 caracteres!');
    }

    const id = GenerateId();

    const hash = await generateHash(password);

    await insertUser(id, email, hash, role);

    const token = generateToken({id, role});

    res.status(200).send({"token": token})
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}; 