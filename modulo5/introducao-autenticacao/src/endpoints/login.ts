import { Request, Response } from "express";
import GenerateId from "../services/GenerateId";
import generateToken from "./../services/Authenticator";
import selectUserByEmail from "./../data/selectUserByEmail";

export default async (req: Request, res: Response): Promise<any> => {
  try {
    const {email, password} = req.body;
    if(!email){
      throw new Error('É necessário preencher o campo e-mail!');
    }
    if(!email.includes('@')){
      throw new Error('É necessário ter um @ no seu endereço de email!');
    }

    const user = await selectUserByEmail(email);

    if(password !== user[0].password){
      throw new Error('Senha incorreta!');
    }

    const token = generateToken(user[0].id);

    res.status(200).send({"token": token})
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}; 