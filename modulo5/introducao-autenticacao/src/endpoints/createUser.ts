import { Request, Response } from "express";
import GenerateId from "../services/GenerateId";
import generateToken from "./../services/Authenticator";
import insertUser from "./../data/insertUser";

export default async (req: Request, res: Response): Promise<any> => {
  try {
    const {email, password} = req.body;
    if(!email){
      throw new Error('É necessário preencher o campo e-mail!');
    }
    if(!email.includes('@')){
      throw new Error('É necessário ter um @ no seu endereço de email!');
    }
    if(password.length < 6){
      throw new Error('A senha deve possuir pelo menos 6 caracteres!');
    }

    const id = GenerateId();

    await insertUser(id, email, password);

    const token = generateToken({id});
    console.log(token);

    res.status(200).send({"token": token})
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}; 