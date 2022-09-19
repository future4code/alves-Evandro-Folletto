import { BaseError } from "./BaseError";

export class InvalidCredential extends BaseError{
  constructor(){
    super("Está faltando parâmetros", 404);
  }
}