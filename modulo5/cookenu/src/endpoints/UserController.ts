import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import User from "../model/User";
import { InvalidCredential } from "../error/InvalidCredential";
import { MissingFields } from "../error/MissingFields";
import { EmailExist } from "../error/EmailExist";
import { UnauthorizedFollow } from "../error/UnauthorizedFollow";
import { UserNotExist } from "../error/UserNotExist";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { IUserDB } from "../types";

export default class UserEndpoint {
  public async signup(req: Request, res: Response) {
    try {
      const { name, email, password, role} = req.body;

      if (!name || !email || !password || !role) {
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

      const user = new User(id, name, email, hash, role);

      await userData.insertUser(user);

      const payload: ITokenPayload = {
        id,
        role
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
        id: userDB[0].id,
        role: userDB[0].role
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

  async getProfileById(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      if (!id) {
        throw new MissingFields();
      }
      const token = req.headers.authorization as string;
      if (!token) {
        throw new InvalidCredential();
      }
      const authenticator = new Authenticator()
      const payload = authenticator.verifyToken(token)
      
      const userData = new UserDatabase()
      const user = await userData.getUserById(id)

      res.status(200).send({user: user[0]})
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message })
    }
  }

  async follow(req: Request, res: Response) {
    try {
      const { userToFollowId } = req.body;
      if (!userToFollowId) {
        throw new MissingFields();
      }

      const userData = new UserDatabase();

      const user = await userData.getUserById(userToFollowId);
      if (!user.length) {
        throw new UserNotExist();
      }

      const token = req.headers.authorization as string;
      if (!token) {
        throw new InvalidCredential();
      }
      const authenticator = new Authenticator();
      const payload = authenticator.verifyToken(token);

      if(payload.id === userToFollowId){
        throw new UnauthorizedFollow();
      }

      const id = new GenerateId().createId();

      await userData.insertFollow(id, payload.id, userToFollowId);

      res.status(200).send({message: "Followed successfully"})
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message })
    }
  }

  async unfollow(req: Request, res: Response) {
    try {
      const { userToUnfollowId } = req.body;
      if (!userToUnfollowId) {
        throw new MissingFields();
      }

      const userData = new UserDatabase();

      const user = await userData.getUserById(userToUnfollowId);
      if (!user.length) {
        throw new UserNotExist();
      }

      const token = req.headers.authorization as string;
      if (!token) {
        throw new InvalidCredential();
      }
      const authenticator = new Authenticator()
      const payload = authenticator.verifyToken(token)

      if(payload.id === userToUnfollowId){
        throw new UnauthorizedFollow();
      }

      await userData.deleteFollow(payload.id, userToUnfollowId)

      res.status(200).send({message: "Unfollowed successfully"})
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message })
    }
  }

  async feed(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      if (!token) {
        throw new InvalidCredential();
      }

      const authenticator = new Authenticator()
      const payload = authenticator.verifyToken(token)
      
      const userData = new UserDatabase();
      const feed = await userData.recipiesFeed(payload.id)

      feed.forEach( (data:any) => {
        const [year, month, day] = data.date.split('-');
        data.date = `${day}/${month}/${year}`
      })

      res.status(200).send({recipies: feed})
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message })
    }
  }
}