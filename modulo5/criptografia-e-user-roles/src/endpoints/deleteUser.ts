import { Request, Response } from "express";
import { GenerateId } from "../services/GenerateId";
import { generateHash } from "../services/HashManager";
import { generateToken } from "./../services/Authenticator";
import { verifyToken } from "./../services/Authenticator";
import insertUser from "./../data/insertUser";
import selectUserById from "./../data/selectUserById";
import deleteUserById from "./../data/deleteUserById";

export default async (req: Request, res: Response): Promise<any> => {
  try {
    const token = req.headers.authorization as string;
    const id = req.params.id;
    
    const dados = verifyToken(token);

    const user = await selectUserById(dados.id);

    if(user[0].role !== "ADMIN"){
      throw new Error("Unauthorized");
    }

    const userDelete = await selectUserById(id);
    if(!userDelete){
      throw new Error("Usuário que deseja deletar não foi encontrado");
    }

    await deleteUserById(userDelete[0].id);

    res.status(200).send("Usuário deletado com sucesso!")
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}; 