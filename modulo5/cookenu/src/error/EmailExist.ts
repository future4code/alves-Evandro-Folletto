import { BaseError } from "./BaseError";

export class EmailExist extends BaseError{
  constructor(){
    super("Email já cadastrado", 401);
  }
}