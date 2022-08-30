import { Request, Response } from "express"
import selectUsersByOrder from "../data/2-selectUsersByOrder"

export const getUsersByOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    let sort = req.query.sort as string // ordenar
    let order = req.query.order as string

    if( sort !== "name" && sort !== "type") {
      sort = "email"
    }
   
    if (!order || (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC")) {
      order = "ASC"
    }

    const users = await selectUsersByOrder(sort, order)

    if (!users.length) {
      res.statusCode = 404
      throw new Error("No users found")
    }

    res.status(200).send(users)

  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}