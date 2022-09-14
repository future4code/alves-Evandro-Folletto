import { Request, Response } from "express";
import RecipeDatabase from "../data/RecipeDatabase";
import Recipe from "../model/Recipe";
import { InvalidCredential } from "../error/InvalidCredential";
import { MissingFields } from "../error/MissingFields";
import { EmailExist } from "../error/EmailExist";
import { NotAuthorized } from "../error/NotAuthorized";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { IUserDB } from "../types";

export default class RecipeEndpoint {
  public async create(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      if (!token) {
        throw new InvalidCredential();
      }

      const { title, description} = req.body;
      if (!title || !description) {
        throw new MissingFields();
      }
      
      const id = new GenerateId().createId();
      
      const authenticator = new Authenticator();
      const payload = authenticator.verifyToken(token);

      const data = new Date();
      const day = data.getDate() > 9 ? data.getDate() : '0'+data.getDate();
      const month = (data.getMonth()+1) > 9 ? data.getMonth() : '0'+(data.getMonth()+1);
      const year = data.getFullYear();
      const date = `${year}-${month}-${day}`;

      const recipe = new Recipe(id, title, description, date, payload.id);
      
      const recipeData = new RecipeDatabase();
      await recipeData.insertRecipe(recipe);

      res.status(201).send("Receita cadastrada com sucesso!");
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message })
    }
  }

  // async login(req: Request, res: Response) {
  //   try {

  //     const { email, password } = req.body;
  //     if (!email || !password) {
  //       throw new MissingFields();
  //     }

  //     const userData = new UserDatabase();
  //     const userDB = await userData.getUserByEmail(email);
  //     if (!userDB) {
  //       throw new InvalidCredential();
  //     }

  //     const hashManager = new HashManager()
  //     const isPasswordCorrect = await hashManager.compare(password, userDB[0].password)
  //     if (!isPasswordCorrect) {
  //       throw new InvalidCredential();
  //     }

  //     const payload: ITokenPayload = {
  //       id: userDB[0].id
  //     }

  //     const tokenData = new Authenticator();
  //     const token = tokenData.generateToken(payload);

  //     res.status(200).send({ message: "Login realizado com sucesso!", token });

  //   } catch (error: any) {
  //     res.status(error.statusCode || 500).send({ message: error.message });
  //   }
  // }

  // async getProfile(req: Request, res: Response) {
  //   try {
  //     const token = req.headers.authorization as string;
  //     if (!token) {
  //       throw new InvalidCredential();
  //     }
  //     const authenticator = new Authenticator()
  //     const payload = authenticator.verifyToken(token)
      
  //     const userData = new UserDatabase()
  //     const user = await userData.getUserById(payload.id)

  //     res.status(200).send({user: user[0]})
  //   } catch (error: any) {
  //     res.status(error.statusCode || 500).send({ message: error.message })
  //   }
  // }

  // async getProfileById(req: Request, res: Response) {
  //   try {
  //     const id = req.params.id as string;
  //     if (!id) {
  //       throw new MissingFields();
  //     }
  //     const token = req.headers.authorization as string;
  //     if (!token) {
  //       throw new InvalidCredential();
  //     }
  //     const authenticator = new Authenticator()
  //     const payload = authenticator.verifyToken(token)
      
  //     const userData = new UserDatabase()
  //     const user = await userData.getUserById(id)

  //     res.status(200).send({user: user[0]})
  //   } catch (error: any) {
  //     res.status(error.statusCode || 500).send({ message: error.message })
  //   }
  // }

  // async edit(req: Request, res: Response) {
  //   try {
  //     const token = req.headers.authorization as string;
  //     if (!token) {
  //       throw new InvalidCredential();
  //     }
  //     const { name, nickname } = req.body;
      
  //     const authenticator = new Authenticator()
  //     const payload = authenticator.verifyToken(token)
      
  //     const userData = new UserDatabase()
  //     await userData.editUserById(payload.id, name, nickname)

  //     res.status(200).send("Atualizado com sucesso!")

  //   } catch (error: any) {
  //     res.status(error.statusCode || 500).send({ message: error.message })
  //   }
  // }

  // async getUsers(req: Request, res: Response) {
  //   try {
  //     const token = req.headers.authorization
  //     if (!token) {
  //       throw new InvalidCredential();
  //     }

  //     const authenticator = new Authenticator();
  //     const payload = authenticator.verifyToken(token)

  //     if (payload.role !== USER_ROLES.ADMIN) {
  //       throw new NotAuthorized();
  //     }

  //     const userData = new UserDatabase();
  //     const users = await userData.getUsers();

  //     res.status(200).send({ users: users });
  //   } catch (error: any) {
  //     res.status(error.statusCode || 500).send({ message: error.message })
  //   }
  // }
}