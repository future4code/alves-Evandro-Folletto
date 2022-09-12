import { Request, Response } from "express"
import selectUsersByPage from "../data/4-selectUsersByFilters"

export const getUsersByFilters = async (req: Request, res: Response): Promise<void> => {
  try {

    const name = req.query.name as string || "";
    const type = req.query.type as string || "";

    let sort = req.query.sort as string // ordenar
    let order = req.query.order as string

    if( sort !== "name" && sort !== "type") {
      sort = "name"
    }
   
    if (!order || (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC")) {
      order = "DESC"
    }

    let page = Number(req.query.page)

    if (page < 1 || isNaN(page)) {
      page = 1
    }
    const size = 5;
    const offset = size * (page - 1);

    const users = await selectUsersByPage(name, type, sort, order, size, offset)

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