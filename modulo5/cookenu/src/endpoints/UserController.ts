import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import User from "../model/User";
import { InvalidCredential } from "../error/InvalidCredential";
import { MissingFields } from "../error/MissingFields";
import { EmailExist } from "../error/EmailExist";
import { NotAuthorized } from "../error/NotAuthorized";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { IUserDB, USER_ROLES } from "../types";

export default class UserEndpoint {
  public async signup(req: Request, res: Response) {
    try {
      const { name, email, password} = req.body;

      if (!name || !email || !password) {
        throw new MissingFields();
      }

      const userData = new UserDatabase();
      const userDB = await userData.getUserByEmail(email);
      if (userDB.length) {
        throw new EmailExist();
      }

      const id = new GenerateId().createId();

      const hashManager = new HashManager();
      const hash = await hashManager.hash(password);

      const user = new User(id, name, email, hash);

      await userData.insertUser(user);

      const payload: ITokenPayload = {
        id
      }

      const tokenData = new Authenticator();
      const token = tokenData.generateToken(payload);

      res.status(201).send({ message: "Usuário cadastrado com sucesso!", token })
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message })
    }
  }

  async login(req: Request, res: Response) {
    try {

      const { email, password } = req.body;
      if (!email || !password) {
        throw new MissingFields();
      }

      const userData = new UserDatabase();
      const userDB = await userData.getUserByEmail(email);
      if (!userDB) {
        throw new InvalidCredential();
      }

      const hashManager = new HashManager()
      const isPasswordCorrect = await hashManager.compare(password, userDB[0].password)
      if (!isPasswordCorrect) {
        throw new InvalidCredential();
      }

      const payload: ITokenPayload = {
        id: userDB[0].id
      }

      const tokenData = new Authenticator();
      const token = tokenData.generateToken(payload);

      res.status(200).send({ message: "Login realizado com sucesso!", token });

    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      if (!token) {
        throw new InvalidCredential();
      }
      const authenticator = new Authenticator()
      const payload = authenticator.verifyToken(token)
      
      const userData = new UserDatabase()
      const user = await userData.getUserById(payload.id)

      res.status(200).send({user: user[0]})
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message })
    }
  }

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