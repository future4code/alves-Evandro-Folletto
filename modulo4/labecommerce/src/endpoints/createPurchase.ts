import { Request, Response } from "express";
import insertPurchase from "./../data/insertPurchase";
import selectProductById from "./../data/selectProductById";

export async function createPurchase(req: Request, res: Response): Promise<void> {
  try {
    const {user_id, product_id, quantity} = req.body;
    if (!user_id || !product_id || !quantity) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }

    const price: number = await selectProductById(product_id);
    if (!price) {
      res.statusCode = 400;
      throw new Error('Não foram encontrados produtos com este ID');
    }
    await insertPurchase(user_id, product_id, quantity, price);

    res.status(200).send('Product criado com sucesso!');
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}