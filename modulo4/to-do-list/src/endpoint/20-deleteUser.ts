import { Request, Response } from "express";
import userExist from "../data/0-userExist";
import deleteUser from "../data/20-deleteUser";

export default async (req:Request, res:Response): Promise<any> => {
  try {
    const userId = req.params.id;
    if(!userId){
      res.status(200).send("É necessário enviar o ID do usuário");
    }

    const user = await userExist(userId);
    if(!user.length){
      res.status(200).send("Não foi encontrado usuário com esse ID!");
    }

    await deleteUser(userId);
    res.status(200).send("Usuário deletado com sucesso!");
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message)
    } else {
      res.status(res.statusCode).send(error.message)
    }
  }
};