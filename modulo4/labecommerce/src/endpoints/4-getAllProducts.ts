import { Request, Response } from "express";
import selectAllProducts from "./../data/4-selectAllProducts";

export async function getAllProducts(req: Request, res: Response): Promise<void> {
  try {
    
    const products = await selectAllProducts();

    if (!products.length) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }

    res.status(200).send(products)
  } catch (error) {
    res.status(500).send("Internal server error")
  }
}