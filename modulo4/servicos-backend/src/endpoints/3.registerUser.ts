import { Request, Response } from "express";
import insertUser from "../services/3.insertUser";
import getCEP from "../services/1.getCEP";

export default async function recebeCEP(req: Request, res: Response): Promise<void> {
  try {
    const { cep, logradouro, numero, complemento, bairro, cidade, estado } = req.body

    if (!cep) {
      res.statusCode = 404
      throw new Error("CEP não pode estar vazio!")
    }

    const enderecoUser:any = await getCEP(cep, logradouro, bairro);
    enderecoUser['cep'] = cep;
    enderecoUser['numero'] = numero;
    enderecoUser['complemento'] = complemento;
    
    insertUser(enderecoUser);

    res.status(200).send(enderecoUser);
  } catch (error: any) {

    if (typeof error === "string") {

      res.send(error)
    } else {

      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu =/")
    }

  }
}