import { Request, Response } from "express";
import insertProduct from "../data/3-insertProduct";

export async function createProduct(req: Request, res: Response): Promise<void> {
  try {
    const {name, price, image_url} = req.body;
    if (!name || !price || !image_url) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }
    if (typeof(name) !== 'string') {
      res.statusCode = 400;
      throw new Error('O formato da variável nome deve ser string!');
    }
    if (typeof(price) !== 'number') {
      res.statusCode = 400;
      throw new Error('O formato da variável preço deve ser number!');
    }
    if (typeof(image_url) !== 'string') {
      res.statusCode = 400;
      throw new Error('O formato da variável image_url deve ser string!');
    }
    
    await insertProduct(name, price, image_url);

    res.status(200).send('Produto criado com sucesso!')
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}