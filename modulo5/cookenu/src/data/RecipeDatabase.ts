import Recipe from "../model/Recipe";
import { IRecipeDB } from "./../types";
import { BaseDataBase } from "./BaseDataBase";

export default class RecipeData extends BaseDataBase {
  async insertRecipe(recipe: Recipe) {
    await this.getConnetion().raw(`
      INSERT
      INTO cookenu_recipies (id, title, description, date, user_id)
      VALUES ('${recipe.getId()}', '${recipe.getTitle()}', '${recipe.getDescription()}', '${recipe.getDate()}', '${recipe.getUserId()}')
    `)
  }

  async getRecipeById(id: string): Promise<IRecipeDB[] | undefined> {
    const [recipe] = await this.getConnetion().raw(`
      SELECT *
      FROM cookenu_recipies
      WHERE (cookenu_recipies.id = '${id}')
    `)
    return recipe
  }
}