import { Request, Response } from "express";
import {getData} from "./../services/GetData";
import selectUserById from "./../data/selectUserById";

export default async (req: Request, res: Response): Promise<any> => {
  try {
    const token = req.headers.authorization as string;

    const dados = getData(token);

    const user = await selectUserById(dados.id);

    if(user.length){
      res.status(200).send({
        "id": user[0].id,
        "email": user[0].email
      })
    } else{
      res.status(200).send("não foi possível obter os dados!")
    }
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}; 