import { BaseError } from "./BaseError";

export class NotAuthorized extends BaseError{
  constructor(){
    super("Você não tem autorização", 401);
  }
}