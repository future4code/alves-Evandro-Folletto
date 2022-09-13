import { Request, Response } from "express";
import { generateToken } from "./../services/Authenticator";
import { compare } from "../services/HashManager";
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

    const isPasswordCorrect = await compare(password, user.password);

    if(!isPasswordCorrect){
      throw new Error('Senha incorreta!');
    }

    const token = generateToken({id:user.id});

    res.status(200).send({"token": token})
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}; 