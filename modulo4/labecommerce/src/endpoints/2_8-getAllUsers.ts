import { Request, Response } from "express";
import selectAllUsers from "./../data/2_8.a-selectAllUsers";
import selectAllUsersPurchases from "./../data/2_8.b-selectAllUsersPurchases";

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    
    const users = await selectAllUsers();
    if (!users.length) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }

    const usersPurchases = await selectAllUsersPurchases();
    if (!usersPurchases.length) {
      res.statusCode = 400;
      throw new Error('Não foi possível buscar as informações de compras!');
    }

    users.map( (user:any) => {
      user.purchase = [];
      usersPurchases.forEach( (user2:any) => {
        if(user.id === user2.user_id && user2.product_id !== null){
          return user.purchase.push(user2);
        }
      })
    })    

    res.status(200).send(users)
  } catch (error) {
    res.status(500).send("Internal server error")
  }
}