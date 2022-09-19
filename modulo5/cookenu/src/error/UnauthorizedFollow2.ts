import { BaseError } from "./BaseError";

export class UnauthorizedFollow2 extends BaseError{
  constructor(){
    super("Você já segue este perfil", 401);
  }
}