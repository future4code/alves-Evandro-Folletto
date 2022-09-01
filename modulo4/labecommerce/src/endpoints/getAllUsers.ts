import { Request, Response } from "express";
import selectAllUsers from "./../data/selectAllUsers";

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    
    const users = await selectAllUsers();

    if (!users.length) {
      res.statusCode = 400;
      throw new Error('Existem dados faltantes!');
    }

    res.status(200).send(users)
  } catch (error) {
    res.status(500).send("Internal server error")
  }
}