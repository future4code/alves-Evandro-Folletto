import { Request, Response } from "express";
import selectAllProducts from "./../data/4_7-selectAllProducts";

export async function getAllProducts(req: Request, res: Response): Promise<void> {
  try {
    let order = req.query.order as string || "";
    const search = req.query.search as string || "";

    if(order && (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC")){
      order = "";
    }

    const products = await selectAllProducts(order, search);

    if (!products.length) {
      res.statusCode = 400;
      throw new Error('Não foram encontrados registros de produtos!');
    }

    res.status(200).send(products)
  } catch (error) {
    res.status(500).send(error.message)
  }
}