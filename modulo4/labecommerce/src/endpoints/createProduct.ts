import { Request, Response } from "express";
import insertProduct from "./../data/insertProduct";

export async function createProduct(req: Request, res: Response): Promise<void> {
  try {
    const {name, price, image_url} = req.body;
    if (!name || !price || !image_url) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }
    
    await insertProduct(name, price, image_url);

    res.status(200).send('Product criado com sucesso!')
  } catch (error) {
    res.status(500).send("Internal server error")
  }
}