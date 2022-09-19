import { BaseError } from "./BaseError";

export class RecipeNotFound extends BaseError{
  constructor(){
    super("Receita não encontrada", 404);
  }
}