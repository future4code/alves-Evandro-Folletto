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
import { RecipeNotFound } from "../error/RecipeNotFound";

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

  async getRecipeById(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      if (!id) {
        throw new MissingFields();
      }
      const token = req.headers.authorization as string;
      if (!token) {
        throw new InvalidCredential();
      }
      const authenticator = new Authenticator();
      const payload = authenticator.verifyToken(token);
      
      const recipeData = new RecipeDatabase();
      const recipe = await recipeData.getRecipeById(id);
      if (!recipe.length) {
        throw new RecipeNotFound();
      }

      res.status(200).send({recipe: recipe[0]})
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message })
    }
  }
}