import { BaseError } from "./BaseError";

export class UserNotExist extends BaseError{
  constructor(){
    super("O usuário indicado não foi encontrado", 404);
  }
}