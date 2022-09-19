import { BaseError } from "./BaseError";

export class UnauthorizedFollow extends BaseError{
  constructor(){
    super("Não é permitido dar follow / unfollow seguir a si mesmo", 401);
  }
}