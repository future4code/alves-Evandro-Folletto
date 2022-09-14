import Recipe from "../model/Recipe";
// import { IRecipeDB } from "./../types";
import { BaseDataBase } from "./BaseDataBase";

export default class RecipeData extends BaseDataBase {
  async insertRecipe(recipe: Recipe) {
    await this.getConnetion().raw(`
      INSERT
      INTO cookenu_recipies (id, title, description, date, user_id)
      VALUES ('${recipe.getId()}', '${recipe.getTitle()}', '${recipe.getDescription()}', '${recipe.getDate()}', '${recipe.getUserId()}')
    `)
  }

  // async getUserByEmail(email: string): Promise<IUserDB[] | undefined> {
  //   const [user] = await this.getConnetion().raw(`
  //     SELECT *
  //     FROM cookenu_users
  //     WHERE (cookenu_users.email = "${email}")
  //   `)
  //   return user
  // }

  // async getUserById(id: string): Promise<IUserDB[] | undefined> {
  //   const [user] = await this.getConnetion().raw(`
  //     SELECT cookenu_users.id, cookenu_users.name, cookenu_users.email
  //     FROM cookenu_users
  //     WHERE (cookenu_users.id = '${id}')
  //   `)
  //   return user
  // }
}