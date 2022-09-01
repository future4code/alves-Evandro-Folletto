import { Request, Response } from "express";
import selectProductById from "./../data/5.a-selectProductById";
import insertPurchase from "./../data/5.b-insertPurchase";

export async function createPurchase(req: Request, res: Response): Promise<void> {
  try {
    const {user_id, product_id, quantity} = req.body;
    if (!user_id || !product_id || !quantity) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }
    if(typeof(user_id) !== 'string') {
      res.statusCode = 400;
      throw new Error('O formato da variável user_id deve ser string!');
    }
    if(typeof(product_id) !== 'string') {
      res.statusCode = 400;
      throw new Error('O formato da variável product_id deve ser string!');
    }
    if(typeof(quantity) !== 'number') {
      res.statusCode = 400;
      throw new Error('O formato da variável quantity deve ser number!');
    }

    const price: number = await selectProductById(product_id);
    if (!price) {
      res.statusCode = 400;
      throw new Error('Não foram encontrados produtos com este ID');
    }
    await insertPurchase(user_id, product_id, quantity, price);

    res.status(200).send('Compra efetuada com sucesso!');
  } catch (error:any) {
    res.status(500).send(error.message);
  }
}