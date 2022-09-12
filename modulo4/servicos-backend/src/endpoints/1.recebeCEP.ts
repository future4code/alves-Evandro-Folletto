import { Request, Response } from "express";
import getCEP from "../services/1.getCEP";

export default async function recebeCEP(req: Request, res: Response): Promise<void> {
  try {
    const { cep, logradouro, bairro } = req.body

    if (!cep) {
      res.statusCode = 404
      throw new Error("CEP não pode estar vazio!")
    }
    const endereco = await getCEP(cep, logradouro, bairro);

    res.status(200).send(endereco)
  } catch (error: any) {

    if (typeof error === "string") {

      res.send(error)
    } else {

      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu =/")
    }

  }
}