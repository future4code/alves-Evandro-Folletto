import { Request, Response } from "express"
import selectUsersByType from "../data/1.b-selectUsersByType"

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const type = req.params.type as string || "";

    const users = await selectUsersByType(type)

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