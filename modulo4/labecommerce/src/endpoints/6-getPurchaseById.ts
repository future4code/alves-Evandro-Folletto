import { Request, Response } from "express";
import selectUserById from "./../data/6.a-selectUserById";
import selectPurchaseById from "./../data/6.b-selectPurchaseById";

export async function getPurchaseById(req: Request, res: Response): Promise<void> {
  try {
    const id = req.params.id as string;
    if(!id){
      res.statusCode = 400;
      throw new Error('Existe dados faltantes!');
    }

    const user = await selectUserById(id);
    if (!user.length) {
      res.statusCode = 400;
      throw new Error('O ID do usuário não existe');
    }

    const purchases:[] = await selectPurchaseById(id);
    console.log(!purchases.length)
    if (!purchases.length) {
      res.statusCode = 400;
      throw new Error('Não foram encontrados registros de compra para este ID');
    }

    res.status(200).send(purchases);
  } catch (error:any) {
    res.status(500).send(error.message);
  }
}